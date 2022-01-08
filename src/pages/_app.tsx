import "../styles/globals.css";
import type { AppProps } from "next/app";
import "windi.css";
import { Provider as SupabaseProvider } from "react-supabase";
import { supabase } from "../config/supabaseClient";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <SupabaseProvider value={supabase}>
      <Component {...pageProps} />
    </SupabaseProvider>
  );
}
export default CustomApp;
