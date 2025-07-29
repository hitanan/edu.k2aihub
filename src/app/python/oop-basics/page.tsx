'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OOPBasicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/python" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Python Module
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl mr-4">🏗️</div>
              <div>
                <h1 className="text-3xl font-bold">OOP Cơ Bản</h1>
                <p className="text-indigo-100 mt-2">Học lập trình hướng đối tượng với classes và objects</p>
                <div className="flex items-center mt-3 space-x-4 text-sm">
                  <span className="bg-white/20 px-2 py-1 rounded">⏱️ 150 phút</span>
                  <span className="bg-white/20 px-2 py-1 rounded">📊 Nâng cao</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🏗️ Classes và Objects</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
                    <div className="text-gray-400"># Định nghĩa class</div>
                    <div>class Student:</div>
                    <div className="ml-4">def __init__(self, name, age):</div>
                    <div className="ml-8">self.name = name</div>
                    <div className="ml-8">self.age = age</div>
                    <div><br /></div>
                    <div className="ml-4">def introduce(self):</div>
                    <div className="ml-8">return f&quot;Tôi là &#123;self.name&#125;, &#123;self.age&#125; tuổi&quot;</div>
                    <div><br /></div>
                    <div className="text-gray-400"># Tạo object</div>
                    <div>student1 = Student(&quot;An&quot;, 20)</div>
                    <div>print(student1.introduce())</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Bài tập thực hành</h2>
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">🏦 Bài 1: Bank Account System</h3>
                    <p className="text-gray-600">Tạo hệ thống tài khoản ngân hàng</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">🎮 Bài 2: Game Characters</h3>
                    <p className="text-gray-600">Thiết kế nhân vật cho game</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">📚 Bài 3: Library System</h3>
                    <p className="text-gray-600">Hệ thống quản lý thư viện</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link href="/python/file-handling" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            ← File Handling
          </Link>
          <Link href="/python" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Hoàn thành Python Module →
          </Link>
        </div>
      </div>
    </div>
  );
}
