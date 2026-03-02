import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div id="home" className="bg-[#FEFBF6] w-full">
      <div className="flex justify-between px-40 py-24">
        <div>
          <h2 className="font-light mt-16 text-2xl ">We’re Not a Traditional Agency</h2>
          <h1 className="text-7xl mt-4">We’re Your Technical <br  /> Growth Partner..</h1>
          <p className="text-lg mt-6">
            We don’t follow trends — we build what others try to copy. From
            strategy to execution, we craft high-performance digital experiences
            that drive real growth, not just traffic.
          </p>

          <a href="#projects">
        <Button className=" bg-[#04112d] mt-8 h-12 w-40 rounded-4xl">View projects <span className=""><MoveRight /></span></Button>

          </a>
        </div>

        <div>
          <Image
            src="/wallpaper.png"
            width={700}
            height={995}
            alt="right side"
          />
        </div>

      </div>

      
      
    </div>
  );
};

export default Hero;
