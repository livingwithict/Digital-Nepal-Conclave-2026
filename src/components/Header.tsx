import React, { useState } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

export type PageId =
  | "home"
  | "about-event"
  | "about-organizer"
  | "about-team"
  | "agenda"
  | "speakers"
  | "past-2025"
  | "past-2024"
  | "past-2023"
  | "past-2022"
  | "publications"
  | "media"
  | "contact";

interface HeaderProps {
  activePage: PageId;
  onPageChange: (pageId: PageId) => void;
  onRegisterClick: () => void;
}

export default function Header({ activePage, onPageChange, onRegisterClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"about" | "past" | null>(null);

  const handlePageSelect = (pageId: PageId) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItemClass = (pageIds: PageId[]) => {
    const isSelected = pageIds.includes(activePage);
    return `relative px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${isSelected
        ? "text-dnc-blue font-extrabold"
        : "text-slate-600 hover:text-dnc-blue"
      }`;
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div
            id="header-logo"
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handlePageSelect("home")}
          >
            {/* Added Image Tag */}
            <img
              src="/images/DNC-Logo.png"
              alt="Digital Nepal Logo"
              className="w-25 h-25 object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            <button
              id="nav-home"
              onClick={() => handlePageSelect("home")}
              className={navItemClass(["home"])}
            >
              Home
              {activePage === "home" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
              )}
            </button>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-about-dropdown"
                className={navItemClass(["about-event", "about-organizer", "about-team"])}
              >
                <span className="flex items-center gap-1">
                  About
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </span>
                {(activePage === "about-event" || activePage === "about-organizer" || activePage === "about-team") && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
                )}
              </button>

              <div className="absolute top-full left-0 w-56 mt-0 bg-white border border-slate-100 rounded-xl shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <button
                  id="nav-about-event"
                  onClick={() => handlePageSelect("about-event")}
                  className={`flex w-full px-4 py-2 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${activePage === "about-event" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  About the Event
                </button>
                <button
                  id="nav-about-organizer"
                  onClick={() => handlePageSelect("about-organizer")}
                  className={`flex w-full px-4 py-2 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${activePage === "about-organizer" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  About the Organizer (IFN)
                </button>
                <button
                  id="nav-about-team"
                  onClick={() => handlePageSelect("about-team")}
                  className={`flex w-full px-4 py-2 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${activePage === "about-team" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Team & Patrons
                </button>
              </div>
            </div>

            <button
              id="nav-agenda"
              onClick={() => handlePageSelect("agenda")}
              className={navItemClass(["agenda"])}
            >
              Agenda
              {activePage === "agenda" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
              )}
            </button>

            <button
              id="nav-speakers"
              onClick={() => handlePageSelect("speakers")}
              className={navItemClass(["speakers"])}
            >
              Speakers
              {activePage === "speakers" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
              )}
            </button>

            {/* Past Events Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("past")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-past-dropdown"
                className={navItemClass(["past-2025", "past-2024", "past-2023", "past-2022"])}
              >
                <span className="flex items-center gap-1">
                  Past Events
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </span>
                {(activePage === "past-2025" || activePage === "past-2024" || activePage === "past-2023" || activePage === "past-2022") && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
                )}
              </button>

              <div className="absolute top-full left-0 w-64 mt-0 bg-white border border-slate-100 rounded-xl shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <button
                  id="nav-past-2025"
                  onClick={() => handlePageSelect("past-2025")}
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${activePage === "past-2025" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2025
                </button>
                <button
                  id="nav-past-2024"
                  onClick={() => handlePageSelect("past-2024")}
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${activePage === "past-2024" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2024
                </button>
                <button
                  id="nav-past-2023"
                  onClick={() => handlePageSelect("past-2023")}
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${activePage === "past-2023" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2023
                </button>
                <button
                  id="nav-past-2022"
                  onClick={() => handlePageSelect("past-2022")}
                  className={`flex w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 hover:text-dnc-blue ${activePage === "past-2022" ? "text-dnc-blue font-medium bg-slate-50/50" : "text-slate-600"}`}
                >
                  Digital Nepal Conclave 2022
                </button>
              </div>
            </div>

            <button
              id="nav-publications"
              onClick={() => handlePageSelect("publications")}
              className={navItemClass(["publications"])}
            >
              Publications
              {activePage === "publications" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
              )}
            </button>

            <button
              id="nav-media"
              onClick={() => handlePageSelect("media")}
              className={navItemClass(["media"])}
            >
              News & Media
              {activePage === "media" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
              )}
            </button>

            <button
              id="nav-contact"
              onClick={() => handlePageSelect("contact")}
              className={navItemClass(["contact"])}
            >
              Contact
              {activePage === "contact" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-dnc-blue rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Registration Trigger */}
          <div className="hidden lg:flex items-center">
            <a
              id="desktop-register-button"
              href="#" 
              target="_blank"                   
              rel="noopener noreferrer"   
              onClick={onRegisterClick}       
              className="w-full sm:w-auto px-8 py-3.5 bg-[#eb0000] hover:bg-[#c20000] text-white font-bold rounded-full shadow-lg shadow-red-950/20 uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center block sm:inline-block"
            >
              {/* <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" /> */}
              Register Now
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-dnc-blue hover:bg-slate-100 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden" style={{ contentVisibility: "auto" }}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-b border-slate-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <button
              onClick={() => handlePageSelect("home")}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${activePage === "home" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Home
            </button>

            {/* About Collapsible Section */}
            <div className="border-t border-slate-50 pt-2">
              <div className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                About Conclave
              </div>
              <button
                onClick={() => handlePageSelect("about-event")}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${activePage === "about-event" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                About the Event
              </button>
              <button
                onClick={() => handlePageSelect("about-organizer")}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${activePage === "about-organizer" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                About the Organizer
              </button>
              <button
                onClick={() => handlePageSelect("about-team")}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${activePage === "about-team" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Team & Patrons
              </button>
            </div>

            <button
              onClick={() => handlePageSelect("agenda")}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${activePage === "agenda" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Agenda
            </button>

            <button
              onClick={() => handlePageSelect("speakers")}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${activePage === "speakers" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Speakers
            </button>

            {/* Past Events Collapsible Section */}
            <div className="border-t border-slate-50 pt-2">
              <div className="px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                Past Editions
              </div>
              <button
                onClick={() => handlePageSelect("past-2025")}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${activePage === "past-2025" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2025
              </button>
              <button
                onClick={() => handlePageSelect("past-2024")}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${activePage === "past-2024" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2024
              </button>
              <button
                onClick={() => handlePageSelect("past-2023")}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${activePage === "past-2023" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2023
              </button>
              <button
                onClick={() => handlePageSelect("past-2022")}
                className={`flex w-full px-6 py-2 rounded-md text-sm font-medium ${activePage === "past-2022" ? "text-dnc-blue font-bold bg-slate-50/50" : "text-slate-600"}`}
              >
                Conclave 2022
              </button>
            </div>

            <button
              onClick={() => handlePageSelect("publications")}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${activePage === "publications" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Publications
            </button>

            <button
              onClick={() => handlePageSelect("media")}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${activePage === "media" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              News & Media
            </button>

            <button
              onClick={() => handlePageSelect("contact")}
              className={`flex w-full px-4 py-3 rounded-md text-base font-medium ${activePage === "contact" ? "bg-slate-50 text-dnc-blue font-bold" : "text-slate-700"}`}
            >
              Contact
            </button>

            {/* Mobile Register Button */}
            <div className="hidden lg:flex items-center">
              <a
                id="desktop-register-button"
                href="#" 
                target="_blank"                
                rel="noopener noreferrer"         
                onClick={onRegisterClick}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#eb0000] hover:bg-[#c20000] text-white font-bold rounded-full shadow-lg shadow-red-950/20 uppercase tracking-widest text-sm transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center block sm:inline-block"
              >
                {/* <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" /> */}
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
