import React from 'react';
import { Camera, CheckCircle, Compass, HelpCircle } from 'lucide-react';

export default function WhyClaimLens() {
  const features = [
    {
      title: "Image Authenticity",
      desc: "Checks whether the media shows signs of synthetic generation or digital manipulation.",
      icon: Camera,
    },
    {
      title: "Claim Match",
      desc: "Checks whether the visual content is consistent with what the claim states.",
      icon: CheckCircle,
    },
    {
      title: "Context",
      desc: "Looks at available metadata, timestamps, and contextual clues where available.",
      icon: Compass,
    },
    {
      title: "Explanation",
      desc: "Shows users why a result was reached instead of only displaying an opaque score.",
      icon: HelpCircle,
    }
  ];

  return (
    <section className="py-16 bg-[#0b0f17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider block mb-1">
            Why ClaimLens
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Verification Built for Real Context
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            A comprehensive, transparent approach to evaluating media in context.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="product-card p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-brand-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
