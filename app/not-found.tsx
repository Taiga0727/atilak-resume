import { Sheet } from "@/components/Sheet";
import { BackToResume } from "@/components/BackToResume";

export default function NotFound() {
  return (
    <Sheet>
      <p style={{ fontFamily: "var(--font-mono)", color: "var(--ink-faint)", fontSize: "0.85rem" }}>
        404
      </p>
      <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "1.75rem", margin: "0.5rem 0 1rem" }}>
        Page not found
      </h1>
      <BackToResume />
    </Sheet>
  );
}
