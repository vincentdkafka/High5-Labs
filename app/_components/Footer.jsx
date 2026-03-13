import React from "react";
import { Twitter, Instagram, Linkedin, Github, Send } from "lucide-react";

const socialLinks = [
  ,
  { icon: Instagram, href: "https://www.instagram.com/_high5_labs/" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/high5-labs/" },
  { icon: Github, href: "https://github.com/yourusername" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#04112d] text-slate-400 pt-16 lg:pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-white">High5 Labs</h2>
            <p className="mt-6 leading-relaxed max-w-sm">
              We craft scalable digital experiences, blending design and
              engineering to help ambitious brands grow.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-white font-medium mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#projects" className="hover:text-white transition">
                    Projects
                  </a>
                </li>

                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6">Resources</h3>
              <ul className="space-y-3">
                {[
                  "Email: high5labs2026@gmail.com",
                  "+91 7053091501",
                  "Internship",
                ].map((item, i) => {
                  const isInternship = item === "Internship";

                  return (
                    <li key={i}>
                      <a
                        href={
                          isInternship
                            ? "/internship"
                            : "#Home"
                        }
                        
                        className="hover:text-white transition"
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {year} High5 Labs. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
