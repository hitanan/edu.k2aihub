/* eslint-disable @typescript-eslint/no-explicit-any */
// Scratch Animation Studio Game Data
export interface ScratchAnimationStudioGameData {
  projects: Array<{
    name: string;
    difficulty: string;
    estimatedTime: string;
    sprites: Array<{
      id: string;
      name: string;
      image: string;
      costumes: string[];
      position: { x: number; y: number };
      properties: {
        size: number;
        direction: number;
        visible: boolean;
        draggable: boolean;
      };
    }>;
    availableBlocks: Array<{
      category: string;
      blocks: Array<{
        id: string;
        name: string;
        code: string;
        inputs?: Array<{
          type: 'text' | 'number' | 'dropdown' | 'boolean_input';
          placeholder?: string;
          options?: string[];
        }>;
        shape: 'hat' | 'stack' | 'boolean' | 'reporter';
        color: string;
      }>;
    }>;
    targetScript: Array<{
      spriteId: string;
      blocks: Array<{
        blockId: string;
        inputs?: any[];
        children?: any[];
      }>;
    }>;
    challenge: string;
    steps: string[];
    tips: string[];
    expectedOutput: string;
    validationRules: {
      requiredBlocks: string[];
      minimumBlocks: number;
      mustUseSprites: string[];
    };
  }>;
  blockLibrary: {
    motion: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    looks: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    control: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    sensing: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    operators: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
    variables: Array<{ id: string; name: string; code: string; shape: string; color: string }>;
  };
  dragDropConfig: {
    snapDistance: number;
    blockSpacing: number;
    canvasSize: { width: number; height: number };
    spriteLibrary: string[];
  };
}

export const scratchAnimationStudioGameData: ScratchAnimationStudioGameData = {
  projects: [
    {
      name: 'Bouncing Ball Animation',
      difficulty: 'Cơ bản',
      estimatedTime: '15 phút',
      sprites: [
        {
          id: 'ball1',
          name: 'Ball',
          image: '/games/sprites/ball.svg',
          costumes: ['ball-red', 'ball-blue', 'ball-green'],
          position: { x: 0, y: 0 },
          properties: {
            size: 50,
            direction: 90,
            visible: true,
            draggable: true,
          },
        },
      ],
      availableBlocks: [
        {
          category: 'Motion',
          blocks: [
            {
              id: 'move_steps',
              name: 'di chuyển (10) bước',
              code: 'move({steps})',
              inputs: [{ type: 'number', placeholder: '10' }],
              shape: 'stack',
              color: '#4C97FF',
            },
            {
              id: 'if_on_edge_bounce',
              name: 'nếu chạm rìa, nảy lại',
              code: 'ifOnEdgeBounce()',
              shape: 'stack',
              color: '#4C97FF',
            },
          ],
        },
        {
          category: 'Control',
          blocks: [
            {
              id: 'forever',
              name: 'lặp mãi mãi',
              code: 'forever(() => {\n{content}\n})',
              shape: 'hat',
              color: '#FFAB19',
            },
            {
              id: 'wait',
              name: 'đợi (1) giây',
              code: 'wait({seconds})',
              inputs: [{ type: 'number', placeholder: '1' }],
              shape: 'stack',
              color: '#FFAB19',
            },
          ],
        },
      ],
      targetScript: [
        {
          spriteId: 'ball1',
          blocks: [
            {
              blockId: 'forever',
              children: [{ blockId: 'move_steps', inputs: [10] }, { blockId: 'if_on_edge_bounce' }],
            },
          ],
        },
      ],
      challenge: 'Tạo hoạt ảnh bóng nảy liên tục trên màn hình',
      steps: [
        'Kéo khối "lặp mãi mãi" từ danh mục Control',
        'Thêm khối "di chuyển 10 bước" vào trong vòng lặp',
        'Thêm khối "nếu chạm rìa, nảy lại" sau khối di chuyển',
        'Nhấn nút chạy để xem hoạt ảnh',
      ],
      tips: [
        'Vòng lặp "mãi mãi" sẽ lặp lại code bên trong không giới hạn',
        'Khối "nếu chạm rìa, nảy lại" giúp bóng đổi hướng khi chạm biên',
        'Thử thay đổi số bước để bóng di chuyển nhanh hoặc chậm hơn',
      ],
      expectedOutput: 'Bóng di chuyển qua lại trên màn hình và nảy lại khi chạm rìa',
      validationRules: {
        requiredBlocks: ['forever', 'move_steps', 'if_on_edge_bounce'],
        minimumBlocks: 3,
        mustUseSprites: ['ball1'],
      },
    },
    {
      name: 'Dancing Cat Animation',
      difficulty: 'Trung bình',
      estimatedTime: '25 phút',
      sprites: [
        {
          id: 'cat1',
          name: 'Cat',
          image: '/games/sprites/cat.svg',
          costumes: ['cat-a', 'cat-b'],
          position: { x: 0, y: 0 },
          properties: {
            size: 75,
            direction: 90,
            visible: true,
            draggable: true,
          },
        },
      ],
      availableBlocks: [
        {
          category: 'Looks',
          blocks: [
            {
              id: 'next_costume',
              name: 'chuyển trang phục tiếp theo',
              code: 'nextCostume()',
              shape: 'stack',
              color: '#9966FF',
            },
            {
              id: 'change_size',
              name: 'thay đổi kích thước (10)',
              code: 'changeSizeBy({amount})',
              inputs: [{ type: 'number', placeholder: '10' }],
              shape: 'stack',
              color: '#9966FF',
            },
          ],
        },
        {
          category: 'Motion',
          blocks: [
            {
              id: 'turn_right',
              name: 'quay phải (15) độ',
              code: 'turnRight({degrees})',
              inputs: [{ type: 'number', placeholder: '15' }],
              shape: 'stack',
              color: '#4C97FF',
            },
          ],
        },
        {
          category: 'Control',
          blocks: [
            {
              id: 'repeat',
              name: 'lặp lại (10) lần',
              code: 'repeat({times}, () => {\n{content}\n})',
              inputs: [{ type: 'number', placeholder: '10' }],
              shape: 'stack',
              color: '#FFAB19',
            },
            {
              id: 'wait',
              name: 'đợi (0.5) giây',
              code: 'wait({seconds})',
              inputs: [{ type: 'number', placeholder: '0.5' }],
              shape: 'stack',
              color: '#FFAB19',
            },
          ],
        },
      ],
      targetScript: [
        {
          spriteId: 'cat1',
          blocks: [
            {
              blockId: 'repeat',
              inputs: [4],
              children: [
                { blockId: 'next_costume' },
                { blockId: 'turn_right', inputs: [90] },
                { blockId: 'wait', inputs: [0.5] },
              ],
            },
          ],
        },
      ],
      challenge: 'Tạo hoạt ảnh mèo nhảy múa với việc đổi trang phục và xoay',
      steps: [
        'Sử dụng khối "lặp lại 4 lần"',
        'Thêm "chuyển trang phục tiếp theo" để mèo thay đổi hình dạng',
        'Thêm "quay phải 90 độ" để mèo xoay',
        'Thêm "đợi 0.5 giây" để tạo nhịp điệu',
        'Chạy script để xem mèo nhảy múa',
      ],
      tips: [
        'Mỗi sprite có thể có nhiều trang phục (costume)',
        'Việc đổi trang phục tạo hiệu ứng hoạt ảnh',
        'Thời gian đợi quyết định tốc độ hoạt ảnh',
        'Thử thay đổi góc quay để tạo hiệu ứng khác',
      ],
      expectedOutput: 'Mèo xoay 360 độ với việc thay đổi trang phục và tạo hiệu ứng nhảy múa',
      validationRules: {
        requiredBlocks: ['repeat', 'next_costume', 'turn_right', 'wait'],
        minimumBlocks: 4,
        mustUseSprites: ['cat1'],
      },
    },
  ],
  blockLibrary: {
    motion: [
      { id: 'move_steps', name: 'di chuyển (10) bước', code: 'move({steps})', shape: 'stack', color: '#4C97FF' },
      { id: 'turn_right', name: 'quay phải (15) độ', code: 'turnRight({degrees})', shape: 'stack', color: '#4C97FF' },
      { id: 'turn_left', name: 'quay trái (15) độ', code: 'turnLeft({degrees})', shape: 'stack', color: '#4C97FF' },
      { id: 'go_to_xy', name: 'đến x:(0) y:(0)', code: 'goToXY({x}, {y})', shape: 'stack', color: '#4C97FF' },
      {
        id: 'if_on_edge_bounce',
        name: 'nếu chạm rìa, nảy lại',
        code: 'ifOnEdgeBounce()',
        shape: 'stack',
        color: '#4C97FF',
      },
    ],
    looks: [
      {
        id: 'say',
        name: 'nói (Xin chào!) trong (2) giây',
        code: 'say({message}, {seconds})',
        shape: 'stack',
        color: '#9966FF',
      },
      {
        id: 'next_costume',
        name: 'chuyển trang phục tiếp theo',
        code: 'nextCostume()',
        shape: 'stack',
        color: '#9966FF',
      },
      {
        id: 'change_size',
        name: 'thay đổi kích thước (10)',
        code: 'changeSizeBy({amount})',
        shape: 'stack',
        color: '#9966FF',
      },
      { id: 'hide', name: 'ẩn', code: 'hide()', shape: 'stack', color: '#9966FF' },
      { id: 'show', name: 'hiện', code: 'show()', shape: 'stack', color: '#9966FF' },
    ],
    control: [
      { id: 'forever', name: 'lặp mãi mãi', code: 'forever(() => {\n{content}\n})', shape: 'hat', color: '#FFAB19' },
      {
        id: 'repeat',
        name: 'lặp lại (10) lần',
        code: 'repeat({times}, () => {\n{content}\n})',
        shape: 'stack',
        color: '#FFAB19',
      },
      { id: 'wait', name: 'đợi (1) giây', code: 'wait({seconds})', shape: 'stack', color: '#FFAB19' },
      { id: 'if_then', name: 'nếu <> thì', code: 'if ({condition}) {\n{content}\n}', shape: 'stack', color: '#FFAB19' },
    ],
    sensing: [
      { id: 'touching', name: 'chạm <mouse-pointer>', code: 'touching({target})', shape: 'boolean', color: '#5CB1D6' },
      {
        id: 'key_pressed',
        name: 'phím <space> được nhấn?',
        code: 'keyPressed({key})',
        shape: 'boolean',
        color: '#5CB1D6',
      },
      { id: 'mouse_x', name: 'x của chuột', code: 'mouseX()', shape: 'reporter', color: '#5CB1D6' },
      { id: 'mouse_y', name: 'y của chuột', code: 'mouseY()', shape: 'reporter', color: '#5CB1D6' },
    ],
    operators: [
      { id: 'add', name: '() + ()', code: '({a} + {b})', shape: 'reporter', color: '#40BF4A' },
      { id: 'subtract', name: '() - ()', code: '({a} - {b})', shape: 'reporter', color: '#40BF4A' },
      { id: 'multiply', name: '() * ()', code: '({a} * {b})', shape: 'reporter', color: '#40BF4A' },
      { id: 'divide', name: '() / ()', code: '({a} / {b})', shape: 'reporter', color: '#40BF4A' },
      {
        id: 'random',
        name: 'số ngẫu nhiên (1) đến (10)',
        code: 'random({min}, {max})',
        shape: 'reporter',
        color: '#40BF4A',
      },
    ],
    variables: [
      {
        id: 'set_var',
        name: 'gán [biến] = (0)',
        code: 'setVariable({name}, {value})',
        shape: 'stack',
        color: '#FF8C1A',
      },
      {
        id: 'change_var',
        name: 'thay đổi [biến] bằng (1)',
        code: 'changeVariable({name}, {amount})',
        shape: 'stack',
        color: '#FF8C1A',
      },
      { id: 'get_var', name: '(biến)', code: 'getVariable({name})', shape: 'reporter', color: '#FF8C1A' },
    ],
  },
  dragDropConfig: {
    snapDistance: 20,
    blockSpacing: 5,
    canvasSize: { width: 800, height: 600 },
    spriteLibrary: [
      '/games/sprites/cat.svg',
      '/games/sprites/ball.svg',
      '/games/sprites/fish.svg',
      '/games/sprites/butterfly.svg',
      '/games/sprites/robot.svg',
    ],
  },
};
