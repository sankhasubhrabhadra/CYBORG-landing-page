import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, ArrowUpRight, Cpu, Activity, Zap, Sparkles, ChevronDown, Radio } from 'lucide-react';
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
      {/* Multi-layered Atmospheric Lighting & Light Field */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* System Status Label */}
            <div className="flex items-center space-x-3 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 font-bold tracking-widest">
                SYSTEM 01
              </span>
              <span className="text-slate-500">//</span>
              <span className="text-cyan-400 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>CYBERNETIC CORE ACTIVE</span>
              </span>
            </div>

            {/* Kinetic Editorial Main Headline */}
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
                className="flex items-center space-x-4"
              >
                <span className="font-orbitron font-black text-4xl sm:text-6xl text-cyan-400">×</span>
                <span className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 uppercase">
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

            {/* Technical Sub-description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-xs sm:text-sm text-cyan-300/80 tracking-widest uppercase"
            >
              BIOLOGICAL INTELLIGENCE // COMPUTATIONAL AUGMENTATION // NEXT-GENERATION HUMAN INTERFACE
            </motion.p>

            {/* Editorial Body */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed"
            >
              A unified operating architecture fusing organic consciousness with quantum co-processors. Where human intuition and synthetic precision exist in total harmony.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenModal();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-orbitron font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_30px_rgba(0,243,255,0.4)] flex items-center space-x-2.5"
              >
                <span>[ INITIALIZE SYSTEM ]</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={handleScrollDown}
                onMouseEnter={() => soundFx.playHover()}
                className="px-7 py-4 bg-cyber-900/90 hover:bg-cyber-850 border border-slate-700 hover:border-cyan-400/60 text-slate-200 hover:text-white font-orbitron text-xs sm:text-sm uppercase tracking-wider rounded transition-all flex items-center space-x-2"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>[ EXPLORE ARCHITECTURE ]</span>
              </button>
            </motion.div>

            {/* Live Telemetry Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 border-t border-cyan-500/10 flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-xs text-slate-400"
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

          {/* Right Column: Visual Cyborg Core with Mouse Parallax & Floating Diagnostic HUDs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Interactive Parallax Frame */}
            <div
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-violet-500/10 to-transparent shadow-2xl transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 14}deg) rotateX(${-mousePos.y * 14}deg)`,
              }}
            >
              {/* Inner Cyborg Image Frame */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-cyber-900 border border-cyan-500/30">
                <img
                  src={heroImg}
                  alt="Cybernetic Human Hybrid Visual"
                  className="w-full h-full object-cover object-center filter contrast-115 brightness-95"
                />

                {/* Overlays & Scanlines */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-950 via-transparent to-cyan-950/20" />
                <div className="absolute inset-0 scanlines opacity-35 pointer-events-none" />

                {/* Reticle HUD Center Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                  <div className="w-52 h-52 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '24s' }} />
                  <div className="absolute w-40 h-40 rounded-full border border-violet-400/30 border-dashed animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }} />
                </div>

                {/* Bottom Subject ID Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-cyber-950/85 backdrop-blur-md border border-cyan-500/30 rounded p-2.5 flex items-center justify-between font-mono text-[11px]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-white font-semibold">SUBJECT::AUGMENT-01</span>
                  </div>
                  <span className="text-cyan-400 font-bold">CORE ONLINE</span>
                </div>
              </div>

              {/* Floating HUD Badge 1: NEURAL LINK (Exact user requirement) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-cyber-900/95 backdrop-blur-md border border-cyan-400/40 px-3.5 py-2 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2.5 z-20"
              >
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <div>
                  <span className="text-[10px] text-slate-400 block">NEURAL LINK</span>
                  <span className="text-cyan-300 font-bold">98.72%</span>
                </div>
              </motion.div>

              {/* Floating HUD Badge 2: COGNITIVE LOAD (Exact user requirement) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-3 sm:-left-6 bg-cyber-900/95 backdrop-blur-md border border-violet-400/30 px-3.5 py-2 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2.5 z-20"
              >
                <div className="w-2 h-2 rounded-full bg-violet-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block">COGNITIVE LOAD</span>
                  <span className="text-violet-300 font-bold">42%</span>
                </div>
              </motion.div>

              {/* Floating HUD Badge 3: SYSTEM SYNC (Exact user requirement) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-3 -right-3 sm:-right-6 bg-cyber-900/95 backdrop-blur-md border border-emerald-400/40 px-3.5 py-2 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2.5 z-20"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block">SYSTEM SYNC</span>
                  <span className="text-emerald-300 font-bold">ACTIVE</span>
                </div>
              </motion.div>

              {/* Floating HUD Badge 4: CORE (Exact user requirement) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-3 -right-3 sm:-right-6 bg-cyber-900/95 backdrop-blur-md border border-cyan-400/40 px-3.5 py-2 rounded-lg font-mono text-xs shadow-xl flex items-center space-x-2.5 z-20"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block">CORE</span>
                  <span className="text-cyan-300 font-bold">ONLINE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center space-y-2 text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">DISCOVER ARCHITECTURE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
