import { Metadata } from 'next'
import Link from 'next/link'
import { Dna, Microscope, Flask, Heart, Leaf, Zap, ChevronRight, Play, Clock, Target, TrendingUp, Users, Atom } from 'lucide-react'
import { biotechnologyLessons } from '@/data/biotechnology'
import { createTitle, createDescription, createKeywords } from '@/utils/seo'

export const metadata: Metadata = {
  title: createTitle('Biotechnology & Life Sciences - Công nghệ sinh học'),
  description: createDescription('Master biotechnology và life sciences với genetic engineering, drug discovery, medical applications. Học CRISPR, protein engineering, bioinformatics.'),
  keywords: createKeywords('biotechnology, life sciences, genetic engineering, CRISPR, drug discovery, bioinformatics, molecular biology, biomedical research'),
  openGraph: {
    title: 'Biotechnology & Life Sciences | K2AiHub',
    description: 'Comprehensive biotechnology education từ genetic engineering đến drug discovery',
    images: [{ url: '/biotechnology-hero.jpg', width: 1200, height: 630 }],
  }
}

export default function BiotechnologyPage() {
  const biotechFields = [
    {
      title: 'Genetic Engineering',
      icon: <Dna className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      applications: [
        { name: 'CRISPR Gene Editing', impact: 'Revolutionary precision medicine', market: '$39B by 2030' },
        { name: 'Gene Therapy', impact: 'Treating genetic diseases', market: '$19B by 2027' },
        { name: 'GMO Development', impact: 'Enhanced crop yields', market: '$22B by 2025' },
        { name: 'Synthetic Biology', impact: 'Engineered organisms', market: '$85B by 2032' }
      ]
    },
    {
      title: 'Medical Biotechnology',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-500',
      applications: [
        { name: 'Drug Discovery', impact: 'New therapeutic targets', market: '$944B by 2030' },
        { name: 'Immunotherapy', impact: 'Cancer treatment revolution', market: '$200B by 2026' },
        { name: 'Personalized Medicine', impact: 'Tailored treatments', market: '$796B by 2028' },
        { name: 'Regenerative Medicine', impact: 'Tissue restoration', market: '$123B by 2030' }
      ]
    },
    {
      title: 'Agricultural Biotech',
      icon: <Leaf className="w-8 h-8" />,
      color: 'from-green-500 to-lime-500',
      applications: [
        { name: 'Crop Engineering', impact: 'Climate-resilient plants', market: '$15B by 2025' },
        { name: 'Biopesticides', impact: 'Sustainable pest control', market: '$10B by 2027' },
        { name: 'Precision Agriculture', impact: 'Data-driven farming', market: '$43B by 2030' },
        { name: 'Alternative Proteins', impact: 'Sustainable nutrition', market: '$290B by 2035' }
      ]
    },
    {
      title: 'Industrial Biotechnology',
      icon: <Flask className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      applications: [
        { name: 'Biofuels', impact: 'Renewable energy', market: '$218B by 2030' },
        { name: 'Bioplastics', impact: 'Sustainable materials', market: '$44B by 2030' },
        { name: 'Enzyme Engineering', impact: 'Industrial processes', market: '$10B by 2025' },
        { name: 'Bioremediation', impact: 'Environmental cleanup', market: '$18B by 2028' }
      ]
    }
  ]

  const researchAreas = [
    {
      title: 'Genomics & Proteomics',
      icon: <Microscope className="w-6 h-6" />,
      techniques: ['Next-Gen Sequencing', 'Mass Spectrometry', 'Protein Crystallography', 'Structural Biology'],
      impact: 97
    },
    {
      title: 'Cell & Gene Therapy',
      icon: <Dna className="w-6 h-6" />,
      techniques: ['CAR-T Therapy', 'Viral Vectors', 'Stem Cell Engineering', 'Gene Delivery'],
      impact: 94
    },
    {
      title: 'Synthetic Biology',
      icon: <Atom className="w-6 h-6" />,
      techniques: ['DNA Synthesis', 'Metabolic Engineering', 'Biosensors', 'Biocomputing'],
      impact: 92
    },
    {
      title: 'Bioinformatics',
      icon: <Zap className="w-6 h-6" />,
      techniques: ['Machine Learning', 'Genomic Analysis', 'Drug Design', 'Systems Biology'],
      impact: 89
    }
  ]

  const careerPaths = [
    { role: 'Research Scientist', salary: '$85,000 - $180,000', growth: '+8%', companies: 'Pharma, Biotech startups' },
    { role: 'Bioinformatics Scientist', salary: '$95,000 - $200,000', growth: '+22%', companies: 'Tech companies, Research institutes' },
    { role: 'Clinical Research Associate', salary: '$55,000 - $120,000', growth: '+14%', companies: 'CROs, Pharmaceutical companies' },
    { role: 'Biotech Entrepreneur', salary: '$120,000 - $500,000+', growth: '+25%', companies: 'Startup ecosystem, Venture capital' }
  ]

  const innovations = [
    { technology: 'CRISPR-Cas9', breakthrough: 'Precise gene editing', year: '2012', impact: 'Medicine revolution' },
    { technology: 'CAR-T Therapy', breakthrough: 'Engineered immune cells', year: '2017', impact: 'Cancer treatment' },
    { technology: 'mRNA Vaccines', breakthrough: 'Rapid vaccine development', year: '2020', impact: 'Pandemic response' },
    { technology: 'Organoids', breakthrough: '3D tissue models', year: '2013', impact: 'Drug testing' }
  ]

  const labEquipment = [
    { name: 'PCR Thermocycler', purpose: 'DNA amplification', cost: '$5K-15K' },
    { name: 'Flow Cytometer', purpose: 'Cell analysis', cost: '$50K-500K' },
    { name: 'DNA Sequencer', purpose: 'Genome sequencing', cost: '$100K-1M' },
    { name: 'Bioreactor', purpose: 'Cell culture', cost: '$10K-100K' },
    { name: 'Mass Spectrometer', purpose: 'Protein analysis', cost: '$200K-2M' },
    { name: 'Confocal Microscope', purpose: 'Cell imaging', cost: '$150K-800K' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dna-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
            <Dna className="w-4 h-4 mr-2" />
            Biotechnology & Life Sciences Innovation
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Công nghệ
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Sinh học
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master biotechnology từ genetic engineering đến drug discovery. 
            Học CRISPR gene editing, bioinformatics, medical applications và 
            breakthrough innovations shaping the future của healthcare và life sciences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href={`/learning/biotechnology/${biotechnologyLessons[0].id}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
              { label: 'Lab Techniques', value: '100+', icon: <Flask className="w-6 h-6" /> },
              { label: 'Research Projects', value: '50+', icon: <Microscope className="w-6 h-6" /> },
              { label: 'Industry Growth', value: '+15%', icon: <TrendingUp className="w-6 h-6" /> },
              { label: 'Avg Salary', value: '$140K', icon: <Zap className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2 text-emerald-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biotechnology Fields */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Biotechnology Application Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore diverse biotechnology fields transforming medicine, agriculture, và industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {biotechFields.map((field, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${field.color} rounded-xl text-white mr-4`}>
                    {field.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{field.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {field.applications.map((app, appIndex) => (
                    <div key={appIndex} className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white">{app.name}</h4>
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                          {app.market}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{app.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Research Areas
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge biotechnology research shaping the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 mr-3">
                    {area.icon}
                  </div>
                  <h3 className="font-bold text-white">{area.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  {area.techniques.map((technique, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                      {technique}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Research Impact</span>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden mr-2">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                        style={{ width: `${area.impact}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-green-400">{area.impact}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Equipment */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Essential Laboratory Equipment
            </h2>
            <p className="text-xl text-gray-300">
              Professional biotech equipment cho research và development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {labEquipment.map((equipment, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{equipment.name}</h3>
                  <span className="text-sm text-emerald-400 font-medium">{equipment.cost}</span>
                </div>
                <p className="text-gray-300 text-sm">{equipment.purpose}</p>
              </div>
            ))}
          </div>

          {/* Breakthrough Innovations */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Breakthrough Biotechnology Innovations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {innovations.map((innovation, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-lg font-bold text-emerald-400 mb-1">{innovation.technology}</div>
                  <div className="text-sm text-gray-300 mb-2">{innovation.breakthrough}</div>
                  <div className="text-xs text-gray-400 mb-1">Since {innovation.year}</div>
                  <div className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                    {innovation.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Biotechnology Career Paths
            </h2>
            <p className="text-xl text-gray-300">
              High-growth careers trong biotechnology và life sciences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((career, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{career.role}</h3>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {career.growth}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-gray-300">Salary: </span>
                    <span className="text-green-400 font-semibold ml-1">{career.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-gray-300">Industries: </span>
                    <span className="text-white ml-1">{career.companies}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section id="curriculum" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-300">
              Hands-on biotechnology education từ basics đến advanced applications
            </p>
          </div>

          <div className="space-y-6">
            {biotechnologyLessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`/learning/biotechnology/${lesson.id}`}
                className="block bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {lesson.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-400 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {lesson.duration}
                          </span>
                          <span className="text-sm text-gray-400">{lesson.difficulty}</span>
                          <span className="text-sm bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                            {lesson.biotechField}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {lesson.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {lesson.labTechniques.slice(0, 3).map((technique, techIndex) => (
                        <span key={techIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded border border-white/20">
                          {technique}
                        </span>
                      ))}
                      {lesson.labTechniques.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{lesson.labTechniques.length - 3} more techniques
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors ml-4 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Revolutionize Life Sciences?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the biotechnology revolution và help solve humanity&apos;s greatest challenges 
              through cutting-edge science và innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/learning/biotechnology/${biotechnologyLessons[0].id}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Dna className="w-5 h-5 mr-2" />
                Start Biotechnology Journey
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
