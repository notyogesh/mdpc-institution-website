import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mdpc-institution.org"),
  title: "M.D. Pragasam Chandra Group of Institution | KGF Diagnostic Centre",
  description:
    "M.D. Pragasam Chandra Group of Institution run by Com. M.D. Pragasam Charitable Trust (R) offers job-oriented recognised diploma courses and advanced digital diagnostic services (X-Ray, ECG, Lab) in Robertsonpet, KGF. KPME Reg No: KLR0045ALMDL.",
  keywords: [
    "M.D. Pragasam Chandra Group of Institution",
    "Com M.D. Pragasam Charitable Trust",
    "KGF X-Ray ECG Lab Diagnostic Centre",
    "Diploma Courses KGF",
    "Diploma in Nursing Care Development",
    "Medical Laboratory Technician",
    "X-Ray Technology KGF",
    "Dr. D. Suresh Babu",
    "Robertsonpet KGF College",
  ],
  authors: [{ name: "M.D. Pragasam Chandra Group of Institution" }],
  openGraph: {
    title: "M.D. Pragasam Chandra Group of Institution & Diagnostic Centre",
    description:
      "Quality Education, Affordable Healthcare & Recognised Job-Oriented Diploma Programs in Robertsonpet, KGF.",
    url: "https://mdpc-institution.org",
    siteName: "MDPC Group of Institution",
    images: [
      {
        url: "/images/campus_building.jpg",
        width: 1200,
        height: 630,
        alt: "M.D. Pragasam Chandra Group of Institution Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-neutral-950 text-white transition-colors duration-300 selection:bg-red-600 selection:text-white">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
