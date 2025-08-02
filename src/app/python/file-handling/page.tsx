'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function FileHandlingPage() {
  // Image URL cho lesson này
  const imageUrl = "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=400&fit=crop";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/python" className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Python Module
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                {imageUrl ? (
                  <Image 
                    src={imageUrl} 
                    alt="Python File Handling"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">📄</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">File Handling</h1>
                <p className="text-red-100 mt-2">Đọc và ghi files, xử lý dữ liệu từ file</p>
                <div className="flex items-center mt-3 space-x-4 text-sm">
                  <span className="bg-white/20 px-2 py-1 rounded">⏱️ 120 phút</span>
                  <span className="bg-white/20 px-2 py-1 rounded">📊 Trung bình</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📂 File I/O cơ bản</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-gray-400"># Đọc file</div>
                    <div>with open(&quot;data.txt&quot;, &quot;r&quot;, encoding=&quot;utf-8&quot;) as file:</div>
                    <div className="ml-4">content = file.read()</div>
                    <div className="ml-4">print(content)</div>
                    <div><br /></div>
                    <div className="text-gray-400"># Ghi file</div>
                    <div>with open(&quot;output.txt&quot;, &quot;w&quot;, encoding=&quot;utf-8&quot;) as file:</div>
                    <div className="ml-4">file.write(&quot;Xin chào Python!&quot;)</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Bài tập thực hành</h2>
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">📊 Bài 1: Log Analyzer</h3>
                    <p className="text-gray-600">Phân tích file log và thống kê</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">💾 Bài 2: Data Backup</h3>
                    <p className="text-gray-600">Tạo hệ thống backup dữ liệu</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">📋 Bài 3: Report Generator</h3>
                    <p className="text-gray-600">Tạo báo cáo từ dữ liệu CSV</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link href="/python/dictionaries" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            ← Dictionaries
          </Link>
          <Link href="/python/oop-basics" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
            Bài tiếp theo: OOP Basics →
          </Link>
        </div>
      </div>
    </div>
  );
}
