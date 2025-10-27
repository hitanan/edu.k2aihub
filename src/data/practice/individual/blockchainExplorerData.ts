// Blockchain Explorer Game Data
export interface BlockchainExplorerGameData {
  blocks: Array<{
    index: number;
    transactions: string[];
    hash: string;
    previousHash: string;
    nonce: number;
    difficulty: number;
    timestamp: number;
    reward: number;
  }>;
  challenges: Array<{
    type: string;
    description: string;
    target: string;
    verification: string;
  }>;
}

export const blockchainExplorerGameData: BlockchainExplorerGameData = {
  blocks: [
    {
      index: 0,
      transactions: ['Genesis Block'],
      hash: '000000abc123',
      previousHash: '0',
      nonce: 12345,
      difficulty: 3,
      timestamp: 1641024000,
      reward: 50,
    },
    {
      index: 1,
      transactions: ['Alice -> Bob: 10 BTC', 'Bob -> Charlie: 5 BTC'],
      hash: '000001def456',
      previousHash: '000000abc123',
      nonce: 67890,
      difficulty: 3,
      timestamp: 1641110400,
      reward: 25,
    },
    {
      index: 2,
      transactions: ['Charlie -> David: 3 BTC', 'David -> Eve: 2 BTC', 'Eve -> Frank: 1 BTC'],
      hash: '000002ghi789',
      previousHash: '000001def456',
      nonce: 54321,
      difficulty: 3,
      timestamp: 1641196800,
      reward: 25,
    },
    {
      index: 3,
      transactions: ['Frank -> Alice: 0.5 BTC', 'Alice -> Bob: 0.3 BTC'],
      hash: '000003jkl012',
      previousHash: '000002ghi789',
      nonce: 98765,
      difficulty: 4,
      timestamp: 1641283200,
      reward: 12.5,
    },
  ],
  challenges: [
    {
      type: 'mining',
      description: 'Tìm nonce để hash bắt đầu bằng 3 số 0',
      target: '000',
      verification: 'SHA256',
    },
    {
      type: 'validation',
      description: 'Kiểm tra tính hợp lệ của blockchain',
      target: 'valid_chain',
      verification: 'previous_hash_check',
    },
    {
      type: 'transaction',
      description: 'Tạo giao dịch mới và thêm vào block',
      target: 'valid_transaction',
      verification: 'signature_check',
    },
    {
      type: 'consensus',
      description: 'Giải quyết xung đột khi có nhiều chain',
      target: 'longest_chain',
      verification: 'proof_of_work',
    },
  ],
};
