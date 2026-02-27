import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#FEFBF6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-20">
        <Image 
        src="/Logo2.png"
        width={40}
        height={40}
        alt="logo"/>


    
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <ul className="hidden md:flex gap-8 font-medium text-black">
          <Link href="/"><li className="cursor-pointer hover:scale-105">Home</li></Link>
          <Link href="/projects"><li className="cursor-pointer hover:scale-105">About</li></Link>
          <Link href="/services"><li className="cursor-pointer hover:scale-105">Project</li></Link>
          <Link href="/about"><li className="cursor-pointer hover:scale-105">Services</li></Link>
          <Link href="/contact"><li className="cursor-pointer hover:scale-105">Contact</li></Link>
            <Button>click here</Button>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
