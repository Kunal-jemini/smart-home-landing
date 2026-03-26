import { ArrowChip } from "./BentoHeroCard";
import Image from "next/image";

interface BentoCardProps {
  label: string;
  description: string;
  icon: string;
  image: string;
  index: number;
}

export default function BentoCard({ label, description, icon, image, index }: BentoCardProps) {
  return (
    <>
      {/* 1. Image (Darkened slightly to ensure text is readable without gradient) */}
     <Image
      src={image}
      alt={label}
      fill
      quality={75} // <-- Reduces quality slightly for massive speed gains (default is 75, you can go to 60)
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // <-- Tells browser exactly what size to download
      priority={index < 4} // <-- Add this ONLY for the first 2-4 images you see on screen without scrolling!
      className="object-cover z-0 brightness-[0.65] contrast-[1.1] transition-all duration-700 ease-out"
      />

      {/* 2. Content */}
      <div className="relative z-20 h-full flex flex-col justify-between p-5">
        
        {/* Top */}
        {/* <div className="flex items-start justify-between">
          <div className="w-9 h-9 flex items-center justify-center text-base bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg group-hover:bg-white/20 transition-all duration-300">
            {icon}
          </div>
          <ArrowChip size="sm" />
        </div> */}

        {/* Bottom */}
        <div className="space-y-1 mt-auto">
          {/* Increased drop-shadow slightly to compensate for missing gradient */}
          <h3 className="font-bold text-white leading-tight tracking-tight group-hover:text-yellow-400 transition-colors duration-300 text-sm md:text-base drop-shadow-lg">
            {label}
          </h3>
          <p className="text-slate-200 text-xs line-clamp-1 group-hover:text-white transition-colors drop-shadow-md">
            {description}
          </p>
        </div>
        
      </div>
    </>
  );
}