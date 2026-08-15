import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, Cpu, Activity, CheckCircle, Terminal, RefreshCw, Sparkles, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/SoundManager';

export const SystemOSModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('calibrate'); // 'calibrate' | 'configure' | 'ready'
  const [progress, setProgress] = useState(15);
  const [currentTask, setCurrentTask] = useState('Initializing Bio-Neural Interface...');
  const [formData, setFormData] = useState({
    subjectName: 'Alex Mercer',
    protocolClass: 'NEURAL-ARCHITECT',
    implantZone: 'Cortex-Layer-4',
    syncRate: '99.4%'
  });
  const [audioMuted, setAudioMuted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStep('calibrate');
      setProgress(15);
      return;
    }

    soundFx.playInitialize();

    const tasks = [
      { p: 35, text: 'Scanning Synaptic Frequency Bands...' },
      { p: 65, text: 'Calibrating Optical Cortex & Neural Bus...' },
      { p: 88, text: 'Verifying Bio-Cybernetic Security Encryption...' },
      { p: 100, text: 'Neural Interface Synchronized. Core Ready.' }
    ];

    let timerId;
    let idx = 0;

    const runSequence = () => {
      if (idx < tasks.length) {
        setProgress(tasks[idx].p);
        setCurrentTask(tasks[idx].text);
        soundFx.playHover();
        idx++;
        timerId = setTimeout(runSequence, 650);
      } else {
        setTimeout(() => {
          setStep('configure');
        }, 500);
      }
    };

    timerId = setTimeout(runSequence, 400);

    return () => clearTimeout(timerId);
  }, [isOpen]);

  const handleMuteToggle = () => {
    const isMuted = soundFx.toggleMute();
    setAudioMuted(isMuted);
  };

  const handleFinalize = (e) => {
    e.preventDefault();
    soundFx.playClick();
    setStep('ready');

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f3ff', '#8b5cf6', '#ffffff']
    });
  };

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cyber-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-2xl bg-cyber-900/95 border border-cyan-500/30 rounded-lg p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 z-10 cyber-corner scanlines overflow-hidden"
        >
          {/* Top Window Header */}
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-ping" />
              <div className="font-mono text-xs text-cyan-400 tracking-wider">
                CYBORG::OS // PROTOCOL INITIALIZATION
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleMuteToggle}
                className="p-1.5 text-slate-400 hover:text-cyan-400 rounded transition-colors"
                title={audioMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* STEP 1: CALIBRATION */}
          {step === 'calibrate' && (
            <div className="space-y-6 py-4">
              <div className="flex items-center justify-center py-6">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin" style={{ animationDuration: '6s' }} />
                  <div className="absolute inset-2 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-violet-500 border-l-transparent animate-spin" style={{ animationDuration: '2s' }} />
                  <Activity className="w-10 h-10 text-cyan-400 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-mono text-xs text-slate-400">
                  <span>{currentTask}</span>
                  <span className="text-cyan-400 font-bold">{progress}%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              <div className="font-mono text-[11px] text-slate-500 bg-cyber-950/80 p-3 rounded border border-white/5 space-y-1">
                <p>&gt; MEMORY BUFFER: ALLOCATED (0x7FFF98)</p>
                <p>&gt; BIO-SYNAPSE LATENCY: 0.12ms [OPTIMAL]</p>
                <p>&gt; QUANTUM ENCRYPTION: SHA-512 SECURE</p>
              </div>
            </div>
          )}

          {/* STEP 2: CONFIGURE SUBJECT PROFILE */}
          {step === 'configure' && (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleFinalize}
              className="space-y-5"
            >
              <div className="bg-cyan-950/30 border border-cyan-500/20 p-4 rounded-md flex items-start space-x-3">
                <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-cyan-300">Neural Gateway Opened.</span> Configure your bio-digital credentials below to initialize access to the Cyborg Evolution network.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5 uppercase">
                    Subject Name / Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subjectName}
                    onChange={(e) => setFormData({ ...formData, subjectName: e.target.value })}
                    className="w-full bg-cyber-950 border border-cyan-500/30 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 px-3.5 py-2.5 rounded text-sm text-white font-mono outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5 uppercase">
                    Augmentation Protocol
                  </label>
                  <select
                    value={formData.protocolClass}
                    onChange={(e) => setFormData({ ...formData, protocolClass: e.target.value })}
                    className="w-full bg-cyber-950 border border-cyan-500/30 focus:border-cyan-400 px-3.5 py-2.5 rounded text-sm text-white font-mono outline-none"
                  >
                    <option value="NEURAL-ARCHITECT">Neural Architect (Cognitive Sync)</option>
                    <option value="OPTICAL-OPERATIVE">Optical Operative (Sensory Augmented)</option>
                    <option value="SYNTHETIC-ENGINEER">Synthetic Engineer (Bionics)</option>
                    <option value="QUANTUM-NETRUNNER">Quantum Netrunner (Full Integration)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5 uppercase">
                    Target Cortex Zone
                  </label>
                  <input
                    type="text"
                    value={formData.implantZone}
                    onChange={(e) => setFormData({ ...formData, implantZone: e.target.value })}
                    className="w-full bg-cyber-950 border border-cyan-500/30 focus:border-cyan-400 px-3.5 py-2.5 rounded text-sm text-white font-mono outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5 uppercase">
                    Calculated Sync Rate
                  </label>
                  <div className="w-full bg-cyber-950 border border-cyan-500/30 px-3.5 py-2.5 rounded text-sm font-mono text-emerald-400 flex items-center justify-between">
                    <span>99.4% SYNC</span>
                    <span className="text-[10px] text-slate-500">GRADE A+</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-3 border-t border-cyan-500/20">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 font-mono text-xs text-slate-400 hover:text-white transition-colors"
                >
                  ABORT
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-orbitron font-bold text-xs uppercase tracking-wider rounded transition-all shadow-lg shadow-cyan-500/30 flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>INITIALIZE PROTOCOL</span>
                </button>
              </div>
            </motion.form>
          )}

          {/* STEP 3: DIGITAL BADGE / SYNTHETIC PASS */}
          {step === 'ready' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="text-center space-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white">
                  NEURAL LINK ESTABLISHED
                </h3>
                <p className="text-xs text-slate-400">
                  Subject profile registered in the Cyborg Decentralized Neural Registry.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="bg-gradient-to-br from-cyber-800 to-cyber-950 p-5 rounded-lg border border-cyan-400/40 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                      AUGMENTATION ACCESS PASS
                    </span>
                    <h4 className="font-orbitron font-bold text-base text-white mt-0.5">
                      {formData.subjectName}
                    </h4>
                  </div>
                  <div className="font-mono text-right">
                    <span className="text-[10px] text-slate-400 block">ID: CYB-2026-X89</span>
                    <span className="text-[11px] font-bold text-emerald-400">STATUS: SYNCED</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-slate-500 block">PROTOCOL</span>
                    <span className="text-slate-200 font-semibold">{formData.protocolClass.split('-')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">ZONE</span>
                    <span className="text-slate-200 font-semibold">{formData.implantZone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">NEURAL LINK</span>
                    <span className="text-cyan-400 font-bold">99.4%</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>VERIFICATION: 0x9B22...E4</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-3 bg-cyan-400" />
                    <div className="w-2 h-3 bg-cyan-400" />
                    <div className="w-1 h-3 bg-slate-600" />
                    <div className="w-3 h-3 bg-cyan-400" />
                    <div className="w-1 h-3 bg-cyan-400" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={onClose}
                  className="px-8 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded font-mono text-xs font-semibold tracking-wider transition-colors"
                >
                  ENTER SYSTEM INTERFACE
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
