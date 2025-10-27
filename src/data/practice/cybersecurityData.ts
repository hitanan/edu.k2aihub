export interface SecurityThreat {
  id: number;
  type: string;
  name: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  blocked: boolean;
}

export const initialThreats: SecurityThreat[] = [
  {
    id: 1,
    type: 'malware',
    name: 'Trojan.exe',
    severity: 'high',
    blocked: false,
  },
  {
    id: 2,
    type: 'phishing',
    name: 'Fake Email',
    severity: 'medium',
    blocked: false,
  },
  {
    id: 3,
    type: 'ddos',
    name: 'DDoS Attack',
    severity: 'critical',
    blocked: false,
  },
  {
    id: 4,
    type: 'ransomware',
    name: 'CryptoLocker',
    severity: 'critical',
    blocked: false,
  },
];
