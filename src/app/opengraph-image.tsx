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
          backgroundColor: "#10192B",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", marginBottom: 28 }}>
          <div style={{ width: 84, height: 12, backgroundColor: "#F6F3EC" }} />
          <div
            style={{
              width: 60,
              height: 12,
              marginLeft: 6,
              backgroundColor: "#F6F3EC",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: 36,
              height: 12,
              marginLeft: 6,
              backgroundColor: "#1E3A8A",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 10,
            opacity: 0.85,
            marginBottom: 18,
          }}
        >
          CALLAE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 24,
            opacity: 0.7,
          }}
        >
          {siteConfig.supportingLine}
        </div>
      </div>
    ),
    { ...size }
  );
}
