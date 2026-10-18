"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-neutral-950 dark:bg-[#050507] text-white border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Trust Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-red-500/50 bg-white p-0.5 shadow-md flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="MDPC Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-sm sm:text-base text-white tracking-tight block">
                  M.D. PRAGASAM CHANDRA
                </span>
                <span className="text-xs font-bold text-red-500 tracking-wider block">
                  GROUP OF INSTITUTION
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs text-zinc-400 font-medium leading-relaxed">
              Run by <strong className="text-zinc-200">Com. M.D. Pragasam Charitable Trust (R)</strong>.
              Dedicated to uplifting youth through recognised technical & healthcare diplomas, and providing affordable diagnostic services to the community.
            </p>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-zinc-400 space-y-1">
              <div>
                <span className="text-red-400 font-semibold">KPME REG NO:</span>{" "}
                <span className="text-zinc-300 font-mono">KLR0045ALMDL</span>
              </div>
              <div>
                <span className="text-red-400 font-semibold">Proprietor:</span>{" "}
                <span className="text-zinc-300">Dr. D. Suresh Babu, BScRT, DMLT, PhD</span>
              </div>
              <div>
                <span className="text-red-400 font-semibold">Lab Incharge:</span>{" "}
                <span className="text-zinc-300">G. Jayanthi, DMRA, DMLT</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#diagnostic-centre" className="hover:text-white transition-colors">
                  Diagnostic Centre
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <span className="text-red-500 text-sm mt-0.5">📍</span>
                <span className="leading-relaxed">
                  M.D. Pragasam Chandra Building,
                  <br />
                  1st Cross Road, Robertsonpet,
                  <br />
                  KGF - 563122, Karnataka
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <span className="text-red-500 text-sm">📞</span>
                <div className="space-x-2">
                  <a href="tel:9880090481" className="text-white hover:text-red-400 font-medium">
                    98800 90481
                  </a>
                  <span>|</span>
                  <a href="tel:9880464745" className="text-white hover:text-red-400 font-medium">
                    98804 64745
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-red-500 text-sm">☎️</span>
                <a href="tel:08153200481" className="text-white hover:text-red-400 font-medium">
                  08153 200481
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-zinc-400">
                <span className="text-red-500">⏰</span>
                <span>Mon – Sat: 8:00 AM – 8:00 PM | Sun: 8:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                ig
              </a>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-neutral-900 border border-white/10">
              <span className="text-[10px] text-zinc-400 block">Admissions Helpline</span>
              <a
                href="tel:9880090481"
                className="text-xs font-bold text-red-400 hover:underline block mt-0.5"
              >
                Call: 98800 90481
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            © 2026 M.D. Pragasam Chandra Group of Institution. All Rights Reserved.
          </p>
          <p className="text-[11px]">
            Run by Com. M.D. Pragasam Charitable Trust (R) • Robertsonpet, KGF
          </p>
        </div>
      </div>
    </footer>
  );
}
