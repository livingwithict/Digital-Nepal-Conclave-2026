import React, { useState } from "react";
import { MapPin, Info, Sparkles, Network, CircleDot, Database, Users } from "lucide-react";

interface HubDetail {
  id: string;
  city: string;
  title: string;
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
  initiatives: string[];
}

const NEPAL_HUBS: HubDetail[] = [
  {
    id: "kathmandu",
    city: "Kathmandu",
    title: "Sovereign Data & Governance Hub",
    description: "The administrative nexus hosting the National Data Center, secure federal portals, and the primary Nagarik App API integration systems.",
    x: 52,
    y: 62,
    initiatives: ["Nagarik App Core Team", "National Data Command Center", "Government Cloud Infrastructure"]
  },
  {
    id: "lalitpur",
    city: "Lalitpur (Pulchowk)",
    title: "Conclave Host & Fintech Nexus",
    description: "Centering Nepal's smart payment corridors, cross-border remittance clearing sandboxes, and venue for the Digital Nepal Conclave 2026.",
    x: 54,
    y: 66,
    initiatives: ["Digital Nepal Conclave 2026", "Interoperable QR Network Sandbox", "ICT Innovation Incubation Labs"]
  },
  {
    id: "pokhara",
    city: "Pokhara",
    title: "Smart Tourism & Tech Valley",
    description: "Pioneering decentralized geofencing, eco-tourism digital registries, and cashless transit options for regional international travelers.",
    x: 38,
    y: 50,
    initiatives: ["Cashless Transit Initiatives", "Smart Tourism Geofencing", "IT Academic Incubators"]
  },
  {
    id: "biratnagar",
    city: "Biratnagar",
    title: "Industrial IoT & Frontier Trade Corridor",
    description: "Deploying automated logistics trackers, border clearance systems, and customized industrial IoT sensors in eastern manufacturing hubs.",
    x: 88,
    y: 82,
    initiatives: ["Smart Logistics Integration", "Industrial IoT Pilot", "Digital Supply Chain Sandbox"]
  },
  {
    id: "butwal",
    city: "Butwal",
    title: "Western Nepal Smart Education Hub",
    description: "Fostering regional digital literacy corridors, municipal paperless operations, and remote broadband tele-healthcare gateways.",
    x: 26,
    y: 64,
    initiatives: ["Broadband Tele-Health", "Paperless Municipal Portal", "Digital Skill Accelerator Program"]
  },
  {
    id: "nepalgunj",
    city: "Nepalgunj",
    title: "Agricultural Tech & Frontier Gateway",
    description: "Enabling remote climate monitoring systems, crop insurance SMS registers, and digital marketplaces for trans-border agri-business.",
    x: 10,
    y: 48,
    initiatives: ["Smart Agri-Markets", "SMS Crop Weather Alerts", "Cross-Border Transit Digitalization"]
  }
];

export default function DigitalNepalMap() {
  const [activeHub, setActiveHub] = useState<HubDetail>(NEPAL_HUBS[0]);
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-[#111332] via-[#1a1c4b] to-[#12143d] py-24 text-white overflow-hidden border-t border-b border-white/[0.05]">
      {/* Mountain Background Silhouette Layer using SVG with deep atmospheric gradients */}
      <div className="absolute inset-x-0 bottom-0 h-96 w-full opacity-65 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full absolute bottom-0 left-0"
          preserveAspectRatio="none"
        >
          {/* Distant majestic mountain ranges */}
          <path
            d="M0,240 L120,180 L280,260 L440,140 L590,230 L760,110 L940,220 L1120,130 L1280,240 L1440,160 L1440,320 L0,320 Z"
            fill="url(#mountainGradDistant)"
          />
          {/* Midground high peaks */}
          <path
            d="M0,280 L180,190 L340,150 L490,240 L620,160 L800,280 L960,180 L1140,210 L1300,160 L1440,260 L1440,320 L0,320 Z"
            fill="url(#mountainGradMid)"
          />
          {/* Near foreground hills for deep visual integration */}
          <path
            d="M0,300 L220,240 L410,260 L580,210 L780,290 L980,230 L1210,280 L1440,230 L1440,320 L0,320 Z"
            fill="url(#mountainGradNear)"
          />

          <defs>
            <linearGradient id="mountainGradDistant" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eb0000" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#2e3192" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="mountainGradMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2e3192" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#111332" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="mountainGradNear" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2e3192" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0d0f2b" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Cybernetic Dotted Atmosphere Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,49,146,0.15),transparent_70%)] z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Title Details explaining the cartographic intent */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-dnc-orange-light mb-3">
            <Network className="w-3.5 h-3.5 text-dnc-red animate-pulse" />
            Sovereign Connectivity Map
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Digital Nepal Geospatial Nodes
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed font-sans">
            Deliberating the expansion of the **Digital Nepal Framework** across key technical zones. Select any active hub below to inspect core localized digital operations.
          </p>
        </div>

        {/* Map Blueprint Grid and Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Interactive Dotted Map Container */}
          <div className="lg:col-span-7 bg-white/[0.02] backdrop-blur-md rounded-3xl p-6 border border-white/5 shadow-2xl relative aspect-[1.8/1] flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[380px]">

            {/* The Cartographic Grid (Stylized dotted Nepal grid map) */}
            <div className="absolute inset-4 opacity-15 pointer-events-none select-none">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Generates a grid representing Nepal coordinates bounds */}
                {Array.from({ length: 41 }).map((_, rIdx) =>
                  Array.from({ length: 21 }).map((_, cIdx) => {
                    const x = 20 * rIdx;
                    const y = 20 * cIdx;
                    // Filter map boundary representation mathematically to resemble a sleek polygon boundary of Nepal
                    // Nepal's tilted rectangular footprint
                    const isInNepalBounds =
                      (y > 80 && y < 320) && // general vertical height
                      (x > 50 && x < 750) && // general horizontal span
                      (y > (350 - x * 0.4)) && // bottom-left crop
                      (y < (300 + (800 - x) * 0.15)) && // northern border crop
                      (y < (450 - (800 - x) * 0.4)); // Eastern tapering boundary

                    if (!isInNepalBounds) return null;
                    return (
                      <circle
                        key={`${rIdx}-${cIdx}`}
                        cx={x}
                        cy={y}
                        r={1.8}
                        fill="#ffffff"
                        opacity={0.35}
                      />
                    );
                  })
                )}
                {/* Subtle boundary guide path for Nepal */}
                <path
                  d="M60,180 L180,120 L320,140 L450,165 L600,190 L750,220 L720,290 L610,280 L480,260 L320,245 L180,255 L60,210 Z"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            {/* Himalayan Mountain Crest Outline on top of map for theme matching */}
            <div className="absolute top-2 left-6 right-6 opacity-20 pointer-events-none font-mono text-[9px] uppercase tracking-widest text-[#eb0000] flex justify-between border-b border-white/5 pb-1">
              <span>Himalayan Tech-Sovereignty Perimeter</span>
              <span>8,848M Peak Benchmark</span>
            </div>

            {/* Glowing Map interactive pulse dots */}
            <div className="absolute inset-0">
              {NEPAL_HUBS.map((hub) => {
                const isSelected = activeHub.id === hub.id;
                const isHovered = hoveredHub === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHub(hub)}
                    onMouseEnter={() => setHoveredHub(hub.id)}
                    onMouseLeave={() => setHoveredHub(null)}
                    style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none cursor-pointer z-20 group/pin"
                    aria-label={`Inspect ${hub.city}`}
                  >
                    {/* Ring Pulse Animations */}
                    <span className={`absolute inline-flex h-8 w-8 rounded-full bg-dnc-orange/30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-300 ${isSelected ? "scale-150 opacity-100" : isHovered ? "scale-125 opacity-70" : "scale-0 opacity-0"
                      }`} />

                    <span className={`absolute inline-flex h-12 w-12 rounded-full border border-dnc-blue/40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-ping ${isSelected ? "duration-1000 opacity-60" : "opacity-0"
                      }`} />

                    {/* Central Glowing Core Core */}
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isSelected
                        ? "bg-dnc-orange text-white scale-110 border-2 border-white"
                        : "bg-dnc-blue text-white border-2 border-slate-700/80 hover:bg-dnc-red hover:border-white"
                      }`}>
                      <CircleDot className="w-2.5 h-2.5 shrink-0" />
                    </div>

                    {/* Highly descriptive tooltip badge on layout hover */}
                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900/95 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg text-[10px] font-bold font-mono text-white tracking-wide shadow-xl pointer-events-none transition-all duration-200 whitespace-nowrap z-30 ${isHovered || isSelected ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-1 scale-95"
                      }`}>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-dnc-orange-light" />
                        <span>{hub.city}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Grid Coordinates Info Overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[9px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Network className="w-2.5 h-2.5 text-dnc-orange-light" />
                <span>Inter-Node QR Remittance Bridge Connected</span>
              </span>
              <span>UTM ZONE 45N</span>
            </div>

          </div>

          {/* Feature details card on the right */}
          <div className="lg:col-span-5 space-y-6">

            <div className="bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/5 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-dnc-orange/5 through-transparent to-transparent pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 bg-dnc-orange/15 rounded-2xl text-dnc-orange-light border border-dnc-orange/10">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-dnc-orange font-mono tracking-widest block">Active Platform Hub</span>
                  <h3 className="font-display font-black text-xl text-white">
                    {activeHub.city}
                  </h3>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-100 leading-snug">
                {activeHub.title}
              </h4>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans text-justify">
                {activeHub.description}
              </p>

              {/* Specific Subsector Initiatives under execution */}
              <div className="mt-6 pt-5 border-t border-white/5 space-y-3">
                <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider block">Initiatives Deliberated:</span>
                <div className="space-y-2">
                  {activeHub.initiatives.map((init, index) => (
                    <div key={index} className="flex gap-2.5 items-start text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 bg-[#eb0000] rounded-full mt-1.5 shrink-0" />
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informative Guide Badge */}
              <div className="mt-6 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 text-[10px] text-slate-400 font-mono">
                <Info className="w-4 h-4 text-dnc-blue-light" />
                <span>Interact with map points to switch focus. Keynoters will address regional parameters.</span>
              </div>

            </div>

            {/* Quick Strategic Indicators Panel */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3 items-center">
                <div className="p-2 bg-dnc-blue/10 text-dnc-blue-light rounded-xl">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[18px] font-black font-display text-white">85.6%</p>
                  <p className="text-[10px] text-slate-400 font-mono">Broadband Saturation</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3 items-center">
                <div className="p-2 bg-dnc-red/10 text-dnc-red rounded-xl">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[18px] font-black font-display text-white">6.2M+</p>
                  <p className="text-[10px] text-slate-400 font-mono">Nagarik Registered</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
