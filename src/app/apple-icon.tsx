import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          backgroundColor: "#10192B",
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
        <div style={{ display: "flex", width: 48, height: 16, backgroundColor: "#1E3A8A" }} />
      </div>
    ),
    { ...size }
  );
}
