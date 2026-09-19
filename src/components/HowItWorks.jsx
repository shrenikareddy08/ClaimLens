import React from 'react';
import { Upload, FileText, CheckCheck, AlertCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Upload",
      desc: "Upload an image or media file you want to verify.",
      icon: Upload,
    },
    {
      num: "02",
      title: "Claim",
      desc: "Tell ClaimLens what the image is supposed to prove or show.",
      icon: FileText,
    },
    {
      num: "03",
      title: "Verify",
      desc: "ClaimLens checks the media and the claim together to evaluate support.",
      icon: CheckCheck,
    }
  ];

  return (
    <section className="py-16 border-t border-slate-800/80 bg-[#0c101a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider block mb-1">
            Verification Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            How ClaimLens Works
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Three simple steps to evaluate whether visual evidence proves a claim.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="product-card p-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-700">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Project Concept Callout Banner */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              Real media can still tell a misleading story.
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              An authentic photograph can easily be reused with the wrong date, location, event, or description. ClaimLens focuses on the claim itself — making sure the evidence actually backs up the narrative.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
