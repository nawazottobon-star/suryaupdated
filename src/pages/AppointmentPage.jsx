import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Calendar,
  CheckCircle2,
  PhoneCall,
  Clock,
  User,
  Stethoscope,
  FileText,
  ShieldCheck,
  MessageCircle,
  MapPin,
  HeartPulse,
} from "lucide-react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const paramDept = (searchParams.get("dept") || "").toLowerCase().trim();

  const departmentOptions = [
    "General Medicine (Physician)",
    "General & Laparoscopic Surgery",
    "Orthopedics & Joint Replacement",
    "Cardiology",
    "Nephrology & Dialysis",
    "Pulmonology & Chest Medicine",
    "Gastroenterology",
    "E.N.T.",
    "Urology",
    "Diagnostic Lab & Imaging",
    "Physiotherapy & Rehab",
    "24/7 Casualty & Emergency",
  ];

  const matchedDept =
    departmentOptions.find(
      (opt) =>
        paramDept &&
        (opt.toLowerCase().includes(paramDept) || paramDept.includes(opt.toLowerCase()))
    ) || "General Medicine (Physician)";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: matchedDept,
    date: "",
    timeSlot: "Morning (09:30 AM – 01:30 PM)",
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      department: "General Medicine (Physician)",
      date: "",
      timeSlot: "Morning (09:30 AM – 01:30 PM)",
      note: "",
    });
  };

  const whatsappUrl = `https://wa.me/918500904999?text=${encodeURIComponent(
    `Hello Surya Hospital, I would like to book an appointment for ${formData.name || "Patient"}. Phone: ${formData.phone}, Department: ${formData.department}, Date: ${formData.date || "Next available"}.`
  )}`;

  return (
    <div className="bg-[#FFF9F3] min-h-screen text-[#14233C] pt-24 pb-20">
      {/* Page Hero */}
      <PageHero
        badge="Appointments & Visiting Tokens"
        title="Book Doctor Consultation"
        description="Enter your simple details below. Our hospital front desk coordinator will confirm your visiting slot promptly."
      />

      <Container className="mt-8 max-w-5xl">
        {/* Emergency Notice */}
        <div className="mb-8 p-4 rounded-2xl bg-[#FFF5EC] border border-[#F5D8C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#7A3E1D] shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>
              <strong>Need Immediate Emergency or Casualty Care?</strong> For acute trauma, severe pain, or urgent hospitalization, visit our hospital directly.
            </span>
          </div>
          <a
            href="tel:+918500904999"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-black text-white bg-[#E94B1C] hover:bg-[#C63D1B] transition-colors shrink-0 whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call 24/7 Desk: +91 85009 04999</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E9D8CE] shadow-[0_12px_40px_rgba(200,90,40,0.06)]">
            {submitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#14233C] tracking-tight">
                    Appointment Request Received!
                  </h3>
                  <p className="text-xs font-bold text-[#E94B1C] mt-1 uppercase tracking-wider">
                    Token ID: #{Math.floor(1000 + Math.random() * 9000)}
                  </p>
                </div>

                <div className="bg-[#FFF9F3] border border-[#F0E2D9] rounded-2xl p-5 text-left space-y-2.5 max-w-md mx-auto text-xs sm:text-sm text-[#5A5049]">
                  <div className="flex justify-between">
                    <span className="text-[#8C7A70]">Patient:</span>
                    <span className="font-bold text-[#14233C]">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C7A70]">Phone Number:</span>
                    <span className="font-bold text-[#14233C]">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C7A70]">Department:</span>
                    <span className="font-bold text-[#14233C]">{formData.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C7A70]">Preferred Slot:</span>
                    <span className="font-bold text-[#14233C]">
                      {formData.date ? `${formData.date} • ` : ""}
                      {formData.timeSlot}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#6A6059] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our front desk team will call you within 15 minutes to confirm your doctor visit timing.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold text-[#14233C] bg-[#FFF0E6] hover:bg-[#FFE0D0] transition-colors cursor-pointer"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#F0E2D9] pb-4">
                  <h2 className="text-xl font-black text-[#14233C] tracking-tight">
                    Patient &amp; Consultation Details
                  </h2>
                  <p className="text-xs text-[#7A6E65] mt-1 font-medium">
                    Fill in these few details to reserve your consultation slot.
                  </p>
                </div>

                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-bold text-[#14233C] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Patient Full Name <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter patient full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-[#FFFDFC] text-[#14233C] placeholder:text-[#A0938A] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#14233C] mb-1.5 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Phone Number <span className="text-red-500">*</span></span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-black text-[#8C7A70]">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setFormData({ ...formData, phone: val });
                      }}
                      className="w-full pl-12 pr-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-[#FFFDFC] text-[#14233C] placeholder:text-[#A0938A] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                    />
                  </div>
                </div>

                {/* Department Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#14233C] mb-1.5 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Choose Department</span>
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-[#FFFDFC] text-[#14233C] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                  >
                    {departmentOptions.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date & Visiting Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#14233C] mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E94B1C]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-[#FFFDFC] text-[#14233C] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14233C] mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#E94B1C]" />
                      <span>Visiting Slot</span>
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-[#FFFDFC] text-[#14233C] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition font-medium"
                    >
                      <option value="Morning (09:30 AM – 01:30 PM)">
                        Morning (09:30 AM – 01:30 PM)
                      </option>
                      <option value="Evening (05:00 PM – 08:30 PM)">
                        Evening (05:00 PM – 08:30 PM)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Symptoms / Note */}
                <div>
                  <label className="block text-xs font-bold text-[#14233C] mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#E94B1C]" />
                    <span>Brief Health Issue / Symptoms <span className="text-[#8C7A70] font-normal">(Optional)</span></span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Cough and fever for 2 days, knee pain, consultation with general surgeon..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-[#E9D8CE] bg-[#FFFDFC] text-[#14233C] placeholder:text-[#A0938A] focus:border-[#E94B1C] focus:ring-2 focus:ring-[#E94B1C]/20 outline-none transition resize-none font-medium"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-sm sm:text-base font-black text-white bg-gradient-to-r from-[#E94B1C] via-[#F26A21] to-[#C63D1B] hover:from-[#C63D1B] hover:to-[#A83218] shadow-[0_10px_28px_rgba(233,75,28,0.32)] hover:shadow-[0_14px_36px_rgba(233,75,28,0.45)] hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2.5"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Confirm Doctor Appointment</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Info & Helpline Sidebar */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Helpline Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9D8CE] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] flex items-center justify-center text-[#E94B1C]">
                  <PhoneCall className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base font-black text-[#14233C]">Call Front Desk</h3>
                  <p className="text-xs text-[#7A6E65]">Immediate telephone tokens</p>
                </div>
              </div>
              <a
                href="tel:+918500904999"
                className="block w-full py-3 rounded-2xl bg-[#FFF5EC] border border-[#F5D8C3] text-center text-sm font-black text-[#E94B1C] hover:bg-[#FFE8D6] transition-colors cursor-pointer"
              >
                +91 85009 04999
              </a>
              <p className="text-[11px] text-[#8C7A70] text-center mt-2 font-medium">
                Available 24 hours a day, 365 days a year
              </p>
            </div>

            {/* OPD Timings */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9D8CE] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF0E6] flex items-center justify-center text-[#E94B1C]">
                  <Clock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base font-black text-[#14233C]">Visiting Timings</h3>
                  <p className="text-xs text-[#7A6E65]">Doctor consultation hours</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-[#5A5049] pt-1">
                <div className="flex justify-between py-1.5 border-b border-[#F0E2D9]">
                  <span className="font-semibold text-[#14233C]">Morning OPD:</span>
                  <span className="font-bold text-[#E94B1C]">09:00 AM – 02:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F0E2D9]">
                  <span className="font-semibold text-[#14233C]">Evening OPD:</span>
                  <span className="font-bold text-[#E94B1C]">05:00 PM – 09:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-semibold text-[#14233C]">Emergency &amp; Casualty:</span>
                  <span className="font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    24/7 Always Open
                  </span>
                </div>
              </div>
            </div>

            {/* Cashless & Location */}
            <div className="bg-white rounded-3xl p-6 border border-[#E9D8CE] shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E94B1C] shrink-0 mt-0.5 stroke-[2.2]" />
                <div>
                  <h4 className="text-xs font-black text-[#14233C]">100% Cashless Available</h4>
                  <p className="text-[11px] text-[#7A6E65] mt-0.5">
                    Star Health, Care Health &amp; all major insurance TPAs accepted.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#F0E2D9]">
                <MapPin className="w-5 h-5 text-[#E94B1C] shrink-0 mt-0.5 stroke-[2.2]" />
                <div>
                  <h4 className="text-xs font-black text-[#14233C]">Surya Hospital Campus</h4>
                  <p className="text-[11px] text-[#7A6E65] mt-0.5">
                    Sainagar, 9th Cross, Anantapur - 515001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AppointmentPage;
