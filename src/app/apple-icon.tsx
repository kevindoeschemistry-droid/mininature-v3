import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2D5F3F",
          borderRadius: 36,
        }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <ellipse cx="55" cy="50" rx="28" ry="12" fill="#FFFFFF" />
          <ellipse cx="30" cy="46" rx="16" ry="8" fill="#FFFFFF" transform="rotate(-20 30 46)" />
          <ellipse cx="78" cy="52" rx="18" ry="6" fill="#FFFFFF" transform="rotate(15 78 52)" />
          <line x1="22" y1="44" x2="8" y2="40" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="70" cy="35" rx="12" ry="8" fill="#FFFFFF" transform="rotate(-30 70 35)" />
          <ellipse cx="70" cy="65" rx="12" ry="8" fill="#FFFFFF" transform="rotate(30 70 65)" />
          <circle cx="32" cy="43" r="3" fill="#2D5F3F" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
