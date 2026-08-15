# CYBORG//01 — HUMAN × MACHINE EVOLUTION

> **"Biological intelligence enhanced by computational intelligence."**  
> A competition-grade, futuristic cybernetic operating system & AI laboratory landing page built with React 18, Vite, Tailwind CSS, and Framer Motion.

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## ✨ Design Philosophy

`CYBORG//01` follows a strict **70% clean UI + 30% futuristic effects** principle. The aesthetic evokes an advanced medical technology laboratory, quantum AI research center, and cybernetic operating system rather than a generic neon gaming template:

- **Deep Black / Graphite Surfaces**: `#040507`, `#07090e`, `#0c1017` with subtle micro-scanlines.
- **Accents**: Neon Cyan (`#00f3ff`) and Electric Violet (`#8b5cf6`).
- **Typography**: Google Fonts — **Orbitron**, **Rajdhani**, and **Space Grotesk** for precise technical hierarchy.
- **Micro-Interactions**: Glassmorphism, thin glowing borders, real-time interactive canvas nodes, magnetic cursor tracking, and synthetic Web Audio feedback.

---

## 🚀 Key Features & Interactive Architecture

### 1. ⚡ Non-Blocking System Bootstrap
- A real-time diagnostic status indicator verifying the neural core, optical systems, memory crystals, and machine links.

### 2. 🎯 Custom Futuristic Cursor System
- Precision center dot with a smooth lagging outer ring that expands magnetically over interactive buttons, nodes, and cards (automatically disabled on touch screens).

### 3. ⌨️ Global Command Palette (`Ctrl + K` / `Cmd + K`)
- Press **`Ctrl + K`** (or click the header badge) to open the **CYBORG COMMAND CENTER** with arrow-key navigation, instant search, section jumps, and sound toggles.

### 4. 🧠 5-Node Interactive Neural Core
- Central glowing core surrounded by 5 orbital nodes: `COGNITION`, `PERCEPTION`, `MEMORY`, `ADAPTATION`, and `PROCESSING`.
- Dynamic canvas energy beams connect each node to the core on hover/click, updating telemetry and biological specs.

### 5. 🔬 Cybernetic Body Interface (Augmentation Map)
- Anatomical silhouette with 5 interactive diagnostic hotspots: `OPTICAL SYSTEM`, `NEURAL INTERFACE`, `SYNTHETIC MUSCLE`, `MEMORY CORE`, and `SENSORY ARRAY`.
- Live medical inspection console displaying health indexes, biometric parameters, and hardware specs.

### 6. 📊 Bento-Style Technology Grid
- 6 modular architecture cards with distinct visual treatments:
  - **Neural Interface** (synapse pulse simulation)
  - **AI Cognition** (live tensor matrix stream)
  - **Optical Augmentation** (moving laser scan)
  - **Synthetic Muscle** (biomechanical force load meter)
  - **Memory System** (quantum crystal density)
  - **Adaptive Core** (heuristic acclimation loop)

### 7. 📈 Live System Telemetry Hub
- Real-time telemetry monitoring: `NEURAL SYNC 98.7%`, `PROCESSING LOAD 67.4%`, `REACTION TIME 12ms`, `ADAPTATION 91.8%`, `COGNITIVE BANDWIDTH 84.2%`.
- Real-time animated oscilloscope SVG wave graph and interactive **"ENGAGE OVERCLOCK"** button.

### 8. 💻 Interactive Cyber Terminal CLI
- Real-time functional shell supporting directives:
  - `help` — List all commands
  - `status` — System hardware & neural sync status
  - `core` — Neural core quantum telemetry
  - `augment` — Active bio-cybernetic implants
  - `diagnostics` — Run self-healing diagnostics
  - `overclock` — High-frequency bus boost
  - `system` — Host machine architecture
  - `clear` — Clear terminal screen

### 9. 🧬 The Evolution Protocol
- 6-phase species chronology:
  - `PHASE 01 BIOLOGICAL`
  - `PHASE 02 DIGITAL`
  - `PHASE 03 INTELLIGENT`
  - `PHASE 04 AUGMENTED`
  - `PHASE 05 SYNTHETIC`
  - `PHASE 06 UNKNOWN`

### 10. 🔊 Synthesized Web Audio Engine
- Built-in real-time Web Audio API sound synthesis with zero external audio assets and instant `SOUND: OFF` / `SOUND: ON` controls.

---

## 🛠️ Project Structure

```
cyborg-evolution/
├── index.html                     # Semantic structure & Google Fonts preconnect
├── package.json
├── tailwind.config.js             # Sci-fi tokens, glow filters & color scheme
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx                    # Core orchestrator
│   ├── index.css                  # Custom cybernetic utilities, scanlines & scrollbars
│   ├── components/
│   │   ├── BootSequence.jsx       # Non-blocking startup telemetry banner
│   │   ├── CustomCursor.jsx       # Magnetic desktop cursor
│   │   ├── CommandPalette.jsx     # Ctrl+K command modal
│   │   ├── Navbar.jsx             # Glassmorphic header & mobile drawer
│   │   ├── Hero.jsx               # Editorial headline & 3D parallax cyborg visual
│   │   ├── NeuralCore.jsx         # 5-node interactive synapse network
│   │   ├── AugmentationMap.jsx    # Anatomical silhouette & medical inspector
│   │   ├── TechnologyGrid.jsx     # Bento architecture grid
│   │   ├── SystemTelemetry.jsx    # 5 live metrics & SVG oscilloscope
│   │   ├── HumanVsMachine.jsx     # Augmented Intelligence symbiosis
│   │   ├── CyberTerminal.jsx      # Interactive CLI shell
│   │   ├── EvolutionTimeline.jsx  # 6-phase chronology
│   │   ├── FinalCTA.jsx           # Dramatic call-to-action
│   │   ├── Footer.jsx             # Technical metadata footer
│   │   ├── SystemOSModal.jsx      # Calibration gateway & pass generator
│   │   └── BackgroundMatrix.jsx   # Particle grid canvas
│   ├── utils/
│   │   └── SoundManager.js        # Web Audio API synthesizer
│   └── assets/                    # Optimized visuals & icons
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Run

```bash
# 1. Clone or navigate to the project directory
cd cyborg-evolution

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit **`http://localhost:5173/`** in your browser.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + K` / `Cmd + K` | Open **CYBORG COMMAND CENTER** |
| `↑` / `↓` | Navigate Command Palette items |
| `Enter` | Execute selected command |
| `Esc` | Close modal / command palette |

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.
