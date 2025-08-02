'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function ListsTuplesPage() {
  // Image URL cho lesson này
  const imageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/python" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Python Module
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                {imageUrl ? (
                  <Image 
                    src={imageUrl} 
                    alt="Python Lists and Tuples"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">📊</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">Lists và Tuples</h1>
                <p className="text-blue-100 mt-2">Làm việc với collections - lists và tuples trong Python</p>
                <div className="flex items-center mt-3 space-x-4 text-sm">
                  <span className="bg-white/20 px-2 py-1 rounded">⏱️ 100 phút</span>
                  <span className="bg-white/20 px-2 py-1 rounded">📊 Trung bình</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 Lists cơ bản</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-gray-400"># Tạo list</div>
                    <div>fruits = [&quot;apple&quot;, &quot;banana&quot;, &quot;orange&quot;]</div>
                    <div>numbers = [1, 2, 3, 4, 5]</div>
                    <div><br /></div>
                    <div className="text-gray-400"># Thao tác với list</div>
                    <div>fruits.append(&quot;grape&quot;)</div>
                    <div>fruits.remove(&quot;banana&quot;)</div>
                    <div>print(fruits[0])  # apple</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Bài tập thực hành</h2>
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">📋 Bài 1: Task Manager</h3>
                    <p className="text-gray-600">Tạo ứng dụng quản lý task với list</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">🛒 Bài 2: Shopping List</h3>
                    <p className="text-gray-600">Xây dựng danh sách mua sắm tương tác</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">📈 Bài 3: Data Processing</h3>
                    <p className="text-gray-600">Xử lý và phân tích dữ liệu số</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link href="/python/functions" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            ← Functions
          </Link>
          <Link href="/python/dictionaries" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Bài tiếp theo: Dictionaries →
          </Link>
        </div>
      </div>
    </div>
  );
}
