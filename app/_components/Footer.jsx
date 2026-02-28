import React from "react";
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Send,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#04112d] text-slate-400 pt-20 pb-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto items-center ">
        
        <div className="grid md:grid-cols-2 gap-16">
          
          
          <div>
            <h2 className="text-2xl font-semibold text-white">
              High5 Labs
            </h2>
            <p className="mt-6 leading-relaxed max-w-sm">
              We craft scalable digital experiences, blending
              design and engineering to help ambitious brands grow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

         
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="text-white font-medium mb-6">
                Company
              </h3>
              <ul className="space-y-3">
                {["About", "Careers", "Contact", "Privacy Policy"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-white transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6">
                Resources
              </h3>
              <ul className="space-y-3">
                {["Blog", "Case Studies", "Documentation", "Support"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="hover:text-white transition"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
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