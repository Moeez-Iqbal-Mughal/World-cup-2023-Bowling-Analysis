# 🏆 ICC Cricket World Cup 2023 Bowling Phase Analysis

An interactive, high-fidelity React Single Page Application (SPA) designed to visualize and analyze bowling performances across critical match divisions (Powerplay, Middle, Death, and Total) during the ICC Cricket World Cup 2023.

Built with a **luxury dark premium aesthetic**, it leverages advanced visual design systems like glassmorphism, responsive grids, and ambient glow fields.

---

## ✨ Features

- **🏆 Dynamic Phase Tabs**: Filter metrics instantly between **Total Tournament**, **Powerplay** (Overs 1-10), **Middle** (Overs 11-40), and **Death** (Overs 41-50) phases.
- **📊 Interactive Leaderboard**: Real-time conditional table columns displaying matches (`MAT`), runs conceded (`RUNS` - conditionally rendered on Total phase), and economy rate (`ECON`).
- **💡 Strategic Dispatches**: Real-time insights card providing deep tactical context about bowling phases and team spinner/pacer effectiveness.
- **🎨 Luxury Dark Design**: Uses a custom-tailored color palette per phase, premium typography (Cinzel & Plus Jakarta Sans), glowing ambient mesh backgrounds, and custom-styled widgets.
- **📱 Fully Mobile Responsive**: Engineered with a strict mobile layout that features horizontal swipe-based phase buttons, inline headers, and dynamic table column gaps to prevent text truncation/overlaps.
- **🏳️ FlagCDN Integration**: Fetches official country flags dynamically from FlagCDN to streamline mobile spacing.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: Vanilla CSS (Premium gradients, custom variables, adaptive grids)
- **Icons & Flags**: [FlagCDN](https://flagcdn.com/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone or copy the repository files.
2. Open your terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite local development server:
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Building for Production

To build an optimized production bundle (which checks Route guards and transpiles CSS):
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
wc2023-bowling/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, fonts, and icons
│   ├── App.css             # Main styling & responsive queries
│   ├── App.jsx             # Stats database, insights, and UI layout
│   ├── index.css           # Global typography and theme tokens
│   ├── main.jsx            # Routing guard & entry point
│   └── vite.config.js      # Build configurations
├── package.json            # Scripts & dependencies
└── README.md               # Documentation
```

---

## 🎯 Match Divisions & Stats Overview

- **Total (Tournament)**: Includes matches, wickets, runs conceded, and economy rate. Highlights tournament bests (Mohammed Shami) and struggles (Shadab Khan).
- **Powerplay (Overs 1–10)**: Analyzes new-ball control (e.g. Jasprit Bumrah's 3.32 economy) and wicket strikers (Marco Jansen's 12 wickets).
- **Middle (Overs 11–40)**: Spin-focused metrics (e.g. Adam Zampa's 17 wickets) and phase choking.
- **Death (Overs 41–50)**: High-pressure closing overs analysis.
