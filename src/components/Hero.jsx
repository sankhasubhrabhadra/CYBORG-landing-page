import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Activity, Zap, Shield, ChevronDown } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';
import heroImg from '../assets/cyborg-vance.jpg';

export const Hero = ({ onOpenModal }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleScrollDown = () => {
    soundFx.playClick();
    const elem = document.getElementById('neural-core');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="system"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-cyber"
    >
      {/* Layered Subtle Depth Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Dominant Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* System Status Label */}
            <div className="flex items-center space-x-3 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 font-bold tracking-widest">
                CYBORG//01
              </span>
              <span className="text-slate-600">//</span>
              <span className="text-cyan-400 flex items-center space-x-1.5 font-semibold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>SYSTEM ONLINE</span>
              </span>
            </div>

            {/* Dominant Editorial Typography */}
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none"
              >
                HUMAN
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3 sm:space-x-4"
              >
                <span className="font-orbitron font-black text-3xl sm:text-5xl text-cyan-400 select-none">×</span>
                <span className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 uppercase">
                  MACHINE
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl tracking-widest text-slate-400 uppercase leading-none pt-1"
              >
                EVOLUTION
              </motion.div>
            </div>

            {/* Technical Sub-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-xs sm:text-sm text-cyan-300/90 tracking-wider uppercase font-medium max-w-xl"
            >
              BIOLOGICAL INTELLIGENCE // COMPUTATIONAL AUGMENTATION // NEXT-GENERATION HUMAN INTERFACE
            </motion.p>

            {/* Concise Editorial Body */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-sm sm:text-base text-slate-300 max-w-lg font-normal leading-relaxed"
            >
              Where organic biological cognition fuses with quantum computing coprocessors into a single unified conscious framework.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenModal();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="group px-7 py-3.5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-orbitron font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_25px_rgba(0,243,255,0.35)] flex items-center space-x-2"
              >
                <span>[ INITIALIZE SYSTEM ]</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={handleScrollDown}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3.5 bg-cyber-900/90 hover:bg-cyber-850 border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-white font-orbitron text-xs sm:text-sm uppercase tracking-wider rounded transition-all flex items-center space-x-2"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>[ EXPLORE ARCHITECTURE ]</span>
              </button>
            </motion.div>

            {/* Clean Telemetry Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 border-t border-cyan-500/10 flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs text-slate-400"
            >
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">BIO-LATENCY</span>
                <span className="text-cyan-400 font-bold text-sm">0.08 ms</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">SYNAPSE BUS</span>
                <span className="text-violet-400 font-bold text-sm">1.28 TB/s</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase">QUANTUM CORE</span>
                <span className="text-emerald-400 font-bold text-sm">16,384 QUBITS</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Central Artifact with Layered HUD & Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0"
          >
            {/* Parallax Container */}
            <div
              className="relative w-full max-w-[380px] sm:max-w-[400px] aspect-[4/5] rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-violet-500/10 to-transparent shadow-2xl transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`,
              }}
            >
              {/* Inner Cyborg Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-cyber-900 border border-cyan-500/30">
                <img
                  src={heroImg}
                  alt="Central Cyborg Cybernetic Artifact"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
                />

                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-transparent to-cyan-950/20" />
                <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

                {/* Center Holographic Reticle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                  <div className="w-48 h-48 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '24s' }} />
                  <div className="absolute w-36 h-36 rounded-full border border-violet-400/30 border-dashed animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }} />
                </div>

                {/* Bottom Subject ID Label */}
                <div className="absolute bottom-3 left-3 right-3 bg-cyber-950/90 backdrop-blur-md border border-cyan-500/30 rounded p-2 flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-white font-semibold">SUBJECT::CYB-01</span>
                  </div>
                  <span className="text-cyan-400 font-bold">CORE ONLINE</span>
                </div>
              </div>

              {/* Floating HUD Badge 1: NEURAL LINK (Top Left) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-2 sm:-left-5 bg-cyber-900/95 backdrop-blur-md border border-cyan-400/40 px-3 py-1.5 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2 z-20"
              >
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <div>
                  <span className="text-[9px] text-slate-400 block uppercase">NEURAL LINK</span>
                  <span className="text-cyan-300 font-bold">98.72%</span>
                </div>
              </motion.div>

              {/* Floating HUD Badge 2: COGNITIVE LOAD (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-2 sm:-left-5 bg-cyber-900/95 backdrop-blur-md border border-violet-400/30 px-3 py-1.5 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2 z-20"
              >
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <div>
                  <span className="text-[9px] text-slate-400 block uppercase">COGNITIVE LOAD</span>
                  <span className="text-violet-300 font-bold">42%</span>
                </div>
              </motion.div>

              {/* Floating HUD Badge 3: SYSTEM SYNC (Top Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-3 -right-2 sm:-right-5 bg-cyber-900/95 backdrop-blur-md border border-emerald-400/40 px-3 py-1.5 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2 z-20"
              >
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <div>
                  <span className="text-[9px] text-slate-400 block uppercase">SYSTEM SYNC</span>
                  <span className="text-emerald-300 font-bold">ACTIVE</span>
                </div>
              </motion.div>

              {/* Floating HUD Badge 4: CORE (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-3 -right-2 sm:-right-5 bg-cyber-900/95 backdrop-blur-md border border-cyan-400/40 px-3 py-1.5 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2 z-20"
              >
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <div>
                  <span className="text-[9px] text-slate-400 block uppercase">CORE</span>
                  <span className="text-cyan-300 font-bold">ONLINE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center space-y-1.5 text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span className="font-mono text-[9px] tracking-widest uppercase">EXPLORE ARCHITECTURE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
