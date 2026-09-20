import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="border-t border-slate-800/80 bg-[#090d14] py-12 text-sm text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-white tracking-tight">
                Claim<span className="text-brand-400">Lens</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Don’t just ask if it’s real. Ask if it proves the claim.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <button onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => { setActivePage('foryou'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
              For You
            </button>
            <button onClick={() => { setActivePage('verify'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
              Verify
            </button>
            <button onClick={() => { setActivePage('history'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
              History
            </button>
            <button onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
              About
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            Real ≠ True. Verifying evidence behind the story.
          </p>
          <p>
            © 2026 ClaimLens. Built for hackathon demonstration.
          </p>
        </div>
      </div>
    </footer>
  );
}
