import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Cpu, Activity, Dna, Layers, ShieldCheck, Volume2, VolumeX, ArrowRight, X } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const CommandPalette = ({ isOpen, onClose, onOpenModal, onToggleSound, isMuted }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'neural-core',
      title: 'Go to Neural Core',
      desc: 'Interactive 5-node synaptic network visualization',
      icon: Cpu,
      category: 'NAVIGATION',
      action: () => scrollTo('#neural-core'),
    },
    {
      id: 'augmentation-map',
      title: 'View Augmentation Map',
      desc: 'Anatomical cybernetic silhouette inspector',
      icon: Layers,
      category: 'NAVIGATION',
      action: () => scrollTo('#augmentation-map'),
    },
    {
      id: 'telemetry',
      title: 'Open System Telemetry',
      desc: 'Live telemetry metrics and dynamic waveform frequency',
      icon: Activity,
      category: 'NAVIGATION',
      action: () => scrollTo('#telemetry'),
    },
    {
      id: 'tech-grid',
      title: 'Explore Technology Grid',
      desc: 'Bento modular architecture overview',
      icon: Layers,
      category: 'NAVIGATION',
      action: () => scrollTo('#tech-grid'),
    },
    {
      id: 'terminal',
      title: 'Launch Cyber Terminal',
      desc: 'Interactive CLI command console',
      icon: Terminal,
      category: 'TOOLS',
      action: () => scrollTo('#terminal'),
    },
    {
      id: 'evolution',
      title: 'The Evolution Protocol',
      desc: 'Chronological timeline of biological to synthetic species',
      icon: Dna,
      category: 'NAVIGATION',
      action: () => scrollTo('#evolution'),
    },
    {
      id: 'init-system',
      title: 'Initialize System Protocol',
      desc: 'Open bio-digital calibration gateway and pass generator',
      icon: ShieldCheck,
      category: 'SYSTEM',
      action: () => {
        onClose();
        onOpenModal();
      },
    },
    {
      id: 'toggle-audio',
      title: isMuted ? 'Enable Audio FX' : 'Disable Audio FX (Mute)',
      desc: 'Toggle synthesized Web Audio feedback',
      icon: isMuted ? Volume2 : VolumeX,
      category: 'PREFERENCES',
      action: () => {
        onToggleSound();
        onClose();
      },
    },
  ];

  const scrollTo = (hash) => {
    onClose();
    soundFx.playClick();
    const elem = document.querySelector(hash);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredActions = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.desc.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      soundFx.playHover();
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        soundFx.playHover();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        soundFx.playHover();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040507]/80 backdrop-blur-md"
        />

        {/* Command Center Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-cyber-900/95 border border-cyan-500/30 rounded-xl shadow-2xl z-10 cyber-corner overflow-hidden"
        >
          {/* Header & Search */}
          <div className="flex items-center px-4 py-3.5 border-b border-cyan-500/20 bg-cyber-950/60">
            <Search className="w-4 h-4 text-cyan-400 mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search section..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              className="w-full bg-transparent font-mono text-sm text-white placeholder-slate-500 outline-none"
            />
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-white p-1 rounded transition-colors ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="p-6 text-center font-mono text-xs text-slate-500">
                NO MATCHING PROTOCOL COMMANDS FOUND
              </div>
            ) : (
              filteredActions.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = selectedIndex === idx;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick();
                      item.action();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-500/15 border border-cyan-400/40 text-white'
                        : 'hover:bg-white/5 text-slate-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded border ${
                        isSelected ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-900 border-white/10 text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-orbitron text-xs font-bold">{item.title}</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/5">
                            {item.category}
                          </span>
                        </div>
                        <p className="font-mono text-[11px] text-slate-400">{item.desc}</p>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Info */}
          <div className="px-4 py-2 bg-cyber-950 border-t border-cyan-500/10 flex items-center justify-between font-mono text-[10px] text-slate-500">
            <span>USE ↑ / ↓ TO NAVIGATE</span>
            <span>PRESS ENTER TO EXECUTE</span>
            <span>ESC TO DISMISS</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
