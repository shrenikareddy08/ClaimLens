import React, { useState } from 'react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'foryou', label: 'For You' },
    { id: 'verify', label: 'Verify' },
    { id: 'history', label: 'History' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:bg-brand-600/30 transition-colors">
              <Shield className="w-4 h-4 text-brand-400" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-brand-300 transition-colors">
              Claim<span className="text-brand-400">Lens</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-white bg-slate-800/80' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('verify')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-sm"
            >
              <span>Verify Evidence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0f1420] px-4 pt-2 pb-4 space-y-1 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-brand-300 bg-slate-800' 
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('verify')}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              <span>Verify Evidence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
