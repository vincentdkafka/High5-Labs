import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="bg-[#FEFBF6] min-h-screen w-full">
      <div className="flex justify-between items-center px-50 py-24">
        <div>
          <h2 className="font-medium">We’re Not a Traditional Agency</h2>
          <h1 className="text-6xl">We’re Your Technical Growth Partner..</h1>
          <p>
            We don’t follow trends — we build what others try to copy. From
            strategy to execution, we craft high-performance digital experiences
            that drive real growth, not just traffic.
          </p>
        </div>

        <Button>View projects</Button>
        <div>
          <Image
            src="/wallpaper.png"
            width={500}
            height={695}
            alt="right side"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
