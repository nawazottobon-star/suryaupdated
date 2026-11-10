import React, { useEffect } from "react";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  PhoneCall,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        eyebrow="LOCATION & CONTACT"
        title="Contact Surya Hospital"
        description="We are here to help you. Call our friendly front desk, enquire about doctor visiting hours, or visit our hospital at Sainagar, 9th Cross, Anantapur - 515001."
        breadcrumbs={[{ label: "Contact" }]}
        badge="Sai Nagar, Anantapur"
      >
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button variant="primary" size="sm" icon={PhoneCall} className="bg-[#E94B1C] hover:bg-[#A83218] text-white">
            Call Front Desk: {HOSPITAL_INFO.phone}
          </Button>
        </a>
        <a href={HOSPITAL_INFO.mapsUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="sm" icon={ExternalLink} className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6]">
            Directions on Google Maps
          </Button>
        </a>
      </PageHero>

      <section className="py-14 md:py-20 bg-white border-b border-[#F0E2D9]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                  HOW TO REACH US
                </span>
                <h2 className="text-3xl font-black text-[#C63D1B] tracking-tight">
                  We Are Always Here For You
                </h2>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed font-normal">
                  For quick doctor bookings, room enquiries, or emergency advice, calling our front desk is always the fastest way to get help.
                </p>
              </div>

              {/* Verified Contact Cards (Compact 2x2 Grid with Interactive Blink on Hover) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="hover-blink-card group p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs cursor-pointer transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="placeholder-shape w-9 h-9 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE] transition-all">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#C63D1B] text-sm">Address</span>
                  </div>
                  <p className="text-xs text-[#756860] leading-relaxed">
                    {HOSPITAL_INFO.fullAddress}
                  </p>
                  <div className="pt-2">
                    <a
                      href={HOSPITAL_INFO.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E94B1C] hover:underline"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>

                <div className="hover-blink-card group p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs cursor-pointer transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="placeholder-shape w-9 h-9 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE] transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#C63D1B] text-sm">Helpline</span>
                  </div>
                  <a
                    href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                    className="font-bold text-[#14233C] text-sm hover:text-[#E94B1C] transition-colors"
                  >
                    {HOSPITAL_INFO.phone}
                  </a>
                  <p className="text-[11px] text-emerald-700 font-semibold pt-1">
                    24/7 Casualty &amp; Reception
                  </p>
                </div>

                <div className="hover-blink-card group p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs cursor-pointer transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="placeholder-shape w-9 h-9 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE] transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#C63D1B] text-sm">Email</span>
                  </div>
                  <a
                    href={`mailto:${HOSPITAL_INFO.email}`}
                    className="text-xs font-semibold text-[#14233C] hover:text-[#E94B1C] break-all"
                  >
                    {HOSPITAL_INFO.email}
                  </a>
                  <p className="text-[11px] text-[#756860] pt-1">General &amp; Insurance Desk</p>
                </div>

                <div className="hover-blink-card group p-4 rounded-2xl border border-[#E9D8CE] bg-[#FFF9F3] hover:bg-white flex flex-col justify-between shadow-2xs cursor-pointer transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="placeholder-shape w-9 h-9 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE] transition-all">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#C63D1B] text-sm">Timings</span>
                  </div>
                  <p className="text-xs text-[#756860]">
                    OPD: 9:00 AM – 2:00 PM &amp; 5:00 PM – 9:00 PM
                  </p>
                  <p className="text-[11px] font-bold text-[#E94B1C] pt-1">
                    Emergency: Open 24/7
                  </p>
                </div>
              </div>

              {/* Call-out Button */}
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-sm font-bold bg-[#E94B1C] hover:bg-[#A83218] text-white shadow-sm transition"
              >
                <PhoneCall className="w-4 h-4 animate-pulse text-[#FFF0E6]" />
                <span>Call Hospital Directly: {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Right Column: Interactive Hospital Location Map (7 cols) */}
            <div className="lg:col-span-7 bg-[#FFF9F3] p-4 sm:p-6 rounded-2xl border border-[#E9D8CE] shadow-xs text-left flex flex-col justify-between space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest bg-[#FFF0E6] text-[#C63D1B] border border-[#E9D8CE]">
                    HOSPITAL LOCATION &amp; MAP
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#C63D1B]">
                    Find Surya Hospital on Google Maps
                  </h3>
                  <p className="text-xs text-[#756860]">
                    Sainagar, 9th Cross, Anantapur - 515001
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={HOSPITAL_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#E94B1C] text-white hover:bg-[#A83218] transition shadow-xs cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={HOSPITAL_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold text-[#C63D1B] bg-white border border-[#E9D8CE] hover:bg-[#FFF0E6] transition"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="w-full h-[380px] sm:h-[440px] rounded-xl overflow-hidden border border-[#E9D8CE] shadow-inner bg-white">
                <iframe
                  title="Surya Hospital Sai Nagar Anantapur Location Map"
                  src={HOSPITAL_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Location Landmark Note */}
              <div className="p-3 rounded-xl bg-white border border-[#E9D8CE] flex items-center justify-between text-xs text-[#756860]">
                <span>Location: Sainagar, 9th Cross, Anantapur - 515001</span>
                <span className="font-bold text-[#C63D1B]">Open 24/7 for Casualty</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
export default ContactPage;
