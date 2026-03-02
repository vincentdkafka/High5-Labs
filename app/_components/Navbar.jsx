import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#FEFBF6] ">
      <div className="flex justify-between mx-40 py-6 border-b-2 border-black">
        <div>
          <Image src="/logo3.png" width={50} height={50} alt="logo" />
        </div>

        <div>
          <ul className="flex items-center gap-16 font-normal text-lg text-black ">
            <a className="hover:scale-110 text-[#04112d] transition duration-300" href="#home">Home</a>
            <a className="hover:scale-110 text-[#04112d] transition duration-300" href="#services">Services</a>
            <a className="hover:scale-110 text-[#04112d] transition duration-300" href="#approach">Approach</a>
            <a className="hover:scale-110 text-[#04112d] transition duration-300" href="#projects">Projects</a>
            <a className="hover:scale-110 text-[#04112d] transition duration-300" href="#contact">
            <Button className=" bg-[#04112d] rounded-4xl w-32 h-10 font-normal text-lg">
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
