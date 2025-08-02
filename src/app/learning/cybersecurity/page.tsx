import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Eye, Brain, Server, AlertTriangle, Search, Bug, Users, TrendingUp, ChevronRight, Play, Clock, Target, Zap } from 'lucide-react'
import { cyberSecurityLessons } from '@/data/cybersecurity'
import { createTitle, createDescription, createKeywords } from '@/utils/seo'

export const metadata: Metadata = {
  title: createTitle('Cybersecurity & Ethical Hacking - Bảo mật và An ninh mạng'),
  description: createDescription('Master cybersecurity và ethical hacking với penetration testing, incident response, threat hunting. Học security defense strategies và vulnerability assessment.'),
  keywords: createKeywords('cybersecurity, ethical hacking, penetration testing, security, incident response, threat hunting, vulnerability assessment, malware analysis, network security'),
  openGraph: {
    title: 'Cybersecurity & Ethical Hacking | K2AiHub',
    description: 'Comprehensive cybersecurity education từ ethical hacking đến advanced defense strategies',
    images: [{ url: '/cybersecurity-hero.jpg', width: 1200, height: 630 }],
  }
}

export default function CyberSecurityPage() {
  const toolCategories = [
    {
      title: 'Penetration Testing',
      icon: <Bug className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      tools: [
        { name: 'Kali Linux', description: 'Complete penetration testing OS', popularity: 98 },
        { name: 'Metasploit', description: 'Advanced exploitation framework', popularity: 95 },
        { name: 'Burp Suite', description: 'Web application security testing', popularity: 92 },
        { name: 'Nmap', description: 'Network discovery và security auditing', popularity: 96 }
      ]
    },
    {
      title: 'Security Defense',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      tools: [
        { name: 'Splunk SIEM', description: 'Security information và event management', popularity: 89 },
        { name: 'Snort/Suricata', description: 'Intrusion detection systems', popularity: 87 },
        { name: 'YARA', description: 'Malware identification và classification', popularity: 85 },
        { name: 'MISP', description: 'Threat intelligence platform', popularity: 82 }
      ]
    },
    {
      title: 'Incident Response',
      icon: <AlertTriangle className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      tools: [
        { name: 'TheHive', description: 'Incident response platform', popularity: 78 },
        { name: 'Volatility', description: 'Memory forensics framework', popularity: 81 },
        { name: 'Wireshark', description: 'Network protocol analyzer', popularity: 94 },
        { name: 'Autopsy', description: 'Digital forensics platform', popularity: 76 }
      ]
    },
    {
      title: 'Threat Intelligence',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      tools: [
        { name: 'MITRE ATT&CK', description: 'Threat behavior framework', popularity: 91 },
        { name: 'YETI', description: 'Threat intelligence repository', popularity: 74 },
        { name: 'OpenCTI', description: 'Cyber threat intelligence platform', popularity: 79 },
        { name: 'Maltego', description: 'OSINT và link analysis', popularity: 83 }
      ]
    }
  ]

  const securityDomains = [
    {
      title: 'Network Security',
      icon: <Server className="w-6 h-6" />,
      skills: ['Firewall Management', 'IDS/IPS', 'Network Monitoring', 'VPN Security'],
      demand: 94
    },
    {
      title: 'Web Application Security',
      icon: <Lock className="w-6 h-6" />,
      skills: ['OWASP Top 10', 'SQL Injection', 'XSS Prevention', 'API Security'],
      demand: 91
    },
    {
      title: 'Cloud Security',
      icon: <Brain className="w-6 h-6" />,
      skills: ['AWS Security', 'Azure Security', 'Cloud Compliance', 'Container Security'],
      demand: 97
    },
    {
      title: 'Threat Hunting',
      icon: <Search className="w-6 h-6" />,
      skills: ['Advanced Analytics', 'IOC Analysis', 'Behavioral Detection', 'SIEM Queries'],
      demand: 89
    }
  ]

  const careerPaths = [
    { role: 'Penetration Tester', salary: '$75,000 - $150,000', growth: '+18%', companies: 'Consulting firms, Financial services' },
    { role: 'Security Analyst', salary: '$60,000 - $120,000', growth: '+31%', companies: 'All industries, Government' },
    { role: 'Incident Response Specialist', salary: '$80,000 - $160,000', growth: '+28%', companies: 'Enterprise, Cybersecurity vendors' },
    { role: 'Security Architect', salary: '$120,000 - $200,000+', growth: '+15%', companies: 'Large enterprises, Cloud providers' }
  ]

  const certifications = [
    { name: 'CEH', fullName: 'Certified Ethical Hacker', difficulty: 'Intermediate', value: 85 },
    { name: 'OSCP', fullName: 'Offensive Security Certified Professional', difficulty: 'Advanced', value: 95 },
    { name: 'CISSP', fullName: 'Certified Information Systems Security Professional', difficulty: 'Expert', value: 92 },
    { name: 'GCIH', fullName: 'GIAC Certified Incident Handler', difficulty: 'Advanced', value: 88 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Cybersecurity & Ethical Hacking Mastery
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bảo mật và
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Ethical Hacking
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master cybersecurity từ ethical hacking đến advanced defense strategies. 
            Học penetration testing, incident response, threat hunting và security operations với 
            hands-on labs và real-world scenarios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`/learning/cybersecurity/${cyberSecurityLessons[0].id}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2" />
              Bắt đầu học ngay
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#curriculum"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Target className="w-5 h-5 mr-2" />
              Xem chương trình học
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Security Tools', value: '50+', icon: <Shield className="w-6 h-6" /> },
              { label: 'Hands-on Labs', value: '100+', icon: <Bug className="w-6 h-6" /> },
              { label: 'Career Growth', value: '+31%', icon: <TrendingUp className="w-6 h-6" /> },
              { label: 'Avg Salary', value: '$120K', icon: <Zap className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2 text-red-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tools Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Security Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master industry-standard cybersecurity tools từ penetration testing đến threat intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {toolCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                      <div>
                        <h4 className="font-semibold text-white">{tool.name}</h4>
                        <p className="text-gray-400 text-sm">{tool.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-400">{tool.popularity}%</div>
                        <div className="text-xs text-gray-500">Industry Usage</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Domains */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Specialization Domains
            </h2>
            <p className="text-xl text-gray-300">
              Choose your cybersecurity career path với high-demand specializations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityDomains.map((domain, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-500/20 rounded-lg text-red-400 mr-3">
                    {domain.icon}
                  </div>
                  <h3 className="font-bold text-white">{domain.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  {domain.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                      {skill}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Market Demand</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden mr-2">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                        style={{ width: `${domain.demand}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-green-400">{domain.demand}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cybersecurity Career Opportunities
            </h2>
            <p className="text-xl text-gray-300">
              High-demand security roles với excellent compensation và growth potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{career.role}</h3>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {career.growth}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-gray-300">Salary: </span>
                    <span className="text-green-400 font-semibold ml-1">{career.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-gray-300">Companies: </span>
                    <span className="text-white ml-1">{career.companies}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Industry Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-lg font-bold text-red-400 mb-1">{cert.name}</div>
                  <div className="text-sm text-gray-300 mb-2">{cert.fullName}</div>
                  <div className="text-xs text-gray-400 mb-2">{cert.difficulty}</div>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden mr-2">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                        style={{ width: `${cert.value}%` }}
                      />
                    </div>
                    <span className="text-xs text-green-400">{cert.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section id="curriculum" className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-300">
              Structured learning path từ ethical hacking basics đến advanced security operations
            </p>
          </div>

          <div className="space-y-6">
            {cyberSecurityLessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`/learning/cybersecurity/${lesson.id}`}
                className="block bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {lesson.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-400 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {lesson.duration}
                          </span>
                          <span className="text-sm text-gray-400">{lesson.difficulty}</span>
                          <span className="text-sm bg-red-500/20 text-red-400 px-2 py-1 rounded">
                            {lesson.securityDomain}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {lesson.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {lesson.tools.slice(0, 3).map((tool, toolIndex) => (
                        <span key={toolIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded border border-white/20">
                          {tool}
                        </span>
                      ))}
                      {lesson.tools.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{lesson.tools.length - 3} more tools
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors ml-4 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Master Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands của security professionals advancing their careers với 
              comprehensive cybersecurity education
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/learning/cybersecurity/${cyberSecurityLessons[0].id}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Shield className="w-5 h-5 mr-2" />
                Start Cybersecurity Journey
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/learning"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Explore All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
