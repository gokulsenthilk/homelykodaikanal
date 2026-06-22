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
  propertySlug: string;
  price: string;
};

export type Property = {
  name: string;
  slug: string;
  status: "available" | "coming-soon";
  eyebrow: string;
  summary: string;
  description: string;
  address?: string;
  mapUrl?: string;
  photosUrl?: string;
  airbnbUrl?: string;
  stayVistaUrl?: string;
  instagramUrl?: string;
  image: string;
  imageAlt: string;
  facts: { label: string; value: string }[];
  amenities: string[];
  highlights: string[];
  reviewSummary?: string;
};

export const contactNumber = "+91 9940305925";
export const contactHref = "tel:+919940305925";

export const navItems = [
  { label: "Properties", href: "/properties" },
  { label: "Holiday Packages", href: "/holiday-packages" },
  { label: "Stay Packages", href: "/stay-packages" },
  { label: "Places", href: "/places" },
  { label: "Contact", href: "/contact" }
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
    name: "Belle Vue Villa 3BHK Stay",
    description:
      "Private 3-bedroom villa in Attuvampatti for families, couples, and small groups, with kitchen access, parking, caretaker support, and relaxed outdoor space.",
    propertySlug: "belle-vue-villa",
    price: "Call for current tariff"
  },
  {
    name: "Veranda Luxe 5BR Group Stay",
    description:
      "Premium five-bedroom valley-view villa in Vala Kattu Odai for larger families, celebrations, and group getaways, with garden, balconies, bonfire, and barbecue options.",
    propertySlug: "veranda-luxe-stay",
    price: "Call for current tariff"
  }
];

export const propertyLinks = {
  belleVuePhotos:
    "https://photos.google.com/share/AF1QipMZxR4HWCW6GrygixIZvT202gjNE9UkQyILm1ux1KRMBlBFZP-GitsDJFfKwkyyPw?key=TzB2REl6MklaVE43ejQ4Skt2dGVCLVJoOG5nNFB3",
  belleVueMaps: "https://maps.app.goo.gl/ymEU8u32EAmKHVQ57",
  instagram: "https://www.instagram.com/homely.kodai/",
  verandaInstagram: "https://www.instagram.com/veranda_luxe_stay/",
  verandaAirbnb:
    "https://www.airbnb.co.in/rooms/1630150829936801408?source_impression_id=p3_1781633553_P3m_6N7d7v1WJerd",
  verandaStayVista:
    "https://www.stayvista.com/villa/veranda-luxe-stay?checkin=2026-06-28&checkout=2026-06-29&rooms_booked=5",
  verandaMaps: "https://maps.app.goo.gl/29gy1o6CjE3bjV5W6"
} as const;

export const belleVueGallery = [
  {
    src: "/images/properties/belle-vue/gallery-01.jpg",
    alt: "Belle Vue Villa exterior and Kodaikanal hill setting"
  },
  {
    src: "/images/properties/belle-vue/gallery-02.jpg",
    alt: "Belle Vue Villa living and lounge space"
  },
  {
    src: "/images/properties/belle-vue/gallery-03.jpg",
    alt: "Belle Vue Villa bedroom interior"
  },
  {
    src: "/images/properties/belle-vue/gallery-04.jpg",
    alt: "Belle Vue Villa dining and family space"
  },
  {
    src: "/images/properties/belle-vue/gallery-05.jpg",
    alt: "Belle Vue Villa terrace and outdoor area"
  },
  {
    src: "/images/properties/belle-vue/gallery-06.jpg",
    alt: "Belle Vue Villa bathroom and amenities"
  },
  {
    src: "/images/properties/belle-vue/gallery-07.jpg",
    alt: "Belle Vue Villa private room detail"
  },
  {
    src: "/images/properties/belle-vue/gallery-08.jpg",
    alt: "Belle Vue Villa furnished interiors"
  },
  {
    src: "/images/properties/belle-vue/gallery-09.jpg",
    alt: "Belle Vue Villa parking and entry area"
  },
  {
    src: "/images/properties/belle-vue/gallery-10.jpg",
    alt: "Belle Vue Villa scenic stay photo"
  }
] as const;

export const verandaLuxeGallery = [
  {
    src: "/images/properties/veranda-luxe/gallery-01.jpg",
    alt: "Veranda Luxe Stay villa exterior and valley-view setting"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-02.jpg",
    alt: "Veranda Luxe Stay landscaped garden and sit-out space"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-03.jpg",
    alt: "Veranda Luxe Stay living area with warm interiors"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-04.jpg",
    alt: "Veranda Luxe Stay bedroom with king bed"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-05.jpg",
    alt: "Veranda Luxe Stay dining and common space"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-06.jpg",
    alt: "Veranda Luxe Stay veranda and green views"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-07.jpg",
    alt: "Veranda Luxe Stay bedroom balcony detail"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-08.jpg",
    alt: "Veranda Luxe Stay bathroom and guest amenities"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-09.jpg",
    alt: "Veranda Luxe Stay lawn and outdoor gathering area"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-10.jpg",
    alt: "Veranda Luxe Stay interior seating and decor"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-11.jpg",
    alt: "Veranda Luxe Stay villa facade"
  },
  {
    src: "/images/properties/veranda-luxe/gallery-12.jpg",
    alt: "Veranda Luxe Stay scenic Kodaikanal stay photo"
  }
] as const;

export const properties: Property[] = [
  {
    name: "Belle Vue Villa",
    slug: "belle-vue-villa",
    status: "available",
    eyebrow: "Luxury 3BHK villa in Attuvampatti",
    summary:
      "A private 3-bedroom villa by Homely Kodai for families, couples, and small groups who want a quieter Kodaikanal stay.",
    description:
      "Belle Vue Villa is a spacious independent villa surrounded by greenery, mist, and cool hill-station air. It is set up for relaxed group stays with private bedrooms, a living room, dining area, kitchen access, parking, and outdoor space.",
    address:
      "Plot No. 8, opposite Sterling Valley Resorts, Attuvampatti Crush Road, Attuvampatti, Kodaikanal, Tamil Nadu 624101",
    mapUrl: propertyLinks.belleVueMaps,
    photosUrl: propertyLinks.belleVuePhotos,
    instagramUrl: propertyLinks.instagram,
    image: belleVueGallery[0].src,
    imageAlt: belleVueGallery[0].alt,
    facts: [
      { label: "Property type", value: "Private 3BHK villa" },
      { label: "Location", value: "Attuvampatti, Kodaikanal" },
      { label: "Check-in", value: "2 PM" },
      { label: "Check-out", value: "11 AM" },
      { label: "Parking", value: "Free onsite parking for 1 car" },
      { label: "Best for", value: "Families, couples, and small groups" }
    ],
    amenities: [
      "Kitchenette",
      "Wi-Fi",
      "Power backup",
      "Private living room",
      "Dining area",
      "Barbeque",
      "Indoor games",
      "Caretaker",
      "Housekeeping",
      "Pickup and drop support",
      "First-aid services"
    ],
    highlights: [
      "Spacious bedrooms with comfortable beds",
      "Living room with seating and TV",
      "Fully equipped kitchen for basic cooking",
      "Terrace and outdoor space for cool Kodai weather",
      "Easy access to Kodaikanal sightseeing routes"
    ],
    reviewSummary:
      "Public travel listings show positive early guest feedback, including an 8.3 review score on Booking.com and a 5/5 guest rating on Goibibo."
  },
  {
    name: "Veranda Luxe Stay",
    slug: "veranda-luxe-stay",
    status: "available",
    eyebrow: "Luxury 5-bedroom valley-view villa",
    summary:
      "A premium five-bedroom villa in Vala Kattu Odai with valley views, manicured lawns, attached balconies, and group-friendly spaces.",
    description:
      "Veranda Luxe Stay is a spacious villa for larger families and groups, built around sweeping green views, earth-toned interiors, outdoor sit-outs, a garden, bonfire evenings, barbecue add-ons, and relaxed Kodaikanal itineraries.",
    address: "Vala Kattu Odai, Kodaikanal, Tamil Nadu 624101",
    mapUrl: propertyLinks.verandaMaps,
    airbnbUrl: propertyLinks.verandaAirbnb,
    stayVistaUrl: propertyLinks.verandaStayVista,
    instagramUrl: propertyLinks.verandaInstagram,
    image: verandaLuxeGallery[0].src,
    imageAlt: verandaLuxeGallery[0].alt,
    facts: [
      { label: "Property type", value: "Entire 5-bedroom villa" },
      { label: "Location", value: "Vala Kattu Odai, Kodaikanal" },
      { label: "Capacity", value: "Up to 12 guests" },
      { label: "Bedrooms", value: "5 king-bed bedrooms" },
      { label: "Bathrooms", value: "5 attached bathrooms" },
      { label: "Check-in", value: "2 PM - 7 PM" },
      { label: "Check-out", value: "11 AM" },
      { label: "Best for", value: "Large families, celebrations, and group getaways" }
    ],
    amenities: [
      "Valley view",
      "Wi-Fi",
      "Dedicated workspace",
      "TV",
      "AC",
      "Heater",
      "Attached balconies",
      "Kitchen access",
      "Garden",
      "Board games",
      "Barbecue",
      "Bonfire",
      "Power backup",
      "Caretaker"
    ],
    highlights: [
      "Five ground-floor bedrooms with king beds, attached bathrooms, and balconies",
      "Garden and sit-out spaces for slow mornings and group evenings",
      "Valley-view setting with a graceful veranda and landscaped outdoors",
      "Barbecue and bonfire options for evening gatherings",
      "Located near Kodaikanal sightseeing routes including lake, Bryant Park, and Silver Cascade"
    ],
    reviewSummary:
      "Airbnb lists the villa as a new listing with a 5.0 rating from 1 review, while Booking-linked listings show a 10.0 score from 1 review."
  }
];
