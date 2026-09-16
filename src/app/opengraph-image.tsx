import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#060607",
          color: "#F5F5F2",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" style={{ marginBottom: 28 }}>
          <path
            d="M8 23 L16 8 L24 23"
            stroke="#A3E635"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 10,
            opacity: 0.75,
            marginBottom: 18,
          }}
        >
          CALLAE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 62,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
