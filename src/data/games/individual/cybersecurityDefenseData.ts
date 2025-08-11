// Cybersecurity Defense Game Data
export interface CybersecurityDefenseGameData {
  attacks: Array<{
    type: string;
    indicators: string[];
    defense: string[];
    severity: string;
    description: string;
  }>;
  challenges: Array<{
    scenario: string;
    threats: string[];
    solutions: string[];
    bestPractice: string;
  }>;
}

export const cybersecurityDefenseGameData: CybersecurityDefenseGameData = {
  attacks: [
    {
      type: 'Phishing Email',
      indicators: ['Suspicious sender', 'Urgent language', 'Unknown links'],
      defense: ['Email filtering', 'User training', 'Multi-factor auth'],
      severity: 'Cao',
      description: 'Email giả mạo để đánh cắp thông tin cá nhân',
    },
    {
      type: 'Ransomware',
      indicators: ['File encryption', 'Ransom message', 'System slowdown'],
      defense: ['Regular backups', 'Updated antivirus', 'Network segmentation'],
      severity: 'Nghiêm trọng',
      description: 'Mã độc mã hóa dữ liệu để đòi tiền chuộc',
    },
    {
      type: 'DDoS Attack',
      indicators: ['Website slow/down', 'High traffic', 'Server overload'],
      defense: ['DDoS protection', 'Load balancing', 'Traffic filtering'],
      severity: 'Trung bình',
      description: 'Tấn công từ chối dịch vụ bằng cách gửi quá nhiều request',
    },
    {
      type: 'SQL Injection',
      indicators: ['Database errors', 'Unexpected queries', 'Data access'],
      defense: ['Parameterized queries', 'Input validation', 'WAF'],
      severity: 'Cao',
      description: 'Tấn công database thông qua input độc hại',
    },
    {
      type: 'Social Engineering',
      indicators: ['Unusual requests', 'Pressure tactics', 'Trust exploitation'],
      defense: ['Security awareness', 'Verification process', 'Reporting system'],
      severity: 'Trung bình',
      description: 'Thao túng tâm lý để lấy thông tin hoặc truy cập',
    },
  ],
  challenges: [
    {
      scenario: 'Công ty nhận được email nghi ngờ với file đính kèm .exe',
      threats: ['Malware', 'Phishing', 'Social Engineering'],
      solutions: ['Không mở file', 'Kiểm tra với IT', 'Scan virus', 'Báo cáo sự cố'],
      bestPractice: 'Luôn xác minh nguồn gốc file đính kèm trước khi mở',
    },
    {
      scenario: 'Website công ty bị chậm và nhiều user không truy cập được',
      threats: ['DDoS Attack', 'Server Overload', 'Network Issues'],
      solutions: ['Kích hoạt DDoS protection', 'Phân tích traffic', 'Liên hệ ISP', 'Implement rate limiting'],
      bestPractice: 'Có kế hoạch ứng phó DDoS được chuẩn bị trước',
    },
    {
      scenario: 'Nhân viên báo cáo máy tính chạy chậm và file bị mã hóa',
      threats: ['Ransomware', 'Malware', 'Data Breach'],
      solutions: ['Ngắt kết nối mạng ngay', 'Khôi phục từ backup', 'Scan toàn bộ hệ thống', 'Báo cáo cho ban lãnh đạo'],
      bestPractice: 'Backup thường xuyên và test khôi phục định kỳ',
    },
    {
      scenario: 'Database trả về thông tin người dùng khác khi login',
      threats: ['SQL Injection', 'Authentication Bypass', 'Data Breach'],
      solutions: ['Tạm dừng dịch vụ', 'Kiểm tra log database', 'Review source code', 'Patch lỗ hổng security'],
      bestPractice: 'Sử dụng parameterized queries và input validation',
    },
    {
      scenario: 'Người lạ gọi điện xưng là IT support yêu cầu mật khẩu',
      threats: ['Social Engineering', 'Identity Theft', 'Unauthorized Access'],
      solutions: ['Từ chối cung cấp thông tin', 'Xác minh danh tính', 'Báo cáo cho IT department', 'Ghi lại cuộc gọi'],
      bestPractice: 'IT support thật sự không bao giờ yêu cầu mật khẩu qua điện thoại',
    },
  ],
};
