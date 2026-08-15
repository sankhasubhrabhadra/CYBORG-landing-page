import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Brain, Activity, Database, Radio, Check, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const AugmentationMap = () => {
  const [selectedZone, setSelectedZone] = useState('neural');

  const zones = [
    {
      id: 'optical',
      name: 'OPTICAL SYSTEM',
      code: 'ANAT::OCULAR-401',
      x: '50%',
      y: '14%',
      icon: Eye,
      status: 'CALIBRATED',
      health: '99.8%',
      summary: 'Augmented retinal HUD with dynamic optical zooming, infrared spectrum decoding, and instant threat telemetry.',
      specs: [
        '16K HDR Micro-LED Ocular Lens',
        'Thermal, Infrared & UV Spectrum Overlay',
        'Direct Optic Nerve Synaptic Link',
        'Auto-Target Acquisition & Biometric ID'
      ],
      color: '#00f3ff'
    },
    {
      id: 'neural',
      name: 'NEURAL INTERFACE',
      code: 'ANAT::CORTEX-889',
      x: '50%',
      y: '8%',
      icon: Brain,
      status: 'SYNCHRONIZED',
      health: '98.9%',
      summary: 'High-density ultra-flexible mesh electrode array interfacing across motor, sensory, and prefrontal cerebral cortex.',
      specs: [
        '10,000 Nano-Electrode Synapse Mesh',
        '0.06ms Bidirectional Neural Telemetry',
        'Subconscious Thought-to-Command Relay',
        'Zero-Latency Quantum Coprocessor Integration'
      ],
      color: '#8b5cf6'
    },
    {
      id: 'memory',
      name: 'MEMORY CORE',
      code: 'ANAT::CRYS-770',
      x: '50%',
      y: '22%',
      icon: Database,
      status: 'ONLINE',
      health: '100.0%',
      summary: 'Sub-cranial quantum storage crystal bank acting as an associative index and external persistent memory prosthetic.',
      specs: [
        '5.2 Petabytes Holographic Quantum Density',
        'Instantaneous Semantic Search & Recall',
        'Lossless Biometric Encryption Key',
        'Automatic Neural Backup Snapshot Protocol'
      ],
      color: '#3b82f6'
    },
    {
      id: 'muscle',
      name: 'SYNTHETIC MUSCLE',
      code: 'ANAT::BION-912',
      x: '38%',
      y: '46%',
      icon: Activity,
      status: 'OPERATIONAL',
      health: '97.4%',
      summary: 'Carbon-nanotube artificial myofibril actuators interwoven alongside organic skeletal muscle groups.',
      specs: [
        '8x Strength-to-Weight Power Ratio',
        'Zero Motor Drift Micro-Actuators',
        'Self-Healing Polymer Sheath',
        'Integrated Impact Shock Absorbers'
      ],
      color: '#10b981'
    },
    {
      id: 'sensory',
      name: 'SENSORY ARRAY',
      code: 'ANAT::TELE-304',
      x: '62%',
      y: '46%',
      icon: Radio,
      status: 'ACTIVE',
      health: '99.1%',
      summary: 'Distributed bio-electric and ambient electromagnetic sensors embedded throughout dermis layers.',
      specs: [
        '360° Electromagnetic Field Detection',
        'Atmospheric Chemical Composition Scanner',
        'Micro-Vibration Surface Sensing',
        'Sub-Millimeter Proximity Grid'
      ],
      color: '#f59e0b'
    },
  ];

  const activeData = zones.find((z) => z.id === selectedZone) || zones[1];

  return (
    <section id="augmentation-map" className="py-24 sm:py-32 relative bg-cyber-900/50 border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-violet-950/60 border border-violet-400/20 font-mono text-xs text-violet-300">
            <Activity className="w-3.5 h-3.5 text-violet-400" />
            <span>MEDICAL SCANNER // ANATOMICAL TELEMETRY</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            AUGMENTATION MAP
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Continuous holographic laser sweep. Select an implant zone to inspect physiological parameters.
          </p>
        </div>

        {/* Scanner & Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Medical Scanning Silhouette */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] bg-cyber-950/90 border border-cyan-500/30 rounded-2xl p-6 flex items-center justify-center cyber-corner shadow-2xl overflow-hidden">
              
              {/* Periodic Sweeping Horizontal Laser Beam */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f3ff] animate-scanline pointer-events-none opacity-70 z-20" />

              {/* Corner labels */}
              <div className="absolute top-3 left-4 font-mono text-[10px] text-slate-500">
                BIO-SCANNER // S-01
              </div>
              <div className="absolute top-3 right-4 font-mono text-[10px] text-cyan-400">
                SUBJECT: MALE-CYB7
              </div>

              {/* SVG Human Silhouette with Glowing Implants */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 200 320" className="w-full h-full opacity-75">
                  {/* Grid Lines */}
                  <line x1="100" y1="10" x2="100" y2="310" stroke="rgba(0,243,255,0.08)" strokeDasharray="3,3" />
                  <line x1="20" y1="160" x2="180" y2="160" stroke="rgba(0,243,255,0.08)" strokeDasharray="3,3" />
                  <circle cx="100" cy="160" r="80" stroke="rgba(0,243,255,0.04)" fill="none" />

                  {/* Body Outline */}
                  <path d="M100,20 C85,20 85,45 85,60 C85,75 95,85 100,85 C105,85 115,75 115,60 C115,45 115,20 100,20 Z" fill="rgba(16,24,39,0.9)" stroke="rgba(0,243,255,0.4)" strokeWidth="1.5" />
                  <path d="M93,85 L107,85 L108,98 L92,98 Z" fill="rgba(16,24,39,0.9)" stroke="rgba(0,243,255,0.3)" />
                  <path d="M60,105 L140,105 L130,200 L70,200 Z" fill="rgba(16,24,39,0.9)" stroke="rgba(0,243,255,0.35)" strokeWidth="1.5" />
                  <path d="M60,105 L45,150 L35,210 L45,210 L55,160 L68,120 Z" fill="rgba(16,24,39,0.9)" stroke="rgba(0,243,255,0.3)" />
                  <path d="M140,105 L155,150 L165,210 L155,210 L145,160 L132,120 Z" fill="rgba(16,24,39,0.9)" stroke="rgba(0,243,255,0.3)" />
                  <path d="M72,200 L68,260 L65,310 L82,310 L88,260 L95,200 Z" fill="rgba(16,24,39,0.9)" stroke="rgba(0,243,255,0.3)" />
                  <path d="M128,200 L132,260 L135,310 L118,310 L112,260 L105,200 Z" fill="rgba(16,24,39,0.9)" stroke="rgba(0,243,255,0.3)" />

                  {/* Active Highlight Glow */}
                  {selectedZone === 'neural' && (
                    <circle cx="100" cy="40" r="15" fill="rgba(139,92,246,0.55)" filter="blur(6px)" />
                  )}
                  {selectedZone === 'optical' && (
                    <circle cx="100" cy="52" r="9" fill="rgba(0,243,255,0.75)" filter="blur(4px)" />
                  )}
                  {selectedZone === 'memory' && (
                    <circle cx="100" cy="72" r="11" fill="rgba(59,130,246,0.65)" filter="blur(5px)" />
                  )}
                  {selectedZone === 'muscle' && (
                    <circle cx="50" cy="150" r="16" fill="rgba(16,185,129,0.65)" filter="blur(6px)" />
                  )}
                  {selectedZone === 'sensory' && (
                    <circle cx="150" cy="150" r="16" fill="rgba(245,158,11,0.65)" filter="blur(6px)" />
                  )}
                </svg>

                {/* Hotspot Pulsing Buttons */}
                {zones.map((zone) => {
                  const isCurrent = selectedZone === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedZone(zone.id);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      style={{ left: zone.x, top: zone.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 p-2 group cursor-pointer focus:outline-none z-30"
                      aria-label={`Select ${zone.name}`}
                    >
                      <span className="relative flex h-4 w-4">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isCurrent ? 'bg-cyan-400' : 'bg-slate-500'
                          }`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-4 w-4 border-2 transition-all ${
                            isCurrent
                              ? 'bg-cyan-400 border-white shadow-[0_0_12px_#00f3ff]'
                              : 'bg-slate-900 border-cyan-400/60 group-hover:border-cyan-400 group-hover:bg-cyan-950'
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Quick Zone Toggles */}
              <div className="absolute bottom-3 inset-x-4 flex justify-center space-x-1.5 z-30">
                {zones.map((z) => (
                  <button
                    key={z.id}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedZone(z.id);
                    }}
                    className={`px-2 py-1 rounded text-[9px] font-mono transition-colors ${
                      selectedZone === z.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                        : 'bg-slate-900/80 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {z.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Medical Telemetry Inspection Console */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-cyber-950/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl cyber-corner relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg border border-cyan-500/40 bg-cyber-900 text-cyan-400">
                      {React.createElement(activeData.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                        {activeData.code}
                      </span>
                      <h3 className="font-orbitron font-black text-2xl text-white">
                        {activeData.name}
                      </h3>
                    </div>
                  </div>

                  <div className="font-mono text-right">
                    <span className="text-[10px] text-slate-500 block">HEALTH INDEX</span>
                    <span className="text-sm font-bold text-emerald-400">{activeData.health}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeData.summary}
                </p>

                {/* Specifications Checklist */}
                <div className="space-y-2">
                  <span className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wider block">
                    PHYSIOLOGICAL PARAMETERS &amp; SPECS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {activeData.specs.map((spec, i) => (
                      <div key={i} className="p-2.5 rounded bg-cyber-900/80 border border-white/5 font-mono text-xs text-slate-300 flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer telemetry status */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>STATUS: {activeData.status}</span>
                  </span>
                  <span>ENCRYPTION: 1024-BIT BIO-KEY</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
