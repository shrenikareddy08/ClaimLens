import React from 'react';
import { AlertTriangle, Shield, Check } from 'lucide-react';
import ClaimLensButton from './ClaimLensButton';

export default function Hero({ onVerifyClick, onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-brand-300 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5 text-brand-400" />
              <span>CLAIMLENS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              See the claim.<br />
              <span className="text-brand-400">Check the evidence.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              ClaimLens helps you determine whether an image actually supports the story attached to it — not just whether the image itself looks real.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <ClaimLensButton
                onClick={onVerifyClick}
                size="lg"
                variant="primary"
                showArrow
                className="w-full sm:w-auto"
              >
                VERIFY AN IMAGE
              </ClaimLensButton>

              <ClaimLensButton
                onClick={onExploreClick}
                size="lg"
                variant="secondary"
                icon={null}
                className="w-full sm:w-auto"
              >
                EXPLORE CLAIMS
              </ClaimLensButton>
            </div>
          </div>

          {/* Right Column: Realistic Social Card + ClaimLens Result */}
          <div className="lg:col-span-6 max-w-md mx-auto lg:max-w-none w-full">
            <div className="product-card p-5 sm:p-6 space-y-4 shadow-2xl relative border-slate-800">
              
              {/* Social Media Post Simulation */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white text-[10px]">
                      N
                    </div>
                    <span className="font-semibold text-slate-300">Local News Desk</span>
                  </div>
                  <span>Shared today</span>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 aspect-video relative bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80"
                    alt="Flooded city street"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur text-[11px] text-slate-200 font-medium">
                    Photo attached to breaking post
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0d131f] border border-slate-800/90 text-xs">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                    Claim attached to this image
                  </span>
                  <p className="text-slate-200 font-medium italic">
                    “This image shows flooding in Hyderabad.”
                  </p>
                </div>
              </div>

              {/* ClaimLens Result Banner */}
              <div className="p-4 rounded-xl bg-[#0e1726] border border-brand-500/40 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-xs font-bold text-brand-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-brand-400" />
                    ClaimLens Result
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60">
                    Context Needed
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-emerald-400 font-medium">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Image appears authentic</span>
                  </div>
                  <div className="flex items-start gap-2 text-amber-300 font-medium">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Claim requires additional context</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 leading-relaxed">
                  The photograph is genuine, but was taken during an earlier monsoon season. ClaimLens verifies whether evidence actually proves the claim.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
