import { CrowdCanvas } from "../ui/skiper39";
import React from "react";
import { motion } from "framer-motion";
import { Quote, MessageSquareQuote, CheckCircle2 } from "lucide-react";

// Google G SVG Icon for genuine verified Google reviews
function GoogleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Real Google Reviews from Patients & Families (No fake ratings, No AI photos, No time-ago strings)
const realReviews = [
  {
    id: "rev-1",
    name: "Dr. Santosh Kumar Kenchugonde",
    isGuide: true,
    initials: "SK",
    review:
      "One of the best physicians I have seen. Excellent clinical knowledge and very systematic approach in diagnosis and management. Very humble and patient-friendly. Highly recommended for anyone seeking quality medical care.",
  },
  {
    id: "rev-2",
    name: "Pavan Koundinya Kaipa",
    isGuide: true,
    initials: "PK",
    review:
      "Dr Surya saved my mother. She had a mild heartattack, we took her to this clinic. ECG and Troponin were normal, but Dr decided to monitor for some time and then did another ECG after 5 hours which showed some irregularities. Extremely grateful for his timely diagnosis and care.",
  },
  {
    id: "rev-3",
    name: "Mamatha Madhu",
    isGuide: true,
    initials: "MM",
    review:
      "I am so grateful to Surya sir. My mom had severe knee pains and suddenly became bedridden and couldn't walk. I went to Surya hospital with test reports and mom's scans. The diagnosis and treatment provided brought her back on her feet.",
  },
  {
    id: "rev-4",
    name: "Hussain Shaik",
    isGuide: true,
    initials: "HS",
    review:
      "Highly recommended. Dr Surya Prakash sir is one of the best physicians in Anantapur.",
  },
  {
    id: "rev-5",
    name: "Thammineni Nandini",
    isGuide: false,
    initials: "TN",
    review:
      "I am personally thankful for Surya Sir. He is such a down to earth person & one of the best doctors in Anantapur. He treated my father for 3.5 years continuously & is not at all money minded.",
  },
  {
    id: "rev-6",
    name: "Sumalatha Suma",
    isGuide: false,
    initials: "SS",
    review:
      "Sir is like a God. During the time of COVID the service he provided to people is really appreciable. Lots of gratitude sir, God bless you and your family for saving people during tough situations. Thanks a lot.",
  },
  {
    id: "rev-7",
    name: "Pavan Royal Morimisetty",
    isGuide: false,
    initials: "PR",
    review:
      "He is the best doctor, very close to all patients and a truly friendly doctor.",
  },
  {
    id: "rev-8",
    name: "Shaiksha Vali Khan",
    isGuide: false,
    initials: "SK",
    review:
      "Treatment provided with very reasonable rates and compassionate care.",
  },
  {
    id: "rev-9",
    name: "Bhuvaneswara Bhuvi",
    isGuide: false,
    initials: "BB",
    review:
      "Very good hospital, good doctor Surya Prakash sir.",
  },
  {
    id: "rev-10",
    name: "Rambhupal Reddy",
    isGuide: true,
    initials: "RR",
    review:
      "Good hospital with attentive doctors and helpful staff.",
  },
  {
    id: "rev-11",
    name: "Kadiyala Radhakrishna Naidu",
    isGuide: false,
    initials: "KR",
    review:
      "Excellent doctor and good service provided throughout our treatment.",
  },
  {
    id: "rev-12",
    name: "Chandra Shekar",
    isGuide: true,
    initials: "CS",
    review:
      "Very good hospital with good service and experienced medical team.",
  },
  {
    id: "rev-13",
    name: "Murari Nanda Kishore",
    isGuide: true,
    initials: "MN",
    review:
      "Marvellous amazing doctor! Exceptional treatment and patient care.",
  },
];

// Split reviews across 3 columns
const col1 = [realReviews[0], realReviews[4], realReviews[6], realReviews[11], realReviews[12]];
const col2 = [realReviews[1], realReviews[5], realReviews[7], realReviews[10]];
const col3 = [realReviews[2], realReviews[3], realReviews[8], realReviews[9]];

// Smooth infinite vertical scrolling column matching TalentOps animation
function TestimonialsColumn({ reviews, duration = 32, className = "" }) {
  return (
    <div className={`relative flex-1 min-w-[280px] max-w-sm ${className}`}>
      <ul
        style={{
          animationDuration: `${duration}s`,
        }}
        className="testimonial-marquee-track flex flex-col gap-5 pb-5 list-none m-0 p-0 will-change-transform"
      >
        {[...new Array(2)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {reviews.map((item, itemIdx) => (
              <motion.li
                key={`${loopIdx}-${item.id || itemIdx}`}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow:
                    "0 20px 40px -12px rgba(233, 75, 28, 0.16), 0 4px 12px rgba(0, 0, 0, 0.04)",
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EFE5DC] hover:border-[#E94B1C]/35 shadow-sm transition-all duration-300 text-left select-none cursor-pointer group"
              >
                {/* Top Quote Glyph & Verified Google Review Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFF0E6] to-[#FFE8D6] border border-[#FADCCB]/70 flex items-center justify-center text-[#E94B1C]">
                    <Quote className="w-4 h-4" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-700 shadow-2xs">
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <span>Google Review</span>
                  </div>
                </div>

                {/* Patient Review Text */}
                <p className="text-[14px] text-slate-700 leading-relaxed font-normal mb-5">
                  "{item.review}"
                </p>

                {/* Patient Profile Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#F2E7DE]">
                  {/* Clean Initials Avatar (No fake AI portraits) */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF0E6] via-[#FFE2D0] to-[#FFD5BF] border border-[#FADCCB] text-[#C93B10] font-bold text-xs flex items-center justify-center shadow-xs shrink-0 tracking-wide">
                    {item.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <cite className="font-serif font-bold not-italic text-sm text-[#14233C] leading-snug truncate block">
                        {item.name}
                      </cite>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Review" />
                    </div>

                    {item.isGuide ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E94B1C] mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E94B1C]" />
                        Local Guide
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-medium mt-0.5 block">
                        Verified Patient
                      </span>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export function TestimonialCarousel() {
  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#FFF9F3] via-[#FAF3EC] to-[#FFF6ED] text-[#1A1D20] overflow-hidden border-t border-[#F0E4D8]/70">
      {/* Dynamic Keyframes for butter-smooth vertical infinite marquee with pause on hover */}
      <style>{`
        @keyframes testimonialVerticalLoop {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .testimonial-marquee-track {
          animation-name: testimonialVerticalLoop;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        /* Butter-smooth pause when hovering over the review section, columns, or cards */
        .testimonials-marquee-container:hover .testimonial-marquee-track,
        .testimonial-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ── Skiper39 Canvas Crowd Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 mix-blend-multiply z-0">
        <CrowdCanvas
          src="/images/peeps/all-peeps.png"
          rows={15}
          cols={7}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>

      {/* Ambient background glows matching Surya Hospital palette */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-100/30 via-amber-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-amber-100/25 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="space-y-3.5 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0E6] to-[#FFE8D6] border border-[#FADCCB] text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E94B1C] shadow-xs">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>AUTHENTIC PATIENT VOICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14233C] tracking-tight leading-[1.15]">
              Real People.
              <br />
              Real{" "}
              <span className="bg-gradient-to-r from-[#E94B1C] via-[#F26A21] to-[#C93B10] bg-clip-text text-transparent">
                Experiences.
              </span>
              <span className="inline-block w-8 h-1 bg-[#E94B1C] align-middle ml-2.5 rounded-full" />
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Unfiltered words from patients and families who experienced healing under Dr. Surya Prakash and our medical care team.
            </p>
          </div>

          {/* Right Header Editorial Callout */}
          <div className="lg:text-right max-w-sm">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#14233C] leading-tight">
              Your Health.
              <br />
              <span className="italic font-serif bg-gradient-to-r from-[#E94B1C] to-[#C63D1B] bg-clip-text text-transparent">
                Our Lifelong Priority.
              </span>
            </div>
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Google Reviews (Sai Nagar, Anantapur)</span>
            </div>
          </div>
        </div>

        {/* ── 3-COLUMN INFINITE VERTICAL SCROLLING MARQUEE (TALENT OPS ANIMATION) ── */}
        <div
          className="testimonials-marquee-container flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[520px] sm:max-h-[560px] overflow-hidden"
          role="region"
          aria-label="Patient Testimonials"
        >
          {/* Column 1: Always visible */}
          <TestimonialsColumn reviews={col1} duration={34} />

          {/* Column 2: Visible on tablet and desktop */}
          <TestimonialsColumn reviews={col2} duration={40} className="hidden md:block" />

          {/* Column 3: Visible on desktop */}
          <TestimonialsColumn reviews={col3} duration={36} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
