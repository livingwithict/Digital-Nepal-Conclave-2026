import React, { useState } from "react";
import { BookOpen, Download, Search, CheckCircle, Award, Hourglass, RefreshCw } from "lucide-react";
import { PUBLICATIONS_DATA, Publication } from "../data";

export default function PublicationsComponent() {
  const [selectedPub, setSelectedPub] = useState<Publication | null>(PUBLICATIONS_DATA[0]);
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleDownload = (id: string, title: string) => {
    if (downloadProgress[id] !== undefined) return;

    setDownloadProgress((prev) => ({ ...prev, [id]: 1 }));
    
    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setDownloadProgress((prev) => ({ ...prev, [id]: current }));
      
      if (current >= 100) {
        clearInterval(interval);
        // Clean feedback alert
        const dummyLink = document.createElement("a");
        dummyLink.href = "#";
        dummyLink.setAttribute("download", `${id}-publication.pdf`);
        // Just logs to avoid popup blockers or window constraints
        console.log(`Simulating PDF compile and download for ${title}`);
      }
    }, 150);
  };

  const filteredPubs = PUBLICATIONS_DATA.filter(pub => 
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.year.includes(searchQuery) ||
    pub.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="publications-page" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-xs font-mono font-bold rounded-full uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4 text-dnc-orange" />
            IFN Knowledge Catalog
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Publications, Reports & Indices
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Gain immediate access to policy summaries, smart provincial readiness frameworks, and federal feedback booklets published during previous conclaves.
          </p>
        </div>

        {/* Filter Input */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Reports by keyword or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue focus:bg-white"
            />
            <Search className="absolute right-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
          </div>
        </div>

        {/* Two-Column split: Document Grid vs Active booklet Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Grid Layout */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredPubs.map((pub) => (
              <div
                key={pub.id}
                onClick={() => setSelectedPub(pub)}
                className={`bg-white rounded-3xl p-5 border shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex gap-4 ${
                  selectedPub?.id === pub.id ? "border-dnc-blue bg-dnc-blue/[0.01]" : "border-slate-100"
                }`}
              >
                {/* Book cover representational layout */}
                <div className="w-20 h-28 bg-slate-100 rounded-lg overflow-hidden border border-slate-200/50 relative shrink-0">
                  <img
                    src={pub.coverUrl}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-dnc-orange font-mono font-bold">
                      {pub.type} • {pub.year}
                    </span>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-slate-900 leading-snug mt-1 truncate">
                      {pub.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-snug font-sans mt-2 line-clamp-2">
                      {pub.description}
                    </p>
                  </div>

                  <span className="text-[10px] text-dnc-blue font-bold hover:underline mt-2 inline-block">
                    Review Actions →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Selected Book Reader Drawer */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-xs sticky top-24">
            {selectedPub ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-28 h-36 mx-auto bg-white rounded-xl shadow-md border border-slate-200/60 overflow-hidden mb-4">
                    <img
                      src={selectedPub.coverUrl}
                      alt={selectedPub.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <span className="px-2.5 py-0.5 bg-dnc-orange/5 text-dnc-orange border border-dnc-orange/10 text-[9px] font-mono font-bold rounded uppercase">
                    {selectedPub.type} • {selectedPub.year}
                  </span>
                  
                  <h3 className="font-display font-bold text-sm sm:text-base text-slate-950 mt-2 truncate">
                    {selectedPub.title}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  <p className="text-xs text-slate-600 leading-relaxed font-sans text-justify">
                    {selectedPub.description}
                  </p>

                  {/* Simulated Core Directives */}
                  <div className="bg-white border rounded-xl p-4 border-slate-200/50 space-y-2">
                    <p className="font-bold text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-dnc-blue" />
                      Key National Policy Directives:
                    </p>
                    <ul className="text-[11px] text-slate-600 space-y-1.5 font-sans">
                      <li className="flex gap-1.5 items-start">
                        <span className="text-dnc-orange font-bold">•</span>
                        <span>Multi-layer secure public cloud framework parameters.</span>
                      </li>
                      <li className="flex gap-1.5 items-start">
                        <span className="text-dnc-blue font-bold">•</span>
                        <span>Securing sovereign retail transactions with interoperable nodes.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Virtual Progress Bar Button */}
                <div>
                  <button
                    onClick={() => handleDownload(selectedPub.id, selectedPub.title)}
                    disabled={downloadProgress[selectedPub.id] !== undefined && downloadProgress[selectedPub.id] < 100}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition duration-200 ${
                      downloadProgress[selectedPub.id] === 100
                        ? "bg-emerald-600 text-white"
                        : "bg-dnc-blue hover:bg-dnc-blue-light text-white shadow-xs"
                    }`}
                  >
                    <Download className="w-4 h-4 text-dnc-orange" />
                    {downloadProgress[selectedPub.id] === undefined && "Compile & Download PDF"}
                    {downloadProgress[selectedPub.id] !== undefined && downloadProgress[selectedPub.id] < 100 && (
                      <span className="flex items-center gap-1">
                        <Hourglass className="w-3.5 h-3.5 animate-spin" />
                        Generating {downloadProgress[selectedPub.id]}%
                      </span>
                    )}
                    {downloadProgress[selectedPub.id] === 100 && "Download Complete! Saved"}
                  </button>

                  {/* Visual simulated progress bar */}
                  {downloadProgress[selectedPub.id] !== undefined && (
                    <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mt-2.5">
                      <div 
                        className="bg-dnc-orange h-full transition-all duration-150"
                        style={{ width: `${downloadProgress[selectedPub.id]}%` }}
                      ></div>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="text-center py-12 text-slate-400">
                <p>Select a book cover from the grid rack to read core directives.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
