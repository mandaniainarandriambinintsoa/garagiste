import type { Metadata } from "next";
import "./globals.css";
import { metadataConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: metadataConfig.title,
  description: metadataConfig.description,
  metadataBase: new URL(metadataConfig.url),
  openGraph: {
    title: metadataConfig.title,
    description: metadataConfig.description,
    images: ["/images/garage/garage-hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
