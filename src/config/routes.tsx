import { extendSEO, DEFAULT_SEO } from "./seo";
import type { DefaultSeoProps } from "next-seo";

export interface Route {
  label: string;
  path: string;
  seo: DefaultSeoProps;
}

export interface Routes {
  [key: string]: Route;
}

export const routes: Routes = {
  home: {
    label: "Home",
    path: "/",
    seo: DEFAULT_SEO,
  },
  privacy: {
    label: "Privacy",
    path: "/privacy",
    seo: extendSEO({
      title: "Privacy Policy",
      description: "Privacy policy of the site.",
    }),
  },
  terms: {
    label: "Terms",
    path: "/terms",
    seo: extendSEO({
      title: "Terms of Service",
      description: "Terms and conditions of the site.",
    }),
  },
};
