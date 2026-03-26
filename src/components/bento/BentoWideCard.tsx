import { BentoCardProps } from "@/types/bento";
import { ArrowChip } from "./BentoHeroCard";

export default function BentoWideCard({
  label, description, icon, image,
}: BentoCardProps) {
  return (
    <div className="flex h-full w-full">
      {/* Left: image half */}
      <div className="w-2/5 h-full relative overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]" />
      </div>

      {/* Right: text */}
      <div className="flex-1 flex flex-col justify-between px-7 py-6">
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 flex items-center justify-center text-xl bg-white/10 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-white/20 transition-all duration-300">
            {icon}
          </div>
          <ArrowChip size="sm" />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
            {label}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-400 group-hover:gap-2.5 transition-all duration-300 pt-1">
            Explore all
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}