/**
 * Minimal Supabase REST (PostgREST) client using plain fetch — no SDK dependency.
 * Returns null when Supabase is not configured or a request fails, so callers
 * can fall back to local data.
 */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)

export async function supabaseSelect<T>(table: string, query = "select=*"): Promise<T[] | null> {
  if (!isSupabaseConfigured) return null

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, {
      headers: {
        apikey: SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      // Revalidate hourly so content edits in Supabase show up without a redeploy
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const rows = (await res.json()) as T[]
    return rows.length > 0 ? rows : null
  } catch {
    return null
  }
}
