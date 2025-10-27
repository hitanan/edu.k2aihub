'use client';

import React, { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { Maximize, Minimize } from 'lucide-react';
import { useUnifiedScoring } from '@/utils/unifiedScoring';

// Interface definitions
interface LabEquipment {
  id: string;
  name: string;
  type: 'microscope' | 'centrifuge' | 'incubator' | 'petri_dish' | 'pipette' | 'beaker' | 'pcr_machine';
  description: string;
  position: [number, number, number];
  color: string;
  size: [number, number, number];
  interactive: boolean;
  unlocked: boolean;
}

interface Experiment {
  id: number;
  title: string;
  description: string;
  objective: string;
  requiredEquipment: string[];
  procedure: string[];
  expectedResult: string;
  safetyNotes: string[];
  timeRequired: string;
  difficultyLevel: 'basic' | 'intermediate' | 'advanced';
}

interface GameState {
  currentExperiment: number;
  completedExperiments: number[];
  score: number;
  selectedEquipment: string[];
  experimentPhase: 'setup' | 'execution' | 'observation' | 'analysis' | 'complete';
  timeElapsed: number;
  labSafety: boolean;
  sampleAnimation: {
    isActive: boolean;
    fromEquipment: string | null;
    toEquipment: string | null;
    sampleType: 'liquid' | 'solid' | 'culture';
  };
}

// Lab equipment data
const LAB_EQUIPMENT: LabEquipment[] = [
  {
    id: 'microscope',
    name: 'Kính hiển vi',
    type: 'microscope',
    description: 'Quan sát mẫu vật ở độ phân giải cao',
    position: [-2, 0.9, 1], // Positioned properly on table: table at Y=0.975, microscope base height 0.6, so Y=1.575
    color: '#2D3748',
    size: [0.8, 1.2, 0.6],
    interactive: true,
    unlocked: true,
  },
  {
    id: 'centrifuge',
    name: 'Máy ly tâm',
    type: 'centrifuge',
    description: 'Tách các thành phần dựa trên khối lượng',
    position: [2, 0.9, 1], // Table at Y=0.975, centrifuge base height 0.3, so Y=1.275
    color: '#4A5568',
    size: [0.6, 0.8, 0.6],
    interactive: true,
    unlocked: true,
  },
  {
    id: 'incubator',
    name: 'Tủ ấm',
    type: 'incubator',
    description: 'Nuôi cấy vi sinh vật trong điều kiện kiểm soát',
    position: [0, 1.2, -2], // Table at Y=0.975, incubator base height 0.5, so Y=1.475
    color: '#E53E3E',
    size: [1.2, 1.2, 0.8],
    interactive: true,
    unlocked: true,
  },
  {
    id: 'pcr_machine',
    name: 'Máy PCR',
    type: 'pcr_machine',
    description: 'Nhân bản DNA bằng phản ứng chuỗi Polymerase',
    position: [-2, 1.0, -2], // Table at Y=0.975, PCR base height 0.3, so Y=1.275
    color: '#38B2AC',
    size: [1.0, 0.8, 0.8],
    interactive: true,
    unlocked: false,
  },
  {
    id: 'petri_dish_1',
    name: 'Đĩa petri #1',
    type: 'petri_dish',
    description: 'Nuôi cấy vi khuẩn và nấm',
    position: [0, 0.97, 1], // Positioned properly on table surface (table at Y=0.9, dish height=0.04, so Y=0.97)
    color: '#68D391',
    size: [0.3, 0.1, 0.3],
    interactive: true,
    unlocked: true,
  },
  {
    id: 'beaker_250ml',
    name: 'Cốc thủy tinh 250ml',
    type: 'beaker',
    description: 'Chứa và pha trộn dung dịch',
    position: [1, 1.1, 0], // Table at Y=0.975, beaker base height 0.125, so Y=1.1
    color: '#63B3ED',
    size: [0.2, 0.6, 0.2],
    interactive: true,
    unlocked: true,
  },
];

// Biotech experiments
const EXPERIMENTS: Experiment[] = [
  {
    id: 1,
    title: 'Quan sát tế bào vi khuẩn E.coli',
    description: 'Tìm hiểu cấu trúc tế bào vi khuẩn thông qua kính hiển vi',
    objective: 'Xác định và mô tả cấu trúc tế bào prokaryote',
    requiredEquipment: ['microscope', 'petri_dish_1'],
    procedure: [
      'Chuẩn bị slide với mẫu E.coli đã nhuộm màu',
      'Đặt slide lên bàn kính hiển vi',
      'Điều chỉnh độ phóng đại 400x',
      'Quan sát và ghi nhận cấu trúc tế bào',
      'Chụp ảnh và phân tích cấu trúc hình que không có nhân thực',
    ],
    expectedResult: 'Quan sát được tế bào hình que, không có nhân thực, có thể thấy rõ màng tế bào và cytoplasm',
    safetyNotes: ['Rửa tay trước và sau thí nghiệm', 'Không chạm trực tiếp vào mẫu', 'Khử trùng dụng cụ sau sử dụng'],
    timeRequired: '30 phút',
    difficultyLevel: 'basic',
  },
  {
    id: 2,
    title: 'Tách chiết DNA từ tế bào thực vật',
    description: 'Sử dụng phương pháp hóa học để tách DNA từ chuối',
    objective: 'Hiểu quy trình tách chiết và tinh chế DNA từ mô thực vật',
    requiredEquipment: ['beaker_250ml', 'centrifuge'],
    procedure: [
      'Nghiền 50g chuối chín với 100ml dung dịch muối-xà phòng (NaCl 1M + detergent)',
      'Lọc hỗn hợp qua vải mỏng để loại bỏ tạp chất thô',
      'Thêm từ từ 50ml cồn ethanol lạnh (-20°C) để kết tủa DNA',
      'Ly tâm ở 3000rpm trong 10 phút để thu DNA',
      'Quan sát và thu thập sợi DNA bằng đũa thủy tinh',
    ],
    expectedResult: 'DNA xuất hiện dưới dạng sợi dài màu trắng, có độ nhớt cao, có thể cuộn quanh đũa thủy tinh',
    safetyNotes: [
      'Đeo kính bảo hộ khi sử dụng hóa chất',
      'Sử dụng cồn trong phòng thông gió tốt',
      'Không ăn uống trong phòng thí nghiệm',
      'Xử lý cồn ethanol cẩn thận, tránh xa nguồn lửa',
    ],
    timeRequired: '45 phút',
    difficultyLevel: 'intermediate',
  },
  {
    id: 3,
    title: 'Nhân bản gen bằng PCR',
    description: 'Sử dụng kỹ thuật PCR để nhân bản đoạn DNA mục tiêu',
    objective: 'Nắm vững nguyên lý và ứng dụng của PCR trong sinh học phân tử',
    requiredEquipment: ['pcr_machine', 'centrifuge', 'beaker_250ml'],
    procedure: [
      'Chuẩn bị hỗn hợp phản ứng PCR: buffer, dNTPs, primer, Taq polymerase',
      'Thêm 1-10ng DNA template vào tube PCR 0.2ml',
      'Đặt tube vào máy PCR và thiết lập chu trình nhiệt',
      'Chạy 30-35 chu trình: 95°C/30s (denaturation) → 60°C/30s (annealing) → 72°C/60s (extension)',
      'Phân tích sản phẩm PCR bằng điện di gel agarose 1%',
    ],
    expectedResult: 'Băng DNA với kích thước mong đợi trên gel, cường độ băng tăng so với template ban đầu',
    safetyNotes: [
      'Bảo quản enzyme Taq polymerase ở -20°C',
      'Tránh contamination chéo giữa các mẫu',
      'Đeo găng tay khi xử lý mẫu DNA',
      'Sử dụng tips có filter để pipetting',
    ],
    timeRequired: '2 giờ',
    difficultyLevel: 'advanced',
  },
  {
    id: 4,
    title: 'Nuôi cấy vi khuẩn trên môi trường LB',
    description: 'Thực hành kỹ thuật nuôi cấy vi khuẩn trong điều kiện vô trùng',
    objective: 'Học cách tạo môi trường nuôi cấy và duy trì culture vi khuẩn',
    requiredEquipment: ['petri_dish_1', 'incubator', 'beaker_250ml'],
    procedure: [
      'Chuẩn bị môi trường LB agar: 10g tryptone, 5g yeast extract, 10g NaCl, 15g agar trong 1L nước',
      'Autoclave môi trường ở 121°C trong 15 phút',
      'Đổ môi trường vào đĩa petri trong điều kiện vô trùng',
      'Cấy vi khuẩn bằng kỹ thuật streak plate',
      'Ủ đĩa petri trong tủ ấm ở 37°C trong 16-24 giờ',
    ],
    expectedResult: 'Các colony vi khuẩn riêng lẻ mọc trên bề mặt agar, có thể phân biệt các đặc điểm hình thái',
    safetyNotes: [
      'Thực hiện tất cả thao tác trong laminar flow hood',
      'Khử trùng dụng cụ bằng cồn 70%',
      'Xử lý chất thải sinh học theo quy định',
      'Đeo găng tay và áo lab coat',
    ],
    timeRequired: '1 giờ chuẩn bị + 24 giờ ủ',
    difficultyLevel: 'intermediate',
  },
  {
    id: 5,
    title: 'Phân tích protein bằng SDS-PAGE',
    description: 'Tách và phân tích protein theo khối lượng phân tử',
    objective: 'Hiểu nguyên lý điện di protein và ứng dụng trong phân tích sinh học',
    requiredEquipment: ['beaker_250ml', 'centrifuge'],
    procedure: [
      'Chuẩn bị gel polyacrylamide 12% cho separating gel và 5% cho stacking gel',
      'Pha mẫu protein với sample buffer có SDS và β-mercaptoethanol',
      'Đun sôi mẫu ở 95°C trong 5 phút để biến tính protein',
      'Loading mẫu vào giếng gel và chạy điện di ở 120V trong 90 phút',
      'Nhuộm gel bằng Coomassie Blue và quan sát các băng protein',
    ],
    expectedResult: 'Các băng protein được tách theo khối lượng phân tử, từ lớn đến nhỏ từ trên xuống dưới',
    safetyNotes: [
      'β-mercaptoethanol có mùi mạnh, sử dụng trong tủ hút',
      'Điện di sử dụng điện áp cao, tránh chạm vào điện cực',
      'Acrylamide có độc tính, tránh hít phải và tiếp xúc da',
      'Xử lý gel nhuộm đúng cách sau thí nghiệm',
    ],
    timeRequired: '3 giờ',
    difficultyLevel: 'advanced',
  },
  {
    id: 6,
    title: 'Quan sát ty thể trong tế bào thực vật',
    description: 'Sử dụng kỹ thuật nhuộm màu đặc hiệu để quan sát ty thể',
    objective: 'Tìm hiểu cấu trúc và chức năng của ty thể trong tế bào sống',
    requiredEquipment: ['microscope', 'beaker_250ml'],
    procedure: [
      'Chuẩn bị lát cắt mỏng từ lá cây Elodea tươi',
      'Nhuộm mẫu bằng thuốc nhuộm Janus Green B (0.01%)',
      'Đặt lát cắt lên slide với cover slip',
      'Quan sát dưới kính hiển vi với độ phóng đại 1000x',
      'Ghi nhận sự phân bố và hình dạng của ty thể',
    ],
    expectedResult: 'Ty thể hiện ra dưới dạng các cấu trúc hình que nhỏ màu xanh lam, phân bố trong cytoplasm',
    safetyNotes: [
      'Thuốc nhuộm có thể gây kích ứng, tránh tiếp xúc da',
      'Sử dụng mẫu tươi để đảm bảo ty thể còn hoạt tính',
      'Làm sạch dụng cụ sau khi sử dụng thuốc nhuộm',
    ],
    timeRequired: '40 phút',
    difficultyLevel: 'intermediate',
  },
];

// Individual 3D equipment components
function Microscope3D({
  position,
  onClick,
  selected,
}: {
  position: [number, number, number];
  onClick: () => void;
  selected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && selected) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group position={position} onClick={onClick}>
      {/* Base */}
      <Cylinder ref={meshRef} args={[0.3, 0.4, 0.1]} position={[0, 0.05, 0]}>
        <meshStandardMaterial color="#2D3748" />
      </Cylinder>
      {/* Stand */}
      <Box args={[0.05, 0.8, 0.05]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#4A5568" />
      </Box>
      {/* Eyepiece */}
      <Cylinder args={[0.06, 0.06, 0.15]} position={[0, 0.9, 0]} rotation={[Math.PI / 6, 0, 0]}>
        <meshStandardMaterial color="#1A202C" />
      </Cylinder>
      {/* Objective lenses */}
      <Cylinder args={[0.04, 0.04, 0.08]} position={[0, 0.5, 0.1]}>
        <meshStandardMaterial color="#2D3748" />
      </Cylinder>
      {/* Stage */}
      <Box args={[0.25, 0.02, 0.25]} position={[0, 0.35, 0]}>
        <meshStandardMaterial color="#718096" />
      </Box>
    </group>
  );
}

function Centrifuge3D({
  position,
  onClick,
  selected,
}: {
  position: [number, number, number];
  onClick: () => void;
  selected: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current && selected) {
      meshRef.current.rotation.y += 0.1; // Spinning effect when selected
    }
  });

  return (
    <group position={position} onClick={onClick}>
      {/* Main body */}
      <Cylinder ref={meshRef} args={[0.25, 0.25, 0.6]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#4A5568" />
      </Cylinder>
      {/* Lid */}
      <Cylinder args={[0.26, 0.26, 0.05]} position={[0, 0.625, 0]}>
        <meshStandardMaterial color="#2D3748" />
      </Cylinder>
      {/* Control panel */}
      <Box args={[0.15, 0.1, 0.02]} position={[0.2, 0.4, 0]}>
        <meshStandardMaterial color="#1A202C" />
      </Box>
      {/* Display */}
      <Box args={[0.08, 0.04, 0.01]} position={[0.21, 0.4, 0]}>
        <meshStandardMaterial color="#00FF00" emissive="#004400" />
      </Box>
    </group>
  );
}

function Incubator3D({
  position,
  onClick,
  selected,
}: {
  position: [number, number, number];
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <group position={position} onClick={onClick}>
      {/* Main body */}
      <Box args={[1.0, 1.0, 0.6]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#E53E3E" />
      </Box>
      {/* Door */}
      <Box args={[0.8, 0.8, 0.02]} position={[0, 0.5, 0.31]}>
        <meshStandardMaterial color="#C53030" />
      </Box>
      {/* Handle */}
      <Box args={[0.02, 0.15, 0.02]} position={[0.35, 0.5, 0.32]}>
        <meshStandardMaterial color="#2D3748" />
      </Box>
      {/* Temperature display */}
      <Box args={[0.2, 0.1, 0.01]} position={[0, 0.85, 0.31]}>
        <meshStandardMaterial color="#000000" />
      </Box>
      <Text position={[0, 0.85, 0.32]} fontSize={0.04} color="#00FF00" anchorX="center" anchorY="middle">
        37°C
      </Text>
      {/* Glow effect when selected */}
      {selected && (
        <Box args={[1.1, 1.1, 0.7]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#FF6B6B" transparent opacity={0.3} />
        </Box>
      )}
    </group>
  );
}

function PCRMachine3D({
  position,
  onClick,
  selected,
  unlocked,
}: {
  position: [number, number, number];
  onClick: () => void;
  selected: boolean;
  unlocked: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && selected) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group position={position} onClick={unlocked ? onClick : undefined}>
      {/* Main body */}
      <Box ref={meshRef} args={[0.8, 0.6, 0.6]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color={unlocked ? '#38B2AC' : '#4A5568'} />
      </Box>
      {/* Sample block */}
      <Box args={[0.6, 0.1, 0.4]} position={[0, 0.65, 0]}>
        <meshStandardMaterial color={unlocked ? '#2C7A7B' : '#2D3748'} />
      </Box>
      {/* Control screen */}
      <Box args={[0.25, 0.15, 0.01]} position={[0.3, 0.4, 0.31]}>
        <meshStandardMaterial color={unlocked ? '#000000' : '#4A5568'} emissive={unlocked ? '#001100' : '#000000'} />
      </Box>
      {/* Status indicator */}
      {unlocked && (
        <Sphere args={[0.02]} position={[-0.3, 0.55, 0.31]}>
          <meshStandardMaterial color="#00FF00" emissive="#004400" />
        </Sphere>
      )}
      {/* Lock overlay for locked equipment */}
      {!unlocked && (
        <group>
          <Box args={[0.9, 0.7, 0.7]} position={[0, 0.3, 0]}>
            <meshStandardMaterial color="#000000" transparent opacity={0.5} />
          </Box>
          <Text position={[0, 0.3, 0.35]} fontSize={0.08} color="#FF4444" anchorX="center" anchorY="middle">
            🔒 LOCKED
          </Text>
        </group>
      )}
    </group>
  );
}

function PetriDish3D({
  position,
  onClick,
  selected,
}: {
  position: [number, number, number];
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <group position={position}>
      {/* Clickable area - expanded for better interaction */}
      <Box
        args={[0.3, 0.1, 0.3]}
        position={[0, 0.02, 0]}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        <meshStandardMaterial transparent opacity={0} />
      </Box>

      {/* Bottom dish */}
      <Cylinder args={[0.12, 0.12, 0.02]} position={[0, 0.01, 0]}>
        <meshStandardMaterial color="#68D391" transparent opacity={0.8} />
      </Cylinder>
      {/* Top lid */}
      <Cylinder args={[0.13, 0.13, 0.01]} position={[0, 0.035, 0]}>
        <meshStandardMaterial color="#48BB78" transparent opacity={0.6} />
      </Cylinder>
      {/* Culture growth (if selected) */}
      {selected && (
        <Cylinder args={[0.08, 0.08, 0.001]} position={[0, 0.021, 0]}>
          <meshStandardMaterial color="#38A169" emissive="#1A4A2E" />
        </Cylinder>
      )}
      {/* Sample spots for experiments */}
      {selected && (
        <>
          <Sphere args={[0.01]} position={[0.03, 0.022, 0.03]}>
            <meshStandardMaterial color="#22C55E" emissive="#0F4F3C" />
          </Sphere>
          <Sphere args={[0.008]} position={[-0.02, 0.022, -0.02]}>
            <meshStandardMaterial color="#16A34A" emissive="#0A3D2E" />
          </Sphere>
          <Sphere args={[0.006]} position={[0.04, 0.022, -0.03]}>
            <meshStandardMaterial color="#15803D" emissive="#073B21" />
          </Sphere>
        </>
      )}
    </group>
  );
}

function Beaker3D({
  position,
  onClick,
  selected,
}: {
  position: [number, number, number];
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <group position={position}>
      {/* Main clickable wrapper - most important fix */}
      <Box
        args={[0.25, 0.35, 0.25]}
        position={[0, 0.125, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'default';
        }}
      >
        <meshStandardMaterial transparent opacity={0} />
      </Box>

      {/* Glass beaker body - Visual only, non-interactive */}
      <Cylinder args={[0.08, 0.1, 0.25]} position={[0, 0.125, 0]}>
        <meshStandardMaterial color="#63B3ED" transparent opacity={0.7} />
      </Cylinder>

      {/* Liquid inside - Visual only, non-interactive */}
      <Cylinder args={[0.075, 0.095, 0.15]} position={[0, 0.075, 0]}>
        <meshStandardMaterial color={selected ? '#4299E1' : '#90CDF4'} transparent opacity={0.8} />
      </Cylinder>

      {/* Graduations - Visual elements only */}
      {[0.05, 0.1, 0.15, 0.2].map((height, index) => (
        <Box key={index} args={[0.12, 0.002, 0.002]} position={[0, height, 0]}>
          <meshStandardMaterial color="#2D3748" />
        </Box>
      ))}

      {/* Beaker rim - Visual only */}
      <Cylinder args={[0.1, 0.1, 0.02]} position={[0, 0.24, 0]}>
        <meshStandardMaterial color="#63B3ED" transparent opacity={0.9} />
      </Cylinder>

      {/* Selection indicator */}
      {selected && (
        <Box args={[0.3, 0.4, 0.3]} position={[0, 0.125, 0]}>
          <meshStandardMaterial color="#4299E1" transparent opacity={0.2} emissive="#4299E1" emissiveIntensity={0.1} />
        </Box>
      )}

      {/* Bubbling effect when selected */}
      {selected && (
        <>
          <Sphere args={[0.003]} position={[0.02, 0.12, 0.02]}>
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.8} />
          </Sphere>
          <Sphere args={[0.002]} position={[-0.01, 0.14, -0.01]}>
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.6} />
          </Sphere>
          <Sphere args={[0.004]} position={[0.03, 0.16, -0.02]}>
            <meshStandardMaterial color="#FFFFFF" transparent opacity={0.7} />
          </Sphere>
        </>
      )}
    </group>
  );
}

// Sample Animation Component for showing sample movement between equipment
function SampleAnimation({
  fromPosition,
  toPosition,
  sampleType = 'liquid',
}: {
  fromPosition: [number, number, number];
  toPosition: [number, number, number];
  sampleType?: 'liquid' | 'solid' | 'culture';
}) {
  const sampleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sampleRef.current) {
      // Animate sample movement from source to destination with arc trajectory
      const time = (state.clock.elapsedTime % 3) / 3; // 3-second cycle
      const progress = Math.min(time, 1);

      const currentPos = [
        fromPosition[0] + (toPosition[0] - fromPosition[0]) * progress,
        fromPosition[1] + (toPosition[1] - fromPosition[1]) * progress + Math.sin(progress * Math.PI) * 0.3,
        fromPosition[2] + (toPosition[2] - fromPosition[2]) * progress,
      ] as [number, number, number];

      sampleRef.current.position.set(...currentPos);

      // Add rotation for liquid samples
      if (sampleType === 'liquid') {
        sampleRef.current.rotation.z += 0.05;
      }
    }
  });

  const getSampleGeometry = () => {
    switch (sampleType) {
      case 'liquid':
        return <cylinderGeometry args={[0.02, 0.02, 0.1]} />;
      case 'solid':
        return <boxGeometry args={[0.03, 0.03, 0.02]} />;
      case 'culture':
        return <sphereGeometry args={[0.025]} />;
      default:
        return <sphereGeometry args={[0.02]} />;
    }
  };

  const getSampleColor = () => {
    switch (sampleType) {
      case 'liquid':
        return '#4FC3F7';
      case 'solid':
        return '#8BC34A';
      case 'culture':
        return '#FF9800';
      default:
        return '#4FC3F7';
    }
  };

  return (
    <mesh ref={sampleRef}>
      {getSampleGeometry()}
      <meshPhongMaterial
        color={getSampleColor()}
        transparent
        opacity={0.8}
        emissive={getSampleColor()}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Game Scene Component
function GameScene({
  onEquipmentSelect,
  selectedEquipment,
  sampleAnimation,
}: {
  onEquipmentSelect: (equipmentId: string) => void;
  selectedEquipment: string[];
  sampleAnimation: {
    isActive: boolean;
    fromEquipment: string | null;
    toEquipment: string | null;
    sampleType: 'liquid' | 'solid' | 'culture';
  };
}) {
  // Get equipment positions for animation
  const getEquipmentPosition = (equipmentId: string): [number, number, number] => {
    const equipment = LAB_EQUIPMENT.find((eq) => eq.id === equipmentId);
    return equipment ? equipment.position : [0, 1, 0];
  };

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />

      {/* Lab Floor */}
      <Plane args={[12, 12]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#F7FAFC" />
      </Plane>

      {/* Main Lab Bench - Elevated for better visibility */}
      <Box args={[8, 0.15, 4]} position={[0, 0.8, 0]} receiveShadow castShadow>
        <meshStandardMaterial color="#E2E8F0" />
      </Box>

      {/* Lab Cabinet/Storage in background */}
      <Box args={[10, 2, 0.5]} position={[0, 1.0, -3]} castShadow>
        <meshStandardMaterial color="#CBD5E0" />
      </Box>

      {/* Side benches for additional equipment */}
      <Box args={[3, 0.1, 2]} position={[-4.5, 0.8, 1]} receiveShadow castShadow>
        <meshStandardMaterial color="#E2E8F0" />
      </Box>
      <Box args={[3, 0.1, 2]} position={[4.5, 0.8, 1]} receiveShadow castShadow>
        <meshStandardMaterial color="#E2E8F0" />
      </Box>

      {/* Sample Animation */}
      {sampleAnimation.isActive && sampleAnimation.fromEquipment && sampleAnimation.toEquipment && (
        <SampleAnimation
          fromPosition={getEquipmentPosition(sampleAnimation.fromEquipment)}
          toPosition={getEquipmentPosition(sampleAnimation.toEquipment)}
          sampleType={sampleAnimation.sampleType}
        />
      )}

      {/* Lab Equipment */}
      {LAB_EQUIPMENT.map((equipment) => {
        const isSelected = selectedEquipment.includes(equipment.id);

        switch (equipment.type) {
          case 'microscope':
            return (
              <Microscope3D
                key={equipment.id}
                position={equipment.position}
                onClick={() => onEquipmentSelect(equipment.id)}
                selected={isSelected}
              />
            );
          case 'centrifuge':
            return (
              <Centrifuge3D
                key={equipment.id}
                position={equipment.position}
                onClick={() => onEquipmentSelect(equipment.id)}
                selected={isSelected}
              />
            );
          case 'incubator':
            return (
              <Incubator3D
                key={equipment.id}
                position={equipment.position}
                onClick={() => onEquipmentSelect(equipment.id)}
                selected={isSelected}
              />
            );
          case 'pcr_machine':
            return (
              <PCRMachine3D
                key={equipment.id}
                position={equipment.position}
                onClick={() => onEquipmentSelect(equipment.id)}
                selected={isSelected}
                unlocked={equipment.unlocked}
              />
            );
          case 'petri_dish':
            return (
              <PetriDish3D
                key={equipment.id}
                position={equipment.position}
                onClick={() => onEquipmentSelect(equipment.id)}
                selected={isSelected}
              />
            );
          case 'beaker':
            return (
              <Beaker3D
                key={equipment.id}
                position={equipment.position}
                onClick={() => onEquipmentSelect(equipment.id)}
                selected={isSelected}
              />
            );
          default:
            return null;
        }
      })}

      {/* Lab Walls */}
      <Box args={[0.2, 3, 12]} position={[-6, 1.5, 0]}>
        <meshStandardMaterial color="#E2E8F0" />
      </Box>
      <Box args={[12, 3, 0.2]} position={[0, 1.5, -6]}>
        <meshStandardMaterial color="#E2E8F0" />
      </Box>

      {/* Safety Equipment */}
      <Box args={[0.3, 1.5, 0.3]} position={[-5, 0.75, -5]} receiveShadow>
        <meshStandardMaterial color="#E53E3E" />
      </Box>
      <Text position={[-5, 1.6, -5]} fontSize={0.1} color="#FFFFFF" anchorX="center" anchorY="middle">
        🧯 FIRE
      </Text>

      {/* Camera Controls */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  );
}

// Main Biotech Lab Simulation Component
export default function BiotechLabSimulation3D() {
  const [gameStarted, setGameStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { recordGameScore } = useUnifiedScoring();

  const [gameState, setGameState] = useState<GameState>({
    currentExperiment: 1,
    completedExperiments: [],
    score: 0,
    selectedEquipment: [],
    experimentPhase: 'setup',
    timeElapsed: 0,
    labSafety: true,
    sampleAnimation: {
      isActive: false,
      fromEquipment: null,
      toEquipment: null,
      sampleType: 'liquid',
    },
  });
  const [showProcedure, setShowProcedure] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const currentExperiment = EXPERIMENTS.find((exp) => exp.id === gameState.currentExperiment)!;

  // Fullscreen functionality
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Equipment selection
  const handleEquipmentSelect = useCallback((equipmentId: string) => {
    const equipment = LAB_EQUIPMENT.find((eq) => eq.id === equipmentId);
    if (!equipment?.unlocked) return;

    setGameState((prev) => {
      const newSelected = prev.selectedEquipment.includes(equipmentId)
        ? prev.selectedEquipment.filter((id) => id !== equipmentId)
        : [...prev.selectedEquipment, equipmentId];

      return {
        ...prev,
        selectedEquipment: newSelected,
        score: prev.score + (newSelected.length > prev.selectedEquipment.length ? 10 : -5),
      };
    });
  }, []);

  // Check if current experiment requirements are met
  const canStartExperiment =
    gameState.selectedEquipment.length > 0 &&
    currentExperiment.requiredEquipment.every((req) => gameState.selectedEquipment.includes(req));

  // Start experiment
  const startExperiment = () => {
    if (!canStartExperiment) return;

    setGameState((prev) => ({
      ...prev,
      experimentPhase: 'execution',
      score: prev.score + 50,
    }));
    setShowProcedure(true);
  };

  // Next step in procedure
  const nextStep = () => {
    if (currentStep < currentExperiment.procedure.length - 1) {
      // Show sample animation between equipment for certain steps
      const currentStepText = currentExperiment.procedure[currentStep];
      const nextStepText = currentExperiment.procedure[currentStep + 1];

      // Determine animation based on procedure text
      let sampleAnimation = null;

      if (currentStepText.includes('slide') && nextStepText.includes('kính hiển vi')) {
        sampleAnimation = {
          isActive: true,
          fromEquipment: 'petri_dish_1',
          toEquipment: 'microscope',
          sampleType: 'solid' as const,
        };
      } else if (currentStepText.includes('ly tâm') && nextStepText.includes('DNA')) {
        sampleAnimation = {
          isActive: true,
          fromEquipment: 'beaker_250ml',
          toEquipment: 'centrifuge',
          sampleType: 'liquid' as const,
        };
      } else if (currentStepText.includes('tube') && nextStepText.includes('PCR')) {
        sampleAnimation = {
          isActive: true,
          fromEquipment: 'beaker_250ml',
          toEquipment: 'pcr_machine',
          sampleType: 'liquid' as const,
        };
      } else if (currentStepText.includes('ủ') && nextStepText.includes('tủ ấm')) {
        sampleAnimation = {
          isActive: true,
          fromEquipment: 'petri_dish_1',
          toEquipment: 'incubator',
          sampleType: 'culture' as const,
        };
      }

      setCurrentStep((prev) => prev + 1);
      setGameState((prev) => ({
        ...prev,
        score: prev.score + 10,
        sampleAnimation: sampleAnimation || {
          isActive: false,
          fromEquipment: null,
          toEquipment: null,
          sampleType: 'liquid',
        },
      }));

      // Stop animation after 3 seconds
      if (sampleAnimation) {
        setTimeout(() => {
          setGameState((prev) => ({
            ...prev,
            sampleAnimation: {
              isActive: false,
              fromEquipment: null,
              toEquipment: null,
              sampleType: 'liquid',
            },
          }));
        }, 3000);
      }
    } else {
      completeExperiment();
    }
  };

  // Complete experiment
  const completeExperiment = () => {
    const newScore = gameState.score + 100;

    setGameState((prev) => ({
      ...prev,
      experimentPhase: 'complete',
      completedExperiments: [...prev.completedExperiments, prev.currentExperiment],
      score: newScore,
    }));

    // Record game score for unified system integration
    recordGameScore('biotech-lab-simulation-3d', newScore, '3d-game');

    // Unlock PCR machine after completing basic experiments
    if (gameState.currentExperiment <= 2) {
      LAB_EQUIPMENT.find((eq) => eq.id === 'pcr_machine')!.unlocked = true;
    }
  };

  // Next experiment
  const nextExperiment = () => {
    if (gameState.currentExperiment < EXPERIMENTS.length) {
      setGameState((prev) => ({
        ...prev,
        currentExperiment: prev.currentExperiment + 1,
        selectedEquipment: [],
        experimentPhase: 'setup',
      }));
      setShowProcedure(false);
      setCurrentStep(0);
    }
  };

  const startGame = () => setGameStarted(true);

  if (!gameStarted) {
    return (
      <div className="w-full h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            🧪 Biotech Lab Simulation 3D
          </h1>

          <p className="text-xl mb-8 text-gray-300">
            Khám phá thế giới sinh học phân tử trong phòng thí nghiệm 3D tương tác
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-800/30 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-green-300 mb-3">🔬 Thí nghiệm thực tế</h3>
              <p className="text-gray-300">
                Thực hiện các thí nghiệm sinh học phân tử như quan sát tế bào, tách DNA, và PCR
              </p>
            </div>
            <div className="bg-blue-800/30 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">🥽 Môi trường 3D</h3>
              <p className="text-gray-300">Tương tác với thiết bị phòng lab thật trong không gian 3D sống động</p>
            </div>
            <div className="bg-purple-800/30 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-300 mb-3">🎓 Học từ thực hành</h3>
              <p className="text-gray-300">Nắm vững kỹ thuật sinh học phân tử qua trải nghiệm thực hành</p>
            </div>
          </div>

          <button
            onClick={startGame}
            className="px-12 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 Vào phòng thí nghiệm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* HUD - Experiment Information */}
      <div className="absolute top-4 left-4 z-10 bg-black/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-green-400/50 max-w-sm">
        <h2 className="text-lg font-bold text-green-300 mb-2">🧪 Thí nghiệm {gameState.currentExperiment}</h2>
        <h3 className="text-sm font-semibold text-yellow-300 mb-2">{currentExperiment.title}</h3>
        <p className="text-xs text-gray-300 mb-2">{currentExperiment.objective}</p>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-purple-300">💎 {gameState.score} điểm</span>
          <span className="text-blue-300">⏱️ {currentExperiment.timeRequired}</span>
        </div>
        <div className="mt-2">
          <span
            className={`text-xs px-2 py-1 rounded ${
              currentExperiment.difficultyLevel === 'basic'
                ? 'bg-green-600'
                : currentExperiment.difficultyLevel === 'intermediate'
                  ? 'bg-yellow-600'
                  : 'bg-red-600'
            }`}
          >
            {currentExperiment.difficultyLevel === 'basic'
              ? 'Cơ bản'
              : currentExperiment.difficultyLevel === 'intermediate'
                ? 'Trung bình'
                : 'Nâng cao'}
          </span>
        </div>
      </div>

      {/* Equipment Status Panel */}
      <div className="absolute top-4 right-4 z-10 bg-black/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-blue-400/50 max-w-sm">
        <h3 className="text-lg font-bold text-blue-300 mb-3">🔧 Thiết bị cần thiết</h3>
        <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
          {currentExperiment.requiredEquipment.map((equipId) => {
            const equipment = LAB_EQUIPMENT.find((eq) => eq.id === equipId);
            const isSelected = gameState.selectedEquipment.includes(equipId);
            const isUnlocked = equipment?.unlocked;

            return (
              <div
                key={equipId}
                className={`p-2 rounded text-xs ${
                  isSelected
                    ? 'bg-green-900/50 border border-green-400'
                    : !isUnlocked
                      ? 'bg-red-900/30 border border-red-600'
                      : 'bg-gray-800/50 border border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{equipment?.name}</span>
                  {isSelected ? '✅' : !isUnlocked ? '🔒' : '⭕'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {canStartExperiment && gameState.experimentPhase === 'setup' && (
            <button
              onClick={startExperiment}
              className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-semibold transition-colors"
            >
              🧪 Bắt đầu thí nghiệm
            </button>
          )}

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreen}
            className="hidden md:block px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold transition-colors"
            title={isFullscreen ? 'Thoát fullscreen' : 'Chế độ toàn màn hình'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Procedure Panel */}
      {showProcedure && (
        <div className="absolute bottom-4 left-4 z-10 bg-black/90 rounded-2xl p-4 backdrop-blur-sm border-2 border-yellow-400/50 max-w-lg">
          <h3 className="text-lg font-bold text-yellow-300 mb-3">📋 Quy trình thí nghiệm</h3>
          <div className="space-y-2 mb-4">
            {currentExperiment.procedure.map((step, index) => (
              <div
                key={index}
                className={`p-2 rounded text-sm ${
                  index === currentStep
                    ? 'bg-yellow-900/50 border border-yellow-400'
                    : index < currentStep
                      ? 'bg-green-900/30 border border-green-600'
                      : 'bg-gray-800/30 border border-gray-600'
                }`}
              >
                <span className="font-semibold">Bước {index + 1}:</span> {step}
                {index === currentStep && <span className="ml-2">👈</span>}
                {index < currentStep && <span className="ml-2">✅</span>}
              </div>
            ))}
          </div>

          {gameState.experimentPhase !== 'complete' && (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg text-sm font-semibold transition-colors"
            >
              {currentStep < currentExperiment.procedure.length - 1 ? 'Bước tiếp theo' : 'Hoàn thành'}
            </button>
          )}

          {gameState.experimentPhase === 'complete' && (
            <div className="space-y-2">
              <div className="p-3 bg-green-900/50 border border-green-400 rounded-lg">
                <h4 className="font-semibold text-green-300">✅ Thí nghiệm hoàn thành!</h4>
                <p className="text-sm text-gray-300 mt-1">{currentExperiment.expectedResult}</p>
              </div>
              {gameState.currentExperiment < EXPERIMENTS.length && (
                <button
                  onClick={nextExperiment}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
                >
                  Thí nghiệm tiếp theo 🔬
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Safety Notes Panel */}
      {gameState.experimentPhase !== 'setup' && (
        <div className="absolute bottom-4 right-4 z-10 bg-red-900/80 rounded-2xl p-4 backdrop-blur-sm border-2 border-red-400/50 max-w-xs">
          <h3 className="text-sm font-bold text-red-300 mb-2">⚠️ An toàn phòng lab</h3>
          <ul className="text-xs text-gray-300 space-y-1">
            {currentExperiment.safetyNotes.map((note, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-400 mr-1">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 5, 8], fov: 75 }} shadows style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <GameScene
            onEquipmentSelect={handleEquipmentSelect}
            selectedEquipment={gameState.selectedEquipment}
            sampleAnimation={gameState.sampleAnimation}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
