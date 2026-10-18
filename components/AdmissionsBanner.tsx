"use client";

import React, { useState } from "react";
import { COURSES_DATA } from "./CoursesSection";

interface AdmissionsBannerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  defaultCourse?: string;
}

export default function AdmissionsBanner({
  isOpen,
  onOpen,
  onClose,
  defaultCourse,
}: AdmissionsBannerProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: defaultCourse || COURSES_DATA[0].title,
    qualification: "10+2 / PUC",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <>
      {/* Banner */}
      <section id="admissions" className="w-full py-10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-700 via-red-600 to-red-800 p-6 sm:p-8 shadow-2xl shadow-red-950/60 border border-red-500/40">
            {/* Background elements */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-black/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center text-3xl flex-shrink-0 text-white shadow-lg">
                  🎓
                </div>
                <div>
                  <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight uppercase">
                    ADMISSIONS OPEN
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-red-100 font-medium">
                    For all the above courses. Both boys and girls can apply.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpen}
                  className="bg-white hover:bg-neutral-100 text-red-600 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 hover-lift active:scale-95 flex items-center gap-2 whitespace-nowrap"
                >
                  <span>Apply Now</span>
                  <span className="text-base leading-none">➔</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            data-lenis-prevent
            className="relative w-full max-w-lg bg-neutral-900 border border-red-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
            >
              ✕
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                  <span>Admissions 2026-2027</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Online Admission Enquiry
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill in your details below. Our admissions counsel will contact you directly with fee and seat confirmation.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter student name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="your-email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Select Desired Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:border-red-500"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Highest Qualification
                    </label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white text-xs focus:outline-none focus:border-red-500"
                    >
                      <option value="10th / SSLC Passed">10th / SSLC Passed</option>
                      <option value="10+2 / PUC Passed">10+2 / PUC Passed</option>
                      <option value="Graduate / Degree">Graduate / Degree</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">
                      Message / Special Queries (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific questions regarding timing, fee concessions, or hostel?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400">
                      Need urgent help? Call <a href="tel:9880090481" className="text-red-400 underline">98800 90481</a>
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/30 transition-all hover-lift"
                    >
                      Submit Application ➔
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-3 border border-emerald-500/30">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">
                  Application Submitted Successfully!
                </h3>
                <p className="text-xs text-zinc-300 mt-2 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry for{" "}
                  <strong>{formData.course}</strong> has been received by Com. M.D. Pragasam Charitable Trust admissions desk.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/10 text-[11px] text-zinc-400">
                  Our admissions office at Robertsonpet, KGF will contact you on{" "}
                  <span className="text-white font-semibold">{formData.phone}</span> shortly.
                </div>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
