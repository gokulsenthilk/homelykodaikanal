# Supabase Setup

1. Copy `.env.example` to `.env.local`.
2. In Supabase, open **Project Settings > API**.
3. Set these values in `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

4. In Supabase SQL Editor, run `database/schema.sql`.
5. Seed the Kodaikanal place content:

```bash
npm.cmd run seed:places
```

If the seed command reports a missing unique constraint or RLS blocks the request, run `database/seed-places.sql` in the Supabase SQL Editor instead. You can also add a server-only `SUPABASE_SECRET_KEY` to `.env.local` for admin seeding, but never expose that key in browser code.

The home page reads a preview from the `public.places` table, and `/places` reads the full places list directly at runtime.
6. Restart the Next.js dev server.
7. Check the connection at:

```text
http://127.0.0.1:3000/api/supabase/health
```

The contact form posts to `/api/enquiries` and inserts into the `public.enquiries` table.

Do not put a Supabase secret key in browser code. If you later need privileged server-only work, add it only as `SUPABASE_SECRET_KEY` in `.env.local`.
