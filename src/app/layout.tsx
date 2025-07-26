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
  title: "Vietnam Geography - 34 Provincial Administrative Units",
  description: "Interactive educational app to explore Vietnam's 34 provincial-level administrative units after the merger. Learn about cities, regions, and geography.",
  keywords: "Vietnam, geography, provinces, cities, education, interactive map",
  authors: [{ name: "Vietnam Geography Team" }],
  openGraph: {
    title: "Vietnam Geography - 34 Provincial Units",
    description: "Explore Vietnam's 34 provincial administrative units with our interactive map",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
