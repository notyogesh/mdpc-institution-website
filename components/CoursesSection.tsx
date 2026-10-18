"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface Course {
  id: string;
  title: string;
  duration: string;
  image: string;
  eligibility: string;
  category: "Medical & Allied Health" | "Technical & Media" | "Education";
  description: string;
  curriculum: string[];
  careerProspects: string[];
}

export const COURSES_DATA: Course[] = [
  {
    id: "nursing-care",
    title: "Diploma in Nursing Care Development",
    duration: "2 Years",
    image: "/images/course_nursing.png",
    category: "Medical & Allied Health",
    eligibility: "SSLC / 10th Pass or 10+2 (Any stream)",
    description:
      "Comprehensive hands-on nursing and patient care training designed for immediate hospital and clinical deployment with practical clinical postings.",
    curriculum: [
      "Fundamentals of Nursing & Patient Care",
      "Anatomy & Physiology Basics",
      "First Aid, Emergency & ICU Care",
      "Pharmacology & Medication Administration",
      "Hospital Ward Management & Hygiene",
    ],
    careerProspects: [
      "Staff Nurse Assistant in Multi-Specialty Hospitals",
      "Critical Care & Ward Attendant",
      "Community Health Centre Caregiver",
      "Home Healthcare Specialist",
    ],
  },
  {
    id: "medical-lab-tech",
    title: "Diploma in Medical Laboratory Technician",
    duration: "2 Years",
    image: "/images/course_lab_tech.png",
    category: "Medical & Allied Health",
    eligibility: "SSLC / 10th Pass or 10+2 (Science preferred)",
    description:
      "Train in modern clinical pathology, hematology, biochemistry, and microbiology using automated diagnostic equipment and laboratory techniques.",
    curriculum: [
      "Clinical Biochemistry & Automated Analysis",
      "Hematology & Blood Banking Techniques",
      "Medical Microbiology & Serology",
      "Clinical Pathology & Urine Analysis",
      "Quality Control & Lab Safety Protocols",
    ],
    careerProspects: [
      "Medical Laboratory Technician (MLT)",
      "Diagnostic Centre Lab Incharge",
      "Blood Bank Technician",
      "Hospital Pathology Laboratory Executive",
    ],
  },
  {
    id: "pharmacy-tech",
    title: "Diploma in Pharmacy Technology",
    duration: "2 Years",
    image: "/images/course_pharmacy.png",
    category: "Medical & Allied Health",
    eligibility: "SSLC / 10th Pass or 10+2",
    description:
      "Skill-focused training in pharmaceutical dispensing, drug formulations, inventory control, and hospital pharmacy operations.",
    curriculum: [
      "Pharmaceutics & Formulation Science",
      "Pharmaceutical Chemistry",
      "Pharmacology & Drug Interactions",
      "Hospital & Clinical Pharmacy Management",
      "Drug Store Inventory & Software Dispensing",
    ],
    careerProspects: [
      "Hospital Pharmacy Technician",
      "Retail Pharmacy Manager / Dispenser",
      "Pharmaceutical Quality Control Assistant",
      "Medical Supply Chain Associate",
    ],
  },
  {
    id: "teacher-training",
    title: "Diploma in Primary Teacher's Training",
    duration: "2 Years",
    image: "/images/course_teacher.png",
    category: "Education",
    eligibility: "10+2 / PUC (Any stream)",
    description:
      "Modern pedagogical methodologies, child psychology, classroom communication, and creative teaching tools for primary and pre-primary educators.",
    curriculum: [
      "Child Development & Educational Psychology",
      "Modern Teaching Methodologies & Pedagogy",
      "Classroom Management & Inclusive Education",
      "Language Skills & Storytelling Techniques",
      "Computer Literacy & Educational Technology",
    ],
    careerProspects: [
      "Primary School Educator",
      "Pre-Primary / Montessori Teacher",
      "Educational Coordinator",
      "Curriculum Activity Specialist",
    ],
  },
  {
    id: "computer-apps",
    title: "Diploma in Computer Applications",
    duration: "1 Year",
    image: "/images/course_computer.png",
    category: "Technical & Media",
    eligibility: "SSLC / 10th Pass or 10+2",
    description:
      "Industry-aligned IT education covering office productivity tools, database management, web basics, accounting software, and digital communication.",
    curriculum: [
      "Computer Fundamentals & OS Architecture",
      "Advanced Office Automation (MS Office / Libre)",
      "Database Management & SQL Basics",
      "Tally Prime & Financial Accounting",
      "Internet Technologies & Cyber Hygiene",
    ],
    careerProspects: [
      "Data Entry & Operations Executive",
      "Office Automation Administrator",
      "Junior Database Operator",
      "IT Support & Customer Helpdesk Assistant",
    ],
  },
  {
    id: "xray-tech",
    title: "Diploma in X-Ray Technology",
    duration: "2 Years",
    image: "/images/course_xray.png",
    category: "Medical & Allied Health",
    eligibility: "SSLC / 10th Pass or 10+2",
    description:
      "Hands-on training in digital radiography, patient radiation protection, contrast procedures, and darkroom/digital processing at our active diagnostic centre.",
    curriculum: [
      "Radiological Anatomy & Physiology",
      "Principles of Radiation Physics & Safety",
      "Digital X-Ray Techniques & Positioning",
      "Darkroom & Digital Image Processing",
      "ECG Recording & Cardiac Lead Placement",
    ],
    careerProspects: [
      "Digital X-Ray Radiographer",
      "Diagnostic Centre Imaging Technician",
      "Emergency Radiology Assistant",
      "Private Clinic Imaging Operator",
    ],
  },
  {
    id: "cinematography",
    title: "Diploma in Cinematography",
    duration: "2 Years",
    image: "/images/course_cinematography.png",
    category: "Technical & Media",
    eligibility: "SSLC / 10th Pass or 10+2",
    description:
      "Professional visual storytelling, digital camera handling, 3-point lighting setups, composition techniques, and digital color grading.",
    curriculum: [
      "Visual Aesthetics & Framing Composition",
      "Professional Camera Anatomy & Optics",
      "Studio & Outdoor Cinematic Lighting",
      "Digital Non-Linear Editing Basics",
      "Film Production Workflow & Set Etiquette",
    ],
    careerProspects: [
      "Assistant Cinematographer",
      "Independent Videographer & Content Creator",
      "Broadcast & Live Event Camera Operator",
      "Digital Media Production Technician",
    ],
  },
  {
    id: "applied-cinematography",
    title: "Applied Cinematography",
    duration: "3 Years",
    image: "/images/course_applied_cinema.png",
    category: "Technical & Media",
    eligibility: "10+2 / PUC or Equivalent",
    description:
      "Advanced 3-year specialized diploma emphasizing feature film cinematography, advanced lighting design, multi-camera shoots, and post-production workflows.",
    curriculum: [
      "Advanced Optics, Lenses & Sensor Science",
      "Dramatic Storytelling & Script Breakdown",
      "Color Grading & Color Science (DaVinci Resolve)",
      "Steadicam & Drone Cinematography Principles",
      "Final Graduation Film Project & Showcase",
    ],
    careerProspects: [
      "Director of Photography (DOP)",
      "Commercial & Ad-Film Cinematographer",
      "OTT / Documentary Filmmaker",
      "Film Studio Post-Production Specialist",
    ],
  },
];

interface CoursesSectionProps {
  onSelectCourse?: (course: Course) => void;
  onOpenAdmissionsWithCourse?: (courseTitle: string) => void;
}

export default function CoursesSection({
  onSelectCourse,
  onOpenAdmissionsWithCourse,
}: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const categories = ["All", "Medical & Allied Health", "Technical & Media", "Education"];

  const filteredCourses =
    selectedCategory === "All"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === selectedCategory);

  const handleCardClick = (course: Course) => {
    setActiveModalCourse(course);
    if (onSelectCourse) onSelectCourse(course);
  };

  return (
    <section id="courses" className="w-full py-16 lg:py-24 bg-neutral-950 dark:bg-[#070708] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-1">
              OUR COURSES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              JOB ORIENTED RECOGNISED{" "}
              <span className="text-red-500">DIPLOMA COURSES</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              Build your career with practical, skill-based diploma programs. Both boys and girls can apply.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-red-600/30 transition-all duration-200 hover-lift flex-shrink-0"
            >
              <span>View All Courses</span>
              <span className="text-base leading-none">➔</span>
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 8 Courses Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCardClick(course)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900/90 dark:bg-[#111114] border border-white/10 dark:border-white/10 hover:border-red-500/50 shadow-lg hover:shadow-2xl hover:shadow-red-950/40 transition-all duration-300 hover-lift flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-800">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 left-3">
                  <span className="inline-block bg-red-600/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-red-500">
                    {course.duration}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-red-600 text-zinc-300 group-hover:text-white flex items-center justify-center transition-colors">
                    <span className="text-xs leading-none">❯</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Course Details Modal */}
      {activeModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            data-lenis-prevent
            className="relative w-full max-w-2xl bg-neutral-900 border border-red-500/30 rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[90vh]"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalCourse(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {/* Course Header */}
            <div className="flex items-start gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                <Image
                  src={activeModalCourse.image}
                  alt={activeModalCourse.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block bg-red-600/20 text-red-400 text-[11px] font-bold px-2 py-0.5 rounded border border-red-500/30 mb-1">
                  {activeModalCourse.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  {activeModalCourse.title}
                </h3>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-400">
                  <span>⏱ Duration: <strong className="text-white">{activeModalCourse.duration}</strong></span>
                  <span>•</span>
                  <span>🎓 Eligibility: <strong className="text-white">{activeModalCourse.eligibility}</strong></span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeModalCourse.description}
            </p>

            {/* Curriculum Highlights */}
            <div className="mt-5">
              <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                Curriculum Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {activeModalCourse.curriculum.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="mt-5">
              <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                Career Opportunities
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalCourse.careerProspects.map((job, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-md"
                  >
                    💼 {job}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalCourse(null)}
                className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const courseTitle = activeModalCourse.title;
                  setActiveModalCourse(null);
                  if (onOpenAdmissionsWithCourse) {
                    onOpenAdmissionsWithCourse(courseTitle);
                  }
                }}
                className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-semibold text-xs shadow-md shadow-red-600/30 transition-all hover-lift"
              >
                Apply for this Course ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
