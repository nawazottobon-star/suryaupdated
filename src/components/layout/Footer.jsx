import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowUp } from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import suryaLogo from "../../../Surya Hospital Logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/specialities" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Insurance Partners", path: "/insurance-partners" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#FFF9F3] text-[#1A1D20] pt-16 sm:pt-20 pb-0 m-0 border-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Directory Grid (Exact Reference Footer Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-none">
          
          {/* Column 1: Hospital Logo, Tagline & Address (4 Cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src={suryaLogo}
                alt="Surya Hospital Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-[#62666D] font-medium leading-relaxed">
              Comprehensive Healthcare. Compassionate Care.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-[#62666D] pt-2">
              <MapPin className="w-4 h-4 text-[#A84328] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Sainagar, 9th Cross, Anantapur - 515001
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D20]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#62666D]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#A84328] transition-colors"
                  >
                    • {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D20]">
              Contact Us
            </h4>

            <div className="space-y-2.5 text-xs text-[#62666D]">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#A84328] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="font-bold text-[#1A1D20] hover:text-[#A84328]">
                    8500904999
                  </a>
                  <p className="text-[11px] text-[#62666D]">24 Hours / 7 Days (Emergency)</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#A84328] shrink-0 mt-0.5" />
                <a href="mailto:suryahospitalatp@gmail.com" className="hover:text-[#A84328] break-all">
                  suryahospitalatp@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#A84328] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1A1D20] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Hospital Open 24 Hours / 7 Days
                  </span>
                  <p className="text-[11px] text-[#62666D]">Casualty, Inpatient, Dialysis & Pharmacy: 24/7</p>
                  <p className="text-[11px] text-[#62666D]">Doctor OPD: 09:00 AM – 02:00 PM & 05:00 PM – 09:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Location Card with Direct Directions CTA (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1D20]">
              Our Location
            </h4>

            <div className="rounded-2xl border border-[#E2D9D0] bg-white p-3 shadow-xs space-y-3">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FFF9F3] border border-[#E2D9D0]/60">
                <div className="w-7 h-7 rounded-full bg-[#F8E6DC] text-[#A84328] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1D20]">Surya Hospital</div>
                  <div className="text-[10px] text-[#62666D]">Sainagar, 9th Cross, Anantapur - 515001</div>
                </div>
              </div>

              <a
                href={HOSPITAL_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-gradient-to-r from-[#C85235] to-[#A84328] hover:from-[#A84328] hover:to-[#8F371F] flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Strip with Back-to-Top Button (Dark Charcoal Strip matching Reference) */}
      <div className="mt-10 bg-[#1A1D20] text-white/80 py-5 border-none w-full m-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © 2026 Surya Hospital. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-xs text-[#E2D9D0]/80">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white text-[#1A1D20] hover:bg-[#F8E6DC] hover:text-[#A84328] flex items-center justify-center transition shadow-md"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
