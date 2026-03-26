interface ArrowChipProps {
  size?: "sm" | "lg";
}

export function ArrowChip({ size = "sm" }: ArrowChipProps) {
  const dim = size === "lg" ? "w-9 h-9" : "w-7 h-7";
  const icon = size === "lg" ? "w-4 h-4" : "w-3 h-3";
  return (
    <div className={`${dim} flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-300`}>
      <svg className={`${icon} text-white/30 group-hover:text-white transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </div>
  );
}