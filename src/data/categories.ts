export type Category = {
  id: string;
  label: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  { 
    id: "smart-lighting", 
    label: "Smart Lighting", 
    description: "Bulbs, strips & ambient lighting.",
    image: "/images/smart lighting.png" 
  },
  { 
    id: "smart-switches-dimmers", 
    label: "Smart Switches & Dimmers", 
    description: "Wall switches, dimmers & scenes.",
    image: "/images/smart switches.png" 
  },
  { 
    id: "smart-climate", 
    label: "Smart Climate Control", 
    description: "AC controllers, thermostats & sensors.",
    image: "/images/climate control.png" 
  },
  { 
    id: "media-entertainment", 
    label: "Entertainment & Media", 
    description: "TV, speakers & streaming devices.",
    image: "/images/entertainment.png" 
  },
{ 
    id: "controllers-panels", 
    label: "Controllers & Smart Panels", 
    description: "Central control hubs & panels.",
    image: "/images/smart-controller.png" 
  },
  { 
    id: "smart-security", 
    label: "Smart Security & Surveillance", 
    description: "Cameras, locks & sensors.",
    image: "/images/smart-security.png" 
  },
  { 
    id: "energy-management", 
    label: "Smart Energy Management", 
    description: "Smart plugs, meters & monitoring.",
    image: "/images/energy-management.png" 
  },
  { 
    id: "home-comfort", 
    label: "Smart Home Comfort", 
    description: "Shades, diffusers & ambiance.",
    image: "/images/home-comfort.png" 
  },
  { 
    id: "cleaning-maintenance", 
    label: "Smart Cleaning & Maintenance", 
    description: "Robot vacuums & tools.",
    image: "/images/cleaning.png" 
  },
  { 
    id: "gardening-outdoors", 
    label: "Smart Gardening & Outdoors", 
    description: "Sprinklers, outdoor lights & more.",
    image: "/images/gardening.png" 
  },
  { 
    id: "kitchen-appliances", 
    label: "Smart Kitchen Appliances", 
    description: "Cookers, coffee makers & more.",
    image: "/images/smart kitchen.png" 
  }
];