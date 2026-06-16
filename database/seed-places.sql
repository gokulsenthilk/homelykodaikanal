alter table public.places
  add column if not exists image_alt text;

create unique index if not exists places_name_idx
  on public.places (name);

insert into public.places (name, description, image_url, image_alt, sort_order)
values
  (
    'Kodaikanal Lake',
    'Start with boating, cycling, and a slow walk around the lake. It is the easiest first stop for families and visitors arriving after a long drive.',
    '/images/lake.png',
    'Kodaikanal Lake with misty hills and calm water',
    10
  ),
  (
    'Pine Forest',
    'Cool trails, tall trees, photography stops, and a quiet break between viewpoints.',
    '/images/pine-forest.png',
    'Tall pine trees along a cool Kodaikanal forest trail',
    20
  ),
  (
    'Silver Cascade Falls',
    'A fresh waterfall stop on the route, especially scenic after rain.',
    '/images/waterfall.png',
    'Silver Cascade waterfall near Kodaikanal',
    30
  ),
  (
    'Coaker''s Walk',
    'Best for valley views, gentle walking, sunrise light, and mist rolling over the slopes.',
    '/images/places/coakers-walk.webp',
    'Valley view from Coaker''s Walk in Kodaikanal',
    40
  ),
  (
    'Bryant Park',
    'Flower beds, lawns, and relaxed family time close to the lake.',
    '/images/places/bryant-park.webp',
    'Bryant Park gardens in Kodaikanal',
    50
  ),
  (
    'Pillar Rocks & Green Valley View',
    'Add these viewpoints on a clear morning for dramatic cliffs, distant valleys, and cooler air.',
    '/images/places/pillar-rocks.webp',
    'Pillar Rocks viewpoint in Kodaikanal',
    60
  ),
  (
    'Mannavanur Lake',
    'Plan this as a calmer countryside drive with open meadows, lake views, birdlife, and a slower pace away from the busiest town circuit.',
    '/images/places/mannavanur-lake.webp',
    'Mannavanur Lake landscape near Kodaikanal',
    70
  ),
  (
    'Poombarai Village View Point',
    'A colorful hill-village viewpoint with terraced slopes, photo stops, and a scenic route toward Mannavanur.',
    '/images/places/poombarai-viewpoint.webp',
    'Poombarai village and terraced hills near Kodaikanal',
    80
  ),
  (
    'Berijam Lake',
    'A quiet forest-side lake route known for cool air, peaceful views, and a more protected nature-drive feel.',
    '/images/places/berijam-lake.webp',
    'Berijam Lake surrounded by forest near Kodaikanal',
    90
  ),
  (
    'Kurinji Andavar Temple',
    'A peaceful temple stop with hill views and a cultural pause between the lake, town, and viewpoint routes.',
    '/images/places/kurinji-andavar-temple.webp',
    'Kurinji Andavar Temple in Kodaikanal',
    100
  ),
  (
    'Dolphin''s Nose',
    'A dramatic rocky viewpoint reached by a short trek, best suited for travellers who enjoy walking and wide valley views.',
    '/images/places/dolphins-nose.webp',
    'Dolphin''s Nose viewpoint near Kodaikanal',
    110
  ),
  (
    'Guna Cave',
    'A popular cave-and-root landscape near the forest circuit, usually paired with Pillar Rocks and Moir Point.',
    '/images/places/guna-cave.webp',
    'Guna Cave forest path in Kodaikanal',
    120
  ),
  (
    'Kuzhanthai Velappar Temple',
    'A calm Poombarai temple visit that works well with village viewpoints and the Mannavanur countryside route.',
    '/images/places/kuzhanthai-velappar-temple.webp',
    'Kuzhanthai Velappar Temple at Poombarai near Kodaikanal',
    130
  )
on conflict (name)
do update set
  description = excluded.description,
  image_url = excluded.image_url,
  image_alt = excluded.image_alt,
  sort_order = excluded.sort_order;
