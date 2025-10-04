import { ModuleData } from '@/types';
import { BaseLessonData } from '@/types/lesson-base';

export type ProgrammingRoboticsLesson = BaseLessonData;

const lessons: ProgrammingRoboticsLesson[] = [
  {
    id: 'programming-fundamentals',
    title: 'Programming Fundamentals cho Robotics',
    description:
      'Nắm vững các ngôn ngữ lập trình cơ bản (Python, C++, ROS) và concepts quan trọng trong robotics programming.',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://youtube.com/watch?v=rfscVS0vtbw',
    imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop',
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
    faqs: [
      {
        question: 'ROS là gì và tại sao nó quan trọng trong robotics?',
        answer:
          'ROS (Robot Operating System) là một framework mã nguồn mở cung cấp các thư viện và công cụ để xây dựng phần mềm cho robot. Nó không phải là một hệ điều hành thực sự, mà là một lớp trung gian (middleware) giúp chuẩn hóa giao tiếp giữa các thành phần phần cứng và phần mềm, thúc đẩy tái sử dụng code và tăng tốc độ phát triển.',
      },
      {
        question: 'Sự khác biệt giữa lập trình cho robot và lập trình ứng dụng web là gì?',
        answer:
          'Lập trình robot tương tác trực tiếp với thế giới vật lý. Nó đòi hỏi xử lý dữ liệu từ cảm biến trong thời gian thực, điều khiển động cơ chính xác, và đối phó với sự không chắc chắn của môi trường. Lập trình web chủ yếu xử lý dữ liệu trong một môi trường ảo được kiểm soát.',
      },
      {
        question: 'Tại sao Python lại phổ biến trong robotics?',
        answer:
          'Python có cú pháp đơn giản, dễ học, và một hệ sinh thái thư viện mạnh mẽ cho tính toán khoa học, AI và machine learning (như NumPy, TensorFlow, PyTorch), vốn là những lĩnh vực quan trọng trong robotics hiện đại. Nó rất tốt cho việc tạo mẫu nhanh và các tác vụ cấp cao.',
      },
      {
        question: 'Khi nào thì nên dùng C++ thay vì Python trong robotics?',
        answer:
          'C++ được ưu tiên cho các tác vụ đòi hỏi hiệu năng cao và xử lý cấp thấp, gần với phần cứng. Ví dụ: các vòng lặp điều khiển thời gian thực, xử lý ảnh tốc độ cao, hoặc lập trình cho các vi điều khiển có tài nguyên hạn chế.',
      },
      {
        question: 'Hệ thống nhúng (embedded systems) là gì?',
        answer:
          'Là một hệ thống máy tính chuyên dụng được thiết kế để thực hiện một hoặc một vài chức năng cụ thể, thường được tích hợp vào một hệ thống cơ khí hoặc điện tử lớn hơn. Vi điều khiển trong robot là một ví dụ về hệ thống nhúng.',
      },
      {
        question: 'Làm thế nào để một robot "nhìn" được thế giới xung quanh?',
        answer:
          'Robot sử dụng các cảm biến như camera (cho thị giác máy tính), LiDAR (đo khoảng cách bằng laser), cảm biến siêu âm, và cảm biến hồng ngoại để thu thập dữ liệu về môi trường. Dữ liệu này sau đó được xử lý bằng các thuật toán để nhận dạng vật thể, xây dựng bản đồ, và định vị.',
      },
      {
        question: 'Thuật toán SLAM là gì?',
        answer:
          'SLAM (Simultaneous Localization and Mapping) là một tập hợp các thuật toán cho phép robot vừa xây dựng bản đồ của một môi trường không xác định, vừa đồng thời xác định vị trí của chính nó trong bản đồ đó. Đây là một khả năng cốt lõi của robot tự hành.',
      },
      {
        question: 'Động học robot (Robot Kinematics) nghiên cứu về cái gì?',
        answer:
          'Nó nghiên cứu về chuyển động của robot mà không xét đến lực gây ra chuyển động. Động học thuận (Forward Kinematics) tính toán vị trí của điểm cuối (end-effector) dựa trên góc của các khớp. Động học ngược (Inverse Kinematics) thì ngược lại, tính toán các góc khớp cần thiết để đưa điểm cuối đến một vị trí mong muốn.',
      },
      {
        question: 'State machine (máy trạng thái) được sử dụng trong lập trình robot như thế nào?',
        answer:
          'Máy trạng thái là một mô hình lập trình rất hữu ích để quản lý hành vi của robot. Robot có thể ở các trạng thái khác nhau (ví dụ: "đang đi tuần tra", "đang sạc", "đang tránh vật cản") và chuyển đổi giữa các trạng thái này dựa trên dữ liệu từ cảm biến hoặc các sự kiện.',
      },
      {
        question: 'Làm thế nào để bắt đầu học lập trình robot?',
        answer:
          'Một cách tuyệt vời để bắt đầu là với một bộ kit robot giáo dục như LEGO Mindstorms hoặc các nền tảng dựa trên Arduino/Raspberry Pi. Bắt đầu với Python, học các khái niệm cơ bản về điện tử, và sau đó dần dần tìm hiểu về ROS.',
      },
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
    faqs: [
      {
        question: 'CAD là gì và nó được sử dụng như thế nào trong thiết kế robot?',
        answer:
          'CAD (Computer-Aided Design) là phần mềm được sử dụng để tạo ra các mô hình 2D và 3D của các bộ phận cơ khí. Trong robotics, các kỹ sư sử dụng CAD để thiết kế khung gầm, các khớp nối, và các bộ phận khác, đảm bảo chúng vừa vặn và hoạt động chính xác trước khi chế tạo.',
      },
      {
        question: 'Sự khác biệt giữa vi điều khiển (microcontroller) và vi xử lý (microprocessor)?',
        answer:
          'Vi xử lý (như CPU trong máy tính) là bộ não tính toán, cần các thành phần bên ngoài như RAM, ROM. Vi điều khiển (như Arduino) là một hệ thống hoàn chỉnh trên một chip, đã tích hợp sẵn CPU, RAM, ROM và các cổng I/O. Vi điều khiển phù hợp cho các tác vụ điều khiển chuyên dụng.',
      },
      {
        question: 'Actuator (bộ truyền động) trong robot là gì?',
        answer:
          'Là bộ phận tạo ra chuyển động cho robot. Các loại actuator phổ biến nhất là động cơ điện (DC, servo, stepper), xi lanh khí nén hoặc thủy lực, và các vật liệu thông minh.',
      },
      {
        question: 'Tại sao cần bộ mã hóa (encoder) trên động cơ robot?',
        answer:
          'Encoder là một cảm biến cung cấp phản hồi về vị trí và tốc độ của động cơ. Dữ liệu này rất quan trọng cho việc điều khiển chính xác chuyển động của robot, ví dụ như đi thẳng một khoảng cách nhất định hoặc quay một góc chính xác.',
      },
      {
        question: 'LIDAR hoạt động như thế nào?',
        answer:
          'LIDAR (Light Detection and Ranging) hoạt động bằng cách phát ra các xung laser và đo thời gian để ánh sáng phản xạ trở lại. Bằng cách quét môi trường xung quanh, nó có thể tạo ra một "đám mây điểm" 3D chính xác, rất hữu ích cho việc lập bản đồ và phát hiện vật cản.',
      },
      {
        question: 'IMU (Inertial Measurement Unit) dùng để làm gì?',
        answer:
          'IMU là một cảm biến kết hợp gia tốc kế (đo gia tốc) và con quay hồi chuyển (đo tốc độ góc). Nó giúp robot xác định hướng và phương vị của mình, rất quan trọng cho việc giữ thăng bằng và điều hướng.',
      },
      {
        question: 'PWM (Pulse Width Modulation) là gì?',
        answer:
          'PWM là một kỹ thuật để điều khiển công suất cung cấp cho các thiết bị điện, đặc biệt là động cơ. Bằng cách thay đổi độ rộng của xung điện, ta có thể điều khiển tốc độ của động cơ DC hoặc vị trí của động cơ servo một cách hiệu quả.',
      },
      {
        question: 'Tại sao in 3D lại hữu ích cho việc chế tạo robot?',
        answer:
          'In 3D cho phép tạo mẫu nhanh (rapid prototyping). Các kỹ sư có thể nhanh chóng tạo ra các bộ phận tùy chỉnh phức tạp với chi phí thấp, thử nghiệm thiết kế và lặp lại một cách nhanh chóng mà không cần đến các quy trình sản xuất truyền thống đắt đỏ.',
      },
      {
        question: 'Sensor fusion (kết hợp cảm biến) là gì?',
        answer:
          'Là quá trình kết hợp dữ liệu từ nhiều loại cảm biến khác nhau để có được một bức tranh tổng thể chính xác và đáng tin cậy hơn về môi trường so với việc chỉ sử dụng một cảm biến duy nhất. Ví dụ: kết hợp dữ liệu từ camera và LiDAR để nhận dạng vật thể tốt hơn.',
      },
      {
        question: 'Differential drive là gì?',
        answer:
          'Là một cơ cấu truyền động phổ biến cho robot di động, sử dụng hai bánh xe được điều khiển độc lập ở hai bên của robot. Bằng cách thay đổi tốc độ tương đối của hai bánh xe, robot có thể đi thẳng, quay tại chỗ, hoặc đi theo một đường cong.',
      },
    ],
  },
  {
    id: 'ai-robotics-integration',
    videoUrl: null,
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
    faqs: [
      {
        question: 'Thị giác máy tính (Computer Vision) giúp robot như thế nào?',
        answer:
          'Thị giác máy tính cho phép robot "hiểu" được hình ảnh và video từ camera. Nó được sử dụng để nhận dạng vật thể, phát hiện khuôn mặt, đọc văn bản, theo dõi chuyển động, và xây dựng mô hình 3D của môi trường, giúp robot tương tác thông minh hơn.',
      },
      {
        question: 'Học tăng cường (Reinforcement Learning) được áp dụng trong robotics ra sao?',
        answer:
          'Học tăng cường là một phương pháp mà robot học thông qua thử và sai. Robot sẽ nhận được "phần thưởng" cho các hành động đúng và "hình phạt" cho các hành động sai, từ đó tự học được các hành vi phức tạp như đi lại, cầm nắm vật thể mà không cần lập trình tường minh.',
      },
      {
        question: 'Xử lý ngôn ngữ tự nhiên (NLP) dùng để làm gì trong robot?',
        answer:
          'NLP cho phép robot hiểu và phản hồi lại ngôn ngữ của con người. Điều này tạo ra khả năng tương tác tự nhiên hơn, cho phép người dùng ra lệnh cho robot bằng giọng nói hoặc nhận được các câu trả lời hữu ích từ robot.',
      },
      {
        question: 'Sự khác biệt giữa AI truyền thống và Machine Learning là gì?',
        answer:
          'AI truyền thống (hay AI biểu tượng) dựa trên các quy tắc được lập trình rõ ràng (if-then). Machine Learning thì khác, hệ thống sẽ tự học các quy tắc từ một lượng lớn dữ liệu mà không cần lập trình tường minh.',
      },
      {
        question: 'Một mô hình machine learning đã được huấn luyện (trained model) là gì?',
        answer:
          'Là kết quả của quá trình huấn luyện, trong đó mô hình đã học được các mẫu (patterns) từ dữ liệu. Mô hình này sau đó có thể được sử dụng để đưa ra dự đoán hoặc quyết định trên các dữ liệu mới mà nó chưa từng thấy. Ví dụ: một mô hình được huấn luyện để nhận dạng chó và mèo.',
      },
      {
        question: 'Làm thế nào để một robot có thể học các nhiệm vụ mới?',
        answer:
          'Có nhiều cách. Một là thông qua học tăng cường. Một cách khác là "học bằng cách trình diễn" (learning from demonstration), nơi con người thực hiện một nhiệm vụ và robot quan sát, sau đó cố gắng bắt chước. Một cách nữa là "học chuyển giao" (transfer learning), nơi robot áp dụng kiến thức đã học từ một nhiệm vụ này sang một nhiệm vụ mới tương tự.',
      },
      {
        question: 'Điện toán biên (Edge Computing) có vai trò gì trong AI cho robot?',
        answer:
          'Điện toán biên là việc xử lý dữ liệu AI ngay trên robot thay vì gửi lên đám mây. Điều này rất quan trọng để giảm độ trễ, cho phép robot phản ứng nhanh với môi trường, đồng thời tăng cường bảo mật và có thể hoạt động mà không cần kết nối internet liên tục.',
      },
      {
        question: 'Mạng nơ-ron tích chập (Convolutional Neural Network - CNN) là gì?',
        answer:
          'CNN là một loại kiến trúc mạng nơ-ron nhân tạo đặc biệt hiệu quả cho các nhiệm vụ xử lý ảnh. Chúng là công nghệ cốt lõi đằng sau hầu hết các ứng dụng thị giác máy tính hiện đại, từ nhận dạng khuôn mặt đến xe tự lái.',
      },
      {
        question: 'Làm thế nào để robot đưa ra quyết định trong các tình huống không chắc chắn?',
        answer:
          'Robot thường sử dụng các mô hình xác suất để biểu diễn sự không chắc chắn. Các thuật toán như Bộ lọc Kalman hoặc Bộ lọc hạt (Particle Filter) giúp robot ước tính trạng thái thực của nó (ví dụ: vị trí) từ các dữ liệu cảm biến nhiễu và không hoàn hảo.',
      },
      {
        question: 'Thách thức lớn nhất khi tích hợp AI vào robot là gì?',
        answer:
          'Một trong những thách thức lớn nhất là "sim-to-real gap" - khoảng cách giữa thực tế và mô phỏng. Các mô hình AI hoạt động hoàn hảo trong môi trường mô phỏng có thể thất bại trong thế giới thực do sự phức tạp và không thể đoán trước của nó. Việc thu hẹp khoảng cách này là một lĩnh vực nghiên cứu tích cực.',
      },
    ],
  },
  {
    id: 'advanced-robotics-applications',
    videoUrl: 'https://www.youtube.com/watch?v=kH1x2zkozLs',
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
    faqs: [
      {
        question: 'Robot bầy đàn (Swarm Robotics) là gì?',
        answer:
          'Là một lĩnh vực nghiên cứu về cách điều phối một số lượng lớn các robot tương đối đơn giản để chúng cùng nhau thực hiện một nhiệm vụ phức tạp, tương tự như cách một đàn kiến hoặc một bầy ong hoạt động. Sức mạnh của chúng đến từ sự hợp tác, không phải từ sự thông minh của từng cá thể.',
      },
      {
        question: 'Robot mềm (Soft Robotics) khác gì với robot truyền thống?',
        answer:
          'Robot truyền thống được làm từ các vật liệu cứng và có các khớp nối rõ ràng. Robot mềm được làm từ các vật liệu mềm, dẻo, linh hoạt (như silicone, cao su), lấy cảm hứng từ các sinh vật như sâu hoặc bạch tuộc. Chúng an toàn hơn khi tương tác với con người và có thể di chuyển trong các môi trường phức tạp.',
      },
      {
        question: 'Robot phỏng sinh học (Bio-inspired robotics) là gì?',
        answer:
          'Là lĩnh vực thiết kế robot dựa trên các nguyên tắc, cấu trúc và cơ chế được tìm thấy trong tự nhiên. Ví dụ: robot có khả năng bay như côn trùng, bơi như cá, hoặc chạy như báo gêpa. Việc học hỏi từ hàng triệu năm tiến hóa của tự nhiên giúp tạo ra những robot hiệu quả hơn.',
      },
      {
        question: 'Cộng tác Người-Máy (Human-Robot Collaboration - HRC) là gì?',
        answer:
          'HRC là việc con người và robot làm việc cùng nhau trong một không gian chung để hoàn thành nhiệm vụ. Không giống như robot công nghiệp truyền thống được đặt trong lồng an toàn, các robot cộng tác (cobot) được thiết kế để tương tác an toàn và trực tiếp với con người.',
      },
      {
        question: 'Đám mây robot (Cloud Robotics) là gì?',
        answer:
          'Là một khái niệm trong đó robot có thể tận dụng sức mạnh tính toán và kho dữ liệu khổng lồ trên đám mây. Thay vì phải tự mình xử lý mọi thứ, robot có thể "offload" các tác vụ nặng (như huấn luyện AI, truy cập bản đồ lớn) lên cloud, giúp chúng trở nên nhẹ hơn, rẻ hơn và thông minh hơn.',
      },
      {
        question: 'Telepresence và Telerobotics khác nhau như thế nào?',
        answer:
          'Telepresence cho phép bạn có cảm giác "hiện diện" ở một nơi khác thông qua video và âm thanh (ví dụ: robot hội nghị truyền hình di động). Telerobotics tiến một bước xa hơn, cho phép bạn không chỉ nhìn và nghe mà còn có thể điều khiển robot để thực hiện các hành động vật lý từ xa (ví dụ: robot phẫu thuật từ xa).',
      },
      {
        question: 'Exoskeleton (khung xương ngoài) là gì?',
        answer:
          'Là một thiết bị robot có thể đeo được, được thiết kế để tăng cường sức mạnh, sức bền hoặc phục hồi chức năng cho con người. Chúng được ứng dụng trong quân sự, công nghiệp (giúp công nhân nâng vật nặng) và y tế (giúp bệnh nhân đột quỵ tập đi lại).',
      },
      {
        question: 'Đạo đức trong robotics là một vấn đề như thế nào?',
        answer:
          'Đây là một lĩnh vực rất quan trọng, xem xét các câu hỏi như: Ai chịu trách nhiệm khi một robot tự hành gây tai nạn? Robot có nên được sử dụng trong chiến tranh không? Làm thế nào để đảm bảo AI trong robot không có thành kiến? Ba định luật về robot của Asimov là một ví dụ kinh điển về nỗ lực suy nghĩ về vấn đề này.',
      },
      {
        question: 'Xu hướng lớn tiếp theo trong robotics là gì?',
        answer:
          'Một số xu hướng lớn bao gồm sự hội tụ của AI và robotics, sự phát triển của robot mềm và robot phỏng sinh học, robot cộng tác ngày càng phổ biến, và việc robot học các kỹ năng mới một cách tự chủ hơn thông qua học tăng cường và các kỹ thuật khác.',
      },
      {
        question: 'Làm thế nào để một người có thể theo kịp những tiến bộ nhanh chóng trong robotics?',
        answer:
          'Hãy tích cực đọc các tạp chí khoa học (như IEEE Spectrum), theo dõi các hội nghị lớn (như ICRA, IROS), tham gia các cộng đồng trực tuyến (như diễn đàn ROS), và liên tục thực hành với các dự án cá nhân để áp dụng các công nghệ mới.',
      },
    ],
  },
];

export const programmingRoboticsModule: ModuleData = {
  id: 'programming-robotics',
  title: 'Programming & Robotics',
  subtitle: 'Lập trình và robot học',
  description: 'Kết hợp programming skills với robotics engineering để tạo autonomous systems',
  category: 'programming',
  icon: '🤖',
  color: 'from-gray-600 to-blue-600',
  level: 'Trung bình đến Nâng cao',
  duration: '16-20 giờ',
  features: ['Programming Fundamentals', 'Robotics Engineering', 'AI Integration', 'Advanced Applications'],
  prerequisites: ['Programming fundamentals', 'Basic electronics', 'Mathematical thinking', 'Problem-solving skills'],
  objectives: [
    'Hiểu các khái niệm cơ bản về lập trình cho robot.',
    'Thiết kế và xây dựng các hệ thống robot đơn giản.',
    'Tích hợp AI và machine learning vào robot.',
    'Phát triển các ứng dụng robot tự hành.',
  ],
  careerOutcomes: [
    'Kỹ sư Robotics',
    'Chuyên gia tự động hóa',
    'Nhà phát triển hệ thống nhúng',
    'Kỹ sư AI/ML cho Robotics',
  ],
  industryApplications: [
    { name: 'Sản xuất', description: 'Robot tự động hóa dây chuyền lắp ráp, kiểm tra chất lượng.' },
    { name: 'Logistics', description: 'Robot sắp xếp và vận chuyển hàng hóa trong kho.' },
    { name: 'Y tế', description: 'Robot phẫu thuật, robot chăm sóc bệnh nhân.' },
    { name: 'Nông nghiệp', description: 'Robot thu hoạch, máy bay không người lái giám sát cây trồng.' },
  ],
  marketDemand: {
    averageSalary: '1500-3000 USD/tháng',
    jobGrowth: '15% mỗi năm',
    hireDemand: 'Cao',
  },
  relatedModules: ['python', 'ai-fundamentals', 'iot-basics'],
};

export const programmingRoboticsLessons = lessons;
