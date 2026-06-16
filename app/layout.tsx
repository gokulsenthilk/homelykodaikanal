import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kodaikanal Tourism",
    template: "%s | Kodaikanal Tourism"
  },
  description:
    "Explore places to visit in Kodaikanal, holiday packages, and stay packages for a peaceful hill-station trip.",
  metadataBase: new URL("https://kodaikanal-tourism.example"),
  openGraph: {
    title: "Kodaikanal Tourism",
    description:
      "Misty hills, lake walks, pine forests, waterfalls, and calm stays shaped into simple Kodaikanal trip plans.",
    images: ["/images/hero-kodaikanal.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#104531"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
