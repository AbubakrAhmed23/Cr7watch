import { ImageResponse } from "next/og";

export const alt = "Cr7watch — Lüks Saat Koleksiyonu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0c 0%, #16161b 100%)",
          color: "#f6f3ec",
        }}
      >
        <div style={{ display: "flex", fontSize: 110, fontWeight: 700, letterSpacing: -2 }}>
          <span>Cr7</span>
          <span style={{ color: "#c9a24b" }}>watch</span>
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 34,
            color: "#a2a0a8",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Zamanın Zarafeti
        </div>
        <div style={{ marginTop: 40, fontSize: 26, color: "#c9a24b" }}>
          Rolex · Patek Philippe · Audemars Piguet · Cartier
        </div>
      </div>
    ),
    { ...size }
  );
}
