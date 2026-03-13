import React from "react";
import { ArrowUpRight, Tag } from "lucide-react";

const projects = [
  {
    title: "AI SaaS App",
    description:
      "A scalable AI-powered SaaS platform designed to automate business workflows and content generation. Built with modern web technologies and integrated with powerful AI APIs to deliver smart automation, user authentication, and a clean dashboard experience.",
    image: "/1.jpg",
    tags: ["Next.js", "React", "Node.js", "OpenAI API", "Tailwind CSS"],
  },
  {
    title: "AI Receptionist",
    description:
      "An intelligent AI receptionist that can answer customer queries, handle incoming calls or chats, and schedule appointments automatically. Designed to reduce manual workload for businesses while providing fast and natural conversational responses.",
    image: "/2.jpg",
    tags: ["Next.js", "Vapi AI", "Voice AI", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Lead Tracker",
    description:
      "A smart lead management system that helps businesses capture, track, and organize potential clients in one dashboard. Includes lead status tracking, contact management, and insights to help teams convert leads into customers efficiently.",
    image: "/3.jpg",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Dashboard UI"],
  },
  {
    title: "AI-Powered Landing Page",
    description:
      "A high-conversion landing page built with AI-driven elements such as intelligent chat assistance, automated lead capture, and dynamic content personalization to help businesses stand out and improve customer engagement.",
    image: "/4.png",
    tags: ["Next.js", "React", "AI Integration", "Tailwind CSS", "SEO Optimized"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#FEFBF6] py-16 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="border-t-2 border-black mb-12 lg:mb-18"></div>
        <h2 className="text-4xl lg:text-5xl font-semibold mb-12">Selected Projects</h2>

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
        <div className="border-t-2 mt-16 lg:mt-20 border-black"></div>
      </div>
    </section>
  );
};

export default Projects;
