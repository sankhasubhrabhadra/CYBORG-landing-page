import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Network, Brain, Eye, Activity, Database, Cpu, ArrowUpRight, Zap, Check } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const TechnologyGrid = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Simulated live matrix numbers for AI Cognition card
  const [matrixStream, setMatrixStream] = useState(['0xFA48', '0x11BC', '0x99D2', '0x43E0']);
  useEffect(() => {
    const interval = setInterval(() => {
      const hex = () => '0x' + Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, '0');
      setMatrixStream([hex(), hex(), hex(), hex()]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech-grid" className="py-24 sm:py-32 relative bg-cyber-900/40 border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>MODULAR ARCHITECTURE // 06 SUB-SYSTEMS</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
              TECHNOLOGY GRID
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              A breakdown of the integrated engineering disciplines forming the Cyborg evolution ecosystem.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-500">
            FRAMEWORK VERSION: 8.4-PROT
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: NEURAL INTERFACE (Synapse animation) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-2xl bg-cyber-950/80 border border-cyan-500/30 hover:border-cyan-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Background Wave */}
            <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-900 border border-cyan-500/30 text-cyan-400">
                  <Network className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                  0.08ms LATENCY
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">TECH::ARCH-01</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  NEURAL INTERFACE
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Direct bio-computational bridge translating organic neurological action potentials into quantum machine instructions.
              </p>
            </div>

            {/* Visual element: Animated synapse bar */}
            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>SYNAPSE MESH</span>
                <span className="text-cyan-400">10,000 NODES</span>
              </div>
              <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 animate-pulse w-[92%]" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI COGNITION (Data Matrix stream) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-2xl bg-cyber-950/80 border border-violet-500/30 hover:border-violet-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-900 border border-violet-500/30 text-violet-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex space-x-1 font-mono text-[9px] text-violet-400">
                  {matrixStream.map((h, i) => (
                    <span key={i} className="bg-violet-950 px-1 py-0.5 rounded border border-violet-500/20">{h}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">TECH::ARCH-02</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-violet-300 transition-colors">
                  AI COGNITION
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Co-evolutionary machine learning models running in parallel with biological consciousness to synthesize complex abstract ideas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>TENSOR CAPACITY</span>
              <span className="text-violet-400 font-bold">14.2 PFLOPS</span>
            </div>
          </motion.div>

          {/* Card 3: OPTICAL AUGMENTATION (Scanning laser bar) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-2xl bg-cyber-950/80 border border-cyan-500/30 hover:border-cyan-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Animated Laser scanline line */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline pointer-events-none opacity-60" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-900 border border-cyan-500/30 text-cyan-400">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                  16K HDR HUD
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">TECH::ARCH-03</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  OPTICAL AUGMENTATION
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Retinal micro-LED projection integrating telemetry diagnostics, multi-spectrum electromagnetic filters, and biometric HUD overlays.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>FOV ANGLE</span>
              <span className="text-cyan-400 font-bold">220° PANORAMIC</span>
            </div>
          </motion.div>

          {/* Card 4: SYNTHETIC MUSCLE (Force load meter) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-2xl bg-cyber-950/80 border border-emerald-500/30 hover:border-emerald-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-900 border border-emerald-500/30 text-emerald-400">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                  8x FORCE DENSITY
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">TECH::ARCH-04</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                  SYNTHETIC MUSCLE
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Electro-active carbon nanotube myofibrils interwoven alongside skeletal muscle structures for zero-fatigue biomechanics.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>ACTUATOR RESPONSE</span>
              <span className="text-emerald-400 font-bold">&lt; 0.02ms</span>
            </div>
          </motion.div>

          {/* Card 5: MEMORY SYSTEM (Quantum crystal storage) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-2xl bg-cyber-950/80 border border-blue-500/30 hover:border-blue-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-900 border border-blue-500/30 text-blue-400">
                  <Database className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20">
                  CRYSTAL PERSISTENCE
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">TECH::ARCH-05</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                  MEMORY SYSTEM
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Holographic optical crystal substrate enabling instant associative semantic indexing and eternal biological knowledge preservation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>CAPACITY DENSITY</span>
              <span className="text-blue-400 font-bold">5.2 PETABYTES</span>
            </div>
          </motion.div>

          {/* Card 6: ADAPTIVE CORE (Heuristic neural feedback loop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onMouseEnter={() => soundFx.playHover()}
            className="p-6 rounded-2xl bg-cyber-950/80 border border-amber-500/30 hover:border-amber-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-900 border border-amber-500/30 text-amber-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-amber-400 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/20">
                  AUTO-HEURISTIC
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">TECH::ARCH-06</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                  ADAPTIVE CORE
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Self-calibrating algorithmic governor balancing power consumption, synaptic thermal dissipation, and reflex acceleration.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>ACCLIMATION RATE</span>
              <span className="text-amber-400 font-bold">99.9% HARMONY</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
