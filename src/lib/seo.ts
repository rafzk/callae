import type { Metadata } from "next";
import { siteConfig } from "./content";

// Next.js resolves each metadata field (openGraph, twitter, alternates...)
// from the closest segment that defines it — a page that sets its own
// `openGraph` doesn't get it deep-merged with the root layout's, so
// overriding just `title` silently drops the shared og:image, og:type and
// so on. This always returns the full set, with this page's own title,
// description and canonical URL swapped in.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      locale: "en_GB",
      images: "/opengraph-image",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: "/opengraph-image",
    },
  };
}
