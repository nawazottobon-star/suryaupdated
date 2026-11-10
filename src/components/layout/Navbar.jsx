import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Stethoscope,
  Scissors,
  CheckCircle2,
} from "lucide-react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";
import {
  MEDICAL_SPECIALITIES,
  SURGICAL_SPECIALITIES,
} from "../../constants/specialitiesData";
import { motion, AnimatePresence } from "framer-motion";
import suryaLogo from "../../../Surya Hospital Logo.png";
import { useAppointmentModal } from "../../context/AppointmentModalContext";

export function Navbar() {
  const { openModal } = useAppointmentModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // "up" | "down"
  const [isHovered, setIsHovered] = useState(false);
  const [departmentsDropdownOpen, setDepartmentsDropdownOpen] = useState(false);
  const [mobileMedicalOpen, setMobileMedicalOpen] = useState(true);
  const [mobileSurgicalOpen, setMobileSurgicalOpen] = useState(true);

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Require meaningful scroll delta to avoid micro jitter
      if (Math.abs(currentScrollY - lastScrollY) > 8) {
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        lastScrollY = currentScrollY;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setMenuOpen(false);
    setDepartmentsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDepartmentsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDepartmentsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDepartmentsDropdownOpen(false);
    }, 200);
  };

  const isCollapsed = isScrolled && scrollDirection === "down" && !isHovered;

  const isDepartmentsActive =
    location.pathname.startsWith("/specialities") ||
    location.pathname.startsWith("/departments");

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FFF9F3]/95 backdrop-blur-md border-b border-[#E9D8CE] shadow-[0_2px_12px_rgba(40,20,10,0.03)] transition-colors duration-200"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between">
            {/* 1. Left: Surya Hospital Official Brand Logo */}
            <div className="shrink-0 flex items-center py-0.5">
              <Link
                to="/"
                className="inline-flex items-center group focus:outline-none"
                aria-label="Surya Hospital"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  src={suryaLogo}
                  alt="Surya Hospital Logo"
                  className="h-14 sm:h-16 md:h-18 lg:h-18 xl:h-20 w-auto object-contain group-hover:scale-[1.03] transition-transform duration-200"
                />
              </Link>
            </div>

            {/* 2. Middle: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 whitespace-nowrap">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                          : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                      }`
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                          : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                      }`
                    }
                  >
                    About Us
                  </NavLink>

                  {/* ── DEPARTMENTS DROPDOWN TRIGGER (REPLACING SERVICES) ── */}
                  <div
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setDepartmentsDropdownOpen(!departmentsDropdownOpen)
                      }
                      aria-expanded={departmentsDropdownOpen}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                        isDepartmentsActive || departmentsDropdownOpen
                          ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                          : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                      }`}
                    >
                      <span>Departments</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          departmentsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* ── LARGE WHITE DROPDOWN PANEL (MATCHING REFERENCE SCREENSHOT) ── */}
                    <AnimatePresence>
                      {departmentsDropdownOpen && (
                        <div
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-[100] pointer-events-auto"
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="w-[760px] max-w-[94vw] bg-white rounded-3xl border border-[#E9D8CE] shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_12px_rgba(233,75,28,0.06)] p-6 sm:p-7 text-left"
                          >
                          <div className="grid grid-cols-2 gap-6 divide-x divide-slate-100">
                            {/* Medical Department Column (8 Specialities) */}
                            <div className="pr-4 space-y-4 min-w-0">
                              <div className="flex items-center gap-2 pb-2 border-b border-[#F0E2D9]">
                                <div className="w-7 h-7 rounded-lg bg-[#E6F4F7] text-[#006677] flex items-center justify-center shrink-0">
                                  <Stethoscope className="w-4 h-4" />
                                </div>
                                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#006677]">
                                  Medical Department
                                </h3>
                              </div>

                              <ul className="space-y-1">
                                {MEDICAL_SPECIALITIES.map((spec) => (
                                  <li key={spec.slug}>
                                    <Link
                                      to={`/specialities/${spec.slug}`}
                                      onClick={() =>
                                        setDepartmentsDropdownOpen(false)
                                      }
                                      className="group flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-[#E6F4F7]/60 transition-all duration-150"
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        <img
                                          src={spec.heroImage}
                                          alt={spec.name}
                                          className="w-7 h-7 rounded-lg object-cover border border-[#BDE0E8]/70 shrink-0 group-hover:scale-105 transition-transform"
                                        />
                                        <span className="text-[13px] font-semibold text-[#006677] group-hover:text-[#0D4855] group-hover:translate-x-0.5 transition-transform truncate">
                                          {spec.name}
                                        </span>
                                      </div>
                                      <ArrowRight className="w-3.5 h-3.5 text-[#006677] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Surgical Department Column (4 Specialities) */}
                            <div className="pl-6 space-y-4 flex flex-col justify-between min-w-0">
                              <div className="space-y-4">
                                <div className="flex items-center gap-2 pb-2 border-b border-[#F0E2D9]">
                                  <div className="w-7 h-7 rounded-lg bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0">
                                    <Scissors className="w-4 h-4" />
                                  </div>
                                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#C63D1B]">
                                    Surgical Department
                                  </h3>
                                </div>

                                <ul className="space-y-1">
                                  {SURGICAL_SPECIALITIES.map((spec) => (
                                    <li key={spec.slug}>
                                      <Link
                                        to={`/specialities/${spec.slug}`}
                                        onClick={() =>
                                          setDepartmentsDropdownOpen(false)
                                        }
                                        className="group flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-[#FFF0E6]/60 transition-all duration-150"
                                      >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                          <img
                                            src={spec.heroImage}
                                            alt={spec.name}
                                            className="w-7 h-7 rounded-lg object-cover border border-[#E9D8CE] shrink-0 group-hover:scale-105 transition-transform"
                                          />
                                          <span className="text-[13px] font-semibold text-[#006677] group-hover:text-[#C63D1B] group-hover:translate-x-0.5 transition-transform truncate">
                                            {spec.name}
                                          </span>
                                        </div>
                                        <ArrowRight className="w-3.5 h-3.5 text-[#E94B1C] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Bottom Callout Banner */}
                              <div className="mt-4 p-3 sm:p-3.5 rounded-2xl bg-[#FFF9F3] border border-[#E9D8CE] flex items-center justify-between gap-2.5 min-w-0">
                                <div className="min-w-0 flex-1 pr-1">
                                  <div className="text-[11px] font-bold text-[#1A1D20] leading-tight">
                                    Need Doctor Guidance?
                                  </div>
                                  <div className="text-[10px] text-[#756860] leading-tight mt-0.5 line-clamp-1">
                                    Select any department to view full details
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setDepartmentsDropdownOpen(false);
                                    openModal();
                                  }}
                                  className="shrink-0 text-[11px] font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] px-3.5 py-1.5 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap shadow-xs active:scale-95"
                                >
                                  Book OPD
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                  </div>

                  <NavLink
                    to="/doctors"
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                          : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                      }`
                    }
                  >
                    Our Doctors
                  </NavLink>

                  <NavLink
                    to="/insurance-partners"
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                          : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                      }`
                    }
                  >
                    Insurance
                  </NavLink>

                  <NavLink
                    to="/emergency"
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                          : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                      }`
                    }
                  >
                    Emergency
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-full text-[13px] 2xl:text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "text-[#C63D1B] font-bold bg-[#FFF0E6]"
                          : "text-[#262626]/90 hover:text-[#E94B1C] hover:bg-[#FFF0E6]/50"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
            </nav>

            {/* 3. Right: CTA Button directly inside the unified pill */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">

              {/* Book Appointment CTA Button - opens the simple appointment pop-up form */}
              <button
                type="button"
                onClick={() => openModal()}
                className="animate-cta-blink flex flex-col items-center justify-center px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-2xl sm:rounded-full text-white bg-[#E94B1C] hover:bg-[#A83218] transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0 shadow-md group"
                title={`Book Appointment or Call ${HOSPITAL_INFO.phone}`}
              >
                <div className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-[13px] font-extrabold tracking-tight leading-tight">
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold text-white/95 tracking-wide leading-tight mt-0.5 flex items-center gap-1">
                  <Phone className="w-2.5 h-2.5 fill-current opacity-90" />
                  <span>{HOSPITAL_INFO.phone}</span>
                </div>
              </button>

              {/* Mobile Hamburger Trigger inside navbar (< lg) */}
              <div className="lg:hidden flex items-center">
                <button
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-1.5 rounded-xl text-[#262626] hover:bg-[#FFF0E6] transition focus:outline-none cursor-pointer"
                  aria-label="Toggle navigation menu"
                >
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
        </div>
      </motion.header>

      {/* ── RESPONSIVE MOBILE DRAWER (< lg) ── */}
      <AnimatePresence>
        {menuOpen && (
          <div
            className="fixed inset-0 z-[99999] lg:hidden overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/70 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="px-6 py-5 border-b border-[#E9D8CE] flex items-center justify-between bg-[#FFF0E6]/50">
                  <img
                    src={suryaLogo}
                    alt="Surya Hospital"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-[#FFF0E6] text-[#262626] transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-1">
                    <NavLink
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-[#FFF0E6] text-[#E94B1C]"
                            : "text-[#262626] hover:bg-[#FFF0E6]/50"
                        }`
                      }
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-[#FFF0E6] text-[#E94B1C]"
                            : "text-[#262626] hover:bg-[#FFF0E6]/50"
                        }`
                      }
                    >
                      About Us
                    </NavLink>

                    {/* Mobile Expandable Departments */}
                    <div className="rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] overflow-hidden my-2">
                      <div className="p-3 bg-[#FFF0E6]/80 flex items-center justify-between">
                        <Link
                          to="/specialities/cardiology"
                          onClick={() => setMenuOpen(false)}
                          className="text-xs font-bold uppercase tracking-wider text-[#C63D1B]"
                        >
                          Departments (12 Specialities)
                        </Link>
                      </div>

                      {/* Medical Group */}
                      <div className="p-3 border-b border-[#E9D8CE]">
                        <button
                          type="button"
                          onClick={() => setMobileMedicalOpen(!mobileMedicalOpen)}
                          className="w-full flex items-center justify-between text-xs font-bold text-[#006677] py-1"
                        >
                          <span>Medical Department (8)</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              mobileMedicalOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileMedicalOpen && (
                          <div className="mt-2 space-y-1 pl-1">
                            {MEDICAL_SPECIALITIES.map((spec) => (
                              <Link
                                key={spec.slug}
                                to={`/specialities/${spec.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-[#006677] hover:bg-white"
                              >
                                <img
                                  src={spec.heroImage}
                                  alt={spec.name}
                                  className="w-6 h-6 rounded-md object-cover border border-[#BDE0E8]/70 shrink-0"
                                />
                                <span className="truncate">{spec.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Surgical Group */}
                      <div className="p-3">
                        <button
                          type="button"
                          onClick={() => setMobileSurgicalOpen(!mobileSurgicalOpen)}
                          className="w-full flex items-center justify-between text-xs font-bold text-[#C63D1B] py-1"
                        >
                          <span>Surgical Department (4)</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              mobileSurgicalOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileSurgicalOpen && (
                          <div className="mt-2 space-y-1 pl-1">
                            {SURGICAL_SPECIALITIES.map((spec) => (
                              <Link
                                key={spec.slug}
                                to={`/specialities/${spec.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-xs font-medium text-[#006677] hover:bg-white"
                              >
                                <img
                                  src={spec.heroImage}
                                  alt={spec.name}
                                  className="w-6 h-6 rounded-md object-cover border border-[#E9D8CE] shrink-0"
                                />
                                <span className="truncate">{spec.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <NavLink
                      to="/doctors"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-[#FFF0E6] text-[#E94B1C]"
                            : "text-[#262626] hover:bg-[#FFF0E6]/50"
                        }`
                      }
                    >
                      Our Doctors
                    </NavLink>

                    <NavLink
                      to="/insurance-partners"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-[#FFF0E6] text-[#E94B1C]"
                            : "text-[#262626] hover:bg-[#FFF0E6]/50"
                        }`
                      }
                    >
                      Insurance
                    </NavLink>

                    <NavLink
                      to="/emergency"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-[#FFF0E6] text-[#E94B1C]"
                            : "text-[#262626] hover:bg-[#FFF0E6]/50"
                        }`
                      }
                    >
                      Emergency
                    </NavLink>

                    <NavLink
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3.5 py-2.5 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-[#FFF0E6] text-[#E94B1C]"
                            : "text-[#262626] hover:bg-[#FFF0E6]/50"
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                  </div>

                  <div className="pt-4 border-t border-[#E9D8CE] space-y-3">
                    <a
                      href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF9F3] border border-[#E9D8CE] text-[#262626]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center">
                        <Phone className="w-4 h-4 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">+91 85009 04999</div>
                        <div className="text-[11px] text-[#756860]">
                          24/7 Emergency Casualty
                        </div>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen(false);
                        openModal();
                      }}
                      className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-[#E94B1C] hover:bg-[#A83218] block shadow-md cursor-pointer"
                    >
                      <div className="font-extrabold text-[13px]">Book Appointment</div>
                      <div className="text-[11px] text-white/95 font-semibold mt-0.5 flex items-center justify-center gap-1">
                        <Phone className="w-3 h-3 fill-current" />
                        <span>{HOSPITAL_INFO.phone}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-[#E9D8CE] bg-[#FFF9F3] text-xs text-[#756860]">
                Sainagar, 9th Cross, Anantapur - 515001
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
