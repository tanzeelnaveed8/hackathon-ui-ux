'use client'
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[977px] ">
      {/* Hero Image */}
      <Image
        src="/Frame.svg" 
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
    </div>
  );
};

export default HeroImage;
