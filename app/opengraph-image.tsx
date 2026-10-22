import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.identity.name} — Résumé`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12161b",
          color: "#e7e9e5",
          padding: "72px 84px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 3, color: "#64bedf", textTransform: "uppercase" }}>
            {profile.identity.tagline}
          </div>
          <div style={{ fontSize: 100, fontWeight: 700, marginTop: 28 }}>{profile.identity.name}</div>
          <div style={{ fontSize: 32, color: "#9aa3aa", marginTop: 18 }}>
            Applied Computer Science · KMUTT
          </div>
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          {profile.highlights.slice(0, 3).map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                borderLeft: "4px solid #64bedf",
                paddingLeft: 22,
                maxWidth: 300,
              }}
            >
              <div style={{ fontSize: 48, fontWeight: 700 }}>{item.value}</div>
              <div style={{ fontSize: 22, color: "#9aa3aa", marginTop: 8 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
