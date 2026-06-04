import React from "react";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { PageId } from "./Header";

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onRegisterClick: () => void;
}

export default function Footer({ onNavigate, onRegisterClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-900 text-white border-t border-slate-800">
      
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Logo & Description Left */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("home")}>
              <div className="w-9 h-9 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-xs">
                {/* Logo spectrum indicators */}
                <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                  <div className="bg-dnc-blue rounded-xs"></div>
                  <div className="bg-dnc-orange rounded-xs"></div>
                  <div className="bg-dnc-red rounded-xs"></div>
                  <div className="bg-dnc-black rounded-xs"></div>
                </div>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white block leading-none">Digital Nepal</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-dnc-orange-light block mt-0.5">CONCLAVE 2026</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Organized by <strong>ICT Foundation Nepal (IFN)</strong> - a profit-not-distributing organization dedicated to facilitating high-level policy dialogue and public-private sector partnerships to implement e-society initiatives.
            </p>

            <p className="text-xs font-mono font-bold text-dnc-orange-light tracking-wide uppercase">
              ★ Driving Nepal&apos;s Digital Future
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 pt-2">
              <a 
                href="https://www.facebook.com/digitalconclave" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-blue rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                title="Follow DNC on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/digitalnepalconclave/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-orange rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                title="Follow DNC on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/digital-nepal-conclave" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-blue-light rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                title="DNC LinkedIn Company Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@ict.foundation" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 sm:p-2.5 bg-slate-800 hover:bg-dnc-red rounded-xl text-slate-350 hover:text-white transition-all duration-200 shadow-xs"
                title="Tune in to official IFN Channel on Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links middle */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-300 font-mono">
              Quick Directory
            </h4>
            
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate("home")} className="hover:text-white transition">Homepage</button>
              </li>
              <li>
                <button onClick={() => onNavigate("about-event")} className="hover:text-white transition">About the Event</button>
              </li>
              <li>
                <button onClick={() => onNavigate("about-organizer")} className="hover:text-white transition">About the Organizer</button>
              </li>
              <li>
                <button onClick={() => onNavigate("about-team")} className="hover:text-white transition">Our Team & Advisors</button>
              </li>
              <li>
                <button onClick={() => onNavigate("agenda")} className="hover:text-white transition">Conference Agenda</button>
              </li>
              <li>
                <button onClick={() => onNavigate("speakers")} className="hover:text-white transition">Distinguished Speakers</button>
              </li>
              <li>
                <button onClick={() => onNavigate("publications")} className="hover:text-white transition">Publications & PDFs</button>
              </li>
              <li>
                <button onClick={() => onNavigate("contact")} className="hover:text-white transition">Contact Help Desk</button>
              </li>
              <li>
                <button onClick={onRegisterClick} className="text-dnc-orange-light font-bold hover:underline">Secure Entry Ticket</button>
              </li>
            </ul>
          </div>

          {/* Location & Hotlines Right */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-300 font-mono">
              Sankhamul Office Coordinates
            </h4>

            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5.5 h-5.5 text-dnc-orange-light shrink-0 mt-0.5" />
                <span>Sankhamul, Kathmandu-31, Nepal</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-dnc-blue-light shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-[11px] select-all">admin@ictfoundation.org.np</span>
                  <span className="block text-[11px] select-all">conclave@ictfoundation.org.np</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 border-t border-slate-800 pt-3">
                <Phone className="w-4 h-4 text-dnc-blue-light shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-[11px] select-all">+977 9851141348 / +977 9801263604</span>
                  <span className="block text-[11px] select-all">01-5314322 (Landline)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© Digital Nepal Conclave 2026. All Rights Reserved. Crafted for Nepal&apos;s leading digital initiative.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-lg transition"
            title="Scroll to Top"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
