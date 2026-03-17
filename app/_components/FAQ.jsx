"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does HIGH5 Agency offer?",
    answer:
      "We specialize in AI automation, custom web development, and business workflow optimization to help you scale faster with less manual effort.",
  },

  {
    question: "Do you provide custom solutions or templates?",
    answer:
      "Everything we build is tailored to your business needs. We don’t use generic templates unless specifically requested.",
  },

  {
    question: "Will I get support after the project is completed?",
    answer:
      "Absolutely. We provide post-launch support, updates, and maintenance to ensure everything runs smoothly.",
  },

  {
    question: "Do you work with small businesses or only large companies?",
    answer:
      "We work with startups, small businesses, and growing companies looking to scale using smart digital solutions.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact us through the website or book a call. We’ll analyze your needs and suggest the best solution for your business.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FEFBF6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Everything you need to know about our services.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-neutral-700 rounded-xl p-4 transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold text-lg text-gray-800 dark:text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    active === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
