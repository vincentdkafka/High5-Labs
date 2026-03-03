import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div id="home" className="bg-[#FEFBF6] w-full overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-24 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="font-light mt-8 lg:mt-16 text-xl lg:text-2xl ">We’re Not a Traditional Agency</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mt-4 font-bold leading-tight">
            We’re Your Technical <br className="hidden lg:block" /> Growth Partner..
          </h1>
          <p className="text-base lg:text-lg mt-6 text-gray-700 max-w-2xl mx-auto lg:mx-0">
            We don’t follow trends — we build what others try to copy. From
            strategy to execution, we craft high-performance digital experiences
            that drive real growth, not just traffic.
          </p>

          <a href="#projects" className="inline-block">
            <Button className="bg-[#04112d] mt-8 h-12 w-44 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              View projects <MoveRight size={20} />
            </Button>
          </a>
        </div>

        <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
          <Image
            src="/wallpaper.png"
            width={560}
            height={795}
            alt="Technical Growth Partner"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
