import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const FinalCTA = ({ onOpenModal }) => {
  return (
    <section className="py-28 sm:py-36 relative bg-cyber-950 overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-violet-600/15 to-blue-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyber-900 border border-cyan-400/30 text-cyan-300 font-mono text-xs shadow-[0_0_20px_rgba(0,243,255,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>CYBERNETIC TRANSFORMATION GATEWAY OPEN</span>
        </motion.div>

        {/* Big Dramatic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-tight"
        >
          THE NEXT EVOLUTION <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-violet-400">
            IS WAITING.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto font-normal"
        >
          Upgrade the way you think. Upgrade the way you build.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenModal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="group px-9 py-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-orbitron font-black text-sm uppercase tracking-wider rounded-lg transition-all shadow-[0_0_35px_rgba(0,243,255,0.45)] flex items-center space-x-3"
          >
            <span>INITIALIZE EVOLUTION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Telemetry Footer Meta */}
        <div className="pt-10 flex items-center justify-center space-x-6 font-mono text-xs text-slate-500">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>SECURE PROTOCOL</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>INSTANT SYNAPSE LINK</span>
          </span>
          <span>•</span>
          <span>ZERO LATENCY</span>
        </div>

      </div>
    </section>
  );
};
