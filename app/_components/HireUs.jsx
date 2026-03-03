"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Check, Star, Send, ShieldCheck, Users } from "lucide-react";

const expectations = [
  "Precision-engineered web solutions",
  "AI automation that drives efficiency",
  "Technology built to scale with your growth",
  "Internship Oppurtunities",
];

const HireUs = () => {
  const [state, handleSubmit] = useForm("mqedvaaj");

  if (state.succeeded) {
    return (
      <div className="bg-[#FEFBF6] rounded-3xl shadow-lg p-8 lg:p-10  text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Message Sent Successfully
        </h2>
        <p className="text-gray-600">
          Thank you for reaching out. We’ll get back to you within 1–2 days.
        </p>
      </div>
    );
  }
  return (
    <section id="contact" className="py-8 lg:pb-20 bg-[#FEFBF6]">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-semibold mt-8 lg:mt-14 tracking-tight">
              High5 Labs
            </h1>

            <p className="mt-4 text-base lg:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              We turn complex business challenges into scalable web solutions
              enhanced by intelligent automation and precision engineering
            </p>

            <div className="mt-10 mb-12 lg:mb-0">
              <h3 className="text-xl font-semibold">What can you expect?</h3>

              <ul className="mt-6 space-y-4 inline-block text-left">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#D4AF37] rounded-3xl shadow-lg p-8 lg:p-10 border">
            <h2 className="text-2xl font-semibold">
              Let’s build something great
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* First + Last Name */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full rounded-xl 
border border-black/10 
bg-white/80 
px-4 py-3 
placeholder:text-black/40 
focus:outline-none 
focus:border-[#04112d] 
focus:ring-2 
focus:ring-[#04112d]/20 
transition"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full rounded-xl 
border border-black/10 
bg-white/80 
px-4 py-3 
placeholder:text-black/40 
focus:outline-none 
focus:border-[#04112d] 
focus:ring-2 
focus:ring-[#04112d]/20 
transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl 
border border-black/10 
bg-white/80 
px-4 py-3 
placeholder:text-black/40 
focus:outline-none 
focus:border-[#04112d] 
focus:ring-2 
focus:ring-[#04112d]/20 
transition"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Project Details */}
              <div>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl 
border border-black/10 
bg-white/80 
px-4 py-3 
placeholder:text-black/40 
focus:outline-none 
focus:border-[#04112d] 
focus:ring-2 
focus:ring-[#04112d]/20 
transition"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 rounded-xl bg-[#04112d] text-white flex items-center justify-center gap-2 hover:bg-gray-900 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {state.submitting ? "Sending..." : "Let’s Talk"}
              </button>

              <p className="text-center text-sm text-gray-500">
                We usually respond within 1–2 days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

export default HireUs;
