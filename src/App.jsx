import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingActionButtons } from "./components/layout/FloatingActionButtons";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { AppointmentModalProvider } from "./context/AppointmentModalContext";

// Critical landing page loaded eagerly
import { HomePage } from "./pages/HomePage";

// Secondary route components split lazily
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const DoctorsPage = lazy(() => import("./pages/DoctorsPage").then((m) => ({ default: m.DoctorsPage })));
const SpecialitiesPage = lazy(() => import("./pages/SpecialitiesPage").then((m) => ({ default: m.SpecialitiesPage })));
const EmergencyPage = lazy(() => import("./pages/EmergencyPage").then((m) => ({ default: m.EmergencyPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const AppointmentPage = lazy(() => import("./pages/AppointmentPage").then((m) => ({ default: m.AppointmentPage })));
const InsurancePartnersPage = lazy(() => import("./pages/InsurancePartnersPage").then((m) => ({ default: m.InsurancePartnersPage })));
const SpecialityDetailPage = lazy(() => import("./pages/SpecialityDetailPage").then((m) => ({ default: m.SpecialityDetailPage })));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#FFF9F3]">
      <div className="w-9 h-9 rounded-full border-3 border-[#E9D8CE] border-t-[#E94B1C] animate-spin" />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppointmentModalProvider>
        <div className="w-full min-h-screen flex flex-col bg-[#FFF9F3] text-[#62666D] antialiased font-sans overflow-x-clip selection:bg-[#F8E6DC] selection:text-[#A84328]">
          <ScrollToTop />

          {/* 4. Reusable Navbar that appears consistently on every page */}
          <Navbar />

          {/* Persistent Floating Quick-Action Bar (Call, WhatsApp, Maps & QR Code) */}
          <FloatingActionButtons />

          {/* Route Pages Container */}
          <main className="w-full flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/specialities" element={<SpecialitiesPage />} />
                <Route path="/departments" element={<Navigate to="/specialities" replace />} />
                <Route path="/specialities/:slug" element={<SpecialityDetailPage />} />
                <Route path="/departments/:slug" element={<SpecialityDetailPage />} />
                <Route path="/services" element={<Navigate to="/specialities" replace />} />
                <Route path="/services/:slug" element={<SpecialityDetailPage />} />
                <Route path="/diagnostics" element={<Navigate to="/specialities" replace />} />
                <Route path="/emergency" element={<EmergencyPage />} />
                <Route path="/insurance-partners" element={<InsurancePartnersPage />} />
                <Route path="/insurance" element={<Navigate to="/insurance-partners" replace />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/appointment" element={<AppointmentPage />} />
                {/* Fallback to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>

          {/* Reusable Institutional Footer on every page */}
          <Footer />
        </div>
      </AppointmentModalProvider>
    </BrowserRouter>
  );
}

export default App;
