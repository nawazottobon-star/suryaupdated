import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Play,
  X,
  ShieldCheck,
  Activity,
  HeartPulse,
  Sparkles,
  Phone,
  ArrowLeft,
  ArrowRight,
  FlaskConical,
  BedDouble,
  Scissors,
  Video,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

/**
 * FacilitiesServicesSection Component
 * Premium Interactive Clinical Console (Skytron & Siemens Healthineers Aesthetic).
 * - Live looping video walkthrough right on Card #1 of each department
 * - Distinct, authentic clinical photography on remaining cards (NO duplicate photos)
 * - Dynamic grid: 3-column layout for 3 items, 4-column layout for 4 items
 * - Clean card visual: No center play icon blocking the video, clean clinical title & icon at bottom
 * - Replaced bullet points with an elegant, cohesive clinical explanation note
 * - Left curved arc navigation spine with real circular thumbnails
 * - Portaled video & photo modals with unmissable "Back to Home" button & body scroll lock
 */

const CLINICAL_DEPARTMENTS = [
  {
    id: "reception-care",
    index: "01",
    shortName: "Reception & Desk",
    thumb: "/facilities/reception-desk.jpg",
    titlePrefix: "Warm & Efficient ",
    titleHighlight: "Reception & Patient Desk",
    description:
      "A friendly, seamless welcoming desk designed to guide patients through consultations, quick registrations, cashless insurance help, and comfortable waiting spaces.",
    clinicalNote:
      "Immediate, compassionate front-desk assistance with token coordination, insurance desk guidance, and hospital floor navigation so you feel supported the moment you arrive.",
    items: [
      {
        id: "reception-video",
        type: "video",
        title: "Reception & Lounge Walkthrough",
        description:
          "Take a live video walkthrough of Surya Hospital's reception lounge, showing the patient coordination desk, inquiry counter, and welcoming seating area.",
        videoUrl: "/facilities/reception-tour.mp4",
        poster: "/facilities/reception-desk.jpg",
        icon: Video,
      },
      {
        id: "reception-desk-photo",
        type: "photo",
        title: "Central Helpdesk & Inquiries",
        description:
          "Dedicated patient registration counter staffed with courteous coordinators assisting with tokens, doctor appointment slots, and patient files.",
        photo: "/facilities/reception-desk.jpg",
        icon: Sparkles,
      },
      {
        id: "reception-lounge-photo",
        type: "photo",
        title: "Patient & Family Waiting Lounge",
        description:
          "Clean, air-conditioned waiting environment with comfortable seating, water stations, and clear directional signboards for a stress-free wait.",
        photo: "/facilities/reception-lounge.jpg",
        icon: BedDouble,
      },
      
    ],
  },
  {
    id: "surgical-care",
    index: "02",
    shortName: "Surgical Care",
    thumb: "/facilities/20261104_124719.jpg",
    titlePrefix: "Advanced ",
    titleHighlight: "Surgical Care & Modular OT",
    description:
      "Modern, completely sterile operation theatres designed for safety and precision, equipped with live X-ray scan guidance and high-grade sterilization so every procedure is safe and infection-free.",
    clinicalNote:
      "100% sterile, germ-free operation theatres with real-time scan guidance — ensuring your surgery is safe, precise, and completely protected from hospital infections.",
    items: [
      {
        id: "ot-video",
        type: "video",
        title: "Modular OT Walkthrough",
        description:
          "Take a live video walkthrough of Surya Hospital's positive-pressure modular operation theatre, showing the surgical table, laminar ceiling, and sterile setup.",
        videoUrl: "/facilities/ot-tour.mp4",
        poster: "/facilities/20261104_124719.jpg",
        icon: Video,
      },
      {
        id: "c-arm-photo",
        type: "photo",
        title: "Allengers C-Arm Fluoroscopy",
        description:
          "High-frequency mobile surgical C-Arm fluoroscopy tower enabling real-time intraoperative orthopedic, trauma, and laparoscopic surgical guidance.",
        photo: "/facilities/20261104_124808.jpg",
        icon: Activity,
      },
      {
        id: "lights-photo",
        type: "photo",
        title: "Shadowless LED Dome Lights",
        description:
          "Dual surgical dome LED lighting with multi-reflector deep cavity illumination delivering true tissue color rendering and zero thermal radiation.",
        photo: "/facilities/20261104_124838.jpg",
        icon: Sparkles,
      },
      {
        id: "cssd-photo",
        type: "photo",
        title: "CSSD Sterile Processing",
        description:
          "Dedicated Central Sterile Services Department featuring high-pressure steam autoclaves guaranteeing 100% surgical instrumentation sterility.",
        photo: "/facilities/20261104_124943.jpg",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "critical-care",
    index: "03",
    shortName: "Critical Care (ICU / ICCU)",
    thumb: "/facilities/20261104_125515.jpg",
    titlePrefix: "Multi-Bed ",
    titleHighlight: "Critical Care (ICU / ICCU)",
    description:
      "24/7 intensive life-support care with round-the-clock specialist doctors, continuous heart and vitals monitoring, and modern ventilators for patients needing critical recovery.",
    clinicalNote:
      "Round-the-clock intensive life support with constant heart and oxygen monitoring, modern ventilators, and specialist doctors present at the bedside 24 hours a day.",
    items: [
      {
        id: "icu-video",
        type: "video",
        title: "ICU Telemetry Walkthrough",
        description:
          "Watch the authentic walkthrough video inside the Surya Hospital ICU, showing the multi-bed layout, continuous cardiac monitors, and emergency bay.",
        videoUrl: "/facilities/icu-tour.mp4",
        poster: "/facilities/20261104_125515.jpg",
        icon: Video,
      },
      {
        id: "ventilator-photo",
        type: "photo",
        title: "Mechanical Ventilator",
        description:
          "Advanced microprocessor-controlled ventilator engineered for acute respiratory distress, severe pneumonia, and critical post-surgical resuscitation.",
        photo: "/facilities/20261104_125523.jpg",
        icon: Activity,
      },
      {
        id: "scrub-photo",
        type: "photo",
        title: "Sterile Scrub Barrier",
        description:
          "Sensor-activated antiseptic hand scrub bay creating a strict clinical barrier before healthcare personnel enter the sterile ICU patient care zone.",
        photo: "/facilities/20261104_125236.jpg",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "diagnostics",
    index: "04",
    shortName: "Diagnostics & Imaging",
    thumb: "/facilities/20261104_130828.jpg",
    titlePrefix: "High-Frequency ",
    titleHighlight: "Digital Radiology & X-Ray",
    description:
      "Advanced digital X-Ray imaging that produces crystal-clear scan results in minutes with minimal radiation, helping doctors diagnose fractures and internal conditions quickly.",
    clinicalNote:
      "Instant, clear digital X-rays with ultra-safe low radiation — getting your scan results in minutes so treatment can begin without delay.",
    items: [
      {
        id: "xray-video",
        type: "video",
        title: "Digital X-Ray Suite Tour",
        description:
          "Interactive video walkthrough inside our shielded radiological room, highlighting the high-frequency digital X-Ray tube and motorized floating tabletop.",
        videoUrl: "/facilities/xray-tour.mp4",
        poster: "/facilities/20261104_130828.jpg",
        icon: Video,
      },
      {
        id: "xray-table-photo",
        type: "photo",
        title: "Digital Radiography System",
        description:
          "High-frequency digital X-Ray imaging table equipped with multi-axis collimation and low radiation dosage sensors for sharp skeletal and chest radiography.",
        photo: "/facilities/20261104_130828.jpg",
        icon: Activity,
      },
      {
        id: "xray-console-photo",
        type: "photo",
        title: "Lead-Shielded Control Console",
        description:
          "AERB-compliant operator station lined with high-density lead glass observation barrier, protecting technicians and visitors from scattered radiation.",
        photo: "/facilities/20261104_130837.jpg",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "pathology",
    index: "05",
    shortName: "Pathology & Lab Services",
    thumb: "/facilities/20261104_130555.jpg",
    titlePrefix: "24/7 Automated ",
    titleHighlight: "Pathology & Clinical Lab",
    description:
      "24/7 in-house computerized blood and lab testing using automated analyzers, delivering quick and accurate diagnostic reports for routine checkups and emergency treatments.",
    clinicalNote:
      "Fully automated, computerized blood testing available 24/7 with barcoded samples — delivering accurate, same-day reports you and your doctor can rely on.",
    items: [
      {
        id: "lab-video",
        type: "video",
        title: "Pathology Lab Walkthrough",
        description:
          "Live walkthrough inside the 24/7 automated clinical laboratory at Surya Hospital, showcasing the biochemistry benches and testing instruments.",
        videoUrl: "/facilities/lab-tour.mp4",
        poster: "/facilities/20261104_130555.jpg",
        icon: Video,
      },
      {
        id: "biochem-photo",
        type: "photo",
        title: "Automated Clinical Laboratory",
        description:
          "Fully automated in-house clinical laboratory equipped with computerized chemistry analyzers for rapid, reliable blood diagnostics.",
        photo: "/facilities/20261104_130555.jpg",
        icon: FlaskConical,
      },
    ],
  },
  {
    id: "inpatient",
    index: "06",
    shortName: "Inpatient Care",
    thumb: "/facilities/20261104_123927.jpg",
    titlePrefix: "Deluxe Private ",
    titleHighlight: "Inpatient Recovery Suites",
    description:
      "Comfortable private recovery rooms with air conditioning, multi-position hospital beds, and seating for family attendants, backed by caring nursing staff available 24 hours a day.",
    clinicalNote:
      "Clean, quiet air-conditioned private rooms with comfortable adjustable beds, a companion lounge couch for family members to stay, and 24/7 nursing care.",
    items: [
      {
        id: "ward-video",
        type: "video",
        title: "Deluxe Room Walkthrough",
        description:
          "Walkthrough video of a private deluxe patient recovery room, showing the motorized hospital bed, attendant companion couch, and split air conditioner.",
        videoUrl: "/facilities/ward-tour.mp4",
        poster: "/facilities/20261104_123927.jpg",
        icon: Video,
      },
      {
        id: "bed-photo",
        type: "photo",
        title: "Motorized Recovery Bed",
        description:
          "Ergonomic hospital bed with side safety rails, integrated IV drip poles, and motorized angle adjustments for comfortable post-operative patient recovery.",
        photo: "/facilities/20261104_123927.jpg",
        icon: BedDouble,
      },
    ],
  },
];

const CURVE_OFFSETS = [8, 30, 48, 54, 38, 12]; // horizontal px shift along the curved arc trajectory for 6 departments

export function FacilitiesServicesSection() {
  const [activeDeptIdx, setActiveDeptIdx] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  const currentDept = CLINICAL_DEPARTMENTS[activeDeptIdx];

  // Lock body scroll when modal is open & listen for Escape key
  useEffect(() => {
    const isModalOpen = Boolean(activeVideoModal || activePhotoModal);
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveVideoModal(null);
        setActivePhotoModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideoModal, activePhotoModal]);

  return (
    <section
      id="facilities-services"
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FFF9F3] via-[#FAF3EC] to-[#FFF6ED] text-[#14233C] overflow-hidden border-t border-[#F0E4D8]/80"
    >
      {/* Ambient warm brand glow accents matching other sections */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[350px] bg-[#E94B1C]/[0.035] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#FF8A3D]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* ── Main Clean Clinical Console Cockpit Container (Warm Luxury Light Theme) ── */}
        <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-white border border-[#EADBCE] shadow-[0_12px_45px_rgba(20,35,60,0.06),0_2px_8px_rgba(20,35,60,0.03)] p-4 sm:p-6 lg:p-8">

          {/* ── Mobile & Tablet: Horizontal Department Tab Strip (Hidden on Desktop) ── */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 mb-5 border-b border-[#EADBCE] no-scrollbar">
            {CLINICAL_DEPARTMENTS.map((dept, idx) => {
              const isActive = activeDeptIdx === idx;
              return (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setActiveDeptIdx(idx)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0284C7] text-white shadow-[0_3px_12px_rgba(2,132,199,0.35)] border border-[#0284C7]"
                      : "bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E8F0]"
                  }`}
                >
                  <img
                    src={dept.thumb}
                    alt={dept.shortName}
                    className="w-5 h-5 rounded-full object-cover shrink-0"
                  />
                  <span>{dept.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* ── Desktop Cockpit Layout: Curved Arc Spine (Left) + Console Workspace (Right) ── */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">

            {/* ── Desktop Left: Curved Arc Navigation Spine ── */}
            <div className="hidden lg:flex lg:w-[315px] xl:w-[345px] shrink-0 relative flex-col justify-between py-2 pr-3 border-r border-[#EADBCE]">
              {/* Animated SVG Curved Arc Track flowing through the centers of all nodes */}
              <div className="absolute inset-y-2 left-0 w-[140px] pointer-events-none overflow-visible">
                <style>{`
                  @keyframes arcDashFlow {
                    from { stroke-dashoffset: 24; }
                    to { stroke-dashoffset: 0; }
                  }
                  .animate-arc-track {
                    animation: arcDashFlow 3s linear infinite;
                  }
                `}</style>
                <svg className="w-full h-[470px]" viewBox="0 0 140 470" fill="none">
                  <defs>
                    <linearGradient id="arcTrackGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0284C7" stopOpacity="0.3" />
                      <stop offset="25%" stopColor="#0284C7" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#0284C7" stopOpacity="1" />
                      <stop offset="75%" stopColor="#0284C7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0284C7" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Soft outer halo */}
                  <path
                    d="M 32 6 Q 34 20, 38 45 Q 54 100, 70 160 Q 86 220, 92 270 Q 86 325, 70 380 Q 52 425, 34 460"
                    stroke="#0284C7"
                    strokeWidth="4"
                    strokeOpacity="0.15"
                    strokeLinecap="round"
                    fill="none"
                    className="blur-[2px]"
                  />

                  {/* High-tech pulsing dashed track passing through node centers */}
                  <path
                    d="M 32 6 Q 34 20, 38 45 Q 54 100, 70 160 Q 86 220, 92 270 Q 86 325, 70 380 Q 52 425, 34 460"
                    stroke="url(#arcTrackGradient)"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-arc-track"
                  />
                </svg>
              </div>

              {/* Department nodes arranged physically along the curved arc trajectory */}
              <div className="h-[470px] relative z-10 flex flex-col justify-between">
                {CLINICAL_DEPARTMENTS.map((dept, idx) => {
                  const isActive = activeDeptIdx === idx;
                  const offset = CURVE_OFFSETS[idx];
                  return (
                    <div
                      key={dept.id}
                      onClick={() => setActiveDeptIdx(idx)}
                      onMouseEnter={() => setActiveDeptIdx(idx)}
                      style={{
                        transform: `translateX(${offset}px)`,
                      }}
                      className="group relative flex items-center gap-3 cursor-pointer select-none transition-transform duration-300 ease-out"
                    >
                      {/* Circular Thumbnail Node */}
                      <div
                        className={`relative w-11 h-11 rounded-full overflow-hidden shrink-0 transition-all duration-300 ${
                          isActive
                            ? "ring-[2.5px] ring-[#0284C7] ring-offset-2 ring-offset-white shadow-[0_0_20px_rgba(2,132,199,0.35)] scale-110 z-20"
                            : "ring-1 ring-[#D8C7B8] group-hover:ring-[#0284C7]/60 opacity-80 group-hover:opacity-100 group-hover:scale-105 z-10 shadow-xs"
                        }`}
                      >
                        <img
                          src={dept.thumb}
                          alt={dept.shortName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Interactive Text Pill */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#E0F2FE] text-[#0369A1] shadow-[0_4px_16px_rgba(2,132,199,0.22)] border border-[#0284C7] scale-102"
                            : "bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] border border-[#CBD5E1]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            isActive ? "bg-[#0284C7] animate-pulse" : "bg-[#94A3B8]"
                          }`}
                        />
                        <span className="truncate max-w-[170px] xl:max-w-[200px]">
                          {dept.shortName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Right: Active Department Clinical Console Workspace ── */}
            <div className="flex-1 flex flex-col justify-between min-w-0">

              {/* 1. Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#EADBCE]">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#14233C]">
                    <span>{currentDept.titlePrefix}</span>
                    <span className="text-[#0284C7]">{currentDept.titleHighlight}</span>
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-[#475569] max-w-2xl font-normal leading-relaxed">
                    {currentDept.description}
                  </p>
                </div>
              </div>

              {/* 2. Visual Media Showcase Cards */}
              <div
                className={`my-5 grid gap-3 sm:gap-4 ${
                  currentDept.items.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : currentDept.items.length === 3
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {currentDept.items.map((item) => {
                  const ItemIcon = item.icon || Activity;

                  // Card 1 (Video Walkthrough): Live looping video preview right inside the card WITHOUT blocking center play icon
                  if (item.type === "video") {
                    return (
                      <div
                        key={item.id}
                        onClick={() =>
                          setActiveVideoModal({
                            src: item.videoUrl,
                            title: item.title,
                          })
                        }
                        className="group relative h-[310px] sm:h-[330px] xl:h-[350px] rounded-2xl overflow-hidden bg-[#0A1626] border border-[#CBD5E1] hover:border-[#0284C7] shadow-[0_6px_20px_rgba(20,35,60,0.08)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.2)] transition-all duration-300 flex flex-col justify-end cursor-pointer"
                      >
                        {/* Live looping video preview inside the card */}
                        <video
                          src={item.videoUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          poster={item.poster}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Gentle overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />



                        {/* Bottom Info Strip: Clean Icon and Title */}
                        <div className="relative z-10 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-[#E94B1C]/25 text-[#FF8A3D] flex items-center justify-center shrink-0 border border-[#E94B1C]/40">
                              <ItemIcon className="w-3.5 h-3.5" />
                            </div>
                            <h4 className="text-xs sm:text-[13px] font-semibold text-white leading-snug group-hover:text-amber-200 transition-colors">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Photo Card: Crisp, Bright, Clean High-Resolution Still Photography
                  return (
                    <div
                      key={item.id}
                      onClick={() =>
                        setActivePhotoModal({
                          src: item.photo,
                          title: item.title,
                          desc: item.description,
                        })
                      }
                      className="group relative h-[310px] sm:h-[330px] xl:h-[350px] rounded-2xl overflow-hidden bg-white border border-[#CBD5E1] hover:border-[#0284C7] shadow-[0_6px_20px_rgba(20,35,60,0.08)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.2)] transition-all duration-300 flex flex-col justify-end cursor-pointer"
                    >
                      {/* Full-bleed authentic clinical photograph */}
                      <img
                        src={item.photo}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[1.02] contrast-[1.02]"
                        loading="lazy"
                      />

                      {/* Gentle dark gradient overlay at bottom for maximum title readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Bottom Info Strip: Clean Icon and Title */}
                      <div className="relative z-10 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#0284C7]/25 text-[#38BDF8] flex items-center justify-center shrink-0 border border-[#0284C7]/40">
                            <ItemIcon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-xs sm:text-[13px] font-semibold text-white leading-snug group-hover:text-sky-200 transition-colors">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3. Bottom Row: Explanation note + 24/7 Helpline */}
              <div className="pt-3 border-t border-[#EADBCE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#475569] font-normal leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0" />
                  <span>{currentDept.clinicalNote}</span>
                </div>

                <div className="flex items-center gap-2 shrink-0 text-[#64748B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>24/7 Helpline:</span>
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="font-bold text-[#0284C7] hover:underline"
                  >
                    {HOSPITAL_INFO.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ── 5. Fullscreen Video Lightbox Modal with UNMISSABLE "Back to Home" Button ── */}
      {typeof document !== "undefined" &&
        activeVideoModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActiveVideoModal(null)}
          >
            {/* Top Navigation Bar: Guaranteed Visible at All Viewports */}
            <div
              className="fixed top-0 left-0 right-0 z-[100000] px-4 py-3 bg-gradient-to-b from-black/90 via-black/60 to-transparent flex items-center justify-between pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-white">
                <Video className="w-4 h-4 text-[#FF8A3D]" />
                <span className="text-xs sm:text-sm font-bold truncate max-w-[200px] sm:max-w-md">
                  Surya Hospital • {activeVideoModal.title}
                </span>
              </div>

              {/* High-visibility "Back to Home" pill */}
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#E94B1C] hover:bg-[#D43B0E] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(233,75,28,0.5)] border border-white/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-white/20"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                <span>Back to Home</span>
                <X className="w-3.5 h-3.5 ml-1 opacity-70" />
              </button>
            </div>

            {/* Video Player Card */}
            <div
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0A1626] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col z-[99999] mt-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/80 border-b border-white/10 shrink-0">
                <span className="text-xs sm:text-sm font-bold text-white truncate pr-2">
                  {activeVideoModal.title}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-[#E94B1C] text-white text-xs font-bold transition cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>
              </div>

              {/* Video container cleanly constrained with zero audio */}
              <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={activeVideoModal.src}
                  controls
                  autoPlay
                  muted
                  defaultMuted
                  playsInline
                  onVolumeChange={(e) => {
                    e.currentTarget.muted = true;
                    e.currentTarget.volume = 0;
                  }}
                  className="max-h-[60vh] w-auto h-auto object-contain"
                />
              </div>

              {/* Footer with dual exit triggers */}
              <div className="px-4 py-3 bg-black/80 border-t border-white/10 flex items-center justify-between shrink-0">
                <span className="text-[11px] text-slate-300">
                  Press <kbd className="px-1 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">Esc</kbd> or click outside
                </span>
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(null)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#FF8A3D] hover:text-[#E94B1C] hover:underline cursor-pointer"
                >
                  <span>Back to Home Page</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* ── 6. Fullscreen High-Resolution Photo Lightbox Modal ── */}
      {typeof document !== "undefined" &&
        activePhotoModal &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setActivePhotoModal(null)}
          >
            {/* Top Navigation Bar: Guaranteed Visible at All Viewports */}
            <div
              className="fixed top-0 left-0 right-0 z-[100000] px-4 py-3 bg-gradient-to-b from-black/90 via-black/60 to-transparent flex items-center justify-between pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 text-white">
                <Activity className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-xs sm:text-sm font-bold truncate max-w-[200px] sm:max-w-md">
                  Surya Hospital • {activePhotoModal.title}
                </span>
              </div>

              {/* High-visibility "Back to Home" pill */}
              <button
                type="button"
                onClick={() => setActivePhotoModal(null)}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#E94B1C] hover:bg-[#D43B0E] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(233,75,28,0.5)] border border-white/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-white/20"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                <span>Back to Home</span>
                <X className="w-3.5 h-3.5 ml-1 opacity-70" />
              </button>
            </div>

            {/* Photo Lightbox Card */}
            <div
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0A1626] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col z-[99999] mt-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/80 border-b border-white/10 shrink-0">
                <span className="text-xs sm:text-sm font-bold text-white truncate pr-2">
                  {activePhotoModal.title}
                </span>
                <button
                  type="button"
                  onClick={() => setActivePhotoModal(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-[#E94B1C] text-white text-xs font-bold transition cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>
              </div>

              {/* Photo viewport */}
              <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={activePhotoModal.src}
                  alt={activePhotoModal.title}
                  className="max-h-[60vh] w-auto h-auto object-contain rounded-lg"
                />
              </div>

              {/* Clinical Description & Dual Exit */}
              <div className="px-4 py-3 bg-black/80 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
                <p className="text-xs text-slate-300 font-normal leading-relaxed max-w-2xl">
                  {activePhotoModal.desc}
                </p>
                <button
                  type="button"
                  onClick={() => setActivePhotoModal(null)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#38BDF8] hover:text-[#0284C7] hover:underline cursor-pointer shrink-0"
                >
                  <span>Back to Home Page</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

export default FacilitiesServicesSection;
