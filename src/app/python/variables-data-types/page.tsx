import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Bài 1: Biến và Kiểu Dữ Liệu Python - Lập Trình Python Cơ Bản"),
  description: createDescription("Học cách khai báo biến, các kiểu dữ liệu cơ bản trong Python và thực hành với bài tập thực tế"),
  keywords: createKeywords(["python biến", "kiểu dữ liệu python", "string python", "integer python", "float python"]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {
    title: createTitle("Bài 1: Biến và Kiểu Dữ Liệu Python"),
    description: createDescription("Nền tảng đầu tiên trong Python - hiểu về biến và các kiểu dữ liệu cơ bản"),
    type: "website",
  },
};

export default function PythonVariablesLesson() {
  const lessonContent = {
    title: 'Bài 1: Biến và Kiểu Dữ Liệu',
    description: 'Tìm hiểu cách khai báo biến và sử dụng các kiểu dữ liệu cơ bản trong Python',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    objectives: [
      'Hiểu khái niệm biến trong Python',
      'Nắm vững các kiểu dữ liệu cơ bản',
      'Thực hiện chuyển đổi kiểu dữ liệu',
      'Áp dụng vào bài toán thực tế'
    ]
  };

  const dataTypes = [
    {
      name: 'Integer (int)',
      description: 'Số nguyên: 1, 2, 100, -5',
      example: 'tuoi = 18',
      icon: '🔢'
    },
    {
      name: 'Float',
      description: 'Số thực: 3.14, 2.5, -1.8',
      example: 'diem = 8.5',
      icon: '📊'
    },
    {
      name: 'String (str)',
      description: 'Chuỗi ký tự: "Hello", \'Python\'',
      example: 'ten = "Minh"',
      icon: '📝'
    },
    {
      name: 'Boolean (bool)',
      description: 'Giá trị logic: True, False',
      example: 'hoc_gioi = True',
      icon: '✅'
    },
    {
      name: 'List',
      description: 'Danh sách: [1, 2, 3]',
      example: 'so_thich = ["đọc sách", "game"]',
      icon: '📋'
    },
    {
      name: 'Dictionary (dict)',
      description: 'Từ điển: {"key": "value"}',
      example: 'hoc_sinh = {"ten": "An", "tuoi": 16}',
      icon: '📚'
    }
  ];

  const codeExamples = {
    basic: `# Khai báo biến với các kiểu dữ liệu khác nhau
ten = "Nguyễn Văn A"        # String
tuoi = 16                   # Integer
diem_toan = 8.5            # Float
co_hoc_gioi = True         # Boolean

# In thông tin
print("Tên:", ten)
print("Tuổi:", tuoi)
print("Điểm toán:", diem_toan)
print("Học giỏi:", co_hoc_gioi)`,

    conversion: `# Chuyển đổi kiểu dữ liệu
so_nguyen = 10
so_thuc = float(so_nguyen)     # 10 -> 10.0
chuoi_so = str(so_nguyen)      # 10 -> "10"

# Nhập dữ liệu từ bàn phím
ten = input("Nhập tên của bạn: ")
tuoi_str = input("Nhập tuổi: ")
tuoi = int(tuoi_str)           # Chuyển string thành int

print(f"Xin chào {ten}, bạn {tuoi} tuổi")`,

    operations: `# Thao tác với string
ho_ten = "Nguyễn" + " " + "Văn A"    # Nối chuỗi
ten_hoa = ho_ten.upper()              # Chuyển thành chữ hoa
do_dai = len(ho_ten)                  # Độ dài chuỗi

# Thao tác với số
a = 10
b = 3
tong = a + b           # 13
hieu = a - b           # 7
tich = a * b           # 30
thuong = a / b         # 3.333...
chia_nguyen = a // b   # 3
du = a % b             # 1
luy_thua = a ** b      # 1000`
  };

  const practicalExercises = [
    {
      title: 'Máy tính BMI',
      description: 'Viết chương trình tính chỉ số BMI từ chiều cao và cân nặng',
      code: `# Nhập thông tin
ten = input("Nhập tên: ")
can_nang = float(input("Nhập cân nặng (kg): "))
chieu_cao = float(input("Nhập chiều cao (m): "))

# Tính BMI
bmi = can_nang / (chieu_cao ** 2)

# Đánh giá
if bmi < 18.5:
    danh_gia = "Thiếu cân"
elif bmi < 25:
    danh_gia = "Bình thường"
else:
    danh_gia = "Thừa cân"

print(f"{ten}, BMI của bạn là {bmi:.2f} - {danh_gia}")`,
      difficulty: 'Trung bình'
    },
    {
      title: 'Chuyển đổi tiền tệ',
      description: 'Tạo máy tính chuyển đổi từ VND sang USD',
      code: `# Tỷ giá hiện tại (VND/USD)
ty_gia = 24000

# Nhập số tiền VND
vnd = float(input("Nhập số tiền VND: "))

# Chuyển đổi
usd = vnd / ty_gia

# Hiển thị kết quả
print(f"{vnd:,.0f} VND = {usd:.2f} USD")
print(f"Tỷ giá áp dụng: 1 USD = {ty_gia:,} VND")`,
      difficulty: 'Dễ'
    },
    {
      title: 'Quản lý điểm học sinh',
      description: 'Lưu trữ và tính điểm trung bình của học sinh',
      code: `# Thông tin học sinh
hoc_sinh = {
    "ten": "Nguyễn Thị B",
    "lop": "10A1",
    "diem": {
        "toan": 8.5,
        "ly": 7.0,
        "hoa": 9.0,
        "van": 8.0
    }
}

# Tính điểm trung bình
tong_diem = sum(hoc_sinh["diem"].values())
so_mon = len(hoc_sinh["diem"])
diem_tb = tong_diem / so_mon

# Xếp loại
if diem_tb >= 8.0:
    xep_loai = "Giỏi"
elif diem_tb >= 6.5:
    xep_loai = "Khá"
elif diem_tb >= 5.0:
    xep_loai = "Trung bình"
else:
    xep_loai = "Yếu"

print(f"Học sinh: {hoc_sinh['ten']}")
print(f"Lớp: {hoc_sinh['lop']}")
print(f"Điểm trung bình: {diem_tb:.2f}")
print(f"Xếp loại: {xep_loai}")`,
      difficulty: 'Khó'
    }
  ];

  const tips = [
    {
      title: 'Quy tắc đặt tên biến',
      content: 'Tên biến phải bắt đầu bằng chữ cái hoặc dấu gạch dưới, không được chứa khoảng trắng, nên sử dụng snake_case',
      icon: '📝'
    },
    {
      title: 'Kiểm tra kiểu dữ liệu',
      content: 'Sử dụng type() để kiểm tra kiểu dữ liệu: type(5) trả về <class \'int\'>',
      icon: '🔍'
    },
    {
      title: 'F-string formatting',
      content: 'Sử dụng f"Hello {name}" thay vì "Hello " + name để định dạng chuỗi dễ đọc hơn',
      icon: '✨'
    },
    {
      title: 'Xử lý lỗi input',
      content: 'Luôn kiểm tra và chuyển đổi kiểu dữ liệu khi nhận input từ người dùng để tránh lỗi',
      icon: '⚠️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/python" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
              ← Quay lại Python
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">🐍</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {lessonContent.title}
            </h1>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              {lessonContent.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full">
                ⏱️ {lessonContent.duration}
              </span>
              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full">
                🎯 {lessonContent.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Learning Objectives */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🎯 Mục Tiêu Bài Học
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessonContent.objectives.map((objective, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-blue-400 mr-3 mt-1">✓</span>
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Data Types Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            📊 Các Kiểu Dữ Liệu Cơ Bản
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{type.description}</p>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <code className="text-green-300 text-sm">{type.example}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            💻 Ví Dụ Code
          </h2>
          
          <div className="space-y-8">
            {/* Basic Variables */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Khai báo biến cơ bản</h3>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                <div className="bg-gray-800/50 px-6 py-3 border-b border-white/10">
                  <span className="text-blue-400 font-mono text-sm">variables_basic.py</span>
                </div>
                <div className="p-6">
                  <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                    <code>{codeExamples.basic}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Type Conversion */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Chuyển đổi kiểu dữ liệu</h3>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                <div className="bg-gray-800/50 px-6 py-3 border-b border-white/10">
                  <span className="text-blue-400 font-mono text-sm">type_conversion.py</span>
                </div>
                <div className="p-6">
                  <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                    <code>{codeExamples.conversion}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Operations */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Các phép toán cơ bản</h3>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                <div className="bg-gray-800/50 px-6 py-3 border-b border-white/10">
                  <span className="text-blue-400 font-mono text-sm">operations.py</span>
                </div>
                <div className="p-6">
                  <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                    <code>{codeExamples.operations}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            🧩 Bài Tập Thực Hành
          </h2>
          
          <div className="space-y-8">
            {practicalExercises.map((exercise, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{exercise.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    exercise.difficulty === 'Dễ' ? 'bg-green-500/20 text-green-200' :
                    exercise.difficulty === 'Trung bình' ? 'bg-yellow-500/20 text-yellow-200' :
                    'bg-red-500/20 text-red-200'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exercise.description}</p>
                
                <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700">
                  <div className="bg-gray-800/50 px-4 py-2 border-b border-gray-700">
                    <span className="text-green-400 font-mono text-sm">{exercise.title.toLowerCase().replace(/ /g, '_')}.py</span>
                  </div>
                  <div className="p-4">
                    <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                      <code>{exercise.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips and Tricks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            💡 Mẹo và Lưu Ý
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">{tip.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                    <p className="text-gray-300 text-sm">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Challenge */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            🏆 Thử Thách Cuối Bài
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Tạo Profile Cá Nhân</h3>
            <p className="text-gray-300">
              Viết chương trình nhận thông tin từ người dùng (tên, tuổi, sở thích, môn học yêu thích) 
              và hiển thị ra màn hình dưới dạng profile đẹp mắt.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h4 className="text-yellow-300 font-semibold mb-2">Yêu cầu:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Sử dụng ít nhất 4 kiểu dữ liệu khác nhau</li>
                <li>• Có validation cho tuổi (phải là số)</li>
                <li>• Sử dụng f-string để format output</li>
                <li>• Tạo dictionary để lưu trữ thông tin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/python"
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            ← Quay lại Python
          </Link>
          
          <Link 
            href="/python/control-structures"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Bài tiếp theo: Cấu trúc điều khiển →
          </Link>
        </div>
      </div>
    </div>
  );
}
