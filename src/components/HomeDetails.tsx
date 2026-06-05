import React, { useState } from "react";
import { Users, Presentation, Radio, Award, ExternalLink, ArrowRight, UserCheck, Image, Video, Newspaper, Play } from "lucide-react";
import { PageId } from "./Header";
import { STATS_COUNTERS, SPEAKERS_LIST, NEWS_MEDIA_DATA, PAST_EVENTS_DATA } from "../data";

interface HomeDetailsProps {
  onNavigate: (page: PageId) => void;
}

// Full confirmed list of speakers from user's document
const MARQUEE_SPEAKERS = [
  "Mr. Manohar K Bhattarai (ICT Expert)",
  "Prof. Dr. Manish Pokharel (Dean, KU)",
  "Mr. Kyle Gardner (Google Policy Lead)",
  "Mr. Adesh Khadka",
  "Mr. Subhash Dhakal",
  "Mr. Santosh Koirala",
  "Mr. Ek Narayan Aryal (Former Chief Secretary)",
  "Dr. Prakash Kumar Shrestha (NPC)",
  "Mr. Nishant Nair (Google Maps)",
  "Mr. Dipesh Bista",
  "Mr. Sojan Prajapati (Ting Ting)",
  "Mr. Nilesh Man Singh Pradhan (NCHL)",
  "Ms. Sunaina Panday (CAN Federation)",
  "Dr. Bikash Devkota (Secretary, MoHP)",
  "Hon. Gagan Thapa (MofP, General Secretary NC)",
  "Ms. Saluja Acharya (Aqore)",
  "Dr. Roshan Koju (SSF)",
  "Mr. Keshab Nepal (Worldlink)",
  "Dr. Biraj Karmacharya (Dhulikhel Hospital)",
  "Dr. Bhoj Raj Ghimire (Nepal Open University)",
  "Mr. Sanjay Poudel (SunyaEk)",
  "Mr. Dipesh Pradhan (YCo)",
  "Rt. Hon. KP Sharma Oli (Prime Minister)",
  "Hon. Bishnu Prasad Paudel (Finance Minister)"
];

export default function HomeDetails({ onNavigate }: HomeDetailsProps) {
  const [selectedPastEvent, setSelectedPastEvent] = useState<"25" | "24" | "23" | "22">("25");
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ title: string; url: string; embedId?: string } | null>(null);
  const [activeNews, setActiveNews] = useState<any | null>(null);

  return (
    <div id="home-details-section" className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* STATS COUNT GRID */}
        <div id="stats-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {STATS_COUNTERS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs text-center flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Highlight bar with theme colors */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <p className="font-display font-black text-3xl sm:text-4xl text-dnc-black mb-1">
                  {stat.count}
                </p>
                <p className="text-sm font-bold text-dnc-blue font-sans tracking-wide uppercase mb-3">
                  {stat.label}
                </p>
              </div>
              {/* <p className="text-[11px] text-slate-500 leading-normal border-t border-slate-50 pt-3">
                {stat.desc}
              </p> */}
            </div>
          ))}
        </div>

        {/* PREVIOUS SPEAKERS HORIZONTAL GALLERY */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs mb-20 overflow-hidden relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-2xl font-bold text-dnc-blue font-sans uppercase tracking-widest mb-1">
                <Users className="w-5 h-5 text-dnc-orange" />
                Previous Speakers
              </div>
              {/* <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                Eminent Experts & Global Leaders
              </h3> */}
            </div>
            <button
              onClick={() => onNavigate("speakers")}
              className="shrink-0 self-start text-sm font-bold text-dnc-blue hover:text-dnc-orange flex items-center gap-1.5 transition-colors group cursor-pointer"
            >
              See All Speakers & Full Bios
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Continuous Auto-Scrolling Circle Gallery */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Soft left & right overlays for visual depth/integration */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            {/* Seamless Double-Loop for infinite scroll */}
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...SPEAKERS_LIST, ...SPEAKERS_LIST].map((spk, idx) => (
                <div
                  key={`${spk.id}-${idx}`}
                  onClick={() => onNavigate("speakers")}
                  className="inline-flex flex-col items-center bg-slate-50/50 hover:bg-slate-50 border border-slate-100 p-5 rounded-3xl w-48 sm:w-52 text-center transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer select-none group"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 mb-3 relative mx-auto border-2 border-slate-200">
                    <img
                      src={spk.avatarUrl}
                      alt={spk.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {spk.isKeynote && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-dnc-orange text-white text-[7.5px] font-sans font-bold rounded uppercase tracking-wider whitespace-nowrap">
                        Keynote
                      </span>
                    )}
                  </div>

                  <span className="font-display font-bold text-sm sm:text-sm text-slate-850 group-hover:text-dnc-blue transition-colors line-clamp-1 block whitespace-normal break-all">
                    {spk.name}
                  </span>

                  <span className="text-[10px] text-dnc-orange font-sans font-bold mt-1 line-clamp-1 block whitespace-normal">
                    {spk.title}
                  </span>

                  {spk.company && (
                    <span className="text-[9.5px] text-slate-500 font-sans mt-0.5 line-clamp-1 block whitespace-normal">
                      {spk.company}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-20 items-stretch">
          <div className="bg-white text-slate-900 rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-slate-100">
            
            {/* Header Block */}
            <div className="max-w-3xl mb-8">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight mb-4">
                Our Past Conclaves
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                From the inception of the Digital Nepal framework in 2019, our yearly summits have solidified cross-border payment protocols, digital health structures, and national software exports strategy.
              </p>
            </div>

            {/* Past Conclaves Section */}
            <div className="flex flex-col gap-4">
              
              {/* 4-Column Grid for Conclave Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* DNC 2025 */}
                <div
                  onClick={() => onNavigate("past-2025")}
                  className="group cursor-pointer p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-dnc-orange/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <h4 className="font-display font-bold text-xl text-dnc-blue group-hover:text-dnc-orange transition-colors duration-300">
                      DNC 2025
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">Empowering Digital Nepal Together / Digital Synergy</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-sans text-slate-400">Learn More</span>
                    <span className="text-dnc-blue group-hover:text-dnc-orange transform group-hover:translate-x-1 transition-all duration-300 text-sm">
                      →
                    </span>
                  </div>
                </div>

                {/* DNC 2024 */}
                <div
                  onClick={() => onNavigate("past-2024")}
                  className="group cursor-pointer p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-dnc-orange/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <h4 className="font-display font-bold text-xl text-dnc-blue group-hover:text-dnc-orange transition-colors duration-300">
                      DNC 2024
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">Harmonizing Digitalization and Development</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-sans text-slate-400">Learn More</span>
                    <span className="text-dnc-blue group-hover:text-dnc-orange transform group-hover:translate-x-1 transition-all duration-300 text-sm">
                      →
                    </span>
                  </div>
                </div>

                {/* DNC 2023 */}
                <div
                  onClick={() => onNavigate("past-2023")}
                  className="group cursor-pointer p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-dnc-orange/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <h4 className="font-display font-bold text-xl text-dnc-blue group-hover:text-dnc-orange transition-colors duration-300">
                      DNC 2023
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">Fostering Digitally Sakshyam Nepal</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-sans text-slate-400">Learn More</span>
                    <span className="text-dnc-blue group-hover:text-dnc-orange transform group-hover:translate-x-1 transition-all duration-300 text-sm">
                      →
                    </span>
                  </div>
                </div>

                {/* DNC 2022 */}
                <div
                  onClick={() => onNavigate("past-2022")}
                  className="group cursor-pointer p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-dnc-orange/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <h4 className="font-display font-bold text-xl text-dnc-blue group-hover:text-dnc-orange transition-colors duration-300">
                      DNC 2022
                    </h4>
                    <p className="text-sm text-slate-400 mt-1">Digital Nepal Framework Collaboration</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-sans text-slate-400">Learn More</span>
                    <span className="text-dnc-blue group-hover:text-dnc-orange transform group-hover:translate-x-1 transition-all duration-300 text-sm">
                      →
                    </span>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
        
        {/* CONCLAVE INTEL & NEWS */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-blue-50 text-dnc-blue rounded-xl border border-blue-100">
              <Newspaper className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                Latest Conclave News & Media
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_MEDIA_DATA.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"       
                rel="noopener noreferrer" 
                className="bg-white rounded-3xl border border-slate-100 p-5 shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer flex flex-col justify-between group block"
              >
                <div>
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 relative shadow-2xs">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-sans font-bold text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200">
                      {item.source}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-dnc-orange font-sans uppercase tracking-wider block mb-1">
                    {item.date}
                  </span>

                  <h4 className="font-display font-bold text-slate-900 group-hover:text-dnc-blue transition-colors text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between">
                  <span className="text-sm text-dnc-blue font-bold group-hover:underline">Read Coverage →</span>
                  <span className="text-[10px] text-slate-400 font-sans">DNC Exclusive</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-20">
          {/* Header Section */}
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-orange-50 text-dnc-orange rounded-xl border border-orange-100">
              <Image className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                Conclave Moments & Photo Gallery
              </h3>
            </div>
          </div>

          {/* Bento Grid Layout - Plain Visual Display with Hover Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
            {[
              {
                title: "Inaugural Plenary Debate",
                url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&h=600",
                gridClass: "md:col-span-2 md:row-span-2"
              },
              {
                title: "Startup Pitch Showcase",
                url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600&h=400",
                gridClass: "md:col-span-1 md:row-span-1"
              },
              {
                title: "Digital Public Goods Panel",
                url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600&h=400",
                gridClass: "md:col-span-1 md:row-span-1"
              },
              {
                title: "Provincial Exhibition Booths",
                url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400",
                gridClass: "md:col-span-2 md:row-span-1"
              },
              {
                title: "B2B Strategic Cooperation Launch",
                url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600&h=400",
                gridClass: "md:col-span-1 md:row-span-1"
              },
              {
                title: "Academic & Research Symposium",
                url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600&h=400",
                gridClass: "md:col-span-1 md:row-span-1"
              },
              {
                title: "Valedictory Networking & Reception",
                url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600&h=400",
                gridClass: "md:col-span-2 md:row-span-1"
              }
            ].map((photo, pIdx) => (
              <div
                key={pIdx}
                className={`group relative rounded-2xl overflow-hidden border border-slate-100 shadow-2xs bg-slate-50 animate-fade-in ${photo.gridClass}`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO HIGHLIGHTS ROOM */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="p-2 bg-red-50 text-dnc-red rounded-xl border border-red-100">
              <Video className="w-5 h-5" />
            </span>
            <div>
              {/* <span className="text-[10px] uppercase font-bold text-dnc-blue font-sans tracking-widest block">Video Broadcasts</span> */}
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-800">
                Strategic Video Dialogues & Highlight Reels
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => setActiveVideo({
                title: "Digital Synergy Plenary Address - DNC 2025 Highlights",
                url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6qB5knF0c0N8c3_ZVNRxPfv",
                embedId: "dv-CsOcIojQ"
              })}
              className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-5 hover:shadow-xs cursor-pointer group transition-all duration-300"
            >
              <div className="aspect-video sm:w-44 bg-slate-100 rounded-2xl overflow-hidden relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400&h=250"
                  alt="DNC 2025"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/95 backdrop-blur-xs rounded-full flex items-center justify-center text-dnc-orange shadow-md">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 bg-orange-50 text-dnc-orange text-[9px] font-sans font-bold rounded uppercase tracking-wider mb-2">
                    Prime Minister Plenary
                  </span>
                  <h4 className="font-display font-bold text-slate-800 group-hover:text-dnc-blue transition-colors text-sm sm:text-base leading-snug">
                    Federal Infrastructure & Faceless Governance Keynote
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 lines-clamp-2">
                    Reviewing the historical convergence advocating interoperable smart policies in front of over 600 delegates.
                  </p>
                </div>
                <span className="text-[11px] text-dnc-blue font-bold mt-2 sm:mt-0 flex items-center gap-1">
                  Launch Interactive Highlights Speaker Panel →
                </span>
              </div>
            </div>

            <div
              onClick={() => setActiveVideo({
                title: "Google South Asia Strategy Spotlight - Geo-Tech Implementation",
                url: "https://www.youtube.com/playlist?list=PL65nmC8zjA6pg4kXbXIU6UDGxKq0uGGAC",
                embedId: "jJmOXihX-Jc"
              })}
              className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-5 hover:shadow-xs cursor-pointer group transition-all duration-300"
            >
              <div className="aspect-video sm:w-44 bg-slate-100 rounded-2xl overflow-hidden relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=250"
                  alt="Google South Asia Session"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/95 backdrop-blur-xs rounded-full flex items-center justify-center text-dnc-blue shadow-md">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2 py-0.5 bg-blue-50 text-dnc-blue text-[9px] font-sans font-bold rounded uppercase tracking-wider mb-2">
                    Government Affairs
                  </span>
                  <h4 className="font-display font-bold text-slate-800 group-hover:text-dnc-blue transition-colors text-sm sm:text-base leading-snug">
                    Google Maps Street View Launch & Geo-Spatials in Nepal
                  </h4>
                  <p className="text-sm text-slate-500 mt-1 lines-clamp-2">
                    How decentralized location services support digital navigation, regional tourism, and micro commerce logistics.
                  </p>
                </div>
                <span className="text-[11px] text-dnc-orange font-bold mt-2 sm:mt-0 flex items-center gap-1">
                  Launch Interactive Highlights Speaker Panel →
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* PHOTO LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative bg-white p-2 rounded-3xl max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 bg-white/90 hover:bg-slate-100 p-2.5 rounded-full text-slate-700 shadow-md font-bold transition-transform hover:scale-105 w-10 h-10 flex items-center justify-center"
              onClick={() => setActivePhoto(null)}
            >
              ✕
            </button>
            <img
              src={activePhoto}
              alt="Conclave Gallery Highlight"
              className="max-w-full max-h-[75vh] object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 text-center">
              <p className="text-sm text-slate-500 font-sans font-bold uppercase tracking-wider">
                Digital Nepal Conclave Visual Chronicle
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIDEO DIALOGUE MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-150 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-dnc-orange font-sans tracking-widest block">Broadcast Room</span>
                <h3 className="font-display font-black text-slate-900 text-base sm:text-lg leading-tight">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-full transition-colors w-8 h-8 flex items-center justify-center"
                onClick={() => setActiveVideo(null)}
              >
                ✕
              </button>
            </div>

            {/* Simulated Real Player / Video Frame */}
            <div className="aspect-video bg-slate-950 relative flex flex-col justify-center items-center">
              {activeVideo.embedId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="text-center p-8">
                  <Play className="w-12 h-12 text-dnc-orange animate-bounce mb-3 mx-auto" />
                  <p className="text-white text-sm font-bold">Simulating Broadcaster System Feed...</p>
                  <p className="text-sm text-slate-400 mt-1">Directing link to official ICT Foundation Nepal playlist.</p>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-50 space-y-4">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-400 font-sans uppercase tracking-wider">Session Keynotes & Panelists</h4>
                <p className="text-sm text-slate-700 leading-relaxed font-sans text-justify">
                  This broadcast represents premium federal and global technical advice delivered to Nepalese authorities. It covers instant electronic clearing systems, provincial resource indicators, and digital logistics protocols.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-dnc-blue hover:bg-dnc-orange text-white text-sm font-bold font-sans uppercase tracking-wider rounded-xl transition duration-200 inline-flex items-center gap-1.5 shadow-sm"
                >
                  View Complete YouTube Playlist
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] text-slate-400 font-sans">DNC Media Group</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NEWS ARTICLE READER MODAL */}
      {activeNews && (
        <div
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveNews(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-150 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger */}
            <button
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 p-2 rounded-full transition z-10 w-8 h-8 flex items-center justify-center"
              onClick={() => setActiveNews(null)}
            >
              ✕
            </button>

            {/* Cover Image */}
            <div className="aspect-video w-full relative bg-slate-100">
              <img
                src={activeNews.imageUrl}
                alt={activeNews.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-1 bg-dnc-orange text-[9px] font-sans font-bold rounded-md uppercase tracking-wider mb-2">
                  {activeNews.source} Press Release
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                  {activeNews.title}
                </h3>
              </div>
            </div>

            {/* News Body Text */}
            <div className="p-6 sm:p-8 space-y-4 font-sans">
              <div className="flex items-center gap-3 text-sm text-slate-400 font-sans border-b border-slate-100 pb-3">
                <span>By Special Correspondent</span>
                <span>•</span>
                <span>{activeNews.date}</span>
                <span>•</span>
                <span className="text-dnc-blue font-bold">Press Center</span>
              </div>

              <div className="text-sm text-slate-600 space-y-4 leading-relaxed font-sans text-justify">
                <p>
                  <strong>KATHMANDU, NEPAL</strong> — As the federal government transitions toward decentralized smart public services, organizers from the ICT Foundation Nepal in coordination with national planners have launched preparatory agendas for the upcoming Digital Nepal Conclave.
                </p>
                <p>
                  According to representatives, this edition builds upon the critical success criteria formed during the 2025 conclave, during which key landmarks including nationwide Google Street View and integration parameters for the Nagarik smartphone application were launched.
                </p>
                <p>
                  "We believe that real digital transformation is not just about raw connectivity infrastructure, but about building cohesive software ecosystems, secure API interfaces, and establishing local data sovereignty guidelines," stated core panel specialists from the organizing committee.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-150 flex flex-wrap gap-4 items-center justify-between">
                <a
                  href={activeNews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-slate-200 hover:border-dnc-blue text-sm font-bold text-slate-700 rounded-xl transition duration-150 flex items-center gap-1.5"
                >
                  Visit Official Media Portal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => {
                    setActiveNews(null);
                    onNavigate("contact");
                  }}
                  className="px-4 py-2 bg-dnc-blue hover:bg-dnc-orange text-white text-sm font-bold rounded-xl transition shadow-sm cursor-pointer"
                >
                  Secure Delegate Pass
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Adding custom CSS animations programmatically inside a style block for high compatibility with React 19 */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 45s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
