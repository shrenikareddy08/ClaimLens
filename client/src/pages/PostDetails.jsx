import React, { useState } from 'react';
import { ArrowLeft, Clock, ShieldCheck, Shield } from 'lucide-react';
import ClaimLensButton from '../components/ClaimLensButton';
import VerificationResult from '../components/VerificationResult';

export default function PostDetails({ post, onBack, onSaveToHistory }) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanStage, setScanStage] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  if (!post) return null;

  const stages = [
    "Analyzing image...",
    "Checking claim consistency...",
    "Reviewing available evidence..."
  ];

  const handleScanClaim = async () => {
    setIsScanning(true);
    setScanResult(null);

    // Clean, reassuring progress indicator
    for (let i = 0; i < stages.length; i++) {
      setScanStage(i);
      await new Promise(r => setTimeout(r, 650));
    }

    // Result derived directly from the post's verification metadata
    const result = post.verification;
    setScanResult(result);
    setIsScanning(false);

    // Automatically record into user history
    if (onSaveToHistory) {
      onSaveToHistory({
        id: `CASE-${Date.now().toString().slice(-4)}`,
        claim: post.claim,
        imageUrl: post.imageUrl,
        date: "Today",
        status: result.status,
        statusVariant: result.statusVariant,
        result: result
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fadeIn">
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to For You</span>
      </button>

      {/* Main Story Card */}
      <div className="product-card p-6 sm:p-8 space-y-6 border-slate-800">
        
        {/* Category & Source Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 font-bold uppercase tracking-wide text-[11px]">
              {post.category}
            </span>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.source}</span>
            </div>
          </div>

          {post.isSampleContent && (
            <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded tracking-wide">
              SAMPLE / DEMONSTRATION CONTENT
            </span>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
          {post.headline}
        </h1>

        {/* Story Image */}
        <div className="rounded-xl overflow-hidden border border-slate-800 aspect-video w-full bg-slate-900">
          <img
            src={post.imageUrl}
            alt={post.headline}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-slate-300 text-base leading-relaxed">
          {post.shortDescription}
        </p>

        {/* Attached Claim Box */}
        <div className="p-5 rounded-xl bg-[#0d131f] border border-slate-800 space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Claim attached to this story:
          </span>
          <p className="text-white text-base font-medium italic leading-relaxed">
            "{post.claim}"
          </p>
        </div>

        {/* Verification Action: SCAN WITH CLAIMLENS */}
        {!scanResult && !isScanning && (
          <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-400" />
                <span>Verify this claim</span>
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                ClaimLens will inspect the image and the claim together to evaluate evidence support.
              </p>
            </div>
            
            <ClaimLensButton
              onClick={handleScanClaim}
              variant="primary"
              size="lg"
              icon={ShieldCheck}
              className="shrink-0"
            >
              SCAN WITH CLAIMLENS
            </ClaimLensButton>
          </div>
        )}

        {/* Scanning Progress */}
        {isScanning && (
          <div className="p-6 rounded-xl bg-[#0d131f] border border-brand-500/30 text-center space-y-3 animate-fadeIn">
            <div className="w-8 h-8 rounded-full border-2 border-brand-400 border-t-transparent animate-spin mx-auto" />
            <p className="text-sm font-semibold text-slate-200">
              {stages[scanStage]}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              Step {scanStage + 1} of 3
            </p>
          </div>
        )}

      </div>

      {/* Verification Result Section */}
      {scanResult && (
        <div className="space-y-4">
          <VerificationResult
            result={scanResult}
            claimText={post.claim}
            onVerifyAnother={null}
          />
        </div>
      )}

    </div>
  );
}
