'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ControlStructuresPage() {
  const [activeTab, setActiveTab] = useState<'lesson' | 'exercise' | 'project'>('lesson');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/python"
            className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Python Module
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl mr-4">
                🔀
              </div>
              <div>
                <h1 className="text-3xl font-bold">Cấu Trúc Điều Khiển</h1>
                <p className="text-green-100 mt-2">If-else, vòng lặp for, while và cách sử dụng trong giải quyết bài toán</p>
                <div className="flex items-center mt-3 space-x-4 text-sm">
                  <span className="bg-white/20 px-2 py-1 rounded">⏱️ 120 phút</span>
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
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                📚 Bài học
              </button>
              <button
                onClick={() => setActiveTab('exercise')}
                className={`px-6 py-3 font-medium ${activeTab === 'exercise' 
                  ? 'border-b-2 border-green-500 text-green-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                💻 Bài tập
              </button>
              <button
                onClick={() => setActiveTab('project')}
                className={`px-6 py-3 font-medium ${activeTab === 'project' 
                  ? 'border-b-2 border-green-500 text-green-600' 
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
                      <h3 className="font-semibold text-blue-800">If-Else Statement</h3>
                      <p className="text-blue-600 text-sm mt-1">Sử dụng if-else để ra quyết định</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-800">Vòng lặp For & While</h3>
                      <p className="text-green-600 text-sm mt-1">Áp dụng vòng lặp for và while</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-800">Giải quyết bài toán</h3>
                      <p className="text-purple-600 text-sm mt-1">Giải quyết bài toán có điều kiện</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">🤔 Câu lệnh If-Else</h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3">Cú pháp cơ bản</h3>
                      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                        <div className="text-gray-400"># If statement đơn giản</div>
                        <div>age = 18</div>
                        <div>if age &gt;= 18:</div>
                        <div className="ml-4">print(&quot;Bạn đã đủ tuổi bầu cử&quot;)</div>
                        <div>else:</div>
                        <div className="ml-4">print(&quot;Bạn chưa đủ tuổi bầu cử&quot;)</div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">If-Elif-Else</h3>
                      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                        <div>score = 85</div>
                        <div>if score &gt;= 90:</div>
                        <div className="ml-4">print(&quot;Điểm A - Xuất sắc&quot;)</div>
                        <div>elif score &gt;= 80:</div>
                        <div className="ml-4">print(&quot;Điểm B - Giỏi&quot;)</div>
                        <div>elif score &gt;= 70:</div>
                        <div className="ml-4">print(&quot;Điểm C - Khá&quot;)</div>
                        <div>else:</div>
                        <div className="ml-4">print(&quot;Cần cải thiện&quot;)</div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">🔄 Vòng lặp For</h2>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-800 mb-3">Vòng lặp với range()</h3>
                      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                        <div className="text-gray-400"># In số từ 1 đến 5</div>
                        <div>for i in range(1, 6):</div>
                        <div className="ml-4">print(i)</div>
                        <div><br /></div>
                        <div className="text-gray-400"># In bảng cửu chương 5</div>
                        <div>for i in range(1, 11):</div>
                        <div className="ml-4">print(f&quot;5 x {'{i}'} = {'{5*i}'}&quot;)</div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">🌀 Vòng lặp While</h2>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-3">While cơ bản</h3>
                      <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                        <div className="text-gray-400"># Đếm ngược từ 5</div>
                        <div>count = 5</div>
                        <div>while count &gt; 0:</div>
                        <div className="ml-4">print(count)</div>
                        <div className="ml-4">count -= 1</div>
                        <div>print(&quot;Hết giờ!&quot;)</div>
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
                      <h3 className="text-xl font-semibold">🎯 Bài 1: Grade Calculator</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Cơ bản</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Viết chương trình xếp loại học lực dựa trên điểm số
                    </p>
                    <div className="bg-gray-50 p-4 rounded mb-4">
                      <h4 className="font-semibold mb-2">Yêu cầu:</h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Nhập điểm từ người dùng (0-100)</li>
                        <li>90-100: Xuất sắc</li>
                        <li>80-89: Giỏi</li>
                        <li>70-79: Khá</li>
                        <li>60-69: Trung bình</li>
                        <li>Dưới 60: Yếu</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">🧮 Bài 2: Số nguyên tố</h3>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Trung bình</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Kiểm tra một số có phải là số nguyên tố hay không
                    </p>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">🎨 Bài 3: Pattern printing</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Thú vị</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      In ra các hình tam giác bằng dấu sao
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'project' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">🚀 Dự án: Game Đoán Số</h2>
                
                <div className="border rounded-lg p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl mr-4">
                      🎮
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Game Đoán Số Thông Minh</h3>
                      <p className="text-gray-600">Tạo game tương tác với người chơi</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                    <div>import random</div>
                    <div><br /></div>
                    <div>number = random.randint(1, 100)</div>
                    <div>attempts = 0</div>
                    <div>max_attempts = 7</div>
                    <div><br /></div>
                    <div>print(&quot;🎯 Chào mừng đến với Game Đoán Số!&quot;)</div>
                    <div>print(&quot;Tôi đã nghĩ ra một số từ 1 đến 100&quot;)</div>
                    <div><br /></div>
                    <div>while attempts &lt; max_attempts:</div>
                    <div className="ml-4">guess = int(input(&quot;Đoán số: &quot;))</div>
                    <div className="ml-4">attempts += 1</div>
                    <div className="ml-4"><br /></div>
                    <div className="ml-4">if guess == number:</div>
                    <div className="ml-8">print(f&quot;🎉 Chúc mừng! Bạn đã đoán đúng trong {'{attempts}'} lần!&quot;)</div>
                    <div className="ml-8">break</div>
                    <div className="ml-4">elif guess &lt; number:</div>
                    <div className="ml-8">print(&quot;📈 Số bạn đoán nhỏ quá!&quot;)</div>
                    <div className="ml-4">else:</div>
                    <div className="ml-8">print(&quot;📉 Số bạn đoán lớn quá!&quot;)</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link 
            href="/python/variables-data-types"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
          >
            ← Variables & Data Types
          </Link>
          <Link 
            href="/python/functions"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Bài tiếp theo: Functions →
          </Link>
        </div>
      </div>
    </div>
  );
}
