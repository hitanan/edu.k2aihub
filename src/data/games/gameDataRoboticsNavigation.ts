// Robotics Navigation Game Data - 2D Grid-based Robot Navigation

export interface RoboticsNavigationGameData {
  mazes: Array<{
    name: string;
    grid: number[][];
    start: { x: number; y: number };
    end: { x: number; y: number };
    commands: string[];
    solution: string[];
  }>;
}

export const gameDataRoboticsNavigation: RoboticsNavigationGameData = {
  mazes: [
    {
      name: 'Basic Navigation',
      grid: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      start: { x: 0, y: 0 },
      end: { x: 5, y: 5 },
      commands: ['right', 'right', 'down', 'down', 'right', 'down', 'down', 'right', 'right', 'down'],
      solution: ['right', 'down', 'right', 'down', 'right', 'down', 'right', 'down', 'right', 'down']
    },
    {
      name: 'Intermediate Challenge',
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      start: { x: 0, y: 0 },
      end: { x: 7, y: 7 },
      commands: ['right', 'down', 'right', 'right', 'down', 'right', 'down', 'right', 'down', 'down'],
      solution: ['right', 'down', 'down', 'right', 'right', 'down', 'right', 'down', 'right', 'down', 'down']
    },
    {
      name: 'Advanced Pathfinding',
      grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      start: { x: 0, y: 0 },
      end: { x: 9, y: 9 },
      commands: ['right', 'down', 'right', 'down', 'right', 'down', 'right', 'down', 'right', 'down'],
      solution: ['down', 'down', 'right', 'right', 'down', 'right', 'down', 'right', 'right', 'down', 'right', 'down', 'right', 'right', 'down']
    },
    {
      name: 'Expert Challenge',
      grid: [
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
      ],
      start: { x: 1, y: 1 },
      end: { x: 8, y: 8 },
      commands: ['right', 'right', 'down', 'down', 'right', 'down', 'right', 'down', 'right'],
      solution: ['right', 'down', 'down', 'down', 'right', 'right', 'down', 'right', 'down', 'right', 'down', 'right']
    },
    {
      name: 'Master Level',
      grid: [
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
      ],
      start: { x: 0, y: 5 },
      end: { x: 9, y: 4 },
      commands: ['down', 'down', 'right', 'right', 'down', 'right', 'down', 'right', 'up'],
      solution: ['down', 'down', 'down', 'down', 'right', 'right', 'right', 'right', 'up', 'right', 'right', 'right', 'right', 'up']
    }
  ]
};
