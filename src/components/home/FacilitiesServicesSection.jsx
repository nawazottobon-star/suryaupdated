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
 * - Clean card visual: No badge clutter on top of cards, clean clinical title & icon at bottom
 * - Replaced bullet points with an elegant, cohesive clinical explanation note
 * - Removed "Inquire Surgical Availability" button completely
 * - Left curved arc navigation spine with real circular thumbnails
 * - Portaled video & photo modals with unmissable "Back to Home" button & body scroll lock
 */

const CLINICAL_DEPARTMENTS = [
  {
    id: "surgical-care",
    index: "01",
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
    index: "02",
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
        id: "gas-photo",
        type: "photo",
        title: "Central Medical Gas Lines",
        description:
          "Direct piped medical gases supplying pure oxygen, compressed medical air, and high-vacuum suction to every ICU bed station without interruption.",
        photo: "/facilities/20261104_125528.jpg",
        icon: ShieldCheck,
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
    index: "03",
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
          "Video walkthrough inside the high-frequency digital radiography examination suite and lead-shielded control room.",
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
    index: "04",
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
    index: "05",
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

const CURVE_OFFSETS = [8, 40, 62, 40, 8]; // horizontal px shift along the curved arc trajectory

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

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

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
                <svg className="w-full h-[420px]" viewBox="0 0 140 420" fill="none">
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
                    d="M 32 6 Q 34 15, 36 24 Q 52 70, 68 117 Q 84 163, 90 210 Q 84 257, 68 303 Q 52 350, 36 396 Q 34 405, 32 414"
                    stroke="#0284C7"
                    strokeWidth="4"
                    strokeOpacity="0.15"
                    strokeLinecap="round"
                    fill="none"
                    className="blur-[2px]"
                  />

                  {/* High-tech pulsing dashed track passing through node centers */}
                  <path
                    d="M 32 6 Q 34 15, 36 24 Q 52 70, 68 117 Q 84 163, 90 210 Q 84 257, 68 303 Q 52 350, 36 396 Q 34 405, 32 414"
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
              <div className="h-[420px] relative z-10 flex flex-col justify-between">
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
                        className={`relative w-12 h-12 rounded-full overflow-hidden shrink-0 transition-all duration-300 ${
                          isActive
                            ? "ring-[2.5px] ring-[#0284C7] ring-offset-2 ring-offset-white shadow-[0_0_20px_rgba(2,132,199,0.35)] scale-110 z-20"
                            : "ring-1 ring-[#D8C7B8] group-hover:ring-[#0284C7]/60 opacity-80 group-hover:opacity-100 group-hover:scale-105 z-10 shadow-xs"
                        }`}
                      >
                        <img
                          src={dept.thumb}
                          alt={dept.shortName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 transition-colors duration-300 ${
                            isActive
                              ? "bg-transparent"
                              : "bg-black/10 group-hover:bg-transparent"
                          }`}
                        />
                      </div>

                      {/* Label / Active Capsule Pill */}
                      {isActive ? (
                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#E0F2FE] via-[#BAE6FD]/60 to-white/90 border border-[#0284C7]/40 shadow-[0_2px_12px_rgba(2,132,199,0.18)] transition-all duration-300 z-20">
                          <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0284C7] shadow-[0_0_8px_#38bdf8]" />
                          </span>
                          <span className="text-xs xl:text-sm font-bold text-[#0C4A6E] tracking-wide truncate max-w-[180px]">
                            {dept.shortName}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200 z-10">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] group-hover:bg-[#0284C7] transition-colors shrink-0" />
                          <span className="text-xs xl:text-[13px] font-medium text-[#475569] group-hover:text-[#0F172A] transition-colors truncate max-w-[170px]">
                            {dept.shortName}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 24/7 Helpline indicator at bottom of spine */}
              <div className="pt-4 border-t border-[#EADBCE] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="text-[11px] font-semibold text-[#475569] hover:text-[#0F172A] transition flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#E94B1C]" />
                  <span>24/7 Helpline: {HOSPITAL_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* ── Desktop Right: Clinical Stage (Header + Real Cards + Clinical Explanation) ── */}
            <div className="flex-1 flex flex-col justify-between min-w-0">

              {/* 1. Header Information */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E6] text-[#E94B1C] text-[11px] font-extrabold uppercase tracking-wider mb-2.5 border border-[#FADCCB]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E94B1C]" />
                  <span>SERVICES &amp; CLINICAL FACILITIES</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-[#14233C] leading-tight">
                  {currentDept.titlePrefix}
                  <span className="bg-gradient-to-r from-[#E94B1C] via-[#FF6B35] to-[#E94B1C] bg-clip-text text-transparent">
                    {currentDept.titleHighlight}
                  </span>
                </h2>

                <p className="mt-2 text-xs sm:text-[13px] text-[#4A5568] leading-relaxed font-normal max-w-4xl">
                  {currentDept.description}
                </p>
              </div>

              {/* 2. Authentic Media Cards (Fixed, consistent card dimensions across all subsections) */}
              <div className="my-5 sm:my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 min-h-[320px] sm:min-h-[340px] xl:min-h-[360px]">
                {currentDept.items.map((item) => {
                  const ItemIcon = item.icon;
                  const isVideo = item.type === "video";

                  if (isVideo) {
                    return (
                      <div
                        key={item.id}
                        onClick={() =>
                          setActiveVideoModal({
                            src: item.videoUrl,
                            title: item.title,
                          })
                        }
                        className="group relative h-[310px] sm:h-[330px] xl:h-[350px] rounded-2xl overflow-hidden bg-[#0A1626] border border-[#CBD5E1] hover:border-[#0284C7] shadow-[0_6px_20px_rgba(20,35,60,0.08)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
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

                        {/* Center: Frosted Glass Glowing Play Button */}
                        <div className="relative z-10 flex-1 flex items-center justify-center">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#E94B1C] group-hover:bg-[#D43B0E] text-white flex items-center justify-center shadow-[0_0_25px_rgba(233,75,28,0.6)] group-hover:scale-115 transition-transform duration-300 border-2 border-white ring-4 ring-black/40">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>

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
                          description: item.description,
                        })
                      }
                      className="group relative h-[310px] sm:h-[330px] xl:h-[350px] rounded-2xl overflow-hidden bg-[#0A1626] border border-[#CBD5E1] hover:border-[#0284C7] shadow-[0_6px_20px_rgba(20,35,60,0.08)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.2)] transition-all duration-300 flex flex-col justify-end cursor-pointer"
                    >
                      {/* Full-bleed, Bright, High-Definition Photo */}
                      <img
                        src={item.photo}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-[1.03]"
                        loading="lazy"
                      />

                      {/* Gentle bottom-only gradient for title readability */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />

                      {/* Bottom Info Strip: Clean Icon & Title */}
                      <div className="relative z-10 p-3 bg-gradient-to-t from-black/90 to-transparent">
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

              {/* 3. Bottom Clinical Explanation Note */}
              <div className="pt-3.5 border-t border-[#EADBCE] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] shrink-0 animate-pulse" />
                <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-medium">
                  {currentDept.clinicalNote}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ── 5. Fullscreen Video Walkthrough Modal (Portaled to document.body) ── */}
      {typeof document !== "undefined" &&
        activeVideoModal &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setActiveVideoModal(null)}
          >
            {/* Top Navigation Bar: Guaranteed Visible at All Viewports */}
            <div
              className="fixed top-0 left-0 right-0 z-[100000] px-4 py-3 bg-gradient-to-b from-black/90 via-black/60 to-transparent flex items-center justify-between pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E94B1C] animate-pulse" />
                <span className="text-white font-serif font-bold text-xs sm:text-sm tracking-wide">
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

            {/* Modal Card Centered */}
            <div
              className="relative w-full max-w-[380px] sm:max-w-[440px] max-h-[82vh] mt-10 flex flex-col bg-[#14233C] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/20"
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

              {/* Video container cleanly constrained */}
              <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={activeVideoModal.src}
                  controls
                  autoPlay
                  playsInline
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
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/94 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setActivePhotoModal(null)}
          >
            {/* Top Navigation Bar */}
            <div
              className="fixed top-0 left-0 right-0 z-[100000] px-4 py-3 bg-gradient-to-b from-black/90 via-black/60 to-transparent flex items-center justify-between pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-white font-serif font-bold text-xs sm:text-sm">
                  Surya Hospital • Clinical Equipment Photography
                </span>
              </div>

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

            {/* Lightbox Container */}
            <div
              className="relative w-full max-w-2xl max-h-[88vh] mt-10 flex flex-col bg-[#071524] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.9)] border border-sky-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-black/80 border-b border-white/10 shrink-0">
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {activePhotoModal.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActivePhotoModal(null)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-[#E94B1C] text-white text-xs font-bold transition cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>
              </div>

              {/* High-Resolution Image Display */}
              <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center p-3">
                <img
                  src={activePhotoModal.src}
                  alt={activePhotoModal.title}
                  className="max-h-[58vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Description & Action Footer */}
              <div className="p-4 bg-[#0A1A2E] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
                <div className="max-w-md">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activePhotoModal.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActivePhotoModal(null)}
                    className="text-xs font-bold text-slate-400 hover:text-white px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
                  >
                    Close ✕
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

export default FacilitiesServicesSection;
