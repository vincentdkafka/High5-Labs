import React from "react";
import { Check, Star, Send, ShieldCheck, Users } from "lucide-react";

const expectations = [
  "Industry-leading design",
  "Developer community support",
  "Simple and affordable",
];

const HireUs = () => {
  return (
    <section className="py-24 bg-[#FEFBF6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h1 className="text-5xl font-semibold mt-20 tracking-tight">Hire Us</h1>

            <p className="mt-4 text-lg text-gray-600 max-w-lg">
              We help brands and platforms turn bold ideas into beautiful
              digital products and scalable experiences.
            </p>

            
            <div className="mt-10">
              <h3 className="text-xl font-semibold">What can you expect?</h3>

              <ul className="mt-6 space-y-4">
                {expectations.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          
          </div>

          
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-10 border">
            <h2 className="text-2xl font-semibold">
              Let’s build something great
            </h2>

            <form className="mt-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input label="First Name" />
                <Input label="Last Name" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <ShieldCheck size={16} className="mt-1" />
                <p>
                  By submitting this form you agree to our{" "}
                  <span className="underline cursor-pointer">
                    privacy policy
                  </span>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-900 transition"
              >
                <Send size={16} />
                Lets Talk
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
