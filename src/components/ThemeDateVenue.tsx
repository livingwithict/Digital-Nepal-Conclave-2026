import React from "react";
import { Calendar, MapPin, Compass, Lightbulb, Sparkles, Clock, Globe } from "lucide-react";

export default function ThemeDateVenue() {
  const handleAddToCalendar = () => {
    // Generate standard google calendar event link safely
    const title = encodeURIComponent("Digital Nepal Conclave 2026");
    const dates = "20260703T031500Z/20260703T121500Z"; // UTC bounds
    const details = encodeURIComponent("Reimagining Governance, Data and the Digital Economy.");
    const location = encodeURIComponent("The Plaza Hotel, Pulchowk, Lalitpur, Nepal");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  const handleOpenMap = () => {
    const coords = "27.6756,85.3151"; // Pulchowk Lalitpur coordinates
    const url = `https://www.google.com/maps/search/?api=1&query=${coords}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-dnc-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-dnc-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Creative Top Headline Grid */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-dnc-orange tracking-widest bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dnc-blue animate-spin" />
            Conclave Anchors
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            The Theme, Schedule & Hub
          </h2>
          <p className="mt-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
            ★ Core Event Architecture for 2026 Deluxe Summit
          </p>
        </div>

        {/* The Creative Bento Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* THE BENCHMARK THEME: 7 Columns */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-100 p-8 sm:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            {/* Visual Grid Art */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-dnc-blue/10 to-transparent rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dnc-blue/10 text-dnc-blue rounded-xl text-xs font-bold font-mono tracking-wide uppercase mb-6 border border-dnc-blue/10">
                <Lightbulb className="w-4 h-4 text-dnc-orange animate-pulse" />
                Strategic Plenary Theme
              </div>
              
              <h3 className="font-display font-black text-2xl sm:text-3.5xl md:text-3xl text-slate-900 leading-tight tracking-tight max-w-xl">
                Reimagining <span className="text-dnc-blue">Governance</span>, <span className="text-dnc-orange">Data</span> & the <span className="text-dnc-red">Digital Economy</span>
              </h3>
              
              <p className="mt-5 text-sm text-slate-600 leading-relaxed font-sans text-justify max-w-2xl">
                This theme underpins our central effort to accelerate public infrastructure digitization in Nepal. We explore secure cloud architecture, open API access parameters for developer networks, and cross-border digital financial systems to empower localized economic ecosystems.
              </p>
            </div>

            {/* Interactive pillar highlights tags */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-3.5">
              <div className="p-3 bg-white border border-slate-100 rounded-2xl text-center shadow-2xs group-hover:border-dnc-blue transition-colors">
                <p className="text-[10px] uppercase font-bold text-slate-400 font-mono">Pillar 01</p>
                <p className="text-[12px] font-black text-slate-800 mt-1">Faceless Gov</p>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-2xl text-center shadow-2xs group-hover:border-dnc-orange transition-colors">
                <p className="text-[10px] uppercase font-bold text-slate-400 font-mono">Pillar 02</p>
                <p className="text-[12px] font-black text-slate-800 mt-1">Sovereign Data</p>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-2xl text-center shadow-2xs group-hover:border-dnc-red transition-colors">
                <p className="text-[10px] uppercase font-bold text-slate-400 font-mono">Pillar 03</p>
                <p className="text-[12px] font-black text-slate-800 mt-1">Smart Capital</p>
              </div>
            </div>
          </div>

          {/* CHRONO SCHEDULE: 5 Columns */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-8">
            
            {/* THE CREATIVE CALENDAR CARD */}
            <div className="bg-slate-50 rounded-3xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              {/* Corner Calendar Leaf graphic */}
              <div className="w-full sm:w-28 bg-white rounded-2xl border border-slate-150 shadow-sm flex flex-col overflow-hidden shrink-0">
                <div className="bg-[#eb0000] text-white text-[10px] font-mono font-bold text-center py-1.5 uppercase tracking-wider">
                  JULY 2026
                </div>
                <div className="flex flex-col items-center justify-center py-4 px-2 select-none">
                  <span className="font-display font-black text-4xl text-slate-900 leading-none">03</span>
                  <span className="text-[9px] font-mono font-bold text-dnc-blue mt-1 uppercase tracking-widest">FRIDAY</span>
                </div>
                <div className="border-t border-dashed border-slate-200 bg-slate-50 py-1 text-center text-[8px] font-mono font-bold text-slate-500">
                  ASAR 19, 2083
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#eb0000] font-mono uppercase tracking-widest mb-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Chrono Schedule
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 leading-tight">
                    Dual Chronological Tracking
                  </h4>
                  <p className="text-xs text-slate-550 mt-1.5 leading-relaxed font-sans">
                    Friday | Asar 19, 2083 Bikram Sambat. Plenary gates open at 08:30 AM NST with opening addresses starting at 09:30 AM sharp.
                  </p>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={handleAddToCalendar}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-dnc-blue hover:bg-[#eb0000] text-white text-[10px] font-bold font-mono uppercase tracking-wider rounded-xl transition duration-200 shadow-3xs cursor-pointer"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Sync with Calendar →
                  </button>
                </div>
              </div>
            </div>

            {/* THE CREATIVE VENUE CARD */}
            <div className="bg-slate-50 rounded-3xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
              {/* Miniature Technical Compass Schematic */}
              <div className="w-full sm:w-28 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center p-3 text-center shrink-0 shadow-sm relative overflow-hidden">
                {/* Simulated blueprint circular lines */}
                <div className="absolute inset-0 border border-white/[0.04] rounded-full scale-[1.5] animate-spin pointer-events-none" style={{ animationDuration: "25s" }} />
                <MapPin className="w-8 h-8 text-dnc-orange" />
                <span className="text-[8px] font-mono font-bold text-slate-400 mt-2 uppercase block">Coordinates</span>
                <span className="text-[9px] font-mono text-dnc-orange-light font-bold mt-0.5 leading-none block">27.6756° N</span>
                <span className="text-[9px] font-mono text-dnc-orange-light font-bold leading-none block">85.3151° E</span>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-dnc-orange font-mono uppercase tracking-widest mb-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    Corporate Hub
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 leading-tight">
                    The Plaza, Pulchowk
                  </h4>
                  <p className="text-xs text-slate-555 mt-1.5 leading-relaxed font-sans">
                    Lalitpur, Nepal. The tech heart of the country, adjacent to core engineering departments, smart ministries and financial headquarters.
                  </p>
                </div>

                <div className="mt-4">
                  <button 
                    onClick={handleOpenMap}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-[10px] font-bold font-mono uppercase tracking-wider rounded-xl transition duration-200 shadow-3xs cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5 text-dnc-orange" />
                    Open Google Maps →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
