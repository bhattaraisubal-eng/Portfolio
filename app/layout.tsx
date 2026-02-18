import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subal Bhattarai | Systems Analyst & AI Engineer",
  description:
    "Portfolio of Subal Bhattarai — Systems Analyst with a passion for ML and AI projects. Building intelligent systems with real-world impact.",
  authors: [{ name: "Subal Bhattarai" }],
  openGraph: {
    title: "Subal Bhattarai | Systems Analyst & AI Engineer",
    description:
      "Portfolio of Subal Bhattarai — Systems Analyst with a passion for ML and AI projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
