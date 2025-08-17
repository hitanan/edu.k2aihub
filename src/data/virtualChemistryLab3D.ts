// Virtual Chemistry Lab 3D Game Data
export interface VirtualChemistryLab3DGameData {
  molecules: Array<{
    id: string;
    name: string;
    formula: string;
    atoms: Array<{
      element: string;
      position: { x: number; y: number; z: number };
    }>;
    bonds: Array<{
      atom1: number;
      atom2: number;
      type: 'single' | 'double' | 'triple';
    }>;
    description: string;
    points: number;
  }>;
  equipment: Array<{
    id: string;
    name: string;
    description: string;
    model: string;
    interactive: boolean;
  }>;
  challenges: Array<{
    id: string;
    title: string;
    description: string;
    targetMolecule: string;
    difficulty: 'easy' | 'medium' | 'hard';
    points: number;
    hints: string[];
  }>;
}

export const VIRTUAL_CHEMISTRY_LAB_3D_DATA: VirtualChemistryLab3DGameData = {
  molecules: [
    {
      id: 'water',
      name: 'Nước (H₂O)',
      formula: 'H₂O',
      atoms: [
        { element: 'H', position: { x: -1.5, y: 0, z: 0 } },
        { element: 'O', position: { x: 0, y: 0, z: 0 } },
        { element: 'H', position: { x: 1.5, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 1, atom2: 2, type: 'single' }
      ],
      description: 'Phân tử nước cơ bản với 2 nguyên tử Hydrogen và 1 nguyên tử Oxygen',
      points: 100
    },
    {
      id: 'chlorine',
      name: 'Khí Chlorine (Cl₂)',
      formula: 'Cl₂',
      atoms: [
        { element: 'Cl', position: { x: -1.2, y: 0, z: 0 } },
        { element: 'Cl', position: { x: 1.2, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' }
      ],
      description: 'Khí chlorine độc - dùng làm chất tẩy và khử trùng',
      points: 95
    },
    {
      id: 'methane',
      name: 'Khí Methane (CH₄)',
      formula: 'CH₄',
      atoms: [
        { element: 'C', position: { x: 0, y: 0, z: 0 } },
        { element: 'H', position: { x: 1.1, y: 1.1, z: 1.1 } },
        { element: 'H', position: { x: -1.1, y: -1.1, z: 1.1 } },
        { element: 'H', position: { x: -1.1, y: 1.1, z: -1.1 } },
        { element: 'H', position: { x: 1.1, y: -1.1, z: -1.1 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 0, atom2: 2, type: 'single' },
        { atom1: 0, atom2: 3, type: 'single' },
        { atom1: 0, atom2: 4, type: 'single' }
      ],
      description: 'Phân tử khí methane với 1 carbon và 4 hydrogen',
      points: 150
    },
    {
      id: 'co2',
      name: 'Khí Carbon Dioxide (CO₂)',
      formula: 'CO₂',
      atoms: [
        { element: 'O', position: { x: -2, y: 0, z: 0 } },
        { element: 'C', position: { x: 0, y: 0, z: 0 } },
        { element: 'O', position: { x: 2, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'double' },
        { atom1: 1, atom2: 2, type: 'double' }
      ],
      description: 'Khí CO₂ với liên kết đôi giữa Carbon và Oxygen',
      points: 120
    },
    {
      id: 'ammonia',
      name: 'Khí Ammonia (NH₃)',
      formula: 'NH₃',
      atoms: [
        { element: 'N', position: { x: 0, y: 0, z: 0 } },
        { element: 'H', position: { x: 1, y: 1, z: 0 } },
        { element: 'H', position: { x: -1, y: 1, z: 0 } },
        { element: 'H', position: { x: 0, y: -1, z: 1 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 0, atom2: 2, type: 'single' },
        { atom1: 0, atom2: 3, type: 'single' }
      ],
      description: 'Phân tử ammonia với cấu trúc hình kim tự tháp',
      points: 130
    },
    {
      id: 'oxygen',
      name: 'Khí Oxygen (O₂)',
      formula: 'O₂',
      atoms: [
        { element: 'O', position: { x: -1, y: 0, z: 0 } },
        { element: 'O', position: { x: 1, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'double' }
      ],
      description: 'Phân tử khí oxygen với liên kết đôi',
      points: 90
    },
    {
      id: 'hydrogen',
      name: 'Khí Hydrogen (H₂)',
      formula: 'H₂',
      atoms: [
        { element: 'H', position: { x: -0.5, y: 0, z: 0 } },
        { element: 'H', position: { x: 0.5, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' }
      ],
      description: 'Phân tử khí hydrogen đơn giản nhất',
      points: 70
    },
    {
      id: 'ethane',
      name: 'Khí Ethane (C₂H₆)',
      formula: 'C₂H₆',
      atoms: [
        { element: 'C', position: { x: -1, y: 0, z: 0 } },
        { element: 'C', position: { x: 1, y: 0, z: 0 } },
        { element: 'H', position: { x: -2, y: 1, z: 0 } },
        { element: 'H', position: { x: -2, y: -1, z: 0 } },
        { element: 'H', position: { x: -1, y: 0, z: 1.5 } },
        { element: 'H', position: { x: 2, y: 1, z: 0 } },
        { element: 'H', position: { x: 2, y: -1, z: 0 } },
        { element: 'H', position: { x: 1, y: 0, z: 1.5 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 0, atom2: 2, type: 'single' },
        { atom1: 0, atom2: 3, type: 'single' },
        { atom1: 0, atom2: 4, type: 'single' },
        { atom1: 1, atom2: 5, type: 'single' },
        { atom1: 1, atom2: 6, type: 'single' },
        { atom1: 1, atom2: 7, type: 'single' }
      ],
      description: 'Hydrocarbon đơn giản với hai nguyên tử carbon',
      points: 170
    },
    {
      id: 'hcl',
      name: 'Axit Hydrochloric (HCl)',
      formula: 'HCl',
      atoms: [
        { element: 'H', position: { x: -1, y: 0, z: 0 } },
        { element: 'Cl', position: { x: 1, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' }
      ],
      description: 'Axit mạnh thường dùng trong phòng thí nghiệm',
      points: 110
    },
    {
      id: 'nacl',
      name: 'Muối ăn (NaCl)',
      formula: 'NaCl',
      atoms: [
        { element: 'Na', position: { x: -1.2, y: 0, z: 0 } },
        { element: 'Cl', position: { x: 1.2, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' }
      ],
      description: 'Muối ăn - hợp chất ion phổ biến',
      points: 100
    },
    {
      id: 'ethanol',
      name: 'Ethanol (C₂H₅OH)',
      formula: 'C₂H₅OH',
      atoms: [
        { element: 'C', position: { x: -2, y: 0, z: 0 } },
        { element: 'C', position: { x: 0, y: 0, z: 0 } },
        { element: 'O', position: { x: 2, y: 0, z: 0 } },
        { element: 'H', position: { x: -3, y: 1, z: 0 } },
        { element: 'H', position: { x: -3, y: -1, z: 0 } },
        { element: 'H', position: { x: -2, y: 0, z: 1.5 } },
        { element: 'H', position: { x: 0, y: 1.5, z: 0 } },
        { element: 'H', position: { x: 0, y: -1.5, z: 0 } },
        { element: 'H', position: { x: 3, y: 0, z: 0 } }
      ],
      bonds: [
        { atom1: 0, atom2: 1, type: 'single' },
        { atom1: 1, atom2: 2, type: 'single' },
        { atom1: 0, atom2: 3, type: 'single' },
        { atom1: 0, atom2: 4, type: 'single' },
        { atom1: 0, atom2: 5, type: 'single' },
        { atom1: 1, atom2: 6, type: 'single' },
        { atom1: 1, atom2: 7, type: 'single' },
        { atom1: 2, atom2: 8, type: 'single' }
      ],
      description: 'Rượu ethyl - alcohol phổ biến',
      points: 180
    }
  ],
  equipment: [
    {
      id: 'beaker',
      name: 'Cốc thủy tinh',
      description: 'Dụng cụ chứa chất lỏng cơ bản',
      model: 'beaker',
      interactive: true
    },
    {
      id: 'flask',
      name: 'Bình tam giác',
      description: 'Bình tam giác cho phản ứng hóa học',
      model: 'flask',
      interactive: true
    },
    {
      id: 'burner',
      name: 'Đèn cồn',
      description: 'Nguồn nhiệt cho thí nghiệm',
      model: 'burner',
      interactive: true
    },
    {
      id: 'pipette',
      name: 'Pipette',
      description: 'Dụng cụ đo và chuyển chất lỏng chính xác',
      model: 'pipette',
      interactive: true
    },
    {
      id: 'ph-meter',
      name: 'Máy đo pH',
      description: 'Thiết bị đo độ pH của dung dịch',
      model: 'ph-meter',
      interactive: true
    },
    {
      id: 'test-tube',
      name: 'Ống nghiệm',
      description: 'Ống thủy tinh nhỏ cho thí nghiệm',
      model: 'test-tube',
      interactive: true
    },
    {
      id: 'microscope',
      name: 'Kính hiển vi',
      description: 'Thiết bị quan sát cấu trúc phân tử',
      model: 'microscope',
      interactive: true
    }
  ],
  challenges: [
    {
      id: 'build-chlorine',
      title: 'Tạo khí Chlorine',
      description: 'Xây dựng phân tử Cl₂ - khí độc màu xanh lục',
      targetMolecule: 'chlorine',
      difficulty: 'easy',
      points: 95,
      hints: [
        'Hai nguyên tử chlorine liên kết với nhau',
        'Chlorine có màu xanh lục đặc trưng',
        'Sử dụng phím "L" để thêm nguyên tử Chlorine',
        'Khí này rất độc, trong thực tế cần thận trọng!'
      ]
    },
    {
      id: 'build-water',
      title: 'Tạo phân tử nước',
      description: 'Sử dụng 2 nguyên tử H và 1 nguyên tử O để tạo H₂O',
      targetMolecule: 'water',
      difficulty: 'easy',
      points: 100,
      hints: [
        'Oxygen ở giữa, hai Hydrogen ở hai bên',
        'Góc liên kết H-O-H khoảng 104.5°',
        'Nước có hình dạng cong (bent shape)'
      ]
    },
    {
      id: 'build-methane',
      title: 'Tạo phân tử methane',
      description: 'Tạo CH₄ với cấu trúc tứ diện',
      targetMolecule: 'methane',
      difficulty: 'medium',
      points: 150,
      hints: [
        'Carbon ở trung tâm',
        'Bốn hydrogen tạo thành hình tứ diện xung quanh carbon',
        'Góc liên kết C-H là 109.5°'
      ]
    },
    {
      id: 'build-co2',
      title: 'Tạo khí Carbon Dioxide',
      description: 'Xây dựng phân tử CO₂ với liên kết đôi',
      targetMolecule: 'co2',
      difficulty: 'medium',
      points: 120,
      hints: [
        'Carbon ở giữa với hai Oxygen',
        'Sử dụng liên kết đôi C=O',
        'CO₂ có cấu trúc thẳng (linear)'
      ]
    },
    {
      id: 'build-ammonia',
      title: 'Tạo khí Ammonia',
      description: 'Xây dựng NH₃ với cấu trúc kim tự tháp',
      targetMolecule: 'ammonia',
      difficulty: 'hard',
      points: 130,
      hints: [
        'Nitrogen ở trung tâm',
        'Ba hydrogen tạo hình kim tự tháp',
        'Nitrogen có một cặp electron tự do'
      ]
    },
    {
      id: 'build-oxygen',
      title: 'Tạo khí Oxygen',
      description: 'Xây dựng phân tử O₂ với liên kết đôi',
      targetMolecule: 'oxygen',
      difficulty: 'easy',
      points: 90,
      hints: [
        'Hai nguyên tử oxygen liên kết với nhau',
        'Sử dụng liên kết đôi O=O',
        'Oxygen là khí cần thiết cho hô hấp'
      ]
    },
    {
      id: 'build-hydrogen',
      title: 'Tạo khí Hydrogen',
      description: 'Xây dựng phân tử H₂ đơn giản nhất',
      targetMolecule: 'hydrogen',
      difficulty: 'easy',
      points: 70,
      hints: [
        'Hai nguyên tử hydrogen liên kết đơn',
        'Phân tử nhẹ nhất trong tự nhiên',
        'Khí cháy được, tạo ra nước khi cháy'
      ]
    },
    {
      id: 'build-ethane',
      title: 'Tạo khí Ethane',
      description: 'Xây dựng C₂H₆ - hydrocarbon với 2 carbon',
      targetMolecule: 'ethane',
      difficulty: 'hard',
      points: 170,
      hints: [
        'Hai carbon liên kết với nhau ở giữa',
        'Mỗi carbon có 3 hydrogen',
        'Cấu trúc đối xứng, có thể xoay quanh liên kết C-C'
      ]
    },
    {
      id: 'build-hcl',
      title: 'Tạo axit Hydrochloric',
      description: 'Xây dựng HCl - axit mạnh',
      targetMolecule: 'hcl',
      difficulty: 'easy',
      points: 110,
      hints: [
        'Hydrogen liên kết với Chlorine',
        'Liên kết cực tính mạnh',
        'Tan trong nước tạo dung dịch axit mạnh'
      ]
    },
    {
      id: 'build-nacl',
      title: 'Tạo muối ăn',
      description: 'Xây dựng NaCl - hợp chất ion',
      targetMolecule: 'nacl',
      difficulty: 'medium',
      points: 100,
      hints: [
        'Sodium (Na) và Chlorine (Cl)',
        'Liên kết ion giữa kim loại và phi kim',
        'Muối ăn hàng ngày chúng ta sử dụng'
      ]
    },
    {
      id: 'build-ethanol',
      title: 'Tạo Ethanol',
      description: 'Xây dựng C₂H₅OH - rượu ethyl',
      targetMolecule: 'ethanol',
      difficulty: 'hard',
      points: 180,
      hints: [
        'Hai carbon liên kết, một nhóm -OH',
        'Carbon đầu có 3 hydrogen, carbon thứ hai có 2 hydrogen',
        'Nhóm hydroxyl (-OH) tạo tính chất của alcohol'
      ]
    }
  ]
};
