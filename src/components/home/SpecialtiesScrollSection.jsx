import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Calendar,
} from "lucide-react";
import { APPROVED_SPECIALITIES } from "../../constants/specialitiesData";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

/**
 * SpecialtiesScrollSection Component
 * Section 2 of Landing Page.
 * Displays all 12 approved hospital specialties (NOT doctors).
 * Seamless, truly infinite carousel loop that never ends, never shows blank space,
 * and works flawlessly with auto-play, pause on hover, manual arrows, and touch dragging.
 */
export function SpecialtiesScrollSection() {
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isInteractingRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);
  const { openModal } = useAppointmentModal();

  // Create 3 identical sets of the 12 specialties for a seamless mathematical wrap
  const displaySpecialties = useMemo(() => {
    return [
      ...APPROVED_SPECIALITIES,
      ...APPROVED_SPECIALITIES,
      ...APPROVED_SPECIALITIES,
    ];
  }, []);

  // Continuous auto-scroll animation loop using requestAnimationFrame
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start in the middle set once elements render
    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft < 10 && singleSetWidth > 0) {
      container.scrollLeft = singleSetWidth;
    }

    let lastTimestamp = performance.now();
    const speed = 0.65; // pixels per frame (~40px / sec)

    const step = (timestamp) => {
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && !isInteractingRef.current && container) {
        // Adjust for 60fps baseline
        const delta = (elapsed / 16.67) * speed;
        container.scrollLeft += delta;

        const currentSingleWidth = container.scrollWidth / 3;
        // Seamless teleport forward/backward when crossing boundaries
        if (container.scrollLeft >= currentSingleWidth * 2) {
          container.scrollLeft -= currentSingleWidth;
        } else if (container.scrollLeft <= 10) {
          container.scrollLeft += currentSingleWidth;
        }
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  // Handle boundary wrapping on manual user scroll
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const singleWidth = container.scrollWidth / 3;
    if (singleWidth <= 0) return;

    if (container.scrollLeft >= singleWidth * 2) {
      container.scrollLeft -= singleWidth;
    } else if (container.scrollLeft <= 10) {
      container.scrollLeft += singleWidth;
    }
  }, []);

  // Manual Next/Prev controls
  const handleScrollPrev = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isInteractingRef.current = true;
    const scrollAmount = window.innerWidth < 640 ? 280 : 360;
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 800);
  };

  const handleScrollNext = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isInteractingRef.current = true;
    const scrollAmount = window.innerWidth < 640 ? 280 : 360;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 800);
  };

  return (
    <section
      id="hospital-specialities"
      className="relative py-8 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FFF9F3] via-[#FFF3E8]/40 to-[#FFF9F3] text-[#262626] overflow-hidden border-t border-[#F0E4DA]"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#E94B1C]/[0.04] to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#FF8A3D]/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── 1. Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-5 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FFF0E6] text-[#E94B1C] text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#FADCCB] whitespace-nowrap">
              <span className="sm:hidden">12 Clinical Specialities • Inpatient & OPD</span>
              <span className="hidden sm:inline">12 Clinical Specialities • Comprehensive Inpatient & OPD</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#14233C] tracking-tight leading-tight">
              Hospital{" "}
              <span className="bg-gradient-to-r from-[#E94B1C] via-[#FF6B35] to-[#E94B1C] bg-clip-text text-transparent">
                Specialities & Care
              </span>
            </h2>

            <p className="mt-2 text-sm sm:text-[15px] text-[#5A687A] font-normal leading-relaxed">
              Every department is supported by modern diagnostic technology, round-the-clock emergency infrastructure, and expert clinical leadership in Sai Nagar, Anantapur.
            </p>
          </div>

          {/* Interactive Navigation Controls (Desktop/Tablet) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleScrollPrev}
              aria-label="Scroll specialities left"
              className="w-10 h-10 rounded-full bg-white border border-[#E9D8CE] hover:border-[#E94B1C] text-[#14233C] hover:text-[#E94B1C] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleScrollNext}
              aria-label="Scroll specialities right"
              className="w-10 h-10 rounded-full bg-white border border-[#E9D8CE] hover:border-[#E94B1C] text-[#14233C] hover:text-[#E94B1C] shadow-xs flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-xs text-[#8A7C75] ml-2 hidden sm:inline-block font-medium">
              Hover to pause • Drag to explore
            </span>
          </div>
        </div>

        {/* ── 2. Seamless Infinite Loop Track (Never ends, no blank space) ── */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            isInteractingRef.current = false;
          }}
          onTouchStart={() => {
            isInteractingRef.current = true;
          }}
          onTouchEnd={() => {
            setTimeout(() => {
              isInteractingRef.current = false;
            }, 1200);
          }}
          className="relative overflow-x-auto scrollbar-none py-3 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 select-none flex items-stretch cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displaySpecialties.map((specialty, idx) => (
            <SpecialtyCard
              key={`${specialty.slug}-${idx}`}
              specialty={specialty}
              onBookConsultation={() => openModal(specialty.name)}
            />
          ))}
        </div>

        {/* ── 3. Bottom Strip: Quick Consultation Help ── */}
        <div className="mt-8 pt-5 border-t border-[#F0E4DA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-[#5A687A]">
            <div className="w-7 h-7 rounded-full bg-[#FFF0E6] flex items-center justify-center text-[#E94B1C]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>Need help choosing a speciality? Call 24/7 Helpline:</span>
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="font-bold text-[#E94B1C] hover:underline"
            >
              {HOSPITAL_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Doctor Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * SpecialtyCard Component
 * Pure authentic visual presentation: No cheap badges, No artificial numbering.
 * Clean image showcase, legible title, treated conditions, and direct action.
 */
function SpecialtyCard({ specialty, onBookConsultation }) {
  // Highlight 2-3 most recognized patient symptoms / conditions
  const topConditions = (specialty.conditions || []).slice(0, 3).map((item) => {
    return item.split(" and ")[0].split(",")[0].split("(")[0].trim();
  });

  return (
    <div className="w-[260px] xs:w-[280px] sm:w-[340px] shrink-0 mx-2 sm:mx-3 bg-white rounded-2xl sm:rounded-3xl border border-[#EFE5DC] overflow-hidden shadow-[0_4px_16px_rgba(40,20,10,0.04)] hover:shadow-[0_12px_32px_rgba(233,75,28,0.15)] hover:border-[#E94B1C]/50 transition-all duration-300 flex flex-col group">
      {/* ── 1. Clean Top Image Showcase (No badges, No artificial numbering) ── */}
      <div className="relative h-32 xs:h-36 sm:h-48 w-full bg-gradient-to-br from-[#FFF5ED] via-[#FDF3E9] to-[#F7EAE0] overflow-hidden flex items-center justify-center">
        {/* Department Visual Image */}
        <img
          src={specialty.heroImage}
          alt={specialty.imageAlt || `${specialty.name} department visual`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Soft natural bottom vignette for headline contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

        {/* Specialty Name */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 z-10">
          <h3 className="font-serif text-lg sm:text-[22px] font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] leading-tight">
            {specialty.name}
          </h3>
        </div>
      </div>

      {/* ── 2. Card Body Content ── */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Short Description */}
          <p className="text-[12px] sm:text-[13px] text-[#5A687A] leading-relaxed line-clamp-2 mb-2.5 sm:mb-3.5 font-normal">
            {specialty.shortDescription}
          </p>

          {/* Quick Conditions Pill Tags */}
          <div className="mb-2.5 sm:mb-4">
            <span className="text-[9.5px] sm:text-[10px] uppercase font-bold tracking-wider text-[#998A82] block mb-1 sm:mb-1.5">
              Key Care Areas:
            </span>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {topConditions.map((condition, idx) => {
                const shortCondition = condition.length > 22 ? condition.slice(0, 20) + "…" : condition;
                return (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded-md bg-[#FFF5EE] border border-[#F6DFD2] text-[#8C3A20] text-[10px] sm:text-[11px] font-medium leading-tight ${
                      idx === 2 ? "hidden sm:inline-block" : ""
                    }`}
                  >
                    {shortCondition}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── 3. Bottom Action Buttons ── */}
        <div className="pt-2.5 sm:pt-3 border-t border-[#F5EDE6] flex items-center justify-between gap-2">
          <Link
            to={`/specialities/${specialty.slug}`}
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#14233C] group-hover:text-[#E94B1C] transition-colors"
          >
            <span>View Speciality</span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            type="button"
            onClick={onBookConsultation}
            className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-[#E94B1C] bg-[#FFF0E6] hover:bg-[#E94B1C] hover:text-white transition-all cursor-pointer border border-[#FADCCB]"
          >
            Book OPD
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialtiesScrollSection;
