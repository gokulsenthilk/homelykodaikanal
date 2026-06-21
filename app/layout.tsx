import type { Metadata, Viewport } from "next";
import { Spinnaker } from "next/font/google";
import "./globals.css";

const spinnaker = Spinnaker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-primary"
});

export const metadata: Metadata = {
  title: {
    default: "Homely Kodai",
    template: "%s | Homely Kodai"
  },
  description:
    "Explore places to visit in Kodaikanal, holiday packages, and stay packages for a peaceful hill-station trip.",
  metadataBase: new URL("https://kodaikanal-tourism.example"),
  openGraph: {
    title: "Homely Kodai",
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
    <html className={spinnaker.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
