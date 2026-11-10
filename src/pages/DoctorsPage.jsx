import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../components/ui/Container";
import { PageHero } from "../components/ui/PageHero";
import { Button } from "../components/ui/Button";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  AlertCircle,
  AlertTriangle,
  X,
  Stethoscope,
  Phone,
  PhoneCall,
  CheckCircle2,
  User,
  ArrowRight,
} from "lucide-react";
import { HOSPITAL_INFO } from "../constants/hospitalData";
import { useAppointmentModal } from "../context/AppointmentModalContext";

export function DoctorsPage() {
  const { openModal } = useAppointmentModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  useEffect(() => {
    document.title = "Specialist Doctors | Surya Hospital, Sai Nagar, Anantapur";
  }, []);

  const departments = [
    "All",
    "Internal Medicine",
    "Cardiology",
    "Gastroenterology",
    "Nephrology",
    "E.N.T.",
    "Orthopedic",
    "Pulmonology",
    "Anesthesia & Intensivist",
    "Oncology",
    "Neurology",
    "Urology",
    "General Surgery",
    "Psychiatry",
    "Dermatology",
  ];

  const quickSymptoms = [
    { label: "Chest Pain / Heart", query: "heart" },
    { label: "Joint / Spine Pain", query: "spine" },
    { label: "Acidity / Digestion", query: "gastro" },
    { label: "Kidney / Dialysis", query: "kidney" },
    { label: "Ear / Sinus / Throat", query: "ent" },
    { label: "Diabetes / BP", query: "diabetes" },
    { label: "Asthma / Breathing", query: "breathing" },
    { label: "Headache / Nerve", query: "neuro" },
  ];

  // Approved, verified clinical keywords mapped strictly to verified doctors and hospital data
  const CLINICAL_FOCUS_KEYWORDS = {
    "dr-d-surya-prakash": [
      "surya",
      "surya prakash",
      "managing director",
      "internal medicine",
      "physician",
      "general physician",
      "diabetes",
      "sugar",
      "blood pressure",
      "bp",
      "cholesterol",
      "fever",
      "infection",
      "inpatient",
      "health check",
    ],
    "dr-k-vamsi-krishna": [
      "heart",
      "cardiology",
      "angiography",
      "angioplasty",
      "heart attack",
      "hypertension",
      "heart failure",
      "echo",
      "ecg",
      "chest pain",
    ],
    "dr-k-spandana": [
      "heart",
      "cardiology",
      "echo",
      "2d echo",
      "arrhythmia",
      "palpitations",
      "preventive heart",
      "cardiovascular",
    ],
    "dr-s-t-rajaneesh-reddy": [
      "gastro",
      "gastroenterology",
      "endoscopy",
      "colonoscopy",
      "liver",
      "jaundice",
      "cirrhosis",
      "gerd",
      "acid reflux",
      "acidity",
      "gastritis",
      "ulcer",
      "stomach pain",
      "digestion",
    ],
    "dr-m-v-k-hareesh": [
      "nephro",
      "nephrology",
      "kidney",
      "renal",
      "dialysis",
      "hemodialysis",
      "ckd",
      "diabetic nephropathy",
      "creatinine",
    ],
    "dr-v-badarinath-reddy": [
      "nephro",
      "nephrology",
      "kidney",
      "renal",
      "kidney stones",
      "proteinuria",
      "dialysis",
      "blood in urine",
    ],
    "dr-p-lakshmi-narasimha-rao": [
      "ent",
      "ear",
      "nose",
      "throat",
      "hearing loss",
      "sinus",
      "fess",
      "tonsils",
      "tonsillectomy",
      "adenoids",
      "snoring",
    ],
    "dr-krishna-sai": [
      "ent",
      "ear",
      "nose",
      "throat",
      "sinusitis",
      "allergic rhinitis",
      "vertigo",
      "balance",
      "ear infection",
      "tinnitus",
    ],
    "dr-m-diwakar": [
      "ortho",
      "orthopedic",
      "spine",
      "back pain",
      "sciatica",
      "disc",
      "neck pain",
      "lumbar",
      "fracture",
      "trauma",
    ],
    "dr-shanthi-swaroop": [
      "ortho",
      "orthopedic",
      "joint replacement",
      "knee replacement",
      "hip replacement",
      "arthritis",
      "knee pain",
      "sports injury",
      "acl",
      "ligament",
      "fracture",
    ],
    "dr-raghavendra-raju": [
      "ortho",
      "orthopedic",
      "fracture",
      "broken bone",
      "trauma",
      "shoulder pain",
      "elbow pain",
      "osteoporosis",
      "joint pain",
    ],
    "dr-sudhindra": [
      "pulmonology",
      "chest",
      "lungs",
      "asthma",
      "allergy",
      "copd",
      "tuberculosis",
      "tb",
      "cough",
      "breathing difficulty",
      "pneumonia",
    ],
    "dr-k-muralidhar-reddy": [
      "pulmonology",
      "lungs",
      "chest",
      "ild",
      "fibrosis",
      "bronchoscopy",
      "breathlessness",
      "chronic cough",
      "respiratory",
      "icu",
    ],
    "dr-v-gowtham": [
      "anesthesia",
      "intensivist",
      "icu",
      "critical care",
      "pain management",
      "sedation",
      "emergency resuscitation",
      "perioperative",
    ],
    "dr-vishnupriya": [
      "oncology",
      "cancer",
      "chemotherapy",
      "tumor",
      "malignancy",
      "immunotherapy",
      "palliative care",
      "biopsy",
    ],
    "dr-thirupati-kedar": [
      "neurology",
      "neuro",
      "brain",
      "stroke",
      "paralysis",
      "seizure",
      "epilepsy",
      "headache",
      "migraine",
      "parkinsons",
      "nerve",
    ],
    "dr-y-harinath-reddy": [
      "urology",
      "kidney stones",
      "bladder",
      "prostate",
      "bph",
      "turp",
      "urine infection",
      "urinary",
      "andrology",
    ],
    "dr-b-rajashekar": [
      "urology",
      "kidney stones",
      "laser surgery",
      "rirs",
      "pcnl",
      "bladder",
      "prostate",
      "urinary tract",
    ],
    "dr-sai-swaroop": [
      "general surgery",
      "laparoscopic",
      "keyhole",
      "appendix",
      "gallbladder",
      "hernia",
      "piles",
      "fissure",
      "fistula",
    ],
    "dr-sushanth": [
      "general surgery",
      "trauma surgery",
      "diabetic foot",
      "wound care",
      "thyroid",
      "lump",
      "abscess",
      "emergency surgery",
    ],
    "dr-v-sashanka": [
      "psychiatry",
      "mental health",
      "depression",
      "anxiety",
      "panic",
      "stress",
      "sleep",
      "insomnia",
      "ocd",
      "counseling",
    ],
  };

  const EMERGENCY_SEARCH_KEYWORDS = [
    "chest pain",
    "breathing difficulty",
    "breathing",
    "seizure",
    "accident",
    "trauma",
    "fainting",
    "collapse",
    "choking",
    "heart attack",
    "heavy bleeding",
  ];

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const isEmergencyQuery =
    Boolean(normalizedQuery) &&
    EMERGENCY_SEARCH_KEYWORDS.some(
      (term) => normalizedQuery.includes(term) || term.includes(normalizedQuery)
    );

  const filteredDoctors = HOSPITAL_INFO.doctors.filter((doc) => {
    // 1. Check department filter
    const matchesDept =
      selectedDepartment === "All" ||
      doc.department.toLowerCase() === selectedDepartment.toLowerCase();

    if (!matchesDept) return false;

    // 2. If no search query, return all matching the department
    if (!normalizedQuery) return true;

    // 3. Match against name, department, qualifications, and specialties
    const matchesName = doc.name.toLowerCase().includes(normalizedQuery);
    const matchesDepartment = doc.department.toLowerCase().includes(normalizedQuery);
    const matchesQualifications = doc.qualifications.toLowerCase().includes(normalizedQuery);
    const matchesSpecialties = doc.specialties.some((s) =>
      s.toLowerCase().includes(normalizedQuery)
    );

    // 4. Match against verified clinical focus keywords
    const doctorKeywords = CLINICAL_FOCUS_KEYWORDS[doc.id] || [];
    const matchesKeywords = doctorKeywords.some(
      (kw) => kw.includes(normalizedQuery) || normalizedQuery.includes(kw)
    );

    return (
      matchesName ||
      matchesDepartment ||
      matchesQualifications ||
      matchesSpecialties ||
      matchesKeywords
    );
  });

  const handleResetSearch = () => {
    setSearchQuery("");
    setSelectedDepartment("All");
  };

  return (
    <div className="w-full bg-[#FAFCFE]">
      {/* Page Hero */}
      <PageHero
        eyebrow="DOCTORS & SPECIALISTS"
        title="Meet Our Doctors & Specialists"
        description="Our highly experienced medical team is here to provide expert care across a wide range of specialties including Cardiology, Gastroenterology, Nephrology, E.N.T., Orthopedic, Pulmonology, Neurology, Oncology, Urology, General Surgery, and Psychiatry."
        breadcrumbs={[{ label: "Doctors" }]}
        badge="Experienced Medical Team"
      >
        <Button
          variant="primary"
          size="sm"
          icon={Calendar}
          onClick={() => openModal()}
          className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold shadow-sm"
        >
          Book an Appointment
        </Button>
        <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
          <Button
            variant="secondary"
            size="sm"
            icon={Phone}
            className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] font-semibold"
          >
            Call Reception: {HOSPITAL_INFO.phone}
          </Button>
        </a>
      </PageHero>

      <section className="py-14 md:py-20 bg-[#FFF9F3] border-b border-[#F0E2D9]">
        <Container>
          {/* Clean, minimalist department filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto sm:flex-wrap pb-2 sm:pb-0 mb-8 scrollbar-none">
              {departments.map((dept) => {
                const isSelected = selectedDepartment === dept;
                const count =
                  dept === "All"
                    ? HOSPITAL_INFO.doctors.length
                    : HOSPITAL_INFO.doctors.filter((d) =>
                        d.department.toLowerCase().includes(dept.toLowerCase())
                      ).length;

                return (
                  <button
                    key={dept}
                    type="button"
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-[#E94B1C] text-white shadow-xs"
                        : "bg-white text-[#5A5049] border border-[#E9D8CE] hover:bg-[#FFF0E6] hover:text-[#E94B1C]"
                    }`}
                  >
                    <span>{dept}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[#FFF0E6] text-[#C63D1B]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          {/* Doctors Grid with Framer-Motion AnimatePresence - Compact Minimal Cards */}
          {filteredDoctors.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredDoctors.map((doc, idx) => {
                  const initials = doc.name
                    .replace(/^Dr\.\s*/i, "")
                    .split(" ")
                    .map((n) => n[0])
                    .filter(Boolean)
                    .slice(0, 2)
                    .join("");

                  return (
                    <motion.div
                      key={doc.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: 6 }}
                      transition={{
                        duration: 0.22,
                        delay: Math.min(idx * 0.015, 0.15),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      whileHover={{ y: -3, transition: { duration: 0.18 } }}
                      className={`bg-white rounded-2xl border border-[#E9D8CE] shadow-xs hover:border-[#E94B1C] hover:shadow-md transition-all duration-200 flex flex-col justify-between p-3.5 sm:p-4 group text-left ${
                        doc.isManagingDirector ? "ring-1.5 ring-[#E94B1C]/40 bg-gradient-to-b from-[#FFFDFB] to-white" : ""
                      }`}
                    >
                      {/* Top Row: Specialization Badge + MD tag */}
                      <div>
                        <div className="flex items-center justify-between gap-1.5 mb-3">
                          <span className="text-[10px] font-bold text-[#C63D1B] uppercase tracking-wider bg-[#FFF0E6] px-2 py-0.5 rounded-md border border-[#E9D8CE] truncate">
                            {doc.department}
                          </span>
                          {doc.isManagingDirector ? (
                            <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#E94B1C] text-white shrink-0">
                              MD
                            </span>
                          ) : (
                            <span className="text-[9px] font-bold text-[#756860] uppercase px-1.5 py-0.5 rounded-full bg-slate-50 border border-[#E9D8CE] shrink-0">
                              {doc.status}
                            </span>
                          )}
                        </div>

                        {/* Doctor Avatar / Initials + Name + Specialization */}
                        <div
                          onClick={() => setActiveDoctorModal(doc)}
                          className="flex items-start gap-2.5 cursor-pointer group/doc"
                          title="Click to view doctor profile"
                        >
                          {doc.image && doc.image.startsWith("/") ? (
                            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#FFF0E6] shrink-0 border border-[#E9D8CE] shadow-2xs">
                              <img
                                src={doc.image}
                                alt={doc.name}
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-xl bg-[#FFF0E6] text-[#E94B1C] font-black text-xs flex items-center justify-center shrink-0 border border-[#FADCCB]">
                              {initials || "DR"}
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <h3 className="text-[14px] sm:text-[15px] font-black text-[#14233C] group-hover:text-[#E94B1C] transition-colors leading-tight truncate" title={doc.name}>
                              {doc.name}
                            </h3>
                            <p className="text-[11px] font-bold text-[#E94B1C] mt-0.5 truncate">
                              {doc.qualifications}
                            </p>
                            <p className="text-[10px] text-[#756860] font-medium truncate mt-0.5">
                              {doc.designation}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card Action Buttons: View Profile (Opens Complete Profile) + Book Visit */}
                      <div className="pt-3 mt-3 border-t border-[#F0E2D9] grid grid-cols-2 gap-1.5">
                        <button
                          type="button"
                          onClick={() => setActiveDoctorModal(doc)}
                          className="w-full py-1.5 px-2 rounded-full text-[11px] font-bold border border-[#E9D8CE] bg-white hover:bg-[#FFF0E6] text-[#C63D1B] transition-colors cursor-pointer text-center active:scale-95"
                        >
                          View Profile
                        </button>

                        <Button
                          variant="primary"
                          size="sm"
                          fullWidth
                          onClick={() => openModal(doc.department)}
                          className="bg-[#E94B1C] hover:bg-[#A83218] text-white text-[11px] font-bold py-1.5 px-2 rounded-full active:scale-95 shadow-xs"
                        >
                          Book Visit
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-12 sm:py-16 px-4 bg-white rounded-2xl border border-[#E9D8CE] space-y-4 max-w-2xl mx-auto shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center mx-auto border border-[#E9D8CE]">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-[#C63D1B]">
                  {searchQuery ? (
                    <>No doctors found matching &ldquo;<span className="text-[#FF8A3D]">{searchQuery}</span>&rdquo;</>
                  ) : (
                    "No doctors found for this department."
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-[#756860] max-w-md mx-auto leading-relaxed">
                  Try searching by doctor name (e.g. <em>Dr. Vamsi Krishna</em>), department, or verified health concerns like <em>heart</em>, <em>kidney</em>, <em>spine</em>, or <em>fracture</em>.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="bg-[#E94B1C] hover:bg-[#A83218] text-white text-xs font-bold rounded-full"
                  onClick={handleResetSearch}
                >
                  Show All Doctors
                </Button>
                <a href={`tel:${HOSPITAL_INFO.phoneRaw}`}>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={Phone}
                    className="bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] text-xs font-bold rounded-full"
                  >
                    Help Me Choose: {HOSPITAL_INFO.phone}
                  </Button>
                </a>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* Individual Doctor Profile Modal with White Glassmorphism Backdrop */}
      {activeDoctorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-white/70 backdrop-blur-md transition-opacity duration-200" onClick={() => setActiveDoctorModal(null)}>
          <div className="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-[#E9D8CE] space-y-5 max-h-[88vh] overflow-y-auto transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95 text-left" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[#F0E2D9]">
              <div className="flex items-center gap-3.5">
                {activeDoctorModal.image && activeDoctorModal.image.startsWith("/") ? (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-[#FFF0E6] shrink-0 border border-[#E9D8CE] shadow-xs">
                    <img
                      src={activeDoctorModal.image}
                      alt={activeDoctorModal.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-xl bg-[#FFF0E6] text-[#E94B1C] flex items-center justify-center shrink-0 border border-[#E9D8CE]">
                    <User className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-black text-[#C63D1B]">
                    {activeDoctorModal.name}
                  </h3>
                  <p className="text-xs text-[#FF8A3D] font-bold">
                    {activeDoctorModal.qualifications}
                  </p>
                  <p className="text-xs text-[#756860]">
                    {activeDoctorModal.designation}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveDoctorModal(null)}
                className="p-1 rounded-lg text-[#756860] hover:text-[#C63D1B] hover:bg-[#FFF0E6] cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Content */}
            <div className="space-y-4 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C63D1B] mb-1">
                  Department & Role
                </h4>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  {activeDoctorModal.department} • {activeDoctorModal.experience}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C63D1B] mb-1">
                  About the Doctor & Patient Approach
                </h4>
                <p className="text-xs sm:text-sm text-[#756860] leading-relaxed">
                  {activeDoctorModal.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C63D1B] mb-2">
                  Conditions Treated & Treatments Offered
                </h4>
                <ul className="space-y-1.5 text-xs text-[#756860]">
                  {activeDoctorModal.specialties.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E94B1C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF0E6]/50 border border-[#E9D8CE] text-xs space-y-1">
                <span className="font-bold text-[#C63D1B] block">
                  Visiting Hours & Location:
                </span>
                <p className="text-[#756860]">
                  {activeDoctorModal.opdTimings}
                </p>
                <p className="text-[11px] text-[#756860] pt-1">
                  Consultation Rooms, Surya Hospital, Sai Nagar, Anantapur.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  icon={Calendar}
                  fullWidth
                  onClick={() => {
                    const dept = activeDoctorModal.department;
                    setActiveDoctorModal(null);
                    openModal(dept);
                  }}
                  className="bg-[#E94B1C] hover:bg-[#A83218] text-white font-bold rounded-full py-2.5 shadow-sm"
                >
                  Book with {activeDoctorModal.name}
                </Button>

              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="secondary"
                  size="md"
                  icon={Phone}
                  className="w-full text-xs bg-white border-[#E9D8CE] text-[#C63D1B] hover:bg-[#FFF0E6] rounded-full py-2.5"
                >
                  Call Front Desk
                </Button>
              </a>

              <Button
                variant="outline"
                size="md"
                onClick={() => setActiveDoctorModal(null)}
                className="w-full sm:w-auto text-xs border-[#E9D8CE] text-[#756860] rounded-full py-2.5 cursor-pointer"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default DoctorsPage;
