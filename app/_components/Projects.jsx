import React from "react";
import { ArrowUpRight, Tag } from "lucide-react";

const projects = [
  {
    title: "eYoga",
    description: "A revamped and dynamic approach to yoga analytics",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1200&auto=format&fit=crop",
    tags: ["Discovery", "Brand Guidelines", "Yoga"],
  },
  {
    title: "Nike React",
    description: "Rewriting sport's playbook for billions of athletes",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop",
    tags: ["Brand Strategy", "Visual Identity"],
  },
  {
    title: "Day Spa",
    description: "Designing a new cocktail can",
    image:
      "https://images.unsplash.com/photo-1649999920973-ab6bfd0c0017?q=80&w=1200&auto=format&fit=crop",
    tags: ["Brand Strategy", "Visual Identity"],
  },
  {
    title: "Diamond Dynamics",
    description: "From cutting-edge equipment to stylish apparel",
    image:
      "https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=1200&auto=format&fit=crop",
    tags: ["Sports Gear", "Equipment", "Discovery"],
  },
];

const Projects = () => {
  return (
    <section className="px-40 bg-[#FEFBF6]">
      <div className="px-40 border-t-2 mt-20 border-black"></div>

      <div>
        <h2 className="text-5xl font-semibold mt-18 mb-12">Selected Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a key={index} href="#" className="group block">
              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-black transition">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="opacity-0 group-hover:opacity-100 transition duration-300"
                    size={20}
                  />
                </div>

                <p className="mt-2 text-gray-600">{project.description}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs bg-white border px-3 py-1.5 rounded-full shadow-sm"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="px-40 border-t-2 mt-20 border-black"></div>
      </div>
    </section>
  );
};

export default Projects;
