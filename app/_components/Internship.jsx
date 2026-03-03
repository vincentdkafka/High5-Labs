"use client";
import React from "react";
import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

const Internship = () => {
  return (
    <section id="internship" className="bg-[#FEFBF6] pt-4 pb-16 ">
      <div className="container mx-auto px-4 lg:px-20">
        {/* HERO */}
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight">
            Internship Program
          </h1>
          <p className="mt-6 text-gray-600 text-lg lg:text-xl">
            Gain real industry experience by working on live web and AI-driven
            projects. Build production-level skills — not just theory.
          </p>

          <div className="mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxl1RS6McFBFpkxbUXkXN0dAQ0DfGuhSRW3nMxjs8aMW0FZA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#04112d] text-white rounded-full text-base font-medium transition hover:scale-105 hover:bg-gray-900"
            >
              Apply Now
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-[#D4AF37] p-8 rounded-3xl border border-black/10 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#04112d] text-white mb-6">
              <Code2 size={20} />
            </div>
            <h3 className="text-xl  font-semibold">Real Development</h3>
            <p className="mt-4 ">
              Work on live React & Next.js projects with production-level
              standards.
            </p>
          </div>

          <div className="bg-[#D4AF37] p-8 rounded-3xl border border-black/10 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#04112d] text-white mb-6">
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-semibold">AI & Automation</h3>
            <p className="mt-4 text-gray-600">
              Learn how modern agencies integrate AI tools into scalable
              systems.
            </p>
          </div>

          <div className="bg-[#D4AF37] p-8 rounded-3xl border border-black/10 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#04112d] text-white mb-6">
              <ArrowUpRight size={20} />
            </div>
            <h3 className="text-xl font-semibold">Career Growth</h3>
            <p className="mt-4 text-gray-600">
              Mentorship, portfolio projects, and potential full-time
              opportunity.
            </p>
          </div>
        </div>

        {/* DETAILS */}
        <div className="mt-8 text-gray-600 text-lg max-w-3xl">
          <p>
            <strong>Duration:</strong> 3–6 Months
          </p>
          <p className="mt-2">
            <strong>Mode:</strong> Remote / Hybrid
          </p>
          <p className="mt-2">
            <strong>Certification:</strong> Industry Experience Certificate
          </p>
        </div>
        <div className="border-t-2 border-black mt-16 lg:mt-20"></div>
      </div>
    </section>
  );
};

export default Internship;
