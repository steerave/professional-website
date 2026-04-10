import type { Metadata } from "next";
import { Anybody, DM_Mono } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "900"],
  variable: "--font-anybody",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Builder",
  description:
    "Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.",
  openGraph: {
    title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Builder",
    description:
      "Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anybody.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
