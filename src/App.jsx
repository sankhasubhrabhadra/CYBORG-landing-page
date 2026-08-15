import React, { useState, useEffect } from 'react';
import { BootSequence } from './components/BootSequence';
import { CustomCursor } from './components/CustomCursor';
import { CommandPalette } from './components/CommandPalette';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NeuralCore } from './components/NeuralCore';
import { AugmentationMap } from './components/AugmentationMap';
import { TechnologyGrid } from './components/TechnologyGrid';
import { SystemTelemetry } from './components/SystemTelemetry';
import { HumanVsMachine } from './components/HumanVsMachine';
import { CyberTerminal } from './components/CyberTerminal';
import { EvolutionTimeline } from './components/EvolutionTimeline';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SystemOSModal } from './components/SystemOSModal';
import { BackgroundMatrix } from './components/BackgroundMatrix';
import { soundFx } from './utils/SoundManager';

export function App() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Global Ctrl + K / Cmd + K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="min-h-screen bg-[#040507] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
      
      {/* 1. Cinematic Boot Sequence */}
      {!bootCompleted && (
        <BootSequence onComplete={() => setBootCompleted(true)} />
      )}

      {/* 2. Custom Futuristic Cursor System */}
      <CustomCursor />

      {/* 3. Ambient Neural Mesh Background */}
      <BackgroundMatrix />

      {/* 4. Global Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenModal={() => setModalOpen(true)}
        onToggleSound={handleToggleSound}
        isMuted={isMuted}
      />

      {/* 5. Futuristic Navigation Bar */}
      <Navbar
        onOpenModal={() => setModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onToggleSound={handleToggleSound}
        isMuted={isMuted}
      />

      {/* 6. Main High-End Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <Hero onOpenModal={() => setModalOpen(true)} />

        {/* Section 2: Neural Core (5 Interactive Nodes) */}
        <NeuralCore />

        {/* Section 3: Augmentation Map (Anatomical Hotspots) */}
        <AugmentationMap />

        {/* Section 4: Technology Grid (Bento Matrix) */}
        <TechnologyGrid />

        {/* Section 5: System Telemetry (5 Metrics + Live Wave) */}
        <SystemTelemetry />

        {/* Section 6: Human vs Machine (Augmented Intelligence) */}
        <HumanVsMachine />

        {/* Section 7: Cyber Terminal (Interactive Shell) */}
        <CyberTerminal />

        {/* Section 8: The Evolution Protocol (6 Phases) */}
        <EvolutionTimeline />

        {/* Section 9: Final CTA */}
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
      </main>

      {/* 7. Technical Footer */}
      <Footer />

      {/* 8. Calibration Terminal Modal */}
      <SystemOSModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
