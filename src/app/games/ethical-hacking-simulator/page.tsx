import { Metadata } from 'next';
import { createTitle, createDescription } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle('Ethical Hacking Simulator - Mô Phỏng Ethical Hacking'),
  description: createDescription('Học ethical hacking và penetration testing trong môi trường an toàn. Vulnerability assessment, security testing và cybersecurity skills.'),
  keywords: ['ethical hacking', 'penetration testing', 'cybersecurity', 'vulnerability assessment', 'security testing'],
  openGraph: {
    title: 'Ethical Hacking Simulator | K2AiHub',
    description: 'Mô phỏng ethical hacking và penetration testing an toàn',
    type: 'website',
  },
};

export default function EthicalHackingSimulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🛡️ Ethical Hacking Simulator
          </h1>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            Trở thành ethical hacker chuyên nghiệp - Học penetration testing, vulnerability assessment và cybersecurity defense trong môi trường an toàn
          </p>
        </div>

        {/* Game Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">🎯 Ethical Hacking Skills</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Reconnaissance và information gathering</li>
                <li>• Vulnerability scanning và assessment</li>
                <li>• Penetration testing methodologies</li>
                <li>• Social engineering defense</li>
                <li>• Incident response và forensics</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">🔒 Security Domains</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• Network security và firewall bypass</li>
                <li>• Web application security testing</li>
                <li>• Wireless network penetration</li>
                <li>• Mobile app security assessment</li>
                <li>• Cloud infrastructure security</li>
              </ul>
            </div>
          </div>

          {/* Hacking Phases */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🔍 Penetration Testing Phases</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🕵️</div>
                <h4 className="font-bold mb-2">Reconnaissance</h4>
                <p className="text-sm text-gray-300 mb-3">Information gathering và target analysis</p>
                <div className="text-xs text-blue-300">
                  <div>• OSINT techniques</div>
                  <div>• DNS enumeration</div>
                  <div>• Port scanning</div>
                  <div>• Service fingerprinting</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-blue-500/30 rounded text-xs">Passive/Active</span>
                </div>
              </div>
              
              <div className="bg-orange-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">Scanning & Enumeration</h4>
                <p className="text-sm text-gray-300 mb-3">Vulnerability identification</p>
                <div className="text-xs text-orange-300">
                  <div>• Nmap port scanning</div>
                  <div>• Vulnerability scanners</div>
                  <div>• Service enumeration</div>
                  <div>• Version detection</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-orange-500/30 rounded text-xs">Automated tools</span>
                </div>
              </div>
              
              <div className="bg-red-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💥</div>
                <h4 className="font-bold mb-2">Exploitation</h4>
                <p className="text-sm text-gray-300 mb-3">Gaining unauthorized access</p>
                <div className="text-xs text-red-300">
                  <div>• Exploit frameworks</div>
                  <div>• Buffer overflow attacks</div>
                  <div>• SQL injection</div>
                  <div>• Privilege escalation</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-red-500/30 rounded text-xs">High impact</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🏃</div>
                <h4 className="font-bold mb-2">Post-Exploitation</h4>
                <p className="text-sm text-gray-300 mb-3">Maintaining access và data collection</p>
                <div className="text-xs text-purple-300">
                  <div>• Backdoor installation</div>
                  <div>• Data exfiltration</div>
                  <div>• Lateral movement</div>
                  <div>• Persistence mechanisms</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-purple-500/30 rounded text-xs">Advanced</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="font-bold mb-2">Reporting</h4>
                <p className="text-sm text-gray-300 mb-3">Documentation và remediation</p>
                <div className="text-xs text-green-300">
                  <div>• Executive summaries</div>
                  <div>• Technical details</div>
                  <div>• Risk assessment</div>
                  <div>• Remediation plans</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-green-500/30 rounded text-xs">Professional</span>
                </div>
              </div>
              
              <div className="bg-teal-600/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h4 className="font-bold mb-2">Remediation Testing</h4>
                <p className="text-sm text-gray-300 mb-3">Verifying fixes và improvements</p>
                <div className="text-xs text-teal-300">
                  <div>• Patch verification</div>
                  <div>• Configuration review</div>
                  <div>• Re-testing vulnerabilities</div>
                  <div>• Security validation</div>
                </div>
                <div className="mt-3">
                  <span className="px-2 py-1 bg-teal-500/30 rounded text-xs">Verification</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hacking Scenarios */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🎮 Hacking Scenarios</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🌐 Corporate Network Penetration</h4>
                <p className="text-gray-300 mb-4">Comprehensive corporate environment testing</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• External perimeter testing</div>
                  <div>• Internal network segmentation</div>
                  <div>• Active Directory exploitation</div>
                  <div>• Critical system access</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-red-500/30 rounded-full text-xs">Difficulty: Expert</span>
                </div>
              </div>
              
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📱 Web Application Security</h4>
                <p className="text-gray-300 mb-4">OWASP Top 10 vulnerability testing</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• SQL injection attacks</div>
                  <div>• Cross-site scripting (XSS)</div>
                  <div>• Authentication bypass</div>
                  <div>• Business logic flaws</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">OWASP focused</span>
                </div>
              </div>
              
              <div className="bg-purple-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">📶 Wireless Network Assessment</h4>
                <p className="text-gray-300 mb-4">WiFi security và wireless protocol testing</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• WPA/WPA2/WPA3 cracking</div>
                  <div>• Evil twin access points</div>
                  <div>• Bluetooth exploitation</div>
                  <div>• IoT device vulnerabilities</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Wireless expertise</span>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">🧠 Social Engineering Campaign</h4>
                <p className="text-gray-300 mb-4">Human psychology và security awareness</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Phishing email campaigns</div>
                  <div>• Pretexting phone calls</div>
                  <div>• Physical security bypass</div>
                  <div>• USB drop attacks</div>
                </div>
                <div className="mt-3">
                  <span className="px-3 py-1 bg-green-500/30 rounded-full text-xs">Psychology based</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hacking Tools Arsenal */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🛠️ Hacking Tools Arsenal</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gray-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🐧</div>
                <h5 className="font-bold text-sm mb-1">Kali Linux</h5>
                <p className="text-xs text-gray-400">Penetration testing OS</p>
                <div className="mt-2 text-xs text-gray-300">600+ tools</div>
              </div>
              
              <div className="bg-red-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🚀</div>
                <h5 className="font-bold text-sm mb-1">Metasploit</h5>
                <p className="text-xs text-gray-400">Exploit framework</p>
                <div className="mt-2 text-xs text-red-300">2000+ exploits</div>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🗺️</div>
                <h5 className="font-bold text-sm mb-1">Nmap</h5>
                <p className="text-xs text-gray-400">Network discovery</p>
                <div className="mt-2 text-xs text-blue-300">Port scanning</div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🕷️</div>
                <h5 className="font-bold text-sm mb-1">Burp Suite</h5>
                <p className="text-xs text-gray-400">Web app testing</p>
                <div className="mt-2 text-xs text-purple-300">Proxy + Scanner</div>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h5 className="font-bold text-sm mb-1">Wireshark</h5>
                <p className="text-xs text-gray-400">Network protocol analyzer</p>
                <div className="mt-2 text-xs text-orange-300">Packet analysis</div>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔓</div>
                <h5 className="font-bold text-sm mb-1">John the Ripper</h5>
                <p className="text-xs text-gray-400">Password cracking</p>
                <div className="mt-2 text-xs text-green-300">Hash cracking</div>
              </div>
              
              <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎣</div>
                <h5 className="font-bold text-sm mb-1">Social Engineer Toolkit</h5>
                <p className="text-xs text-gray-400">Social engineering</p>
                <div className="mt-2 text-xs text-yellow-300">Human hacking</div>
              </div>
              
              <div className="bg-teal-500/20 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔍</div>
                <h5 className="font-bold text-sm mb-1">OWASP ZAP</h5>
                <p className="text-xs text-gray-400">Web vulnerability scanner</p>
                <div className="mt-2 text-xs text-teal-300">Free & Open</div>
              </div>
            </div>
          </div>

          {/* Certification Paths */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🏆 Certification Paths</h3>
            <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-bold mb-3 text-red-400">🥇 Entry Level</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• CompTIA Security+</li>
                    <li>• CompTIA PenTest+</li>
                    <li>• CEH (Certified Ethical Hacker)</li>
                    <li>• GCIH (GIAC Certified Incident Handler)</li>
                    <li>• SSCP (Systems Security Certified Practitioner)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-orange-400">🥈 Intermediate</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• CISSP (Certified Information Systems Security Professional)</li>
                    <li>• OSCP (Offensive Security Certified Professional)</li>
                    <li>• GCFA (GIAC Certified Forensic Analyst)</li>
                    <li>• CISM (Certified Information Security Manager)</li>
                    <li>• CISA (Certified Information Systems Auditor)</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-bold mb-3 text-yellow-400">🥉 Advanced/Expert</h5>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• OSEE (Offensive Security Exploitation Expert)</li>
                    <li>• GPEN (GIAC Penetration Tester)</li>
                    <li>• CISSP (Certified Information Systems Security Professional)</li>
                    <li>• CISM (Certified Information Security Manager)</li>
                    <li>• Custom red team certifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Environment */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">🧪 Virtual Lab Environment</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-blue-400">🖥️ Target Systems</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• Vulnerable web applications (DVWA, bWAPP)</div>
                  <div>• Metasploitable Linux systems</div>
                  <div>• Windows domain environments</div>
                  <div>• Mobile testing labs (Android/iOS)</div>
                  <div>• IoT device simulations</div>
                </div>
              </div>
              
              <div className="bg-green-600/20 p-6 rounded-lg">
                <h5 className="font-bold mb-3 text-green-400">🛡️ Defense Simulation</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• SIEM systems (Splunk, ELK Stack)</div>
                  <div>• Firewall configurations</div>
                  <div>• Intrusion detection systems</div>
                  <div>• Endpoint protection platforms</div>
                  <div>• Network monitoring tools</div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📊 Hacker Performance Metrics</h3>
            <div className="bg-gradient-to-r from-red-600/10 to-gray-600/10 p-6 rounded-lg">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400">247</div>
                  <div className="text-sm text-gray-300">Vulnerabilities found</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">98%</div>
                  <div className="text-sm text-gray-300">Successful penetrations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">15</div>
                  <div className="text-sm text-gray-300">Zero-day discoveries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">45</div>
                  <div className="text-sm text-gray-300">Security reports delivered</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-red-600/20 p-8 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">🚀 Sắp Ra Mắt</h3>
            <p className="text-gray-200 mb-6">
              Advanced penetration testing platform với live target systems, real vulnerability databases, và professional reporting tools.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-red-300">📅 Dự kiến: Q3 2025</div>
              <div className="text-sm text-red-300">🎯 Độ tuổi: 18+ (Legal and ethical requirements)</div>
              <div className="text-sm text-red-300">⏱️ Assessments: 4-40 hours each</div>
              <div className="text-sm text-red-300">🏆 Certification: CEH + OSCP preparation</div>
              <div className="text-sm text-red-300">🔒 Legal framework: Authorized testing only</div>
              <div className="text-sm text-red-300">🤝 Industry partnerships: Real-world scenarios</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}