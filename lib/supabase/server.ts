import { createClient } from "@supabase/supabase-js";
import { getSupabaseBrowserConfig } from "@/lib/supabase/config";

export function createSupabaseServerClient() {
  const { publishableKey, url } = getSupabaseBrowserConfig();
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  return createClient(url, secretKey ?? publishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
