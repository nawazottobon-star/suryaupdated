import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

/**
 * FounderStorySection Component
 * Serving as the primary opening landing page section.
 * - Restored authentic curved pedestal plinth with 3D depth effect.
 * - Live editorial HTML text seamlessly blended.
 * - Direct welcome and clear action CTAs.
 */
export function FounderStorySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { openModal } = useAppointmentModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="founder-story"
      className="relative w-full pt-24 sm:pt-28 lg:pt-32 xl:pt-36 pb-12 sm:pb-14 lg:pb-16 overflow-hidden scroll-mt-20"
      style={{
        background:
          "radial-gradient(ellipse at 50% 28%, #FFFDF9 0%, #FAF2EB 38%, #F4E8DC 75%, #ECD9CC 100%)",
      }}
    >
      {/* ── AMBIENT SILK WAVES & WARM GLOWS ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1400px] h-[650px] rounded-[100%] opacity-45 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255, 235, 215, 0.8) 0%, rgba(244, 232, 220, 0.25) 60%, transparent 80%)",
          }}
        />
        <div className="absolute top-1/4 left-1/12 w-[400px] h-[400px] rounded-full bg-[#E94B1C]/[0.035] blur-[110px]" />
        <div className="absolute top-1/3 right-1/12 w-[440px] h-[440px] rounded-full bg-[#FF8A3D]/[0.04] blur-[110px]" />
        <div className="absolute -bottom-24 left-1/3 w-[600px] h-[380px] rounded-full bg-[#E94B1C]/[0.025] blur-[130px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ── TOP SECTION HEADER (Live Editorial Header) ── */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#E94B1C]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#E94B1C] uppercase font-sans">
              THE STORY BEHIND OUR CARE
            </span>
            <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#E94B1C]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#14233C] tracking-tight leading-[1.15]">
            A Vision{" "}
            <span className="bg-gradient-to-r from-[#E94B1C] via-[#FF6B35] to-[#E94B1C] bg-clip-text text-transparent">
              Beyond
            </span>{" "}
            Medicine.
          </h1>

          <p className="mt-2.5 text-base sm:text-lg text-[#5A687A] font-medium tracking-normal max-w-xl mx-auto">
            Years of experience. A deeper purpose. A healthier Anantapur.
          </p>
        </motion.div>

        {/* ── MAIN 3-COLUMN SHOWCASE: NO SLOPPY LOGOS, DEEP 3D PLINTH ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* 1. LEFT COLUMN: OUR PHILOSOPHY */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center order-2 lg:order-1 text-left px-2 sm:px-4"
          >
            {/* Eyebrow */}
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E94B1C] mb-2 font-sans">
              OUR PHILOSOPHY
            </div>

            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-[28px] font-bold text-[#14233C] leading-snug mb-4">
              Care begins with listening.
            </h2>

            {/* Body Quote */}
            <p className="text-[14.5px] sm:text-[15px] text-[#4A5568] leading-[1.8] font-normal">
              I believe in a holistic approach to healthcare — combining modern medical practices with empathy, and always keeping the individual needs and concerns of my patients at the center.
            </p>
          </motion.div>

          {/* 2. CENTER COLUMN: 3D DOCTOR WITH THE AUTHENTIC CURVED PEDESTAL PLINTH */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[620px] xl:max-w-[660px] mx-auto group">
              {/* Subtle back-glow */}
              <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-b from-[#E94B1C]/[0.06] via-transparent to-[#FF8A3D]/[0.04] blur-2xl pointer-events-none" />

              {/* Exact Curved Pedestal Plinth Artwork with Doctor, 3D Typography & Stats */}
              <div className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                <img
                  src="/images/founder-depth-hero.png"
                  alt="Dr. Surya Prakash Chowdary - Founder, Surya Hospital - MBBS, MD Manipal Academy of Higher Education"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_44px_rgba(180,110,60,0.18)] select-none pointer-events-none"
                  loading="eager"
                  draggable={false}
                />
              </div>

              {/* Semantic hidden text for search engines and accessibility */}
              <div className="sr-only">
                <h3>Dr. Surya Prakash Chowdary</h3>
                <p>FOUNDER · SURYA HOSPITAL</p>
                <p>MBBS, MD – Manipal Academy of Higher Education</p>
                <p>15+ Years OF PATIENT CARE EXPERIENCE</p>
                <p>~ 1 Lakh PATIENTS TREATED AND CARED FOR</p>
                <p>Est. 2024 A COMPREHENSIVE MULTI-SPECIALITY HOSPITAL</p>
              </div>
            </div>
          </motion.div>

          {/* 3. RIGHT COLUMN: THE JOURNEY */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center order-3 text-left px-2 sm:px-4"
          >
            {/* Eyebrow */}
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E94B1C] mb-2 font-sans">
              THE JOURNEY
            </div>

            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-[28px] font-bold text-[#14233C] leading-snug mb-4">
              From a small clinic to a complete care center.
            </h2>

            {/* 3 Story Paragraphs (100% Live Editable Text) */}
            <div className="space-y-3.5 text-[14px] text-[#4A5568] leading-[1.72]">
              <p>
                With over <strong className="font-bold text-[#14233C]">15 years</strong> of patient care experience and qualifications of <strong className="font-bold text-[#14233C]">MBBS, MD from Manipal Academy of Higher Education</strong>, I have treated and cared for <strong className="font-bold text-[#14233C]">approximately 1 lakh patients</strong>.
              </p>

              <p>
                <strong className="font-bold text-[#14233C]">During the COVID-19 pandemic</strong>, I was among the first to start treating patients at my clinic, despite limited facilities. That experience reinforced my belief in <strong className="font-bold text-[#14233C]">accessible and compassionate care</strong>.
              </p>

              <p>
                <strong className="font-bold text-[#14233C]">In 2024</strong>, this vision took shape with the establishment of <strong className="font-bold text-[#14233C]">Surya Hospital</strong> — bringing multiple specialities, advanced diagnostics, and comprehensive facilities under one roof.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── BOTTOM ACTION CTAS ── */}
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5"
        >
          <Link
            to="/specialities"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all duration-300 shadow-[0_6px_20px_rgba(233,75,28,0.28)] hover:shadow-[0_8px_25px_rgba(233,75,28,0.38)] hover:-translate-y-0.5"
          >
            <span>Explore Specialities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/doctors"
            className="group inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#14233C] hover:text-[#E94B1C] bg-white/90 hover:bg-white border border-[#E9D8CE] hover:border-[#E94B1C]/40 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-0.5"
          >
            <span>Meet Our Specialists</span>
            <ArrowRight className="w-4 h-4 text-[#E94B1C] group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => openModal()}
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#E94B1C] bg-[#FFF0E6] hover:bg-[#FFE6D6] border border-[#FADCCB] transition-all duration-300 hover:-translate-y-0.5 shadow-xs cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#E94B1C]" />
            <span>Book Consultation</span>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default FounderStorySection;
