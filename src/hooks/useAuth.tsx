import { useEffect, useState } from "react";
import { AuthSession } from "@supabase/supabase-js";
import { useClient } from "react-supabase"

export function useAuth() {
  const [session, setSession] = useState<AuthSession | null>(null);
  const supabase = useClient();
  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);

    supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });
  }, [supabase]);
  return session;
}
