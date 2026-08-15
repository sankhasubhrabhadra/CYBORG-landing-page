import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Compass, Cpu, Target, Database, Maximize2, ShieldCheck, Layers, BookOpen } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const HumanVsMachine = () => {
  const humanTraits = [
    { title: 'Creativity', desc: 'Unbounded lateral imagination and novel concept generation.', icon: Sparkles },
    { title: 'Emotion', desc: 'Empathy, nuanced ethics, and deep contextual intuition.', icon: Heart },
    { title: 'Intuition', desc: 'Rapid instinctual synthesis across incomplete sensory information.', icon: Compass },
    { title: 'Context', desc: 'Rich cultural, historical, and subjective situational awareness.', icon: BookOpen },
  ];

  const machineTraits = [
    { title: 'Processing', desc: 'Parallel quantum execution across petaflop computational clusters.', icon: Cpu },
    { title: 'Precision', desc: 'Atomic-scale motor accuracy with zero drift or mechanical degradation.', icon: Target },
    { title: 'Memory', desc: 'Instantaneous lossless holographic crystal storage and absolute recall.', icon: Database },
    { title: 'Scale', desc: 'Global synchronization across millions of interconnected nodes.', icon: Maximize2 },
  ];

  return (
    <section id="symbiosis" className="py-24 sm:py-32 relative bg-cyber-950 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-violet-950/60 border border-violet-400/20 font-mono text-xs text-violet-300">
            <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
            <span>SYMBIOSIS // DUAL SUBSTRATE SYNTHESIS</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            HUMAN × MACHINE
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Not replacement, but mutual elevation. The union of organic biological depth and synthetic computing capability.
          </p>
        </div>

        {/* Side-by-Side Comparison with Glowing Central Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-stretch mb-16">
          
          {/* Left Column: HUMAN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-cyber-900/80 border border-violet-500/30 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between cyber-corner"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-violet-500/20">
                <div>
                  <span className="font-mono text-[10px] text-violet-400 uppercase tracking-widest block">
                    ORIGIN SUBSTRATE
                  </span>
                  <h3 className="font-orbitron font-black text-3xl text-white">
                    HUMAN
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-violet-950 border border-violet-500/30 font-mono text-xs text-violet-300">
                  BIOLOGICAL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {humanTraits.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => soundFx.playHover()}
                      className="p-4 rounded-xl bg-cyber-950/70 border border-white/5 hover:border-violet-400/40 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center space-x-2 text-violet-400">
                        <Icon className="w-4 h-4" />
                        <span className="font-orbitron font-bold text-sm text-slate-200">
                          {t.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-violet-400/80">
              CORE STRENGTH: Organic Creativity &amp; Ethical Context
            </div>
          </motion.div>

          {/* Center Column: Glowing Divider + "×" */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="hidden lg:block w-px h-28 bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
            
            <div className="relative py-4 px-2 my-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-cyber-900 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(0,243,255,0.4)]">
                <span className="font-orbitron font-black text-cyan-400 text-xl">×</span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-28 bg-gradient-to-b from-transparent via-violet-400 to-transparent" />
          </div>

          {/* Right Column: MACHINE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-cyber-900/80 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between cyber-corner"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
                <div>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                    SYNTHETIC SUBSTRATE
                  </span>
                  <h3 className="font-orbitron font-black text-3xl text-white">
                    MACHINE
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/30 font-mono text-xs text-cyan-300">
                  ARTIFICIAL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {machineTraits.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => soundFx.playHover()}
                      className="p-4 rounded-xl bg-cyber-950/70 border border-white/5 hover:border-cyan-400/40 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <Icon className="w-4 h-4" />
                        <span className="font-orbitron font-bold text-sm text-slate-200">
                          {t.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-cyan-400/80">
              CORE STRENGTH: Quantum Computation &amp; Scalable Precision
            </div>
          </motion.div>

        </div>

        {/* Transition into: AUGMENTED INTELLIGENCE banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyber-950 via-cyber-900 to-cyber-950 border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden cyber-corner shadow-2xl"
        >
          <div className="space-y-4 max-w-3xl mx-auto">
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block">
              PARADIGM SYNTHESIS
            </span>
            <h3 className="font-orbitron font-black text-2xl sm:text-4xl text-white uppercase tracking-wider">
              AUGMENTED INTELLIGENCE
            </h3>
            <p className="font-orbitron font-bold text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-violet-300">
              "THE FUTURE IS NOT HUMAN OR MACHINE.<br />IT IS HUMAN × MACHINE."
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-xl mx-auto pt-2">
              Unlocking the next evolutionary epoch through continuous cognitive and physiological augmentation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
