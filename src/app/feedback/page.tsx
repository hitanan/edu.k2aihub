import type { Metadata } from "next";
import FeedbackClient from './FeedbackClient';

export const metadata: Metadata = {
  title: "Góp Ý & Phản Hồi - Nền Tảng Thông Tin Tương Tác",
  description: "Gửi góp ý, đề xuất và phản hồi để chúng tôi cải thiện nền tảng giáo dục. Chúng tôi luôn lắng nghe và phát triển dựa trên ý kiến người dùng.",
  keywords: "góp ý, phản hồi, đề xuất, liên hệ, hỗ trợ, cải thiện",
  authors: [{ name: "Education Platform Team" }],
  openGraph: {
    title: "Góp Ý & Phản Hồi",
    description: "Chia sẻ ý kiến và đề xuất để cùng xây dựng nền tảng giáo dục tốt hơi",
    type: "website",
  },
};

export default function FeedbackPage() {
  return <FeedbackClient />;
}
