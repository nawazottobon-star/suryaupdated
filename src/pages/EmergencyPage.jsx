import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import {
  PhoneCall,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  FileText,
  Navigation,
  Activity,
  Radio,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function EmergencyPage() {
  const [liveTime, setLiveTime] = useState(() => {
    return new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  });

  useEffect(() => {
    document.title = "24/7 Emergency Care | Surya Hospital, Sai Nagar, Anantapur";
    const timer = setInterval(() => {
      setLiveTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* High-priority Emergency Hero Banner with Pulse Radar & Live Status */}
      <section className="relative bg-gradient-to-br from-[#FFF0E6] via-[#FFF9F3] to-[#FFF0E6] text-[#262626] pt-36 sm:pt-40 md:pt-44 pb-14 md:pb-20 border-b border-[#F0E2D9] overflow-hidden">
        {/* Radar concentric pulse rings in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-[#C63D1B]"
          />
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
            className="absolute inset-16 rounded-full border border-[#E94B1C]"
          />
        </div>

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* Live Casualty Desk Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#C63D1B] text-white shadow-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                <span>24/7 EMERGENCY CASUALTY ACTIVE</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>On-Duty Doctor &amp; Triage Team Ready • {liveTime}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif-heading font-black text-[#C63D1B] tracking-tight leading-snug">
              24/7 Emergency &amp; Casualty Care
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#4A403B] leading-relaxed max-w-2xl mx-auto font-normal">
              Our emergency team is open day and night for accidents, sudden chest pain, breathing difficulties, high fevers, and wound care in Sai Nagar, Anantapur.
            </p>

            {/* Large Call Hospital Button with Interactive Pulse Ring */}
            <div className="pt-2 relative inline-block">
              {/* Pulsing ring around button */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-2 rounded-full bg-[#E94B1C]/30 blur-xs"
              />
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-black bg-[#C63D1B] hover:bg-[#A83218] text-white shadow-xl hover:shadow-2xl transition transform hover:scale-[1.03] active:scale-98 w-full sm:w-auto text-center"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce shrink-0 text-white" />
                </div>
                <span>Call Emergency Casualty: {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Address & Direct Navigation */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-[13px] text-[#756860]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E94B1C] shrink-0" />
                <span>{HOSPITAL_INFO.fullAddress}</span>
              </div>
              <a
                href={HOSPITAL_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#FFF0E6] text-[#C63D1B] font-bold transition border border-[#E9D8CE] shadow-2xs"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E94B1C]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* National Emergency 112 Notice */}
      <section className="py-8 bg-white border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-4xl mx-auto flex items-start gap-4 text-xs sm:text-sm text-[#262626]">
            <AlertCircle className="w-5 h-5 text-[#C63D1B] shrink-0 mt-0.5" />
            <div className="space-y-1 text-left">
              <h4 className="font-bold text-[#262626] text-sm sm:text-base">
                National All-India Emergency Helpline:
              </h4>
              <p className="leading-relaxed text-[#756860]">
                For severe life-threatening emergencies requiring government police, fire, or national disaster services across India, dial <strong>112</strong> right away.
              </p>
              <p className="text-[11px] text-[#756860]/80">
                National 112 is a public helpline operated by Government of India authorities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Emergency Guidance: Symptoms & Care Priority */}
      <section className="py-12 bg-[#FFF0E6]/40 border-b border-[#F0E2D9]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {/* When to visit casualty */}
            <div className="p-6 rounded-2xl bg-white border border-[#E9D8CE] shadow-2xs space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFF0E6] text-[#C63D1B] flex items-center justify-center font-bold">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-[#262626]">
                  When to Seek Emergency Care
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-[#756860]">
                {HOSPITAL_INFO.emergencyGuidance.whenToVisit.slice(0, 5).map((symptom, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E94B1C] shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Immediate Care Protocol */}
            <div className="p-6 rounded-2xl bg-white border border-[#E9D8CE] shadow-2xs space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0E6] text-[#C63D1B] flex items-center justify-center font-bold">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#262626]">
                    Immediate Medical Priority
                  </h3>
                </div>
                <p className="text-xs text-[#756860] leading-relaxed">
                  Do not delay emergency visits if you don't have medical records. Our triage desk handles patient stabilization first.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#FFF0E6] border border-[#E9D8CE] text-[11px] text-[#C63D1B] font-bold">
                Direct Emergency Line: 8500904999 (24/7 Casualty Desk)
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Direct Location Card */}
      <section className="py-12 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-[#E9D8CE] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-left">
              <h4 className="text-base font-bold text-[#262626]">
                Surya Hospital Emergency Entrance
              </h4>
              <p className="text-xs text-[#756860]">
                Sainagar, 9th Cross, Anantapur - 515001.
              </p>
            </div>
            <a
              href={HOSPITAL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] transition shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#FFF0E6]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default EmergencyPage;
