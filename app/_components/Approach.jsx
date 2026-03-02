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
    title: "Market Research and Analysis",
    description:
      "Identify your target audience and understand their needs, preferences, and behaviors.",
    icon: Search,
  },
  {
    title: "Product Development and Testing",
    description:
      "Develop digital products or services that address the needs and preferences of your audience.",
    icon: Sparkles,
  },
  {
    title: "Marketing and Promotion",
    description:
      "Develop a comprehensive marketing strategy to promote your digital products or services.",
    icon: LineChart,
  },
  {
    title: "Launch and Optimization",
    description:
      "Launch your product and continuously optimize based on performance and user feedback.",
    icon: Rocket,
  },
];

const Approach = () => {
  return (
    <section id="approach" className="bg-[#FEFBF6] px-40">
      <div className=" mx-auto ">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl font-semibold tracking-tight">
            Our Approach
          </h2>
          <p className="mt-4 items-center text-gray-600 text-lg">
            From research to launch, we execute a structured process that
            transforms ideas into scalable digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                return (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-8.5 top-1"></div>

                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-14 ">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-medium transition hover:scale-105 hover:bg-gray-900"
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
