"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-neutral-950 dark:bg-[#070708] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-1">
              ABOUT US
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              A LEGACY OF <span className="text-red-500">SERVICE</span>
            </h2>

            <div className="mt-4 space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong>M.D. Pragasam Chandra Group of Institution</strong> is run by{" "}
                <span className="text-white font-semibold">Com. M.D. Pragasam Charitable Trust (R)</span>,
                dedicated to providing quality education and affordable healthcare services to the people of
                KGF and surrounding communities.
              </p>
              <p>
                Founded upon the noble vision of <em>&ldquo;Service to People through Education and Healthcare&rdquo;</em>,
                our institution bridges the gap between high-demand career technical education and community medical wellness.
                We equip young men and women with recognised, government-aligned professional diplomas that open doors to rewarding careers in healthcare, media, IT, and teaching.
              </p>
              <p className="text-zinc-400">
                Operating directly from our own dedicated institution building in Robertsonpet, KGF, our integrated setup allows students in medical laboratory and X-ray technology to gain practical clinical experience in an active, KPME-registered diagnostic environment.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="p-3 rounded-xl bg-neutral-900 border border-white/10">
                <span className="text-red-500 text-sm font-bold block">✓ Community Trust</span>
                <span className="text-[11px] text-zinc-400 mt-0.5 block">
                  Run by registered charitable trust with transparent ethics
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-900 border border-white/10">
                <span className="text-red-500 text-sm font-bold block">✓ Dual Focus</span>
                <span className="text-[11px] text-zinc-400 mt-0.5 block">
                  Seamless synergy of job-oriented diplomas and daily diagnostic care
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-red-600/30 transition-all duration-200 hover-lift"
              >
                <span>Explore Programs</span>
                <span className="text-base leading-none">➔</span>
              </a>
              <a
                href="#contact"
                className="text-xs sm:text-sm text-zinc-300 hover:text-white font-semibold underline underline-offset-4"
              >
                Visit Campus ↗
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-red-500/30 shadow-2xl shadow-red-950/40 group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900">
                <Image
                  src="/images/campus_building.jpg"
                  alt="M.D. Pragasam Chandra Group of Institution and KGF X-Ray Lab Building"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Building Tag Overlay */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">
                    M.D. Pragasam Chandra Building
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    1st Cross Road, Robertsonpet, KGF - 563122
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-red-400 bg-red-600/20 px-2.5 py-1 rounded border border-red-500/30">
                  Campus & Lab
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
