import React, { useState } from "react";
import { Clock, Users, MapPin, Filter } from "lucide-react";
import { AGENDA_DATA, AgendaItem } from "../data";

export default function AgendaComponent() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Inaugural" | "Governance" | "Data" | "Economy" | "Break">("All");

  const filteredAgenda = activeFilter === "All"
    ? AGENDA_DATA
    : AGENDA_DATA.filter(item => item.category === activeFilter);

  // Minimalist text colors based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Inaugural": return "text-slate-900";
      case "Governance": return "text-dnc-blue";
      case "Data": return "text-dnc-orange";
      case "Economy": return "text-red-600";
      case "Break": return "text-slate-400";
      default: return "text-slate-500";
    }
  };

  const getCategoryBadgeLabel = (category: string) => {
    if (category === "Break") return "Tea & Networking";
    if (category === "Economy") return "Economy & Startup Track";
    if (category === "Governance") return "Governance & DPI Track";
    if (category === "Data") return "Data, AI & Security";
    return category;
  };

  const filters = ["All", "Inaugural", "Governance", "Data", "Economy", "Break"] as const;

  return (
    <section id="agenda-section" className="bg-white py-16 sm:py-24 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Summary */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-dnc-orange text-sm font-sans font-bold rounded-lg uppercase tracking-wider mb-4 border border-orange-100 shadow-sm">
            <Clock className="w-4 h-4 text-dnc-orange" />
            Friday, 3rd July 2026 (2083 Asar 19)
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Schedule of Tracks & Sessions
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Navigating Nepal&apos;s digital public infrastructure, AI policies, and emerging financial frameworks. Sessions run concurrently in specialized ballrooms and panels.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="mb-12 border-b border-slate-200">
          <div className="flex items-center gap-6 overflow-x-auto pb-[-1px] no-scrollbar">
            <div className="flex items-center gap-2 text-slate-400 shrink-0 mb-3">
              {/* <Filter className="w-4 h-4" /> */}
            </div>
            
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`pb-4 text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-200 border-b-2 ${
                  activeFilter === filter
                    ? "border-dnc-blue text-dnc-blue"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                {filter === "All" ? `All Programs (${AGENDA_DATA.length})` : getCategoryBadgeLabel(filter)}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Vertical List Layout */}
        <div className="space-y-0">
          {filteredAgenda.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row gap-4 md:gap-12 py-8 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors duration-300 -mx-4 px-4 rounded-2xl"
            >
              {/* Left Column: Time & Location */}
              <div className="md:w-1/4 shrink-0 pt-1">
                <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-1">
                  <span className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    {item.time}
                  </span>
                  
                  {item.room && (
                    <span className="flex items-center gap-1.5 text-xs font-sans font-semibold text-slate-500 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.room}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="md:w-3/4">
                <span className={`text-[10px] font-bold font-sans uppercase tracking-widest mb-2 block ${getCategoryColor(item.category)}`}>
                  {getCategoryBadgeLabel(item.category)}
                </span>
                
                <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl leading-snug mb-2 group-hover:text-dnc-blue transition-colors">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-sm font-sans font-semibold text-slate-700 mb-3">
                    {item.subtitle}
                  </p>
                )}

                {item.description && (
                  <p className="text-sm text-slate-500 leading-relaxed font-sans mb-5 max-w-3xl">
                    {item.description}
                  </p>
                )}

                {/* Minimal Speakers List */}
                {item.speakerNames && item.speakerNames.length > 0 && (
                  <div className="flex items-start gap-2.5 mt-4 pt-4 border-t border-slate-100/80">
                    <Users className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {item.speakerNames.map((spk, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-sm font-medium text-slate-700"
                        >
                          {spk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {filteredAgenda.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No sessions found for this track.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}