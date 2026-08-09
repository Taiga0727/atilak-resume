import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const newsreader = localFont({
  src: [
    { path: "./fonts/newsreader-normal.woff2", weight: "400 600", style: "normal" },
    { path: "./fonts/newsreader-italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

const jbMono = localFont({
  src: "./fonts/jbmono.woff2",
  weight: "400 600",
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atilak Modetad — Résumé",
  description:
    "Résumé for Atilak Modetad — computer vision, 3D point clouds, and applied ML, KMUTT.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jbMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
