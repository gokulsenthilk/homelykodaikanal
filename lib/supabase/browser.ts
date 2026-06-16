"use client";

import { createClient } from "@supabase/supabase-js";
import { getSupabaseBrowserConfig } from "@/lib/supabase/config";

export function createSupabaseBrowserClient() {
  const { publishableKey, url } = getSupabaseBrowserConfig();

  return createClient(url, publishableKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
