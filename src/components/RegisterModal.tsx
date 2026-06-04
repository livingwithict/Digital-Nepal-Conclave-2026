import React, { useState } from "react";
import { X, CheckCircle, Ticket, Sparkles, Printer, Shield, Eye, CreditCard } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    org: "",
    phone: "",
    roleType: "Delegate", // VIP, Startup Pitch, Media, General
    primaryTrack: "Governance & DPI"
  });

  const [registerState, setRegisterState] = useState<"form" | "ticket">("form");
  const [ticketId, setTicketId] = useState("");
  const [validationError, setValidationError] = useState("");

  if (!isOpen) return null;

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setValidationError("Please input your Name and Professional Email to generate an entry gatepass.");
      return;
    }

    if (!formData.email.includes("@")) {
      setValidationError("Please provide a valid company email address.");
      return;
    }

    // Generate custom random ticket parameters
    const randomInt = Math.floor(Math.random() * 900000) + 100000;
    setTicketId(`DNC26-${formData.roleType.substring(0, 3).toUpperCase()}-${randomInt}`);
    setRegisterState("ticket");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="register-overlay" className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 animate-slide-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button top */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {registerState === "form" ? (
          /* REGISTRATION FORM VIEW */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-xs font-mono font-bold rounded-full uppercase tracking-wider mb-2">
                <Ticket className="w-3.5 h-3.5 text-dnc-orange animate-spin" />
                DNC 2026 Digital Pass Portal
              </span>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight leading-none mt-1">
                Register Securely Now
              </h2>
              <p className="text-xs text-slate-500 mt-2 font-sans leading-relaxed">
                Provide credentials below to instant compile your gatepass confirmation. Standard delegates have complete access to B2B pitch suites.
              </p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-650 mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="E.g., Dr. Roshan Pokharel"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    setValidationError("");
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-65) mb-1">Professional Email *</label>
                <input
                  type="email"
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setValidationError("");
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Organization</label>
                  <input
                    type="text"
                    placeholder="Enter entity"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Phone Contact</label>
                  <input
                    type="text"
                    placeholder="+977-98..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Registration Role</label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  >
                    <option value="Delegate">General Delegate</option>
                    <option value="VIP Invite">VIP Corporate Invitee</option>
                    <option value="Startup Pitch">Startup Presenter</option>
                    <option value="Research Scholar">Academic Researcher</option>
                    <option value="Press Partner">Press accreditation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Primary Thematic Track</label>
                  <select
                    value={formData.primaryTrack}
                    onChange={(e) => setFormData({ ...formData, primaryTrack: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-hidden focus:ring-1 focus:ring-dnc-blue"
                  >
                    <option value="Governance & DPI">Governance & DPI Track</option>
                    <option value="Data & AI Sovereignty">Data & AI Track</option>
                    <option value="Fintech & payment infrastructure">Digital Economy Track</option>
                  </select>
                </div>
              </div>

              {validationError && (
                <p className="text-red-550 text-xs font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
                  ⚠️ {validationError}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-dnc-blue hover:bg-dnc-blue-light transition font-bold text-xs uppercase tracking-wider text-white rounded-xl shadow-md cursor-pointer"
              >
                Assemble Free Event Pass →
              </button>

            </form>

            <p className="text-[10px] text-slate-400 font-mono text-center">
              * Verification passes are compiled locally on the sandbox environment instantly.
            </p>
          </div>
        ) : (
          /* ATTENDEE BADGE / TICKET VIEW */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            
            <div className="space-y-1">
              <CheckCircle className="w-10 h-10 text-emerald-600 animate-bounce mx-auto" />
              <h2 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                Gate Pass Confirmed & Compiled!
              </h2>
              <p className="text-xs text-slate-500 font-sans">
                Below is your official compiled pass for Digital Nepal Conclave 2026.
              </p>
            </div>

            {/* Simulated Printed Pass visual */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-350 p-6 rounded-3xl relative text-left overflow-hidden shadow-xs mt-4">
              
              {/* Ticket Top spectrum block */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-dnc-blue via-dnc-orange to-dnc-red"></div>

              <div className="flex justify-between items-baseline pt-2">
                <span className="text-[10px] uppercase tracking-widest text-dnc-orange font-mono font-bold">DIGITAL NEPAL CONCLAVE 2026</span>
                <span className="text-[9px] font-bold text-slate-400 font-mono">CODE: {ticketId}</span>
              </div>

              <div className="mt-4 space-y-1.5 border-b border-slate-200 pb-4">
                <p className="text-xs text-slate-400 font-mono uppercase tracking-wider leading-none">VIP GUEST / DELEGATE</p>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-1">{formData.fullName}</h3>
                
                {formData.org && (
                  <p className="text-xs font-semibold text-slate-600 leading-normal">Representing: {formData.org}</p>
                )}
                <p className="text-xs text-slate-500">Contact Route: {formData.email}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3.5">
                <div>
                  <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">TRACK REGION</p>
                  <p className="text-xs font-bold text-dnc-blue">{formData.primaryTrack}</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">VENUE VENUE</p>
                  <p className="text-xs font-semibold text-slate-800">The Plaza, Pulchowk</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">CONFERENCE SECTOR</p>
                  <p className="text-xs font-semibold text-dnc-orange font-mono uppercase tracking-wide">{formData.roleType}</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">DATE & CONTEXT</p>
                  <p className="text-xs font-semibold text-slate-800">3rd July 2026, 9:00 AM</p>
                </div>
              </div>

              {/* Barcode Mock visual */}
              <div className="pt-4 border-t border-slate-250/50 flex flex-col items-center">
                <div className="w-full h-11 bg-slate-900 border border-slate-950 flex items-center justify-around overflow-hidden relative rounded">
                  {/* barcode lines generated procedurally */}
                  <div className="absolute inset-0 flex items-stretch">
                    {[1, 4, 2, 6, 8, 2, 4, 1, 9, 7, 3, 5, 2, 1, 4, 2, 4, 1, 9, 8, 3, 2, 1, 4, 3, 2, 1, 2, 4, 6, 8, 3, 1, 9, 2, 3, 2, 1, 4, 2, 1].map((wt, wIdx) => (
                      <div 
                        key={wIdx} 
                        className={`h-full bg-slate-100 ${wIdx % 2 === 0 ? "bg-opacity-0" : "bg-opacity-100"}`} 
                        style={{ width: `${wt * 1.6}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-[9px] text-slate-400 mt-1 block uppercase tracking-widest">
                  GATE VERIFIED • {ticketId}
                </span>
              </div>

            </div>

            {/* Print Confirmation Actions bar */}
            <div className="pt-4 flex gap-3">
              <button
                onClick={handlePrint}
                className="w-1/2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Printer className="w-4 h-4 text-dnc-orange-light" />
                Print Ticket Pass
              </button>

              <button
                onClick={() => {
                  setRegisterState("form");
                  onClose();
                }}
                className="w-1/2 py-2.5 bg-dnc-blue hover:bg-dnc-blue-light text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
              >
                <CheckCircle className="w-4 h-4" />
                Done & Acknowledge
              </button>
            </div>

            <p className="text-[10px] text-slate-400 font-mono">
              ★ Security note: Please download or save a snapshot of this compiled ticket. Present the digital scan for verification on July 3rd, 2026.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
