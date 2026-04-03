import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design",
  description:
    "Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.",
  openGraph: {
    title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
