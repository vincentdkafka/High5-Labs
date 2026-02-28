import { Waves } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Web Design",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
  },
  {
    title: "Web Development",
    description:
      "High-performance, scalable websites built with modern technologies for long-term growth.",
  },
  {
    title: "UI/UX Strategy",
    description:
      "We craft intuitive experiences that convert visitors into loyal customers.",
  },
  {
    title: "Brand Identity",
    description:
      "Strategic visual systems that give your business a distinctive presence.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#FEFBF6]">
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

const ServiceCard = ({ title, description }) => {
  return (
    <div className="flex items-start gap-6">
      {/* ICON */}
      <div className="w-14 h-14 flex items-center justify-center">
        <Waves size={28} />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        <p className="text-gray-700 leading-relaxed max-w-sm">{description}</p>
      </div>
    </div>
  );
};

export default Services;
