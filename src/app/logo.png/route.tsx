import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const dynamic = "force-static";

export function GET() {
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
          gap: 17,
          padding: "102px 85px",
          backgroundColor: "#0A1128",
        }}
      >
        <div style={{ display: "flex", width: 308, height: 46, backgroundColor: "#FFFFFF" }} />
        <div
          style={{
            display: "flex",
            width: 222,
            height: 46,
            backgroundColor: "#FFFFFF",
            opacity: 0.78,
          }}
        />
        <div style={{ display: "flex", width: 137, height: 46, backgroundColor: "#8AB4F8" }} />
      </div>
    ),
    { width: 512, height: 512 }
  );
}
