import { supabase } from "@/lib/initSupabase";

export async function GET(request: Request) {
    if (!supabase) {
        return Response.json({ message: 'Supabase client connexion failed' }, { status: 500});
    }
    return Response.json({ message: 'Hello supabase' }, { status: 200});
}
