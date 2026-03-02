import { Cpu, GitBranch, ImageIcon, Puzzle, Waves } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Workflow Architecture",
    description:
      "Seamless system design that connects your tools and processes into one unified ecosystem.",
    icon: GitBranch,
  },
  {
    title: "AI Automation",
    description:
      "Intelligent automation solutions that eliminate manual work and scale your operations effortlessly.",
    icon: Cpu,
  },
  {
    title: "Custom Enterprise Extensions",
    description:
      "Tailored software enhancements built to extend and optimize your existing infrastructure.",
    icon: Puzzle,
  },
  {
    title: "Digital Asset Production",
    description:
      "High-impact visual and digital assets crafted to elevate your brand identity.",
    icon: ImageIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#FEFBF6]">
      <div className="flex-row justify-between px-40 py-24 ">
        <div className="grid lg:grid-cols-3 border-t-2 border-black">
          <div className="py-16 pr-10 mt-10">
            <h2 className="text-5xl font-semibold">What we do?</h2>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-2 grid md:grid-cols-2 mt-20 relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  p-16
                  ${index % 2 === 0 ? "border-r border-black" : ""}
                  ${index < 2 ? "border-b border-black" : ""}
                `}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-40 border-t-2 mt-20 border-black"></div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex items-start gap-6">
     
     <div className="w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
       <Icon size={28}/>
     </div>

     
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        <p className="text-gray-700 leading-relaxed max-w-sm">{description}</p>
      </div>
    </div>
  );
};

export default Services;
