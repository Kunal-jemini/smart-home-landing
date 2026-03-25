export interface BentoConfig {
  id: string;
  col: string;
  row: string;
}

export const bentoLayout: BentoConfig[] = [
  { id: "smart-lighting",         col: "md:col-span-4", row: "md:row-span-1" },
  { id: "smart-switches-dimmers", col: "md:col-span-6", row: "md:row-span-1" },
  { id: "media-entertainment",    col: "md:col-span-4", row: "md:row-span-1" },
  { id: "smart-climate",          col: "md:col-span-6", row: "md:row-span-2" },
  { id: "controllers-panels",     col: "md:col-span-10", row: "md:row-span-2" }, // Larger card
  { id: "smart-security",         col: "md:col-span-4", row: "md:row-span-2" },
  { id: "energy-management",      col: "md:col-span-6", row: "md:row-span-1" },
  { id: "home-comfort",           col: "md:col-span-6", row: "md:row-span-1" },
  { id: "cleaning-maintenance",   col: "md:col-span-4", row: "md:row-span-1" },
  { id: "gardening-outdoors",     col: "md:col-span-6", row: "md:row-span-1" },
  { id: "kitchen-appliances",     col: "md:col-span-4", row: "md:row-span-1" },
];