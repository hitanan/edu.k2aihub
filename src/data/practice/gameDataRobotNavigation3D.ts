export const gameDataRobotNavigation3D = {
  id: 'robot-navigation-3d',
  title: '🤖 Điều hướng Robot 3D',
  description: 'Lập trình robot di chuyển trong môi trường 3D với thuật toán tìm đường thông minh',
  icon: '🤖',
  difficulty: 'Nâng cao',
  estimatedTime: '25-35 phút',
  category: '3d-visualization',
  levels: [
    {
      id: 1,
      name: 'Khởi động - Đường thẳng',
      description: 'Hướng dẫn robot di chuyển từ điểm A đến điểm B theo đường thẳng',
      gridSize: { width: 8, height: 1, depth: 8 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 7, y: 0, z: 7 },
      obstacles: [
        { x: 3, y: 0, z: 2, type: 'wall' },
        { x: 4, y: 0, z: 4, type: 'wall' },
      ],
      timeLimit: 120,
      par: 14,
      educational: {
        concept: 'Đường đi ngắn nhất',
        explanation: 'Robot cần tìm đường đi ngắn nhất từ điểm xuất phát đến đích',
        algorithmStep: 'Sử dụng khoảng cách Manhattan để ước tính chi phí',
      },
    },
    {
      id: 2,
      name: 'Vượt chướng ngại vật',
      description: 'Điều hướng robot tránh các chướng ngại vật phức tạp',
      gridSize: { width: 10, height: 1, depth: 10 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 9, y: 0, z: 9 },
      obstacles: [
        { x: 2, y: 0, z: 1, type: 'wall' },
        { x: 2, y: 0, z: 2, type: 'wall' },
        { x: 2, y: 0, z: 3, type: 'wall' },
        { x: 6, y: 0, z: 5, type: 'wall' },
        { x: 7, y: 0, z: 5, type: 'wall' },
        { x: 8, y: 0, z: 5, type: 'wall' },
        { x: 4, y: 0, z: 7, type: 'pit' },
        { x: 5, y: 0, z: 7, type: 'pit' },
      ],
      timeLimit: 180,
      par: 18,
      educational: {
        concept: 'Tránh chướng ngại vật',
        explanation: 'Robot phải tìm đường đi quanh các vật cản, không thể đi thẳng',
        algorithmStep: 'Thuật toán A* đánh giá nhiều đường đi khả thi',
      },
    },
    {
      id: 3,
      name: 'Thu thập dữ liệu',
      description: 'Robot phải thu thập tất cả dữ liệu trước khi đến đích',
      gridSize: { width: 12, height: 1, depth: 12 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 11, y: 0, z: 11 },
      obstacles: [
        { x: 3, y: 0, z: 3, type: 'wall' },
        { x: 4, y: 0, z: 3, type: 'wall' },
        { x: 5, y: 0, z: 3, type: 'wall' },
        { x: 7, y: 0, z: 6, type: 'barrier' },
        { x: 8, y: 0, z: 6, type: 'barrier' },
        { x: 9, y: 0, z: 6, type: 'barrier' },
      ],
      collectibles: [
        { x: 2, y: 0, z: 5, type: 'data' },
        { x: 6, y: 0, z: 2, type: 'data' },
        { x: 9, y: 0, z: 8, type: 'data' },
      ],
      timeLimit: 240,
      par: 25,
      educational: {
        concept: 'Bài toán TSP đơn giản',
        explanation: 'Robot phải tối ưu hóa thứ tự thu thập để tổng quãng đường ngắn nhất',
        algorithmStep: 'Kết hợp A* với lập kế hoạch đa điểm đến',
      },
    },
    {
      id: 4,
      name: 'Môi trường động',
      description: 'Điều hướng robot trong môi trường có chướng ngại vật di chuyển',
      gridSize: { width: 14, height: 1, depth: 14 },
      startPosition: { x: 0, y: 0, z: 0 },
      endPosition: { x: 13, y: 0, z: 13 },
      obstacles: [
        { x: 5, y: 0, z: 5, type: 'wall' },
        { x: 6, y: 0, z: 5, type: 'wall' },
        { x: 7, y: 0, z: 5, type: 'wall' },
        { x: 9, y: 0, z: 9, type: 'wall' },
        { x: 10, y: 0, z: 9, type: 'wall' },
      ],
      movingObstacles: [
        { x: 3, y: 0, z: 7, pattern: 'horizontal', speed: 1 },
        { x: 8, y: 0, z: 3, pattern: 'vertical', speed: 1 },
        { x: 11, y: 0, z: 6, pattern: 'circular', speed: 0.5 },
      ],
      collectibles: [
        { x: 1, y: 0, z: 8, type: 'key' },
        { x: 12, y: 0, z: 2, type: 'gem' },
      ],
      timeLimit: 300,
      par: 35,
      educational: {
        concept: 'Lập kế hoạch động',
        explanation: 'Robot phải dự đoán vị trí chướng ngại vật và điều chỉnh đường đi',
        algorithmStep: 'A* động với dự đoán trạng thái tương lai',
      },
    },
    {
      id: 5,
      name: 'Thử thách cuối - Hang động ngầm',
      description: 'Khám phá hang động ngầm với địa hình phức tạp, cơ chế thang máy và bẫy nguy hiểm',
      gridSize: { width: 20, height: 4, depth: 20 },
      startPosition: { x: 1, y: 0, z: 1 },
      endPosition: { x: 18, y: 3, z: 18 },
      obstacles: [
        // Tầng 0 - Lối vào hang động
        { x: 3, y: 0, z: 2, type: 'wall' },
        { x: 4, y: 0, z: 2, type: 'wall' },
        { x: 5, y: 0, z: 2, type: 'wall' },
        { x: 6, y: 0, z: 2, type: 'wall' },
        { x: 7, y: 0, z: 2, type: 'wall' },
        { x: 2, y: 0, z: 5, type: 'pit' },
        { x: 3, y: 0, z: 5, type: 'pit' },
        { x: 4, y: 0, z: 5, type: 'pit' },
        { x: 8, y: 0, z: 6, type: 'wall' },
        { x: 9, y: 0, z: 6, type: 'wall' },
        { x: 10, y: 0, z: 6, type: 'wall' },
        { x: 11, y: 0, z: 6, type: 'wall' },
        { x: 12, y: 0, z: 8, type: 'pit' },
        { x: 13, y: 0, z: 8, type: 'pit' },
        { x: 14, y: 0, z: 8, type: 'pit' },
        { x: 15, y: 0, z: 10, type: 'wall' },
        { x: 16, y: 0, z: 10, type: 'wall' },
        { x: 17, y: 0, z: 10, type: 'wall' },

        // Tầng 1 - Hang động chính
        { x: 2, y: 1, z: 3, type: 'wall' },
        { x: 3, y: 1, z: 3, type: 'wall' },
        { x: 4, y: 1, z: 3, type: 'wall' },
        { x: 7, y: 1, z: 5, type: 'pit' },
        { x: 8, y: 1, z: 5, type: 'pit' },
        { x: 9, y: 1, z: 5, type: 'pit' },
        { x: 10, y: 1, z: 5, type: 'pit' },
        { x: 12, y: 1, z: 7, type: 'barrier' },
        { x: 13, y: 1, z: 7, type: 'barrier' },
        { x: 14, y: 1, z: 7, type: 'barrier' },
        { x: 5, y: 1, z: 12, type: 'wall' },
        { x: 6, y: 1, z: 12, type: 'wall' },
        { x: 7, y: 1, z: 12, type: 'wall' },
        { x: 8, y: 1, z: 12, type: 'wall' },
        { x: 15, y: 1, z: 13, type: 'pit' },
        { x: 16, y: 1, z: 13, type: 'pit' },
        { x: 17, y: 1, z: 13, type: 'pit' },

        // Tầng 2 - Hang động sâu
        { x: 4, y: 2, z: 4, type: 'wall' },
        { x: 5, y: 2, z: 4, type: 'wall' },
        { x: 6, y: 2, z: 4, type: 'wall' },
        { x: 7, y: 2, z: 4, type: 'wall' },
        { x: 9, y: 2, z: 6, type: 'pit' },
        { x: 10, y: 2, z: 6, type: 'pit' },
        { x: 11, y: 2, z: 6, type: 'pit' },
        { x: 12, y: 2, z: 6, type: 'pit' },
        { x: 13, y: 2, z: 6, type: 'pit' },
        { x: 3, y: 2, z: 9, type: 'barrier' },
        { x: 4, y: 2, z: 9, type: 'barrier' },
        { x: 5, y: 2, z: 9, type: 'barrier' },
        { x: 14, y: 2, z: 11, type: 'wall' },
        { x: 15, y: 2, z: 11, type: 'wall' },
        { x: 16, y: 2, z: 11, type: 'wall' },
        { x: 6, y: 2, z: 15, type: 'pit' },
        { x: 7, y: 2, z: 15, type: 'pit' },
        { x: 8, y: 2, z: 15, type: 'pit' },

        // Tầng 3 - Đỉnh hang động (đích cuối)
        { x: 10, y: 3, z: 8, type: 'wall' },
        { x: 11, y: 3, z: 8, type: 'wall' },
        { x: 12, y: 3, z: 8, type: 'wall' },
        { x: 13, y: 3, z: 8, type: 'wall' },
        { x: 8, y: 3, z: 12, type: 'pit' },
        { x: 9, y: 3, z: 12, type: 'pit' },
        { x: 10, y: 3, z: 12, type: 'pit' },
        { x: 15, y: 3, z: 15, type: 'barrier' },
        { x: 16, y: 3, z: 15, type: 'barrier' },
        { x: 17, y: 3, z: 15, type: 'barrier' },
      ],
      collectibles: [
        // Chìa khóa và vật phẩm quan trọng
        { x: 6, y: 0, z: 9, type: 'key' }, // Chìa khóa thang máy lên tầng 1
        { x: 11, y: 1, z: 4, type: 'key' }, // Chìa khóa thang máy lên tầng 2
        { x: 8, y: 2, z: 14, type: 'key' }, // Chìa khóa thang máy lên tầng 3
        
        // Báu vật và dữ liệu
        { x: 17, y: 0, z: 3, type: 'gem' }, // Viên ngọc quý 1
        { x: 2, y: 1, z: 16, type: 'gem' }, // Viên ngọc quý 2
        { x: 16, y: 2, z: 7, type: 'gem' }, // Viên ngọc quý 3
        { x: 5, y: 3, z: 17, type: 'gem' }, // Viên ngọc quý 4
        
        // Dữ liệu khoa học
        { x: 14, y: 0, z: 15, type: 'data' }, // Dữ liệu địa chất 1
        { x: 9, y: 1, z: 18, type: 'data' }, // Dữ liệu địa chất 2
        { x: 1, y: 2, z: 12, type: 'data' }, // Dữ liệu địa chất 3
        { x: 13, y: 3, z: 5, type: 'data' }, // Dữ liệu địa chất 4
        
        // Phần thưởng cuối cung
        { x: 17, y: 3, z: 17, type: 'crystal' }, // Tinh thể năng lượng (mục tiêu cuối)
      ],
      movingObstacles: [
        // Tảng đá lăn trong hang động
        { x: 5, y: 0, z: 8, pattern: 'horizontal', speed: 0.7 },
        { x: 13, y: 1, z: 5, pattern: 'vertical', speed: 0.9 },
        { x: 7, y: 1, z: 16, pattern: 'circular', speed: 0.6 },
        
        // Thác nước nguy hiểm
        { x: 2, y: 2, z: 6, pattern: 'vertical', speed: 1.1 },
        { x: 12, y: 2, z: 13, pattern: 'horizontal', speed: 0.8 },
        
        // Khí độc di chuyển
        { x: 8, y: 3, z: 10, pattern: 'circular', speed: 0.5 },
        { x: 14, y: 3, z: 12, pattern: 'zigzag', speed: 0.4 },
      ],
      timeLimit: 600, // 10 phút cho thử thách cuối
      par: 65, // Yêu cầu kỹ năng cao
      educational: {
        concept: 'Khám phá không gian 3D phức tạp',
        explanation: 'Robot phải điều hướng qua hang động nhiều tầng với địa hình phức tạp, thu thập đầy đủ vật phẩm và tránh các bẫy nguy hiểm',
        algorithmStep: 'A* 3D nâng cao với quản lý trạng thái phức tạp, heuristic đa mục tiêu và tối ưu hóa đa ràng buộc',
      },
    },
  ],
  algorithms: [
    {
      name: 'A* (A-Star)',
      description: 'Thuật toán tìm đường tối ưu kết hợp giữa Dijkstra và Greedy Best-First',
      complexity: 'O(b^d) trong trường hợp xấu nhất',
      visualizationSteps: [
        'Khởi tạo: Thêm điểm xuất phát vào Open List',
        'Lặp: Chọn node có f(n) = g(n) + h(n) nhỏ nhất',
        'Mở rộng: Kiểm tra tất cả node láng giềng',
        'Cập nhật: Tính toán chi phí và thêm vào Open List',
        'Kết thúc: Khi tìm thấy đích hoặc Open List rỗng',
      ],
    },
    {
      name: 'Dijkstra',
      description: 'Thuật toán tìm đường ngắn nhất từ một điểm đến tất cả điểm khác',
      complexity: 'O((V + E) log V)',
      visualizationSteps: [
        'Khởi tạo: Đặt khoảng cách tất cả node = ∞, trừ node xuất phát = 0',
        'Lặp: Chọn node chưa thăm có khoảng cách nhỏ nhất',
        'Cập nhật: Cải thiện khoảng cách của các node láng giềng',
        'Kết thúc: Khi tất cả node đã được thăm',
      ],
    },
  ],
  tips: [
    '🎯 Quan sát toàn bộ map trước khi bắt đầu để lập kế hoạch tổng thể',
    '🔍 Chú ý đến chướng ngại vật di chuyển - dự đoán vị trí tương lai',
    '💎 Ưu tiên thu thập các vật phẩm gần đường đi chính',
    '⚡ Sử dụng algorithm A* để tối ưu hóa đường đi',
    '🧠 Học cách đọc visualization để hiểu thuật toán hoạt động',
    '🎮 Thử nghiệm với các thuật toán khác nhau để so sánh hiệu quả',
  ],
  learningObjectives: [
    'Hiểu và áp dụng thuật toán A* cho bài toán tìm đường',
    'Phân biệt giữa các thuật toán tìm kiếm: BFS, DFS, Dijkstra, A*',
    'Tối ưu hóa đường đi trong môi trường có chướng ngại vật',
    'Lập kế hoạch trong không gian 3 chiều',
    'Xử lý các tình huống động trong robotics',
    'Áp dụng heuristic function để tăng hiệu quả tìm kiếm',
  ],
};
