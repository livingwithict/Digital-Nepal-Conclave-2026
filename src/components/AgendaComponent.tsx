import React, { useState } from "react";
import { Clock, Users, Coffee, Gift, Filter, LayoutGrid, CheckCircle, MapPin, Calendar, ArrowRight } from "lucide-react";
import { AGENDA_DATA, AgendaItem } from "../data";

export default function AgendaComponent() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Inaugural" | "Governance" | "Data" | "Economy" | "Break">("All");

  const filteredAgenda = activeFilter === "All"
    ? AGENDA_DATA
    : AGENDA_DATA.filter(item => item.category === activeFilter);

  const getCategoryThemeColors = (category: string) => {
    switch (category) {
      case "Inaugural":
        return "bg-slate-900 border-slate-950 text-white";
      case "Governance":
        return "bg-blue-50 border-blue-150 text-dnc-blue";
      case "Data":
        return "bg-orange-50 border-orange-150 text-dnc-orange";
      case "Economy":
        return "bg-red-50 border-red-150 text-dnc-red";
      default:
        return "bg-slate-50 border-slate-250 text-slate-500";
    }
  };

  const getCategoryBadgeLabel = (category: string) => {
    if (category === "Break") return "Tea & Networking";
    if (category === "Economy") return "Economy & Startup Track";
    if (category === "Governance") return "Governance & DPI Track";
    if (category === "Data") return "Data, AI & Security";
    return category;
  };

  return (
    <section id="agenda-section" className="bg-white py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Summary */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-dnc-orange text-xs font-mono font-bold rounded-lg uppercase tracking-wider mb-4 border border-orange-100 shadow-sm">
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

        {/* Track Filter Options */}
        <div id="agenda-filters" className="mb-12 pb-6 border-b border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-black text-slate-400 font-mono uppercase tracking-wider">
                Filter by Stream / Track:
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setActiveFilter("All")}
                className={`px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${activeFilter === "All" ? "bg-dnc-black text-white shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                All Programs ({AGENDA_DATA.length})
              </button>
              <button
                onClick={() => setActiveFilter("Inaugural")}
                className={`px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${activeFilter === "Inaugural" ? "bg-slate-900 text-white shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                Inaugural & Keynotes
              </button>
              <button
                onClick={() => setActiveFilter("Governance")}
                className={`px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${activeFilter === "Governance" ? "bg-dnc-blue text-white shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                Governance & DPI
              </button>
              <button
                onClick={() => setActiveFilter("Data")}
                className={`px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${activeFilter === "Data" ? "bg-dnc-orange text-white shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                Data & AI
              </button>
              <button
                onClick={() => setActiveFilter("Economy")}
                className={`px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${activeFilter === "Economy" ? "bg-dnc-red text-white shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                Digital Economy
              </button>
              <button
                onClick={() => setActiveFilter("Break")}
                className={`px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition cursor-pointer ${activeFilter === "Break" ? "bg-slate-200 text-slate-800 shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                Networking / Breaks
              </button>
            </div>
          </div>
        </div>

        {/* Timetable timeline flow */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-150">

          {filteredAgenda.map((item, index) => {
            const isRightSide = index % 2 === 1;
            const categoryTheme = getCategoryThemeColors(item.category);

            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-stretch sm:justify-between gap-4 sm:gap-0 ${isRightSide ? "sm:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline ball identifier */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1.5 sm:-translate-x-2.5 top-5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-2 border-slate-300 shadow-sm z-10 flex items-center justify-center">
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${item.category === "Governance" ? "bg-dnc-blue animate-pulse" :
                      item.category === "Data" ? "bg-dnc-orange" :
                        item.category === "Economy" ? "bg-dnc-red" :
                          item.category === "Inaugural" ? "bg-slate-900" : "bg-slate-400"
                    }`} />
                </div>

                {/* Left/Right side placeholder for desktop alignment */}
                <div className="hidden sm:block w-[45%] text-right pr-6 self-start pt-4">
                  {!isRightSide && (
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shadow-3xs inline-block">
                        {item.time}
                      </span>
                    </div>
                  )}
                </div>

                {/* Center actual card block */}
                <div className="w-full sm:w-[45%] pl-10 sm:pl-0">
                  <div className={`p-6 bg-white border border-slate-200 rounded-3xl transition-all duration-300 hover:shadow-lg relative overflow-hidden group ${item.category === "Inaugural" ? "hover:border-slate-800" :
                      item.category === "Governance" ? "hover:border-dnc-blue" :
                        item.category === "Data" ? "hover:border-dnc-orange" :
                          item.category === "Economy" ? "hover:border-dnc-red" : "hover:border-slate-300"
                    }`}>
                    {/* Visual spectrum left bar matching track */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${item.category === "Governance" ? "bg-dnc-blue" :
                        item.category === "Data" ? "bg-dnc-orange" :
                          item.category === "Economy" ? "bg-dnc-red" :
                            item.category === "Inaugural" ? "bg-slate-900" : "bg-slate-300"
                      }`} />

                    {/* Time for mobile & right side desktop */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="sm:hidden font-mono text-[10px] font-black text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        {item.time}
                      </span>
                      {isRightSide && (
                        <span className="hidden sm:inline-block font-mono text-[10px] font-black text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                          {item.time}
                        </span>
                      )}
                    </div>

                    {/* Dynamic Badges Group */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {/* Track Category badge */}
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-mono font-extrabold tracking-wider uppercase border ${categoryTheme}`}>
                        {getCategoryBadgeLabel(item.category)}
                      </span>

                      {/* Location Room badge */}
                      {item.room && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 text-[9px] font-mono font-bold rounded-md uppercase tracking-wider">
                          <MapPin className="w-3 h-3 text-dnc-red" />
                          {item.room}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg leading-tight group-hover:text-dnc-blue transition-colors duration-200">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-xs font-mono text-dnc-orange font-bold mt-2 leading-relaxed">
                        ★ {item.subtitle}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-xs text-slate-500 mt-3 leading-relaxed font-sans text-justify">
                        {item.description}
                      </p>
                    )}

                    {/* Associated Speakers in high fidelity */}
                    {item.speakerNames && item.speakerNames.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <p className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-widest">
                          Session Presenters & Panelists:
                        </p>
                        <div className="flex flex-col gap-1.5">
                          {item.speakerNames.map((spk, sIdx) => (
                            <span
                              key={sIdx}
                              className="inline-flex items-center gap-1.5 text-xs text-slate-800 font-bold bg-slate-50 border border-slate-100 px-2.5 py-1.5 rounded-xl hover:bg-slate-100 transition-all"
                            >
                              <Users className="w-3.5 h-3.5 text-dnc-blue" />
                              {spk}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Right side aligned placeholder for desktop right-side entries */}
                <div className="hidden sm:block w-[45%] text-left pl-6 self-start pt-4">
                  {isRightSide && (
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shadow-3xs inline-block">
                        {item.time}
                      </span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>

        {/* Closing Quick Info banner */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-slate-900 text-base">Looking for printable agendas?</h4>
            <p className="text-xs text-slate-500 max-w-lg leading-relaxed">
              Delegates will receive high-resolution print booklets and Digital Pass credentials containing personalized calendars upon registration completion.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-dnc-black hover:bg-dnc-blue text-white font-bold text-xs rounded-full uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2 shrink-0 shadow-sm"
          >
            Print Agenda
          </button>
        </div>

      </div>
    </section>
  );
}
