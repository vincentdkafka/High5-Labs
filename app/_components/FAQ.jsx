"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I cancel at anytime?",
    answer:
      "Yes, you can cancel anytime. No questions asked, but we’d love your feedback!",
  },
  {
    question: "My team has credits. How do we use them?",
    answer:
      "Once your team subscribes, you can apply credits directly during usage.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Our pricing is tier-based depending on your business needs.",
  },
  {
    question: "How secure is the platform?",
    answer:
      "We prioritize data protection using modern security practices.",
  },
  {
    question: "How do I access purchased themes?",
    answer:
      "Login → Profile → Purchases → Download your assets anytime.",
  },
  {
    question: "Can I upgrade my license?",
    answer:
      "Yes, you can upgrade anytime by paying the difference.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="max-w-7xl bg-[#FEFBF6] mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        
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
    </section>
  );
}