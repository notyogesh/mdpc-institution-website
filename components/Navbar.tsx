"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

interface NavbarProps {
  onOpenAdmissions?: () => void;
}

export default function Navbar({ onOpenAdmissions }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["home", "about", "courses", "diagnostic-centre", "facilities", "testimonials", "contact"];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Courses", href: "#courses", id: "courses" },
    { name: "Diagnostic Centre", href: "#diagnostic-centre", id: "diagnostic-centre" },
    { name: "Facilities", href: "#facilities", id: "facilities" },
    { name: "Gallery", href: "#facilities", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Credentials Bar */}
      <div className="bg-neutral-900 border-b border-white/10 text-zinc-300 text-[11px] sm:text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-red-600/20 text-red-400 font-semibold px-2 py-0.5 rounded border border-red-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              KPME REG NO: KLR0045ALMDL
            </span>
            <span className="hidden md:inline text-zinc-400">|</span>
            <span className="hidden md:inline text-zinc-300 font-medium">
              Prop: Dr. D. Suresh Babu, BScRT, DMLT, PhD
            </span>
            <span className="hidden lg:inline text-zinc-500">|</span>
            <span className="hidden lg:inline text-zinc-400">
              G. Jayanthi, DMRA, DMLT
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-300 text-[11px] sm:text-xs">
            <span className="hidden sm:inline">Robertsonpet, KGF</span>
            <a
              href="tel:08153200481"
              className="hover:text-red-400 transition-colors hidden sm:inline"
            >
              ☎️ 08153 200481
            </a>
            <a
              href="tel:9880090481"
              className="text-red-400 font-bold hover:underline"
            >
              📞 98800 90481
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`w-full px-4 sm:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 dark:bg-[#070708]/95 backdrop-blur-md shadow-lg border-b border-white/10 dark:border-white/10 py-2.5"
            : "bg-black/80 dark:bg-[#09090b]/80 backdrop-blur-sm border-b border-white/10 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-red-500/50 shadow-md bg-white p-0.5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="MDPC Logo"
                fill
                sizes="48px"
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white leading-tight">
                  M.D. PRAGASAM CHANDRA
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold text-red-500 tracking-wider uppercase leading-none mt-0.5">
                GROUP OF INSTITUTION
              </span>
              <span className="text-[9px] sm:text-[10px] text-zinc-400 leading-tight mt-0.5 hidden xs:inline">
                Run by Com. M.D. Pragasam Charitable Trust (R)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-red-600 text-white font-semibold shadow-md shadow-red-600/30"
                      : "text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs: Theme Toggle & Phone */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 transition-all duration-200 border border-white/10 hover:border-white/20 active:scale-95"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                // Sun Icon
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Phone Pill Button matching Mockup */}
            <a
              href="tel:9880090481"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full shadow-md shadow-red-600/30 transition-all duration-200 hover-lift active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="tracking-wide">98800 90481</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 pb-4 flex flex-col gap-1.5 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAdmissions) onOpenAdmissions();
                }}
                className="w-full text-center py-2.5 rounded-lg bg-red-600 text-white font-semibold text-sm hover:bg-red-500 shadow-md"
              >
                Apply for Admission ➔
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
