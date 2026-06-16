import fs from "node:fs";
import { createClient } from "@supabase/supabase-js";

function loadEnvFile(path) {
  if (!fs.existsSync(path)) {
    return;
  }

  const entries = fs.readFileSync(path, "utf8").split(/\r?\n/);

  for (const entry of entries) {
    const trimmed = entry.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    process.env[key.trim()] ??= valueParts.join("=").trim().replace(/^['"]|['"]$/g, "");
  }
}

loadEnvFile(".env.local");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or key in .env.local.");
}

const places = [
  {
    name: "Kodaikanal Lake",
    description:
      "Start with boating, cycling, and a slow walk around the lake. It is the easiest first stop for families and visitors arriving after a long drive.",
    image_url: "/images/lake.png",
    image_alt: "Kodaikanal Lake with misty hills and calm water",
    sort_order: 10
  },
  {
    name: "Pine Forest",
    description: "Cool trails, tall trees, photography stops, and a quiet break between viewpoints.",
    image_url: "/images/pine-forest.png",
    image_alt: "Tall pine trees along a cool Kodaikanal forest trail",
    sort_order: 20
  },
  {
    name: "Silver Cascade Falls",
    description: "A fresh waterfall stop on the route, especially scenic after rain.",
    image_url: "/images/waterfall.png",
    image_alt: "Silver Cascade waterfall near Kodaikanal",
    sort_order: 30
  },
  {
    name: "Coaker's Walk",
    description: "Best for valley views, gentle walking, sunrise light, and mist rolling over the slopes.",
    image_url: "/images/places/coakers-walk.webp",
    image_alt: "Valley view from Coaker's Walk in Kodaikanal",
    sort_order: 40
  },
  {
    name: "Bryant Park",
    description: "Flower beds, lawns, and relaxed family time close to the lake.",
    image_url: "/images/places/bryant-park.webp",
    image_alt: "Bryant Park gardens in Kodaikanal",
    sort_order: 50
  },
  {
    name: "Pillar Rocks & Green Valley View",
    description: "Add these viewpoints on a clear morning for dramatic cliffs, distant valleys, and cooler air.",
    image_url: "/images/places/pillar-rocks.webp",
    image_alt: "Pillar Rocks viewpoint in Kodaikanal",
    sort_order: 60
  },
  {
    name: "Mannavanur Lake",
    description:
      "Plan this as a calmer countryside drive with open meadows, lake views, birdlife, and a slower pace away from the busiest town circuit.",
    image_url: "/images/places/mannavanur-lake.webp",
    image_alt: "Mannavanur Lake landscape near Kodaikanal",
    sort_order: 70
  },
  {
    name: "Poombarai Village View Point",
    description:
      "A colorful hill-village viewpoint with terraced slopes, photo stops, and a scenic route toward Mannavanur.",
    image_url: "/images/places/poombarai-viewpoint.webp",
    image_alt: "Poombarai village and terraced hills near Kodaikanal",
    sort_order: 80
  },
  {
    name: "Berijam Lake",
    description:
      "A quiet forest-side lake route known for cool air, peaceful views, and a more protected nature-drive feel.",
    image_url: "/images/places/berijam-lake.webp",
    image_alt: "Berijam Lake surrounded by forest near Kodaikanal",
    sort_order: 90
  },
  {
    name: "Kurinji Andavar Temple",
    description:
      "A peaceful temple stop with hill views and a cultural pause between the lake, town, and viewpoint routes.",
    image_url: "/images/places/kurinji-andavar-temple.webp",
    image_alt: "Kurinji Andavar Temple in Kodaikanal",
    sort_order: 100
  },
  {
    name: "Dolphin's Nose",
    description:
      "A dramatic rocky viewpoint reached by a short trek, best suited for travellers who enjoy walking and wide valley views.",
    image_url: "/images/places/dolphins-nose.webp",
    image_alt: "Dolphin's Nose viewpoint near Kodaikanal",
    sort_order: 110
  },
  {
    name: "Guna Cave",
    description:
      "A popular cave-and-root landscape near the forest circuit, usually paired with Pillar Rocks and Moir Point.",
    image_url: "/images/places/guna-cave.webp",
    image_alt: "Guna Cave forest path in Kodaikanal",
    sort_order: 120
  },
  {
    name: "Kuzhanthai Velappar Temple",
    description:
      "A calm Poombarai temple visit that works well with village viewpoints and the Mannavanur countryside route.",
    image_url: "/images/places/kuzhanthai-velappar-temple.webp",
    image_alt: "Kuzhanthai Velappar Temple at Poombarai near Kodaikanal",
    sort_order: 130
  }
];

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

let { error } = await supabase.from("places").upsert(places, {
  onConflict: "name"
});

if (error?.message.includes("image_alt")) {
  const placesWithoutImageAlt = places.map(({ image_alt, ...place }) => place);
  ({ error } = await supabase.from("places").upsert(placesWithoutImageAlt, {
    onConflict: "name"
  }));
}

if (error) {
  const setupHint = error.message.includes("unique or exclusion constraint")
    ? " Run database/schema.sql in the Supabase SQL Editor first so the places_name_idx unique index exists."
    : "";

  throw new Error(
    `Could not seed places.${setupHint} If RLS blocked this request, run database/seed-places.sql in the Supabase SQL Editor. ${error.message}`
  );
}

console.log(`Seeded ${places.length} places into Supabase.`);
