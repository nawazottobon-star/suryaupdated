import React from "react";
import { HOSPITAL_INFO } from "../../constants/hospitalData";

/**
 * FloatingQRWidget Component
 * Pure QR code floating at bottom-right of the screen.
 * No bulky card header, footer, or wasted padding.
 * - Dynamic shake animation to attract attention
 * - Click directly opens Google Maps
 * - Scan directly opens Google Maps
 */
export function FloatingQRWidget() {
  const mapsUrl = HOSPITAL_INFO.directionsUrl || HOSPITAL_INFO.mapsUrl;

  return (
    <aside
      aria-label="Google Maps QR Code"
      className="fixed right-3 sm:right-5 bottom-20 sm:bottom-24 lg:bottom-6 z-40 select-none"
    >
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="qr-attention-wiggle group block w-20 sm:w-24 p-1.5 rounded-2xl bg-white shadow-[0_10px_32px_rgba(20,35,60,0.22)] hover:shadow-[0_14px_40px_rgba(233,75,28,0.35)] hover:scale-110 transition-all duration-300 border border-[#E9D8CE] cursor-pointer"
        title="Scan with phone camera or click to open Google Maps"
      >
        <img
          src="/surya-hospital-qr.png"
          alt="Surya Hospital Google Maps QR Code"
          className="w-full aspect-square object-contain block rounded-xl"
          width={766}
          height={766}
          loading="eager"
        />
      </a>
    </aside>
  );
}

export default FloatingQRWidget;
