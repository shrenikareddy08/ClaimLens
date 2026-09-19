import React from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

export default function ClaimBreakdown({ breakdown }) {
  if (!breakdown) return null;

  const anchors = [
    { key: 'what', label: 'WHAT', item: breakdown.what },
    { key: 'where', label: 'WHERE', item: breakdown.where },
    { key: 'when', label: 'WHEN', item: breakdown.when },
  ];

  return (
    <div className="product-card p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-3">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
          Claim Breakdown
        </h4>
        <span className="text-xs text-slate-400">
          Independent anchor verification
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {anchors.map(({ key, label, item }) => {
          if (!item) return null;

          const isSupported = item.supported === true;
          const isContradicted = item.supported === false;
          const isUnknown = item.supported === null || item.supported === undefined;

          return (
            <div 
              key={key} 
              className="p-4 rounded-xl bg-[#0d131f] border border-slate-800/90 space-y-2.5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-slate-300 tracking-wider flex items-center gap-1.5">
                  <span>{label}</span>
                  {isSupported && <span className="text-emerald-400 font-bold">✓</span>}
                  {isContradicted && <span className="text-rose-400 font-bold">✗</span>}
                  {isUnknown && <span className="text-amber-400 font-bold">?</span>}
                </span>

                {/* Status Badge */}
                {isSupported && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Supported</span>
                  </span>
                )}
                {isContradicted && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-950/80 text-rose-300 border border-rose-800">
                    <X className="w-3 h-3 text-rose-400" />
                    <span>Contradicted</span>
                  </span>
                )}
                {isUnknown && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    <HelpCircle className="w-3 h-3 text-slate-400" />
                    <span>Unconfirmed</span>
                  </span>
                )}
              </div>

              <div className="text-sm font-semibold text-white">
                {item.label}
              </div>

              {item.note && (
                <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                  {item.note}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
