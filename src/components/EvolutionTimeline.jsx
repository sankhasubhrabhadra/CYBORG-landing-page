import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dna, Binary, Brain, Cpu, Bot, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const EvolutionTimeline = () => {
  const [selectedPhase, setSelectedPhase] = useState(3); // default to AUGMENTED (Phase 04)

  const phases = [
    {
      phase: 'PHASE 01',
      title: 'BIOLOGICAL',
      era: 'ORIGIN — 2000 CE',
      icon: Dna,
      headline: 'Organic Biological Foundation',
      desc: 'Natural Darwinian evolution constrained by biological DNA mutation rates, cellular degradation, and metabolic limits.',
      technologies: 'Carbon Molecular Chains, Biological Neural Synapses, Organic Sensory Organs',
      accent: 'border-emerald-500/30 text-emerald-400',
    },
    {
      phase: 'PHASE 02',
      title: 'DIGITAL',
      era: '2000 — 2022 CE',
      icon: Binary,
      headline: 'External Silicon Computation',
      desc: 'Microprocessors, internet protocols, and handheld mobile glass functioning as external cognitive accessories.',
      technologies: 'Silicon Transistors, World Wide Web, Distributed Databases, Handheld Hardware',
      accent: 'border-blue-500/30 text-blue-400',
    },
    {
      phase: 'PHASE 03',
      title: 'INTELLIGENT',
      era: '2022 — 2026 CE',
      icon: Brain,
      headline: 'Generative Synthetic Reasoning',
      desc: 'Large language models and multimodal neural networks collaborating with human knowledge workers in real-time.',
      technologies: 'Transformer Architectures, High-Density GPU Arrays, Semantic Vector Indexing',
      accent: 'border-indigo-500/30 text-indigo-400',
    },
    {
      phase: 'PHASE 04',
      title: 'AUGMENTED',
      era: 'CURRENT EPOCH (2026+)',
      icon: Cpu,
      headline: 'Direct Bio-Neural Integration',
      desc: 'Direct cortical mesh interfaces, bionic sensory implants, and symbiotic machine co-processing at the cellular boundary.',
      technologies: 'Brain-Computer Links, Carbon Nanotube Bionics, Real-Time Biometric Telemetry',
      accent: 'border-cyan-500/40 text-cyan-400',
    },
    {
      phase: 'PHASE 05',
      title: 'SYNTHETIC',
      era: '2035 — 2050 CE',
      icon: Bot,
      headline: 'Cellular Cybernetic Redesign',
      desc: 'Complete synthetic bio-replacement, nanotech self-repair, and non-biological substrates exceeding natural physical caps.',
      technologies: 'Synthetic Biology, Nanite Regenerative Mesh, Cryo-Stabilized Bio-Silicon',
      accent: 'border-violet-500/30 text-violet-400',
    },
    {
      phase: 'PHASE 06',
      title: 'UNKNOWN',
      era: 'BEYOND 2050 CE',
      icon: HelpCircle,
      headline: 'Substrate-Independent Consciousness',
      desc: 'Unshackled multi-nodal conscious intelligence operating seamlessly across distributed cosmic quantum fields.',
      technologies: 'Quantum Mind Migration, Distributed Hive Matrices, Trans-Physical Synthesis',
      accent: 'border-pink-500/30 text-pink-400',
    },
  ];

  return (
    <section id="evolution" className="py-24 sm:py-32 relative bg-cyber-900/40 border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SPECIES CHRONOLOGY // 06 PHASES</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            THE EVOLUTION PROTOCOL
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Tracing the trajectory from organic biological inception to distributed cybernetic transcendence.
          </p>
        </div>

        {/* 6-Stage Interactive Stepper */}
        <div className="relative mb-12">
          {/* Connecting Rail */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500/30 via-cyan-400 to-pink-500/30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {phases.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = selectedPhase === idx;

              return (
                <motion.div
                  key={stage.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedPhase(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 flex flex-col items-center text-center cyber-corner ${
                    isSelected
                      ? 'bg-cyber-850 border-cyan-400 shadow-[0_0_25px_rgba(0,243,255,0.35)] scale-105'
                      : 'bg-cyber-950/80 border-white/10 hover:border-cyan-500/30 hover:bg-cyber-900'
                  }`}
                >
                  <span className="font-mono text-[10px] text-cyan-400 mb-2 font-bold">{stage.phase}</span>
                  
                  <div className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                      : 'bg-cyber-900 border-white/10 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-orbitron font-bold text-xs sm:text-sm text-white tracking-wider">
                    {stage.title}
                  </h3>
                  <span className="font-mono text-[9px] text-slate-400 mt-1">
                    {stage.era}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detail Showcase */}
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-cyber-950/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative cyber-corner overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-cyan-400 font-bold">
                  {phases[selectedPhase].phase} // {phases[selectedPhase].era}
                </span>
              </div>
              <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white">
                {phases[selectedPhase].title} — {phases[selectedPhase].headline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {phases[selectedPhase].desc}
              </p>
            </div>

            <div className="lg:col-span-4 bg-cyber-900/80 border border-white/10 rounded-xl p-4 font-mono text-xs space-y-2">
              <span className="text-[10px] text-slate-500 block uppercase">KEY PARADIGM TECHNOLOGIES:</span>
              <p className="text-cyan-300 font-medium leading-relaxed">
                {phases[selectedPhase].technologies}
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>STATUS: {selectedPhase === 3 ? 'ACTIVE EPOCH' : selectedPhase < 3 ? 'ESTABLISHED' : 'PREDICTED FUTURE'}</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
