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
          <div className="md:col-span-5">
            <div
              id="header-logo"
              className="flex items-center gap-3 cursor-pointer"
            >
              {/* Added Image Tag */}
              <img
                src="/images/logo-white.png"
                alt="Digital Nepal Logo"
                className="h-28 mb-4"
              />
            </div>
            <p className="text-base font-sans font-bold text-dnc-orange-light tracking-wide uppercase mb-2">
              Digital Nepal Conclave 2026
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The <strong>Biggest Digital Conference</strong> in Nepal, organized by <strong>ICT Foundation Nepal (IFN) ICT Foundation Nepal </strong>, a nonprofit, non-distributing organization, which promotes innovation, startups, and ideas guided by the vision to build Digital Nepal promoting new ideas and startups.
            </p>
          </div>

          {/* Quick links middle */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-slate-300 font-sans">
              Quick Links
            </h4>
            
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate("about-event")} className="hover:text-white transition">About the Event</button>
              </li>
              <li>
                <button onClick={() => onNavigate("about-organizer")} className="hover:text-white transition">About the Organizer</button>
              </li>
              <li>
                <button onClick={() => onNavigate("agenda")} className="hover:text-white transition">Conference Agenda</button>
              </li>
              <li>
                <button onClick={() => onNavigate("speakers")} className="hover:text-white transition">Our Speakers</button>
              </li>
              <li>
                <button onClick={() => onNavigate("publications")} className="hover:text-white transition">Our Publications</button>
              </li>
              <li>
                <button onClick={() => onNavigate("media")} className="hover:text-white transition">News & Media</button>
              </li>
              <li>
                <button onClick={() => onNavigate("contact")} className="hover:text-white transition">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Location & Hotlines Right */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-slate-300 font-sans">
              Office Location & Contact
            </h4>

            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-dnc-orange-light shrink-0 mt-0.5" />
                <span>Sankhamul, Kathmandu-31, Nepal</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-5 h-5 text-dnc-orange-light shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-sm select-all">admin@ictfoundation.org.np</span>
                  <span className="block text-sm select-all">conclave@ictfoundation.org.np</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-dnc-orange-light shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-sm select-all">+977 9851141348 / +977 9801263604</span>
                  <span className="block text-sm select-all">01-5314322 (Landline)</span>
                </div>
              </div>
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
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© Digital Nepal Conclave 2026. All Rights Reserved.</p>
          
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
