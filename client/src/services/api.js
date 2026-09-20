const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

/**
 * Check whether the real FastAPI verification engine is currently running.
 */
export async function checkBackendStatus() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${API_BASE_URL}/health`, { signal: controller.signal });
    clearTimeout(timeoutId);
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Send an uploaded image file and user claim to the real FastAPI POST /verify endpoint.
 */
export async function verifyWithClaimLens(imageFile, claimText) {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('claim', claimText);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const res = await fetch(`${API_BASE_URL}/verify`, {
      method: 'POST',
      body: formData,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }

    const data = await res.json();
    return mapBackendResponseToProductUI(data, claimText);
  } catch (err) {
    console.warn("Backend verification error:", err);
    return {
      error: "Verification service unavailable.",
      detail: "Start the ClaimLens verification server to analyze evidence."
    };
  }
}

/**
 * Map real FastAPI backend evidence matrix and decomposition into clean, human-readable product structure.
 */
function mapBackendResponseToProductUI(backendData, _originalClaim) {
  const verdictCode = backendData.verdict_code || '';
  const matrix = backendData.evidence_matrix || {};
  const decomp = backendData.claim_decomposition || {};
  const rawWhyList = backendData.why_verdict || [];
  const timeline = backendData.timeline || {};

  // 1. Determine Product Status (Requirements 7 & 10)
  let status = "INSUFFICIENT EVIDENCE";
  let statusVariant = "neutral";

  if (verdictCode.includes("SUPPORTED_CLAIM")) {
    status = "LIKELY SUPPORTED";
    statusVariant = "positive";
  } else if (verdictCode.includes("MISLEADING_CLAIM") || verdictCode.includes("NOT_SUPPORTED")) {
    status = "NOT SUPPORTED";
    statusVariant = "warning";
  } else if (verdictCode.includes("SYNTHETIC") || verdictCode.includes("TAMPER")) {
    status = "LIKELY MANIPULATED";
    statusVariant = "negative";
  }

  // 2. What We Found: 4 Separate Dimensions (Requirements 10 & 11 - NO SINGLE FAKE SCORE)
  const mediaAuthScore = matrix.media_authenticity?.score ?? 85;
  const claimMatchScore = matrix.claim_consistency?.score ?? 50;

  const findings = [
    {
      title: "Media authenticity",
      status: mediaAuthScore > 75 ? "Likely authentic" : "Synthetic indicators detected",
      statusType: mediaAuthScore > 75 ? "positive" : "negative",
      explanation: mediaAuthScore > 75 
        ? "The image does not show strong indicators of AI-generated content."
        : "The image exhibits visual and frequency patterns typical of synthetic generation."
    },
    {
      title: "Claim/image consistency",
      status: claimMatchScore > 70 ? "High consistency" : (claimMatchScore > 40 ? "Low consistency" : "Conflicting evidence"),
      statusType: claimMatchScore > 70 ? "positive" : (claimMatchScore > 40 ? "neutral" : "negative"),
      explanation: claimMatchScore > 70
        ? "The visual content is consistent with the event described in the claim."
        : "The visual content does not sufficiently match the event described in the claim."
    },
    {
      title: "Available contextual evidence",
      status: matrix.metadata_support === "STRONG" ? "Corroborated" : "Insufficient evidence",
      statusType: matrix.metadata_support === "STRONG" ? "positive" : "neutral",
      explanation: matrix.metadata_support === "STRONG"
        ? "Contextual signals and timestamps align with the asserted timeline."
        : "No reliable contextual information was available to confirm the stated date."
    },
    {
      title: "Manipulation indicators",
      status: matrix.manipulation_signal === "HIGH" ? "Manipulation detected" : "Low indicators",
      statusType: matrix.manipulation_signal === "HIGH" ? "negative" : "positive",
      explanation: matrix.manipulation_signal === "HIGH"
        ? "Localized compression or edge splicing irregularities detected in the image canvas."
        : "No significant localized compression anomalies or image splicing detected."
    }
  ];

  // 3. Clean Claim Breakdown: WHAT, WHERE, WHEN (Requirement 13)
  const isTimeMismatch = timeline.temporal_consistency === "MISMATCH" || timeline.anomaly_detected;
  const isTimeConsistent = timeline.temporal_consistency === "CONSISTENT";

  const breakdown = {
    what: {
      label: decomp.what || "Asserted Event",
      supported: claimMatchScore > 50,
      note: claimMatchScore > 50 ? "Visual subject aligns with the asserted event" : "Visual content conflicts with asserted event"
    },
    where: {
      label: decomp.where || "Specified Location",
      supported: decomp.where && !decomp.where.includes("Unspecified") ? (claimMatchScore > 40 ? true : false) : null,
      note: decomp.where && !decomp.where.includes("Unspecified") ? "Location mentioned in claim" : "No specific geographic landmarks corroborated"
    },
    when: {
      label: decomp.when || "Specified Date",
      supported: isTimeConsistent ? true : (isTimeMismatch ? false : null),
      note: isTimeMismatch ? "Temporal discrepancy detected against historical records" : "Date anchor unverified by metadata"
    }
  };

  // 4. Actionable Suggestions: What Would Strengthen This Claim? (Requirement 14)
  const suggestions = [
    "Original source link from primary reporting agency or photographer",
    "Capture date and camera timestamp verified through camera EXIF headers",
    "Location information or corroborating regional municipal reports",
    "Independent source or wire verification (Reuters, AP, AFP)",
    "Original uncompressed image file",
    "Additional contextual evidence or secondary angle photography"
  ];

  // 5. Why This Result? (Human language explanations)
  const reasons = rawWhyList.length > 0 
    ? rawWhyList.map(r => r.replace(/^[✓⚠✗•\-\d.]\s*/, ''))
    : [
        "Image content was evaluated for synthetic generation markers.",
        "Claim semantics were cross-referenced against visual content.",
        "Available contextual and metadata anchors were inspected."
      ];

  const summary = backendData.confidence_vs_truth || 
    (status === "NOT SUPPORTED"
      ? "The image appears to be authentic, but authenticity alone does not prove the claim. The available visual evidence does not establish the stated date or event."
      : "Available evidence supports the visual claim, but does not fully establish the stated context.");

  return {
    status,
    statusVariant,
    summary,
    reasons,
    findings,
    breakdown,
    suggestions,
    caseId: backendData.case_id || `CASE-${Date.now().toString().slice(-4)}`,
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  };
}
