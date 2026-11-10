/**
 * Surya Hospital - Centralized Verified Information Manifest
 * Location: Sai Nagar, Anantapur, Andhra Pradesh, India
 * 
 * Sourced strictly in compliance with clinical integrity guidelines.
 * All hospital details centralized in this single file.
 */

export const HOSPITAL_INFO = {
  name: "Surya Hospital",
  tagline: "Comprehensive Healthcare. Compassionate Care.",
  locationShort: "Sainagar, 9th Cross, Anantapur - 515001",
  fullAddress: "Sainagar, 9th Cross, Anantapur - 515001",
  landmark: "9th Cross, Sainagar",
  city: "Anantapur",
  state: "Andhra Pradesh",
  pincode: "515001",
  country: "India",
  phone: "+91 85009 04999",
  phoneRaw: "+918500904999",
  emergencyHelpline: "+91 85009 04999",
  email: "suryahospitalatp@gmail.com",
  websiteUrl: "https://suryahospital.co",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Surya+Hospital+9th+Cross+Sainagar+Anantapur+515001",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Surya+Hospital+9th+Cross+Sainagar+Anantapur+515001",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.9880157973417!2d77.59954007584145!3d14.681146775027598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b036573c9bf%3A0x6b301c23ce08253a!2sAmbedkar%20Bhavan%2C%20Sai%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin",

  timing: {
    emergency: "24 Hours / 7 Days a Week",
    opd: "Morning: 09:00 AM – 02:00 PM | Evening: 05:00 PM – 09:00 PM",
    pharmacy: "24/7 Operational",
    inpatient: "24 Hours / 7 Days a Week",
  },

  // About the Hospital: Written in warm, clear, patient-friendly language
  about: {
    overview: "Surya Hospital is a friendly hospital in Sai Nagar, Anantapur. We help individuals and families feel better with everyday doctor visits, surgical treatments, 24/7 emergency care, inpatient observation, and supportive recovery under one roof.",
    missionDraft: "To give every family in Anantapur clear medical advice, safe treatments, and caring personal attention whenever they need health support.",
    visionDraft: "To be the most trusted and helpful hospital in our community, known for honest doctor guidance, modern equipment, and dependable patient care.",
    philosophy: "We treat every patient like family. We listen carefully, explain your health conditions in simple words, and recommend only the care you genuinely need.",
  },

  values: [
    {
      title: "Care Centered on You",
      desc: "We listen to your health concerns, answer your questions patiently, and create treatment plans that suit your everyday life.",
    },
    {
      title: "Easy to Reach",
      desc: "Conveniently located at Sainagar, 9th Cross, Anantapur - 515001, making visits simple for local and visiting families.",
    },
    {
      title: "Experienced Doctors & Staff",
      desc: "Qualified doctors, caring nurses, and helpful front-desk coordinators ready to guide you at every visit.",
    },
    {
      title: "Open 24/7 for Emergencies",
      desc: "Our emergency and casualty desk is open day and night every day of the year for sudden illness or accidental injuries.",
    },
    {
      title: "Honest & Clear Advice",
      desc: "Clear explanations of your diagnosis, upfront information about tests and costs, and dependable medical guidance you can trust.",
    },
  ],

  // Verified Doctors & Medical Consultants
  doctors: [
    // Clinical Leadership & Internal Medicine
    {
      id: "dr-d-surya-prakash",
      name: "Dr. D. Surya Prakash Chowdary",
      designation: "Managing Director & Consultant Physician",
      department: "Internal Medicine",
      qualifications: "M.D. Internal Medicine (Manipal)",
      experience: "Founder, Managing Director & Senior Consultant Physician",
      image: "/images/dr-d-surya-prakash.png",
      fallbackImage: "/images/dr-d-surya-prakash.png",
      opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      status: "Managing Director",
      isManagingDirector: true,
      specialties: [
        "Diabetes, Hypertension & Cholesterol Management",
        "Adult Illness Diagnosis & Inpatient Medical Care",
        "Fever, Infections & Seasonal Illness Care",
        "Comprehensive Preventive Health Checkups",
      ],
      bio: "Dr. D. Surya Prakash Chowdary is the founder and Managing Director of Surya Hospital. With specialized post-graduate training in Internal Medicine from Manipal, he oversees all clinical standards, patient safety protocols, and hospital inpatient care while leading comprehensive consultations for adult medical conditions.",
    },

    // Cardiology
    {
      id: "dr-k-vamsi-krishna",
      name: "Dr. K. Vamsi Krishna",
      designation: "Consultant Cardiologist",
      department: "Cardiology",
      qualifications: "MD, DM (OSM)",
      experience: "Senior Consultant Interventional Cardiologist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 08:00 PM",
      status: "Specialist",
      specialties: [
        "Coronary Angiography & Angioplasty",
        "Heart Attack & Cardiac Emergency Care",
        "Hypertension & Heart Failure Management",
        "Echocardiography & Preventive Cardiology",
      ],
      bio: "Dr. K. Vamsi Krishna is an experienced Cardiologist specializing in comprehensive cardiac care, managing hypertension, ischemic heart disease, heart failure, and acute cardiac emergencies.",
    },
    {
      id: "dr-k-spandana",
      name: "Dr. K. Spandana",
      designation: "Consultant Cardiologist",
      department: "Cardiology",
      qualifications: "MD, DM",
      experience: "Consultant Cardiologist",
      image: "https://images.unsplash.com/photo-1594824813583-057088bdf20a?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1594824813583-057088bdf20a?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 04:30 PM – 07:30 PM",
      status: "Specialist",
      specialties: [
        "Non-Invasive Cardiology & 2D Echo",
        "Arrhythmia & Palpitation Evaluations",
        "Preventive Heart Checkups",
        "Women's Cardiovascular Health",
      ],
      bio: "Dr. K. Spandana provides expert clinical cardiology consultations with a focus on non-invasive diagnostics, preventive cardiac care, and long-term management of cardiovascular conditions.",
    },

    // Gastroenterology
    {
      id: "dr-s-t-rajaneesh-reddy",
      name: "Dr. S.T. Rajaneesh Reddy",
      designation: "Consultant Gastroenterologist",
      department: "Gastroenterology",
      qualifications: "DM Gastro",
      experience: "Consultant Medical Gastroenterologist & Hepatologist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Endoscopy & Colonoscopy Procedures",
        "Liver Diseases, Jaundice & Cirrhosis",
        "Acid Reflux (GERD), Gastritis & Ulcers",
        "IBD, Colitis & Chronic Digestive Disorders",
      ],
      bio: "Dr. S.T. Rajaneesh Reddy specializes in diseases of the esophagus, stomach, intestines, liver, pancreas, and biliary system, offering advanced diagnostic and therapeutic endoscopic solutions.",
    },

    // Nephrology
    {
      id: "dr-m-v-k-hareesh",
      name: "Dr. M.V.K. Hareesh",
      designation: "Consultant Nephrologist",
      department: "Nephrology",
      qualifications: "DM Nephro",
      experience: "Consultant Nephrologist & Renal Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:00 PM",
      status: "Specialist",
      specialties: [
        "Chronic Kidney Disease (CKD) Management",
        "Hemodialysis & Peritoneal Dialysis Supervision",
        "Diabetic Nephropathy & Glomerulonephritis",
        "Acute Kidney Injury & Electrolyte Imbalances",
      ],
      bio: "Dr. M.V.K. Hareesh provides comprehensive kidney care, managing chronic kidney conditions, dialysis therapies, and systemic illnesses impacting renal function.",
    },
    {
      id: "dr-v-badarinath-reddy",
      name: "Dr. V. Badarinath Reddy",
      designation: "Consultant Nephrologist",
      department: "Nephrology",
      qualifications: "MD, DNB",
      experience: "Consultant Nephrologist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 09:30 AM – 01:00 PM & 04:30 PM – 07:30 PM",
      status: "Specialist",
      specialties: [
        "Hypertension-Induced Renal Disorders",
        "Kidney Stone Evaluation & Medical Management",
        "Proteinuria & Hematuria Investigations",
        "Renal Replacement Therapies",
      ],
      bio: "Dr. V. Badarinath Reddy is dedicated to early detection and focused treatment of renal diseases, helping preserve kidney health and overseeing hemodialysis.",
    },

    // E.N.T.
    {
      id: "dr-p-lakshmi-narasimha-rao",
      name: "Dr. P. Lakshmi Narasimha Rao",
      designation: "Senior Consultant E.N.T. Surgeon",
      department: "E.N.T.",
      qualifications: "MS (E.N.T)",
      experience: "Senior Consultant Ear, Nose & Throat Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Microscopic Ear Surgeries & Hearing Loss Care",
        "Endoscopic Sinus Surgery (FESS) & DNS Correction",
        "Tonsillectomy, Adenoids & Snoring Evaluation",
        "Voice & Throat Disorder Management",
      ],
      bio: "Dr. P. Lakshmi Narasimha Rao has extensive clinical and surgical experience in treating conditions affecting the ears, nose, throat, head, and neck.",
    },
    {
      id: "dr-krishna-sai",
      name: "Dr. Krishna Sai",
      designation: "Consultant E.N.T. Surgeon",
      department: "E.N.T.",
      qualifications: "DNB (E.N.T)",
      experience: "Consultant Ear, Nose & Throat Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:30 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Allergic Rhinitis, Sinusitis & Nasal Polyps",
        "Vertigo & Balance Disorders",
        "Ear Infections & Tinnitus Relief",
        "Diagnostic Endoscopic ENT Screenings",
      ],
      bio: "Dr. Krishna Sai provides precise diagnostic evaluations and surgical interventions for sinusitis, chronic ear infections, balance issues, and allergic airway disorders.",
    },

    // Orthopedic
    {
      id: "dr-m-diwakar",
      name: "Dr. M. Diwakar",
      designation: "Consultant Spine & Orthopedic Surgeon",
      department: "Orthopedic",
      qualifications: "MS Ortho & Spine",
      experience: "Consultant Orthopedic & Spine Surgeon",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Spine Decompression, Disc & Lumbar Surgeries",
        "Complex Trauma, Bone Fractures & Plaster Care",
        "Chronic Back Pain, Sciatica & Neck Stiffness",
        "Minimally Invasive Spine Procedures",
      ],
      bio: "Dr. M. Diwakar specializes in spine health and advanced orthopedic surgery, helping patients overcome debilitating back pain, disc herniations, and accidental trauma.",
    },
    {
      id: "dr-shanthi-swaroop",
      name: "Dr. Shanthi Swaroop",
      designation: "Consultant Orthopedic Surgeon",
      department: "Orthopedic",
      qualifications: "MS Ortho",
      experience: "Senior Consultant Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 09:30 AM – 01:00 PM & 04:30 PM – 08:00 PM",
      status: "Specialist",
      specialties: [
        "Joint Replacement (Knee & Hip Arthroplasty)",
        "Arthritis Management & Joint Preserving Procedures",
        "Sports Injuries, Ligament Tears (ACL) & Sprains",
        "Accidental Bone Fracture Fixation",
      ],
      bio: "Dr. Shanthi Swaroop provides expert orthopedic care with an emphasis on joint reconstruction, fracture management, and restoring mobility for patients of all ages.",
    },
    {
      id: "dr-raghavendra-raju",
      name: "Dr. Raghavendra Raju",
      designation: "Consultant Orthopedic Surgeon",
      department: "Orthopedic",
      qualifications: "MS Ortho",
      experience: "Consultant Orthopedic Trauma Specialist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:30 AM – 02:00 PM & 05:30 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Trauma & Multiple Fracture Management",
        "Shoulder, Elbow & Hand Orthopedic Surgeries",
        "Pediatric Orthopedics & Deformity Correction",
        "Osteoporosis & Bone Mineral Density Care",
      ],
      bio: "Dr. Raghavendra Raju is dedicated to trauma care, bone healing, and joint restoration, offering both surgical and non-surgical treatments for musculoskeletal conditions.",
    },

    // Pulmonology
    {
      id: "dr-yashovardhan",
      name: "Dr. Yashovardhan",
      designation: "Consultant Pulmonologist & Chest Physician",
      department: "Pulmonology",
      qualifications: "MD Pulmonology",
      experience: "Consultant Pulmonologist & Respiratory Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:00 PM",
      status: "Specialist",
      specialties: [
        "Asthma, Allergy & COPD Management",
        "Tuberculosis (TB) Diagnosis & Complete Care",
        "Pneumonia, Bronchitis & Chronic Cough",
        "Sleep Apnea, Snoring & Pulmonary Function Testing",
      ],
      bio: "Dr. Yashovardhan is an experienced chest physician and pulmonology specialist offering dedicated diagnosis, allergy screening, and management for acute and chronic respiratory conditions.",
    },

    // Anesthesia & Intensivist
    {
      id: "dr-v-gowtham",
      name: "Dr. V. Gowtham",
      designation: "Consultant Anesthesiologist & Intensivist",
      department: "Anesthesia & Intensivist",
      qualifications: "MD",
      experience: "Senior Consultant Anesthesiologist & Critical Care Specialist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 09:00 AM – 05:00 PM (24/7 On-Call for OT & ICU)",
      status: "Specialist",
      specialties: [
        "Surgical Anesthesia & Perioperative Management",
        "Intensive Care Unit (ICU) & Critical Care",
        "Acute & Chronic Pain Management",
        "Emergency Resuscitation & Airway Support",
      ],
      bio: "Dr. V. Gowtham specializes in surgical anesthesia and intensive care management, providing expert life support and perioperative stability for complex surgical and critically ill patients.",
    },

    // Oncology
    {
      id: "dr-sudheer",
      name: "Dr. Sudheer",
      designation: "Consultant Medical Oncologist",
      department: "Oncology",
      qualifications: "DM Oncology",
      experience: "Consultant Medical Oncologist & Cancer Care Specialist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 07:30 PM",
      status: "Specialist",
      specialties: [
        "Chemotherapy & Targeted Immunotherapy",
        "Cancer Screening, Staging & Diagnosis",
        "Solid Tumors & Hematological Care",
        "Palliative Cancer Care & Symptom Relief",
      ],
      bio: "Dr. Sudheer provides compassionate and evidence-based cancer consultations, guiding patients through early detection, chemotherapy regimens, and supportive cancer care.",
    },

    // Neurology
    {
      id: "dr-thirupati-kedar",
      name: "Dr. Thirupati Kedar",
      designation: "Consultant Neurologist",
      department: "Neurology",
      qualifications: "DM Neuro",
      experience: "Senior Consultant Neurologist & Stroke Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Acute Brain Stroke & Paralysis Management",
        "Epilepsy, Seizures & Loss of Consciousness",
        "Chronic Headaches, Migraine & Neuropathy",
        "Movement Disorders, Parkinson's & Memory Loss",
      ],
      bio: "Dr. Thirupati Kedar specializes in the diagnosis and management of nervous system conditions, offering advanced treatment for stroke, epilepsy, migraines, and peripheral nerve disorders.",
    },

    // Urology
    {
      id: "dr-bhanu-kiran",
      name: "Dr. Bhanu Kiran",
      designation: "Consultant Urologist & Andrologist",
      department: "Urology",
      qualifications: "MS, MCH (Urology)",
      experience: "Consultant Urologist & Endourologist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Kidney, Ureter & Bladder Stones (Laser & Endourology)",
        "Prostate Enlargement (BPH) & TURP Surgeries",
        "Urinary Tract Infections & Incontinence Care",
        "Men's Health & Male Fertility Care",
      ],
      bio: "Dr. Bhanu Kiran provides advanced clinical and surgical urology care, specializing in modern laser treatments for kidney stones, prostate health, and urinary tract disorders.",
    },

    // General Surgery
    {
      id: "dr-sai-swaroop",
      name: "Dr. Sai Swaroop",
      designation: "Consultant General & Laparoscopic Surgeon",
      department: "General Surgery",
      qualifications: "MS General Surgery",
      experience: "Senior Consultant General & Laparoscopic Surgeon",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      status: "Specialist",
      specialties: [
        "Laparoscopic Appendix & Gallbladder Removals",
        "Hernia Repairs (Inguinal, Umbilical, Incisional)",
        "Piles, Fissures, Fistula & Modern Proctology",
        "Daycare Surgeries, Cyst & Lipoma Excisions",
      ],
      bio: "Dr. Sai Swaroop specializes in keyhole laparoscopic surgeries, offering prompt surgical recovery, minimal pain, and expert care for digestive and abdominal surgical conditions.",
    },

    // Psychiatry
    {
      id: "dr-v-sashanka",
      name: "Dr. V. Sashanka",
      designation: "Consultant Psychiatrist & Behavioral Specialist",
      department: "Psychiatry",
      qualifications: "MD Psychiatry",
      experience: "Consultant Psychiatrist & Mental Health Specialist",
      image: "https://images.unsplash.com/photo-1594824813583-057088bdf20a?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1594824813583-057088bdf20a?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 04:30 PM – 07:30 PM",
      status: "Specialist",
      specialties: [
        "Depression, Anxiety & Panic Disorders",
        "Stress Management, Sleep Disorders & Insomnia",
        "OCD, Phobias & Mood Stability Support",
        "Addiction De-addiction & Counseling Support",
      ],
      bio: "Dr. V. Sashanka provides compassionate, confidential psychiatric evaluations and treatments, helping individuals overcome anxiety, depression, stress, and behavioral health challenges.",
    },

    // Dermatology
    {
      id: "dr-sunil",
      name: "Dr. Sunil",
      designation: "Consultant Dermatologist & Cosmetologist",
      department: "Dermatology",
      qualifications: "MD Dermatology",
      experience: "Consultant Dermatologist & Skin Specialist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:00 PM",
      status: "Specialist",
      specialties: [
        "Skin Allergy, Eczema & Psoriasis Care",
        "Acne, Scars & Pigmentation Treatments",
        "Hair Fall & Scalp Disorders (Trichology)",
        "Fungal, Bacterial & Viral Skin Infections",
      ],
      bio: "Dr. Sunil specializes in comprehensive clinical dermatology, providing targeted diagnoses and therapies for chronic skin ailments, allergic reactions, hair fall, and aesthetic skincare.",
    },
  ],

  // Verified Hospital Specialities
  specialities: [
    {
      id: "internal-medicine",
      name: "Internal Medicine",
      category: "General & Adult Medicine",
      iconName: "Stethoscope",
      shortDescription:
        "Comprehensive adult healthcare, management of chronic conditions like diabetes and hypertension, fever, and inpatient medical care.",
      overview:
        "Internal Medicine focuses on the prevention, diagnosis, and non-surgical treatment of adult diseases. Led by Founder & Managing Director Dr. D. Surya Prakash Chowdary, our department provides compassionate, holistic medical guidance for acute illnesses, chronic metabolic disorders, and hospital inpatient management.",
      conditions: [
        "Diabetes mellitus, blood sugar control & complications.",
        "Hypertension, blood pressure monitoring & lifestyle care.",
        "High cholesterol and cardiovascular metabolic risk factors.",
        "Seasonal fevers, viral infections, dengue & typhoid care.",
        "Infectious diseases, cough, cold, chest infections & asthma.",
        "Digestive upsets, weakness, fatigue, and multisystem health problems.",
      ],
      services: [
        "Comprehensive adult health consultations & routine checks.",
        "Long-term chronic disease management & medication reviews.",
        "Inpatient observation and medical stabilization care.",
        "Preventive diagnostic screening & lifestyle counsel.",
        "Pre-operative medical fitness evaluations.",
      ],
      whenToConsult:
        "Consult for persistent fevers, uncontrolled blood sugar or BP levels, unexplained fatigue, adult illnesses, or when you need trusted general physician guidance.",
      consultants: [
        {
          name: "Dr. D. Surya Prakash Chowdary",
          qualifications: "M.D. Internal Medicine (Manipal)",
        },
      ],
    },
    {
      id: "cardiology",
      name: "Cardiology",
      category: "Heart & Vascular",
      iconName: "HeartPulse",
      shortDescription:
        "Comprehensive cardiac care, including evaluation of heart conditions, cardiovascular risk assessment, and guidance on heart health.",
      overview:
        "The Cardiology Department focuses on the assessment and management of conditions affecting the heart and blood vessels. Doctors evaluate symptoms, medical history, and relevant investigations to recommend appropriate care.",
      conditions: [
        "High blood pressure and high cholesterol.",
        "Coronary artery disease.",
        "Irregular heartbeat.",
        "Heart failure and related symptoms.",
        "Chest discomfort and breathlessness requiring cardiac assessment.",
      ],
      services: [
        "Cardiovascular risk assessment.",
        "Cardiology consultations.",
        "Review of ECG, echocardiography, and other reports when available.",
        "Medical management and follow-up guidance.",
        "Recommendations for further cardiac investigations when needed.",
      ],
      whenToConsult:
        "Consult a doctor for recurring chest discomfort, palpitations, unexplained breathlessness, or persistent cardiovascular risk factors. Severe chest pain or sudden breathing difficulty requires emergency assessment.",
      consultants: [
        { name: "Dr. K. Vamsi Krishna", qualifications: "MD, DM (OSM)" },
        { name: "Dr. K. Spandana", qualifications: "MD, DM" },
      ],
    },
    {
      id: "gastroenterology",
      name: "Gastroenterology",
      category: "Digestive & Liver",
      iconName: "Activity",
      shortDescription:
        "Specialist evaluation of digestive disorders affecting the stomach, intestines, liver, and related organs.",
      overview:
        "Gastroenterology focuses on the assessment and management of digestive system conditions. The specialist reviews symptoms, medical history, and relevant investigations to recommend appropriate treatment.",
      conditions: [
        "Acidity, heartburn, and acid reflux.",
        "Abdominal pain and bloating.",
        "Persistent constipation or diarrhoea.",
        "Liver-related conditions.",
        "Selected intestinal disorders.",
        "Digestive symptoms requiring further investigation.",
      ],
      services: [
        "Gastroenterology consultations.",
        "Assessment of digestive symptoms.",
        "Review of laboratory and imaging reports.",
        "Recommendations for appropriate investigations.",
        "Treatment planning and follow-up.",
      ],
      whenToConsult:
        "Consider a consultation for persistent digestive discomfort, recurring acidity, unexplained changes in bowel habits, or ongoing abdominal symptoms.",
      consultants: [
        { name: "Dr. S.T. Rajaneesh Reddy", qualifications: "DM Gastro" },
      ],
    },
    {
      id: "nephrology",
      name: "Nephrology",
      category: "Kidney & Dialysis",
      iconName: "Shield",
      shortDescription:
        "Specialized medical care for kidney conditions, kidney function monitoring, and related health concerns.",
      overview:
        "Nephrology focuses on the medical assessment and management of kidney disorders. Diabetes, high blood pressure, and other medical conditions can affect kidney health.",
      conditions: [
        "Chronic kidney disease.",
        "Reduced kidney function.",
        "Protein or blood in urine.",
        "Kidney-related complications of diabetes.",
        "Kidney-related complications of hypertension.",
        "Fluid and electrolyte imbalances.",
      ],
      services: [
        "Kidney health consultations.",
        "Review of blood and urine tests.",
        "Assessment of kidney function.",
        "Monitoring and management guidance.",
        "Coordination with other specialists when needed.",
      ],
      whenToConsult:
        "Seek medical advice for abnormal kidney test results, persistent urine abnormalities, or medical conditions that may affect kidney function.",
      consultants: [
        { name: "Dr. M.V.K. Hareesh", qualifications: "DM Nephro" },
        { name: "Dr. V. Badarinath Reddy", qualifications: "MD, DNB" },
      ],
    },
    {
      id: "ent",
      name: "E.N.T.",
      category: "Ear, Nose & Throat",
      iconName: "Stethoscope",
      shortDescription:
        "Medical evaluation and treatment of conditions affecting the ears, nose, throat, and related structures.",
      overview:
        "E.N.T. care focuses on hearing, balance, nasal breathing, sinus, throat, and voice-related concerns. The specialist evaluates symptoms and recommends appropriate treatment.",
      conditions: [
        "Ear pain and ear infections.",
        "Hearing difficulties.",
        "Sinusitis and nasal congestion.",
        "Allergic nasal symptoms.",
        "Throat pain and recurring tonsil problems.",
        "Voice and swallowing concerns.",
      ],
      services: [
        "Ear, nose, and throat consultations.",
        "Clinical examination.",
        "Assessment of hearing and nasal symptoms.",
        "Treatment recommendations.",
        "Further investigation or procedure planning when indicated.",
      ],
      whenToConsult:
        "Consult an E.N.T. specialist for persistent ear pain, hearing changes, recurring sinus symptoms, or ongoing throat discomfort.",
      consultants: [
        { name: "Dr. P. Lakshmi Narasimha Rao", qualifications: "MS (E.N.T)" },
        { name: "Dr. Krishna Sai", qualifications: "DNB (E.N.T)" },
      ],
    },
    {
      id: "orthopedic",
      name: "Orthopedic",
      category: "Bones & Joints",
      iconName: "Activity",
      shortDescription:
        "Care for bone, joint, muscle, and spine conditions, including injuries and movement-related problems.",
      overview:
        "Orthopedics focuses on the musculoskeletal system, including bones, joints, muscles, tendons, ligaments, and the spine. Specialists evaluate pain, injuries, and mobility limitations.",
      conditions: [
        "Bone fractures and injuries.",
        "Knee, shoulder, and other joint pain.",
        "Arthritis-related symptoms.",
        "Back and neck pain.",
        "Sports injuries.",
        "Selected spine and mobility conditions.",
      ],
      services: [
        "Orthopedic consultations.",
        "Assessment of joint and bone conditions.",
        "Review of X-rays and other imaging reports.",
        "Recommendations for medical or surgical management.",
        "Recovery and rehabilitation guidance.",
      ],
      whenToConsult:
        "Consult an orthopedic specialist for persistent joint pain, reduced mobility, recurring back pain, or suspected bone or ligament injuries.",
      consultants: [
        { name: "Dr. M. Diwakar", qualifications: "MS Ortho & Spine" },
        { name: "Dr. Shanthi Swaroop", qualifications: "MS Ortho" },
        { name: "Dr. Raghavendra Raju", qualifications: "MS Ortho" },
      ],
    },
    {
      id: "pulmonology",
      name: "Pulmonology",
      category: "Chest & Lungs",
      iconName: "HeartPulse",
      shortDescription:
        "Specialist care for respiratory conditions affecting the lungs, airways, and breathing.",
      overview:
        "Pulmonology focuses on the assessment and management of respiratory diseases. The specialist evaluates breathing difficulties, persistent cough, and other lung-related symptoms.",
      conditions: [
        "Asthma.",
        "Persistent or recurring cough.",
        "Selected respiratory infections.",
        "Chronic obstructive pulmonary disease (COPD).",
        "Breathlessness requiring investigation.",
        "Selected chronic lung conditions.",
      ],
      services: [
        "Respiratory consultations.",
        "Assessment of breathing-related symptoms.",
        "Review of relevant test results.",
        "Recommendations for further investigations.",
        "Treatment and follow-up planning.",
      ],
      whenToConsult:
        "Seek consultation for persistent cough, recurring wheezing, or unexplained breathlessness. Severe breathing difficulty requires emergency medical attention.",
      consultants: [
        { name: "Dr. Sudhindra", qualifications: "MD TB & RD" },
        { name: "Dr. K. Muralidhar Reddy", qualifications: "DNB" },
      ],
    },
    {
      id: "anesthesia-intensivist",
      name: "Anesthesia & Intensivist",
      category: "Critical Care & Anesthesia",
      iconName: "AlertTriangle",
      shortDescription:
        "Medical support for anesthesia, patient monitoring, perioperative safety, and critical care when required.",
      overview:
        "Anesthesiology focuses on anesthesia, pain control, and patient safety during surgical and other appropriate medical procedures. Critical care involves the close monitoring and management of seriously ill patients.",
      conditions: [
        "Pre-anesthesia assessment.",
        "Anesthesia planning for eligible procedures.",
        "Monitoring of vital signs during procedures.",
        "Perioperative pain management.",
        "Assessment and stabilization of critically ill patients.",
        "Coordination with surgical and medical teams.",
      ],
      services: [
        "Before a procedure, the anesthesia team reviews the patient's medical history, medications, allergies, and relevant investigations to plan appropriate care.",
        "Continuous patient vital monitoring and hemodynamic stabilization.",
        "Intensive care management for post-surgical and critical patients.",
      ],
      whenToConsult:
        "Anesthesia assessment may be required before a planned procedure. Intensive care may be needed when a patient's condition requires close monitoring or advanced medical support.",
      consultants: [
        { name: "Dr. V. Gowtham", qualifications: "MD" },
      ],
    },
    {
      id: "oncology",
      name: "Oncology",
      category: "Cancer Care",
      iconName: "Shield",
      shortDescription:
        "Specialist evaluation and treatment planning for cancer, with care tailored to the patient's diagnosis.",
      overview:
        "Oncology focuses on the assessment and management of cancer. Treatment planning depends on the cancer type, stage, investigation results, and the patient's overall health.",
      conditions: [
        "Assessment of suspected or diagnosed cancers.",
        "Review of biopsy and imaging reports.",
        "Evaluation of disease stage where appropriate.",
        "Discussion of suitable treatment options.",
        "Follow-up and supportive care planning.",
      ],
      services: [
        "Oncology consultations.",
        "Review of pathology and imaging reports.",
        "Treatment planning and coordination.",
        "Monitoring during treatment where available.",
        "Follow-up and supportive care guidance.",
      ],
      whenToConsult:
        "Seek specialist advice when referred for an abnormal investigation, suspected malignancy, or follow-up after a cancer diagnosis.",
      consultants: [
        { name: "Dr. Vishnupriya", qualifications: "DM Oncology" },
      ],
    },
    {
      id: "neurology",
      name: "Neurology",
      category: "Brain & Nerves",
      iconName: "Eye",
      shortDescription:
        "Specialist assessment of disorders affecting the brain, spinal cord, nerves, and nervous system.",
      overview:
        "Neurology focuses on conditions affecting the nervous system. Specialists assess neurological symptoms, perform clinical examinations, and recommend appropriate investigations or treatment.",
      conditions: [
        "Migraine and recurring headaches.",
        "Seizures and epilepsy.",
        "Numbness and tingling.",
        "Selected nerve disorders.",
        "Tremors and movement disorders.",
        "Certain memory and neurological problems.",
      ],
      services: [
        "Neurological consultations.",
        "Assessment of neurological symptoms.",
        "Review of brain imaging and other reports.",
        "Recommendations for further testing.",
        "Treatment and follow-up guidance.",
      ],
      whenToConsult:
        "Seek consultation for recurring headaches, unexplained numbness, tremors, or seizures. Sudden facial drooping, one-sided weakness, or difficulty speaking requires immediate emergency care.",
      consultants: [
        { name: "Dr. Thirupati Kedar", qualifications: "DM Neuro" },
      ],
    },
    {
      id: "urology",
      name: "Urology",
      category: "Urinary & Andrology",
      iconName: "Activity",
      shortDescription:
        "Specialist care for urinary tract conditions and selected male reproductive health concerns.",
      overview:
        "Urology focuses on the urinary system, including the kidneys, ureters, bladder, and urethra, as well as selected conditions affecting the male reproductive system.",
      conditions: [
        "Kidney and urinary stones.",
        "Urinary tract symptoms.",
        "Difficulty or discomfort during urination.",
        "Selected bladder conditions.",
        "Prostate-related urinary problems.",
        "Certain male reproductive health concerns.",
      ],
      services: [
        "Urology consultations.",
        "Assessment of urinary symptoms.",
        "Review of urine tests and imaging.",
        "Recommendations for appropriate treatment.",
        "Follow-up and procedural planning where indicated.",
      ],
      whenToConsult:
        "Consult a urologist for recurring urinary symptoms, suspected urinary stones, or persistent difficulty passing urine. Inability to urinate requires urgent medical assessment.",
      consultants: [
        { name: "Dr. Y. Harinath Reddy", qualifications: "MS, MCH (Urology)" },
        { name: "Dr. B. Rajashekar", qualifications: "MS, MCH (Urology)" },
      ],
    },
    {
      id: "general-surgery",
      name: "General Surgery",
      category: "Surgical Care",
      iconName: "Scissors",
      shortDescription:
        "Surgical evaluation and management of selected abdominal, soft-tissue, and other conditions requiring surgical assessment.",
      overview:
        "General surgery involves evaluating conditions that may require a surgical procedure or another appropriate treatment approach. The surgeon reviews symptoms, clinical findings, and investigations before recommending a plan.",
      conditions: [
        "Hernias.",
        "Selected gallbladder conditions.",
        "Certain abdominal conditions.",
        "Selected skin and soft-tissue lumps.",
        "Wounds and conditions requiring surgical assessment.",
      ],
      services: [
        "General surgical consultations.",
        "Pre-operative assessment.",
        "Review of investigations.",
        "Discussion of surgical and non-surgical options.",
        "Post-operative follow-up guidance.",
      ],
      whenToConsult:
        "Consult a surgeon when referred for a condition that may need surgery or when a persistent lump, hernia, or abdominal problem requires evaluation. Severe abdominal pain requires urgent assessment.",
      consultants: [
        { name: "Dr. Sai Swaroop", qualifications: "MS General Surgery" },
        { name: "Dr. Sushanth", qualifications: "MS General Surgery" },
      ],
    },
    {
      id: "psychiatry",
      name: "Psychiatry",
      category: "Mental Health",
      iconName: "Stethoscope",
      shortDescription:
        "Professional assessment and treatment of mental health conditions with an emphasis on compassionate, individualized care.",
      overview:
        "Psychiatry focuses on assessing, diagnosing, and managing mental health conditions. The psychiatrist considers symptoms, personal history, daily functioning, and other relevant factors when developing a care plan.",
      conditions: [
        "Anxiety disorders.",
        "Depression and persistent low mood.",
        "Sleep-related concerns associated with mental health.",
        "Stress-related difficulties.",
        "Selected mood disorders.",
        "Other mental health concerns requiring specialist assessment.",
      ],
      services: [
        "Psychiatric consultations.",
        "Assessment of symptoms and mental well-being.",
        "Individualized treatment planning.",
        "Medication management when appropriate.",
        "Follow-up and ongoing care guidance.",
      ],
      whenToConsult:
        "Consider professional support when emotional distress, anxiety, changes in mood, or sleep difficulties persist and interfere with everyday life.",
      consultants: [
        { name: "Dr. V. Sashanka", qualifications: "MD Psychiatry" },
      ],
    },
  ],

  // Verified Hospital Services
  services: [
    {
      id: "medical-consultations",
      name: "Doctor Consultations (OPD & Admitted Care)",
      iconName: "UserCheck",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Consult experienced specialist physicians for everyday health checks, seasonal fevers, and long-term care.",
      details: "Morning and evening OPD consultation hours with comfortable waiting areas, polite nursing care, and clean hospital rooms for patients who need overnight observation.",
    },
    {
      id: "surgical-care",
      name: "Clean & Modern Operation Theatres",
      iconName: "ShieldPlus",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Equipped sterile operation rooms for general, keyhole, and orthopedic surgeries.",
      details: "Strict infection control, modern surgical lights, heart and oxygen monitors, and gentle anesthesia for your safety during planned and urgent operations.",
    },
    {
      id: "emergency-assistance",
      name: "24/7 Emergency & Casualty",
      iconName: "Ambulance",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Immediate help day and night for accidents, sudden pain, breathing trouble, or extreme fever.",
      details: "Always open with on-duty casualty doctors and trained nursing staff ready to provide fast first-aid, oxygen, and emergency stabilization.",
    },
    {
      id: "inpatient-rooms",
      name: "Inpatient Rooms & Critical Care Observation",
      iconName: "BedDouble",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Comfortable, clean general wards, private rooms, and monitored observation beds.",
      details: "Equipped with patient monitors, medical oxygen lines, and 24/7 dedicated nursing staff to ensure comfortable and safe inpatient recovery.",
    },
    {
      id: "inhouse-pharmacy",
      name: "24/7 In-House Pharmacy",
      iconName: "Pill",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Genuine medicines, injections, and surgical supplies available round the clock.",
      details: "Located directly inside the hospital campus so patients and relatives can collect prescribed medicines immediately without searching outside.",
    },
    {
      id: "rehab-wellness",
      name: "Physiotherapy & Mobility Recovery",
      iconName: "HeartPulse",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Gentle exercises guided by trained therapists to relieve joint stiffness and rebuild strength.",
      details: "Personalized exercise sessions that help you stand, walk, bend, and move with comfort after injury, fracture, or surgery.",
    },
    {
      id: "patient-assistance",
      name: "Patient Desk & Room Assistance",
      iconName: "HelpCircle",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Helpful staff to assist with tokens, doctor visits, hospital rooms, and medical reports.",
      details: "Our front desk coordinators guide you from the moment you arrive, answer billing questions openly, and arrange smooth discharge when you are ready to go home.",
    },
  ],

  // Verified Diagnostics & Laboratory Offerings
  diagnostics: [
    {
      id: "clinical-pathology",
      name: "Blood & Urine Testing (Pathology Lab)",
      iconName: "FlaskConical",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Accurate blood tests, sugar tests, and urine tests to diagnose fevers, infections, and organ health.",
      testsIncluded: [
        "Complete Blood Count (CBC) & Infection Checks",
        "Fasting & Post-Meal Blood Sugar",
        "HbA1c (3-Month Diabetes Average)",
        "Cholesterol & Liver Health Checks (LFT)",
        "Kidney Health Test (Creatinine & Urea)",
        "Routine Urine Analysis",
      ],
      preparationNotice: "For fasting blood sugar and cholesterol tests, do not eat food for 10 to 12 hours overnight. Drinking plain water is allowed and encouraged.",
    },
    {
      id: "ultrasound-imaging",
      name: "Ultrasound Sonography Scan",
      iconName: "Scan",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Safe, painless sound-wave scan to examine the stomach, liver, kidneys, and urinary system.",
      testsIncluded: [
        "Whole Stomach & Pelvis Ultrasound",
        "Kidney, Bladder & Urinary Tract Scan (KUB)",
        "Gallbladder Stones & Liver Scan",
        "Soft Tissue & Swelling Evaluation",
      ],
      preparationNotice: "For pelvis and kidney scans, drink 3 to 4 glasses of water 1 hour before your scan and avoid urinating so your bladder is full. For stomach scans, come on an empty stomach (fasting for 6 hours).",
    },
    {
      id: "digital-xray",
      name: "Digital X-Ray Radiography",
      iconName: "Layers",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Quick, low-radiation digital imaging to check for broken bones, chest infections, and joints.",
      testsIncluded: [
        "Chest X-Ray (Lungs & Heart Shadow)",
        "Bone Fracture X-Rays (Arms, Legs, Hands, Feet)",
        "Spine, Neck & Lower Back Radiographs",
        "Knee, Hip & Shoulder Joint X-Rays",
      ],
      preparationNotice: "No fasting needed. Please remove metal jewelry, coins, and belts before your X-ray. Please inform our technician beforehand if you might be pregnant.",
    },
    {
      id: "ecg-cardiac",
      name: "ECG Heart Rhythm Test",
      iconName: "Activity",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "A quick, painless 5-minute test that records your heart's electrical rhythm and beats.",
      testsIncluded: [
        "Standard 12-Lead Resting Heart ECG",
        "Emergency Heart Rhythm Check for Chest Pain",
        "Routine Fitness Check Before Planned Surgery",
      ],
      preparationNotice: "No fasting is required. Wear comfortable loose clothing so our nurse can place small sensor stickers on your chest, wrists, and ankles.",
    },
    {
      id: "preventive-packages",
      name: "Full-Body Health Checkup Packages",
      iconName: "CheckCircle",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=80",
      shortDesc: "Coordinated checkup bundles to examine your general health, blood sugar, liver, and kidneys.",
      testsIncluded: [
        "General Adult Wellness Blood & Urine Panel",
        "Diabetes & Kidney Health Screening",
        "Senior Citizen Preventive Health Package",
        "Pre-Surgery Safety & Fitness Tests",
      ],
      preparationNotice: "Please arrive between 8:00 AM and 10:30 AM with 10 to 12 hours of overnight fasting. You may drink plain water.",
    },
  ],

  // 4 Steps Patient Journey
  patientJourney: [
    {
      step: "01",
      title: "Explore Our Care",
      desc: "Find the medical department, doctor, or test you need on our website or by calling our desk.",
    },
    {
      step: "02",
      title: "Select Doctor or Service",
      desc: "Choose your preferred specialist doctor or tell us what health symptoms you are experiencing.",
    },
    {
      step: "03",
      title: "Book Your Slot",
      desc: "Fill our simple appointment form online or call our friendly reception team directly.",
    },
    {
      step: "04",
      title: "Confirm & Visit Us",
      desc: "Our reception desk confirms your timing and welcomes you at our Sai Nagar hospital campus.",
    },
  ],

  // Emergency Instructions & Guidelines
  emergencyGuidance: {
    notice: "Surya Hospital provides 24/7 emergency care for sudden illnesses and accidental injuries in Sai Nagar, Anantapur.",
    helplineText: "Call +91 85009 04999 immediately for emergency guidance and ambulance coordination.",
    nationalEmergencyNotice: "For life-threatening national emergencies requiring government police, fire, or government ambulance dispatch across India, dial 112 directly. Note: 112 is operated by Government of India emergency services.",
    whenToVisit: [
      "Severe chest pain, heavy pressure, or suspected heart attack",
      "Sudden breathing difficulty, choking, or gasping for air",
      "Road accident injuries, deep cuts, heavy bleeding, or broken bones",
      "Sudden fainting, collapse, loss of balance, or unconsciousness",
      "Very high fever with body shaking, seizures, or extreme weakness",
      "Sudden severe stomach pain requiring urgent doctor evaluation",
      "Accidental poisoning, chemical contact, or severe allergic reaction",
    ],
    whatToBring: [
      "Any photo ID card (Aadhaar or Driving License)",
      "Past medical files, prescription slips, or test reports if available",
      "The names of regular daily medicines you take",
      "Any health insurance card or policy document you have",
    ],
  },

  // Empaneled Insurance Companies & TPAs (Slide 5 Exact Reference)
  insurancePartners: [
    { id: "acko", name: "ACKO Insurance", logo: "/images/insurance/acko.png" },
    { id: "fhpl", name: "FHPL — Family Health Plan Insurance TPA", logo: "/images/insurance/fhpl.png" },
    { id: "ericson", name: "Ericson Insurance TPA Pvt. Ltd.", logo: "/images/insurance/ericson.png" },
    { id: "good-health", name: "Good Health TPA", logo: "/images/insurance/good-health.png" },
    { id: "akna", name: "AKNA", logo: "/images/insurance/akna.png" },
    { id: "paramount-health", name: "Paramount Health", logo: "/images/insurance/paramount-health.png" },
    { id: "mdindia", name: "MDIndia", logo: "/images/insurance/mdindia.png" },
    { id: "vidal-health", name: "Vidal Health", logo: "/images/insurance/vidal-health.png" },
    { id: "medi-assist", name: "Medi Assist", logo: "/images/insurance/medi-assist.png" },
    { id: "new-india-assurance", name: "The New India Assurance Co. Ltd.", logo: "/images/insurance/new-india-assurance.png" },
    { id: "galaxy-health", name: "Galaxy Health Insurance", logo: "/images/insurance/galaxy-health.png" },
    { id: "heritage-health", name: "Heritage Health", logo: "/images/insurance/heritage-health.png" },
    { id: "tata-aig", name: "Tata AIG Insurance", logo: "/images/insurance/tata-aig.png" },
    { id: "hdfc-ergo", name: "HDFC ERGO General Insurance", logo: "/images/insurance/hdfc-ergo.png" },
    { id: "icici-lombard", name: "ICICI Lombard", logo: "/images/insurance/icici-lombard.png" },
    { id: "sbi-general", name: "SBI General Insurance", logo: "/images/insurance/sbi-general.png" },
    { id: "royal-sundaram", name: "Royal Sundaram General Insurance", logo: "/images/insurance/royal-sundaram.png" },
    { id: "digit", name: "Digit Insurance", logo: "/images/insurance/digit.png" },
    { id: "star-health", name: "Star Health Insurance", logo: "/images/insurance/star-health.png" },
    { id: "aditya-birla", name: "Aditya Birla Health Insurance", logo: "/images/insurance/aditya-birla.png" },
    { id: "manipal-cigna", name: "ManipalCigna Health Insurance", logo: "/images/insurance/manipal-cigna.png" },
    { id: "bajaj-allianz", name: "Bajaj Allianz General Insurance", logo: "/images/insurance/bajaj-allianz.png" },
    { id: "health-insurance-tpa", name: "Health Insurance TPA of India Ltd.", logo: "/images/insurance/health-insurance-tpa.png" },
    { id: "universal-sompo", name: "Universal Sompo General Insurance", logo: "/images/insurance/universal-sompo.png" },
  ],
};
