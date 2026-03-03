import React from "react";
import {
  ArrowUpRight,
  Phone,
  Search,
  Rocket,
  LineChart,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    title: "Business Discovery and Strategy",
    description:
      "Analyze your business model, workflows, and market position to identify high-impact digital and automation opportunities.",
    icon: Search,
  },
  {
    title: "Solution Architecture and Design",
    description:
      "Design scalable web platforms and AI-driven systems tailored to optimize operations and customer experience.",
    icon: Sparkles,
  },
  {
    title: "Development and AI Integration",
    description:
      "Build high-performance web applications and embed intelligent automation to streamline processes and boost efficiency.",
    icon: LineChart,
  },
  {
    title: "Deployment and Continuous Optimization",
    description:
      "Launch with precision and continuously refine performance, security, and automation based on real-time insights.",
    icon: Rocket,
  },
];

const Approach = () => {
  return (
    <section id="approach" className="bg-[#FEFBF6] py-2 lg:py-4">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="max-w-3xl mb-12 lg:mb-16 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            Our Approach
          </h2>
          <p className="mt-4 text-gray-600 text-base lg:text-lg">
            From research to launch, we execute a structured process that
            transforms ideas into scalable digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-3xl aspect-5/5">
            <img
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=1200&auto=format&fit=crop"
              alt="Our Process"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">
              Steps
            </p>

            <div className="space-y-12 relative border-l border-gray-200 pl-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#04112d] text-white">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-14 ">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#04112d] text-white rounded-full text-sm font-medium transition hover:scale-105 hover:bg-gray-900"
              >
                <Phone size={16} />
                Schedule a Call
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
