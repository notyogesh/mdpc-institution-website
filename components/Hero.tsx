"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onOpenAdmissions?: () => void;
  onOpenDiagnosticModal?: () => void;
}

export default function Hero({ onOpenAdmissions, onOpenDiagnosticModal }: HeroProps) {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-black text-white pt-8 pb-14 lg:pt-14 lg:pb-20">
      {/* Background Volumetric Ambient Glow */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-none radial-red-hero opacity-85" />
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Full-Height Right-Aligned Blended Image (No Card / No Boxed Borders) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-16 w-[55%] pointer-events-none z-0 overflow-hidden">
        <div
          className="relative w-full h-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%, black 100%)",
          }}
        >
          <Image
            src="/images/hero_founders_full.png"
            alt="Founders Com. M.D. Pragasam and Chandra"
            fill
            priority
            sizes="55vw"
            className="object-cover object-right-top opacity-95"
          />

          {/* Left Horizontal Fade Overlay */}
          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

          {/* Bottom Fade Overlay into highlights bar */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

          {/* Top Vignette */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[420px] lg:min-h-[480px]">
          {/* Left Column: Heading, Subtitle and CTAs */}
          <div className="lg:col-span-7 flex flex-col z-20 py-4">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest text-zinc-300 uppercase">
              <span className="text-red-500 font-bold">●</span>
              <span>EDUCATION</span>
              <span className="text-zinc-600">|</span>
              <span>HEALTHCARE</span>
              <span className="text-zinc-600">|</span>
              <span>COMMUNITY SERVICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              M.D. PRAGASAM CHANDRA
              <span className="block text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)] mt-1">
                GROUP OF INSTITUTION
              </span>
            </h1>

            {/* Sub-tagline */}
            <p className="mt-4 text-sm sm:text-lg text-zinc-300 font-medium tracking-wide">
              Quality Education <span className="text-red-500 font-bold mx-1.5">|</span> Affordable Healthcare <span className="text-red-500 font-bold mx-1.5">|</span> Brighter Tomorrow
            </p>

            <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Empowering youth across Robertsonpet and KGF with government-recognised, skill-based medical, technical, and professional diploma courses, coupled with trusted diagnostic care.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-red-600/30 transition-all duration-200 hover-lift active:scale-95"
              >
                <span>View Courses</span>
                <span className="text-base leading-none">➔</span>
              </a>

              <a
                href="#diagnostic-centre"
                className="inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-white/20 hover:border-red-500/50 transition-all duration-200 hover-lift active:scale-95"
              >
                <span>Diagnostic Services</span>
                <span className="text-base leading-none">➔</span>
              </a>

              {onOpenAdmissions && (
                <button
                  onClick={onOpenAdmissions}
                  className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-medium underline underline-offset-4 transition-colors ml-1"
                >
                  Apply Online Now ↗
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Anchored directly at bottom-right */}
          <div className="lg:col-span-5 relative flex flex-col justify-end items-end z-20 self-end lg:pb-3 w-full">
            {/* Mobile / Tablet Image View with Left & Bottom Fade */}
            <div className="lg:hidden relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-4">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 100%)",
                }}
              >
                <Image
                  src="/images/hero_founders_full.png"
                  alt="Founders Com. M.D. Pragasam and Chandra"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-right-top"
                />
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Founder Quote Card - Positioned at bottom-right */}
            <div className="w-full sm:max-w-[320px] bg-black/90 backdrop-blur-md p-4 rounded-xl border border-red-500/40 shadow-2xl hover-lift">
              <p className="text-xs sm:text-sm text-zinc-100 italic font-semibold leading-relaxed">
                &ldquo;Service to People through Education and Healthcare&rdquo;
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-red-400 font-bold tracking-wide">Com. M.D. Pragasam &amp; Chandra</span>
                <span className="text-zinc-400 text-[11px] font-medium">Founders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Bar (Key Metrics) */}
        <div className="mt-10 lg:mt-14 bg-neutral-900/90 dark:bg-[#121215]/90 border border-white/10 dark:border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Metric 1 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:px-3 first:pt-0">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 text-lg flex-shrink-0">
                🎓
              </div>
              <div>
                <span className="block text-xl font-black text-white leading-tight">8+</span>
                <span className="text-[11px] text-zinc-400 font-medium">Diploma Courses</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:px-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 text-lg flex-shrink-0">
                👥
              </div>
              <div>
                <span className="block text-xl font-black text-white leading-tight">Hundreds</span>
                <span className="text-[11px] text-zinc-400 font-medium">Students Trained</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:px-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 text-lg flex-shrink-0">
                🧪
              </div>
              <div>
                <span className="block text-sm font-black text-white leading-tight">X-Ray, ECG & Lab</span>
                <span className="text-[11px] text-zinc-400 font-medium">Diagnostic Centre</span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:px-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 text-lg flex-shrink-0">
                ❤️
              </div>
              <div>
                <span className="block text-xl font-black text-white leading-tight">Affordable</span>
                <span className="text-[11px] text-zinc-400 font-medium">Healthcare</span>
              </div>
            </div>

            {/* Metric 5 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:px-3 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 text-lg flex-shrink-0">
                🏛️
              </div>
              <div>
                <span className="block text-sm font-black text-white leading-tight">Serving</span>
                <span className="text-[11px] text-zinc-400 font-medium">KGF Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
