"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FacilitiesGallery from "@/components/FacilitiesGallery";
import Testimonials from "@/components/Testimonials";
import AdmissionsBanner from "@/components/AdmissionsBanner";
import Footer from "@/components/Footer";

export default function Home() {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [selectedCourseForAdmission, setSelectedCourseForAdmission] = useState<string | undefined>(undefined);

  const handleOpenAdmissions = (courseTitle?: string) => {
    setSelectedCourseForAdmission(courseTitle);
    setAdmissionsOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header & Navbar */}
      <Navbar onOpenAdmissions={() => handleOpenAdmissions()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenAdmissions={() => handleOpenAdmissions()}
        />

        {/* 2. Job-Oriented Recognized Diploma Courses Section */}
        <CoursesSection
          onOpenAdmissionsWithCourse={(course) => handleOpenAdmissions(course)}
        />

        {/* 3. Diagnostic Centre Section (X-Ray, ECG & Lab) */}
        <DiagnosticSection />

        {/* 4. About Us (Legacy of Service & Trust) */}
        <AboutSection />

        {/* 5. Why Choose Us (5 Key Highlights) */}
        <WhyChooseUs />

        {/* 6. Facilities & Gallery */}
        <FacilitiesGallery />

        {/* 7. Student Testimonials */}
        <Testimonials />

        {/* 8. Admissions Open CTA Banner */}
        <AdmissionsBanner
          isOpen={admissionsOpen}
          onOpen={() => handleOpenAdmissions()}
          onClose={() => setAdmissionsOpen(false)}
          defaultCourse={selectedCourseForAdmission}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
