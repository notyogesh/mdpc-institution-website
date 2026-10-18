"use client";

import React, { useEffect, useState, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: React.ReactNode;
}

// Inner anchor link handler that connects to the active Lenis instance
function AnchorLinkHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      // Check if it's an in-page anchor link
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80, // Offset for the sticky header
            duration: 1.2,
            immediate: false,
          });
          // Update the URL hash cleanly without standard jarring jump
          history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: false });
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Accessibility check: respects user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // During SSR or if user prefers reduced motion, render without Lenis
  if (!mounted || prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false, // Leave native touch scrolling intact for mobile & low-end devices
      }}
    >
      <AnchorLinkHandler />
      {children}
    </ReactLenis>
  );
}
