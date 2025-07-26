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
  title: "Nền Tảng Thông Tin Tương Tác, Địa Lý Việt Nam, AI Của Tôi",
  description: "Nền Tảng Thông Tin Tương Tác, khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác và thông tin chi tiết về kinh tế, văn hóa, lịch sử. AI Của Tôi giúp bạn hiểu và áp dụng AI trong công việc và cuộc sống hàng ngày.",
  keywords: "Việt Nam, địa lý, tỉnh thành, thành phố, giáo dục, bản đồ tương tác, ai, trí tuệ nhân tạo, học tập",
  authors: [{ name: "M2 Design" }],
  openGraph: {
    title: "Nền Tảng Thông Tin Tương Tác, Địa Lý Việt Nam, AI Của Tôi",
    description: "Nền Tảng Thông Tin Tương Tác, khám phá 34 đơn vị hành chính cấp tỉnh của Việt Nam với bản đồ tương tác và thông tin chi tiết về kinh tế, văn hóa, lịch sử. AI Của Tôi giúp bạn hiểu và áp dụng AI trong công việc và cuộc sống hàng ngày.",
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
