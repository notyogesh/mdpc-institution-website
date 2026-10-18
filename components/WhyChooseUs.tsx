"use client";

import React from "react";

const REASONS = [
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Recognised Diploma Courses",
    desc: "Government-aligned curriculum structured for career placement and immediate employment readiness.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Experienced Faculty",
    desc: "Mentorship by seasoned clinicians, senior radiographers, technicians, and specialized teachers.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Modern Lab Equipment",
    desc: "Direct hands-on experience on live clinical machines at our KPME-registered diagnostic centre.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Affordable Fees",
    desc: "Subsidized fee structures under Com. M.D. Pragasam Charitable Trust ensuring quality education for all.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Community Focused",
    desc: "Dedicated to socio-economic upliftment, providing trusted healthcare and education to KGF families.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-14 bg-black text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-1">
            WHY CHOOSE US
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Excellence in Training & Healthcare
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {REASONS.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-neutral-900/90 dark:bg-[#111114] border border-white/10 hover:border-red-500/50 transition-all duration-300 hover-lift text-center flex flex-col items-center justify-between ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-500/20 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
