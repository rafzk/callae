import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} | ${siteConfig.tagline}`;

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
          backgroundColor: "#0A1128",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 44 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 6,
              width: 64,
              height: 50,
              marginRight: 22,
            }}
          >
            <div style={{ display: "flex", width: 64, height: 10, backgroundColor: "#FFFFFF" }} />
            <div
              style={{
                display: "flex",
                width: 46,
                height: 10,
                backgroundColor: "#FFFFFF",
                opacity: 0.72,
              }}
            />
            <div style={{ display: "flex", width: 26, height: 10, backgroundColor: "#8AB4F8" }} />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              letterSpacing: 10,
              opacity: 0.92,
            }}
          >
            CALLAE
          </div>
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
