import React from 'react';
import { Camera, CheckCircle2, Compass, ShieldAlert } from 'lucide-react';

function DimensionIcon({ title }) {
  const t = (title || '').toLowerCase();
  if (t.includes('media') || t.includes('authenticity')) return <Camera className="w-3.5 h-3.5" />;
  if (t.includes('claim') || t.includes('consistency')) return <CheckCircle2 className="w-3.5 h-3.5" />;
  if (t.includes('context')) return <Compass className="w-3.5 h-3.5" />;
  return <ShieldAlert className="w-3.5 h-3.5" />;
}

export default function EvidenceItem({
  title,
  status,
  statusType = 'neutral', // 'positive' | 'neutral' | 'negative' | 'warning'
  explanation
}) {
  const getStatusBadge = () => {
    if (statusType === 'positive') {
      return 'bg-emerald-950/70 text-emerald-300 border-emerald-800/80';
    }
    if (statusType === 'negative') {
      return 'bg-rose-950/70 text-rose-300 border-rose-800/80';
    }
    if (statusType === 'warning') {
      return 'bg-amber-950/70 text-amber-300 border-amber-800/80';
    }
    return 'bg-slate-800 text-slate-300 border-slate-700';
  };

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-[#0d131f] border border-slate-800 flex flex-col justify-between space-y-3 transition-colors hover:border-slate-700">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-brand-400 shrink-0">
            <DimensionIcon title={title} />
          </div>
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
            {title}
          </span>
        </div>

        <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold border whitespace-nowrap ${getStatusBadge()}`}>
          {status}
        </span>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        {explanation}
      </p>
    </div>
  );
}
