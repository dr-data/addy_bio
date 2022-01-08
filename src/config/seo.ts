import type { DefaultSeoProps } from "next-seo";
export const baseUrl = "https://addy.bio";

export const DEFAULT_SEO: DefaultSeoProps = {
  title: "Addy",
  description: "Share all your wallets using a link",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "addy.bio",
    images: [
      {
        url: `${baseUrl}/static/meta/icon.svg`,
        alt: "addy",
      },
    ],
  },
  twitter: {
    handle: "@addybio",
    site: "@addybio",
    cardType: "summary_large_image",
  },
};

export const SOCIAL_URL = {
  twitter: "https://twitter.com/addybio",
  github: "https://github.com/searchableguy",
  email: "mailto:hello@searchableguy.com?subject=Hello!%20%3AD",
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : DEFAULT_SEO.openGraph?.images;

  return {
    ...DEFAULT_SEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  };
}
