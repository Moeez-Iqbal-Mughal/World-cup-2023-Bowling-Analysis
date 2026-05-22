import { useState } from "react";
import "./App.css";

const flagCodes = {
  IND: "in",
  AUS: "au",
  SL: "lk",
  SA: "za",
  PAK: "pk",
  NZ: "nz",
};

const getFlagUrl = (team) => {
  const code = team.split(" ").pop();
  const iso = flagCodes[code] || code.toLowerCase();
  return `https://flagcdn.com/w40/${iso}.png`;
};

const phases = [
  {
    id: "total",
    emoji: "🏆",
    label: "TOTAL",
    sub: "Official ICC World Cup 2023 Stats",
    color: "#8b5cf6",
    bestColor: "#c084fc",
    worstColor: "#ff1744",
    rows: [
      { bowler: "Mohammed Shami", team: "🇮🇳 IND", mat: 7, wkts: 24, runs: 283, econ: "5.86", best: true },
      { bowler: "Adam Zampa", team: "🇦🇺 AUS", mat: 11, wkts: 23, runs: 515, econ: "5.36" },
      { bowler: "Dilshan Madushanka", team: "🇱🇰 SL", mat: 9, wkts: 21, runs: 525, econ: "6.70" },
      { bowler: "Jasprit Bumrah", team: "🇮🇳 IND", mat: 11, wkts: 20, runs: 373, econ: "4.06" },
      { bowler: "Gerald Coetzee", team: "🇿🇦 SA", mat: 8, wkts: 20, runs: 396, econ: "6.23" },
      { bowler: "Shaheen Afridi", team: "🇵🇰 PAK", mat: 9, wkts: 18, runs: 481, econ: "5.94" },
      { bowler: "Marco Jansen", team: "🇿🇦 SA", mat: 9, wkts: 17, runs: 424, econ: "6.52" },
      { bowler: "Ravindra Jadeja", team: "🇮🇳 IND", mat: 11, wkts: 16, runs: 398, econ: "4.26" },
      { bowler: "Josh Hazlewood", team: "🇦🇺 AUS", mat: 11, wkts: 16, runs: 383, econ: "4.82" },
      { bowler: "Mitchell Santner", team: "🇳🇿 NZ", mat: 10, wkts: 16, runs: 401, econ: "4.85" },
      { bowler: "Mitchell Starc", team: "🇦🇺 AUS", mat: 10, wkts: 16, runs: 505, econ: "6.06" },
      { bowler: "Pat Cummins", team: "🇦🇺 AUS", mat: 11, wkts: 15, runs: 507, econ: "5.75" },
      { bowler: "Kuldeep Yadav", team: "🇮🇳 IND", mat: 11, wkts: 15, runs: 361, econ: "4.45" },
      { bowler: "Keshav Maharaj", team: "🇿🇦 SA", mat: 10, wkts: 15, runs: 344, econ: "4.15" },
      { bowler: "Trent Boult", team: "🇳🇿 NZ", mat: 10, wkts: 14, runs: 454, econ: "5.53" },
      { bowler: "Haris Rauf", team: "🇵🇰 PAK", mat: 9, wkts: 16, runs: 533, econ: "6.74" },
      { bowler: "Mohammad Nawaz", team: "🇵🇰 PAK", mat: 5, wkts: 2, runs: 223, econ: "5.89" },
      { bowler: "Shadab Khan", team: "🇵🇰 PAK", mat: 6, wkts: 2, runs: 237, econ: "5.68", worst: true },
    ],
  },
  {
    id: "powerplay",
    emoji: "⚡",
    label: "POWERPLAY",
    sub: "Estimated Phase Analytics",
    color: "#00e676",
    bestColor: "#69f0ae",
    worstColor: "#ff1744",
    rows: [
      { bowler: "Marco Jansen", team: "🇿🇦 SA", mat: 9, wkts: 12, econ: "5.30" },
      { bowler: "Mohammed Shami", team: "🇮🇳 IND", mat: 7, wkts: 9, econ: "4.90" },
      { bowler: "Jasprit Bumrah", team: "🇮🇳 IND", mat: 11, wkts: 7, econ: "3.32", best: true },
      { bowler: "Mohammed Siraj", team: "🇮🇳 IND", mat: 11, wkts: 7, econ: "4.80" },
      { bowler: "Shaheen Afridi", team: "🇵🇰 PAK", mat: 9, wkts: 5, econ: "5.34" },
      { bowler: "Mitchell Starc", team: "🇦🇺 AUS", mat: 10, wkts: 4, econ: "5.75" },
      { bowler: "Trent Boult", team: "🇳🇿 NZ", mat: 10, wkts: 4, econ: "5.95" },
      { bowler: "Haris Rauf", team: "🇵🇰 PAK", mat: 9, wkts: 3, econ: "6.74", worst: true },
    ],
  },
  {
    id: "middle",
    emoji: "🎯",
    label: "MIDDLE",
    sub: "Estimated Phase Analytics",
    color: "#ffd600",
    bestColor: "#ffe57f",
    worstColor: "#ff1744",
    rows: [
      { bowler: "Adam Zampa", team: "🇦🇺 AUS", mat: 11, wkts: 17, econ: "5.02", best: true },
      { bowler: "Ravindra Jadeja", team: "🇮🇳 IND", mat: 11, wkts: 14, econ: "4.25" },
      { bowler: "Kuldeep Yadav", team: "🇮🇳 IND", mat: 11, wkts: 12, econ: "4.45" },
      { bowler: "Mitchell Santner", team: "🇳🇿 NZ", mat: 10, wkts: 11, econ: "4.84" },
      { bowler: "Keshav Maharaj", team: "🇿🇦 SA", mat: 10, wkts: 10, econ: "4.15" },
      { bowler: "Shaheen Afridi", team: "🇵🇰 PAK", mat: 9, wkts: 7, econ: "5.50" },
      { bowler: "Mohammad Nawaz", team: "🇵🇰 PAK", mat: 5, wkts: 2, econ: "5.93" }, // Corrected match count to match official stats
      { bowler: "Shadab Khan", team: "🇵🇰 PAK", mat: 6, wkts: 2, econ: "5.68", worst: true },
    ],
  },
  {
    id: "death",
    emoji: "🔥",
    label: "DEATH",
    sub: "Estimated Phase Analytics",
    color: "#ff1744",
    bestColor: "#00e676",
    worstColor: "#ff1744",
    rows: [
      { bowler: "Mohammed Shami", team: "🇮🇳 IND", mat: 7, wkts: 10, econ: "7.20" },
      { bowler: "Jasprit Bumrah", team: "🇮🇳 IND", mat: 11, wkts: 9, econ: "5.50", best: true },
      { bowler: "Josh Hazlewood", team: "🇦🇺 AUS", mat: 11, wkts: 7, econ: "6.80" },
      { bowler: "Pat Cummins", team: "🇦🇺 AUS", mat: 11, wkts: 6, econ: "6.50" },
      { bowler: "Mitchell Starc", team: "🇦🇺 AUS", mat: 10, wkts: 6, econ: "7.20" },
      { bowler: "Trent Boult", team: "🇳🇿 NZ", mat: 10, wkts: 5, econ: "7.50" },
      { bowler: "Shaheen Afridi", team: "🇵🇰 PAK", mat: 9, wkts: 4, econ: "7.80" },
      { bowler: "Haris Rauf", team: "🇵🇰 PAK", mat: 9, wkts: 6, econ: "8.50+", worst: true },
    ],
  },
];

const insights = {
  total: "🏆 Shami's 24 wickets in just 7 matches is the tournament's absolute gold standard. Meanwhile, Pakistan's frontline spinners Shadab (2 wkts in 6 matches) and Nawaz (2 wkts in 5 matches) struggled heavily, managing only 4 wickets combined across 11 appearances on spin-responsive Indian pitches.",
  powerplay: "⚡ Bumrah was practically unplayable in the Powerplay, choking batsmen with an economy of 3.32. Jansen dominated the wicket column with 12 strikes, while Rauf struggled with a steep 6.74 economy rate.",
  middle: "🎯 Adam Zampa was Australia's match-winner, securing 17 middle-over wickets. On the flip side, Pakistan's spin void (Shadab securing just 2 wickets in 6 matches) allowed batsmen to build solid platforms, leaving pacers exposed.",
  death: "🔥 Shami and Bumrah combined for 19 death-overs wickets. Haris Rauf suffered at the death (8.50+ econ), heavily influenced by the lack of spin control (Shadab + Nawaz contributing just 4 combined wickets all tournament).",
};

export default function App() {
  const [active, setActive] = useState("total");
  const phase = phases.find((p) => p.id === active);
  const hasRuns = phase.rows.some((r) => r.runs !== undefined);

  return (
    <div className="app-wrapper">
      {/* Dynamic Animated Ambient Mesh */}
      <div className="premium-glow" style={{ "--glow-color": phase.color }} />
      <div className="premium-glow orb-2" style={{ "--glow-color": phase.bestColor }} />

      <div className="layout-container">
        {/* Left Side: Header & Stage Controls */}
        <div className="sidebar">
          <header className="header">
            <div className="header-badge">ICC ANALYTICS 2023</div>
            <h1 className="header-title">
              <span>BOWLING</span>
              <span className="accent-text" style={{ "--text-color": phase.color }}>PHASE</span>
              <span>ANALYSIS</span>
              <span className="header-estimate">(ESTIMATED)</span>
            </h1>
            <p className="header-desc">
              Detailed bowling stats by match phase.
            </p>
          </header>

          <div className="tab-switcher">
            {phases.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`tab-btn ${active === p.id ? "active" : ""}`}
                style={{
                  "--tab-color": p.color,
                  "--tab-glow": `${p.color}40`,
                }}
              >
                <span className="tab-emoji-container">
                  <span className="tab-emoji">{p.emoji}</span>
                </span>
                <div className="tab-text-stack">
                  <span className="tab-label">{p.label}</span>
                  <span className="tab-subtext">{p.id === "total" ? "Tournament" : p.sub.split(" ")[0]}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="insight-card" style={{ "--border-glow": `${phase.color}30` }}>
            <div className="insight-header">
              <span className="insight-icon" style={{ color: phase.bestColor }}>✦</span>
              <span className="insight-title">STRATEGIC DISPATCH</span>
            </div>
            <p className="insight-text">{insights[active]}</p>
          </div>

          <div className="footer-hint">
            ANALYSIS • TAP TO FILTER • WC 2023 EDITION
          </div>
        </div>

        {/* Right Side: Data Board */}
        <div className="main-content">
          <div
            className="premium-board-card"
            style={{
              "--board-glow": `${phase.color}15`,
              "--board-border": `${phase.color}35`,
            }}
          >
            {/* Header Area */}
            <div className="board-header">
              <div className="board-header-left">
                <span className="board-emoji-badge" style={{ background: `${phase.color}15`, border: `1px solid ${phase.color}30` }}>
                  {phase.emoji}
                </span>
                <div>
                  <h2 className="board-title" style={{ color: "#fff" }}>
                    {phase.label} OVERVIEW
                  </h2>
                  <p className="board-subtitle">{phase.sub}</p>
                </div>
              </div>

            </div>

            {/* Performance Ledger */}
            <div className="table-wrapper">
              <div className={`table-header ${hasRuns ? "has-runs" : ""}`}>
                <div className="col-bowler">LEADERBOARD</div>
                <div className="col-team">TEAM</div>
                <div className="col-mat">MAT</div>
                {hasRuns && <div className="col-runs">RUNS</div>}
                <div className="col-econ">ECON</div>
              </div>

              <div className="table-body">
                {phase.rows.map((row, i) => (
                  <div
                    key={row.bowler}
                    className={`table-row ${row.best ? "row-best" : row.worst ? "row-worst" : ""} ${hasRuns ? "has-runs" : ""}`}
                    style={{
                      "--row-theme": row.best ? phase.bestColor : row.worst ? phase.worstColor : "transparent",
                      animationDelay: `${i * 0.03}s`
                    }}
                  >
                    {/* Bowler Details */}
                    <div className="bowler-info">
                      <div
                        className="wkts-capsule"
                        style={{
                          background: row.best
                            ? `linear-gradient(135deg, ${phase.bestColor}, ${phase.color})`
                            : row.worst
                              ? `linear-gradient(135deg, ${phase.worstColor}, #b91c1c)`
                              : "rgba(255,255,255,0.03)",
                          color: row.best ? "#000" : "#fff",
                          borderColor: row.best || row.worst ? "transparent" : "rgba(255,255,255,0.08)"
                        }}
                      >
                        <span className="wkt-count">{row.wkts}</span>
                        <span className="wkt-tag">W</span>
                      </div>
                      <div className="bowler-meta">
                        <span className="bowler-name">{row.bowler}</span>
                        <span className="bowler-status-hint">
                          {row.best ? "BEST" : row.worst ? "WORST" : "SOLID STATS"}
                        </span>
                      </div>
                    </div>

                    <div className="team-col">
                      <img
                        className="team-flag"
                        src={getFlagUrl(row.team)}
                        alt={row.team.split(" ").pop()}
                        loading="lazy"
                      />
                    </div>

                    <div className="mat-col">{row.mat}</div>

                    {hasRuns && <div className="runs-col">{row.runs || '-'}</div>}

                    <div
                      className="econ-col"
                      style={{
                        color: row.best ? phase.bestColor : row.worst ? phase.worstColor : "#fff"
                      }}
                    >
                      {row.econ}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend & Stats Footer */}
            <div className="board-footer">
              <div className="legend-pills">
                <div className="legend-pill-item">
                  <span className="legend-indicator" style={{ background: phase.bestColor, boxShadow: `0 0 10px ${phase.bestColor}` }} />
                  <span>Best</span>
                </div>
                <div className="legend-pill-item">
                  <span className="legend-indicator" style={{ background: phase.worstColor, boxShadow: `0 0 10px ${phase.worstColor}` }} />
                  <span>Worst</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
