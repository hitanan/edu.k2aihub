'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function FunctionsPage() {
  // Image URL cho lesson này
  const imageUrl = "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=400&fit=crop";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/python" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Python Module
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                {imageUrl ? (
                  <Image 
                    src={imageUrl} 
                    alt="Python Functions"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">📦</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">Functions</h1>
                <p className="text-purple-100 mt-2">Tạo và sử dụng functions để tổ chức code hiệu quả</p>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Functions cơ bản</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-gray-400"># Định nghĩa function</div>
                    <div>def greet(name):</div>
                    <div className="ml-4">return f&quot;Xin chào, {'{name}'}!&quot;</div>
                    <div><br /></div>
                    <div className="text-gray-400"># Gọi function</div>
                    <div>message = greet(&quot;Python&quot;)</div>
                    <div>print(message)</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Bài tập thực hành</h2>
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">🧮 Bài 1: Math Utils Library</h3>
                    <p className="text-gray-600">Tạo thư viện các hàm toán học: add, subtract, multiply, divide</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">🔢 Bài 2: Calculator Functions</h3>
                    <p className="text-gray-600">Xây dựng máy tính sử dụng functions</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">🔄 Bài 3: Recursion</h3>
                    <p className="text-gray-600">Tính giai thừa và Fibonacci bằng đệ quy</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link href="/python/control-structures" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            ← Control Structures
          </Link>
          <Link href="/python/lists-tuples" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Bài tiếp theo: Lists & Tuples →
          </Link>
        </div>
      </div>
    </div>
  );
}
