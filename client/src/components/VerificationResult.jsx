import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  HelpCircle, 
  Shield, 
  Lightbulb, 
  ArrowRight,
  Info
} from 'lucide-react';
import EvidenceItem from './EvidenceItem';
import ClaimBreakdown from './ClaimBreakdown';

export default function VerificationResult({ result, claimText, onVerifyAnother }) {
  if (!result) return null;

  const isPositive = result.statusVariant === 'positive';
  const isWarning = result.statusVariant === 'warning';
  const isNegative = result.statusVariant === 'negative';

  const badgeStyles = isPositive
    ? 'bg-emerald-950/90 text-emerald-300 border-emerald-700'
    : isWarning
    ? 'bg-amber-950/90 text-amber-300 border-amber-700'
    : isNegative
    ? 'bg-rose-950/90 text-rose-300 border-rose-700'
    : 'bg-slate-800 text-slate-300 border-slate-700';

  const StatusIcon = isPositive
    ? CheckCircle2
    : isWarning
    ? AlertTriangle
    : isNegative
    ? XCircle
    : HelpCircle;

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* 1. TOP RESULT STATUS CARD */}
      <div className="product-card p-6 sm:p-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>ClaimLens Result</span>
          </div>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold border shadow-sm ${badgeStyles}`}>
            <StatusIcon className="w-4 h-4 shrink-0" />
            <span>{result.status}</span>
          </div>
        </div>

        {/* The Claim */}
        <div className="space-y-1.5">
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
            Your Claim
          </span>
          <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
            "{claimText}"
          </p>
        </div>

        {/* High-level summary */}
        {result.summary && (
          <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
            {result.summary}
          </p>
        )}
      </div>

      {/* 2. WHAT WE FOUND: 4 SEPARATE DIMENSIONS (NO FAKE COMBINED SCORE) */}
      <div className="product-card p-6 space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-base font-bold text-white">
            What We Found
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            ClaimLens evaluates four independent evidence dimensions instead of relying on an arbitrary score.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(result.findings || []).map((finding, idx) => (
            <EvidenceItem
              key={idx}
              title={finding.title}
              status={finding.status}
              statusType={finding.statusType}
              explanation={finding.explanation}
            />
          ))}
        </div>
      </div>

      {/* 3. RESULT EXPLANATION: WHY THIS RESULT? (HUMAN LANGUAGE) */}
      <div className="product-card p-6 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Info className="w-4 h-4 text-brand-400" />
          <span>Why This Result?</span>
        </h3>

        <div className="space-y-3 text-sm text-slate-300">
          {(result.reasons || []).map((reason, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-brand-400 font-bold text-sm leading-relaxed">•</span>
              <p className="leading-relaxed text-slate-200">{reason}</p>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
          ClaimLens does not determine truth from a single signal. It evaluates the evidence available for the claim.
        </div>
      </div>

      {/* 4. CLAIM BREAKDOWN (WHAT, WHERE, WHEN) */}
      <ClaimBreakdown breakdown={result.breakdown} />

      {/* 5. WHAT WOULD STRENGTHEN THIS CLAIM? */}
      {result.suggestions && result.suggestions.length > 0 && (
        <div className="product-card p-6 space-y-3">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>What Would Strengthen This Claim?</span>
          </h3>
          <p className="text-xs text-slate-400">
            If you are investigating or reporting this story, the following evidence would help establish or refute it:
          </p>
          <ul className="space-y-2 text-xs text-slate-300 pt-1">
            {result.suggestions.map((suggestion, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-slate-500 font-bold">•</span>
                <span className="text-slate-300 leading-relaxed">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action to verify another */}
      {onVerifyAnother && (
        <div className="pt-2 text-center">
          <button
            onClick={onVerifyAnother}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors cursor-pointer"
          >
            <span>Verify Another Image</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}
