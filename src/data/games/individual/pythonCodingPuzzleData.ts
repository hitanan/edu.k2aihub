export interface PythonCodingPuzzleGameData {
  challenges: Array<{
    id: string;
    title: string;
    difficulty: string;
    description: string;
    initialCode: string;
    testCases: Array<{
      input: string | number | number[];
      expectedOutput: string | number;
      description: string;
    }>;
    solution: string;
    hints: string[];
    explanation: string;
    concepts: string[];
    timeLimit: number;
    pointValue: number;
  }>;
}

export const pythonCodingPuzzleData: PythonCodingPuzzleGameData = {
  challenges: [
    {
      id: 'hello-world',
      title: 'Chào thế giới!',
      difficulty: 'Dễ',
      description: 'Viết function trả về chuỗi "Xin chào, [tên]!" với tên được truyền vào.',
      initialCode: `def chao_the_gioi(ten):
    # Viết code của bạn ở đây
    pass`,
      testCases: [
        {
          input: 'Nam',
          expectedOutput: 'Xin chào, Nam!',
          description: 'Test với tên "Nam"'
        },
        {
          input: 'Linh',
          expectedOutput: 'Xin chào, Linh!',
          description: 'Test với tên "Linh"'
        }
      ],
      solution: `def chao_the_gioi(ten):
    return f"Xin chào, {ten}!"`,
      hints: [
        'Sử dụng f-string để format chuỗi',
        'Trả về chuỗi bằng keyword "return"'
      ],
      explanation: 'Bài này giúp bạn làm quen với function và string formatting trong Python.',
      concepts: ['Function', 'String formatting', 'Return statement'],
      timeLimit: 300,
      pointValue: 10
    },
    {
      id: 'sum-list',
      title: 'Tính tổng danh sách',
      difficulty: 'Dễ',
      description: 'Viết function tính tổng tất cả số trong một danh sách.',
      initialCode: `def tinh_tong(danh_sach):
    # Viết code của bạn ở đây
    pass`,
      testCases: [
        {
          input: [1, 2, 3, 4, 5],
          expectedOutput: 15,
          description: 'Test với [1, 2, 3, 4, 5]'
        },
        {
          input: [10, -5, 3],
          expectedOutput: 8,
          description: 'Test với số âm'
        },
        {
          input: [],
          expectedOutput: 0,
          description: 'Test với danh sách rỗng'
        }
      ],
      solution: `def tinh_tong(danh_sach):
    return sum(danh_sach)`,
      hints: [
        'Python có built-in function sum()',
        'Hoặc dùng vòng lặp for để cộng từng phần tử'
      ],
      explanation: 'Bài này giúp bạn làm việc với list và vòng lặp.',
      concepts: ['List', 'Built-in functions', 'Loop'],
      timeLimit: 300,
      pointValue: 15
    },
    {
      id: 'fibonacci',
      title: 'Dãy Fibonacci',
      difficulty: 'Trung bình',
      description: 'Viết function tính số Fibonacci thứ n (F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)).',
      initialCode: `def fibonacci(n):
    # Viết code của bạn ở đây
    pass`,
      testCases: [
        {
          input: 0,
          expectedOutput: 0,
          description: 'F(0) = 0'
        },
        {
          input: 1,
          expectedOutput: 1,
          description: 'F(1) = 1'
        },
        {
          input: 6,
          expectedOutput: 8,
          description: 'F(6) = 8'
        },
        {
          input: 10,
          expectedOutput: 55,
          description: 'F(10) = 55'
        }
      ],
      solution: `def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    return b`,
      hints: [
        'Xử lý trường hợp base: n = 0 hoặc n = 1',
        'Dùng iterative approach thay vì recursive để tối ưu'
      ],
      explanation: 'Dãy Fibonacci là một dãy số quan trọng trong toán học và lập trình.',
      concepts: ['Recursion', 'Dynamic Programming', 'Base case'],
      timeLimit: 600,
      pointValue: 25
    }
  ]
};
