import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 6,
          padding: "36px 30px",
          backgroundColor: "#0A1128",
        }}
      >
        <div style={{ display: "flex", width: 108, height: 16, backgroundColor: "#FFFFFF" }} />
        <div
          style={{
            display: "flex",
            width: 78,
            height: 16,
            backgroundColor: "#FFFFFF",
            opacity: 0.78,
          }}
        />
        <div style={{ display: "flex", width: 48, height: 16, backgroundColor: "#8AB4F8" }} />
      </div>
    ),
    { ...size }
  );
}
