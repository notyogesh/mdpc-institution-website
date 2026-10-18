"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  course: string;
  quote: string;
  avatar: string;
  year: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya S.",
    course: "Diploma in Nursing Care Development",
    quote: "The nursing course helped me build a strong foundation and get a good job.",
    avatar: "/images/student_priya.png",
    year: "Batch of 2024",
  },
  {
    name: "Manoj K.",
    course: "Diploma in X-Ray Technology",
    quote: "Good teachers, practical training and supportive environment.",
    avatar: "/images/student_manoj.png",
    year: "Batch of 2024",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-1">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
            WHAT OUR <span className="text-red-500">STUDENTS SAY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-neutral-900/90 dark:bg-[#111114] border border-white/10 hover:border-red-500/40 shadow-xl transition-all duration-300 hover-lift flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                {/* Student Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-500/50 flex-shrink-0 bg-neutral-800">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-3">
                    <h3 className="text-sm font-bold text-white">{t.name}</h3>
                    <span className="text-xs text-red-400 font-medium block">
                      {t.course}
                    </span>
                    <span className="text-[11px] text-zinc-500 block">
                      {t.year}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 text-xs flex-shrink-0">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
