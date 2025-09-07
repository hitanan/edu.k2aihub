import { BaseLessonData } from '@/types/lesson-base';
export interface ProgrammingRoboticsLessonData extends BaseLessonData {
  programmingLanguages?: string[];
  roboticsPlatforms?: string[];
  projects?: Array<{
    name: string;
    difficulty: string;
    description: string;
    technologies: string[];
    estimatedTime: string;
  }>;
}

export const ProgrammingRoboticsLessons: ProgrammingRoboticsLessonData[] = [
  {
    id: 'programming-fundamentals',
    title: 'Programming Fundamentals cho Robotics',
    description: 'Nắm vững các ngôn ngữ lập trình cơ bản và concepts quan trọng trong robotics programming.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=rfscVS0vtbw',
    imageUrl: '/images/programming-fundamentals.jpg',
    objectives: [
      'Học Python, C++, và ROS programming cho robotics',
      'Hiểu object-oriented programming trong robotics context',
      'Nắm vững control structures và algorithms',
      'Thực hành với embedded systems programming',
    ],
    prerequisites: [
      'Basic computer skills',
      'Logical thinking và problem-solving',
      'Mathematics fundamentals',
      'Đam mê technology và robotics',
    ],
    exercises: [
      {
        title: 'Robot Control System Programming',
        description: 'Phát triển complete control system cho autonomous robot',
        difficulty: 'Trung bình',
        materials: ['Python 3.x', 'Arduino IDE', 'ROS (Robot Operating System)', 'Simulation environment'],
        procedure: [
          'Setup development environment với Python và ROS',
          'Create basic robot class với properties và methods',
          'Implement sensor data processing algorithms',
          'Develop motor control functions',
          'Program obstacle avoidance logic',
          'Add path planning algorithms',
          'Implement communication protocols',
          'Test trong simulation environment',
          'Deploy to actual robot hardware',
          'Debug và optimize performance',
        ],
        expectedResults: 'Working robot control system với autonomous navigation capabilities',
        solution:
          'Complete robot control system bao gồm: sensor integration module cho ultrasonic, camera, và IMU sensors; motor control class với PWM speed control và direction management; obstacle avoidance algorithm sử dụng sensor fusion; path planning implementation với A* algorithm; communication handler cho wireless commands; main control loop với state machine pattern; error handling và recovery mechanisms; logging system cho debugging; configuration file management; và testing framework cho validation.',
      },
    ],
    realWorldApplications: [
      'Industrial automation systems',
      'Autonomous vehicles programming',
      'Medical robotics software',
      'Service robots development',
      'Drone control systems',
    ],
    caseStudies: [
      {
        title: 'Tesla Autopilot Development',
        organization: 'Tesla Inc.',
        problem: 'Develop reliable autonomous driving system cho consumer vehicles',
        solution: 'Advanced neural networks, computer vision, và sensor fusion programming',
        impact: 'Revolutionary advancement trong autonomous vehicle technology',
        innovations: ['Real-time object detection', 'Predictive path planning', 'Over-the-air updates'],
      },
    ],
    programmingLanguages: ['Python', 'C++', 'ROS', 'Arduino C', 'MATLAB'],
    roboticsPlatforms: ['Arduino', 'Raspberry Pi', 'ROS', 'OpenCV', 'TensorFlow'],
  },
  {
    id: 'robotics-engineering',
    title: 'Robotics Engineering và Design',
    description: 'Tìm hiểu mechanical design, electronics integration, và system engineering trong robotics.',
    duration: '200 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://youtube.com/watch?v=5iV_hB08Uns',
    objectives: [
      'Hiểu mechanical engineering principles cho robots',
      'Nắm vững electronics integration và circuit design',
      'Học sensor selection và calibration',
      'Thực hành với actuators và control systems',
    ],
    prerequisites: [
      'Programming fundamentals',
      'Basic electronics knowledge',
      'Mechanical engineering concepts',
      'Mathematics: calculus, linear algebra',
    ],
    exercises: [
      {
        title: 'Autonomous Mobile Robot Design',
        description: 'Thiết kế và build complete autonomous mobile robot từ scratch',
        difficulty: 'Nâng cao',
        materials: [
          'Mechanical components',
          'Electronics (sensors, motors, controllers)',
          'CAD software',
          '3D printer',
          'Programming tools',
        ],
        procedure: [
          'Define robot specifications và mission requirements',
          'Design mechanical chassis using CAD software',
          '3D print hoặc fabricate mechanical components',
          'Select appropriate sensors: cameras, LIDAR, ultrasonic, IMU',
          'Choose motors, wheels, và drive system',
          'Design electrical system với power management',
          'Integrate microcontroller và communication modules',
          'Assemble hardware components',
          'Program basic movement và sensor functions',
          'Implement navigation algorithms',
          'Add autonomous behaviors',
          'Test performance và reliability',
          'Optimize design dựa trên test results',
          'Document complete system',
        ],
        expectedResults: 'Fully functional autonomous robot với navigation, obstacle avoidance, và task execution',
        solution:
          'Complete autonomous mobile robot design featuring: differential drive chassis với aluminum frame; sensor suite including RPLidar, stereo cameras, ultrasonic array, và 9-DOF IMU; computing platform with Raspberry Pi 4 và Arduino Mega; power system với 12V LiPo battery và voltage regulators; motor controllers với encoders cho precise movement; wireless communication module cho remote monitoring; ROS-based software architecture; SLAM implementation cho mapping; path planning với dynamic obstacle avoidance; task-specific behaviors programming; safety systems with emergency stops; modular design cho easy maintenance và upgrades.',
      },
    ],
    realWorldApplications: [
      'Manufacturing robots',
      'Search và rescue robots',
      'Agricultural automation',
      'Space exploration rovers',
      'Personal assistant robots',
    ],
    projects: [
      {
        name: 'Autonomous Delivery Robot',
        difficulty: 'Nâng cao',
        description: 'Robot có thể navigate autonomously và deliver packages',
        technologies: ['ROS', 'Computer Vision', 'GPS', 'Path Planning'],
        estimatedTime: '3-4 months',
      },
      {
        name: 'Robotic Arm Controller',
        difficulty: 'Trung bình',
        description: 'Precise control system cho industrial robotic arm',
        technologies: ['Inverse Kinematics', 'PID Control', 'Force Feedback'],
        estimatedTime: '2-3 months',
      },
    ],
  },
  {
    id: 'ai-robotics-integration',
    title: 'AI Integration trong Robotics',
    description: 'Tích hợp artificial intelligence và machine learning vào robotics systems.',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Hiểu computer vision cho robotics applications',
      'Implement machine learning trong robot behavior',
      'Học natural language processing cho human-robot interaction',
      'Phát triển adaptive và learning robots',
    ],
    prerequisites: [
      'Programming fundamentals',
      'Robotics engineering basics',
      'Machine learning concepts',
      'Computer vision fundamentals',
    ],
    exercises: [
      {
        title: 'Intelligent Service Robot',
        description: 'Phát triển service robot với AI capabilities',
        difficulty: 'Nâng cao',
        materials: [
          'Computer vision libraries',
          'Machine learning frameworks',
          'Speech recognition APIs',
          'Robot platform',
        ],
        procedure: [
          'Setup AI development environment',
          'Implement object detection và recognition',
          'Train custom ML models cho specific tasks',
          'Develop speech recognition và synthesis',
          'Create natural language understanding',
          'Implement decision-making algorithms',
          'Add learning capabilities',
          'Integrate với robot hardware',
          'Test human-robot interaction scenarios',
          'Optimize AI performance',
        ],
      },
    ],
    realWorldApplications: [
      'Smart home assistants',
      'Healthcare robots',
      'Educational robots',
      'Entertainment và social robots',
      'Research platforms',
    ],
  },
  {
    id: 'advanced-robotics-applications',
    title: 'Advanced Robotics Applications',
    description: 'Khám phá cutting-edge robotics applications và future trends.',
    duration: '140 phút',
    difficulty: 'Nâng cao',
    objectives: [
      'Tìm hiểu swarm robotics và multi-robot systems',
      'Hiểu soft robotics và bio-inspired designs',
      'Học về human-robot collaboration',
      'Khám phá future trends trong robotics',
    ],
    prerequisites: [
      'Complete understanding của previous modules',
      'Advanced programming skills',
      'System integration experience',
      'Research mindset',
    ],
    exercises: [
      {
        title: 'Swarm Robotics Simulation',
        description: 'Phát triển coordinated swarm behavior cho multiple robots',
        difficulty: 'Chuyên gia',
        procedure: [
          'Design swarm communication protocols',
          'Implement distributed algorithms',
          'Create simulation environment',
          'Program individual robot behaviors',
          'Develop swarm coordination strategies',
          'Test scalability và robustness',
          'Analyze emergent behaviors',
          'Optimize swarm performance',
        ],
      },
    ],
    realWorldApplications: [
      'Disaster response teams',
      'Environmental monitoring',
      'Space exploration missions',
      'Agricultural swarm systems',
      'Traffic management',
    ],
  },
];
