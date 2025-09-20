import { ModuleData } from '@/types';

export const economicGeographyVietnamModuleData: ModuleData = {
  id: 'economic-geography-vietnam',
  title: 'Địa Lý Kinh Tế và Du Lịch Việt Nam',
  subtitle: 'Phân tích tiềm năng, thực trạng và định hướng phát triển kinh tế - du lịch của các vùng miền Việt Nam.',
  description:
    'Module này cung cấp một cái nhìn toàn diện về sự phân bố các nguồn lực, các ngành kinh tế trọng điểm và tiềm năng du lịch của 7 vùng kinh tế - xã hội Việt Nam, giúp người học hiểu rõ hơn về sự phát triển không đồng đều và các chiến lược phát triển vùng.',
  image: 'https://images.unsplash.com/photo-1528277342939-2de147a27c33?w=1200&h=600&fit=crop',
  color: 'from-cyan-500 to-blue-500',
  category: 'Địa lý & Kinh tế',
  level: 'Trung học',
  duration: '12 tuần',
  lessons: [
    {
      id: 'vung-dong-bang-song-hong',
      title: 'Vùng Đồng Bằng Sông Hồng: Động Lực Phát Triển Phía Bắc',
      description:
        'Phân tích các thế mạnh về vị trí địa lý, tài nguyên, dân cư và cơ sở hạ tầng của vùng, đặc biệt là vai trò của tam giác kinh tế trọng điểm Hà Nội - Hải Phòng - Quảng Ninh.',
      duration: '55 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Phát triển công nghiệp', 'Đô thị hóa', 'Nông nghiệp công nghệ cao'],
      objectives: [
        'Xác định được vị trí và phạm vi của vùng Đồng bằng sông Hồng.',
        'Phân tích được các thế mạnh và hạn chế về tự nhiên và kinh tế - xã hội của vùng.',
        'Hiểu được vai trò của vùng là trung tâm chính trị, kinh tế, văn hóa, khoa học hàng đầu của cả nước.',
        'Trình bày được thực trạng phát triển các ngành kinh tế chính: công nghiệp, nông nghiệp, dịch vụ.',
      ],
      faqs: [
        {
          question: 'Tại sao Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước?',
          answer:
            'Vùng này có lịch sử khai thác lãnh thổ lâu đời, đất đai màu mỡ thuận lợi cho nông nghiệp lúa nước, và là nơi tập trung các trung tâm chính trị, kinh tế lớn, thu hút dân cư từ khắp nơi đổ về.',
        },
        {
          question: 'Hạn chế lớn nhất đối với sự phát triển kinh tế của vùng là gì?',
          answer:
            'Hạn chế lớn nhất là tài nguyên khoáng sản không phong phú, sức ép dân số lớn lên các vấn đề việc làm, môi trường và cơ sở hạ tầng. Vùng cũng thường xuyên chịu ảnh hưởng của thiên tai như bão, lũ.',
        },
      ],
      quizzes: [
        {
          question: 'Tam giác kinh tế trọng điểm của vùng Đồng bằng sông Hồng bao gồm những tỉnh/thành phố nào?',
          options: [
            'Hà Nội - Hải Dương - Hưng Yên',
            'Hà Nội - Bắc Ninh - Vĩnh Phúc',
            'Hà Nội - Hải Phòng - Quảng Ninh',
            'Hà Nội - Nam Định - Thái Bình',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Hà Nội - Hải Phòng - Quảng Ninh được xác định là tam giác kinh tế trọng điểm, là hạt nhân tăng trưởng cho toàn vùng và cả miền Bắc.',
        },
      ],
    },
    {
      id: 'vung-dong-nam-bo',
      title: 'Vùng Đông Nam Bộ: Đầu Tàu Kinh Tế Cả Nước',
      description:
        'Nghiên cứu về vùng kinh tế phát triển năng động nhất Việt Nam, với TP. Hồ Chí Minh là hạt nhân. Phân tích các ngành công nghiệp, dịch vụ và vai trò thu hút đầu tư nước ngoài.',
      duration: '60 phút',
      difficulty: 'Trung bình',
      realWorldApplications: ['Thu hút vốn FDI', 'Phát triển khu công nghiệp', 'Dịch vụ tài chính - ngân hàng'],
      objectives: [
        'Phân tích được các lợi thế vượt trội của vùng Đông Nam Bộ về vị trí, tài nguyên (đặc biệt là dầu khí), và nguồn lao động.',
        'Chứng minh được vai trò của vùng là trung tâm công nghiệp, dịch vụ, tài chính lớn nhất cả nước.',
        'Giải thích tại sao vùng này dẫn đầu cả nước về thu hút đầu tư trực tiếp nước ngoài (FDI).',
        'Tìm hiểu về các vấn đề môi trường và xã hội nảy sinh từ quá trình phát triển kinh tế nhanh.',
      ],
      faqs: [
        {
          question: 'Ngành công nghiệp nào là thế mạnh nổi bật của Đông Nam Bộ?',
          answer:
            'Đông Nam Bộ có cơ cấu công nghiệp đa dạng và hiện đại nhất cả nước, trong đó nổi bật là công nghiệp khai thác và chế biến dầu khí, công nghệ cao (điện tử, tin học), và các ngành công nghiệp nhẹ (dệt may, da giày).',
        },
        {
          question: 'Tại sao TP. Hồ Chí Minh được coi là "hạt nhân" của vùng?',
          answer:
            'TP. Hồ Chí Minh là trung tâm lớn nhất về mọi mặt: kinh tế, tài chính, thương mại, khoa học công nghệ, giao thông vận tải và giao lưu quốc tế. Sự phát triển của thành phố có tác động lan tỏa và thúc đẩy sự phát triển của các tỉnh lân cận và cả nước.',
        },
      ],
      quizzes: [
        {
          question:
            'Nguồn tài nguyên khoáng sản quan trọng nhất ở thềm lục địa phía Nam, gắn liền với sự phát triển của Đông Nam Bộ là gì?',
          options: ['Than đá', 'Bô-xít', 'Sắt', 'Dầu mỏ và khí tự nhiên'],
          correctAnswerIndex: 3,
          explanation:
            'Các bể dầu khí lớn như Cửu Long, Nam Côn Sơn ở thềm lục địa phía Nam đã tạo điều kiện cho ngành công nghiệp khai thác và chế biến dầu khí trở thành ngành kinh tế mũi nhọn của vùng.',
        },
      ],
    },
    {
      id: 'tiem-nang-du-lich',
      title: 'Tiềm Năng và Các Loại Hình Du Lịch Đặc Trưng',
      description:
        'Khám phá sự đa dạng về tài nguyên du lịch của Việt Nam, từ du lịch biển đảo, du lịch văn hóa - lịch sử đến du lịch sinh thái, và các định hướng phát triển bền vững.',
      duration: '55 phút',
      difficulty: 'Cơ bản',
      realWorldApplications: ['Phát triển sản phẩm du lịch', 'Marketing điểm đến', 'Du lịch cộng đồng'],
      objectives: [
        'Phân biệt được tài nguyên du lịch tự nhiên và tài nguyên du lịch nhân văn.',
        'Trình bày được tiềm năng và sự phân bố của các loại hình du lịch chính ở Việt Nam.',
        'Lấy ví dụ về các điểm du lịch nổi tiếng cho từng loại hình (Vịnh Hạ Long, Phố cổ Hội An, Đồng bằng sông Cửu Long).',
        'Hiểu khái niệm và ý nghĩa của phát triển du lịch bền vững.',
      ],
      faqs: [
        {
          question: 'Du lịch bền vững là gì?',
          answer:
            'Du lịch bền vững là hoạt động du lịch đáp ứng nhu cầu của du khách và cộng đồng địa phương hiện tại, trong khi vẫn bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai. Nó cân bằng giữa ba yếu tố: kinh tế, xã hội và môi trường.',
        },
        {
          question: 'Tại sao Việt Nam có tiềm năng lớn về du lịch biển đảo?',
          answer:
            'Việt Nam có đường bờ biển dài hơn 3260 km với nhiều bãi biển đẹp (Mỹ Khê, Nha Trang, Phú Quốc), hàng nghìn hòn đảo lớn nhỏ, và nhiều vũng, vịnh kín gió. Khí hậu nhiệt đới cũng cho phép hoạt động du lịch biển diễn ra quanh năm ở nhiều nơi.',
        },
      ],
      quizzes: [
        {
          question:
            'Di sản nào của Việt Nam vừa được UNESCO công nhận là Di sản Thiên nhiên, vừa là Di sản Văn hóa Thế giới?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Quần thể danh thắng Tràng An',
            'Vườn quốc gia Phong Nha - Kẻ Bàng',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Quần thể danh thắng Tràng An (Ninh Bình) là di sản hỗn hợp đầu tiên và duy nhất của Việt Nam và Đông Nam Á, được UNESCO công nhận dựa trên cả tiêu chí văn hóa (dấu tích của người tiền sử) và tiêu chí thiên nhiên (cảnh quan karst ngoạn mục).',
        },
      ],
    },
  ],
  features: [
    'Phân tích 7 vùng kinh tế - xã hội',
    'Bản đồ kinh tế và biểu đồ tương tác',
    'Khám phá tiềm năng du lịch Việt Nam',
    'Nghiên cứu các chiến lược phát triển vùng',
  ],
  prerequisites: ['Kiến thức địa lý Việt Nam cơ bản'],
  objectives: [
    'Nắm vững đặc điểm kinh tế - xã hội của các vùng miền.',
    'Phân tích được mối quan hệ giữa điều kiện tự nhiên và phát triển kinh tế.',
    'Hiểu rõ tiềm năng và các loại hình du lịch đặc trưng của Việt Nam.',
    'Phát triển tư duy không gian và khả năng liên kết các vấn đề kinh tế, xã hội.',
  ],
  careerOutcomes: [
    'Nền tảng cho các ngành kinh tế, quản trị kinh doanh, du lịch, quy hoạch vùng.',
    'Kiến thức hữu ích cho các nhà đầu tư, nhà quản lý và chuyên gia marketing.',
  ],
  tags: ['địa lý kinh tế', 'du lịch', 'phát triển vùng', 'Việt Nam'],
};
