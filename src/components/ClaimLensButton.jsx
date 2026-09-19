import React from 'react';
import { ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function ClaimLensButton({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  size = 'md',        // 'sm' | 'md' | 'lg'
  icon: Icon = ShieldCheck,
  showArrow = false,
  isLoading = false,
  disabled = false,
  className = '',
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all cursor-pointer select-none";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs tracking-wide gap-2",
    lg: "px-7 py-3.5 text-sm tracking-wide gap-2.5",
  };

  const variantStyles = {
    primary: "bg-brand-500 hover:bg-brand-400 text-slate-950 shadow-sm active:scale-[0.99]",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/80 active:scale-[0.99]",
    outline: "bg-transparent hover:bg-slate-800/60 text-slate-200 border border-slate-700 hover:border-slate-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${sizeStyles[size] || sizeStyles.md}
        ${variantStyles[variant] || variantStyles.primary}
        ${(disabled || isLoading) ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}
        ${className}
      `}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : Icon ? (
        <Icon className="w-4 h-4 shrink-0" />
      ) : null}

      <span>{children}</span>

      {showArrow && !isLoading && (
        <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-0.5" />
      )}
    </button>
  );
}
