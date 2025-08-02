'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function PythonIntroductionPage() {
  const [activeTab, setActiveTab] = useState<'lesson' | 'exercise' | 'project'>('lesson');
  
  // Image URL cho lesson này
  const imageUrl = "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=400&fit=crop";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/python"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Python Module
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                {imageUrl ? (
                  <Image 
                    src={imageUrl} 
                    alt="Python Programming"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">🐍</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">Giới Thiệu Python</h1>
                <p className="text-blue-100 mt-2">Làm quen với Python: cài đặt, IDE và chương trình đầu tiên</p>
                <div className="flex items-center mt-3 space-x-4 text-sm">
                  <span className="bg-white/20 px-2 py-1 rounded">⏱️ 60 phút</span>
                  <span className="bg-white/20 px-2 py-1 rounded">📊 Cơ bản</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('lesson')}
                className={`px-6 py-3 font-medium ${activeTab === 'lesson' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                📚 Bài học
              </button>
              <button
                onClick={() => setActiveTab('exercise')}
                className={`px-6 py-3 font-medium ${activeTab === 'exercise' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                💻 Bài tập
              </button>
              <button
                onClick={() => setActiveTab('project')}
                className={`px-6 py-3 font-medium ${activeTab === 'project' 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                🚀 Dự án
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'lesson' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Mục tiêu học tập</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-800">Python là gì?</h3>
                      <p className="text-blue-600 text-sm mt-1">Hiểu Python là gì và tại sao nên học</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800">Cài đặt Python</h3>
                      <p className="text-green-600 text-sm mt-1">Cài đặt Python và IDE</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-800">Chương trình đầu tiên</h3>
                      <p className="text-purple-600 text-sm mt-1">Viết chương trình đầu tiên</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">🐍 Python là gì?</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Python là một ngôn ngữ lập trình bậc cao, được thiết kế để dễ đọc và dễ viết. 
                      Python được phát triển bởi Guido van Rossum và lần đầu tiên được phát hành vào năm 1991.
                    </p>
                    <h3 className="text-lg font-semibold mb-3">🌟 Tại sao nên học Python?</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Cú pháp đơn giản và dễ hiểu</li>
                      <li>Thư viện phong phú và cộng đồng lớn</li>
                      <li>Ứng dụng rộng rãi: Web, AI, Data Science, Automation</li>
                      <li>Miễn phí và mã nguồn mở</li>
                      <li>Hỗ trợ đa nền tảng</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Cài đặt Python</h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Bước 1: Tải Python</h3>
                      <p className="text-gray-700 mb-3">
                        Truy cập <a href="https://python.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">python.org</a> và 
                        tải phiên bản Python mới nhất cho hệ điều hành của bạn.
                      </p>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm font-mono">✅ Chọn &quot;Add Python to PATH&quot; khi cài đặt</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">Bước 2: Kiểm tra cài đặt</h3>
                      <p className="text-gray-700 mb-3">Mở Command Prompt/Terminal và chạy:</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded font-mono">
                        python --version
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-800 mb-3">Bước 3: Chọn IDE</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded">
                          <h4 className="font-semibold">🆓 IDLE (Built-in)</h4>
                          <p className="text-sm text-gray-600">IDE cơ bản đi kèm Python</p>
                        </div>
                        <div className="bg-white p-4 rounded">
                          <h4 className="font-semibold">⚡ VS Code</h4>
                          <p className="text-sm text-gray-600">IDE mạnh mẽ với nhiều extension</p>
                        </div>
                        <div className="bg-white p-4 rounded">
                          <h4 className="font-semibold">🐍 PyCharm</h4>
                          <p className="text-sm text-gray-600">IDE chuyên dụng cho Python</p>
                        </div>
                        <div className="bg-white p-4 rounded">
                          <h4 className="font-semibold">📓 Jupyter</h4>
                          <p className="text-sm text-gray-600">Tuyệt vời cho Data Science</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">👋 Chương trình Hello World</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Cách 1: Chạy trực tiếp</h3>
                      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono">
                        <div className="text-gray-400"># Mở Terminal/Command Prompt</div>
                        <div>python</div>
                        <div className="text-blue-400">&gt;&gt;&gt; print(&quot;Hello, World!&quot;)</div>
                        <div className="text-yellow-300">Hello, World!</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Cách 2: Tạo file .py</h3>
                      <p className="text-gray-700 mb-3">Tạo file <code className="bg-gray-200 px-2 py-1 rounded">hello.py</code> với nội dung:</p>
                      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono">
                        <div className="text-gray-400"># hello.py</div>
                        <div>print(&quot;Hello, World!&quot;)</div>
                        <div>print(&quot;Chào mừng đến với Python!&quot;)</div>
                      </div>
                      <p className="text-gray-700 mt-3">Chạy file:</p>
                      <div className="bg-gray-800 text-green-400 p-3 rounded font-mono mt-2">
                        python hello.py
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">🎓 Cú pháp cơ bản</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">📝 Comments</h3>
                      <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                        <div className="text-gray-400"># Đây là comment một dòng</div>
                        <div className="text-gray-400">&quot;&quot;&quot;</div>
                        <div className="text-gray-400">Đây là comment</div>
                        <div className="text-gray-400">nhiều dòng</div>
                        <div className="text-gray-400">&quot;&quot;&quot;</div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">🔢 Indentation</h3>
                      <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                        <div>if True:</div>
                        <div className="ml-4">print(&quot;Đúng rồi!&quot;)</div>
                        <div>else:</div>
                        <div className="ml-4">print(&quot;Sai rồi!&quot;)</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'exercise' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">💻 Bài tập thực hành</h2>
                
                <div className="grid gap-6">
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">🎯 Bài 1: Hello World Plus</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Cơ bản</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Viết chương trình in ra thông tin cá nhân của bạn
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-4">
                      <h4 className="font-semibold mb-2">Yêu cầu:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>In ra tên của bạn</li>
                        <li>In ra tuổi của bạn</li>
                        <li>In ra sở thích của bạn</li>
                        <li>In ra lý do học Python</li>
                      </ul>
                    </div>
                    <details className="bg-blue-50 p-4 rounded">
                      <summary className="cursor-pointer font-semibold">💡 Gợi ý</summary>
                      <div className="mt-3 bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                        <div>print(&quot;Tên: Nguyễn Văn A&quot;)</div>
                        <div>print(&quot;Tuổi: 20&quot;)</div>
                        <div>print(&quot;Sở thích: Lập trình&quot;)</div>
                        <div>print(&quot;Lý do học Python: Dễ học và ứng dụng rộng&quot;)</div>
                      </div>
                    </details>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">🧮 Bài 2: Tính toán cơ bản</h3>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Cơ bản</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Sử dụng Python như một máy tính để thực hiện các phép tính
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-4">
                      <h4 className="font-semibold mb-2">Yêu cầu:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Tính 25 + 17</li>
                        <li>Tính 100 - 33</li>
                        <li>Tính 7 * 8</li>
                        <li>Tính 84 / 4</li>
                        <li>Tính 2^10 (2 mũ 10)</li>
                      </ul>
                    </div>
                    <details className="bg-blue-50 p-4 rounded">
                      <summary className="cursor-pointer font-semibold">💡 Gợi ý</summary>
                      <div className="mt-3 bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                        <div>print(&quot;25 + 17 =&quot;, 25 + 17)</div>
                        <div>print(&quot;100 - 33 =&quot;, 100 - 33)</div>
                        <div>print(&quot;7 * 8 =&quot;, 7 * 8)</div>
                        <div>print(&quot;84 / 4 =&quot;, 84 / 4)</div>
                        <div>print(&quot;2^10 =&quot;, 2**10)</div>
                      </div>
                    </details>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">💬 Bài 3: Input/Output</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Trung bình</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Tạo chương trình tương tác với người dùng
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-4">
                      <h4 className="font-semibold mb-2">Yêu cầu:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Hỏi tên người dùng</li>
                        <li>Hỏi năm sinh</li>
                        <li>Tính tuổi và in ra lời chào</li>
                      </ul>
                    </div>
                    <details className="bg-blue-50 p-4 rounded">
                      <summary className="cursor-pointer font-semibold">💡 Gợi ý</summary>
                      <div className="mt-3 bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                        <div>name = input(&quot;Tên của bạn là gì? &quot;)</div>
                        <div>birth_year = int(input(&quot;Năm sinh: &quot;))</div>
                        <div>age = 2024 - birth_year</div>
                        <div>print(f&quot;Chào &#123;name&#125;, bạn &#123;age&#125; tuổi!&quot;)</div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'project' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">🚀 Dự án thực hành</h2>
                
                <div className="border rounded-lg p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Máy tính cá nhân đầu tiên</h3>
                      <p className="text-gray-600">Tạo chương trình máy tính tương tác</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">📋 Yêu cầu chức năng:</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Hiển thị menu lựa chọn phép toán</li>
                        <li>Nhập hai số từ người dùng</li>
                        <li>Thực hiện phép toán được chọn</li>
                        <li>Hiển thị kết quả đẹp mắt</li>
                        <li>Hỏi có muốn tiếp tục không</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">🏆 Tính năng nâng cao:</h4>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Xử lý lỗi chia cho 0</li>
                        <li>Thêm phép tính luỹ thừa</li>
                        <li>Thêm phép tính căn bậc hai</li>
                        <li>Lưu lịch sử tính toán</li>
                        <li>Giao diện màu sắc</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">💻 Code mẫu để bắt đầu:</h4>
                    <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                      <div className="text-gray-400"># Máy tính cá nhân</div>
                      <div>print(&quot;🧮 Chào mừng đến với Máy tính Python!&quot;)</div>
                      <div>print(&quot;1. Cộng&quot;)</div>
                      <div>print(&quot;2. Trừ&quot;)</div>
                      <div>print(&quot;3. Nhân&quot;)</div>
                      <div>print(&quot;4. Chia&quot;)</div>
                      <div><br /></div>
                      <div>choice = input(&quot;Chọn phép toán (1-4): &quot;)</div>
                      <div>num1 = float(input(&quot;Số thứ nhất: &quot;))</div>
                      <div>num2 = float(input(&quot;Số thứ hai: &quot;))</div>
                      <div><br /></div>
                      <div className="text-gray-400"># Thêm logic xử lý ở đây</div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">🎯 Mục tiêu học tập:</h4>
                    <ul className="list-disc list-inside text-blue-700 text-sm space-y-1">
                      <li>Thực hành input/output</li>
                      <li>Sử dụng print formatting</li>
                      <li>Làm quen với logic cơ bản</li>
                      <li>Tạo chương trình hoàn chỉnh</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📚 Tài liệu tham khảo</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://docs.python.org/3/" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <ExternalLink className="w-5 h-5 text-blue-500 mr-3" />
              <div>
                <h3 className="font-semibold">Python Documentation</h3>
                <p className="text-sm text-gray-600">Tài liệu chính thức của Python</p>
              </div>
            </a>
            <a href="https://www.python.org/about/gettingstarted/" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <ExternalLink className="w-5 h-5 text-green-500 mr-3" />
              <div>
                <h3 className="font-semibold">Getting Started</h3>
                <p className="text-sm text-gray-600">Hướng dẫn bắt đầu cho người mới</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link 
            href="/python"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            ← Quay lại Module
          </Link>
          <Link 
            href="/python/variables-data-types"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Bài tiếp theo: Variables & Data Types →
          </Link>
        </div>
      </div>
    </div>
  );
}
