import { financialLiteracyLessons } from '@/data/financial-literacy';
import Link from 'next/link';
import Image from 'next/image';

export default function FinancialLiteracyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-100 rounded-full">
              <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Financial Literacy & FinTech</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Học cách quản lý tài chính cá nhân và khám phá công nghệ FinTech. Từ budgeting cơ bản đến investment strategies, 
            cryptocurrency và digital banking cho tương lai tài chính bền vững.
          </p>
        </div>

        {/* Course Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-amber-500">
            <div className="text-3xl font-bold text-amber-600 mb-2">{financialLiteracyLessons.length}</div>
            <div className="text-gray-600">Comprehensive Lessons</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-orange-500">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Practical Application</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-yellow-500">
            <div className="text-3xl font-bold text-yellow-600 mb-2">Real</div>
            <div className="text-gray-600">Financial Tools</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-red-500">
            <div className="text-3xl font-bold text-red-600 mb-2">Expert</div>
            <div className="text-gray-600">FinTech Insights</div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tại sao học Financial Literacy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Wealth Building</h3>
              <p className="text-gray-600">
                Master personal finance fundamentals và build long-term wealth through smart investing và planning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">FinTech Innovation</h3>
              <p className="text-gray-600">
                Explore cutting-edge financial technology, cryptocurrency, và digital banking solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Security</h3>
              <p className="text-gray-600">
                Build emergency funds, understand insurance, và create comprehensive financial protection plans.
              </p>
            </div>
          </div>
        </div>

        {/* Financial Tools & Platforms */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Tools & Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Budgeting Apps</h3>
              <ul className="space-y-2 text-sm">
                <li>• YNAB (You Need A Budget)</li>
                <li>• Mint Personal Finance</li>
                <li>• PocketGuard</li>
                <li>• Goodbudget Envelope</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Investment Platforms</h3>
              <ul className="space-y-2 text-sm">
                <li>• Robinhood Trading</li>
                <li>• E*TRADE Portfolio</li>
                <li>• Fidelity Investments</li>
                <li>• Vanguard Index Funds</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Cryptocurrency</h3>
              <ul className="space-y-2 text-sm">
                <li>• Coinbase Exchange</li>
                <li>• Binance Trading</li>
                <li>• MetaMask Wallet</li>
                <li>• CoinTracker Portfolio</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-semibold mb-3">Financial Planning</h3>
              <ul className="space-y-2 text-sm">
                <li>• Personal Capital</li>
                <li>• Quicken Premier</li>
                <li>• Tiller Money Spreadsheets</li>
                <li>• FutureAdvisor Robo</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Course Curriculum</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {financialLiteracyLessons.map((lesson, index) => (
              <div key={lesson.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={lesson.imageUrl || 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop'}
                    alt={lesson.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Bài {index + 1}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {lesson.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {lesson.duration}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      {lesson.financialImpact}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{lesson.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Financial Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lesson.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                      {lesson.tools.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{lesson.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {lesson.objectives.slice(0, 2).map((objective, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={`/learning/financial-literacy/${lesson.id}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-200 font-medium"
                  >
                    Bắt đầu học
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-2xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Your Finances?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands của individuals building wealth và financial security through smart money management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning/financial-literacy/personal-budgeting-fundamentals"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Start Learning Now
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200 font-semibold"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
