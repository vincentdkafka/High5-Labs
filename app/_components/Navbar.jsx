"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="w-full bg-[#FEFBF6] sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-20 py-4 lg:py-6 flex justify-between items-center border-b-2 border-black/10 lg:border-black">
        <Link href="/" className="flex items-center">
          <Image src="/logo3.png" width={50} height={50} alt="logo" className="w-10 h-10 lg:w-12 lg:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block font-normal text-lg text-black">
          <ul className="flex items-center gap-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a className="hover:text-blue-600 transition duration-300" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
            <a href="#contact">
              <Button className="bg-[#04112d] rounded-full px-8 py-2 font-normal text-lg hover:scale-105 transition duration-300">
                Let's Talk
              </Button>
            </a>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#FEFBF6] flex flex-col items-center justify-center space-y-8 text-2xl font-medium animate-in fade-in slide-in-from-top-4">
          <button
            className="absolute top-6 right-4 text-black"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <Button className="bg-[#04112d] rounded-full px-12 py-4 text-xl font-normal">
              Let's Talk
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
