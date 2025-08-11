export interface BlockchainTransaction {
  id: number;
  from: string;
  to: string;
  amount: number;
  fee: number;
}

export interface BlockchainBlock {
  id: number;
  hash: string;
  previousHash: string;
  transactions: BlockchainTransaction[];
  nonce: number;
  timestamp: string;
}

export const blockchainBlocks: BlockchainBlock[] = [
  {
    id: 1,
    hash: '0x1a2b3c...',
    previousHash: '0x000000...',
    transactions: [
      { id: 1, from: 'Alice', to: 'Bob', amount: 10, fee: 0.1 },
      { id: 2, from: 'Charlie', to: 'David', amount: 5.5, fee: 0.05 },
      { id: 3, from: 'Eve', to: 'Frank', amount: 2.3, fee: 0.02 },
    ],
    nonce: 12345,
    timestamp: '2024-01-01 10:30:00',
  },
  {
    id: 2,
    hash: '0x4d5e6f...',
    previousHash: '0x1a2b3c...',
    transactions: [
      { id: 4, from: 'Bob', to: 'Grace', amount: 8.7, fee: 0.08 },
      { id: 5, from: 'Henry', to: 'Alice', amount: 12.0, fee: 0.12 },
    ],
    nonce: 67890,
    timestamp: '2024-01-01 10:35:00',
  },
];
