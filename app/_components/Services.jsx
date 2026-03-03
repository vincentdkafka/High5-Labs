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
    <section id="services" className="bg-[#FEFBF6] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row border-t-2 border-black">
          <div className="lg:w-1/3 py-8 lg:py-16 pr-0 lg:pr-10">
            <h2 className="text-4xl lg:text-5xl font-semibold">What we do?</h2>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 mt-8 lg:mt-20 relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  p-8 lg:p-16
                  border-black
                  ${index % 2 === 0 ? "md:border-r" : ""}
                  ${index < services.length - 1 ? "border-b" : "md:border-b-0"}
                  ${index === services.length - 2 ? "md:border-b-0" : ""}
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
        <div className="border-t-2 mt-12 lg:mt-20 border-black"></div>
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
