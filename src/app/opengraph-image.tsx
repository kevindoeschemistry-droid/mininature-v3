import { ImageResponse } from "next/og";

export const alt = "MiniNature Reserve — Restoring Urban Biodiversity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "#1a2f23",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Hummingbird in top-right corner */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            display: "flex",
            opacity: 0.3,
          }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <ellipse cx="55" cy="50" rx="28" ry="12" fill="#8FBC8F" />
            <ellipse cx="30" cy="46" rx="16" ry="8" fill="#8FBC8F" transform="rotate(-20 30 46)" />
            <ellipse cx="78" cy="52" rx="18" ry="6" fill="#8FBC8F" transform="rotate(15 78 52)" />
            <line x1="22" y1="44" x2="8" y2="40" stroke="#8FBC8F" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="70" cy="35" rx="12" ry="8" fill="#8FBC8F" transform="rotate(-30 70 35)" />
            <ellipse cx="70" cy="65" rx="12" ry="8" fill="#8FBC8F" transform="rotate(30 70 65)" />
            <circle cx="32" cy="43" r="3" fill="#1a2f23" />
          </svg>
        </div>

        {/* Small hummingbird icon above title */}
        <div style={{ display: "flex", marginBottom: 24 }}>
          <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
            <ellipse cx="55" cy="50" rx="28" ry="12" fill="#2D5F3F" />
            <ellipse cx="30" cy="46" rx="16" ry="8" fill="#2D5F3F" transform="rotate(-20 30 46)" />
            <ellipse cx="78" cy="52" rx="18" ry="6" fill="#2D5F3F" transform="rotate(15 78 52)" />
            <line x1="22" y1="44" x2="8" y2="40" stroke="#2D5F3F" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="70" cy="35" rx="12" ry="8" fill="#2D5F3F" transform="rotate(-30 70 35)" />
            <ellipse cx="70" cy="65" rx="12" ry="8" fill="#2D5F3F" transform="rotate(30 70 65)" />
            <circle cx="32" cy="43" r="3" fill="#E8F1EC" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            marginBottom: 16,
            display: "flex",
          }}
        >
          MiniNature Reserve
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#8FBC8F",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Restoring urban biodiversity, one city block at a time.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#2D5F3F",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
