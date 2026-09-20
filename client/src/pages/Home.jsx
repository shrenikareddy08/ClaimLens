import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyClaimLens from '../components/WhyClaimLens';
import { ArrowRight, Shield } from 'lucide-react';

export default function Home({ onNavigateToVerify, onNavigateToForYou }) {
  return (
    <div className="space-y-4 animate-fadeIn">
      {/* 1. Hero Section */}
      <Hero 
        onVerifyClick={onNavigateToVerify} 
        onExploreClick={onNavigateToForYou} 
      />

      {/* 2. How It Works */}
      <HowItWorks />

      {/* 3. Why ClaimLens Feature Cards */}
      <WhyClaimLens />

      {/* 4. Bottom Call To Action */}
      <section className="py-20 border-t border-slate-800/80 bg-[#0c101a] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See the claim. Check the evidence.
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Verify whether an image actually proves what people say it proves.
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateToVerify}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold text-sm transition-all shadow-sm cursor-pointer"
            >
              <Shield className="w-4 h-4" />
              <span>Verify an Image</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
