"use client";

import React, { useState } from "react";
import Image from "next/image";

interface DiagnosticService {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  isSpecial?: boolean;
  features: string[];
}

const DIAGNOSTIC_SERVICES: DiagnosticService[] = [
  {
    id: "xray",
    title: "X-Ray",
    subtitle: "Digital X-Ray Facility",
    image: "/images/diag_xray.png",
    features: [
      "Advanced Digital Radiography System",
      "Instant high-definition imaging",
      "Minimal radiation dose exposure",
      "Chest, spine, extremity & bone imaging",
    ],
  },
  {
    id: "ecg",
    title: "ECG",
    subtitle: "Heart Health Check",
    image: "/images/diag_ecg.png",
    features: [
      "12-Lead Computerized Electrocardiography",
      "Cardiac rhythm analysis & detection",
      "Immediate digital report printout",
      "Pre-operative cardiac evaluations",
    ],
  },
  {
    id: "lab",
    title: "Lab Tests",
    subtitle: "Reliable & Accurate Results",
    image: "/images/diag_lab.png",
    features: [
      "Complete Blood Count (CBC) & Hemogram",
      "Biochemistry (FBS, PPBS, HbA1c, Lipids)",
      "Liver (LFT) & Kidney (KFT) Function Tests",
      "Clinical Pathology & Urine Routine Analysis",
    ],
  },
  {
    id: "other",
    title: "Other Diagnostic Services",
    subtitle: "Comprehensive Clinical Testing",
    isSpecial: true,
    features: [
      "Automated Centrifuge & Serum Separation",
      "Microbiology & Serological Tests",
      "Master Health Checkup Packages",
      "Doctor referral and fast turnaround",
    ],
  },
];

interface DiagnosticSectionProps {
  onBookTest?: (serviceName: string) => void;
}

export default function DiagnosticSection({ onBookTest }: DiagnosticSectionProps) {
  const [selectedService, setSelectedService] = useState<DiagnosticService | null>(null);

  return (
    <section id="diagnostic-centre" className="w-full py-16 lg:py-24 bg-black text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
                KGF X-RAY, ECG & LAB
              </span>
              <span className="text-zinc-600">|</span>
              <span className="bg-red-950/70 text-red-400 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                KPME REG NO: KLR0045ALMDL
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              DIAGNOSTIC <span className="text-red-500">CENTRE</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 font-medium">
              Accurate Diagnosis. Affordable Care. Trusted by the Community.
            </p>

            {/* Multilingual representation matching the client's actual board */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-zinc-400">
              <span>ಕೆಜಿಎಫ್ ಎಕ್ಸ್-ರೇ, ಇಸಿಜಿ ಮತ್ತು ಲ್ಯಾಬ್ ಡಯಾಗ್ನಾಸ್ಟಿಕ್ ಸೆಂಟರ್</span>
              <span className="text-zinc-600">•</span>
              <span>கேஜிஎப் எக்ஸ்ரே ஈசிஜி மற்றும் ரத்த பரிசோதனை மையம்</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:9880090481"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-red-600/30 transition-all duration-200 hover-lift flex-shrink-0"
            >
              <span>View All Services</span>
              <span className="text-base leading-none">➔</span>
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {DIAGNOSTIC_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`rounded-2xl overflow-hidden border p-5 flex flex-col justify-between transition-all duration-300 hover-lift cursor-pointer ${
                service.isSpecial
                  ? "bg-gradient-to-br from-red-600 to-red-800 border-red-500/50 text-white shadow-xl shadow-red-900/40"
                  : "bg-neutral-900/90 dark:bg-[#111114] border-white/10 hover:border-red-500/50 shadow-lg text-white"
              }`}
            >
              <div>
                {/* Thumbnail / Icon */}
                {service.image ? (
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-neutral-800 border border-white/10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white text-2xl font-black mb-4">
                    +
                  </div>
                )}

                <h3 className="text-base font-bold leading-tight">
                  {service.title}
                </h3>
                <p className={`text-xs mt-1 ${service.isSpecial ? "text-red-100" : "text-zinc-400"}`}>
                  {service.subtitle}
                </p>

                {/* Features List */}
                <ul className="mt-4 space-y-1.5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] leading-relaxed">
                      <span className={service.isSpecial ? "text-white" : "text-red-500"}>•</span>
                      <span className={service.isSpecial ? "text-red-50" : "text-zinc-300"}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Button */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className={`text-[11px] font-semibold ${service.isSpecial ? "text-white" : "text-red-400"}`}>
                  Book Enquiry
                </span>
                <span className="text-xs">➔</span>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor & Lab Incharge Credential Strip */}
        <div className="mt-8 bg-neutral-900/80 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold text-sm">
              🩺
            </div>
            <div>
              <span className="text-xs text-zinc-400 block">Proprietor & Chief Radiologic Technologist</span>
              <span className="text-sm font-bold text-white">
                Dr. D. Suresh Babu, <span className="text-red-400 font-normal">BScRT, DMLT, PhD</span>
              </span>
              <span className="text-xs text-zinc-400 block mt-0.5">
                Lab Incharge: <strong className="text-zinc-200">G. Jayanthi, DMRA, DMLT</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:9880090481"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors border border-white/10"
            >
              📞 98800 90481
            </a>
            <a
              href="tel:9880464745"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors border border-white/10"
            >
              📞 98804 64745
            </a>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            data-lenis-prevent
            className="relative w-full max-w-lg bg-neutral-900 border border-red-500/30 rounded-2xl p-6 shadow-2xl"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <span className="text-[11px] font-bold text-red-400 tracking-wider uppercase">
              Diagnostic Service
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {selectedService.title}
            </h3>
            <p className="text-xs text-zinc-300 mt-1">
              {selectedService.subtitle}
            </p>

            <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[11px] font-semibold text-zinc-400 block mb-2">
                Available Investigations:
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-200">
                {selectedService.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Report Timings: <strong className="text-white">Same Day / 2-4 Hours</strong>
              </span>
              <a
                href="tel:9880090481"
                className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md shadow-red-600/30"
              >
                Call to Book ➔
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
