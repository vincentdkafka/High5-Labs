import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#FEFBF6] ">
      <div className="flex justify-between mx-40 py-6 border-b-2 border-black">
        <div>
          <Image src="/Logo2.png" width={50} height={50} alt="right side" />
        </div>

        <div>
          <ul className="flex items-center gap-16 font-normal text-lg text-black">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#projects">Projects</a>
            <a href="#contact">
            <Button className="rounded-4xl w-32 h-10 font-normal text-lg">
              Let's Talk
            </Button>

            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
