import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Gauge, Terminal, RefreshCw, Zap, Shield, HardDrive } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const SystemDashboard = () => {
  const [metrics, setMetrics] = useState({
    neuralSync: 98.7,
    processing: 87.4,
    reaction: 94.2,
    adaptation: 91.8,
  });

  const [logs, setLogs] = useState([
    { time: '19:06:01', msg: 'CORE_KERNEL: Quantum neural bus operating at 128 Qubits' },
    { time: '19:06:03', msg: 'SYNAPSE_LINK: Bio-voltage stable at 36.8mV [Optimal]' },
    { time: '19:06:05', msg: 'OPTIC_TELEMETRY: HDR multi-spectrum feed rendering 120 FPS' },
    { time: '19:06:08', msg: 'HEURISTIC_AI: Dynamic cognitive adaptation weight updated' },
  ]);

  const [wavePoints, setWavePoints] = useState([]);
  const [isOverclocked, setIsOverclocked] = useState(false);

  // Animate dynamic neural wave graph
  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      t += 0.15;
      const points = [];
      for (let i = 0; i <= 24; i++) {
        const x = (i / 24) * 300;
        const base = Math.sin(t + i * 0.35) * 22;
        const noise = (Math.random() - 0.5) * (isOverclocked ? 14 : 6);
        const y = 45 + base + noise;
        points.push(`${x},${y}`);
      }
      setWavePoints(points.join(' '));
    }, 60);

    return () => clearInterval(interval);
  }, [isOverclocked]);

  const handleOverclock = () => {
    soundFx.playClick();
    setIsOverclocked(!isOverclocked);
    if (!isOverclocked) {
      setMetrics({
        neuralSync: 99.9,
        processing: 98.2,
        reaction: 99.4,
        adaptation: 97.6,
      });
      setLogs((prev) => [
        { time: new Date().toLocaleTimeString(), msg: 'OVERCLOCK ENGAGED: Neural frequency scaled to 14.8 GHz (+12.4% Power)' },
        ...prev.slice(0, 4)
      ]);
    } else {
      setMetrics({
        neuralSync: 98.7,
        processing: 87.4,
        reaction: 94.2,
        adaptation: 91.8,
      });
      setLogs((prev) => [
        { time: new Date().toLocaleTimeString(), msg: 'STANDBY ENGAGED: Core thermal equilibrium restored.' },
        ...prev.slice(0, 4)
      ]);
    }
  };

  const handleRecalibrate = () => {
    soundFx.playClick();
    soundFx.playInitialize();
    setLogs((prev) => [
      { time: new Date().toLocaleTimeString(), msg: 'CALIBRATION: Performing zero-drift optical & neural recalibration...' },
      ...prev.slice(0, 4)
    ]);
  };

  const metricCards = [
    {
      name: 'NEURAL SYNC',
      val: metrics.neuralSync,
      unit: '%',
      color: 'text-cyan-400',
      barColor: 'from-cyan-500 to-blue-500',
      desc: 'Synaptic alignment coefficient',
    },
    {
      name: 'PROCESSING',
      val: metrics.processing,
      unit: '%',
      color: 'text-violet-400',
      barColor: 'from-violet-500 to-purple-500',
      desc: 'Computational substrate capacity',
    },
    {
      name: 'REACTION',
      val: metrics.reaction,
      unit: '%',
      color: 'text-emerald-400',
      barColor: 'from-emerald-500 to-teal-400',
      desc: 'Bio-motor reflex acceleration',
    },
    {
      name: 'ADAPTATION',
      val: metrics.adaptation,
      unit: '%',
      color: 'text-amber-400',
      barColor: 'from-amber-500 to-orange-400',
      desc: 'Self-adjusting heuristic speed',
    },
  ];

  return (
    <section id="dashboard" className="py-24 sm:py-32 relative bg-cyber-900/60 border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
            <span>SECTION 04 // REAL-TIME TELEMETRY</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            SYSTEM DASHBOARD
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Live telemetry stream from active cybernetic host units. Continuous quantum telemetry and biocircuit monitoring.
          </p>
        </div>

        {/* HUD Control Board */}
        <div className="bg-cyber-950/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden cyber-corner">
          
          {/* Top Bar Status */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <div>
                <span className="font-orbitron font-bold text-sm text-white block">
                  CYBERNETIC CONTROL INTERFACE
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  HOST::ALPHA-707 // FIRMWARE v9.42
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleRecalibrate}
                onMouseEnter={() => soundFx.playHover()}
                className="px-3.5 py-1.5 rounded bg-cyber-900 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors flex items-center space-x-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RECALIBRATE</span>
              </button>

              <button
                onClick={handleOverclock}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-1.5 rounded font-mono text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isOverclocked
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isOverclocked ? 'OVERCLOCK ACTIVE' : 'ENGAGE OVERCLOCK'}</span>
              </button>
            </div>
          </div>

          {/* 4 Metrics Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {metricCards.map((m, idx) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-cyber-900/80 border border-white/5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400 font-semibold">{m.name}</span>
                  <Activity className={`w-4 h-4 ${m.color}`} />
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className={`font-orbitron font-black text-3xl sm:text-4xl ${m.color}`}>
                    {m.val}
                  </span>
                  <span className="font-orbitron text-base text-slate-500 font-bold">{m.unit}</span>
                </div>

                <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${m.barColor}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${m.val}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <span className="font-mono text-[10px] text-slate-500 block">
                  {m.desc}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom Grid: Live Wave Graph + Terminal Console Log */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Real-time Oscilloscope SVG Graph */}
            <div className="lg:col-span-7 bg-cyber-900/90 border border-cyan-500/20 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-300 font-semibold flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>NEURAL SYNAPSE WAVEFORM FREQUENCY</span>
                </span>
                <span className="text-cyan-400">{isOverclocked ? '14.8 GHz // BOOST' : '4.8 GHz // NOMINAL'}</span>
              </div>

              {/* SVG Wave */}
              <div className="h-28 bg-cyber-950 rounded-lg p-2 flex items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />
                <svg viewBox="0 0 300 90" className="w-full h-full overflow-visible">
                  <polyline
                    fill="none"
                    stroke={isOverclocked ? '#f43f5e' : '#00f3ff'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={wavePoints}
                    filter="drop-shadow(0 0 6px #00f3ff)"
                  />
                </svg>
              </div>

              <div className="flex justify-between font-mono text-[10px] text-slate-500">
                <span>0.00 ms (DELTA)</span>
                <span>SYNC SPECTRUM: 0 - 24,000 Hz</span>
                <span>HARMONIC: STABLE</span>
              </div>
            </div>

            {/* Live Terminal Log Stream */}
            <div className="lg:col-span-5 bg-cyber-950 rounded-xl p-5 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300 flex items-center space-x-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SYSTEM TELEMETRY LOG</span>
                </span>
                <span className="text-[10px] text-emerald-400">STREAMING</span>
              </div>

              <div className="space-y-2 h-28 overflow-y-auto pr-1">
                {logs.map((item, i) => (
                  <div key={i} className="text-[11px] leading-tight text-slate-400 flex items-start space-x-2">
                    <span className="text-cyan-500/70 select-none">[{item.time}]</span>
                    <span className="text-slate-300">{item.msg}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
