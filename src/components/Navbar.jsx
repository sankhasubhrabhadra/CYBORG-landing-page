import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command, Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const Navbar = ({ onOpenModal, onOpenCommandPalette, onToggleSound, isMuted }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SYSTEM', href: '#system' },
    { name: 'CORE', href: '#neural-core' },
    { name: 'AUGMENTATION', href: '#augmentation-map' },
    { name: 'TELEMETRY', href: '#telemetry' },
    { name: 'GRID', href: '#tech-grid' },
    { name: 'TERMINAL', href: '#terminal' },
    { name: 'EVOLUTION', href: '#evolution' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    soundFx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#05070c]/90 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-2xl shadow-black/60'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <a
            href="#system"
            onClick={(e) => handleNavClick(e, '#system')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded border border-cyan-400/40 bg-cyan-950/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all">
              <span className="font-orbitron font-black text-cyan-400 text-sm">C1</span>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                CYBORG<span className="text-cyan-400">//01</span>
              </span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest -mt-1 hidden sm:block">
                HUMAN × MACHINE
              </span>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => soundFx.playHover()}
                className="font-mono text-xs text-slate-300 hover:text-cyan-400 tracking-widest transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right: Actions, Command Center, Audio & Status */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Command Palette Trigger with exact ⌘ K hint */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenCommandPalette();
              }}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-cyber-900 border border-slate-700 hover:border-cyan-400/50 text-[11px] font-mono text-slate-300 hover:text-cyan-300 transition-all"
              title="Open Command Center (⌘ K / Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-bold">⌘ K</span>
            </button>

            {/* Sound Mute/Unmute */}
            <button
              onClick={onToggleSound}
              className="px-2.5 py-1.5 rounded-lg bg-cyber-900 border border-slate-700 hover:border-cyan-400/50 font-mono text-[11px] text-slate-400 hover:text-cyan-300 transition-all flex items-center space-x-1.5"
              title={isMuted ? 'Enable Sound' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-500" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isMuted ? 'SOUND: OFF' : 'SOUND: ON'}</span>
            </button>

            {/* Status Online LED */}
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-950 border border-cyan-500/20 font-mono text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 font-medium hidden md:inline">SYSTEM ONLINE</span>
            </div>

            {/* Initialize CTA */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenModal();
              }}
              className="px-4 py-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-orbitron text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,243,255,0.35)]"
            >
              INITIALIZE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onToggleSound}
              className="p-2 text-slate-400 hover:text-cyan-400"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Futuristic Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#05070c]/98 backdrop-blur-2xl p-6 lg:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20 font-mono text-xs text-slate-400">
                <span className="flex items-center space-x-2 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYSTEM ONLINE // ALL CORES NOMINAL</span>
                </span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="px-2 py-1 rounded bg-cyber-900 border border-slate-700 text-cyan-300 text-[10px]"
                >
                  ⌘ K
                </button>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-orbitron font-bold text-lg text-slate-200 hover:text-cyan-400 tracking-wider py-2 border-b border-white/5 block"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-6 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-orbitron font-black text-xs uppercase tracking-wider rounded text-center shadow-lg shadow-cyan-500/30"
              >
                INITIALIZE SYSTEM
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
