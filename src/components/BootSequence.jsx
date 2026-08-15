import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const BootSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let timerId = null;

    const sequence = [
      { p: 35, log: 'NEURAL CORE ........ ONLINE' },
      { p: 65, log: 'OPTICAL SYSTEM ..... ONLINE' },
      { p: 85, log: 'MEMORY CORE ........ ONLINE' },
      { p: 100, log: 'MACHINE LINK ....... STABLE' },
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (!isMounted) return;
      if (currentIdx < sequence.length) {
        const item = sequence[currentIdx];
        if (item) {
          setProgress(item.p);
          setLogs((prev) => [...prev, item.log]);
        }
        currentIdx++;
      } else {
        clearInterval(interval);
        timerId = setTimeout(() => {
          if (isMounted) {
            setVisible(false);
            if (onComplete) onComplete();
          }
        }, 1200);
      }
    }, 250);

    return () => {
      isMounted = false;
      clearInterval(interval);
      if (timerId) clearTimeout(timerId);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.25 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg bg-cyber-900/95 border border-cyan-400/40 rounded-xl p-4 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl cyber-corner scanlines"
      >
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-3">
          <div className="flex items-center space-x-2 font-mono text-xs text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold tracking-wider">BOOTSTRAP SEQUENCE // CYBORG::01</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-cyan-400 font-bold">{progress}%</span>
            <button
              onClick={() => {
                setVisible(false);
                if (onComplete) onComplete();
              }}
              className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-cyan-500/30 mb-3">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Diagnostics Checklist */}
        <div className="space-y-1 font-mono text-[11px]">
          {logs.map((log, i) => (
            <div key={i} className="flex items-center justify-between text-slate-300">
              <span className="text-cyan-300">&gt; {log}</span>
              <span className="text-emerald-400 font-bold text-[10px]">[READY]</span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
