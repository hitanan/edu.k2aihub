import { ModuleData } from '@/types';
import { K2Module } from '@/data/k2-modules';

export const energyManagementModule: ModuleData = {
  id: K2Module.EnergyManagement,
  title: 'Quản lý Năng lượng & Lưới điện Thông minh',
  subtitle: 'Tối ưu hóa tương lai năng lượng bền vững',
  description:
    'Khám phá công nghệ lưới điện thông minh và các hệ thống năng lượng tái tạo, từ tối ưu hóa lưới điện đến quản lý năng lượng bền vững trong bối cảnh chuyển đổi số.',
  category: 'Công nghệ Xanh',
  level: 'Trung cấp',
  duration: '12-15 giờ',
  icon: '💡',
  color: 'from-green-500 to-teal-500',
  features: [
    'Kiến trúc lưới điện thông minh',
    'Tích hợp năng lượng tái tạo',
    'Hệ thống lưu trữ năng lượng',
    'Tối ưu hóa lưới điện bằng AI',
    'Báo cáo bền vững (ESG)',
  ],
  prerequisites: [
    'Kiến thức cơ bản về kỹ thuật điện.',
    'Hiểu biết về các nguồn năng lượng.',
    'Tư duy logic và phân tích hệ thống.',
  ],
  objectives: [
    'Thiết kế và triển khai kiến trúc lưới điện thông minh.',
    'Tích hợp hiệu quả các nguồn năng lượng tái tạo.',
    'Phát triển hệ thống lưu trữ và quản lý năng lượng.',
    'Xây dựng các thuật toán tối ưu hóa lưới điện.',
    'Hiểu các chỉ số và báo cáo về tính bền vững.',
  ],
  careerOutcomes: [
    'Kỹ sư Lưới điện Thông minh',
    'Chuyên gia Quản lý Năng lượng',
    'Nhà phát triển Năng lượng Tái tạo',
    'Quản lý Vận hành Lưới điện',
    'Nhà phân tích Giao dịch Năng lượng',
  ],
  heroImageUrl: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=600&fit=crop',
  tags: ['green-tech', 'sustainability', 'smart-city', 'engineering'],
  relatedModules: [K2Module.GreenTechnology, K2Module.DataScienceAnalytics, K2Module.EnvironmentalScienceClimate],
  lessons: [
    {
      id: 'introduction-to-smart-grids',
      title: 'Giới thiệu về Lưới điện Thông minh',
      description:
        'Hiểu rõ khái niệm, kiến trúc và lợi ích của lưới điện thông minh trong bối cảnh năng lượng hiện đại.',
      duration: '90 phút',
      difficulty: 'Beginner',
      objectives: [],
      realWorldApplications: [],
      faqs: [
        {
          question: 'Lưới điện thông minh (Smart Grid) khác gì so với lưới điện truyền thống?',
          answer:
            'Lưới điện thông minh sử dụng công nghệ kỹ thuật số hai chiều để giao tiếp giữa nhà cung cấp và người tiêu dùng, cho phép tự động hóa, giám sát và điều khiển lưới điện. Lưới điện truyền thống chủ yếu là dòng chảy một chiều, từ nhà máy điện đến người tiêu dùng, và ít có khả năng tự động hóa.',
        },
        {
          question: 'Tại sao lưới điện thông minh lại quan trọng cho việc phát triển năng lượng tái tạo?',
          answer:
            'Năng lượng tái tạo như mặt trời và gió có tính không ổn định (phụ thuộc vào thời tiết). Lưới điện thông minh có thể quản lý sự biến đổi này bằng cách điều chỉnh phụ tải, sử dụng hệ thống lưu trữ năng lượng và định tuyến lại dòng điện một cách linh hoạt, điều mà lưới điện truyền thống không thể làm hiệu quả.',
        },
        {
          question: 'Đồng hồ thông minh (Smart Meter) có vai trò gì trong lưới điện thông minh?',
          answer:
            'Đồng hồ thông minh là thành phần quan trọng, ghi lại dữ liệu tiêu thụ điện năng theo thời gian thực và gửi thông tin đó về công ty điện lực. Nó cho phép thanh toán chính xác, phát hiện sự cố nhanh chóng và giúp người tiêu dùng theo dõi, điều chỉnh việc sử dụng điện của mình để tiết kiệm chi phí.',
        },
        {
          question: 'An ninh mạng có phải là một rủi ro lớn đối với lưới điện thông minh không?',
          answer:
            'Có, an ninh mạng là một trong những thách thức lớn nhất. Vì lưới điện thông minh kết nối nhiều thiết bị qua mạng, nó có thể trở thành mục tiêu của các cuộc tấn công mạng, có khả năng gây mất điện trên diện rộng. Do đó, việc xây dựng các biện pháp bảo mật mạnh mẽ là cực kỳ quan trọng.',
        },
        {
          question: 'Lưới điện thông minh mang lại lợi ích gì cho người tiêu dùng?',
          answer: 'Người tiêu dùng được hưởng lợi từ hóa đơn tiền điện chính xác hơn, khả năng theo dõi và quản lý việc sử dụng năng lượng của mình, và nguồn cung cấp điện ổn định hơn. Về lâu dài, lưới điện thông minh còn giúp giảm chi phí vận hành, từ đó có thể làm giảm giá điện.'
        },
        {
          question: 'Công nghệ "Demand Response" (Đáp ứng Phụ tải) là gì?',
          answer: 'Đây là một chương trình cho phép các công ty điện lực khuyến khích (thường bằng tài chính) người tiêu dùng giảm mức sử dụng điện trong giờ cao điểm. Lưới điện thông minh tạo điều kiện cho việc này bằng cách tự động hóa quá trình, ví dụ như tự động điều chỉnh nhiệt độ máy lạnh một chút để giảm tải.'
        },
        {
          question: 'Việt Nam đã triển khai lưới điện thông minh ở mức độ nào?',
          answer: 'Việt Nam đang trong giai đoạn đầu triển khai lưới điện thông minh. Các Tổng công ty Điện lực đang tích cực thay thế đồng hồ cơ bằng đồng hồ thông minh, xây dựng các trung tâm điều khiển từ xa và tự động hóa lưới điện phân phối. Lộ trình phát triển lưới điện thông minh của Chính phủ đặt mục tiêu hiện đại hóa toàn diện lưới điện trong những năm tới.'
        },
        {
          question: 'Lưới điện thông minh có giúp giảm lượng khí thải carbon không?',
          answer: 'Có, bằng cách cho phép tích hợp hiệu quả hơn các nguồn năng lượng tái tạo và giảm tổn thất điện năng trên đường truyền, lưới điện thông minh góp phần quan trọng vào việc giảm sự phụ thuộc vào nhiên liệu hóa thạch và giảm lượng khí thải CO2.'
        },
        {
          question: 'Chi phí để nâng cấp lên lưới điện thông minh có cao không?',
          answer: 'Chi phí ban đầu để đầu tư vào cơ sở hạ tầng lưới điện thông minh là rất lớn, bao gồm chi phí cho đồng hồ thông minh, cảm biến, hệ thống truyền thông và phần mềm. Tuy nhiên, lợi ích lâu dài về hiệu quả vận hành, tiết kiệm năng lượng và độ tin cậy được kỳ vọng sẽ bù đắp cho khoản đầu tư này.'
        },
        {
          question: 'Dữ liệu từ đồng hồ thông minh có được bảo mật không?',
          answer: 'Bảo mật dữ liệu là một ưu tiên hàng đầu. Các công ty điện lực phải tuân thủ các quy định nghiêm ngặt về bảo vệ dữ liệu cá nhân. Dữ liệu được mã hóa trong quá trình truyền và lưu trữ để ngăn chặn truy cập trái phép và đảm bảo quyền riêng tư cho khách hàng.'
        }
      ],
    },
    {
      id: 'renewable-energy-integration',
      title: 'Tích hợp Năng lượng Tái tạo',
      description:
        'Các thách thức và giải pháp khi tích hợp các nguồn năng lượng tái tạo như mặt trời và gió vào lưới điện.',
      duration: '120 phút',
      difficulty: 'Intermediate',
      objectives: [],
      realWorldApplications: [],
      faqs: [
        {
          question: 'Thách thức lớn nhất khi tích hợp năng lượng tái tạo vào lưới điện là gì?',
          answer:
            'Thách thức lớn nhất là tính không ổn định và biến đổi. Năng lượng mặt trời chỉ có vào ban ngày, năng lượng gió chỉ có khi có gió. Điều này tạo ra sự không khớp giữa thời điểm sản xuất điện và thời điểm nhu cầu sử dụng điện cao, đòi hỏi lưới điện phải có khả năng cân bằng và dự trữ năng lượng một cách linh hoạt.',
        },
        {
          question: 'Hiện tượng "cắt giảm" (curtailment) trong năng lượng tái tạo là gì?',
          answer:
            'Cắt giảm là hành động chủ động giảm sản lượng điện từ các nguồn năng lượng tái tạo, ngay cả khi chúng có khả năng sản xuất. Điều này xảy ra khi lượng điện sản xuất ra vượt quá khả năng truyền tải của lưới điện hoặc vượt quá nhu cầu tiêu thụ, nhằm tránh gây quá tải và mất ổn định cho hệ thống.',
        },
        {
          question: 'Lưới điện thông minh giúp giải quyết vấn đề tích hợp năng lượng tái tạo như thế nào?',
          answer:
            'Lưới điện thông minh sử dụng các cảm biến, giao tiếp hai chiều và tự động hóa để quản lý sự biến đổi của năng lượng tái tạo. Nó có thể điều khiển các thiết bị tiêu thụ điện (Demand Response), sạc/xả các hệ thống lưu trữ năng lượng, và nhanh chóng định tuyến lại dòng điện để duy trì sự cân bằng và ổn định.',
        },
        {
          question:
            'Dự báo thời tiết có vai trò quan trọng như thế nào trong việc vận hành lưới điện có năng lượng tái tạo?',
          answer:
            'Dự báo thời tiết chính xác là cực kỳ quan trọng. Nó giúp các nhà vận hành lưới điện dự đoán được sản lượng điện từ các nhà máy điện mặt trời và điện gió trong những giờ hoặc ngày tới. Dựa vào đó, họ có thể lên kế hoạch huy động các nguồn điện khác (như thủy điện, điện khí) để bù đắp hoặc chuẩn bị các giải pháp lưu trữ, đảm bảo cung cấp điện liên tục.',
        },
        {
            "question": "Microgrid (lưới điện vi mô) là gì và nó liên quan thế nào đến năng lượng tái tạo?",
            "answer": "Microgrid là một lưới điện nhỏ, cục bộ có thể hoạt động độc lập hoặc kết nối với lưới điện chính. Chúng thường tích hợp các nguồn năng lượng tái tạo tại chỗ (như pin mặt trời áp mái), hệ thống lưu trữ và phụ tải. Microgrid tăng cường độ tin cậy, đặc biệt hữu ích cho các khu vực vùng sâu vùng xa hoặc các cơ sở quan trọng như bệnh viện, và giúp quản lý năng lượng tái tạo hiệu quả hơn."
        },
        {
            "question": "Vehicle-to-Grid (V2G) là gì?",
            "answer": "V2G là một công nghệ cho phép xe điện không chỉ sạc từ lưới điện mà còn có thể trả ngược năng lượng từ pin của nó trở lại lưới điện khi cần thiết. Điều này biến hàng triệu chiếc xe điện thành một hệ thống lưu trữ năng lượng phân tán khổng lồ, giúp cân bằng lưới điện trong giờ cao điểm."
        },
        {
            "question": "Tại sao việc nâng cấp hệ thống truyền tải lại quan trọng khi tích hợp năng lượng tái tạo?",
            "answer": "Các nguồn năng lượng tái tạo tốt nhất (như các trang trại gió lớn hoặc nhà máy điện mặt trời) thường nằm ở các khu vực xa trung tâm tiêu thụ điện. Do đó, cần phải xây dựng và nâng cấp các đường dây truyền tải cao thế để đưa năng lượng sạch này từ nơi sản xuất đến nơi sử dụng một cách hiệu quả và không bị tổn thất."
        },
        {
            "question": "Chính sách 'Net Metering' (Đo đếm điện năng ròng) hoạt động như thế nào?",
            "answer": "Net Metering là một cơ chế thanh toán cho phép các hộ gia đình hoặc doanh nghiệp có hệ thống năng lượng tái tạo (như điện mặt trời) bán lại lượng điện dư thừa cho công ty điện lực. Đồng hồ sẽ quay ngược khi họ phát điện lên lưới, và họ chỉ phải trả tiền cho phần chênh lệch (net) giữa lượng điện tiêu thụ và lượng điện phát ra."
        },
        {
            "question": "Tần số lưới điện (ví dụ 50Hz ở Việt Nam) bị ảnh hưởng như thế nào bởi năng lượng tái tạo?",
            "answer": "Tần số lưới điện phải được giữ cực kỳ ổn định. Các nhà máy điện truyền thống (nhiệt điện, thủy điện) có các tuabin quay lớn giúp duy trì 'quán tính' cho lưới, giữ tần số ổn định. Năng lượng tái tạo từ inverter không có quán tính này, do đó khi tỷ trọng năng lượng tái tạo tăng cao, việc giữ ổn định tần số trở nên thách thức hơn, đòi hỏi các giải pháp công nghệ như 'quán tính tổng hợp' từ các hệ thống lưu trữ."
        },
        {
            "question": "Làm thế nào để cân bằng lưới điện khi một đám mây lớn đột ngột che khuất một nhà máy điện mặt trời khổng lồ?",
            "answer": "Đây là một thách thức thực tế. Lưới điện thông minh sẽ phản ứng trong vài giây. Nó có thể ngay lập tức huy động điện từ các hệ thống lưu trữ pin (BESS) đang ở chế độ chờ, hoặc tăng công suất từ các nhà máy điện khí có khả năng khởi động nhanh để bù đắp sự sụt giảm đột ngột, đảm bảo không có sự gián đoạn nào trong việc cung cấp điện."
        }
      ],
    },
    {
      id: 'energy-storage-systems',
      title: 'Hệ thống Lưu trữ Năng lượng (ESS)',
      description:
        'Tìm hiểu về các công nghệ lưu trữ năng lượng, đặc biệt là hệ thống lưu trữ bằng pin (BESS) và vai trò của chúng.',
      duration: '110 phút',
      difficulty: 'Intermediate',
      objectives: [],
      realWorldApplications: [],
      faqs: [
        {
          question: 'Tại sao hệ thống lưu trữ năng lượng (ESS) lại quan trọng đối với lưới điện hiện đại?',
          answer:
            'ESS đóng vai trò như một "bộ đệm" cho lưới điện. Nó lưu trữ năng lượng khi sản xuất dư thừa (ví dụ: giữa trưa nắng) và giải phóng năng lượng đó khi nhu cầu cao hoặc khi các nguồn tái tạo không hoạt động (ví dụ: ban đêm). Điều này giúp cân bằng cung-cầu, tăng cường độ ổn định của lưới điện và tối đa hóa việc sử dụng năng lượng sạch.',
        },
        {
          question: 'BESS (Battery Energy Storage System) là gì?',
          answer:
            'BESS là một loại hệ thống lưu trữ năng lượng sử dụng công nghệ pin sạc lại, thường là pin lithium-ion quy mô lớn. Đây là công nghệ lưu trữ phổ biến nhất hiện nay do hiệu suất cao, tốc độ phản ứng nhanh và chi phí ngày càng giảm.',
        },
        {
          question: 'Ngoài pin, còn có những công nghệ lưu trữ năng lượng nào khác?',
          answer:
            'Có nhiều công nghệ khác, ví dụ: Thủy điện tích năng (bơm nước lên hồ chứa trên cao và cho chảy xuống để phát điện khi cần), Lưu trữ năng lượng bằng khí nén (CAES), Bánh đà (Flywheels), và các công nghệ mới nổi như lưu trữ bằng hydro. Mỗi công nghệ có ưu và nhược điểm riêng về quy mô, chi phí và thời gian lưu trữ.',
        },
        {
          question: 'Hệ thống lưu trữ năng lượng có thể được sử dụng ở quy mô gia đình không?',
          answer:
            'Hoàn toàn có thể. Các hệ thống lưu trữ năng lượng dân dụng, như Tesla Powerwall, ngày càng phổ biến. Chúng thường được kết hợp với các tấm pin mặt trời áp mái, giúp các hộ gia đình lưu trữ năng lượng mặt trời dư thừa để sử dụng vào buổi tối hoặc khi mất điện, tăng khả năng tự chủ về năng lượng.',
        },
        {
            "question": "Tuổi thọ của một hệ thống BESS là bao lâu?",
            "answer": "Tuổi thọ của một hệ thống BESS thường được tính bằng số chu kỳ sạc/xả hoặc theo năm, tùy thuộc vào công nghệ pin và cách vận hành. Hầu hết các hệ thống pin lithium-ion thương mại hiện nay có tuổi thọ thiết kế từ 10 đến 15 năm và có thể chịu được hàng nghìn chu kỳ sạc/xả."
        },
        {
            "question": "Hiệu suất chu trình (Round-trip efficiency) của hệ thống lưu trữ năng lượng là gì?",
            "answer": "Đây là tỷ lệ phần trăm năng lượng được lấy ra so với năng lượng đã nạp vào. Ví dụ, nếu bạn nạp 100 kWh vào pin và sau đó có thể sử dụng được 90 kWh, thì hiệu suất chu trình là 90%. Pin lithium-ion thường có hiệu suất chu trình rất cao, khoảng 85-95%."
        },
        {
            "question": "Hệ thống lưu trữ năng lượng có an toàn không?",
            "answer": "An toàn là một yếu tố cực kỳ quan trọng. Các hệ thống lưu trữ năng lượng hiện đại, đặc biệt là BESS, được trang bị nhiều lớp bảo vệ, bao gồm hệ thống quản lý pin (BMS) để theo dõi nhiệt độ, điện áp, và dòng điện; hệ thống làm mát hoặc sưởi; và hệ thống phòng cháy chữa cháy chuyên dụng để ngăn ngừa và xử lý các sự cố như quá nhiệt hoặc đoản mạch."
        },
        {
            "question": "Vai trò của ESS trong việc 'dịch chuyển thời gian' (time-shifting) năng lượng là gì?",
            "answer": "Đây là một trong những ứng dụng chính của ESS. 'Dịch chuyển thời gian' có nghĩa là lưu trữ năng lượng được sản xuất vào thời điểm giá rẻ hoặc có nguồn cung dồi dào (ví dụ: năng lượng mặt trời giữa trưa) và bán hoặc sử dụng nó vào thời điểm giá cao hoặc nhu cầu lớn (ví dụ: buổi tối). Điều này giúp tối đa hóa giá trị kinh tế của năng lượng."
        },
        {
            "question": "Lưu trữ năng lượng có giúp giảm chi phí xây dựng nhà máy điện mới không?",
            "answer": "Có, bằng cách cung cấp năng lượng trong giờ cao điểm, các hệ thống lưu trữ có thể giúp trì hoãn hoặc loại bỏ nhu cầu xây dựng các nhà máy điện 'cao điểm' (peaker plants) đắt đỏ, vốn chỉ hoạt động vài giờ mỗi năm. Điều này giúp tiết kiệm chi phí đầu tư lớn cho cơ sở hạ tầng điện."
        },
        {
            "question": "Các yếu tố môi trường liên quan đến việc sản xuất và tái chế pin là gì?",
            "answer": "Việc khai thác các nguyên liệu thô như lithium và coban có thể có tác động đến môi trường. Do đó, ngành công nghiệp đang nỗ lực phát triển các công nghệ pin mới sử dụng các vật liệu phổ biến hơn và đầu tư mạnh vào việc tái chế pin cũ để thu hồi các kim loại có giá trị, giảm thiểu rác thải và tạo ra một chu trình kinh tế khép kín."
        }
      ],
    },
    {
      id: 'grid-optimization-with-ai',
      title: 'Tối ưu hóa Lưới điện bằng AI',
      description:
        'Ứng dụng Trí tuệ Nhân tạo (AI) và Học máy (ML) để dự báo, tối ưu hóa và tự động hóa vận hành lưới điện.',
      duration: '120 phút',
      difficulty: 'Advanced',
      objectives: [],
      realWorldApplications: [],
      faqs: [
        {
          question: 'AI được ứng dụng như thế nào trong việc tối ưu hóa lưới điện?',
          answer:
            'AI được sử dụng để phân tích một lượng lớn dữ liệu từ các cảm biến trên lưới điện, dự báo nhu cầu phụ tải và sản lượng năng lượng tái tạo với độ chính xác cao. Dựa trên các dự báo này, AI có thể tự động đưa ra các quyết định tối ưu như điều phối nguồn điện, quản lý hệ thống lưu trữ, và định tuyến lại dòng điện để giảm tổn thất và tránh quá tải.',
        },
        {
          question: 'Bảo trì dự đoán (Predictive Maintenance) trong lưới điện là gì?',
          answer:
            'Đây là một ứng dụng quan trọng của AI. Bằng cách phân tích dữ liệu vận hành của các thiết bị như máy biến áp, đường dây, AI có thể dự đoán khi nào một thiết bị có khả năng bị lỗi trước khi nó thực sự xảy ra. Điều này cho phép các công ty điện lực lên kế hoạch sửa chữa, bảo trì một cách chủ động, giảm thiểu thời gian mất điện và tiết kiệm chi phí.',
        },
        {
          question: 'AI có thể giúp người tiêu dùng tiết kiệm tiền điện không?',
          answer:
            'Có. Các hệ thống quản lý năng lượng tại nhà thông minh (Home Energy Management Systems - HEMS) sử dụng AI có thể học thói quen sử dụng điện của gia đình bạn. Nó có thể tự động vận hành các thiết bị như máy giặt, máy nước nóng vào thời điểm giá điện thấp, hoặc tối ưu hóa việc sạc xe điện và sử dụng năng lượng từ pin mặt trời, từ đó giúp giảm hóa đơn tiền điện.',
        },
        {
          question: 'Thách thức khi áp dụng AI vào lưới điện là gì?',
          answer:
            'Các thách thức chính bao gồm: chất lượng và tính sẵn có của dữ liệu, yêu cầu về năng lực tính toán lớn, vấn đề an ninh mạng đối với các hệ thống AI, và nhu cầu về nguồn nhân lực có kỹ năng cả về kỹ thuật điện và khoa học dữ liệu. Ngoài ra, việc diễn giải và tin tưởng vào các quyết định của AI cũng là một rào cản cần vượt qua.',
        },
        {
            "question": "AI có thể giúp ngăn chặn việc mất điện trên diện rộng (blackouts) không?",
            "answer": "Có, AI có thể đóng một vai trò quan trọng. Bằng cách liên tục phân tích các dòng dữ liệu từ lưới điện, AI có thể xác định các dấu hiệu bất thường hoặc các điều kiện có thể dẫn đến sự cố mất ổn định. Nó có thể cảnh báo sớm cho người vận hành hoặc tự động thực hiện các hành động khắc phục, chẳng hạn như định tuyến lại dòng điện hoặc ngắt kết nối các khu vực bị ảnh hưởng để cô lập sự cố, ngăn nó lan rộng."
        },
        {
            "question": "Học tăng cường (Reinforcement Learning) được áp dụng trong lưới điện như thế nào?",
            "answer": "Học tăng cường là một nhánh của AI nơi một 'tác nhân' học cách đưa ra quyết định tối ưu thông qua thử và sai để tối đa hóa một 'phần thưởng'. Trong lưới điện, nó có thể được sử dụng để đào tạo một hệ thống tự động điều khiển lưới điện, học cách cân bằng cung và cầu, quản lý pin, và xử lý các sự kiện bất ngờ một cách hiệu quả nhất mà không cần sự can thiệp của con người."
        },
        {
            "question": "Sự khác biệt giữa 'dự báo' và 'tối ưu hóa' trong bối cảnh lưới điện là gì?",
            "answer": "'Dự báo' là việc sử dụng AI để đoán trước các sự kiện trong tương lai, chẳng hạn như nhu cầu điện vào ngày mai sẽ là bao nhiêu. 'Tối ưu hóa' là bước tiếp theo: dựa trên dự báo đó, AI sẽ tìm ra cách tốt nhất để vận hành lưới điện (ví dụ: nên huy động nhà máy nào, sạc/xả pin khi nào) để đáp ứng nhu cầu đó với chi phí thấp nhất và độ tin cậy cao nhất."
        },
        {
            "question": "Digital Twin (Bản sao số) của lưới điện là gì?",
            "answer": "Digital Twin là một mô hình ảo, chi tiết của lưới điện vật lý, được cập nhật liên tục với dữ liệu thời gian thực. Các công ty điện lực có thể sử dụng bản sao số này để chạy các kịch bản giả lập (ví dụ: 'Điều gì sẽ xảy ra nếu một cơn bão lớn đổ bộ?') và thử nghiệm các chiến lược điều khiển mới bằng AI trong một môi trường an toàn trước khi áp dụng chúng vào thực tế."
        },
        {
            "question": "Làm thế nào để đảm bảo các quyết định của AI là công bằng và không thiên vị?",
            "answer": "Đây là một vấn đề quan trọng được gọi là 'AI Ethics'. Cần phải đảm bảo rằng các thuật toán AI không vô tình ưu tiên một nhóm khách hàng này hơn một nhóm khác (ví dụ: luôn ưu tiên khôi phục điện cho các khu vực giàu có trước). Điều này đòi hỏi việc thiết kế cẩn thận các hàm mục tiêu của AI và kiểm tra, giám sát liên tục để phát hiện và sửa chữa bất kỳ sự thiên vị nào."
        },
        {
            "question": "AI có thay thế hoàn toàn vai trò của người vận hành lưới điện không?",
            "answer": "Trong tương lai gần, AI được xem là một công cụ hỗ trợ đắc lực, giúp người vận hành đưa ra quyết định nhanh hơn và chính xác hơn, đặc biệt là trong các tình huống phức tạp. Vai trò của con người sẽ chuyển từ việc điều khiển trực tiếp sang giám sát, quản lý các hệ thống AI và xử lý các tình huống ngoại lệ mà AI chưa được huấn luyện."
        }
      ],
    },
    {
      id: 'sustainability-reporting-esg',
      title: 'Báo cáo Bền vững (ESG)',
      description:
        'Tìm hiểu về các tiêu chuẩn Môi trường, Xã hội và Quản trị (ESG) và cách các công ty năng lượng báo cáo về tính bền vững.',
      duration: '90 phút',
      difficulty: 'Intermediate',
      objectives: [],
      realWorldApplications: [],
      faqs: [
        {
          question: 'ESG là gì và tại sao nó lại quan trọng đối với các công ty năng lượng?',
          answer:
            'ESG là viết tắt của Môi trường (Environmental), Xã hội (Social) và Quản trị (Governance). Đây là một bộ tiêu chuẩn để đo lường các yếu tố liên quan đến tính bền vững và tác động xã hội của một công ty. Đối với các công ty năng lượng, ESG rất quan trọng vì nó ảnh hưởng đến khả năng thu hút đầu tư, uy tín thương hiệu và sự tuân thủ các quy định ngày càng nghiêm ngặt về môi trường.',
        },
        {
          question: 'Các yếu tố "Môi trường" (E) trong báo cáo ESG của một công ty năng lượng thường bao gồm những gì?',
          answer:
            'Các yếu tố này thường bao gồm: lượng khí thải carbon (carbon footprint), tỷ lệ sử dụng năng lượng tái tạo, các biện pháp quản lý chất thải và ô nhiễm, hiệu quả sử dụng nước, và tác động của hoạt động công ty đến đa dạng sinh học.',
        },
        {
          question: 'Làm thế nào để nhà đầu tư sử dụng báo cáo ESG?',
          answer:
            'Các nhà đầu tư ngày càng sử dụng báo cáo ESG để đánh giá rủi ro dài hạn của một công ty. Một công ty có điểm ESG cao thường được coi là quản trị tốt, có khả năng chống chịu tốt hơn với các thay đổi về quy định môi trường và có uy tín tốt hơn trong cộng đồng, do đó có thể là một khoản đầu tư bền vững hơn.',
        },
        {
          question: 'Việc báo cáo ESG ở Việt Nam có bắt buộc không?',
          answer:
            'Hiện tại, việc lập báo cáo phát triển bền vững (bao gồm các yếu-tố ESG) là bắt buộc đối với các công ty niêm yết trên sàn chứng khoán Việt Nam. Xu hướng này đang ngày càng lan rộng và trở thành một thông lệ tốt cho nhiều doanh nghiệp lớn, không chỉ trong ngành năng lượng, nhằm tăng cường tính minh bạch và thu hút vốn đầu tư quốc tế.',
        },
        {
            "question": "Các yếu tố 'Xã hội' (S) và 'Quản trị' (G) trong ESG bao gồm những gì?",
            "answer": "Yếu tố Xã hội (S) liên quan đến mối quan hệ của công ty với người lao động, nhà cung cấp, khách hàng và cộng đồng (ví dụ: an toàn lao động, đa dạng và hòa nhập). Yếu tố Quản trị (G) liên quan đến cách công ty được điều hành (ví dụ: quyền của cổ đông, tính minh bạch của ban lãnh đạo, chống tham nhũng)."
        },
        {
            "question": "Greenwashing là gì và làm thế nào để nhận biết?",
            "answer": "Greenwashing (Tẩy xanh) là hành vi một công ty quảng cáo sai lệch hoặc phóng đại về các nỗ lực thân thiện với môi trường của mình để tạo dựng hình ảnh tích cực. Để nhận biết, nhà đầu tư và người tiêu dùng cần xem xét kỹ lưỡng các báo cáo ESG, tìm kiếm các dữ liệu cụ thể, có thể kiểm chứng và đối chiếu với các tiêu chuẩn báo cáo uy tín (như GRI, SASB) thay vì chỉ tin vào các tuyên bố marketing chung chung."
        },
        {
            "question": "Thỏa thuận Paris về biến đổi khí hậu ảnh hưởng đến báo cáo ESG của các công ty năng lượng như thế nào?",
            "answer": "Thỏa thuận Paris đặt ra mục tiêu giữ cho nhiệt độ toàn cầu tăng dưới 2°C. Điều này tạo áp lực lớn lên các công ty năng lượng phải chuyển đổi sang các mô hình kinh doanh ít carbon hơn. Trong báo cáo ESG, họ cần phải công bố lộ trình chuyển đổi, các mục tiêu giảm phát thải cụ thể và các khoản đầu tư vào năng lượng tái tạo để chứng minh sự tuân thủ của mình với các mục tiêu khí hậu toàn cầu."
        },
        {
            "question": "Sự khác biệt giữa 'tài chính bền vững' và 'đầu tư tác động' là gì?",
            "answer": "'Tài chính bền vững' là một thuật ngữ rộng, bao gồm bất kỳ hình thức đầu tư nào có xem xét đến các yếu tố ESG. 'Đầu tư tác động' (Impact Investing) là một nhánh của tài chính bền vững, đi xa hơn bằng cách chủ động tìm kiếm các khoản đầu tư không chỉ tạo ra lợi nhuận tài chính mà còn tạo ra tác động xã hội hoặc môi trường tích cực, có thể đo lường được."
        },
        {
            "question": "Làm thế nào một công ty có thể cải thiện điểm số ESG của mình?",
            "answer": "Một công ty có thể cải thiện điểm ESG bằng cách thực hiện các hành động cụ thể như: đầu tư vào năng lượng tái tạo để giảm dấu chân carbon (E), thực hiện các chính sách lao động công bằng và hỗ trợ cộng đồng địa phương (S), và thiết lập một hội đồng quản trị độc lập với các ủy ban giám sát rõ ràng (G). Việc công bố dữ liệu một cách minh bạch và nhất quán cũng rất quan trọng."
        },
        {
            "question": "Có những tổ chức nào xếp hạng ESG của các công ty?",
            "answer": "Có nhiều tổ chức uy tín chuyên cung cấp dữ liệu và xếp hạng ESG, chẳng hạn như MSCI, Sustainalytics (một công ty của Morningstar), và S&P Global. Các tổ chức này phân tích dữ liệu công khai và các báo cáo của công ty để đưa ra điểm số, giúp các nhà đầu tư đưa ra quyết định sáng suốt."
        }
      ],
    },
  ],
  practicalApplications: [
    {
      name: 'Hiện đại hóa lưới điện của các công ty điện lực.',
      description: 'Nâng cấp và tự động hóa lưới điện để tăng hiệu quả, độ tin cậy và tích hợp năng lượng tái tạo.',
      steps: [
        'Triển khai cảm biến và đồng hồ thông minh',
        'Xây dựng trung tâm điều khiển hiện đại',
        'Tích hợp hệ thống quản lý năng lượng phân tán (DERMS)',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1624395217339-32d945a5d34c?w=800',
    },
    {
      name: 'Tối ưu hóa năng lượng trong công nghiệp.',
      description:
        'Áp dụng các giải pháp công nghệ để giảm tiêu thụ năng lượng và chi phí sản xuất trong các nhà máy và khu công nghiệp.',
      steps: ['Kiểm toán năng lượng', 'Lắp đặt hệ thống giám sát năng lượng (EMS)', 'Tự động hóa quy trình sản xuất'],
      imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800',
    },
    {
      name: 'Quản lý tòa nhà thương mại thông minh.',
      description:
        'Sử dụng công nghệ IoT và AI để tối ưu hóa việc sử dụng năng lượng trong các tòa nhà văn phòng, trung tâm thương mại.',
      steps: [
        'Lắp đặt hệ thống HVAC thông minh',
        'Tự động hóa hệ thống chiếu sáng',
        'Phân tích dữ liệu tiêu thụ năng lượng',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
    },
    {
      name: 'Mạng lưới sạc xe điện.',
      description:
        'Phát triển hạ tầng sạc thông minh để đáp ứng nhu cầu ngày càng tăng của xe điện và quản lý tác động lên lưới điện.',
      steps: [
        'Quy hoạch vị trí trạm sạc',
        'Triển khai hệ thống quản lý sạc thông minh (V2G/V1G)',
        'Tích hợp với các ứng dụng thanh toán di động',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1619623532287-3a7a35d66a4c?w=800',
    },
    {
      name: 'Cơ sở hạ tầng thành phố thông minh.',
      description:
        'Tích hợp các giải pháp năng lượng thông minh vào quy hoạch và vận hành đô thị để tạo ra các thành phố bền vững và đáng sống hơn.',
      steps: [
        'Triển khai chiếu sáng đường phố thông minh',
        'Xây dựng lưới điện vi mô (microgrids) cho các khu vực trọng yếu',
        'Phát triển giao thông công cộng chạy điện',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=800',
    },
  ],
  careerProspects: [
    'Kỹ sư Lưới điện Thông minh',
    'Chuyên gia Quản lý Năng lượng',
    'Nhà phát triển Năng lượng Tái tạo',
    'Quản lý Vận hành Lưới điện',
    'Nhà phân tích Giao dịch Năng lượng',
  ],
  marketDemand: {
    averageSalary: '40.000.000 - 95.000.000 VNĐ/tháng',
    jobGrowth: '76%',
    hireDemand: 'Cao',
  },
  industryApplications: [
    {
      name: 'Tập đoàn Điện lực Việt Nam (EVN)',
      description:
        'EVN đang dẫn đầu trong việc hiện đại hóa lưới điện quốc gia để cải thiện hiệu quả và độ tin cậy, tích hợp các nguồn năng lượng tái tạo và triển khai công nghệ lưới điện thông minh.',
      url: 'https://www.evn.com.vn/',
    },
    {
      name: 'VinFast',
      description:
        'Với hệ sinh thái xe điện, VinFast đang đầu tư mạnh vào hạ tầng trạm sạc và các giải pháp sạc thông minh, góp phần vào việc quản lý nhu cầu năng lượng và ổn định lưới điện.',
      url: 'https://vinfastauto.com/',
    },
    {
      name: 'Các khu công nghiệp công nghệ cao',
      description:
        'Các khu công nghiệp như Khu Công nghệ cao Hòa Lạc và Khu Công nghệ cao TP.HCM đang triển khai các giải pháp lưới điện vi mô (microgrid) và quản lý năng lượng thông minh để đảm bảo nguồn cung cấp điện ổn định và hiệu quả.',
      url: 'https://hhtp.gov.vn/',
    },
  ],
};
