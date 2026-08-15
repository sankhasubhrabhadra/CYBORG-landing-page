import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/SoundManager';

export const BootSequence = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const steps = [
    { title: 'INITIALIZING NEURAL ARCHITECTURE', sub: 'Calibrating synaptic bus frequency...' },
    { title: 'CONNECTING BIOLOGICAL LAYER', sub: 'Mapping cortical neural pathways...' },
    { title: 'CONNECTING MACHINE LAYER', sub: 'Synchronizing quantum coprocessors...' },
    { title: 'SYSTEM READY', sub: 'All 16,384 Qubits operational.' },
  ];

  useEffect(() => {
    let isMounted = true;
    const interval = setInterval(() => {
      if (!isMounted) return;
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            if (isMounted) {
              setVisible(false);
              if (onComplete) onComplete();
            }
          }, 600);
          return prev;
        }
      });
    }, 320);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [onComplete]);

  if (!visible) return null;

  const currentStep = steps[stepIndex];
  const progressPercent = Math.round(((stepIndex + 1) / steps.length) * 100);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-md bg-cyber-900/95 border border-cyan-500/30 rounded-xl p-4 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl cyber-corner scanlines"
      >
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-orbitron font-bold text-xs text-white tracking-wider">
              CYBORG<span className="text-cyan-400">//01</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-cyan-400 font-bold">{progressPercent}%</span>
            <button
              onClick={() => {
                setVisible(false);
                if (onComplete) onComplete();
              }}
              className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-slate-950 rounded-full overflow-hidden border border-cyan-500/20 mb-3">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.25 }}
          />
        </div>

        {/* Current Boot Step */}
        <div className="flex items-center justify-between font-mono text-xs">
          <div>
            <div className="text-cyan-300 font-semibold tracking-wide flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentStep.title}</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">{currentStep.sub}</div>
          </div>
          <span className="text-emerald-400 text-[10px] font-bold">[OK]</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
