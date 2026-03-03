import React from "react";
import { ArrowUpRight, Tag } from "lucide-react";

const projects = [
  {
    title: "AI SaaS App",
    description:
      "A full-stack AI-powered SaaS platform built on the PERN stack with OpenAI and ClipDrop integrations. Features include image generation, resume review, secure Clerk authentication, and a responsive React + Tailwind UI.",
    image: "/1.png",
    tags: ["React", "Node.js", "PostgreSQL", "OpenAI", "Clerk"],
  },
  {
    title: "CALC-AI",
    description:
      "An intelligent AI calculator that understands mathematical problems in text and image form, solves them symbolically and numerically, and renders beautifully formatted results using MathJax.",
    image: "/2.png",
    tags: ["Python", "TypeScript", "React", "MathJax", "Tailwind CSS"],
  },
  {
    title: "Jobfit-AI",
    description:
      "An AI-powered mock interview platform with voice-based interviews, real-time grading, and performance feedback. Built using Next.js, Tailwind CSS, Shadcn UI, and Google authentication.",
    image: "/3.png",
    tags: ["Next.js", "Google Auth", "Vapi AI", "Tailwind CSS"],
  },
  {
    title: "Outerstella – Drive Clone",
    description:
      "A modern cloud storage platform inspired by Google Drive, allowing file upload, organization, sharing, 100MB free storage, and OTP verification using Next.js and Appwrite.",
    image: "/outerstella.png",
    tags: ["Next.js", "Appwrite", "Node.js", "Tailwind CSS"],
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
