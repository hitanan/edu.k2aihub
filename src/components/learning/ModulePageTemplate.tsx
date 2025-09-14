import Link from 'next/link';
import DynamicBreadcrumbs from './DynamicBreadcrumbs';
import Image from 'next/image';
import { Clock, Target, Users, TrendingUp, Play, ChevronRight, Star, Award, Lightbulb } from 'lucide-react';
import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';
import { moduleNavigation } from '@/data/moduleNavigation';
import { createEducationalContentStructuredData, createFAQStructuredDataFromQA } from '@/utils/seo';
import StructuredData from '@/components/StructuredData';
import { InteractiveFAQ } from './InteractiveFAQ';

interface ModulePageTemplateProps {
  moduleData: ModuleData;
  lessons: BaseLessonData[];
  additionalStats?: Array<{
    label: string;
    value: string;
    icon: React.ReactNode;
  }>;
  specialSections?: React.ReactNode[];
}

export default function ModulePageTemplate({
  moduleData,
  lessons,
  additionalStats = [],
  specialSections = [],
}: ModulePageTemplateProps) {
  const {
    id,
    title,
    subtitle,
    description,
    level = 'Trung bình',
    duration = '10-15 giờ',
    features = [],
    icon = '📚',
    color = 'from-blue-600 to-purple-600',
    heroImageUrl,
    objectives = [],
    prerequisites = [],
    careerOutcomes = [],
    industryApplications = [],
    marketDemand,
    gradientColors,
    basePath,
    statsConfig,
    marketData,
    careerPaths,
    technicalHighlights,
    relatedModules,
  } = moduleData;

  const moduleUrl = `https://k2aihub.com/learning/${id}`;
  const structuredData = createEducationalContentStructuredData(title, description, moduleUrl);
  const moduleFaqStructured =
    moduleData.faqs && moduleData.faqs.length > 0 ? createFAQStructuredDataFromQA(moduleData.faqs, moduleUrl) : null;

  // Get relatedModules data from moduleNavigation
  const relatedModulesData = relatedModules
    ?.map((moduleId) => {
      const mod = moduleNavigation.find((mod) => 'id' in mod && mod.id === moduleId);
      if (!mod) return null;

      const isCore = 'coreModule' in mod && (mod as { coreModule?: boolean }).coreModule;

      return {
        href: isCore ? `/${mod.id}` : `/learning/${mod.id}`,
        icon: mod.icon,
        title: mod.title,
        description: mod.description,
      };
    })
    .filter((mod) => mod !== null);

  const defaultStats = [
    {
      label: 'Số bài học',
      value: statsConfig?.lessons || `${lessons.length}+`,
      icon: <Play className="w-6 h-6" />,
    },
    {
      label: 'Thời gian học',
      value: statsConfig?.duration || duration,
      icon: <Clock className="w-6 h-6" />,
    },
    {
      label: 'Độ khó',
      value: statsConfig?.level || level,
      icon: <Target className="w-6 h-6" />,
    },
    {
      label: 'Dự án',
      value: statsConfig?.projects || '5+',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const stats = [...defaultStats, ...additionalStats];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradientColors || color}`}>
      <StructuredData data={structuredData} />
      {moduleFaqStructured && <StructuredData data={moduleFaqStructured} />}
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <DynamicBreadcrumbs moduleId={moduleData.id} />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {heroImageUrl && (
          <div className="absolute inset-0">
            <Image src={heroImageUrl} alt={title} fill className="object-cover opacity-30" />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-6">
            <span className="text-2xl mr-2">{icon}</span>
            {subtitle}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>

          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`${basePath || `/learning/${moduleData.id || ''}`}/${lessons[0]?.id || ''}`}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Bắt đầu học ngay
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#curriculum"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            >
              <Target className="w-5 h-5 mr-2" />
              Xem chương trình học
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2 text-white">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      {features.length > 0 && (
        <section className="py-16 px-4 bg-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tại sao chọn {title}?</h2>
              <p className="text-xl text-gray-200">Những điểm nổi bật của chương trình học</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  <div className="w-full h-1 bg-white/20 rounded-full">
                    <div
                      className="h-full bg-white/60 rounded-full"
                      style={{ width: `${Math.min(90 + index * 2, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learning Objectives */}
      {(objectives.length > 0 || prerequisites.length > 0) && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {objectives.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Target className="w-8 h-8 mr-3" />
                    Mục tiêu học tập
                  </h2>
                  <div className="space-y-4">
                    {objectives.map((objective, index) => (
                      <div key={index} className="flex items-start p-4 bg-white/10 rounded-xl border border-white/20">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-200">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {prerequisites.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <Lightbulb className="w-8 h-8 mr-3" />
                    Kiến thức cần có
                  </h2>
                  <div className="space-y-4">
                    {prerequisites.map((prereq, index) => (
                      <div key={index} className="flex items-start p-4 bg-white/10 rounded-xl border border-white/20">
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                          !
                        </div>
                        <span className="text-gray-200">{prereq}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs (Module-level) */}
      {moduleData.faqs && moduleData.faqs.length > 0 && (
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto">
            <InteractiveFAQ faqs={moduleData.faqs} primaryColor={moduleData.primaryColor || 'blue'} />
          </div>
        </section>
      )}

      {/* Market Data & Career */}
      {(marketData || marketDemand) && (
        <section className="py-16 px-4 bg-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Thị trường & Cơ hội nghề nghiệp</h2>
              <p className="text-xl text-gray-200">Dữ liệu thị trường việc làm và mức lương hấp dẫn</p>
            </div>

            {/* Market Data Grid */}
            {marketData && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Quy mô thị trường</h3>
                  <p className="text-2xl font-bold text-green-400 mb-1">{marketData.marketSize}</p>
                  <p className="text-sm text-gray-300">{marketData.marketNote}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                  <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Tăng trưởng việc làm</h3>
                  <p className="text-2xl font-bold text-blue-400 mb-1">{marketData.jobGrowth}</p>
                  <p className="text-sm text-gray-300">{marketData.jobNote}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Lợi thế cạnh tranh</h3>
                  <p className="text-2xl font-bold text-purple-400 mb-1">{marketData.reduction}</p>
                  <p className="text-sm text-gray-300">{marketData.reductionNote}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Cơ hội startup</h3>
                  <p className="text-2xl font-bold text-yellow-400 mb-1">{marketData.startups}</p>
                  <p className="text-sm text-gray-300">{marketData.startupsNote}</p>
                </div>
              </div>
            )}

            {/* Legacy Market Demand Support */}
            {marketDemand && !marketData && (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Mức lương</h3>
                  <p className="text-3xl font-bold text-green-400">{marketDemand.averageSalary}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Tăng trưởng</h3>
                  <p className="text-3xl font-bold text-blue-400">{marketDemand.jobGrowth}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Nhu cầu tuyển dụng</h3>
                  <p className="text-3xl font-bold text-purple-400">{marketDemand.hireDemand}</p>
                </div>
              </div>
            )}

            {/* Career Paths */}
            {((careerPaths && careerPaths.length > 0) || (careerOutcomes && careerOutcomes.length > 0)) && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Các vị trí nghề nghiệp</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(careerPaths || careerOutcomes || []).map((career: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white/10 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      <Award className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-200">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Industry Applications */}
      {industryApplications.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ứng dụng thực tế</h2>
              <p className="text-xl text-gray-200">Các lĩnh vực áp dụng kiến thức từ chương trình học</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryApplications.map(
                (application: string | { name: string; description: string }, index: number) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                      {index + 1}
                    </div>
                    {typeof application === 'string' ? (
                      <h3 className="text-lg font-semibold text-white mb-2">{application}</h3>
                    ) : (
                      <>
                        <h3 className="text-lg font-semibold text-white mb-2">{application.name}</h3>
                        <p className="text-gray-300 text-sm">{application.description}</p>
                      </>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* Technical Highlights */}
      {technicalHighlights && technicalHighlights.length > 0 && (
        <section className="py-16 px-4 bg-black/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Công nghệ & Kỹ thuật</h2>
              <p className="text-xl text-gray-200">Các công nghệ chính được sử dụng trong khóa học</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalHighlights.map((tech: { title: string; icon: string; items: string[] }, index: number) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{tech.icon}</span>
                    <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tech.items.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Special Sections */}
      {specialSections.map((section, index) => (
        <div key={index}>{section}</div>
      ))}

      {/* Related Modules */}
      {relatedModulesData && relatedModulesData.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Khóa học liên quan</h2>
              <p className="text-xl text-gray-200">Mở rộng kiến thức với các khóa học bổ trợ</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedModulesData.map((module, index) =>
                !module ? null : (
                  <Link
                    key={index}
                    href={module.href || ''}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{module.icon}</span>
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-200">{module.title}</h3>
                    </div>
                    <p className="text-gray-300">{module.description}</p>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* Course Curriculum */}
      <section id="curriculum" className="py-16 px-4 bg-black/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Chương trình học</h2>
            <p className="text-xl text-gray-200">{lessons.length} bài học từ cơ bản đến nâng cao</p>
          </div>

          <div className="space-y-6">
            {lessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`${basePath || `/learning/${moduleData.id || ''}`}/${lesson.id}`}
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-white text-gray-900 rounded-lg flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                          {lesson.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-300 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {lesson.duration}
                          </span>
                          <span className="text-sm text-gray-300">{lesson.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{lesson.description}</p>

                    {lesson.objectives && (
                      <div className="flex flex-wrap gap-2">
                        {lesson.objectives.slice(0, 3).map((objective, objIndex) => (
                          <span
                            key={objIndex}
                            className="text-xs bg-white/20 text-gray-200 px-2 py-1 rounded border border-white/30"
                          >
                            {objective.length > 30 ? `${objective.substring(0, 30)}...` : objective}
                          </span>
                        ))}
                        {lesson.objectives.length > 3 && (
                          <span className="text-xs text-gray-400">+{lesson.objectives.length - 3} mục tiêu khác</span>
                        )}
                      </div>
                    )}
                  </div>

                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors ml-4 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Sẵn sàng bắt đầu hành trình học tập?</h2>
            <p className="text-xl text-gray-200 mb-8">Tham gia cùng hàng nghìn học viên đã thành công với {title}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`${basePath || `/learning/${moduleData.id || ''}`}/${lessons[0]?.id || ''}`}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Bắt đầu ngay
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
                href="/learning"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Xem tất cả khóa học
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
