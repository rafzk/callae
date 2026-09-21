import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

// The wildcard rule below already allows every crawler, these included —
// they're listed explicitly to make that intent unambiguous for the AI
// crawlers this site specifically wants reading it (it publishes
// /llms.txt for them), rather than leaving it to whatever each bot
// assumes an unlisted user agent should do.
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
