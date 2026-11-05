/**
 * Surya Hospital - Exactly 12 Approved Specialities Manifest
 * 
 * Single source of truth for the Navbar Department Dropdown, Speciality Detail Pages,
 * and hospital department listings.
 * 
 * Exactly 12 Specialities:
 * Medical Department (8):
 *  1. Cardiology
 *  2. Gastroenterology
 *  3. Nephrology
 *  4. E.N.T. (Ear, Nose & Throat)
 *  5. Pulmonology
 *  6. Neurology
 *  7. Medical Oncology
 *  8. Psychiatry
 * 
 * Surgical Department (4):
 *  1. Orthopedics & Spine
 *  2. Urology
 *  3. General & Laparoscopic Surgery
 *  4. Anesthesia & Critical Care
 * 
 * Strict restriction: Do NOT add General Medicine, Pediatrics, Dermatology, Radiology,
 * Plastic Surgery, Obstetrics & Gynecology, or any other speciality outside these 12.
 */

export const APPROVED_SPECIALITIES = [
  // ── MEDICAL DEPARTMENT ──
  {
    slug: "cardiology",
    name: "Cardiology",
    departmentType: "Medical Department",
    iconName: "HeartPulse",
    shortDescription: "Comprehensive heart health evaluations, non-invasive cardiac testing, and 24/7 cardiac emergency care.",
    introduction: "The Cardiology Department at Surya Hospital focuses on keeping your heart strong and healthy. Our experienced cardiologists evaluate heart conditions, guide blood pressure management, and provide rapid emergency care for acute cardiac events.",
    heroImage: "/images/specialities/cardiology.webp",
    imageAlt: "Medical illustration of the human heart and ECG waveform",
    conditions: [
      "High blood pressure (hypertension) and elevated cholesterol levels",
      "Coronary artery disease and chest discomfort",
      "Heart attack and acute cardiac emergencies",
      "Heart failure and chronic cardiac weakness",
      "Irregular heartbeats (arrhythmia) and sudden palpitations",
      "Shortness of breath related to cardiac concerns",
    ],
    services: [
      "Comprehensive heart disease assessment and risk screening",
      "Coronary angiography and angioplasty evaluations",
      "Round-the-clock 24/7 heart attack emergency care",
      "High blood pressure management and lifestyle guidance",
      "Heart failure treatment and long-term care plans",
      "Advanced 2D Echocardiography (Echo) and resting ECG",
    ],
    whenToConsult: [
      "You experience tightness, heaviness, or pain in your chest",
      "You have unexplained shortness of breath during normal daily activities",
      "Your blood pressure remains persistently high despite home monitoring",
      "You feel unusual heart fluttering, dizziness, or rapid pounding beats",
      "You have a family history of heart disease and need a preventive checkup",
    ],
    faqs: [
      {
        question: "What is a 2D Echo test and how does it help?",
        answer: "A 2D Echocardiogram is a painless ultrasound test that creates moving pictures of your heart. It helps our cardiologists assess heart valve function, chamber size, and pumping strength.",
      },
      {
        question: "When should I seek emergency care for chest discomfort?",
        answer: "If you feel sudden, crushing chest pain that radiates to your left arm, jaw, or back, accompanied by sweating or difficulty breathing, call our 24/7 casualty desk immediately at 8500904999.",
      },
      {
        question: "How often should I have my blood pressure checked?",
        answer: "Adults with normal blood pressure should check it at least once a year. If you have been diagnosed with hypertension, regular monthly checks or home monitoring as advised by your doctor is recommended.",
      },
      {
        question: "Do I need to fast before a routine cardiology consultation?",
        answer: "Routine consultations do not require fasting. However, if your doctor has scheduled fasting lipid profile or fasting blood sugar tests, an overnight 10-12 hour fast is needed.",
      },
    ],
    doctors: [
      {
        name: "Dr. K. Vamsi Krishna",
        qualifications: "MD, DM (OSM)",
        designation: "Senior Consultant Interventional Cardiologist",
        experience: "Expert in Angiography, Angioplasty & Cardiac Emergencies",
        opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 08:00 PM",
      },
      {
        name: "Dr. K. Spandana",
        qualifications: "MD, DM",
        designation: "Consultant Cardiologist",
        experience: "Specialist in Non-Invasive Cardiology & 2D Echo",
        opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 04:30 PM – 07:30 PM",
      },
    ],
    relatedSpecialities: ["pulmonology", "nephrology", "anesthesia-critical-care"],
  },

  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    departmentType: "Medical Department",
    iconName: "Activity",
    shortDescription: "Specialist medical care for digestive tract disorders, liver conditions, stomach ulcers, and endoscopic diagnosis.",
    introduction: "The Gastroenterology Department at Surya Hospital provides comprehensive evaluation and medical treatment for conditions affecting the stomach, esophagus, intestines, liver, gallbladder, and pancreas.",
    heroImage: "/images/specialities/gastroenterology.webp",
    imageAlt: "Medical illustration of the digestive system",
    conditions: [
      "Severe acid reflux (GERD), heartburn, and chronic acidity",
      "Gastritis, stomach ulcers, and burning abdominal pain",
      "Liver diseases, hepatitis, fatty liver, and cirrhosis",
      "Jaundice and abnormal liver enzyme tests",
      "Chronic constipation, diarrhoea, and irritable bowel symptoms",
      "Digestive bleeding, black stools, and unexplained vomiting",
    ],
    services: [
      "Diagnostic upper GI endoscopy for stomach and food pipe evaluation",
      "Diagnostic colonoscopy for large intestine and bowel health",
      "Medical treatment for acid reflux (GERD) and peptic ulcers",
      "Comprehensive liver disease and cirrhosis management",
      "Jaundice evaluation and medical stabilization",
      "Preventive dietary counseling for digestive wellness",
    ],
    whenToConsult: [
      "You have persistent heartburn or acid reflux that does not improve with simple antacids",
      "You notice yellowing of the skin or eyes (jaundice)",
      "You experience recurring stomach pain, bloating, or nausea after meals",
      "You observe black stools or traces of blood in your vomit or stool",
      "You have chronic changes in your bowel habits lasting more than two weeks",
    ],
    faqs: [
      {
        question: "Is an endoscopy procedure painful?",
        answer: "No. Endoscopy is performed with a gentle local throat spray and light sedation to ensure you remain comfortable throughout the short 10-15 minute test.",
      },
      {
        question: "What causes recurring acidity and stomach ulcers?",
        answer: "Common factors include H. pylori bacterial infections, frequent painkiller use, stress, smoking, irregular meal timings, and spicy foods. A doctor can pinpoint the exact cause and prescribe healing medications.",
      },
      {
        question: "Can fatty liver disease be reversed?",
        answer: "Early-stage fatty liver can often be successfully reversed with targeted medical guidance, balanced nutrition, weight management, and regular follow-ups.",
      },
      {
        question: "How do I prepare for an upper endoscopy?",
        answer: "You will need to fast (no food or drinks except small sips of water) for at least 6 to 8 hours before the procedure so the stomach remains clear for accurate viewing.",
      },
    ],
    doctors: [
      {
        name: "Dr. S.T. Rajaneesh Reddy",
        qualifications: "DM Gastro",
        designation: "Consultant Medical Gastroenterologist & Hepatologist",
        experience: "Specialist in Endoscopy, Liver Care & Digestive Health",
        opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 08:30 PM",
      },
    ],
    relatedSpecialities: ["general-laparoscopic-surgery", "cardiology", "medical-oncology"],
  },

  {
    slug: "nephrology",
    name: "Nephrology",
    departmentType: "Medical Department",
    iconName: "Shield",
    shortDescription: "Expert kidney health management, hemodialysis supervision, and care for kidney conditions related to diabetes and high blood pressure.",
    introduction: "The Nephrology Department at Surya Hospital is dedicated to preserving kidney function and managing acute and chronic renal disorders. We support patients with evidence-based treatments and supervised dialysis care.",
    heroImage: "/images/specialities/nephrology.webp",
    imageAlt: "Medical illustration of the kidneys and blood vessels",
    conditions: [
      "Chronic kidney disease (CKD) across all clinical stages",
      "Kidney complications caused by long-standing diabetes (diabetic nephropathy)",
      "High blood pressure-related renal damage",
      "Proteinuria (protein in urine) and hematuria (blood in urine)",
      "Fluid retention, swelling in legs and face, and electrolyte imbalances",
      "Medical assessment and monitoring for kidney stones",
    ],
    services: [
      "Comprehensive kidney function monitoring and medical management",
      "Supervised hemodialysis in a sterile, safe clinical setup",
      "Specialized diabetic and hypertensive kidney protection plans",
      "Medical evaluation and prevention strategies for kidney stones",
      "Dietary and fluid intake counseling for kidney patients",
      "Pre-dialysis preparation and vascular access monitoring",
    ],
    whenToConsult: [
      "Your routine blood tests show elevated serum creatinine or blood urea levels",
      "You notice persistent swelling around your eyes, ankles, or feet",
      "Your urine appears frothy, unusually dark, or contains traces of blood",
      "You have had diabetes or high blood pressure for more than 5 years",
      "You experience sudden decrease in your daily urine output",
    ],
    faqs: [
      {
        question: "How does diabetes affect the kidneys?",
        answer: "Over time, high blood sugar levels can damage the delicate filtering units inside the kidneys. Early screening allows nephrologists to start kidney-protecting medications before permanent harm occurs.",
      },
      {
        question: "What is hemodialysis?",
        answer: "Hemodialysis is a safe medical procedure where a specialized machine filters waste products and excess fluid from your blood when your kidneys are unable to do so adequately.",
      },
      {
        question: "Can chronic kidney disease be slowed down?",
        answer: "Yes. With early diagnosis, strict blood pressure and sugar control, dietary modifications, and appropriate medications, the progression of kidney disease can be substantially slowed.",
      },
      {
        question: "What dietary changes do kidney patients need?",
        answer: "Depending on your kidney stage, our specialists will advise you on managing salt, protein, potassium, phosphorus, and daily fluid intake safely.",
      },
    ],
    doctors: [
      {
        name: "Dr. M.V.K. Hareesh",
        qualifications: "DM Nephro",
        designation: "Consultant Nephrologist & Renal Specialist",
        experience: "Specialist in CKD Management & Dialysis Supervision",
        opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:00 PM",
      },
      {
        name: "Dr. V. Badarinath Reddy",
        qualifications: "MD, DNB",
        designation: "Consultant Nephrologist",
        experience: "Focus on Hypertensive Kidney Disorders & Renal Therapies",
        opdTimings: "Mon – Sat: 09:30 AM – 01:00 PM & 04:30 PM – 07:30 PM",
      },
    ],
    relatedSpecialities: ["urology", "cardiology", "anesthesia-critical-care"],
  },

  {
    slug: "ent",
    name: "E.N.T. (Ear, Nose & Throat)",
    departmentType: "Medical Department",
    iconName: "Stethoscope",
    shortDescription: "Specialist diagnosis and treatments for ear problems, nasal allergies, sinus disorders, tonsils, hearing, and balance concerns.",
    introduction: "The E.N.T. Department at Surya Hospital provides expert medical care for conditions affecting the ears, nose, throat, and head and neck. Our specialists diagnose hearing difficulties, chronic sinus infections, and voice disorders.",
    heroImage: "/images/specialities/ent.webp",
    imageAlt: "Medical illustration of the ear, nose, and throat anatomy",
    conditions: [
      "Ear infections, discharge, earwax blockage, and persistent ear pain",
      "Hearing loss, muffled sounds, and ringing in the ears (tinnitus)",
      "Chronic sinusitis, nasal congestion, and nasal polyps",
      "Frequent allergic sneezing and deviated nasal septum (DNS)",
      "Recurring tonsillitis, adenoids, and throat infections",
      "Vertigo, dizziness, balance disorders, and snoring",
    ],
    services: [
      "Microscopic ear surgery and delicate eardrum repair",
      "Functional Endoscopic Sinus Surgery (FESS) for chronic sinusitis",
      "Tonsillectomy and adenoid management for children and adults",
      "Diagnostic video endoscopy for nose, throat, and vocal cords",
      "Vertigo and balance disorder assessment",
      "Allergic rhinitis and medical allergy management",
    ],
    whenToConsult: [
      "You have ear pain, fluid drainage, or sudden reduction in hearing",
      "You experience spinning sensations (vertigo) when turning your head",
      "You have persistent nasal blockage or facial pressure lasting weeks",
      "You or your child suffer from recurring severe throat infections",
      "You have hoarseness in your voice that lasts for more than two weeks",
    ],
    faqs: [
      {
        question: "What is FESS sinus surgery?",
        answer: "Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive procedure performed through the nostrils without external cuts, clearing blocked sinus drainage pathways to restore normal breathing.",
      },
      {
        question: "What causes sudden vertigo or dizziness?",
        answer: "Most vertigo is caused by inner ear conditions such as BPPV or inner ear inflammation. Our E.N.T. specialists can diagnose the specific cause and perform gentle repositioning exercises or medical treatments.",
      },
      {
        question: "When does tonsillitis require surgery?",
        answer: "Surgery (tonsillectomy) is generally considered when a patient suffers from frequent, disabling throat infections each year, or when enlarged tonsils obstruct peaceful night breathing.",
      },
      {
        question: "Can earwax be cleaned safely at home?",
        answer: "You should never insert cotton swabs or sharp objects into your ears, as they push wax deeper and risk puncturing the eardrum. Visit Surya Hospital for safe, gentle earwax removal.",
      },
    ],
    doctors: [
      {
        name: "Dr. P. Lakshmi Narasimha Rao",
        qualifications: "MS (E.N.T)",
        designation: "Senior Consultant E.N.T. Surgeon",
        experience: "Specialist in Microscopic Ear & FESS Sinus Surgeries",
        opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      },
      {
        name: "Dr. Krishna Sai",
        qualifications: "DNB (E.N.T)",
        designation: "Consultant E.N.T. Surgeon",
        experience: "Specialist in Allergy, Sinusitis & Balance Disorders",
        opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:30 PM – 08:30 PM",
      },
    ],
    relatedSpecialities: ["pulmonology", "neurology", "general-laparoscopic-surgery"],
  },

  {
    slug: "pulmonology",
    name: "Pulmonology",
    departmentType: "Medical Department",
    iconName: "HeartPulse",
    shortDescription: "Specialised care for breathing difficulties, asthma, chronic cough, COPD, and lung health assessments.",
    introduction: "The Pulmonology Department at Surya Hospital focuses on breathing health and lung disorders. Our chest physicians diagnose and treat asthma, chronic obstructive pulmonary disease, bronchitis, and respiratory infections.",
    heroImage: "/images/specialities/pulmonology.webp",
    imageAlt: "Medical illustration of the lungs and respiratory system",
    conditions: [
      "Bronchial asthma and wheezing in adults and teenagers",
      "Chronic Obstructive Pulmonary Disease (COPD) and smoker's cough",
      "Persistent cough lasting longer than two to three weeks",
      "Pneumonia, acute chest infections, and bronchitis",
      "Tuberculosis (TB) diagnosis and monitored treatment",
      "Sleep apnea, heavy snoring, and daytime sleepiness",
    ],
    services: [
      "Clinical respiratory consultations and diagnostic evaluation",
      "Pulmonary function testing (PFT / Spirometry)",
      "Asthma and allergy inhaler education and management",
      "COPD care plans and breathing rehabilitation guidance",
      "Complete medical diagnosis and treatment for Tuberculosis (TB)",
      "Oxygen therapy monitoring and emergency respiratory support",
    ],
    whenToConsult: [
      "You have a continuous cough that has lasted for more than two weeks",
      "You hear a whistling or wheezing sound when breathing out",
      "You feel breathless when walking short distances or climbing a flight of stairs",
      "You cough up discolored mucus or traces of blood",
      "You experience disturbed sleep, waking up gasping or choking at night",
    ],
    faqs: [
      {
        question: "What is a spirometry or pulmonary function test?",
        answer: "Spirometry is a simple, non-invasive breathing test. You breathe into a mouthpiece attached to a sensor that measures how much air you can inhale and exhale, helping diagnose asthma and COPD.",
      },
      {
        question: "Are asthma inhalers habit-forming?",
        answer: "No. Inhalers deliver tiny, targeted doses of medication directly into your airways where they are needed, with minimal absorption into the rest of the body. They are safe and recommended for long-term control.",
      },
      {
        question: "What is the difference between asthma and COPD?",
        answer: "Asthma is often triggered by allergies and airway tightness that can be reversed with medication. COPD is a chronic, progressive lung condition typically associated with smoking or dust exposure.",
      },
      {
        question: "Can tuberculosis be completely cured?",
        answer: "Yes. When diagnosed on time and treated with a full, uninterrupted course of prescribed anti-TB medications, tuberculosis can be completely and permanently cured.",
      },
    ],
    doctors: [
      {
        name: "Dr. Sudhindra",
        qualifications: "MD TB & RD",
        designation: "Consultant Pulmonologist & Chest Physician",
        experience: "Specialist in Tuberculosis, Asthma & Respiratory Care",
        opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:00 PM",
      },
      {
        name: "Dr. K. Muralidhar Reddy",
        qualifications: "DNB",
        designation: "Consultant Pulmonologist",
        experience: "Specialist in COPD, Diagnostic Bronchoscopy & ICU Lung Care",
        opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:30 PM – 08:30 PM",
      },
    ],
    relatedSpecialities: ["cardiology", "anesthesia-critical-care", "ent"],
  },

  {
    slug: "neurology",
    name: "Neurology",
    departmentType: "Medical Department",
    iconName: "Brain",
    shortDescription: "Specialist evaluation and management of brain, spine, nerve disorders, migraine, epilepsy, and stroke recovery.",
    introduction: "The Neurology Department at Surya Hospital provides expert medical care for conditions affecting the brain, spinal cord, and peripheral nervous system. We help patients recover from stroke, manage migraines, and control seizures.",
    heroImage: "/images/specialities/neurology.webp",
    imageAlt: "Medical illustration of the brain and nervous system",
    conditions: [
      "Acute brain stroke, paralysis, and facial weakness",
      "Epilepsy, seizures, fits, and episodes of loss of consciousness",
      "Severe migraine, cluster headaches, and tension headaches",
      "Peripheral neuropathy, numbness, tingling, and burning feet",
      "Tremors, Parkinson's disease, and involuntary movement disorders",
      "Memory loss, dementia, confusion, and walking imbalance",
    ],
    services: [
      "Specialist neurological consultations and detailed nerve examinations",
      "Stroke recovery management and medical follow-up",
      "Epilepsy evaluation and targeted anti-seizure medication plans",
      "Chronic migraine prevention strategies and headache relief",
      "Peripheral nerve disorder diagnosis and neuropathy care",
      "Coordination with physiotherapists for neuro-rehabilitation",
    ],
    whenToConsult: [
      "You suffer from frequent, severe headaches that disrupt your daily work",
      "You experience sudden numbness, tingling, or weakness in your hands or legs",
      "Someone experiences sudden facial drooping, speech difficulty, or arm weakness (Call emergency immediately)",
      "You have had a seizure, convulsion, or unexplained fainting episode",
      "You notice shaking in your hands or progressive walking instability",
    ],
    faqs: [
      {
        question: "What are the warning signs of an acute stroke?",
        answer: "Remember the word FAST: Face drooping, Arm weakness, Speech difficulty, and Time to call emergency. Immediate hospital treatment within the first few hours is critical to prevent lasting disability.",
      },
      {
        question: "Can migraines be prevented?",
        answer: "Yes. Identifying individual triggers (such as lack of sleep or skipped meals) combined with daily preventive medications can significantly reduce migraine frequency and severity.",
      },
      {
        question: "Is epilepsy a lifelong condition?",
        answer: "With modern anti-seizure medications, the majority of epilepsy patients lead full, active lives and remain seizure-free. Some patients can be safely tapered off medication after years of control under doctor guidance.",
      },
      {
        question: "What causes burning or tingling in the feet?",
        answer: "A common cause is peripheral neuropathy, often linked to long-standing diabetes, vitamin B12 deficiency, or nerve compression. A neurologist can identify the underlying cause.",
      },
    ],
    doctors: [
      {
        name: "Dr. Thirupati Kedar",
        qualifications: "DM Neuro",
        designation: "Consultant Neurologist",
        experience: "Senior Specialist in Stroke, Epilepsy & Nerve Disorders",
        opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      },
    ],
    relatedSpecialities: ["orthopedics-spine", "psychiatry", "anesthesia-critical-care"],
  },

  {
    slug: "medical-oncology",
    name: "Medical Oncology",
    departmentType: "Medical Department",
    iconName: "Shield",
    shortDescription: "Compassionate cancer assessments, chemotherapy planning, biopsy reviews, and holistic cancer care support.",
    introduction: "The Medical Oncology Department at Surya Hospital offers compassionate, evidence-based care for individuals and families facing cancer. We provide thorough diagnostic evaluations, chemotherapy planning, and continuous supportive therapy.",
    heroImage: "/images/specialities/medical-oncology.webp",
    imageAlt: "Medical illustration representing cancer care",
    conditions: [
      "Assessment of suspected tumours and abnormal body lumps",
      "Solid organ tumours including breast, lung, colon, and stomach cancers",
      "Abnormal blood test results or pathology findings requiring cancer review",
      "Evaluation of disease stage and personalized treatment pathways",
      "Cancer symptom management, pain relief, and supportive nutrition",
      "Post-treatment cancer monitoring and long-term surveillance",
    ],
    services: [
      "Medical oncology consultations and second-opinion reviews",
      "Biopsy and pathology report evaluation with clear patient explanations",
      "Personalized chemotherapy and targeted medication planning",
      "Cancer staging investigations and coordinated diagnostic scans",
      "Supportive care, pain management, and nutritional counsel",
      "Patient and family counseling throughout the treatment journey",
    ],
    whenToConsult: [
      "A doctor has found an abnormal lump, swelling, or unexplained growth",
      "Your scan or biopsy report mentions suspected malignancy or atypical cells",
      "You have unexplained weight loss, chronic fatigue, or persistent fever",
      "You have completed primary cancer treatment and need routine checkups",
      "You need clear guidance on treatment options and chemotherapy",
    ],
    faqs: [
      {
        question: "What is chemotherapy and how is it given?",
        answer: "Chemotherapy uses specialized medications to stop cancer cells from growing. Depending on your diagnosis, it may be given as an intravenous drip or as oral tablets on a scheduled cycle.",
      },
      {
        question: "How do oncologists manage chemotherapy side effects?",
        answer: "Modern supportive medications effectively control nausea, fatigue, and pain, allowing patients to stay comfortable and complete their treatment safely.",
      },
      {
        question: "Why is a biopsy necessary before starting cancer treatment?",
        answer: "A biopsy confirms whether cells are non-cancerous or cancerous, reveals the exact cancer subtype, and guides our oncologist to select the most effective targeted therapy.",
      },
      {
        question: "Can cancer be treated effectively if detected early?",
        answer: "Yes. Early detection dramatically improves treatment outcomes. Regular health checkups and prompt investigation of unusual symptoms are the best steps for successful care.",
      },
    ],
    doctors: [
      {
        name: "Dr. Vishnupriya",
        qualifications: "DM Oncology",
        designation: "Consultant Medical Oncologist",
        experience: "Specialist in Solid Tumours, Chemotherapy & Cancer Care",
        opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 07:30 PM",
      },
    ],
    relatedSpecialities: ["general-laparoscopic-surgery", "gastroenterology", "pulmonology"],
  },

  {
    slug: "psychiatry",
    name: "Psychiatry",
    departmentType: "Medical Department",
    iconName: "Stethoscope",
    shortDescription: "Compassionate, confidential care to help you manage anxiety, depression, stress, and sleep concerns.",
    introduction: "Psychiatry helps people manage mental health concerns such as anxiety, depression, stress, and sleep problems. Our specialists assess each person's needs and recommend suitable care.",
    heroImage: "/images/specialities/psychiatry.webp",
    imageAlt: "Compassionate mental wellness, emotional calm, and behavioral healthcare illustration",
    conditions: [
      "Anxiety disorders, excessive worry, and sudden panic attacks",
      "Depression, persistent sadness, low energy, and loss of interest",
      "Sleep disorders, insomnia, and fragmented sleep patterns",
      "Work-related stress, relationship pressures, and emotional burnout",
      "Mood swings, bipolar disorder, and emotional instability",
      "Obsessive Compulsive Disorder (OCD) and persistent repetitive thoughts",
    ],
    services: [
      "Confidential psychiatric consultations in a private, supportive space",
      "Personalized treatment planning with safe medications when indicated",
      "Comprehensive assessment of sleep problems and insomnia",
      "Guidance on stress management and healthy daily routines",
      "Family counseling and supportive guidance for caregivers",
      "Long-term follow-up to support sustained mental wellness",
    ],
    whenToConsult: [
      "You feel persistently sad, hopeless, or unmotivated for more than two weeks",
      "Anxiety, panic, or fear is interfering with your work or family life",
      "You struggle to fall or stay asleep, feeling constantly exhausted",
      "You experience sudden mood shifts that affect your relationships",
      "You feel overwhelmed by stress and need empathetic, medical guidance",
    ],
    faqs: [
      {
        question: "Is psychiatric consultation completely confidential?",
        answer: "Yes. All consultations and discussions are strictly confidential. Surya Hospital provides a safe, welcoming, and non-judgmental environment.",
      },
      {
        question: "Are psychiatric medications safe and necessary for everyone?",
        answer: "Medications are prescribed only when clinically necessary to correct chemical imbalances, and always at gentle, carefully monitored doses alongside supportive counsel.",
      },
      {
        question: "How long does psychiatric treatment usually take?",
        answer: "Treatment duration varies depending on individual needs. Many conditions like anxiety or acute stress improve significantly within a few weeks to months of guided care.",
      },
      {
        question: "When should someone seek help for poor sleep?",
        answer: "If you have difficulty sleeping for more than three weeks and it affects your concentration, energy, or mood, consulting a psychiatrist can help identify and treat the underlying cause.",
      },
    ],
    doctors: [
      {
        name: "Dr. V. Sashanka",
        qualifications: "MD Psychiatry",
        designation: "Consultant Psychiatrist & Behavioral Specialist",
        experience: "Specialist in Depression, Anxiety & Sleep Health",
        opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 04:30 PM – 07:30 PM",
      },
    ],
    relatedSpecialities: ["neurology", "cardiology"],
  },

  // ── SURGICAL DEPARTMENT ──
  {
    slug: "orthopedics-spine",
    name: "Orthopedics & Spine",
    departmentType: "Surgical Department",
    iconName: "Activity",
    shortDescription: "Specialist bone, joint, and spine surgery, knee and hip replacements, fracture management, and accident trauma care.",
    introduction: "The Orthopedics & Spine Department at Surya Hospital helps patients regain mobility and live free from joint and back pain. Our experienced orthopedic surgeons specialize in joint replacement, spine surgery, and emergency fracture fixation.",
    heroImage: "/images/specialities/orthopedics-spine.webp",
    imageAlt: "Medical illustration of a knee joint and spine",
    conditions: [
      "Severe knee, hip, or shoulder osteoarthritis and joint stiffness",
      "Bone fractures, dislocated joints, and accidental trauma injuries",
      "Spine disorders, herniated discs, sciatica, and chronic back pain",
      "Neck pain, cervical spondylosis, and nerve compression",
      "Sports injuries, ligament tears (ACL/PCL), and tendon sprains",
      "Osteoporosis, brittle bones, and age-related mobility decline",
    ],
    services: [
      "Knee and hip joint replacement surgeries (Arthroplasty)",
      "Spine surgery and disc decompression for chronic back pain",
      "Rapid fracture management and plaster/cast applications",
      "Minimally invasive fracture fixation and trauma reconstruction",
      "Joint preservation treatments and pain-relieving joint injections",
      "Post-operative physical recovery and mobility rehabilitation",
    ],
    whenToConsult: [
      "You have severe joint pain that makes walking, bending, or climbing difficult",
      "You suffer from back or neck pain that shoots down your legs or arms",
      "You have suffered a fall or accident with swelling, deformity, or inability to bear weight",
      "Your joints feel stiff, swollen, or warm every morning",
      "You have an old bone injury that has not healed comfortably",
    ],
    faqs: [
      {
        question: "When is knee joint replacement surgery recommended?",
        answer: "Knee replacement is recommended when severe arthritis damages the joint cartilage, causing constant pain that limits your walking and does not respond to medications or physiotherapy.",
      },
      {
        question: "How long is the recovery period after fracture surgery?",
        answer: "Most fractures heal solidly within 6 to 12 weeks. With modern fixation techniques and early guided physiotherapy, patients can often stand and move within days of surgery.",
      },
      {
        question: "Do all disc problems require spine surgery?",
        answer: "No. The vast majority of disc issues improve with rest, medications, and physical therapy. Surgery is reserved for severe pain or nerve weakness that fails to improve with conservative care.",
      },
      {
        question: "What steps help prevent osteoporosis in older adults?",
        answer: "Adequate calcium and Vitamin D intake, regular weight-bearing walking exercises, and bone density screenings help keep bones dense and reduce fracture risks.",
      },
    ],
    doctors: [
      {
        name: "Dr. M. Diwakar",
        qualifications: "MS Ortho & Spine",
        designation: "Consultant Spine & Orthopedic Surgeon",
        experience: "Specialist in Spine Surgeries, Disc Decompression & Trauma",
        opdTimings: "Mon – Sat: 10:00 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      },
      {
        name: "Dr. Shanthi Swaroop",
        qualifications: "MS Ortho",
        designation: "Senior Consultant Orthopedic Surgeon",
        experience: "Specialist in Knee & Hip Joint Replacement (Arthroplasty)",
        opdTimings: "Mon – Sat: 09:30 AM – 01:00 PM & 04:30 PM – 08:00 PM",
      },
      {
        name: "Dr. Raghavendra Raju",
        qualifications: "MS Ortho",
        designation: "Consultant Orthopedic Surgeon",
        experience: "Focus on Complex Fracture Care & Trauma Reconstruction",
        opdTimings: "Mon – Sat: 10:30 AM – 02:00 PM & 05:30 PM – 08:30 PM",
      },
    ],
    relatedSpecialities: ["anesthesia-critical-care", "neurology", "general-laparoscopic-surgery"],
  },

  {
    slug: "urology",
    name: "Urology",
    departmentType: "Surgical Department",
    iconName: "Activity",
    shortDescription: "Advanced laser surgery for kidney stones, prostate treatment (TURP), reconstructive urology, and urinary health care.",
    introduction: "The Urology Department at Surya Hospital provides advanced surgical and medical care for the urinary system (kidneys, ureters, bladder) and male health. Our surgeons specialize in minimally invasive laser treatments for kidney stones and prostate conditions.",
    heroImage: "/images/specialities/urology.webp",
    imageAlt: "Medical illustration of the urinary system",
    conditions: [
      "Kidney, ureteric, and bladder stones with severe pain",
      "Enlarged prostate (BPH) causing weak urine stream or straining",
      "Frequent, burning, or painful urination (Urinary Tract Infections)",
      "Blood in the urine (hematuria) requiring investigation",
      "Urinary leakage, incontinence, or sudden inability to pass urine",
      "Urological cancers and reconstructive urinary conditions",
    ],
    services: [
      "Advanced laser kidney stone fragmentation (URSL, PCNL, and RIRS)",
      "Minimally invasive prostate treatment including TURP surgery",
      "Treatment for recurring urinary tract infections (UTIs)",
      "Reconstructive urological surgeries for strictures and blockages",
      "Endoscopic assessment and management of urinary bleeding",
      "Men's health, andrology, and fertility evaluation",
    ],
    whenToConsult: [
      "You feel sharp, intense pain in your flank or lower back that comes in waves",
      "You notice blood in your urine, making it pink or brownish",
      "You have to wake up multiple times at night to urinate with a weak stream",
      "You experience a burning sensation during urination that doesn't go away",
      "You are suddenly unable to pass urine (Emergency — requires immediate visit)",
    ],
    faqs: [
      {
        question: "How does laser kidney stone surgery work?",
        answer: "A tiny camera is gently passed through the natural urinary channel without any cuts. A precise laser fiber breaks the stone into fine dust or small pieces that can be easily removed.",
      },
      {
        question: "What is TURP surgery for the prostate?",
        answer: "TURP (Transurethral Resection of the Prostate) is a standard, minimally invasive procedure to trim excess prostate tissue blocking the bladder neck, restoring normal urine flow.",
      },
      {
        question: "How can I prevent kidney stones from recurring?",
        answer: "Drinking plenty of clean water throughout the day (2.5 to 3 liters), reducing excess dietary salt, and following our urologist's advice based on stone analysis can prevent new stones.",
      },
      {
        question: "Is blood in urine always serious?",
        answer: "Blood in urine should never be ignored. It can indicate a stone, an infection, or another underlying urinary tract condition that requires prompt investigation.",
      },
    ],
    doctors: [
      {
        name: "Dr. Y. Harinath Reddy",
        qualifications: "MS, MCH (Urology)",
        designation: "Consultant Urologist & Andrologist",
        experience: "Specialist in Laser Stone Surgery & Endourology",
        opdTimings: "Mon – Sat: 09:30 AM – 01:00 PM & 04:30 PM – 08:00 PM",
      },
      {
        name: "Dr. B. Rajashekar",
        qualifications: "MS, MCH (Urology)",
        designation: "Consultant Urologist",
        experience: "Specialist in RIRS, PCNL & Reconstructive Urology",
        opdTimings: "Mon – Sat: 10:30 AM – 02:00 PM & 05:30 PM – 08:30 PM",
      },
    ],
    relatedSpecialities: ["nephrology", "general-laparoscopic-surgery", "anesthesia-critical-care"],
  },

  {
    slug: "general-laparoscopic-surgery",
    name: "General & Laparoscopic Surgery",
    departmentType: "Surgical Department",
    iconName: "Scissors",
    shortDescription: "Minimally invasive keyhole surgery for appendix, gallbladder, hernia repair, piles, fistula, and emergency surgical care.",
    introduction: "The General & Laparoscopic Surgery Department at Surya Hospital performs a full spectrum of planned and emergency surgeries. Our surgeons utilize laparoscopic (keyhole) techniques to reduce pain, minimize scarring, and speed up recovery.",
    heroImage: "/images/specialities/general-laparoscopic-surgery.webp",
    imageAlt: "Laparoscopic surgical instruments used in minimally invasive surgery",
    conditions: [
      "Acute appendicitis and sudden severe right-sided abdominal pain",
      "Gallstones, gallbladder inflammation, and colic",
      "Hernias (inguinal, umbilical, and incisional)",
      "Piles (hemorrhoids), anal fissures, and anal fistula",
      "Skin lumps, sebaceous cysts, lipomas, and soft tissue swellings",
      "Emergency abdominal conditions and surgical trauma care",
    ],
    services: [
      "Laparoscopic appendectomy (keyhole appendix removal)",
      "Laparoscopic cholecystectomy (gallbladder removal for stones)",
      "Laparoscopic and open hernia repair with surgical mesh support",
      "Modern daycare treatment for piles, fissures, and fistula",
      "Minor daycare surgical excisions for cysts, lipomas, and abscesses",
      "Diabetic foot wound debridement and emergency trauma surgery",
    ],
    whenToConsult: [
      "You have sudden, severe stomach pain that gets progressively worse",
      "You notice a bulge in your groin or belly that appears when standing or coughing",
      "You have persistent pain or bleeding during bowel movements",
      "You have a noticeable lump under your skin that is growing or tender",
      "You have a chronic wound or diabetic ulcer that is slow to heal",
    ],
    faqs: [
      {
        question: "What are the advantages of laparoscopic (keyhole) surgery?",
        answer: "Laparoscopic surgery uses small 5-10 mm incisions instead of large cuts. This results in significantly less post-operative pain, minimal scarring, lower infection risk, and a faster return home.",
      },
      {
        question: "Do gallstones always require gallbladder removal?",
        answer: "When gallstones cause pain, inflammation, or risk blocking the bile duct, laparoscopic cholecystectomy is the safest and most effective permanent solution.",
      },
      {
        question: "Can a hernia heal on its own without surgery?",
        answer: "No. A hernia is a physical gap or weakness in the abdominal wall. Surgery with mesh reinforcement is the only effective way to repair it and prevent strangulation.",
      },
      {
        question: "How soon can I walk after laparoscopic surgery?",
        answer: "Most patients can walk comfortably on the same evening or the morning after keyhole surgery, with regular light daily activities resuming within a few days.",
      },
    ],
    doctors: [
      {
        name: "Dr. Sai Swaroop",
        qualifications: "MS General Surgery",
        designation: "Consultant General & Laparoscopic Surgeon",
        experience: "Expert in Keyhole Appendix, Gallbladder & Hernia Surgeries",
        opdTimings: "Mon – Sat: 09:30 AM – 01:30 PM & 05:00 PM – 08:30 PM",
      },
      {
        name: "Dr. Sushanth",
        qualifications: "MS General Surgery",
        designation: "Consultant General Surgeon",
        experience: "Focus on Emergency Trauma Care & Wound Reconstruction",
        opdTimings: "Mon – Sat: 10:00 AM – 02:00 PM & 05:30 PM – 08:30 PM",
      },
    ],
    relatedSpecialities: ["gastroenterology", "orthopedics-spine", "anesthesia-critical-care"],
  },

  {
    slug: "anesthesia-critical-care",
    name: "Anesthesia & Critical Care",
    departmentType: "Surgical Department",
    iconName: "ShieldCheck",
    shortDescription: "Specialist perioperative safety, gentle surgical anesthesia, ICU monitoring, and round-the-clock emergency critical care.",
    introduction: "The Anesthesia & Critical Care Department at Surya Hospital ensures patient comfort and vital safety during operations and critical illness. Our intensivist team manages advanced ICU life-support and pain relief.",
    heroImage: "/images/specialities/anesthesia-critical-care.webp",
    imageAlt: "Anesthesia and patient-monitoring equipment in a clinical setting",
    conditions: [
      "Pre-surgical medical fitness and anesthesia planning",
      "Surgical anesthesia for all elective and emergency operations",
      "Critical illness requiring Intensive Care Unit (ICU) admission",
      "Severe infections, sepsis, and hemodynamic instability",
      "Post-operative observation following complex surgeries",
      "Severe accidental trauma requiring life support and stabilization",
    ],
    services: [
      "Thorough pre-anesthesia health evaluations (PAC)",
      "General, spinal, epidural, and local nerve block anesthesia",
      "Continuous vital monitoring in sterile operation theatres",
      "24/7 dedicated Intensive Care Unit (ICU & HDU) patient monitoring",
      "Acute post-operative pain management and pain-relief protocols",
      "Emergency resuscitation, airway support, and trauma stabilization",
    ],
    whenToConsult: [
      "You are scheduled for a planned surgical procedure and need a pre-anesthesia checkup (PAC)",
      "You have questions or health concerns regarding anesthesia for an upcoming surgery",
      "A family member requires monitored intensive care or post-operative ICU recovery",
      "A patient needs emergency resuscitation and critical stabilization following acute illness or trauma",
    ],
    faqs: [
      {
        question: "What is a Pre-Anesthesia Checkup (PAC)?",
        answer: "A PAC is a safety consultation conducted before surgery. The anesthesiologist reviews your medical history, heart, lungs, and test reports to design the safest possible anesthesia plan.",
      },
      {
        question: "What are the different types of anesthesia?",
        answer: "General anesthesia puts you into a deep sleep; spinal/epidural anesthesia numbs the lower body; and local or nerve blocks numb only the specific area being treated.",
      },
      {
        question: "How does the ICU team keep critically ill patients safe?",
        answer: "Our ICU features round-the-clock doctor monitoring, dedicated nursing staff, multi-parameter vital monitors, oxygen lines, and emergency medicines ready at all times.",
      },
      {
        question: "Why do I need to stay fasting before anesthesia?",
        answer: "Fasting prevents food or liquid from your stomach entering your lungs while you are under anesthesia, which is an essential safety precaution for all surgical procedures.",
      },
    ],
    doctors: [
      {
        name: "Dr. V. Gowtham",
        qualifications: "MD",
        designation: "Consultant Anesthesiologist & Intensivist",
        experience: "Specialist in Surgical Anesthesia, Pain Relief & ICU Care",
        opdTimings: "Mon – Sat: 09:00 AM – 05:00 PM (24/7 On-Call for OT & ICU)",
      },
    ],
    relatedSpecialities: ["general-laparoscopic-surgery", "orthopedics-spine", "cardiology"],
  },
];

/**
 * Helper to fetch a speciality by its URL slug
 */
export function getSpecialityBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.trim().toLowerCase();
  return APPROVED_SPECIALITIES.find(
    (spec) => spec.slug === normalized || spec.slug.replace(/-/g, "") === normalized.replace(/-/g, "")
  ) || null;
}

/**
 * Filtered subsets for Medical vs. Surgical groups
 */
export const MEDICAL_SPECIALITIES = APPROVED_SPECIALITIES.filter(
  (s) => s.departmentType === "Medical Department"
);

export const SURGICAL_SPECIALITIES = APPROVED_SPECIALITIES.filter(
  (s) => s.departmentType === "Surgical Department"
);
