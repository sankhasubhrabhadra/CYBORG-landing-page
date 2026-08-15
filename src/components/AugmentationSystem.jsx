import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Scan, Activity, Database, Check, ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const AugmentationSystem = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      num: '01',
      techId: 'MOD::NEURO-882',
      title: 'NEURAL INTERFACE',
      desc: 'Direct communication between biological cognition and computational systems.',
      fullSpecs: 'Sub-millisecond latency cortical link with bidirectional data telemetry and synaptic translation.',
      icon: Network,
      status: 'SYNCHRONIZED',
      statusColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-950/60 border-cyan-500/30',
      specs: ['0.12ms Latency', 'High-Density Mesh', 'Bidirectional Bus']
    },
    {
      num: '02',
      techId: 'MOD::OPTI-409',
      title: 'OPTICAL ENHANCEMENT',
      desc: 'Advanced visual processing and augmented perception.',
      fullSpecs: 'Multi-spectrum optical overlay with real-time biometric analysis, target acquisition, and HUD diagnostics.',
      icon: Scan,
      status: 'CALIBRATED',
      statusColor: 'text-violet-400',
      badgeBg: 'bg-violet-950/60 border-violet-500/30',
      specs: ['16K HDR Optical', 'Thermal & IR Mode', 'Target Tracking']
    },
    {
      num: '03',
      techId: 'MOD::ACTU-711',
      title: 'SYNTHETIC MUSCLE',
      desc: 'Machine-assisted strength and precision.',
      fullSpecs: 'Carbon-nanotube artificial muscle fiber arrays providing 10x biological force density and micro-precision motor control.',
      icon: Activity,
      status: 'OPERATIONAL',
      statusColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-950/60 border-emerald-500/30',
      specs: ['Carbon Nanotube', '10x Force Ratio', 'Zero Reflex Delay']
    },
    {
      num: '04',
      techId: 'MOD::CORTEX-X',
      title: 'MEMORY CORE',
      desc: 'Machine-supported knowledge retention and retrieval.',
      fullSpecs: 'Quantum-persistent associative memory crystal bank with instantaneous semantic search and bio-index integration.',
      icon: Database,
      status: 'ONLINE',
      statusColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-950/60 border-cyan-500/30',
      specs: ['Quantum Crystal', 'Petabyte Storage', 'Instant Recall']
    },
  ];

  return (
    <section id="augmentation" className="py-24 sm:py-32 relative bg-cyber-950">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-violet-950/60 border border-violet-400/20 font-mono text-xs text-violet-300">
              <Zap className="w-3.5 h-3.5 text-violet-400" />
              <span>SECTION 03 // AUGMENTATION SYSTEM</span>
            </div>
            <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
              CYBERNETIC AUGMENTATION
            </h2>
            <p className="text-slate-400 max-w-xl text-sm sm:text-base">
              Precision bio-engineered modular enhancements designed for seamless physiological and cognitive synergy.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-500 flex items-center space-x-4">
            <span>MODULAR PROTOCOL v4.8</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-400">4 ACTIVE UPGRADES</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = selectedModule === idx;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => {
                  soundFx.playHover();
                  setSelectedModule(idx);
                }}
                onMouseLeave={() => setSelectedModule(null)}
                className={`group relative p-6 rounded-xl border bg-cyber-900/70 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cyber-corner ${
                  isHovered
                    ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(0,243,255,0.2)] -translate-y-1.5 bg-cyber-850'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {/* Card Top */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-orbitron font-bold text-2xl text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {item.num}
                    </span>
                    <span className={`font-mono text-[10px] px-2.5 py-1 rounded border ${item.badgeBg} ${item.statusColor} font-semibold flex items-center space-x-1`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-cyber-950 border border-white/10 w-fit text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="font-mono text-[11px] text-slate-500 tracking-wider">
                      {item.techId}
                    </div>
                    <h3 className="font-orbitron font-bold text-lg text-white mt-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Card Bottom Specs */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
                      <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle corner highlight */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-cyan-400/80 transition-all rounded-tr-lg" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
