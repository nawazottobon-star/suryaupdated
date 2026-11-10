import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

export function SpecialtiesDoctorsPoster() {
  const { openModal } = useAppointmentModal();

  const totalDoctors = HOSPITAL_INFO.doctors ? HOSPITAL_INFO.doctors.length : 19;
  const totalDepartments = HOSPITAL_INFO.doctors
    ? new Set(HOSPITAL_INFO.doctors.map((d) => d.department)).size
    : 12;

  // Seamless infinite loop duplicating doctors for unbroken marquee
  const displayDoctors = useMemo(() => {
    return [...HOSPITAL_INFO.doctors, ...HOSPITAL_INFO.doctors];
  }, []);

  const handleBookOpd = (e, deptName) => {
    e.preventDefault();
    e.stopPropagation();
    openModal(deptName);
  };

  return (
    <section
      id="doctors-specialists"
      className="relative py-10 sm:py-14 bg-gradient-to-b from-[#FFF9F3] via-[#FFF5ED] to-[#FFF9F3] text-[#262626] overflow-hidden"
    >
      {/* Dynamic Keyframes for smooth Left-to-Right Infinite Loop marquee */}
      <style>{`
        @keyframes doctorMarqueeLtoR {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-doctor-loop-ltr {
          display: flex;
          width: max-content;
          animation: doctorMarqueeLtoR 65s linear infinite;
        }
        .animate-doctor-loop-ltr:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Ambient warm background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] bg-gradient-to-b from-[#D8451D]/[0.04] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">

        {/* 1. Header Block with Badges and Serif Title */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FFF0E6] text-[#D8451D] text-[10.5px] font-extrabold uppercase tracking-wider mb-2.5 border border-[#FADCCB]">
            <span>{totalDoctors} VERIFIED SPECIALISTS • {totalDepartments} CLINICAL DEPARTMENTS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#14233C] tracking-tight leading-tight">
            Meet Our Doctors <span className="font-serif italic font-normal text-[#14233C]">&amp;</span>{" "}
            <span className="text-[#D8451D]">
              Specialists
            </span>
          </h2>

          <p className="mt-2 text-xs sm:text-[13.5px] text-[#62666D] font-medium leading-relaxed max-w-4xl mx-auto text-center sm:whitespace-nowrap">
            Experienced medical leadership providing compassionate consultations and 24/7 inpatient care.
          </p>
        </div>

        {/* 2. Auto-Scroll Loop Carousel Container (Smooth Left-to-Right Loop) */}
        <div
          className="relative overflow-x-auto scrollbar-none py-2 mb-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="animate-doctor-loop-ltr">
            {displayDoctors.map((doctor, idx) => (
              <DoctorCard
                key={`${doctor.id || doctor.name}-${idx}`}
                doctor={doctor}
                onBookOpd={(e) => handleBookOpd(e, doctor.department)}
              />
            ))}
          </div>
        </div>

        {/* 3. Bottom Strip: Emergency Desk & Directory Link */}
        <div className="mt-4 pt-3.5 border-t border-[#F0E4DA] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 text-[#62666D]">
            <Phone className="w-3.5 h-3.5 text-[#D8451D]" />
            <span>24/7 OPD &amp; Emergency Desk:</span>
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="font-bold text-[#D8451D] hover:underline"
            >
              {HOSPITAL_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/doctors"
              className="font-bold text-[#14233C] hover:text-[#D8451D] transition-colors inline-flex items-center gap-1"
            >
              <span>View Full Directory ({totalDoctors} Doctors)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

// Compact, Clean Doctor Card without clutter
function DoctorCard({ doctor, onBookOpd }) {
  const initials = doctor.name
    .replace(/^Dr\.\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  // Primary focus chip text
  const primaryFocus = doctor.specialties && doctor.specialties.length > 0
    ? doctor.specialties[0]
    : doctor.experience || "Comprehensive Specialist Care";

  return (
    <div className="w-[295px] sm:w-[315px] h-[205px] shrink-0 mx-2.5 bg-white rounded-2xl p-4 border border-[#EFE5DC] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(216,69,29,0.12)] hover:border-[#D8451D]/40 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Header: Department in terracotta uppercase */}
      <div className="pb-2 border-b border-[#F7EFE8]">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#A83B1E]">
          {doctor.department}
        </span>
      </div>

      {/* Middle: Doctor Initials Box + Clean Typography */}
      <div className="flex items-start gap-3 my-1">
        <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] text-[#D8451D] font-black text-sm flex items-center justify-center border border-[#FADCCB] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
          {initials || "DR"}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[14.5px] font-bold text-[#14233C] group-hover:text-[#D8451D] transition-colors leading-tight truncate">
            {doctor.name}
          </h3>
          <p className="text-[11px] font-bold text-[#A83B1E] leading-tight mt-0.5 truncate">
            {doctor.qualifications}
          </p>
          <p className="text-[10px] text-[#64748B] font-medium leading-tight mt-0.5 truncate">
            {doctor.designation}
          </p>
        </div>
      </div>

      {/* Focus Area Pill */}
      <div className="bg-[#FAF6F2] rounded-lg px-2.5 py-1.5 border border-[#EFE5DC]">
        <p className="text-[10.5px] text-[#4A5568] font-medium truncate">
          {primaryFocus}
        </p>
      </div>

      {/* Full-Width Coral Button: Book OPD Consultation */}
      <button
        type="button"
        onClick={onBookOpd}
        className="w-full py-2.5 px-3 rounded-xl text-[12px] font-bold text-white bg-[#D8451D] hover:bg-[#C03913] transition-all shadow-2xs hover:shadow-xs cursor-pointer text-center active:scale-[0.98]"
      >
        Book OPD Consultation
      </button>

    </div>
  );
}

export default SpecialtiesDoctorsPoster;
