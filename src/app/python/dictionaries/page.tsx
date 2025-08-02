'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function DictionariesPage() {
  // Image URL cho lesson này
  const imageUrl = "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=400&fit=crop";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/python" className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Python Module
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                {imageUrl ? (
                  <Image 
                    src={imageUrl} 
                    alt="Python Dictionaries"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">🗂️</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">Dictionaries</h1>
                <p className="text-amber-100 mt-2">Sử dụng dictionaries để lưu trữ key-value data</p>
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🗝️ Dictionaries cơ bản</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-gray-400"># Tạo dictionary</div>
                    <div>student = &#123;</div>
                    <div className="ml-4">&quot;name&quot;: &quot;Nguyễn Văn A&quot;,</div>
                    <div className="ml-4">&quot;age&quot;: 20,</div>
                    <div className="ml-4">&quot;grade&quot;: &quot;A&quot;</div>
                    <div>&#125;</div>
                    <div><br /></div>
                    <div className="text-gray-400"># Truy cập dữ liệu</div>
                    <div>print(student[&quot;name&quot;])</div>
                    <div>student[&quot;email&quot;] = &quot;student@email.com&quot;</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Bài tập thực hành</h2>
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">👨‍🎓 Bài 1: Student Management</h3>
                    <p className="text-gray-600">Quản lý thông tin sinh viên với dictionary</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">🔧 Bài 2: Dictionary Functions</h3>
                    <p className="text-gray-600">Xây dựng các hàm xử lý dictionary</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">📊 Bài 3: Data Analysis</h3>
                    <p className="text-gray-600">Phân tích dữ liệu bằng dictionary</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link href="/python/lists-tuples" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            ← Lists & Tuples
          </Link>
          <Link href="/python/file-handling" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
            Bài tiếp theo: File Handling →
          </Link>
        </div>
      </div>
    </div>
  );
}
