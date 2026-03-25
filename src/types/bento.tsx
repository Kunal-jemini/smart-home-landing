export type BentoSize = "hero" | "wide" | "tall" | "standard";

export interface BentoConfig {
  id: string;
  size: BentoSize;
}

export interface BentoCardProps {
  id: string;
  label: string;
  description: string;
  image: string;
  index: number;
  size: BentoSize;
}