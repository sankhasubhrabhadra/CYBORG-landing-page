import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Network, Brain, Eye, Activity, Database, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const TechnologyGrid = () => {
  // Simulated tensor stream for AI Cognition card
  const [matrixStream, setMatrixStream] = useState(['0xFA48', '0x11BC', '0x99D2', '0x43E0']);
  // Simulated changing heuristic rate for Adaptive Core card
  const [adaptiveRate, setAdaptiveRate] = useState(99.8);

  useEffect(() => {
    const interval = setInterval(() => {
      const hex = () => '0x' + Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, '0');
      setMatrixStream([hex(), hex(), hex(), hex()]);
      setAdaptiveRate(+(99.4 + Math.random() * 0.5).toFixed(2));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech-grid" className="py-24 sm:py-32 relative bg-cyber-950 border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>BENTO ARCHITECTURE // 06 SUB-SYSTEMS</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
              TECHNOLOGY GRID
            </h2>
            <p className="text-slate-400 max-w-lg text-sm sm:text-base">
              Asymmetrical modular engineering framework uniting biological cognition and machine precision.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-500 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>FRAMEWORK: v8.4.2 PRODUCTION</span>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: NEURAL INTERFACE (Large 8-col card with animated pulse mesh) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => soundFx.playHover()}
            className="md:col-span-12 lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-cyber-900/80 border border-cyan-500/30 hover:border-cyan-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-950 border border-cyan-500/30 text-cyan-400">
                  <Network className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-cyan-300 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 font-bold">
                  0.08ms BUS LATENCY
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">TECH::ARCH-01</span>
                <h3 className="font-orbitron font-black text-2xl text-white group-hover:text-cyan-300 transition-colors">
                  NEURAL INTERFACE
                </h3>
              </div>

              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Direct bio-computational bridge translating organic neurological action potentials into quantum machine instructions at the cortical boundary.
              </p>
            </div>

            {/* Visual Animated Synapse Network Graphic */}
            <div className="mt-8 pt-4 border-t border-white/5 space-y-3 relative z-10">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>SYNAPSE MESH NODES</span>
                <span className="text-cyan-400 font-bold">10,000 ACTIVE LINKS</span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[94, 88, 99, 92, 96, 98].map((pct, i) => (
                  <div key={i} className="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"
                      style={{ width: `${pct}%`, animationDelay: `${i * 0.2}s` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI COGNITION (4-col card with dynamic matrix tensor stream) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onMouseEnter={() => soundFx.playHover()}
            className="md:col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-cyber-900/80 border border-violet-500/30 hover:border-violet-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-950 border border-violet-500/30 text-violet-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex space-x-1 font-mono text-[9px] text-violet-300">
                  {matrixStream.map((h, i) => (
                    <span key={i} className="bg-violet-950/80 px-1 py-0.5 rounded border border-violet-500/30">{h}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">TECH::ARCH-02</span>
                <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-violet-300 transition-colors">
                  AI COGNITION
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Co-evolutionary machine learning models running in parallel with biological consciousness.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>TENSOR CAPACITY</span>
              <span className="text-violet-400 font-bold">14.2 PFLOPS</span>
            </div>
          </motion.div>

          {/* Card 3: OPTICAL AUGMENTATION (4-col card with scanning laser HUD) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onMouseEnter={() => soundFx.playHover()}
            className="md:col-span-6 lg:col-span-4 p-6 rounded-2xl bg-cyber-900/80 border border-cyan-500/30 hover:border-cyan-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Animated Laser scanline */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline pointer-events-none opacity-70" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-950 border border-cyan-500/30 text-cyan-400">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                  16K HDR HUD
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">TECH::ARCH-03</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  OPTICAL AUGMENTATION
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Retinal projection integrating telemetry diagnostics, multi-spectrum electromagnetic filters, and biometric HUD overlays.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>FOV ANGLE</span>
              <span className="text-cyan-400 font-bold">220° PANORAMIC</span>
            </div>
          </motion.div>

          {/* Card 4: SYNTHETIC MUSCLE (4-col card with force load meter) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onMouseEnter={() => soundFx.playHover()}
            className="md:col-span-6 lg:col-span-4 p-6 rounded-2xl bg-cyber-900/80 border border-emerald-500/30 hover:border-emerald-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-950 border border-emerald-500/30 text-emerald-400">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                  8x FORCE DENSITY
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">TECH::ARCH-04</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                  SYNTHETIC MUSCLE
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Electro-active carbon nanotube myofibrils interwoven alongside skeletal muscle structures for zero-fatigue biomechanics.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>ACTUATOR RESPONSE</span>
              <span className="text-emerald-400 font-bold">&lt; 0.02ms</span>
            </div>
          </motion.div>

          {/* Card 5: MEMORY CORE & ADAPTIVE CORE (4-col card with crystalline storage & heuristic loop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onMouseEnter={() => soundFx.playHover()}
            className="md:col-span-12 lg:col-span-4 p-6 rounded-2xl bg-cyber-900/80 border border-blue-500/30 hover:border-blue-400 shadow-xl transition-all duration-300 cyber-corner flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-lg bg-cyber-950 border border-blue-500/30 text-blue-400">
                  <Database className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] text-blue-300 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30">
                  CRYSTAL PERSISTENCE
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">TECH::ARCH-05 &amp; 06</span>
                <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                  MEMORY &amp; ADAPTIVE CORE
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Holographic optical crystal substrate enabling instant associative semantic indexing and dynamic self-calibrating synaptic weights.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>HEURISTIC ACCLIMATION</span>
              <span className="text-cyan-400 font-bold">{adaptiveRate}% HARMONY</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
