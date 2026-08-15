import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, Cpu, RefreshCw, Sparkles, Check, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const CyberTerminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [outputLines, setOutputLines] = useState([
    { type: 'sys', text: 'CYBORG//01 TERMINAL CORE v7.4.2 [SECURE SHELL]' },
    { type: 'sys', text: 'Type "help" to display available protocol directives.' },
    { type: 'sys', text: ' ' },
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputLines]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playClick();
    setCommandHistory((prev) => [...prev, inputVal]);
    setHistoryIndex(-1);

    const newOutputs = [...outputLines, { type: 'input', text: `> ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newOutputs.push(
          { type: 'res', text: 'AVAILABLE DIRECTIVES:' },
          { type: 'res', text: '  status       - Comprehensive hardware & neural sync status' },
          { type: 'res', text: '  core         - Query neural quantum core parameters' },
          { type: 'res', text: '  augment      - Display active bio-cybernetic implants' },
          { type: 'res', text: '  diagnostics  - Run self-healing neural diagnostic routine' },
          { type: 'res', text: '  overclock    - Engage high-frequency quantum bus boost' },
          { type: 'res', text: '  system       - Output host machine architecture info' },
          { type: 'res', text: '  clear        - Clear terminal output display' }
        );
        break;

      case 'status':
        newOutputs.push(
          { type: 'res', text: 'STATUS TELEMETRY:' },
          { type: 'res', text: '  Neural Sync:      98.72% [OPTIMAL]' },
          { type: 'res', text: '  Processing Load:  67.4% [NOMINAL]' },
          { type: 'res', text: '  Bio-Voltage:      36.8mV [STABLE]' },
          { type: 'res', text: '  Quantum Qubits:   16,384 Active Entangled Nodes' },
          { type: 'res', text: '  Link Latency:     0.08ms' }
        );
        break;

      case 'core':
        newOutputs.push(
          { type: 'res', text: 'NEURAL CORE STATE: ONLINE' },
          { type: 'res', text: '  Clock Frequency: 128.4 GHz Substrate' },
          { type: 'res', text: '  Cognitive Buffer: 5.2 TB/s Synaptic Bandwidth' },
          { type: 'res', text: '  Encryption: 1024-Bit Biometric Quantum Key' }
        );
        break;

      case 'augment':
        newOutputs.push(
          { type: 'res', text: 'ACTIVE AUGMENTATION MODULES:' },
          { type: 'res', text: '  [01] OPTICAL SYSTEM     - 16K HDR Micro-LED Ocular Lens' },
          { type: 'res', text: '  [02] NEURAL INTERFACE   - 10k Nano-Electrode Mesh' },
          { type: 'res', text: '  [03] SYNTHETIC MUSCLE   - Carbon Nanotube Actuators' },
          { type: 'res', text: '  [04] MEMORY CORE        - Quantum Crystal Holographic Bank' },
          { type: 'res', text: '  [05] SENSORY ARRAY      - 360° Electromagnetic Scanner' }
        );
        break;

      case 'diagnostics':
        soundFx.playInitialize();
        newOutputs.push(
          { type: 'res', text: 'INITIATING SYSTEM DIAGNOSTICS...' },
          { type: 'res', text: '  [✓] Bio-electric equilibrium validated.' },
          { type: 'res', text: '  [✓] Optic nerve sync: 0.00% drift detected.' },
          { type: 'res', text: '  [✓] Motor actuator impedance: optimal.' },
          { type: 'res', text: '  RESULT: ALL SUB-SYSTEMS 100% HEALTHY.' }
        );
        break;

      case 'overclock':
        newOutputs.push(
          { type: 'res', text: 'OVERCLOCK DIRECTIVE TRANSMITTED:' },
          { type: 'res', text: '  Frequency boosted to 142.8 GHz.' },
          { type: 'res', text: '  Cryo-cooling engaged to prevent cortical heat dissipation.' }
        );
        break;

      case 'system':
        newOutputs.push(
          { type: 'res', text: 'SYSTEM ARCHITECTURE:' },
          { type: 'res', text: '  Host OS: CYBORG-NEURAL-OS v7.4.2' },
          { type: 'res', text: '  Kernel: Quantum-Symbiosis 64-Bit Microkernel' },
          { type: 'res', text: '  Host ID: HOST::ALPHA-707 (SECTOR 07)' }
        );
        break;

      case 'clear':
        setOutputLines([]);
        setInputVal('');
        return;

      default:
        newOutputs.push({
          type: 'err',
          text: `Command not recognized: "${inputVal}". Type "help" for available directives.`
        });
        break;
    }

    setOutputLines(newOutputs);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <section id="terminal" className="py-24 sm:py-32 relative bg-cyber-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-400/20 font-mono text-xs text-cyan-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE SHELL // CLI DIRECTIVE INTERFACE</span>
          </div>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase">
            CYBORG//TERMINAL
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Execute direct low-level kernel directives to query sub-systems, run diagnostics, and inspect machine telemetry.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="bg-[#05080e] border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl cyber-corner font-mono text-xs">
          
          {/* Terminal Window Bar */}
          <div className="bg-cyber-900 px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-slate-400 ml-2 font-mono">root@cyborg-core:~</span>
            </div>
            <div className="text-[10px] text-cyan-400 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>INTERACTIVE TTY</span>
            </div>
          </div>

          {/* Terminal Console Output Body */}
          <div className="p-5 space-y-1.5 h-80 overflow-y-auto scanlines">
            {outputLines.map((line, idx) => (
              <div
                key={idx}
                className={`leading-relaxed ${
                  line.type === 'input'
                    ? 'text-cyan-300 font-bold'
                    : line.type === 'err'
                    ? 'text-red-400'
                    : line.type === 'sys'
                    ? 'text-slate-400'
                    : 'text-slate-200'
                }`}
              >
                {line.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Input Form */}
          <form
            onSubmit={handleCommand}
            className="p-3 bg-cyber-950 border-t border-cyan-500/20 flex items-center space-x-2"
          >
            <span className="text-cyan-400 font-bold">&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'status', 'diagnostics', or 'clear'..."
              className="w-full bg-transparent text-white font-mono text-xs outline-none placeholder-slate-600"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 rounded text-[11px] font-mono tracking-wider transition-colors"
            >
              RUN
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
