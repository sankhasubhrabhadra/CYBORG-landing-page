import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Eye, Database, Sparkles, Cpu, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/SoundManager';

export const NeuralCore = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [isSynchronized, setIsSynchronized] = useState(false);
  const [syncPulse, setSyncPulse] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  // Signature Interaction: Trigger Global Synchronization Pulse
  const handleSynchronize = () => {
    soundFx.playClick();
    soundFx.playInitialize();
    setIsSynchronized(true);
    setSyncPulse((prev) => prev + 1);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.55 },
      colors: ['#00f3ff', '#8b5cf6', '#ffffff']
    });

    setTimeout(() => {
      setIsSynchronized(false);
    }, 2500);
  };

  const handleCanvasMouseMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // Interactive 5-Node Dynamic Synaptic Core Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;

    const size = 380;
    canvas.width = size;
    canvas.height = size;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2 + mousePos.x * 12;
      const cy = size / 2 + mousePos.y * 12;
      time += 0.02;

      // Outer boundary orbit ring
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.strokeStyle = isSynchronized ? 'rgba(0, 243, 255, 0.4)' : 'rgba(0, 243, 255, 0.12)';
      ctx.lineWidth = isSynchronized ? 2 : 1;
      ctx.stroke();

      // Middle rotating dashed ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.35);
      ctx.beginPath();
      ctx.arc(0, 0, 95, 0, Math.PI * 2);
      ctx.strokeStyle = isSynchronized ? 'rgba(139, 92, 246, 0.6)' : 'rgba(139, 92, 246, 0.25)';
      ctx.setLineDash([6, 8]);
      ctx.stroke();
      ctx.restore();

      // Central Synaptic Pulse Core
      const pulseMultiplier = isSynchronized ? 12 : 5;
      const pulse = Math.sin(time * 3) * pulseMultiplier;
      const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 50 + pulse);
      grad.addColorStop(0, isSynchronized ? 'rgba(0, 243, 255, 1)' : 'rgba(0, 243, 255, 0.85)');
      grad.addColorStop(0.4, isSynchronized ? 'rgba(139, 92, 246, 0.7)' : 'rgba(139, 92, 246, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, 42 + pulse, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Central Reticle
      ctx.beginPath();
      ctx.arc(cx, cy, isSynchronized ? 16 : 12, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f3ff';
      ctx.shadowBlur = isSynchronized ? 20 : 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      // 5 Nodes positions & Dynamic Energy Streams
      const radius = 140;
      for (let i = 0; i < 5; i++) {
        const angle = (i * (Math.PI * 2)) / 5 - Math.PI / 2 + Math.sin(time * 0.4) * 0.04;
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * radius;

        const isCurrent = activeNode === i;

        // Dynamic Connecting Synaptic Beam
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = isCurrent || isSynchronized ? nodes[i].color : 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = isCurrent ? 2.5 : isSynchronized ? 2 : 1;
        if (isCurrent || isSynchronized) {
          ctx.shadowColor = nodes[i].color;
          ctx.shadowBlur = 10;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Energy Particle Pulse along connection line
        const particleProgress = (time * 1.5 + i * 0.6) % 1;
        const px = cx + (nx - cx) * particleProgress;
        const py = cy + (ny - cy) * particleProgress;
        ctx.beginPath();
        ctx.arc(px, py, isSynchronized ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = '#00f3ff';
        ctx.shadowColor = '#00f3ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Orbital Node Circle
        ctx.beginPath();
        ctx.arc(nx, ny, isCurrent ? 10 : 7, 0, Math.PI * 2);
        ctx.fillStyle = isCurrent || isSynchronized ? nodes[i].color : '#131b29';
        ctx.strokeStyle = isCurrent ? '#ffffff' : 'rgba(0, 243, 255, 0.4)';
        ctx.lineWidth = 2;
        if (isCurrent || isSynchronized) {
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
  }, [activeNode, isSynchronized, mousePos]);

  return (
    <section id="neural-core" className="py-24 sm:py-32 relative bg-[#04060a] border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>SIGNATURE INTERACTION // NEURAL SYNCHRONIZATION</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            THE NEURAL CORE
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Hover over orbital nodes or click to trigger full system neural synchronization.
          </p>
        </div>

        {/* Main Grid: Interactive Canvas Core + Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Signature Interactive Canvas Core */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-5">
            <div
              onClick={handleSynchronize}
              onMouseMove={handleCanvasMouseMove}
              className="relative p-4 rounded-2xl bg-cyber-900/80 border border-cyan-500/30 hover:border-cyan-400 shadow-2xl flex flex-col items-center cyber-corner cursor-pointer group transition-all duration-300"
              title="Click to Synchronize Neural Core"
            >
              {/* Corner status */}
              <div className="w-full flex items-center justify-between px-2 font-mono text-[10px]">
                <span className="text-slate-400">FREQUENCY: 128.4 GHz</span>
                <span className={`font-bold transition-colors ${isSynchronized ? 'text-emerald-400' : 'text-cyan-400'}`}>
                  {isSynchronized ? '● SYNCHRONIZED' : '● LIVE MATRIX'}
                </span>
              </div>

              <canvas
                ref={canvasRef}
                className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] my-1 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Click prompt overlay */}
              <div className="w-full pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400">CLICK TO SYNCHRONIZE</span>
                <span className="text-cyan-300 font-semibold flex items-center space-x-1">
                  <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
                  <span>{isSynchronized ? 'SYSTEM SYNCHRONIZED' : 'INITIALIZE PULSE'}</span>
                </span>
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

          {/* Right: Active Node Detail Showcase */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={nodes[activeNode].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-cyber-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl cyber-corner relative overflow-hidden"
              >
                {/* Header */}
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

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {nodes[activeNode].subtitle}
                </p>

                {/* Biometric Specifications */}
                <div className="space-y-2.5 pt-1">
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

                {/* Footer Telemetry */}
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
