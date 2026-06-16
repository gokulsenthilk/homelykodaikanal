export type HolidayPackage = {
  name: string;
  duration: string;
  audience: "family" | "couple";
  description: string;
  includes: string[];
  price: string;
  featured?: boolean;
};

export type StayPackage = {
  name: string;
  description: string;
  price: string;
};

export const navItems = [
  { label: "Places", href: "/#places" },
  { label: "Holiday Packages", href: "/#holiday-packages" },
  { label: "Stay Packages", href: "/#stay-packages" },
  { label: "Contact", href: "/#contact" }
] as const;

export const tripHighlights = [
  {
    title: "2 to 4 day plans",
    description: "Balanced sightseeing, food stops, and rest time."
  },
  {
    title: "Local routes",
    description: "Lake, forest, viewpoint, garden, and waterfall circuits."
  },
  {
    title: "Flexible stays",
    description: "Budget rooms, cottages, villas, and honeymoon stays."
  }
] as const;

export const holidayPackages: HolidayPackage[] = [
  {
    name: "Quick Hill Escape",
    duration: "2D / 1N",
    audience: "family",
    description: "Lake boating, Bryant Park, Coaker's Walk, local market, and breakfast stay.",
    includes: ["Private cab for local sightseeing", "Standard room stay", "Good for weekend travel"],
    price: "Rs. 6,499"
  },
  {
    name: "Family Hills Circuit",
    duration: "3D / 2N",
    audience: "family",
    description: "Pine Forest, Pillar Rocks, lake time, waterfall route, garden visit, and relaxed evening slots.",
    includes: ["Breakfast and dinner included", "Family-friendly vehicle", "Balanced plan for kids and elders"],
    price: "Rs. 10,999",
    featured: true
  },
  {
    name: "Romantic Mist Getaway",
    duration: "4D / 3N",
    audience: "couple",
    description: "Valley viewpoints, private cottage stay, lake walk, candlelight dinner, and slow mornings.",
    includes: ["Premium room or cottage", "Couple photoshoot route", "Flexible pickup options"],
    price: "Rs. 16,499"
  }
];

export const stayPackages: StayPackage[] = [
  {
    name: "Lakeside Comfort",
    description: "Clean rooms near the lake with breakfast, parking support, and easy market access.",
    price: "Rs. 2,800 / night"
  },
  {
    name: "Valley View Cottage",
    description: "Private cottage stay with bonfire setup, garden space, and morning tea views.",
    price: "Rs. 4,500 / night"
  },
  {
    name: "Premium Mist Villa",
    description: "Villa-style stay for families and groups with kitchen access and curated local sightseeing.",
    price: "Rs. 8,500 / night"
  }
];
