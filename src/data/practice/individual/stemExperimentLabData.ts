export interface STEMExperimentLabGameData {
  experiments: Array<{
    name: string;
    materials: string[];
    procedure: string[];
    observation: string;
    explanation: string;
    videoUrl?: string;
    difficulty: string;
    estimatedTime: string;
    safetyNotes: string[];
    tips: string[];
  }>;
  labConfig: {
    virtualMode: boolean;
    simulationLevel: 'basic' | 'advanced' | 'realistic';
    allowedMaterials: string[];
    safetyChecks: string[];
  };
}

export const STEM_EXPERIMENT_LAB_DATA: STEMExperimentLabGameData = {
  experiments: [
    {
      name: "Núi Lửa Baking Soda",
      materials: [
        "Baking soda (natri bicarbonate)",
        "Giấm trắng",
        "Màu thực phẩm đỏ",
        "Chai nhựa nhỏ",
        "Phễu",
        "Thìa đo"
      ],
      procedure: [
        "Đặt chai nhựa vào khay để hứng",
        "Cho 2 thìa baking soda vào chai",
        "Thêm vài giọt màu thực phẩm đỏ",
        "Đổ nhanh 50ml giấm vào chai",
        "Quan sát phản ứng sủi bọt",
        "Ghi chép quan sát và thời gian phản ứng"
      ],
      observation: "Hỗn hợp sủi bọt mạnh, tạo ra khí CO2 và có màu đỏ như dung nham núi lửa thật.",
      explanation: "Phản ứng acid-base giữa giấm (acid acetic) và baking soda tạo ra khí CO2, nước và muối.",
      videoUrl: "https://youtube.com/watch?v=volcano-experiment",
      difficulty: "Cơ bản",
      estimatedTime: "15 phút",
      safetyNotes: [
        "Đeo kính bảo hộ",
        "Thực hiện ở nơi thoáng khí",
        "Không uống hỗn hợp",
        "Rửa tay sau thí nghiệm"
      ],
      tips: [
        "Sử dụng giấm ấm để phản ứng mạnh hơn",
        "Thêm một ít xà phòng rửa chén để tạo bọt nhiều hơn",
        "Thay đổi tỷ lệ để quan sát sự khác biệt"
      ]
    },
    {
      name: "Pin Từ Chanh",
      materials: [
        "Chanh tươi (2-3 quả)",
        "Đồng xu hoặc dây đồng",
        "Đinh kẽm hoặc ghim thép",
        "Dây điện nhỏ",
        "Đèn LED nhỏ",
        "Đồng hồ đo điện (multimeter)"
      ],
      procedure: [
        "Lăn chanh trên bàn để làm mềm",
        "Cắm đinh kẽm và đồng xu vào chanh",
        "Đảm bảo hai cực không chạm nhau",
        "Nối dây từ kẽm sang đồng của chanh khác",
        "Đo điện áp bằng multimeter",
        "Nối LED vào mạch và quan sát"
      ],
      observation: "Tạo ra điện áp khoảng 0.9V mỗi chanh, LED có thể sáng yếu với 2-3 chanh nối tiếp.",
      explanation: "Chanh chứa acid citric tạo thành pin galvanic với hai kim loại khác nhau (kẽm và đồng).",
      videoUrl: "https://youtube.com/watch?v=lemon-battery",
      difficulty: "Trung bình",
      estimatedTime: "20 phút",
      safetyNotes: [
        "Cẩn thận khi sử dụng đinh nhọn",
        "Không để kim loại chạm nhau trong chanh",
        "Rửa tay sau khi xử lý kim loại",
        "Không ăn chanh đã dùng làm thí nghiệm"
      ],
      tips: [
        "Chanh mềm cho hiệu suất tốt hơn",
        "Làm sạch kim loại trước khi sử dụng",
        "Nối nhiều chanh để tăng điện áp",
        "Thử với các loại trái cây khác"
      ]
    },
    {
      name: "Tạo Slime Khoa Học",
      materials: [
        "Keo PVA (white glue)",
        "Dung dịch borax",
        "Nước ấm",
        "Màu thực phẩm",
        "Thìa khuấy",
        "Bát trộn",
        "Găng tay"
      ],
      procedure: [
        "Đổ 100ml keo PVA vào bát",
        "Thêm màu thực phẩm theo sở thích",
        "Pha 1 thìa borax với 50ml nước ấm",
        "Từ từ thêm dung dịch borax vào keo",
        "Khuấy đều cho đến khi tạo thành slime",
        "Nhào bằng tay để có độ đàn hồi"
      ],
      observation: "Hỗn hợp từ lỏng chuyển thành chất có tính đàn hồi, có thể kéo dài và nảy.",
      explanation: "Borax tạo liên kết chéo giữa các phân tử polymer trong keo, tạo thành chất không Newtonian.",
      videoUrl: "https://youtube.com/watch?v=slime-science",
      difficulty: "Cơ bản",
      estimatedTime: "10 phút",
      safetyNotes: [
        "Đeo găng tay khi xử lý borax",
        "Không để trẻ em nuốt slime",
        "Rửa tay kỹ sau thí nghiệm",
        "Thực hiện ở nơi thoáng khí"
      ],
      tips: [
        "Thêm từ từ borax để kiểm soát độ sệt",
        "Slime có thể bảo quản trong hộp kín",
        "Thêm glitter để tạo hiệu ứng đẹp",
        "Thử nghiệm với tỷ lệ khác nhau"
      ]
    }
  ],
  labConfig: {
    virtualMode: true,
    simulationLevel: 'advanced',
    allowedMaterials: [
      "baking-soda", "vinegar", "food-coloring", "plastic-bottle",
      "lemon", "copper-coin", "zinc-nail", "wire", "led", "multimeter",
      "pva-glue", "borax", "warm-water", "mixing-bowl", "spoon", "gloves"
    ],
    safetyChecks: [
      "Đeo thiết bị bảo hộ",
      "Kiểm tra vật liệu an toàn",
      "Đọc hướng dẫn trước khi bắt đầu",
      "Có người lớn giám sát nếu cần"
    ]
  }
};
