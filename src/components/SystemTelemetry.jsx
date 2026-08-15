import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Gauge, Terminal, RefreshCw, Zap, Shield, Cpu } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const SystemTelemetry = () => {
  const [metrics, setMetrics] = useState({
    systemStability: 99.98,
    neuralSync: 98.72,
    processing: 67.41,
    reaction: 12,
    cognitiveBandwidth: 84.20,
  });

  const [logs, setLogs] = useState([
    { time: '19:26:01', msg: 'TELEMETRY_BUS: Synaptic coherence verified across Layer-4' },
    { time: '19:26:04', msg: 'HEURISTIC_AI: Dynamic cognitive adaptation weight: 0.918' },
    { time: '19:26:07', msg: 'OPTIC_FEED: Micro-expression tracking active [120 FPS]' },
    { time: '19:26:10', msg: 'CRYSTAL_INDEX: Holographic memory checksum: 0x8F9A22 [Valid]' },
  ]);

  const [wavePoints, setWavePoints] = useState([]);
  const [isOverclocked, setIsOverclocked] = useState(false);

  // Micro-fluctuations for realistic live telemetry feel
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        systemStability: +(99.95 + Math.random() * 0.04).toFixed(2),
        neuralSync: +(isOverclocked ? 99.85 + Math.random() * 0.1 : 98.65 + Math.random() * 0.15).toFixed(2),
        processing: +(isOverclocked ? 91.2 + Math.random() * 2.5 : 66.8 + Math.random() * 1.5).toFixed(2),
        reaction: isOverclocked ? 6 : Math.round(11 + Math.random() * 2),
        cognitiveBandwidth: +(isOverclocked ? 98.4 + Math.random() * 1.2 : 83.8 + Math.random() * 0.8).toFixed(2),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isOverclocked]);

  // Real-time Oscilloscope Wave
  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      t += 0.18;
      const pts = [];
      for (let i = 0; i <= 28; i++) {
        const x = (i / 28) * 320;
        const base = Math.sin(t + i * 0.38) * 22;
        const noise = (Math.random() - 0.5) * (isOverclocked ? 14 : 5);
        const y = 45 + base + noise;
        pts.push(`${x},${y}`);
      }
      setWavePoints(pts.join(' '));
    }, 60);

    return () => clearInterval(interval);
  }, [isOverclocked]);

  const handleOverclock = () => {
    soundFx.playClick();
    setIsOverclocked(!isOverclocked);
    if (!isOverclocked) {
      setLogs((prev) => [
        { time: new Date().toLocaleTimeString(), msg: 'OVERCLOCK ENGAGED: Neural bus boosted to 142.8 GHz (+18% Power)' },
        ...prev.slice(0, 4)
      ]);
    } else {
      setLogs((prev) => [
        { time: new Date().toLocaleTimeString(), msg: 'STANDBY RESTORED: Thermal equilibrium back to 36.8°C.' },
        ...prev.slice(0, 4)
      ]);
    }
  };

  const handleRecalibrate = () => {
    soundFx.playClick();
    soundFx.playInitialize();
    setLogs((prev) => [
      { time: new Date().toLocaleTimeString(), msg: 'RECALIBRATION: Real-time neural sync and optical timing aligned to reference clock.' },
      ...prev.slice(0, 4)
    ]);
  };

  const metricList = [
    {
      label: 'SYSTEM STABILITY',
      value: metrics.systemStability,
      unit: '%',
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      desc: 'Quantum lattice equilibrium'
    },
    {
      label: 'NEURAL SYNC',
      value: metrics.neuralSync,
      unit: '%',
      color: 'text-violet-400',
      gradient: 'from-violet-500 to-purple-500',
      desc: 'Synaptic alignment index'
    },
    {
      label: 'PROCESSING',
      value: metrics.processing,
      unit: '%',
      color: 'text-emerald-400',
      gradient: 'from-emerald-500 to-teal-400',
      desc: 'Quantum substrate load'
    },
    {
      label: 'REACTION',
      value: metrics.reaction,
      unit: 'ms',
      color: 'text-amber-400',
      gradient: 'from-amber-500 to-orange-400',
      desc: 'Bio-motor reflex acceleration'
    },
    {
      label: 'COGNITIVE BANDWIDTH',
      value: metrics.cognitiveBandwidth,
      unit: '%',
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-400',
      desc: 'Cortical data transmission rate'
    },
  ];

  return (
    <section id="telemetry" className="py-24 sm:py-32 relative bg-cyber-950 border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
            <span>LIVE MONITORING // TELEMETRY SIMULATION</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            SYSTEM TELEMETRY
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Real-time simulated telemetry telemetry stream from active cybernetic host units.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-cyber-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative cyber-corner overflow-hidden">
          
          {/* Top Bar Controls */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <div>
                <span className="font-orbitron font-bold text-sm text-white block">
                  CYBERNETIC TELEMETRY MATRIX
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  SIMULATED HOST::ALPHA-707 // FREQUENCY: 128.4 GHz
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleRecalibrate}
                onMouseEnter={() => soundFx.playHover()}
                className="px-3.5 py-1.5 rounded bg-cyber-950 border border-slate-700 hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors flex items-center space-x-1.5"
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
                <span>{isOverclocked ? 'OVERCLOCK ENGAGED' : 'ENGAGE OVERCLOCK'}</span>
              </button>
            </div>
          </div>

          {/* 5 Required Metrics Cards with Live Micro-Interpolation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {metricList.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 rounded-xl bg-cyber-950/80 border border-white/5 space-y-2.5 cyber-corner"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400 font-semibold uppercase">{m.label}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className={`font-orbitron font-black text-2xl sm:text-3xl ${m.color}`}>
                    {m.value}
                  </span>
                  <span className="font-orbitron text-xs text-slate-500 font-bold">{m.unit}</span>
                </div>

                <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${m.gradient}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, m.value)}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <span className="font-mono text-[9px] text-slate-500 block truncate">
                  {m.desc}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Oscilloscope Waveform Graph + Live Telemetry Logs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Real-time Oscilloscope SVG Graph */}
            <div className="lg:col-span-7 bg-cyber-950 rounded-xl p-5 border border-cyan-500/20 space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-300 font-semibold flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>NEURAL SYNAPSE WAVEFORM FREQUENCY</span>
                </span>
                <span className="text-cyan-400">{isOverclocked ? '142.8 GHz // BOOST' : '128.4 GHz // NOMINAL'}</span>
              </div>

              <div className="h-28 bg-[#04060a] rounded-lg p-2 flex items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />
                <svg viewBox="0 0 320 90" className="w-full h-full overflow-visible">
                  <polyline
                    fill="none"
                    stroke={isOverclocked ? '#f43f5e' : '#00f3ff'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={wavePoints}
                    filter="drop-shadow(0 0 6px #00f3ff)"
                  />
                </svg>
              </div>

              <div className="flex justify-between font-mono text-[10px] text-slate-500">
                <span>0.00 ms (DELTA)</span>
                <span>HARMONIC SPECTRUM: 0 - 24,000 Hz</span>
                <span className="text-emerald-400">STATUS: ACTIVE</span>
              </div>
            </div>

            {/* Live Terminal Log Stream */}
            <div className="lg:col-span-5 bg-cyber-950 rounded-xl p-5 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300 flex items-center space-x-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>REAL-TIME SYSTEM LOG</span>
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
