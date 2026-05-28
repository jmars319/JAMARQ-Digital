import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "space-between",
          background: "#0D0D0F",
          color: "#F2F2F5",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, rgba(9,166,214,0.16), transparent 34%), radial-gradient(circle at 76% 32%, rgba(9,166,214,0.2), transparent 30%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 102,
            right: 72,
            height: 140,
            borderTop: "2px solid rgba(9,166,214,0.3)",
            borderBottom: "2px solid rgba(9,166,214,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -90,
            top: 70,
            width: 360,
            height: 360,
            borderRadius: 360,
            border: "2px solid rgba(9,166,214,0.35)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            right: 72,
            top: 62,
            height: 2,
            background: "linear-gradient(90deg, rgba(9,166,214,0), #09A6D6, rgba(9,166,214,0))",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                width: 82,
                height: 82,
                border: "2px solid rgba(9,166,214,0.38)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#66F3FF",
                fontSize: 44,
                fontWeight: 800,
              }}
            >
              JQ
            </div>
            <div style={{ fontSize: 28, color: "#09A6D6", letterSpacing: 8 }}>
              JAMARQ DIGITAL
            </div>
          </div>
          <div style={{ maxWidth: 850, fontSize: 78, lineHeight: 0.96, fontWeight: 700 }}>
            Practical web systems for businesses.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, color: "#E6E6E8", fontSize: 28 }}>
          <span>Websites</span>
          <span style={{ color: "#09A6D6" }}>•</span>
          <span>DNS</span>
          <span style={{ color: "#09A6D6" }}>•</span>
          <span>Hosting</span>
          <span style={{ color: "#09A6D6" }}>•</span>
          <span>Integrations</span>
          <span style={{ color: "#09A6D6" }}>•</span>
          <span>Maintenance</span>
        </div>
      </div>
    ),
    size,
  );
}
