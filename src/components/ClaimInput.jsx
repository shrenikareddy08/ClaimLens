import React from 'react';
import { FileText } from 'lucide-react';

export default function ClaimInput({
  value,
  onChange,
  disabled = false
}) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-brand-400" />
          <span>What is the claim?</span>
        </label>
        <span className="text-[11px] text-slate-500">
          Be as specific as possible with date and location
        </span>
      </div>

      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="Example: This image shows flooding in Hyderabad on 18 September 2026."
        className="w-full bg-[#0d131f] border border-slate-700/80 rounded-xl p-4 text-sm text-slate-100 placeholder:text-slate-600 focus:border-brand-400 focus:ring-1 focus:ring-brand-400 focus:outline-none transition-all resize-none leading-relaxed"
      />
    </div>
  );
}
