import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Eye, Database, Sparkles, Cpu, Activity, Zap, CheckCircle2, Shield } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const NeuralCore = () => {
  const [activeNode, setActiveNode] = useState(0); // 0 to 4
  const canvasRef = useRef(null);

  const nodes = [
    {
      id: 'cognition',
      title: 'COGNITION',
      subtitle: 'Enhanced computational reasoning operating alongside biological intelligence.',
      icon: Brain,
      techId: 'SYN-COG::709',
      efficiency: '99.4%',
      latency: '0.08ms',
      specs: [
        'Cortical parallel tensor coprocessor',
        'Intuitive-logical associative bridge',
        'Zero-drift symbolic validation engine',
      ],
      color: '#00f3ff',
    },
    {
      id: 'perception',
      title: 'PERCEPTION',
      subtitle: 'Multi-spectrum sensory awareness and real-time biometric telemetry synthesis.',
      icon: Eye,
      techId: 'OPT-SENS::441',
      efficiency: '98.8%',
      latency: '0.02ms',
      specs: [
        'Full electromagnetic spectrum decoding (UV to IR)',
        'Micro-expression & thermal signature tracking',
        'Spatial acoustic beamforming integration',
      ],
      color: '#8b5cf6',
    },
    {
      id: 'memory',
      title: 'MEMORY',
      subtitle: 'Lossless associative quantum crystal storage with instantaneous recall.',
      icon: Database,
      techId: 'Q-MEM::9800',
      efficiency: '100.0%',
      latency: '0.01ms',
      specs: [
        'Petabyte-scale quantum spin crystal substrate',
        'Instant associative semantic indexing',
        'Immune to biological degenerative decay',
      ],
      color: '#3b82f6',
    },
    {
      id: 'adaptation',
      title: 'ADAPTATION',
      subtitle: 'Self-modifying synaptic plasticity with real-time heuristic machine learning.',
      icon: Sparkles,
      techId: 'HEUR-ADAPT::12',
      efficiency: '96.5%',
      latency: '0.12ms',
      specs: [
        'Dynamic neural weight reconfiguration',
        'Continuous reinforcement from motor telemetry',
        'Autonomous error-correction heuristics',
      ],
      color: '#10b981',
    },
    {
      id: 'processing',
      title: 'PROCESSING',
      subtitle: 'Distributed neural cluster execution with sub-millisecond bus synchronization.',
      icon: Cpu,
      techId: 'CORE-PROC::X64',
      efficiency: '99.8%',
      latency: '0.04ms',
      specs: [
        '64,000 Qubit entangled logic gates',
        'Cryo-stabilized bio-silicon junction bus',
        'Asynchronous event-driven neuromorphic clock',
      ],
      color: '#f59e0b',
    },
  ];

  // Draw dynamic 5-node orbit canvas with glowing energy beams to center
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const size = 360;
    canvas.width = size;
    canvas.height = size;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;
      time += 0.02;

      // Outer boundary ring
      ctx.beginPath();
      ctx.arc(cx, cy, 135, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Middle rotating dashed ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.3);
      ctx.beginPath();
      ctx.arc(0, 0, 95, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.setLineDash([6, 8]);
      ctx.stroke();
      ctx.restore();

      // Central Pulsating Core
      const pulse = Math.sin(time * 3) * 5;
      const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 45 + pulse);
      grad.addColorStop(0, 'rgba(0, 243, 255, 0.9)');
      grad.addColorStop(0.4, 'rgba(139, 92, 246, 0.5)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, 40 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core center reticle
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // 5 Nodes positions (72 deg apart)
      const radius = 135;
      for (let i = 0; i < 5; i++) {
        const angle = (i * (Math.PI * 2)) / 5 - Math.PI / 2 + Math.sin(time * 0.5) * 0.05;
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * radius;

        const isCurrent = activeNode === i;

        // Energy beam to center
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = isCurrent ? nodes[i].color : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = isCurrent ? 2.5 : 1;
        if (isCurrent) {
          ctx.shadowColor = nodes[i].color;
          ctx.shadowBlur = 8;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Node Circle
        ctx.beginPath();
        ctx.arc(nx, ny, isCurrent ? 9 : 6, 0, Math.PI * 2);
        ctx.fillStyle = isCurrent ? nodes[i].color : '#1e293b';
        ctx.strokeStyle = isCurrent ? '#ffffff' : 'rgba(0, 243, 255, 0.4)';
        ctx.lineWidth = 2;
        if (isCurrent) {
          ctx.shadowColor = nodes[i].color;
          ctx.shadowBlur = 14;
        }
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animFrame);
  }, [activeNode]);

  return (
    <section id="neural-core" className="py-24 sm:py-32 relative bg-cyber-950 border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARCHITECTURE // INTERACTIVE SYNAPSE CLUSTER</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            THE NEURAL CORE
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hover over the orbital nodes to inspect how biological cognitive substrates interface with machine acceleration.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center: Interactive Orbital Canvas & Quick Selectors */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6">
            <div className="relative p-4 rounded-2xl bg-cyber-900/80 border border-cyan-500/30 shadow-2xl flex flex-col items-center cyber-corner">
              
              <div className="absolute top-3 left-4 font-mono text-[10px] text-cyan-400">
                CORE FREQUENCY // 128.4 GHz
              </div>
              <div className="absolute top-3 right-4 font-mono text-[10px] text-emerald-400">
                ACTIVE
              </div>

              <canvas ref={canvasRef} className="w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] my-2" />

              <div className="w-full flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[11px] text-slate-400">
                <span>SELECT ORBITAL NODE</span>
                <span className="text-cyan-400">5 INTERCONNECTED AXES</span>
              </div>
            </div>

            {/* Quick Node Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-md">
              {nodes.map((n, idx) => (
                <button
                  key={n.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveNode(idx);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all ${
                    activeNode === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                      : 'bg-cyber-900 border border-white/10 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {n.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed Telemetry Panel for Active Node */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={nodes[activeNode].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-cyber-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative cyber-corner overflow-hidden"
              >
                {/* Panel Top Meta */}
                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="p-3 rounded-lg border bg-cyber-950 text-cyan-400"
                      style={{ borderColor: nodes[activeNode].color }}
                    >
                      {React.createElement(nodes[activeNode].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                        {nodes[activeNode].techId}
                      </span>
                      <h3 className="font-orbitron font-black text-2xl text-white">
                        {nodes[activeNode].title}
                      </h3>
                    </div>
                  </div>

                  <div className="font-mono text-right">
                    <span className="text-[10px] text-slate-500 block">EFFICIENCY</span>
                    <span className="text-sm font-bold text-emerald-400">
                      {nodes[activeNode].efficiency}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {nodes[activeNode].subtitle}
                </p>

                {/* Technical Specifications */}
                <div className="space-y-2.5 pt-2">
                  <span className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-wider block">
                    BIOMETRIC SPECIFICATIONS:
                  </span>
                  {nodes[activeNode].specs.map((s, i) => (
                    <div key={i} className="flex items-start space-x-2.5 font-mono text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
                  <span>LATENCY: <strong className="text-white">{nodes[activeNode].latency}</strong></span>
                  <span>PROTOCOL: <strong className="text-cyan-300">SYNC-v7</strong></span>
                  <span className="text-emerald-400 font-semibold">STATUS: NOMINAL</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
