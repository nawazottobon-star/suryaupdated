import React, { useEffect } from "react";
import { FounderStorySection } from "../components/home/FounderStorySection";
import { SpecialtiesScrollSection } from "../components/home/SpecialtiesScrollSection";
import { FacilitiesServicesSection } from "../components/home/FacilitiesServicesSection";
import { TestimonialCarousel } from "../components/home/TestimonialCarousel";
import { InsuranceCashlessSection } from "../components/home/InsuranceCashlessSection";

export function HomePage() {
  useEffect(() => {
    document.title = "Surya Hospital | Sai Nagar, Anantapur | Comprehensive Healthcare";
  }, []);

  return (
    <div className="w-full bg-[#FFF9F3]">
      {/* Section 1: Founder Section (New First Hero Section) */}
      <FounderStorySection />

      {/* Section 2: Hospital Specialities with Intuitive Images & Card Scrolling Effect */}
      <SpecialtiesScrollSection />

      {/* Section 3: Facilities & Services (Real Photos & Video Walkthroughs) */}
      <FacilitiesServicesSection />

      {/* Section 4: Patient Stories & Verified Testimonials Carousel */}
      <TestimonialCarousel />

      {/* Section 5: Insurance & Cashless Partners (24 Partners Grid) */}
      <InsuranceCashlessSection />
    </div>
  );
}

export default HomePage;
