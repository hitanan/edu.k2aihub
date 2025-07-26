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
  title: "Địa Lý Việt Nam - 34 Đơn Vị Hành Chính Cấp Tỉnh",
  description: "Ứng dụng giáo dục tương tác khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam sau sáp nhập. Tìm hiểu về các thành phố, vùng miền và địa lý.",
  keywords: "Việt Nam, địa lý, tỉnh thành, thành phố, giáo dục, bản đồ tương tác",
  authors: [{ name: "Đội Địa Lý Việt Nam" }],
  openGraph: {
    title: "Địa Lý Việt Nam - 34 Đơn Vị Cấp Tỉnh",
    description: "Khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
