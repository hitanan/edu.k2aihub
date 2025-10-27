export interface RoboticsNavigationGameData {
  levels: Array<{
    id: number;
    name: string;
    difficulty: string;
    gridSize: { width: number; height: number };
    robot: { 
      x: number; 
      y: number; 
      direction: 'north' | 'south' | 'east' | 'west';
      battery: number;
      sensors: string[];
    };
    goal: { x: number; y: number };
    obstacles: Array<{ x: number; y: number; type: 'wall' | 'pit' | 'barrier' }>;
    movingObstacles?: Array<{
      id: string;
      x: number;
      y: number;
      pattern: Array<{ x: number; y: number }>;
      speed: number;
    }>;
    collectibles?: Array<{
      x: number;
      y: number;
      type: 'coin' | 'power' | 'key';
      value: number;
    }>;
    timeLimit?: number;
    maxMoves?: number;
    instructions: string[];
    hints: string[];
    algorithmFocus: string[];
  }>;
  programmingConcepts: {
    basicMovement: string[];
    conditionals: string[];
    loops: string[];
    functions: string[];
    sensors: string[];
    pathfinding: string[];
  };
  robotConfig: {
    speed: number;
    batteryCapacity: number;
    sensorRange: number;
    movementCost: number;
    rotationCost: number;
  };
}

export const ROBOTICS_NAVIGATION_DATA: RoboticsNavigationGameData = {
  levels: [
    {
      id: 1,
      name: "Khởi Đầu Đơn Giản",
      difficulty: "Cơ bản",
      gridSize: { width: 5, height: 5 },
      robot: {
        x: 0,
        y: 0,
        direction: 'east',
        battery: 100,
        sensors: ['proximity']
      },
      goal: { x: 4, y: 4 },
      obstacles: [
        { x: 2, y: 2, type: 'wall' }
      ],
      timeLimit: 60,
      maxMoves: 10,
      instructions: [
        "Di chuyển robot từ góc trái trên đến góc phải dưới",
        "Tránh chướng ngại vật ở giữa",
        "Sử dụng các lệnh cơ bản: forward(), turnLeft(), turnRight()"
      ],
      hints: [
        "Robot bắt đầu hướng về phía đông (→)",
        "Cần 8 bước di chuyển để đến đích",
        "Có thể đi quanh chướng ngại vật"
      ],
      algorithmFocus: ["Basic Movement", "Sequential Programming"]
    },
    {
      id: 2,
      name: "Mê Cung Cơ Bản",
      difficulty: "Trung bình",
      gridSize: { width: 7, height: 7 },
      robot: {
        x: 0,
        y: 3,
        direction: 'east',
        battery: 100,
        sensors: ['proximity', 'wall-detector']
      },
      goal: { x: 6, y: 3 },
      obstacles: [
        { x: 1, y: 1, type: 'wall' },
        { x: 1, y: 2, type: 'wall' },
        { x: 1, y: 4, type: 'wall' },
        { x: 1, y: 5, type: 'wall' },
        { x: 3, y: 1, type: 'wall' },
        { x: 3, y: 2, type: 'wall' },
        { x: 3, y: 4, type: 'wall' },
        { x: 3, y: 5, type: 'wall' },
        { x: 5, y: 1, type: 'wall' },
        { x: 5, y: 2, type: 'wall' },
        { x: 5, y: 4, type: 'wall' },
        { x: 5, y: 5, type: 'wall' }
      ],
      collectibles: [
        { x: 2, y: 3, type: 'coin', value: 10 },
        { x: 4, y: 3, type: 'coin', value: 10 }
      ],
      timeLimit: 120,
      maxMoves: 20,
      instructions: [
        "Điều hướng qua mê cung để đến đích",
        "Thu thập các đồng xu trên đường đi",
        "Sử dụng cảm biến để phát hiện tường"
      ],
      hints: [
        "Có một lối đi thẳng qua giữa mê cung",
        "Cảm biến tường có thể giúp tránh va chạm",
        "Thu thập đồng xu để tăng điểm"
      ],
      algorithmFocus: ["Wall Following", "Sensor Usage", "Path Planning"]
    },
    {
      id: 3,
      name: "Thử Thách Nâng Cao",
      difficulty: "Nâng cao",
      gridSize: { width: 10, height: 10 },
      robot: {
        x: 0,
        y: 0,
        direction: 'north',
        battery: 150,
        sensors: ['proximity', 'wall-detector', 'goal-detector']
      },
      goal: { x: 9, y: 9 },
      obstacles: [
        { x: 2, y: 1, type: 'wall' },
        { x: 2, y: 2, type: 'wall' },
        { x: 2, y: 3, type: 'wall' },
        { x: 4, y: 3, type: 'pit' },
        { x: 5, y: 3, type: 'pit' },
        { x: 6, y: 3, type: 'pit' },
        { x: 7, y: 1, type: 'wall' },
        { x: 7, y: 2, type: 'wall' },
        { x: 7, y: 3, type: 'wall' },
        { x: 3, y: 5, type: 'barrier' },
        { x: 4, y: 5, type: 'barrier' },
        { x: 5, y: 5, type: 'barrier' },
        { x: 1, y: 7, type: 'wall' },
        { x: 2, y: 7, type: 'wall' },
        { x: 6, y: 7, type: 'wall' },
        { x: 7, y: 7, type: 'wall' },
        { x: 8, y: 7, type: 'wall' }
      ],
      movingObstacles: [
        {
          id: "patrol1",
          x: 3,
          y: 6,
          pattern: [
            { x: 3, y: 6 },
            { x: 4, y: 6 },
            { x: 5, y: 6 },
            { x: 4, y: 6 }
          ],
          speed: 2
        }
      ],
      collectibles: [
        { x: 1, y: 4, type: 'power', value: 25 },
        { x: 8, y: 2, type: 'key', value: 50 },
        { x: 5, y: 8, type: 'coin', value: 15 }
      ],
      timeLimit: 200,
      maxMoves: 35,
      instructions: [
        "Tìm đường đến đích qua mê cung phức tạp",
        "Tránh chướng ngại vật di động",
        "Sử dụng tất cả cảm biến có sẵn",
        "Tối ưu hóa đường đi để tiết kiệm pin"
      ],
      hints: [
        "Quan sát pattern di chuyển của chướng ngại vật",
        "Cảm biến goal có thể chỉ hướng đến đích",
        "Power-up có thể tăng thêm pin",
        "Có nhiều đường đi khác nhau"
      ],
      algorithmFocus: ["A* Pathfinding", "Dynamic Obstacles", "Optimization", "Advanced Sensors"]
    }
  ],
  programmingConcepts: {
    basicMovement: [
      "forward() - Di chuyển robot tiến lên",
      "turnLeft() - Quay robot sang trái 90°",
      "turnRight() - Quay robot sang phải 90°",
      "backward() - Di chuyển robot lùi lại"
    ],
    conditionals: [
      "if (wallAhead()) - Kiểm tra có tường phía trước",
      "if (goalReached()) - Kiểm tra đã đến đích",
      "if (batteryLow()) - Kiểm tra pin yếu",
      "if (obstacleDetected()) - Phát hiện chướng ngại vật"
    ],
    loops: [
      "while (!goalReached()) - Lặp đến khi đến đích",
      "for (int i = 0; i < 3; i++) - Lặp số lần xác định",
      "do...while - Thực hiện ít nhất một lần",
      "repeat(n) - Lặp lại n lần"
    ],
    functions: [
      "function turnAround() - Quay 180°",
      "function followWall() - Đi theo tường",
      "function findPath() - Tìm đường đi",
      "function avoidObstacle() - Tránh chướng ngại vật"
    ],
    sensors: [
      "proximityCheck() - Kiểm tra khoảng cách",
      "wallDetector() - Phát hiện tường",
      "goalDetector() - Hướng đến đích",
      "batteryLevel() - Mức pin hiện tại"
    ],
    pathfinding: [
      "Breadth-First Search (BFS)",
      "Depth-First Search (DFS)",
      "A* Algorithm",
      "Dijkstra's Algorithm"
    ]
  },
  robotConfig: {
    speed: 1.0,
    batteryCapacity: 200,
    sensorRange: 2,
    movementCost: 1,
    rotationCost: 0.5
  }
};
