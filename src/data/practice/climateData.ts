export interface ClimatePolicy {
  id: string;
  name: string;
  impact: {
    co2: number;
    temp: number;
  };
  cost: number;
}

export const climatePolicyOptions: ClimatePolicy[] = [
  {
    id: 'renewable',
    name: 'Năng lượng tái tạo',
    impact: { co2: -5, temp: -0.1 },
    cost: 20,
  },
  {
    id: 'forest',
    name: 'Trồng rừng',
    impact: { co2: -3, temp: -0.05 },
    cost: 15,
  },
  {
    id: 'electric',
    name: 'Xe điện',
    impact: { co2: -4, temp: -0.08 },
    cost: 25,
  },
  {
    id: 'industry',
    name: 'Công nghệ sạch',
    impact: { co2: -6, temp: -0.12 },
    cost: 30,
  },
];
