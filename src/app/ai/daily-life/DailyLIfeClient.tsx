'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ShareButton from '@/components/ShareButton';


export default function DailyLifeClient() {
  const [activeSection, setActiveSection] = useState('meal-planning');

  const sections = [
    {
      id: 'meal-planning',
      title: 'Lập Kế Hoạch Ăn Uống',
      icon: '🍽️',
      content: {
        overview: 'Sử dụng AI để lập kế hoạch bữa ăn lành mạnh, tiết kiệm thời gian và phù hợp với sở thích',
        steps: [
          {
            title: 'Meal planning cá nhân hóa',
            content: `"Create personalized meal plan:
- Dietary preferences: [vegetarian/keto/mediterranean/etc.]
- Allergies/restrictions: [list any restrictions]
- Cooking skill level: [beginner/intermediate/advanced]
- Time available: [15 min/30 min/1 hour per meal]
- Budget: [weekly food budget]
- Family size: [number of people]
- Fitness goals: [weight loss/gain/maintenance]

Generate 7-day meal plan with:
- Breakfast, lunch, dinner, 2 snacks
- Nutritional breakdown (calories, protein, carbs, fat)
- Shopping list organized by store sections
- Prep time and cooking instructions
- Leftover utilization suggestions"`
          },
          {
            title: 'Recipe modifications',
            content: `"Modify this recipe for my needs:
[paste recipe]

Adjustments needed:
- Serving size: [adjust for X people]
- Dietary restrictions: [gluten-free/dairy-free/low-sodium]
- Available ingredients: [substitute unavailable items]
- Cooking method: [oven to air fryer/stovetop to slow cooker]
- Healthier version: [reduce calories/sugar/fat]

Provide:
- Modified ingredient list with exact measurements
- Step-by-step instructions for new method
- Nutritional comparison (before/after)
- Cooking time adjustments"`
          },
          {
            title: 'Smart grocery shopping',
            content: `"Create efficient grocery shopping strategy:
- Store layout: [describe your usual store]
- Weekly budget: [amount]
- Family preferences: [list likes/dislikes]
- Meal planning period: [weekly/bi-weekly]

Generate:
1. Master grocery list template organized by store sections
2. Seasonal shopping calendar for best prices
3. Bulk buying recommendations and storage tips
4. Healthy substitutions for common items
5. Budget tracking system
6. Food waste reduction strategies
7. Emergency meal backup plans"`
          },
          {
            title: 'Kitchen organization',
            content: `"Optimize kitchen efficiency:
- Kitchen size: [small/medium/large]
- Cooking frequency: [daily/few times per week]
- Storage constraints: [limited pantry/fridge space]
- Family size: [number of people]

Provide:
1. Storage solutions for different food categories
2. Essential appliances and tools prioritization
3. Meal prep containers and labeling system
4. Inventory management for pantry staples
5. Weekly prep schedule to save time
6. Kitchen cleaning and maintenance routine"`
          }
        ],
        tips: [
          'Prep ingredients trong weekend để save time trong tuần',
          'Use seasonal produce để giảm cost và tăng nutrition',
          'Batch cook grains và proteins cho multiple meals',
          'Keep emergency meals trong freezer cho busy days'
        ]
      }
    },
    {
      id: 'home-management',
      title: 'Quản Lý Nhà Cửa',
      icon: '🏠',
      content: {
        overview: 'Tối ưu hóa việc quản lý và duy trì ngôi nhà của bạn một cách hiệu quả',
        steps: [
          {
            title: 'Cleaning schedule optimization',
            content: `"Create efficient home cleaning schedule:
- Home size: [square footage/number of rooms]
- Family members: [ages and responsibilities]
- Pets: [types and special needs]
- Time available: [daily cleaning time]
- Deep cleaning frequency: [weekly/monthly preferences]

Design:
1. Daily 15-minute maintenance tasks
2. Weekly room-by-room schedule
3. Monthly deep cleaning checklist
4. Seasonal organizing and decluttering
5. Task assignment for family members
6. Cleaning supply inventory and restocking
7. Time-saving techniques and shortcuts"`
          },
          {
            title: 'Home maintenance calendar',
            content: `"Develop preventive maintenance schedule:
- Home age: [years old]
- Climate: [humid/dry/cold/hot]
- Major systems: [HVAC, plumbing, electrical notes]
- Appliances: [list major appliances and ages]

Monthly/seasonal tasks:
1. HVAC filter changes and system checks
2. Plumbing inspections and drain maintenance
3. Electrical safety checks
4. Appliance maintenance and cleaning
5. Exterior inspections (roof, gutters, siding)
6. Indoor air quality improvements
7. Emergency preparedness updates
Include cost estimates and DIY vs professional recommendations."`
          },
          {
            title: 'Organization systems',
            content: `"Design home organization system:
- Problem areas: [cluttered spaces, storage issues]
- Family lifestyle: [busy schedules, hobbies, work from home]
- Budget: [organization supply budget]
- Storage space: [available closets, cabinets, garage]

Create systems for:
1. Entryway organization (shoes, coats, bags, keys)
2. Kitchen storage and pantry organization
3. Bedroom and closet management
4. Home office and paperwork filing
5. Kids' toys and activities storage
6. Garage and seasonal item storage
7. Digital organization (photos, documents, passwords)"`
          },
          {
            title: 'Budget and expense tracking',
            content: `"Set up household budget management:
- Monthly income: [household income]
- Fixed expenses: [mortgage/rent, utilities, insurance]
- Variable expenses: [groceries, entertainment, shopping]
- Savings goals: [emergency fund, home improvements]

Organize:
1. Monthly budget categories with spending limits
2. Bill payment schedule and automation setup
3. Expense tracking system (apps/spreadsheets)
4. Savings allocation strategy
5. Home improvement priority list and funding
6. Emergency fund building plan
7. Annual review and adjustment process"`
          }
        ],
        tips: [
          'Start với small, manageable tasks để build habits',
          'Involve all family members trong maintenance responsibilities',
          'Use technology như apps và reminders để stay organized',
          'Regular decluttering prevents accumulation of unnecessary items'
        ]
      }
    },
    {
      id: 'travel-planning',
      title: 'Lên Kế Hoạch Du Lịch',
      icon: '✈️',
      content: {
        overview: 'Lập kế hoạch du lịch thông minh với AI để có chuyến đi hoàn hảo trong ngân sách',
        steps: [
          {
            title: 'Trip planning framework',
            content: `"Plan comprehensive trip to [destination]:
- Travel dates: [specific dates or flexible months]
- Budget: [total budget and breakdown preferences]
- Travel party: [number of people, ages, interests]
- Travel style: [luxury/budget/adventure/cultural/relaxation]
- Duration: [number of days]
- Must-see priorities: [list top interests]

Create:
1. Day-by-day itinerary with time allocations
2. Transportation options and booking recommendations
3. Accommodation suggestions by area and budget
4. Restaurant recommendations for different meals
5. Activity bookings and reservation timeline
6. Packing list based on weather and activities
7. Budget breakdown and expense tracking system"`
          },
          {
            title: 'Local experience discovery',
            content: `"Find authentic local experiences in [city/region]:
- Interests: [food/history/nature/arts/nightlife]
- Budget level: [budget/mid-range/luxury]
- Group type: [solo/couple/family/friends]
- Mobility: [walking/public transport/rental car]

Recommend:
1. Hidden gems and off-the-beaten-path attractions
2. Local festivals and seasonal events
3. Authentic dining experiences and food tours
4. Cultural activities and workshops
5. Outdoor adventures and nature experiences
6. Shopping areas for local crafts and souvenirs
7. Networking opportunities with locals"`
          },
          {
            title: 'Travel logistics optimization',
            content: `"Optimize travel logistics for [trip type]:
- Departure city: [your location]
- Destinations: [cities/countries to visit]
- Transportation preferences: [flight/train/car/bus]
- Luggage needs: [carry-on only/checked bags]

Organize:
1. Flight/transport booking strategy for best prices
2. Visa and documentation requirements checklist
3. Travel insurance options and recommendations
4. Money management (currency, cards, cash)
5. Communication setup (international phone/data)
6. Health preparations (vaccinations, medications)
7. Emergency contacts and backup plans"`
          },
          {
            title: 'Sustainable travel planning',
            content: `"Plan eco-friendly travel to [destination]:
- Environmental priorities: [carbon footprint/local impact]
- Accommodation preferences: [eco-hotels/homestays]
- Transportation: [minimize flights/use public transport]
- Activities: [support local communities]

Include:
1. Carbon offset options for transportation
2. Sustainable accommodation recommendations
3. Local, ethical tour operators and activities
4. Responsible wildlife and nature experiences
5. Sustainable dining and shopping choices
6. Cultural sensitivity guidelines
7. Leave No Trace travel practices"`
          }
        ],
        tips: [
          'Book flexible tickets when possible để adapt plans',
          'Research local customs và tipping practices trước khi đi',
          'Download offline maps và translation apps',
          'Keep digital copies của important documents trong cloud'
        ]
      }
    },
    {
      id: 'personal-finance',
      title: 'Quản Lý Tài Chính Cá Nhân',
      icon: '💳',
      content: {
        overview: 'Sử dụng AI để quản lý tài chính cá nhân, đầu tư thông minh và đạt được mục tiêu tài chính',
        steps: [
          {
            title: 'Personal budget optimization',
            content: `"Create comprehensive personal budget:
- Monthly income: [after-tax income]
- Fixed expenses: [rent, loans, insurance, subscriptions]
- Variable expenses: [food, transport, entertainment]
- Financial goals: [emergency fund, vacation, retirement]
- Debt obligations: [credit cards, loans, amounts, interest rates]

Design:
1. 50/30/20 rule adaptation for your situation
2. Monthly spending categories with realistic limits
3. Automated savings allocation strategy
4. Debt payoff plan (snowball vs avalanche method)
5. Expense tracking system and tools
6. Monthly budget review and adjustment process
7. Goal-based savings timeline"`
          },
          {
            title: 'Investment strategy planning',
            content: `"Develop investment strategy:
- Age: [current age]
- Risk tolerance: [conservative/moderate/aggressive]
- Investment timeline: [short-term/long-term goals]
- Current savings: [available investment amount]
- Knowledge level: [beginner/intermediate/advanced]
- Goals: [retirement/house/education/wealth building]

Recommend:
1. Asset allocation based on age and risk tolerance
2. Investment account types (401k, IRA, taxable)
3. Low-cost index fund and ETF options
4. Dollar-cost averaging implementation
5. Tax-efficient investment strategies
6. Rebalancing schedule and triggers
7. Performance monitoring and adjustment criteria"`
          },
          {
            title: 'Debt elimination strategy',
            content: `"Create debt payoff plan:
- Total debt: [list all debts with balances and interest rates]
- Monthly payment capacity: [amount available for debt payments]
- Credit score: [current score and improvement goals]
- Income stability: [stable/variable income]

Strategy:
1. Debt avalanche vs snowball method comparison
2. Minimum payment schedule for all debts
3. Extra payment allocation strategy
4. Credit card balance transfer opportunities
5. Debt consolidation loan evaluation
6. Credit score improvement action plan
7. Timeline to debt freedom with milestones"`
          },
          {
            title: 'Financial goal achievement',
            content: `"Plan for major financial goals:
- Goals: [house down payment/retirement/education/travel]
- Timeline: [when you need the money]
- Target amounts: [specific dollar amounts]
- Current progress: [existing savings toward goals]

Create:
1. SMART financial goals with specific timelines
2. Monthly savings requirements for each goal
3. High-yield savings and investment options
4. Automatic transfer and savings automation
5. Progress tracking and milestone celebrations
6. Obstacle planning (job loss, emergency expenses)
7. Goal prioritization when resources are limited"`
          }
        ],
        tips: [
          'Automate savings và bill payments để avoid missing deadlines',
          'Review và update financial goals quarterly',
          'Build emergency fund trước khi focus on investments',
          'Take advantage của employer 401k matching if available'
        ]
      }
    }
  ];

  const activeContent = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/ai" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center text-white text-sm">
                  🏠
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI cho Cuộc Sống Hàng Ngày
                </h1>
              </Link>
              <nav className="hidden md:flex items-center gap-1 ml-6">
                <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm">
                  Trang Chủ
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <Link href="/ai" className="text-gray-500 hover:text-gray-700 text-sm">
                  AI Của Tôi
                </Link>
                <span className="text-gray-300 mx-2">/</span>
                <span className="text-gray-900 text-sm font-medium">
                  Cuộc Sống Hàng Ngày
                </span>
              </nav>
            </div>
            <ShareButton 
              title="AI cho Cuộc Sống Hàng Ngày | K2AiHub"
              description="Lập kế hoạch ăn uống, quản lý nhà cửa, lên kế hoạch du lịch và quản lý tài chính cá nhân với AI"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Nội Dung</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-orange-50 text-orange-700 border border-orange-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{section.icon}</span>
                      <span className="text-sm font-medium">{section.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeContent && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{activeContent.icon}</span>
                    <h1 className="text-3xl font-bold text-gray-900">{activeContent.title}</h1>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {activeContent.content.overview}
                  </p>
                </div>

                {/* Steps */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Hướng Dẫn Chi Tiết</h2>
                  <div className="space-y-6">
                    {activeContent.content.steps.map((step, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-500">
                              <pre className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                                {step.content}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                    💡 Mẹo Quan Trọng
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.content.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-red-700">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
