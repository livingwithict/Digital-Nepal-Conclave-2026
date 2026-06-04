import React, { useState } from "react";
import { Calendar, Video, ExternalLink, Image as ImageIcon, FileText, Sparkles, Award, PlayCircle } from "lucide-react";
import { PAST_EVENTS_DATA, PastEvent } from "../data";

interface PastEventsProps {
  initialYear?: "2025" | "2024" | "2023" | "2022";
}

export default function PastEventsComponent({ initialYear = "2025" }: PastEventsProps) {
  const [activeYear, setActiveYear] = useState<"2025" | "2024" | "2023" | "2022">(initialYear);
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; url: string } | null>(null);

  const event = PAST_EVENTS_DATA.find((e) => e.year === activeYear) || PAST_EVENTS_DATA[0];

  // Helper to extract clean ID from links
  const getSimulatedYoutubeEmbed = (url: string) => {
    if (url.includes("playlist?list=")) {
      const listId = url.split("playlist?list=")[1];
      return `https://www.youtube.com/embed/videoseries?list=${listId}`;
    }
    if (url.includes("live/")) {
      const liveId = url.split("live/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${liveId}`;
    }
    return "";
  };

  return (
    <section id="past-events-page" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Multipage Sidebar / Timeline Selector */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-xs font-mono font-bold rounded-full uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-dnc-orange" />
            Historic Archives & Milestones
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Preceding Editions Overview
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            See summaries, expert keynote guidelines, photolinks, and playlists of Nepal&apos;s digital revolution over the years.
          </p>

          {/* Timeline Pills */}
          <div className="mt-8 flex justify-center gap-2">
            {(["2025", "2024", "2023", "2022"] as const).map((year) => (
              <button
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setSelectedVideo(null);
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition ${
                  activeYear === year
                    ? "bg-dnc-blue text-white shadow-xs border-dnc-blue"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
                }`}
              >
                Conclave {year}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Archive Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-12">
          
          {/* Main Left Details Column */}
          <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[120px] font-display font-black text-slate-200/40 pointer-events-none select-none leading-none">
                {event.year}
              </div>

              <div className="max-w-xl">
                <span className="text-[10px] uppercase font-bold tracking-widest text-dnc-orange font-mono block mb-1">
                  YEAR {event.year} THEMATIC PLATFORM
                </span>
                
                <h2 className="font-display font-extrabold text-2xl text-slate-950 tracking-tight leading-tight mb-4">
                  {event.theme}
                </h2>
                
                <p className="text-xs text-slate-400 font-mono mb-6 uppercase tracking-wider border-b border-slate-200 pb-3 block">
                  Organizer details: {event.organizer}
                </p>

                <p className="text-slate-700 text-sm leading-relaxed text-justify mb-6">
                  {event.description}
                </p>

                {/* Specific Edition Highlights */}
                {event.year === "25" && (
                  <div className="bg-white border text-sm rounded-2xl p-5 border-slate-200/50 mb-6 space-y-2">
                    <p className="font-bold text-xs font-mono text-slate-400 uppercase tracking-widest">Dignitaries Present:</p>
                    <p className="text-xs text-slate-600">Prithvi Subba Gurung (Ministry of Communication), Gagan Thapa, Eknarayan Aryal, Dr. Prakash Kumar Shrestha, Radhika Aryal, Keshav Nepal, and Nileshman Pradhan.</p>
                  </div>
                )}

                {event.year === "24" && (
                  <div className="bg-white border text-sm rounded-2xl p-5 border-slate-200/50 mb-6 space-y-2">
                    <p className="font-bold text-xs font-mono text-slate-400 uppercase tracking-widest">Major National Declarations:</p>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
                      <li>Government declared upcoming <strong>Decade on IT Development</strong>.</li>
                      <li>Projections mapping 1.5M jobs and 3 Trillion exports.</li>
                      <li>Highlighting Nagarik App integration and GeoKrishi.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* External Asset links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
              <a
                href={event.photoDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 border border-slate-150 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-dnc-orange/5 rounded-xl text-dnc-orange">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900 group-hover:text-dnc-blue transition-colors">Slideshow and Photo Gallery</p>
                    <p className="text-[10px] text-slate-500 font-mono">Real-world event frames & albums</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#/publications"
                className="bg-white hover:bg-slate-50 border border-slate-150 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-dnc-blue/5 rounded-xl text-dnc-blue">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900 group-hover:text-dnc-blue transition-colors">Download Conclave Reports</p>
                    <p className="text-[10px] text-slate-500 font-mono">Access original analytics whitepapers</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Metrics & Playlists Column */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 flex flex-col justify-between shadow-xl">
            
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-bold text-dnc-orange-light font-mono tracking-widest block">
                CONCLAVE {event.year} STATS
              </span>

              {/* Specific Stats count */}
              <div className="grid grid-cols-3 gap-2 border-b border-slate-800 pb-6 mb-4">
                {event.stats?.map((st, sIdx) => (
                  <div key={sIdx} className="text-center">
                    <p className="font-display font-black text-xl text-white">{st.value}</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-400 font-mono mt-0.5">{st.label}</p>
                  </div>
                ))}
              </div>

              {/* Playlists Highlight */}
              <div>
                <h4 className="font-display font-bold text-sm text-slate-200 mb-3 flex items-center gap-2">
                  <Video className="w-4 h-4 text-dnc-orange-light" />
                  Session Video Playlists
                </h4>
                
                <div className="space-y-3">
                  {event.highlightVideos.map((vid) => {
                    const embedUrl = getSimulatedYoutubeEmbed(vid.url);
                    return (
                      <div
                        key={vid.id}
                        onClick={() => setSelectedVideo({ title: vid.title, url: embedUrl })}
                        className={`p-3.5 rounded-xl border border-slate-800 bg-slate-950/70 hover:bg-slate-950 hover:border-dnc-blue-light transition duration-200 cursor-pointer flex gap-3 items-center group ${
                          selectedVideo?.title === vid.title ? "border-dnc-blue bg-slate-950" : ""
                        }`}
                      >
                        <PlayCircle className="w-5 h-5 shrink-0 text-dnc-orange group-hover:scale-110 transition-transform" />
                        <div className="text-left w-full min-w-0">
                          <p className="text-[11px] font-bold text-slate-100 truncate">{vid.title}</p>
                          <p className="text-[9px] text-slate-400 font-mono uppercase mt-0.5 flex items-center gap-1">
                            Click to play inside screen
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Video preview / instructions */}
            <div className="pt-6 border-t border-slate-800">
              <span className="text-[10px] text-slate-500 font-mono tracking-wide leading-relaxed block">
                * Video directories stream official full footage on-demand from IFN official channels.
              </span>
            </div>

          </div>
        </div>

        {/* Embedded Iframe Player Box */}
        {selectedVideo && selectedVideo.url && (
          <div id="video-preview-player" className="mt-8 bg-black rounded-3xl p-4 overflow-hidden border border-slate-200 max-w-4xl mx-auto shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 text-white">
              <span className="text-xs font-bold font-mono text-dnc-orange-light">NOW STREAMING PLAYLIST</span>
              <p className="text-xs font-semibold truncate max-w-lg">{selectedVideo.title}</p>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-xs font-mono font-bold text-red-500 hover:underline"
              >
                Hide Screen [X]
              </button>
            </div>
            
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xs">
              <iframe
                title={selectedVideo.title}
                src={selectedVideo.url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
