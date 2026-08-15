import React from 'react';
import { Terminal, Shield, Activity, ArrowUp, Cpu } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const Footer = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'SYSTEM', href: '#system' },
    { name: 'CORE', href: '#neural-core' },
    { name: 'AUGMENTATION', href: '#augmentation-map' },
    { name: 'TELEMETRY', href: '#telemetry' },
    { name: 'TERMINAL', href: '#terminal' },
    { name: 'EVOLUTION', href: '#evolution' },
  ];

  return (
    <footer className="bg-[#030407] border-t border-cyan-500/15 py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-white/10 gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1.5">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded border border-cyan-400/40 bg-cyan-950/40 flex items-center justify-center">
                <span className="font-orbitron font-black text-cyan-400 text-xs">C1</span>
              </div>
              <span className="font-orbitron font-black text-lg tracking-wider text-white">
                CYBORG<span className="text-cyan-400">//01</span>
              </span>
            </div>
            <p className="font-mono text-xs text-cyan-300/80 tracking-wider">
              HUMAN × MACHINE
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-slate-400">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  soundFx.playClick();
                  const elem = document.querySelector(link.href);
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* System Status & Back to Top */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 rounded bg-emerald-950/50 border border-emerald-500/30 font-mono text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-cyber-900 border border-white/10 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 transition-colors"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Technical Metadata Bar (Exact User Specs) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 font-mono text-[11px] gap-4">
          <div>
            © 2026 CYBORG//01 — HUMAN × MACHINE EVOLUTION PROTOCOL.
          </div>
          <div className="flex flex-wrap items-center space-x-4 text-slate-400">
            <span>BUILD 01.2026</span>
            <span>•</span>
            <span>CORE VERSION 7.4</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">PROTOCOL ACTIVE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
