import React, { useState, useEffect } from "react";
import Header, { PageId } from "./components/Header";
import Hero from "./components/Hero";
import ThemeDateVenue from "./components/ThemeDateVenue";
import HomeDetails from "./components/HomeDetails";
import AboutComponents from "./components/AboutComponents";
import AgendaComponent from "./components/AgendaComponent";
import SpeakersComponent from "./components/SpeakersComponent";
import PastEventsComponent from "./components/PastEventsComponent";
import PublicationsComponent from "./components/PublicationsComponent";
import MediaComponent from "./components/MediaComponent";
import ContactComponent from "./components/ContactComponent";
import Footer from "./components/Footer";
import { Sparkles, Calendar, MapPin } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("home");
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [aboutSubSection, setAboutSubSection] = useState<"event" | "organizer" | "team">("event");

  // Intercept subpage dropdown actions
  const handlePageChange = (pageId: PageId) => {
    setActivePage(pageId);
    
    // Map dropdown subviews for about pages
    if (pageId === "about-event") {
      setAboutSubSection("event");
    } else if (pageId === "about-organizer") {
      setAboutSubSection("organizer");
    } else if (pageId === "about-team") {
      setAboutSubSection("team");
    }
    window.scrollTo(0, 0);
  };

  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-dnc-orange selection:text-white">
      
      {/* Dynamic alert bar for actual physical site details */}
      {/* <div className="bg-slate-100 text-slate-700 border-b border-slate-200 text-center py-2 text-sm font-medium px-4 flex items-center justify-center gap-3">
        <span className="w-2 h-2 bg-dnc-blue rounded-full"></span>
        <span className="font-semibold text-slate-800">CONFERENCE 2026 OFFICIAL ANNOUNCEMENT</span>
        <span className="hidden md:inline-block text-slate-300">|</span>
        <span className="hidden md:flex items-center gap-1.5 text-slate-600"><Calendar className="w-3.5 h-3.5 text-slate-400" /> 3rd July (2083 Asar 19)</span>
        <span className="hidden md:inline-block text-slate-300">|</span>
        <span className="hidden md:flex items-center gap-1.5 text-slate-600"><MapPin className="w-3.5 h-3.5 text-slate-400" /> The Plaza, Pulchowk, Lalitpur</span>
      </div> */}

      {/* Navigation Header */}
      <Header 
        activePage={activePage} 
        onPageChange={handlePageChange} 
        onRegisterClick={() => setIsRegisterOpen(true)} 
      />

      {/* Main Multi-page content router */}
      <main className="grow">
        {activePage === "home" && (
          <div id="home-subpage-container" className="animate-fade-in relative z-10">
            <Hero 
              onNavigate={handlePageChange} 
              onRegisterClick={() => setIsRegisterOpen(true)} 
            />
            <ThemeDateVenue />
            {/* <DigitalNepalMap /> */}
            <HomeDetails 
              onNavigate={handlePageChange}     
            />
          </div>
        )}

        {(activePage === "about-event" || activePage === "about-organizer" || activePage === "about-team") && (
          <AboutComponents 
            currentSubSection={aboutSubSection}
            onSubSectionChange={(sub) => {
              setAboutSubSection(sub);
              // Synced parent active page
              setActivePage(`about-${sub}` as PageId);
            }}
          />
        )}

        {activePage === "agenda" && (
          <AgendaComponent />
        )}

        {activePage === "speakers" && (
          <SpeakersComponent />
        )}

        {/* Chronological legacy years */}
        {activePage === "past-2025" && (
          <PastEventsComponent initialYear="2025" />
        )}
        {activePage === "past-2024" && (
          <PastEventsComponent initialYear="2024" />
        )}
        {activePage === "past-2023" && (
          <PastEventsComponent initialYear="2023" />
        )}
        {activePage === "past-2022" && (
          <PastEventsComponent initialYear="2022" />
        )}

        {activePage === "publications" && (
          <PublicationsComponent />
        )}

        {activePage === "media" && (
          <MediaComponent />
        )}

        {activePage === "contact" && (
          <ContactComponent />
        )}
      </main>

      {/* Registration Badge Portal overlay
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      /> */}

      {/* Professional Footer */}
      <Footer 
        onNavigate={handlePageChange} 
        onRegisterClick={() => setIsRegisterOpen(true)} 
      />

    </div>
  );
}
