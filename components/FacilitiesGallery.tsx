"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FacilityItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "f-xray",
    title: "Digital X-Ray Suite",
    category: "Radiology Unit",
    image: "/images/facility_xray.png",
    description: "Equipped with high-frequency digital radiography tube, protective shielding, and instant digital processing.",
  },
  {
    id: "f-biochem",
    title: "Automated Clinical Analyzer",
    category: "Biochemistry & ECG",
    image: "/images/facility_ecg_lab.png",
    description: "Semi-automated clinical chemistry analyzer for blood glucose, kidney function, and liver enzyme profiles.",
  },
  {
    id: "f-lab",
    title: "Pathology & Centrifuge Lab",
    category: "Diagnostic Testing",
    image: "/images/facility_pharmacy.png",
    description: "Centrifuge separation units, optical microscopes, and sterile preparation benches for blood and urine analysis.",
  },
  {
    id: "f-it",
    title: "Modern Computer IT Lab",
    category: "Technical Campus",
    image: "/images/facility_computer.png",
    description: "Dedicated computer terminals with software for DCA training, digital documentation, and hospital management.",
  },
];

export default function FacilitiesGallery() {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % FACILITIES_DATA.length);
  };

  const handlePrev = () => {
    setScrollIndex((prev) => (prev - 1 + FACILITIES_DATA.length) % FACILITIES_DATA.length);
  };

  return (
    <section id="facilities" className="w-full py-16 lg:py-24 bg-neutral-950 dark:bg-[#070708] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex items-end justify-between pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-1">
              GALLERY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              OUR <span className="text-red-500">FACILITIES</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous facility"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-white/10"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              aria-label="Next facility"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors border border-white/10"
            >
              ❯
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {FACILITIES_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveFacility(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-red-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[4/3] bg-neutral-800 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-[10px] text-zinc-300 font-semibold px-2 py-0.5 rounded border border-white/10">
                  {item.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-red-500 font-medium">
                  <span>View Details</span>
                  <span>↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Lightbox Modal */}
      {activeFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-neutral-900 border border-red-500/30 rounded-2xl p-5 shadow-2xl overflow-hidden">
            <button
              onClick={() => setActiveFacility(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-black">
              <Image
                src={activeFacility.image}
                alt={activeFacility.title}
                fill
                className="object-contain"
              />
            </div>

            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
              {activeFacility.category}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {activeFacility.title}
            </h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              {activeFacility.description}
            </p>

            <div className="mt-5 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveFacility(null)}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
