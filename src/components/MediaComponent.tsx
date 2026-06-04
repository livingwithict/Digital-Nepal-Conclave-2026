import React, { useState } from "react";
import { Video, ExternalLink, Globe, Play, Image as ImageIcon, Heart, ArrowUpRight, Award } from "lucide-react";
import { NEWS_MEDIA_DATA } from "../data";

export default function MediaComponent() {
  const [activeMediaTab, setActiveMediaTab] = useState<"news" | "videos">("news");
  const [selectedVideo, setSelectedVideo] = useState({
    title: "Digital Nepal Conclave 2025 - Special Plenary Session",
    id: "v25_1",
    url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qB5knF0c0N8c3_ZVNRxPfv"
  });

  const alternativeVideos = [
    { title: "Governance & DPI (DNC 2025 Plenary)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qB5knF0c0N8c3_ZVNRxPfv", label: "DNC 2025" },
    { title: "IT Decade Target Framework (DNC 2024 Day 1)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qZZ3QSOs2jQC6F9HRCCnDS", label: "DNC 2024" },
    { title: "Empowering Local Startups Pitch (DNC 2024 Session)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qCpoWJ79pUxkCP49tE423J", label: "DNC 2024" },
    { title: "Inaugural Speech PM Dahal (DNC 2024 Opening)", url: "https://www.youtube.com/embed/videoseries?list=PL65nmC8zjA6qZZ3QSOs2jQC6F9HRCCnDS", label: "DNC 2024" },
    { title: "Fostering Digitally Sakshyam Nepal Keynotes (DNC 2023 Live)", url: "https://www.youtube.com/embed/dv-CsOcIojQ", label: "DNC 2023" }
  ];

  return (
    <section id="media-page" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-xs font-mono font-bold rounded-full uppercase tracking-wider mb-3">
            <Video className="w-4 h-4 text-dnc-orange" />
            Press Room & YouTube highlights
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            News & Multimedia Corridor
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Follow articles from major publishing lines, stream high-fidelity speeches, panel recordings, and download official press assets.
          </p>

          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => setActiveMediaTab("news")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition ${
                activeMediaTab === "news"
                  ? "bg-dnc-blue border-dnc-blue text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
              }`}
            >
              Latest Press Articles
            </button>
            <button
              onClick={() => setActiveMediaTab("videos")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition ${
                activeMediaTab === "videos"
                  ? "bg-dnc-orange border-dnc-orange text-white"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200"
              }`}
            >
              Speeches & High-Fidelity Videos
            </button>
          </div>
        </div>

        {activeMediaTab === "news" ? (
          /* Press articles section */
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {NEWS_MEDIA_DATA.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-3xl border border-slate-100 shadow-2xs hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                >
                  <div>
                    {/* Cover Photo */}
                    <div className="h-44 bg-slate-100 relative overflow-hidden shrink-0">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-dnc-black text-white text-[9px] font-mono font-bold rounded-md">
                        {article.source}
                      </span>
                    </div>

                    <div className="p-6 space-y-2">
                      <p className="text-[10px] text-slate-400 font-mono font-bold block">{article.date}</p>
                      
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-905 tracking-tight leading-snug group-hover:text-dnc-blue transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-sans text-justify pt-1">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-dnc-blue hover:text-dnc-orange transition-colors"
                    >
                      Read full article
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Press Release Segment */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-2xs relative">
              <div className="max-w-2xl space-y-4">
                <span className="px-2.5 py-0.5 bg-dnc-blue text-white text-[9px] font-mono font-bold rounded uppercase tracking-wider">
                  Official Statement
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">
                  Request Press Accreditation for Conclave 2026
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Reporters representing television stations, digital business channels, and daily newspapers are requested to secure accreditation badges prior to June 25th, 2026. Custom media tables are fully configured with power inlets and fast networks at the Grand Ballroom area of the Plaza, Pulchowk.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:media@livingwithict.com"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-dnc-black hover:bg-dnc-blue text-white font-semibold text-xs rounded-xl transition shadow-xs"
                  >
                    Contact Press Liaison
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Speeches and playlist streams tab */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Embedded Iframe Player Box left */}
            <div className="lg:col-span-8 space-y-4 flex flex-col justify-between">
              <div className="bg-slate-950 rounded-3xl p-4 overflow-hidden border border-slate-800 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 text-white">
                  <span className="text-[10px] uppercase font-bold text-dnc-orange-light font-mono tracking-widest block">
                    SPEECH PANEL MONITOR
                  </span>
                  <p className="text-xs font-bold truncate max-w-sm text-slate-200">{selectedVideo.title}</p>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xs bg-black">
                  <iframe
                    title={selectedVideo.title}
                    src={selectedVideo.url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-2xs">
                <h4 className="font-display font-bold text-sm text-slate-900 mb-1">
                  Nepal&apos;s Digital Dialogues Catalogued
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  The videos include historical live streams hosted by ICT Foundation Nepal since the inception of regional conclaves, detailing digital security protocols, cloud sovereignty, global IT outsourcing margins, and financial inclusive structures.
                </p>
              </div>
            </div>

            {/* List Selection on right */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between">
              
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold text-dnc-orange-light font-mono tracking-widest block">
                  SELECT SESSIONS FOR FOOTAGE
                </span>

                <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-2">
                  {alternativeVideos.map((vid, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedVideo({ title: vid.title, url: vid.url, id: `vid_${idx}` })}
                      className={`p-3 rounded-xl border transition cursor-pointer flex gap-3 text-left items-center group ${
                        selectedVideo.title === vid.title ? "border-dnc-blue-light bg-slate-950" : "border-slate-800 bg-slate-950/40 hover:bg-slate-950"
                      }`}
                    >
                      <Play className="w-4.5 h-4.5 shrink-0 text-dnc-orange-light" />
                      <div>
                        <p className="text-[11px] font-bold text-slate-100 leading-snug line-clamp-2">{vid.title}</p>
                        <span className="inline-block mt-1 px-1.5 py-0.5 bg-slate-800 text-slate-400 text-[8px] font-mono rounded">
                          {vid.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 mt-4 text-center">
                <p className="text-[10px] text-slate-500 font-mono">
                  All rights reserved to ICT Foundation Nepal © 2026.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
