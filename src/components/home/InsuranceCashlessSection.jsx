import React from "react";
import { Link } from "react-router-dom";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import { AnimateIn } from "../ui/AnimateIn";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function InsuranceCashlessSection() {
  const partners = HOSPITAL_INFO.insurancePartners;

  // Split into two rows for a staggered premium marquee
  const rowA = partners.filter((_, i) => i % 2 === 0);   // even-indexed: 12 partners
  const rowB = partners.filter((_, i) => i % 2 !== 0);   // odd-indexed: 12 partners

  return (
    <section id="insurance" className="py-10 sm:py-14 bg-gradient-to-b from-[#FFF5EC] to-[#FFF0E6] text-[#262626] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-10 right-20 w-[400px] h-[400px] rounded-full bg-[#E94B1C]/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#FF8A3D]/[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <AnimateIn animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] text-[#E94B1C] text-[11px] font-extrabold uppercase tracking-[0.14em] mb-4 border border-[#FADCCB]/80 shadow-[0_2px_8px_rgba(233,75,28,0.06)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TRUSTED PARTNERSHIPS</span>
            </div>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={80}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-heading font-bold text-[#14233C] tracking-tight leading-tight">
              Insurance &{" "}
              <span className="bg-gradient-to-r from-[#E94B1C] to-[#F26A21] bg-clip-text text-transparent">
                Cashless Facility
              </span>
            </h2>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={150}>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#4A5568] font-medium leading-relaxed max-w-2xl mx-auto">
              We are empaneled with major insurance companies to provide cashless medical services for your convenience.
            </p>
          </AnimateIn>
        </div>

        {/* ── Premium Staggered Dual-Row Marquee ── */}
        <AnimateIn animation="fade-up" delay={200}>
          <div className="relative py-4 overflow-hidden space-y-4">
            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#FFF5EC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#FFF5EC] to-transparent z-10 pointer-events-none" />

            {/* Row A — scrolls left */}
            <div className="flex animate-insurance-scroll-a">
              {[...rowA, ...rowA, ...rowA].map((partner, idx) => (
                <LogoPill key={`a-${partner.id}-${idx}`} partner={partner} />
              ))}
            </div>

            {/* Row B — scrolls right (reverse) */}
            <div className="flex animate-insurance-scroll-b">
              {[...rowB, ...rowB, ...rowB].map((partner, idx) => (
                <LogoPill key={`b-${partner.id}-${idx}`} partner={partner} />
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* View All Button */}
        <AnimateIn animation="fade-up" delay={280}>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/insurance-partners"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-[0_6px_20px_rgba(233,75,28,0.3)] hover:shadow-[0_8px_28px_rgba(233,75,28,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View All 24+ Insurance Partners</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

        {/* Help Note */}
        <AnimateIn animation="fade-up" delay={340}>
          <div className="mt-10 sm:mt-12 max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#EFE5DC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFF0E6] to-[#FFE3D0] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#FADCCB]/60 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#14233C] block">Need assistance with Cashless Pre-Authorization?</span>
                <span className="text-[#756860]">Contact our Hospital Insurance Desk directly at 8500904999</span>
              </div>
            </div>
            <a
              href="mailto:suryahospitalatp@gmail.com"
              className="shrink-0 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] transition-all shadow-xs"
            >
              Email Insurance Desk
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/** Individual logo pill with glassmorphic card + 3D tilt hover */
function LogoPill({ partner }) {
  return (
    <div
      className="shrink-0 mx-3 w-[160px] h-[78px] sm:w-[190px] sm:h-[88px] flex items-center justify-center px-5 py-3 rounded-2xl bg-white/90 border border-white/80 shadow-[0_2px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(233,75,28,0.12)] hover:border-[#E94B1C]/20 hover:-translate-y-1 hover:scale-[1.04] transition-all duration-300 ease-out cursor-default group"
      title={partner.name}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-9 sm:max-h-11 w-auto max-w-[120px] sm:max-w-[140px] object-contain grayscale group-hover:grayscale-0 opacity-55 group-hover:opacity-100 transition-all duration-350"
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

export default InsuranceCashlessSection;
