// Futuristic Sci-Fi Synthetic Audio FX using Web Audio API
class CyberAudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = true; // Off by default as required by spec (SOUND: OFF)
  }

  init() {
    try {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch (e) {
      // Audio context suppressed safely
    }
  }

  playBeep(freq = 880, duration = 0.06, type = 'sine', gainVal = 0.04) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Silently catch audio restrictions
    }
  }

  playHover() {
    this.playBeep(1200, 0.03, 'triangle', 0.015);
  }

  playClick() {
    this.playBeep(1760, 0.08, 'sine', 0.03);
    setTimeout(() => this.playBeep(2340, 0.06, 'sine', 0.025), 40);
  }

  playInitialize() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [440, 659, 880, 1320];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playBeep(freq, 0.15, 'sine', 0.04);
        }, idx * 60);
      });
    } catch (e) {}
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }
}

export const soundFx = new CyberAudioEngine();
