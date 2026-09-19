import React, { useState } from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import UploadBox from '../components/UploadBox';
import ClaimInput from '../components/ClaimInput';
import ClaimLensButton from '../components/ClaimLensButton';
import VerificationResult from '../components/VerificationResult';
import { verifyWithClaimLens } from '../services/api';

export default function Verify({ onSaveToHistory }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [claimText, setClaimText] = useState("");
  
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStage, setVerificationStage] = useState(0);
  const [verificationResult, setVerificationResult] = useState(null);
  const [backendError, setBackendError] = useState(null);

  const stages = [
    "Analyzing image...",
    "Checking claim consistency...",
    "Reviewing available evidence..."
  ];

  const handleFileSelected = (file) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target?.result);
    };
    reader.readAsDataURL(file);
    setBackendError(null);
    setVerificationResult(null);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setVerificationResult(null);
    setBackendError(null);
  };

  const handleResetAll = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setClaimText("");
    setVerificationResult(null);
    setBackendError(null);
  };

  const handleRunVerify = async () => {
    if (!selectedFile && !imagePreview) {
      alert("Please upload an image to verify.");
      return;
    }
    if (!claimText.trim()) {
      alert("Please enter the claim associated with this image.");
      return;
    }

    setIsVerifying(true);
    setBackendError(null);
    setVerificationResult(null);

    // Clean, structured progress indicator
    for (let i = 0; i < stages.length; i++) {
      setVerificationStage(i);
      await new Promise(r => setTimeout(r, 650));
    }

    // Call real FastAPI backend via api.js
    const response = await verifyWithClaimLens(selectedFile, claimText);

    setIsVerifying(false);

    if (response.error) {
      setBackendError({
        message: response.error,
        detail: response.detail
      });
    } else {
      setVerificationResult(response);
      if (onSaveToHistory) {
        onSaveToHistory({
          id: response.caseId || `CASE-${Date.now().toString().slice(-4)}`,
          claim: claimText,
          imageUrl: imagePreview,
          date: response.date || "Today",
          status: response.status,
          statusVariant: response.statusVariant,
          result: response
        });
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Header Matching Requirement 8 */}
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          VERIFY AN IMAGE
        </h1>
        <p className="text-slate-400 text-sm">
          Upload evidence and tell us what it is supposed to prove.
        </p>
      </div>

      {/* Main Verification Workflow */}
      {!verificationResult ? (
        <div className="product-card p-6 sm:p-8 space-y-6 border-slate-800">
          
          {/* 1. Upload Box */}
          <UploadBox
            selectedFile={selectedFile}
            imagePreview={imagePreview}
            onFileSelected={handleFileSelected}
            onRemoveImage={handleRemoveImage}
          />

          {/* 2. Claim Input */}
          <ClaimInput
            value={claimText}
            onChange={setClaimText}
            disabled={isVerifying}
          />

          {/* Service Availability / Backend Error Notice */}
          {backendError && (
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/90 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div className="text-xs text-rose-200 space-y-1">
                <p className="font-bold text-sm text-rose-300">{backendError.message}</p>
                <p className="text-rose-200/90 leading-relaxed">{backendError.detail}</p>
              </div>
            </div>
          )}

          {/* Verification Progress or Action Button */}
          {isVerifying ? (
            <div className="p-6 rounded-xl bg-[#0d131f] border border-brand-500/30 text-center space-y-3 animate-fadeIn">
              <div className="w-8 h-8 rounded-full border-2 border-brand-400 border-t-transparent animate-spin mx-auto" />
              <p className="text-sm font-semibold text-slate-200">
                {stages[verificationStage]}
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Step {verificationStage + 1} of 3
              </p>
            </div>
          ) : (
            <div className="pt-2">
              <ClaimLensButton
                onClick={handleRunVerify}
                variant="primary"
                size="lg"
                icon={ShieldCheck}
                className="w-full"
              >
                VERIFY WITH CLAIMLENS
              </ClaimLensButton>
            </div>
          )}

        </div>
      ) : (
        /* Result Screen */
        <div className="space-y-6">
          <VerificationResult
            result={verificationResult}
            claimText={claimText}
            onVerifyAnother={handleResetAll}
          />
        </div>
      )}

    </div>
  );
}
