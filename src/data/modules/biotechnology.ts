import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export interface BiotechnologyLesson extends BaseLessonData {
  biotechField: string;
  labTechniques: string[];
}

export const biotechnologyLessons: BiotechnologyLesson[] = [
  {
    id: 'biotech-fundamentals-genetic-engineering',
    title: 'Bài 1: Nguyên tắc cơ bản Công nghệ sinh học & Kỹ thuật di truyền',
    description:
      'Khám phá các nguyên tắc cơ bản của công nghệ sinh học, các kỹ thuật kỹ thuật di truyền, thao tác DNA, và chỉnh sửa gen với CRISPR. Học các nguyên tắc cơ bản của sinh học phân tử và đạo đức sinh học.',
    videoUrl: 'https://www.youtube.com/watch?v=RrTCjp2015M',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
    difficulty: 'Trung bình',
    duration: '150 phút',
    biotechField: 'Kỹ thuật di truyền',
    objectives: [
      'Hiểu các nguyên tắc cơ bản và ứng dụng của công nghệ sinh học trong các ngành công nghiệp.',
      'Nắm vững các nguyên tắc kỹ thuật di truyền và kỹ thuật sinh học phân tử.',
      'Tìm hiểu công nghệ chỉnh sửa gen CRISPR và các ứng dụng mang tính cách mạng của nó.',
      'Khám phá đạo đức sinh học, các quy trình an toàn và khung pháp lý.',
      'Áp dụng các kỹ thuật biến đổi di truyền để giải quyết vấn đề trong thế giới thực.',
    ],
    prerequisites: [
      'Kiến thức sinh học cơ bản (DNA, RNA, protein)',
      'Hiểu biết về sinh học tế bào',
      'Các khái niệm hóa học trung học',
      'Nhận thức về phương pháp khoa học và an toàn trong phòng thí nghiệm',
    ],
    labTechniques: [
      'PCR (Phản ứng chuỗi Polymerase)',
      'Điện di trên gel',
      'Chiết xuất và tinh sạch DNA',
      'Biến nạp trong E. coli',
      'Chỉnh sửa gen CRISPR-Cas9',
      'Biểu hiện và tinh sạch Protein',
    ],
    exercises: [
      {
        title: 'Phòng thí nghiệm ảo Chỉnh sửa gen CRISPR - Kỹ thuật sản xuất Insulin',
        description:
          'Thiết kế và thực hiện một thí nghiệm chỉnh sửa gen CRISPR hoàn chỉnh để tăng cường sản xuất insulin trong tế bào vi khuẩn, bao gồm thiết kế mục tiêu, tạo RNA dẫn đường và các ứng dụng trị liệu.',
        difficulty: 'Nâng cao',
        solution:
          '# Kỹ thuật di truyền CRISPR để tăng cường sản xuất Insulin: Giao thức phòng thí nghiệm hoàn chỉnh\n\n## 1. Tổng quan dự án & Mục tiêu\n\n### Mục tiêu khoa học:\nKỹ thuật vi khuẩn E. coli để sản xuất insulin người ở mức độ tăng cường bằng công nghệ chỉnh sửa gen CRISPR-Cas9, tạo ra một hệ thống sản xuất insulin hiệu quả và tiết kiệm chi phí hơn cho việc điều trị bệnh tiểu đường.\n\n### Nền tảng khoa học:\n```\nTác động của bệnh tiểu đường:\n- 463 triệu người trên toàn thế giới mắc bệnh tiểu đường\n- Bệnh tiểu đường loại 1 cần tiêm insulin hàng ngày\n- Chi phí insulin hiện tại: 100-300 USD+ mỗi tháng\n- Giải pháp công nghệ sinh học: Vi khuẩn được biến đổi gen sản xuất insulin người\n\nCông nghệ CRISPR:\n- Các đoạn lặp đối xứng ngắn xen kẽ đều đặn\n- Nuclease Cas9 cắt DNA tại các vị trí cụ thể\n- RNA dẫn đường hướng Cas9 đến các chuỗi mục tiêu\n- Cho phép sửa đổi di truyền chính xác\n- Công cụ mang tính cách mạng cho các ứng dụng công nghệ sinh học\n```\n\n## 2. Thiết kế & Chiến lược thí nghiệm\n\n### Phân tích gen mục tiêu:\n```\nGen Insulin người (INS):\n- Vị trí: Nhiễm sắc thể 11p15.5\n- Kích thước: 1.430 cặp base\n- Cấu trúc: 2 exon, 1 intron\n- Sản phẩm: Proinsulin → được xử lý thành insulin trưởng thành\n- Thách thức: Biểu hiện gen của sinh vật nhân thực trong vật chủ nhân sơ\n\nChiến lược kỹ thuật:\n1. Tổng hợp gen insulin được tối ưu hóa cho biểu hiện ở E. coli\n2. Thiết kế hệ thống CRISPR để tích hợp gen vào nhiễm sắc thể vi khuẩn\n3. Tối ưu hóa mức độ biểu hiện thông qua kỹ thuật promoter\n4. Tăng cường các con đường gấp cuộn và xử lý protein\n5. Mở rộng quy mô sản xuất cho các ứng dụng dược phẩm\n```\n\n### Thiết kế hệ thống CRISPR:\n```\n# Thiết kế RNA dẫn đường (gRNA) cho vị trí tích hợp ở E. coli\n\nLựa chọn chuỗi mục tiêu:\n- Vị trí tích hợp: vùng lac operon trong bộ gen E. coli\n- Lý do: Hệ thống biểu hiện cảm ứng, được đặc trưng rõ\n- Chuỗi mục tiêu: 5\'-GCGTTATACATGCGTTGGCG-3\'\n- Chuỗi PAM: NGG (cần thiết cho hoạt động của Cas9)\n\n# Thiết kế chuỗi gRNA\nChuỗi crRNA: 5\'-GCGUUAUACAUGCGUUGGCG-3\'\ntracrRNA: Chuỗi tracrRNA phổ quát\nĐộ dài spacer: 20 nucleotide (tối ưu cho tính đặc hiệu của Cas9)\n\n# Lựa chọn Protein Cas9:\n- Streptococcus pyogenes Cas9 (SpCas9)\n- Hiệu quả và độ đặc hiệu cao\n- Yêu cầu PAM được đặc trưng rõ (NGG)\n- Có nhiều tài liệu tham khảo\n```\n\n## 3. Vật liệu & Thiết bị phòng thí nghiệm\n\n### Vật liệu sinh học:\n```\nChủng vi khuẩn:\n- E. coli DH5α (vật chủ nhân dòng)\n- E. coli BL21(DE3) (vật chủ biểu hiện)\n- Tế bào khả biến cho biến nạp\n\nPlasmid & Vector:\n- pCas9 (plasmid biểu hiện Cas9)\n- pgRNA (plasmid biểu hiện RNA dẫn đường)\n- pInsulin (mẫu DNA cho gen insulin)\n- Plasmid đối chứng để xác nhận\n\nThuốc thử phân tử:\n- Enzyme giới hạn (EcoRI, BamHI, HindIII)\n- T4 DNA ligase\n- Taq polymerase\n- dNTPs\n- Mồi cho khuếch đại PCR\n- Kháng sinh (ampicillin, kanamycin, chloramphenicol)\n```\n\n### Thiết bị phòng thí nghiệm:\n```\nThiết bị thiết yếu:\n- Máy luân nhiệt PCR\n- Bộ điện di gel\n- Máy soi gel UV\n- Tủ ấm lắc (37°C)\n- Máy ly tâm (để bàn và siêu ly tâm)\n- Nồi hấp\n- Tủ cấy an toàn sinh học\n- Máy quang phổ\n- Kính hiển vi\n\nThiết bị chuyên dụng:\n- Máy điện biến nạp cho vi khuẩn\n- Hệ thống tinh sạch protein (FPLC)\n- Bộ điện di SDS-PAGE\n- Thiết bị Western blotting\n- Máy đọc đĩa ELISA\n```\n\n## 4. Giao thức thí nghiệm chi tiết\n\n### Giai đoạn 1: Chuẩn bị các thành phần CRISPR\n\n#### Bước 1: Nhân dòng RNA dẫn đường\n```bash\n# Thiết kế và tổng hợp các oligonucleotide gRNA\nOligo xuôi: 5\'-CACCGCGTTATACATGCGTTGGCG-3\'\nOligo ngược: 5\'-AAACCGCCAACGCATGTATAACGC-3\'\n\n# Phản ứng bắt cặp\n1. Trộn oligo xuôi và ngược (mỗi loại 100 μM)\n2. Ủ ở 95°C trong 5 phút\n3. Làm nguội từ từ về nhiệt độ phòng (2°C/phút)\n4. Pha loãng đến nồng độ làm việc 10 μM\n\n# Nhân dòng vào vector pgRNA\n1. Cắt plasmid pgRNA bằng enzyme BbsI\n2. Xử lý bằng alkaline phosphatase\n3. Nối các oligo đã bắt cặp vào vector đã được tuyến tính hóa\n4. Biến nạp vào E. coli DH5α\n5. Chọn lọc trên đĩa kanamycin\n6. Xác minh các dòng bằng giải trình tự\n```\n\n#### Bước 2: Tối ưu hóa gen Insulin\n```python\n# Tối ưu hóa codon cho biểu hiện ở E. coli\noriginal_sequence = "ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGACCCAGCCGCAGCCTTTGTGAACCAACACCTGTGCGGCTCACACCTGGTGGAAGCTCTCTACCTAGTGTGCGGGGAACGAGGCTTCTTCTACACACCCAAGACCCGCCGGGAGGCAGAGGACCTGCAGGTGGGGCAGGTGGAGCTGGGCGGGGGCCCTGGTGCAGGCAGCCTGCAGCCCTTGGCCCTGGAGGGGTCCCTGCAGAAGCGTGGCATTGTGGAACAATGCTGTACCAGCATCTGCTCCCTCTACCAGCTGGAGAACTACTGCAACTAGACGCAGCCCGCAGGCAGCCCCACACCCGCCGCCTCCTGCACCGAGAGAGATGGAATAAAGCCCTTGAACCAGC"\n\n# Chuỗi được tối ưu hóa cho E. coli\noptimized_sequence = """\nATGGCTCTGTGGATGCGTCTGCTGCCGCTGCTGGCTCTGCTGGCTCTGTGGGGTCCTGATCCGGCTGCTGCTTTTGTGAACCAGCATCTGTGTGGTTCTCATCCTGGTGGTAGTTCTCTGTATCTGGTGTGTGGTGAACGTGGTTTTTTTTATACTCCGAAAGATCCGCCTGGTGGTCAGCGTGATCTGCAGGTGGGTCAGGTGGAGCTGGGTGGTGGTCCGGGTGCTGGTAGTCTGCAGCCGCTGGCTCTGGAGGGTTCTCTGCAGAAGCGTGGTATTGTGGAACAATGTTGTACCAGCATCTGCTTCCGCTGTATCAGCTGGAGAATTATTGCAATCGTCGTCAGCCGCAGGCTGCTCCGCATCCGCCGCCTCCTGCATCGTGAGCGTCTGGAATAAAGCTCTGAATCAGC\n"""\n\n# Xác minh\nprint(f"Độ dài ban đầu: {len(original_sequence)} bp")\nprint(f"Độ dài tối ưu: {len(optimized_sequence)} bp")\nprint(f"Tối ưu hóa hàm lượng GC: Cải thiện cho biểu hiện ở E. coli")\n```\n\n#### Bước 3: Xây dựng mẫu DNA cho\n```bash\n# Tạo mẫu DNA cho với các cánh tay tương đồng\nUpstream_homology: Chuỗi 500 bp phía trước vị trí tích hợp\nOptimized_insulin_gene: Chuỗi insulin được tối ưu hóa codon\nDownstream_homology: Chuỗi 500 bp phía sau vị trí tích hợp\n\n# Khuếch đại các thành phần bằng PCR\n1. Khuếch đại cánh tay tương đồng phía trước:\n   Mồi xuôi: 5\'-GCTAGCATGCGTTATACATGC-3\'\n   Mồi ngược: 5\'-CTCGAGGTACCGCGTTATAC-3\'\n\n2. Khuếch đại gen insulin:\n   Mồi xuôi: 5\'-GTACCATGGCTCTGTGGATG-3\'\n   Mồi ngược: 5\'-GGATCCTTACAGCTGGAG-3\'\n\n3. Khuếch đại cánh tay tương đồng phía sau:\n   Mồi xuôi: 5\'-GGATCCGCGTTATACATGCG-3\'\n   Mồi ngược: 5\'-AAGCTTGTACCGCGTTATAC-3\'\n\n# Lắp ráp bằng overlap PCR\n1. Kết hợp cả ba đoạn với tỷ lệ mol bằng nhau\n2. Thực hiện overlap PCR để tạo mẫu DNA cho liên tục\n3. Nhân dòng vào vector nhân dòng để khuếch đại\n4. Xác minh bằng bản đồ giới hạn và giải trình tự\n```\n\n## 5. Biến nạp & Chọn lọc CRISPR\n\n### Giao thức biến nạp vi khuẩn:\n```bash\n# Chuẩn bị tế bào E. coli khả biến\n1. Nuôi cấy E. coli qua đêm trong môi trường LB\n2. Pha loãng 1:100 và nuôi cấy đến OD600 = 0.5\n3. Thu hoạch tế bào bằng ly tâm (4°C, 3000g, 10 phút)\n4. Rửa 3 lần với 0.1 M CaCl2 lạnh\n5. Huyền phù lại trong 0.1 M CaCl2 với 15% glycerol\n6. Chia nhỏ và lưu trữ ở -80°C\n\n# Đồng biến nạp với các thành phần CRISPR\n1. Rã đông tế bào khả biến trên đá\n2. Thêm plasmid: pCas9 (100 ng) + pgRNA (50 ng) + mẫu DNA cho (200 ng)\n3. Ủ trên đá trong 30 phút\n4. Sốc nhiệt: 42°C trong 90 giây\n5. Đặt lại trên đá trong 2 phút\n6. Thêm môi trường SOC và phục hồi ở 37°C trong 1 giờ\n7. Cấy trên môi trường chọn lọc (ampicillin + kanamycin)\n8. Ủ qua đêm ở 37°C\n```\n\n### Sàng lọc tích hợp thành công:\n```bash\n# Chiến lược sàng lọc bằng PCR\n1. Colony PCR với các mồi ở hai bên:\n   Xuôi: Bên ngoài cánh tay tương đồng phía trước\n   Ngược: Bên trong gen insulin\n   Kích thước dự kiến: 800 bp (tích hợp) so với 300 bp (kiểu dại)\n\n2. PCR xác nhận:\n   Xuôi: Bên trong gen insulin\n   Ngược: Bên ngoài cánh tay tương đồng phía sau\n   Kích thước dự kiến: 750 bp (chỉ có ở các dòng tích hợp)\n\n# Giao thức xác minh\n1. Chọn 20-30 khuẩn lạc để sàng lọc ban đầu\n2. Thực hiện colony PCR với các mồi sàng lọc\n3. Phân tích sản phẩm bằng điện di gel\n4. Giải trình tự các dòng dương tính để xác nhận tích hợp chính xác\n5. Kiểm tra biểu hiện insulin bằng SDS-PAGE và Western blotting\n```\n\n## 6. Biểu hiện & Tinh sạch Protein\n\n### Tối ưu hóa biểu hiện Insulin:\n```bash\n# Giao thức kiểm tra biểu hiện\n1. Cấy các dòng đã xác minh vào LB + kháng sinh\n2. Nuôi cấy đến OD600 = 0.6 ở 37°C\n3. Cảm ứng với IPTG (thử nghiệm dải nồng độ 0.1-1.0 mM)\n4. Lấy mẫu tại nhiều thời điểm (0, 2, 4, 6, 8 giờ)\n5. Phân tích bằng SDS-PAGE để xác định điều kiện tối ưu\n\n# Điều kiện tối ưu được xác định:\n- Nồng độ IPTG: 0.5 mM\n- Nhiệt độ cảm ứng: 30°C (giảm thể vùi)\n- Thời gian biểu hiện: 4 giờ\n- Môi trường: LB với 2% glucose\n```\n\n### Giao thức tinh sạch Protein:\n```bash\n# Phá vỡ tế bào và chiết xuất protein\n1. Thu hoạch tế bào bằng ly tâm (6000g, 10 phút)\n2. Huyền phù lại trong đệm phá vỡ (20 mM Tris pH 8.0, 500 mM NaCl)\n3. Thêm lysozyme (1 mg/ml) và ủ 30 phút trên đá\n4. Siêu âm: 10 xung, mỗi xung 30 giây, có làm mát\n5. Ly tâm để loại bỏ mảnh vỡ tế bào (12000g, 20 phút)\n\n# Tinh sạch bằng sắc ký ái lực niken (nếu có thẻ His)\n1. Nạp dịch ly giải vào cột Ni-NTA\n2. Rửa bằng đệm liên kết (20 mM imidazole)\n3. Rửa giải với nồng độ imidazole tăng dần\n4. Phân tích các phân đoạn bằng SDS-PAGE\n5. Gộp các phân đoạn chứa insulin\n\n# Tái gấp cuộn protein (đối với thể vùi)\n1. Hòa tan thể vùi trong 6 M guanidine-HCl\n2. Pha loãng từ từ vào đệm tái gấp cuộn trong 24 giờ\n3. Loại bỏ các tập hợp bằng ly tâm\n4. Cô đặc và lưu trữ trong đệm thích hợp\n```\n\n## 7. Kiểm soát chất lượng & Phân tích\n\n### Đặc tính hóa Protein:\n```bash\n# Phân tích SDS-PAGE\n1. Chuẩn bị gel polyacrylamide 15%\n2. Nạp mẫu: thang trọng lượng phân tử, chiết xuất thô, protein tinh sạch\n3. Chạy ở 150V trong 1 giờ\n4. Nhuộm bằng Coomassie Blue\n5. Kích thước insulin dự kiến: ~6 kDa (chuỗi A) + ~3 kDa (chuỗi B)\n\n# Xác nhận bằng Western blotting\n1. Chuyển protein sang màng PVDF\n2. Khóa màng với 5% sữa trong TBST\n3. Ủ với kháng thể kháng insulin (1:1000)\n4. Kháng thể thứ cấp: liên hợp HRP (1:5000)\n5. Phát hiện bằng cơ chất phát quang hóa học\n6. Xác nhận các vạch đặc hiệu cho insulin\n```\n\n### Kiểm tra hoạt tính chức năng:\n```bash\n# Xét nghiệm hấp thu glucose trong nuôi cấy tế bào\n1. Chuẩn bị tế bào mỡ 3T3-L1 trong đĩa 96 giếng\n2. Xử lý tế bào với insulin tinh sạch ở các nồng độ khác nhau\n3. Thêm chất tương tự glucose huỳnh quang (2-NBDG)\n4. Đo sự hấp thu glucose bằng huỳnh quang\n5. So sánh với insulin tiêu chuẩn thương mại\n\n# Kết quả dự kiến:\n- Sự hấp thu glucose phụ thuộc vào liều lượng\n- EC50 tương tự insulin thương mại\n- Phản ứng tối đa ở 100 nM insulin\n- Xác nhận hoạt tính sinh học\n```\n\n## 8. Phân tích & Diễn giải dữ liệu\n\n### Phân tích định lượng:\n```python\n# Tính toán năng suất protein\ntotal_protein_mg = 150  # mg từ 1L nuôi cấy\ninsulin_purity_percent = 85  # từ đo mật độ\ninsulin_yield_mg = total_protein_mg * (insulin_purity_percent/100)\n\nprint(f"Năng suất insulin: {insulin_yield_mg} mg mỗi lít nuôi cấy")\nprint(f"So sánh thương mại: cải thiện 10 lần so với các phương pháp tiêu chuẩn")\n\n# Phân tích tác động kinh tế\nproduction_cost_per_mg = 2.50  # USD\ncommercial_insulin_cost = 75.00  # USD mỗi mg\ncost_reduction = ((commercial_insulin_cost - production_cost_per_mg) / commercial_insulin_cost) * 100\n\nprint(f"Giảm chi phí: {cost_reduction:.1f}%")\nprint(f"Tiết kiệm tiềm năng: ${commercial_insulin_cost - production_cost_per_mg:.2f} mỗi mg")\n```\n\n### Phân tích thống kê:\n```r\n# Script R để phân tích xét nghiệm hoạt tính\nlibrary(drc)\n\n# Điều chỉnh đường cong liều-đáp ứng\ninsulin_conc <- c(0.1, 0.3, 1, 3, 10, 30, 100, 300)  # nM\nglucose_uptake <- c(12, 18, 28, 45, 68, 82, 95, 97)  # đơn vị tương đối\n\n# Điều chỉnh mô hình logistic bốn tham số\nmodel <- drm(glucose_uptake ~ insulin_conc, fct = LL.4())\nsummary(model)\n\n# Tính toán EC50\nED(model, 50)\n# Dự kiến: ~10 nM (tương tự insulin thương mại)\n\n# Kiểm tra ý nghĩa thống kê\nt.test(engineered_insulin_activity, commercial_insulin_activity)\n# p-value < 0.05 cho thấy hoạt tính có ý nghĩa\n```\n\n## 9. Tóm tắt kết quả & Kết luận\n\n### Kết quả thí nghiệm:\n```\nHiệu quả tích hợp CRISPR: 75% các khuẩn lạc được sàng lọc\nMức độ biểu hiện Insulin: 150 mg/L nuôi cấy\nĐộ tinh sạch Protein: 85% sau một bước tinh sạch\nHoạt tính sinh học: 95% so với insulin tiêu chuẩn thương mại\nGiảm chi phí: 96% so với các phương pháp sản xuất hiện tại\n\nThành tựu chính:\n✓ Tích hợp gen thành công qua trung gian CRISPR\n✓ Biểu hiện insulin mức độ cao trong E. coli\n✓ Protein chức năng có hoạt tính sinh học\n✓ Phương pháp sản xuất có thể mở rộng quy mô\n✓ Tiềm năng giảm chi phí đáng kể\n```\n\n### Ứng dụng trong tương lai:\n```\nỨng dụng tức thì:\n- Mở rộng quy mô cho sản xuất dược phẩm\n- Tối ưu hóa cho các biến thể insulin khác nhau\n- Phát triển các công thức insulin tác dụng kéo dài\n- Ứng dụng cho các protein trị liệu khác\n\nTác động lâu dài:\n- Dân chủ hóa việc tiếp cận insulin trên toàn cầu\n- Mẫu cho các liệu pháp protein khác\n- Thúc đẩy các ứng dụng công nghệ sinh học CRISPR\n- Đóng góp cho y học cá nhân hóa\n```\n\nThí nghiệm chỉnh sửa gen CRISPR toàn diện này cho thấy sức mạnh của công nghệ sinh học hiện đại để giải quyết các thách thức sức khỏe toàn cầu đồng thời cung cấp kinh nghiệm thực hành với các kỹ thuật sinh học phân tử tiên tiến.',
        materials: [
          'Các chủng vi khuẩn E. coli (DH5α, BL21)',
          'Các thành phần hệ thống CRISPR-Cas9',
          'Gen insulin người (đã tối ưu hóa)',
          'Thuốc thử và mồi PCR',
          'Enzyme giới hạn và DNA ligase',
          'Thiết bị tinh sạch protein',
        ],
        procedure: [
          'Thiết kế RNA dẫn đường để lựa chọn vị trí mục tiêu',
          'Nhân dòng các thành phần CRISPR vào vector biểu hiện',
          'Biến nạp vi khuẩn với hệ thống CRISPR',
          'Sàng lọc để tìm ra sự tích hợp gen thành công',
          'Tối ưu hóa điều kiện biểu hiện protein',
          'Tinh sạch protein insulin và kiểm tra hoạt tính',
        ],
        expectedResults:
          'Tạo thành công E. coli sản xuất insulin người chức năng ở mức 150+ mg/L với 95% hoạt tính sinh học so với insulin thương mại',
      },
    ],
    realWorldApplications: [
      'Sản xuất protein dược phẩm (insulin, hormone tăng trưởng, vắc-xin)',
      'Công nghệ sinh học nông nghiệp và cải thiện cây trồng',
      'Nghiên cứu y học và khám phá thuốc',
      'Sản xuất nhiên liệu sinh học và làm sạch môi trường',
      'Sản xuất và tối ưu hóa enzyme công nghiệp',
    ],
    resources: [
      {
        title: 'Thông tin Công nghệ sinh học NCBI',
        url: 'https://www.ncbi.nlm.nih.gov/guide/',
        type: 'database',
        description: 'Cơ sở dữ liệu sinh học phân tử toàn diện với các chuỗi di truyền và công cụ nghiên cứu',
      },
      {
        title: 'Công cụ thiết kế CRISPR',
        url: 'https://crispr.mit.edu/',
        type: 'tool',
        description: 'Thiết kế RNA dẫn đường CRISPR trên web và phân tích ngoài mục tiêu',
      },
    ],
    caseStudies: [
      {
        title: 'Cuộc cách mạng Insulin của Genentech: Insulin người tái tổ hợp đầu tiên',
        organization: 'Genentech, Inc. & Eli Lilly',
        problem:
          'Bệnh nhân tiểu đường phụ thuộc vào insulin động vật với nguồn cung hạn chế, phản ứng dị ứng và sự thay đổi giữa các lô. Dân số bệnh nhân tiểu đường ngày càng tăng tạo ra khủng hoảng nguồn cung, ước tính hơn 100 triệu người mắc bệnh tiểu đường trên toàn thế giới vào năm 2000.',
        solution:
          'Tiên phong công nghệ DNA tái tổ hợp để sản xuất insulin người trong vi khuẩn E. coli. Nhân dòng gen insulin người vào plasmid vi khuẩn, tối ưu hóa hệ thống biểu hiện và phát triển các quy trình lên men quy mô lớn để sản xuất thương mại.',
        impact:
          'Humulin trở thành loại thuốc DNA tái tổ hợp đầu tiên được FDA chấp thuận (1982). Cách mạng hóa việc điều trị bệnh tiểu đường với nguồn cung cấp insulin người tinh khiết không giới hạn. Tạo ra doanh thu hàng năm hơn 2 tỷ USD, điều trị cho hơn 50 triệu bệnh nhân tiểu đường trên toàn cầu. Loại bỏ dị ứng insulin động vật và tiêu chuẩn hóa hiệu lực.',
        innovations: [
          'Ứng dụng thương mại đầu tiên của công nghệ DNA tái tổ hợp',
          'Thiết lập mô hình kinh doanh ngành công nghệ sinh học',
          'Các kỹ thuật biểu hiện và tinh sạch protein tiên tiến',
          'Lên men vi khuẩn quy mô lớn cho sản xuất dược phẩm',
          'Tạo ra con đường pháp lý cho các liệu pháp công nghệ sinh học',
        ],
      },
    ],
    vietnamContext: {
      title: 'Công nghệ sinh học tại Việt Nam: Từ Nông nghiệp đến Y dược',
      content: [
        'Việt Nam đang đẩy mạnh phát triển công nghệ sinh học, đặc biệt trong nông nghiệp với các giống cây trồng biến đổi gen chống chịu sâu bệnh và thời tiết khắc nghiệt, và trong y tế với việc sản xuất vắc-xin (như Nanocovax) và các bộ kit chẩn đoán.',
        'Các viện nghiên cứu lớn như Viện Công nghệ Sinh học (thuộc Viện Hàn lâm KH&CN Việt Nam) và các khu công nghệ cao đang là đầu tàu cho R&D, thu hút nhân tài và đầu tư.',
        'Nhu cầu về kỹ sư công nghệ sinh học có chuyên môn về kỹ thuật di truyền, sinh học phân tử và tin sinh học đang tăng cao để đáp ứng cho các ngành công nghiệp dược phẩm, thực phẩm và nông nghiệp công nghệ cao.',
      ],
    },
    careerConnect: {
      name: 'GS. TS. Trương Nam Hải',
      title: 'Nguyên Viện trưởng',
      company: 'Viện Công nghệ Sinh học, Viện Hàn lâm KH&CN Việt Nam',
      imageUrl: 'https://i.pravatar.cc/150?u=truong-nam-hai',
      quote:
        'Công nghệ sinh học là chìa khóa để giải quyết các vấn đề lớn của đất nước, từ an ninh lương thực đến sức khỏe cộng đồng. Việc làm chủ các công nghệ lõi như CRISPR không chỉ là một thành tựu khoa học mà còn là một cơ hội kinh tế to lớn cho Việt Nam.',
    },
    quizzes: [
      {
        question:
          'Công nghệ nào được xem là một cuộc cách mạng trong lĩnh vực chỉnh sửa gen vì tính chính xác và đơn giản của nó?',
        options: ['PCR', 'Điện di trên gel', 'CRISPR-Cas9', 'Biến nạp'],
        correctAnswerIndex: 2,
        explanation:
          'CRISPR-Cas9 là một công cụ chỉnh sửa gen cho phép các nhà khoa học thay đổi trình tự DNA một cách cực kỳ chính xác, mở ra tiềm năng to lớn trong việc điều trị các bệnh di truyền và phát triển các liệu pháp mới.',
      },
      {
        question: 'PCR (Polymerase Chain Reaction) được sử dụng để làm gì trong sinh học phân tử?',
        options: [
          'Cắt DNA tại vị trí cụ thể',
          'Khuếch đại một đoạn DNA cụ thể lên hàng triệu lần',
          'Tách các phân tử DNA theo kích thước',
          'Đọc trình tự của một đoạn DNA',
        ],
        correctAnswerIndex: 1,
        explanation:
          'PCR là một kỹ thuật nền tảng cho phép tạo ra hàng triệu bản sao của một đoạn DNA mục tiêu từ một lượng mẫu rất nhỏ, phục vụ cho vô số ứng dụng từ chẩn đoán bệnh đến pháp y.',
      },
    ],
    faqs: [
      {
        question: 'CRISPR-Cas9 là gì và tại sao nó lại quan trọng đến vậy?',
        answer:
          'CRISPR-Cas9 là một công cụ chỉnh sửa gen mang tính cách mạng cho phép các nhà khoa học thay đổi trình tự DNA với độ chính xác cao. Nó quan trọng vì mở ra tiềm năng to lớn trong việc điều trị các bệnh di truyền, phát triển các liệu pháp mới và kỹ thuật di truyền sinh vật.',
      },
      {
        question: 'Sự khác biệt giữa công nghệ sinh học và kỹ thuật di truyền là gì?',
        answer:
          'Công nghệ sinh học là một lĩnh vực rộng lớn sử dụng các sinh vật sống hoặc các thành phần của chúng để tạo ra sản phẩm hoặc quy trình. Kỹ thuật di truyền là một kỹ thuật cụ thể trong công nghệ sinh học, liên quan đến việc trực tiếp thao tác gen của một sinh vật.',
      },
      {
        question: 'Kỹ thuật di truyền có an toàn không?',
        answer:
          'Kỹ thuật di truyền tuân theo các quy định nghiêm ngặt về đạo đức và an toàn. Mặc dù có tiềm năng to lớn, nó cũng đặt ra những lo ngại đang được tranh luận và nghiên cứu tích cực, chẳng hạn như các hậu quả không lường trước và ảnh hưởng lâu dài. Bài học này có đề cập đến các quy trình an toàn và đạo đức sinh học.',
      },
      {
        question: 'Một số ứng dụng thực tế của kỹ thuật di truyền được thảo luận trong bài học này là gì?',
        answer:
          'Bài học nhấn mạnh việc sản xuất các dược phẩm như insulin trong vi khuẩn, tạo ra cây trồng biến đổi gen trong nông nghiệp, và việc sử dụng nó trong nghiên cứu y học để hiểu và chống lại bệnh tật.',
      },
    ],
  },
  {
    id: 'medical-biotechnology-drug-discovery',
    title: 'Bài 2: Công nghệ sinh học Y dược & Quy trình Khám phá thuốc',
    description:
      'Khám phá các ứng dụng công nghệ sinh học y tế, quy trình khám phá thuốc, thử nghiệm lâm sàng, y học cá nhân hóa. Học tin sinh học, chẩn đoán phân tử và phát triển liệu pháp.',
    videoUrl: 'https://www.youtube.com/watch?v=5xNjmUa9zw0',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=400&fit=crop',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    biotechField: 'Công nghệ sinh học Y dược',
    objectives: [
      'Hiểu quy trình khám phá thuốc từ xác định mục tiêu đến khi ra thị trường.',
      'Nắm vững các công cụ tin sinh học để phân tích gen và thiết kế thuốc.',
      'Tìm hiểu các phương pháp y học cá nhân hóa và liệu pháp chính xác.',
      'Khám phá thiết kế thử nghiệm lâm sàng, các yêu cầu pháp lý và quy trình phê duyệt.',
      'Áp dụng công nghệ sinh học để chẩn đoán bệnh và phát triển phương pháp điều trị.',
    ],
    prerequisites: [
      'Các nguyên tắc cơ bản của sinh học phân tử',
      'Hiểu biết về di truyền học và gen',
      'Các khái niệm dược lý cơ bản',
      'Kiến thức phân tích thống kê',
    ],
    labTechniques: [
      'Sàng lọc Thông lượng cao (HTS)',
      'Giải trình tự Thế hệ mới (NGS)',
      'Tinh thể học Protein',
      'Nuôi cấy tế bào và Kỹ thuật mô',
      'Khám phá Dấu ấn sinh học',
      'Phân tích dữ liệu Thử nghiệm lâm sàng',
    ],
    exercises: [
      {
        title: 'Dự án Khám phá thuốc hoàn chỉnh - Phát triển Liệu pháp Miễn dịch Ung thư',
        description:
          'Thực hiện quy trình khám phá thuốc từ đầu đến cuối cho một liệu pháp miễn dịch ung thư mới, bao gồm xác nhận mục tiêu, sàng lọc hợp chất, thử nghiệm tiền lâm sàng và thiết kế thử nghiệm lâm sàng.',
        difficulty: 'Chuyên gia',
        solution:
          '# Quy trình Khám phá Thuốc Miễn dịch Ung thư Hoàn chỉnh\n\n## 1. Tổng quan dự án & Cơ sở lý luận trị liệu\n\n### Nền tảng Liệu pháp Miễn dịch Ung thư:\n```\nThống kê Ung thư (Tác động toàn cầu):\n- 19,3 triệu ca mắc mới hàng năm\n- 10 triệu ca tử vong mỗi năm\n- Chi phí điều trị hàng năm hơn 150 tỷ USD\n- Các phương pháp điều trị truyền thống: Phẫu thuật, hóa trị, xạ trị\n- Hạn chế: Độc tính toàn thân, kháng thuốc, tái phát ung thư\n\nCuộc cách mạng Liệu pháp Miễn dịch:\n- Khai thác hệ miễn dịch để chống lại ung thư\n- Thuốc ức chế điểm kiểm soát: thị trường hơn 20 tỷ USD\n- Liệu pháp CAR-T: thị trường hơn 3 tỷ USD đang phát triển nhanh chóng\n- Xác định mục tiêu: PD-1/PD-L1, CTLA-4, LAG-3, TIM-3\n- Câu chuyện thành công: Pembrolizumab (Keytruda), Nivolumab (Opdivo)\n```\n\n### Mục tiêu mới: LAG-3 (Gen hoạt hóa Lymphocyte 3)\n```\nSinh học LAG-3:\n- Thụ thể điểm kiểm soát miễn dịch trên tế bào T và tế bào NK\n- Ức chế sự hoạt hóa và tăng sinh của tế bào T\n- Tăng biểu hiện trong môi trường vi mô của khối u\n- Tác dụng hiệp đồng với ức chế PD-1\n- Cơ hội trị liệu: Phong tỏa con đường kép\n\nDữ liệu xác nhận mục tiêu:\n- Biểu hiện LAG-3: 60% các khối u rắn\n- Tương quan với tiên lượng xấu trong u hắc tố, ung thư phổi\n- Các nghiên cứu tiền lâm sàng: Chuột knockout LAG-3 cho thấy khả năng miễn dịch chống khối u tăng cường\n- Bằng chứng di truyền ở người: Đa hình LAG-3 ảnh hưởng đến nguy cơ ung thư\n```\n\n## 2. Xác định & Xác nhận mục tiêu\n\n### Phân tích Tin sinh học:\n```python\n# Phân tích gen về biểu hiện LAG-3 trong ung thư\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy import stats\n\n# Phân tích dữ liệu TCGA (mô phỏng)\ntcga_data = {\n    \'tumor_type\': [\'Melanoma\', \'Lung_Cancer\', \'Breast_Cancer\', \'Colon_Cancer\'],\n    \'lag3_high_expression\': [68, 52, 34, 41],  # phần trăm bệnh nhân\n    \'median_survival_months\': [18, 14, 28, 22],\n    \'response_to_pd1\': [25, 18, 35, 29]  # tỷ lệ đáp ứng phần trăm\n}\n\ndf = pd.DataFrame(tcga_data)\n\n# Phân tích tương quan\ncorrelation = stats.pearsonr(df[\'lag3_high_expression\'], df[\'response_to_pd1\'])\nprint(f"Tương quan biểu hiện LAG-3 và đáp ứng PD-1: r = {correlation[0]:.3f}, p = {correlation[1]:.3f}")\n\n# Giả thuyết lâm sàng\nprint("\\nGiả thuyết lâm sàng:")\nprint("Biểu hiện LAG-3 cao tương quan với đáp ứng PD-1 kém")\nprint("Phong tỏa kép LAG-3/PD-1 có thể cải thiện kết quả")\n\n# Cơ hội thị trường\nprint("\\nPhân tích thị trường:")\nprint(f"Tổng thị trường có thể tiếp cận: 45 tỷ USD (liệu pháp miễn dịch ung thư)")\nprint(f"Thị trường có thể phục vụ: 8 tỷ USD (các loại ung thư có thể nhắm mục tiêu LAG-3)")\nprint(f"Doanh thu đỉnh dự kiến: 2-5 tỷ USD hàng năm")\n```\n\n### Phân tích cấu trúc Protein:\n```bash\n# Nghiên cứu cấu trúc protein LAG-3\n# Sử dụng PyMOL và Ngân hàng Dữ liệu Protein (PDB)\n\n# Tải xuống cấu trúc tinh thể LAG-3\nwget https://files.rcsb.org/download/6TPF.pdb\n\n# Lệnh phân tích PyMOL\npymol 6TPF.pdb\n\n# Các đặc điểm cấu trúc chính được xác định:\n# - Các miền giống globulin miễn dịch (D1-D4)\n# - Giao diện liên kết MHC Lớp II\n# - Các túi có thể gắn thuốc tiềm năng trong miền D1\n# - Các epitope liên kết kháng thể được lập bản đồ\n\n# Đánh giá khả năng gắn thuốc\necho "Điểm khả năng gắn thuốc: 0.85 (mục tiêu xuất sắc)"\necho "Thể tích túi liên kết: 850 Å³"\necho "Diện tích bề mặt kỵ nước: 65%"\necho "Ái lực liên kết dự đoán: có thể đạt được Kd < 10 nM"\n```\n\n## 3. Khám phá hợp chất dẫn đầu\n\n### Sàng lọc thông lượng cao (HTS):\n```python\n# Sàng lọc ảo các thư viện hợp chất\nfrom rdkit import Chem\nfrom rdkit.Chem import Descriptors, Lipinski\nimport random\n\n# Phân tích thư viện hợp chất\nclass CompoundLibrary:\n    def __init__(self, size=100000):\n        self.size = size\n        self.compounds = self.generate_virtual_library()\n    \n    def generate_virtual_library(self):\n        """Tạo thư viện hợp chất ảo với các đặc tính giống thuốc"""\n        compounds = []\n        for i in range(self.size):\n            # Thuộc tính hợp chất mô phỏng\n            mol_weight = random.uniform(150, 500)\n            logp = random.uniform(-2, 5)\n            hbd = random.randint(0, 5)\n            hba = random.randint(0, 10)\n            tpsa = random.uniform(20, 140)\n            \n            # Sàng lọc theo Quy tắc Năm của Lipinski\n            lipinski_pass = (\n                mol_weight <= 500 and\n                logp <= 5 and\n                hbd <= 5 and\n                hba <= 10\n            )\n            \n            compounds.append({\n                \'id\': f\'COMP_{i:06d}\',\n                \'mw\': mol_weight,\n                \'logp\': logp,\n                \'hbd\': hbd,\n                \'hba\': hba,\n                \'tpsa\': tpsa,\n                \'lipinski_pass\': lipinski_pass\n            })\n        \n        return compounds\n    \n    def virtual_screening(self, binding_threshold=-8.0):\n        """Mô phỏng sàng lọc docking phân tử"""\n        hits = []\n        for compound in self.compounds:\n            if compound[\'lipinski_pass\']:\n                # Điểm liên kết mô phỏng\n                binding_score = random.uniform(-12, -4)\n                if binding_score <= binding_threshold:\n                    compound[\'binding_score\'] = binding_score\n                    hits.append(compound)\n        \n        # Sắp xếp theo ái lực liên kết\n        hits.sort(key=lambda x: x[\'binding_score\'])\n        return hits[:1000]  # 1000 hit hàng đầu\n\n# Thực hiện sàng lọc\nlibrary = CompoundLibrary()\nhits = library.virtual_screening()\n\nprint(f"Kích thước thư viện: {library.size:,} hợp chất")\nprint(f"Hợp chất giống thuốc: {sum(1 for c in library.compounds if c[\'lipinski_pass\']):,}")\nprint(f"Hit ảo: {len(hits)} hợp chất")\nprint(f"Tỷ lệ hit: {len(hits)/library.size*100:.3f}%")\n\n# 5 hợp chất hàng đầu để phát triển thêm\nprint("\\nCác hợp chất dẫn đầu hàng đầu:")\nfor i, hit in enumerate(hits[:5]):\n    print(f"{i+1}. {hit[\'id\']}: Liên kết = {hit[\'binding_score\']:.2f} kcal/mol")\n```\n\n### Chiến dịch tối ưu hóa hợp chất dẫn đầu:\n```bash\n# Tối ưu hóa hóa dược\n# Phát triển Mối quan hệ Cấu trúc-Hoạt tính (SAR)\n\n# Hợp chất dẫn đầu: COMP_007234\n# Thuộc tính ban đầu:\n# - Ái lực liên kết: Kd = 45 nM\n# - Độ chọn lọc: 10 lần so với PD-1\n# - Độ thấm qua tế bào: Thấp\n# - Độ ổn định chuyển hóa: Kém\n\n# Chiến lược tối ưu hóa:\necho "Vòng 1: Cải thiện ái lực liên kết"\necho "- Sửa đổi: Thêm các nhóm cho liên kết hydro"\necho "- Kết quả: Kd cải thiện xuống 8 nM"\n\necho "\\nVòng 2: Tăng cường độ chọn lọc"\necho "- Sửa đổi: Tối ưu hóa tương tác kỵ nước"\necho "- Kết quả: Độ chọn lọc 100 lần so với PD-1"\n\necho "\\nVòng 3: Cải thiện các đặc tính ADMET"\necho "- Sửa đổi: Giảm trọng lượng phân tử, thêm các nhóm chặn chuyển hóa"\necho "- Kết quả: Sinh khả dụng đường uống tốt, thời gian bán thải kéo dài"\n\n# Hợp chất tối ưu cuối cùng: LAG3i-001\necho "\\nHợp chất dẫn đầu cuối cùng (LAG3i-001):"\necho "- Ái lực liên kết: Kd = 2.5 nM"\necho "- Độ chọn lọc: >500 lần"\necho "- Sinh khả dụng đường uống: 65%"\necho "- Thời gian bán thải: 8 giờ"\necho "- Biên độ an toàn: >100 lần"\n```\n\n## 4. Phát triển tiền lâm sàng\n\n### Dược lý in vitro:\n```python\n# Các xét nghiệm dựa trên tế bào để xác nhận cơ chế\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy.optimize import curve_fit\n\ndef dose_response_curve(concentration, top, bottom, ic50, hill_slope):\n    """Hàm logistic bốn tham số"""\n    return bottom + (top - bottom) / (1 + (concentration / ic50) ** hill_slope)\n\n# Xét nghiệm hoạt hóa tế bào T\nconcentrations = np.logspace(-11, -6, 10)  # 0.1 pM đến 1 μM\n\n# Dữ liệu mô phỏng: ảnh hưởng của LAG3i-001 đến sự tăng sinh của tế bào T\nt_cell_proliferation = np.array([10, 12, 18, 28, 48, 72, 85, 92, 95, 95])\n\n# Điều chỉnh đường cong liều-đáp ứng\npopt, pcov = curve_fit(dose_response_curve, concentrations, t_cell_proliferation,\n                       p0=[100, 10, 1e-9, 1])\n\ntop, bottom, ic50, hill_slope = popt\nprint(f"EC50 cho hoạt hóa tế bào T: {ic50*1e9:.2f} nM")\nprint(f"Hiệu ứng tối đa: tăng {top:.1f}% trong tăng sinh")\n\n# Xét nghiệm giải phóng cytokine\ncytokines = [\'IFN-γ\', \'IL-2\', \'TNF-α\', \'Granzyme B\']\nincrease_fold = [4.2, 3.8, 2.9, 5.1]\n\nprint("\\nGiải phóng Cytokine (tăng gấp):")\nfor cytokine, fold in zip(cytokines, increase_fold):\n    print(f"- {cytokine}: tăng {fold}x")\n```\n\n### Nghiên cứu hiệu quả in vivo:\n```bash\n# Mô hình khối u trên chuột\necho "Mô hình khối u đồng loại:"\necho "1. Mô hình u hắc tố B16F10"\necho "   - Giảm thể tích khối u: 75%"\necho "   - Kéo dài thời gian sống: 40 ngày so với 18 ngày ở nhóm đối chứng"\necho "   - Đáp ứng hoàn toàn: 30% số động vật"\n\necho "\\n2. Mô hình ung thư phổi LLC"\necho "   - Ức chế tăng trưởng khối u: 68%"\necho "   - Giảm di căn: 85%"\necho "   - Thâm nhiễm miễn dịch: tăng 3 lần tế bào T CD8+"\n\necho "\\n3. Kết hợp với chất ức chế PD-1"\necho "   - Quan sát thấy hiệu ứng hiệp đồng"\necho "   - Đáp ứng hoàn toàn: 60% số động vật"\necho "   - Không có độc tính bổ sung"\n\n# Nghiên cứu độc tính\necho "\\nHồ sơ độc tính:"\necho "- NOAEL (Mức không quan sát thấy tác dụng phụ): 100 mg/kg"\necho "- Liều dung nạp tối đa: >300 mg/kg"\necho "- Cơ quan đích: Không xác định"\necho "- Độc tính di truyền: Âm tính"\necho "- Độc tính sinh sản: Không quan sát thấy ảnh hưởng"\n```\n\n### Dược động học & ADMET:\n```python\n# Mô hình hóa PK/PD\nimport numpy as np\nfrom scipy.integrate import odeint\nimport matplotlib.pyplot as plt\n\ndef pk_model(y, t, ka, ke, cl, v):\n    """Mô hình PK một khoang với sự hấp thu"""\n    depot, central = y\n    \n    ddepot_dt = -ka * depot\n    dcentral_dt = ka * depot - ke * central\n    \n    return [ddepot_dt, dcentral_dt]\n\n# Các thông số PK cho LAG3i-001\nka = 0.5   # tốc độ hấp thu (1/h)\nke = 0.087  # tốc độ thải trừ (1/h)\ncl = 0.8   # độ thanh thải (L/h/kg)\nv = 8.0    # thể tích phân bố (L/kg)\n\n# Mô phỏng liều uống\ndose = 50  # mg/kg\nt = np.linspace(0, 24, 100)\ny0 = [dose, 0]\n\nsol = odeint(pk_model, y0, t, args=(ka, ke, cl, v))\nplasma_conc = sol[:, 1] / v\n\n# Tính toán các thông số PK\nauc = np.trapz(plasma_conc, t)\ncmax = np.max(plasma_conc)\ntmax = t[np.argmax(plasma_conc)]\nhalf_life = np.log(2) / ke\n\nprint(f"Các thông số dược động học:")\nprint(f"- Cmax: {cmax:.2f} μg/mL")\nprint(f"- Tmax: {tmax:.1f} giờ")\nprint(f"- AUC: {auc:.1f} μg⋅h/mL")\nprint(f"- Thời gian bán thải: {half_life:.1f} giờ")\nprint(f"- Sinh khả dụng: 65%")\n```\n\n## 5. Chiến lược phát triển lâm sàng\n\n### Thiết kế thử nghiệm lâm sàng giai đoạn I:\n```python\n# Thiết kế nghiên cứu leo thang liều\nclass PhaseITrial:\n    def __init__(self):\n        self.dose_levels = [5, 10, 20, 40, 80, 160, 320]  # mg\n        self.cohort_size = 3\n        self.max_patients = 42\n        self.dlt_threshold = 0.33  # Ngưỡng độc tính giới hạn liều\n    \n    def three_plus_three_design(self):\n        """Thiết kế leo thang liều 3+3 cổ điển"""\n        results = []\n        for dose in self.dose_levels:\n            # Tỷ lệ DLT mô phỏng (tăng theo liều)\n            dlt_rate = min(0.6, dose / 1000 + 0.05)\n            \n            # Mô phỏng kết quả đoàn hệ\n            dlts = np.random.binomial(self.cohort_size, dlt_rate)\n            \n            results.append({\n                \'dose\': dose,\n                \'patients\': self.cohort_size,\n                \'dlts\': dlts,\n                \'dlt_rate\': dlts / self.cohort_size\n            })\n            \n            # Quy tắc dừng\n            if dlts >= 2:  # Dừng leo thang\n                results[-1][\'decision\'] = \'Vượt quá MTD\'\n                break\n            elif dlts == 1:  # Mở rộng đoàn hệ\n                results[-1][\'patients\'] = 6\n                results[-1][\'decision\'] = \'Mở rộng đoàn hệ\'\n            else:\n                results[-1][\'decision\'] = \'Leo thang\'\n        \n        return results\n    \n    def generate_trial_report(self):\n        results = self.three_plus_three_design()\n        \n        print("Kết quả leo thang liều giai đoạn I:")\n        print("Liều (mg) | Bệnh nhân | DLTs | Tỷ lệ | Quyết định")\n        print("-" * 50)\n        \n        for result in results:\n            print(f"{result[\'dose\']:8d} | {result[\'patients\']:8d} | {result[\'dlts\']:4d} | {result[\'dlt_rate\']:4.2f} | {result[\'decision\']}")\n        \n        # Liều khuyến nghị cho Giai đoạn II\n        safe_doses = [r for r in results if r[\'dlt_rate\'] < self.dlt_threshold]\n        if safe_doses:\n            rp2d = max(safe_doses, key=lambda x: x[\'dose\'])\n            print(f"\\nLiều khuyến nghị cho Giai đoạn II: {rp2d[\'dose\']} mg")\n        \n        return results\n\n# Thực hiện mô phỏng thử nghiệm\ntrial = PhaseITrial()\nresults = trial.generate_trial_report()\n```\n\n### Thiết kế thử nghiệm giai đoạn II:\n```bash\n# Nghiên cứu hiệu quả đa nhánh\necho "Thiết kế thử nghiệm giai đoạn II: LAG3i-001 trong u hắc tố tiến triển"\necho "Tiêu chí chính: Tỷ lệ đáp ứng toàn bộ (ORR)"\necho "Tiêu chí phụ: PFS, OS, An toàn, Dấu ấn sinh học"\n\necho "\\nCác nhánh nghiên cứu:"\necho "Nhánh A: Đơn trị liệu LAG3i-001 (n=40)"\necho "Nhánh B: LAG3i-001 + Anti-PD-1 (n=40)"\necho "Nhánh C: Đơn trị liệu Anti-PD-1 (n=40) [đối chứng]"\n\necho "\\nTiêu chí tuyển chọn:"\necho "- U hắc tố tiến triển, bệnh tiến triển"\necho "- Tình trạng hoạt động ECOG 0-1"\necho "- Chức năng cơ quan đầy đủ"\necho "- Cho phép điều trị trước đó (yêu cầu thời gian nghỉ)"\n\necho "\\nKế hoạch thống kê:"\necho "- Công suất: 80% để phát hiện cải thiện 20% trong ORR"\necho "- Alpha: 0.05 (hai phía)"\necho "- Phân tích tạm thời: 50% tuyển chọn"\necho "- Ranh giới vô ích: <10% ORR trong nhánh đơn trị liệu"\n\necho "\\nChiến lược dấu ấn sinh học:"\necho "- Biểu hiện LAG-3 bằng IHC"\necho "- Biểu hiện PD-L1"\necho "- Gánh nặng đột biến khối u"\necho "- Chữ ký gen miễn dịch"\necho "- DNA khối u lưu hành"\n```\n\n## 6. Chiến lược pháp lý & Lịch trình phát triển\n\n### Kế hoạch tương tác với FDA:\n```bash\necho "Các mốc quan trọng về pháp lý:"\necho "\\nCuộc họp trước IND (Tháng 0):"\necho "- Thảo luận về gói dữ liệu phi lâm sàng"\necho "- Thống nhất về thiết kế thử nghiệm Giai đoạn I"\necho "- Xem xét yêu cầu CMC"\n\necho "\\nNộp hồ sơ IND (Tháng 3):"\necho "- Hoàn thành gói phi lâm sàng"\necho "- Giao thức Giai đoạn I và tài liệu thông tin cho nhà nghiên cứu"\necho "- Dữ liệu CMC (hoạt chất và sản phẩm)"\necho "- Thời gian xem xét 30 ngày của FDA"\n\necho "\\nCuộc họp EOP2 (Tháng 24):"\necho "- Thảo luận kết quả Giai đoạn II"\necho "- Thống nhất về thiết kế thử nghiệm Giai đoạn III"\necho "- Thảo luận về con đường phê duyệt nhanh"\n\necho "\\nNộp hồ sơ BLA (Tháng 60):"\necho "- Hoàn thành dữ liệu hiệu quả và an toàn"\necho "- Đánh giá lợi ích-rủi ro"\necho "- Các cam kết sau khi đưa ra thị trường"\necho "- Xem xét của FDA: 6-12 tháng"\n\necho "\\nTổng lịch trình phát triển: 6-8 năm"\necho "Tổng vốn đầu tư: 500 triệu - 1 tỷ USD"\n```\n\n### Chiến lược sở hữu trí tuệ:\n```bash\necho "Phát triển danh mục bằng sáng chế:"\necho "\\n1. Thành phần vật chất (Chính):"\necho "   - Cấu trúc cốt lõi của LAG3i-001"\necho "   - Các thành phần dược phẩm"\necho "   - Hết hạn: 2044 (thời hạn 20 năm)"\n\necho "\\n2. Bằng sáng chế phương pháp sử dụng:"\necho "   - Ức chế LAG-3 để điều trị ung thư"\necho "   - Kết hợp với các chất ức chế điểm kiểm soát"\necho "   - Liệu pháp hướng dẫn bằng dấu ấn sinh học"\n\n3. Bằng sáng chế công thức:\n   - Công thức viên nén uống\n   - Công thức giải phóng kéo dài\n   - Sản phẩm kết hợp\n\necho "\\n4. Nộp đơn quốc tế:"\necho "   - Nộp đơn PCT"\necho "   - Giai đoạn quốc gia: Mỹ, EU, Nhật Bản, Trung Quốc"\necho "   - Theo đuổi bằng sáng chế: 3-5 năm"\n\necho "\\nQuyền tự do hoạt động:"\necho "   - Không xác định được bằng sáng chế cản trở"\necho "   - Con đường phát triển rõ ràng"\necho "   - Theo dõi bối cảnh cạnh tranh"\n```\n\n## 7. Chiến lược thương mại & Phân tích thị trường\n\n### Đánh giá thị trường:\n```python\n# Phân tích quy mô thị trường\nclass MarketAnalysis:\n    def __init__(self):\n        self.cancer_incidence = {\n            \'melanoma\': 325000,\n            \'lung_cancer\': 2200000,\n            \'breast_cancer\': 2300000,\n            \'colon_cancer\': 1900000\n        }\n        \n        self.lag3_expression_rates = {\n            \'melanoma\': 0.68,\n            \'lung_cancer\': 0.52,\n            \'breast_cancer\': 0.34,\n            \'colon_cancer\': 0.41\n        }\n        \n        self.treatment_cost_annual = 150000  # USD\n        self.market_penetration = 0.15  # 15% thị phần đỉnh\n    \n    def calculate_addressable_market(self):\n        total_patients = 0\n        for cancer_type, incidence in self.cancer_incidence.items():\n            lag3_positive = incidence * self.lag3_expression_rates[cancer_type]\n            total_patients += lag3_positive\n        \n        total_market = total_patients * self.treatment_cost_annual\n        addressable_market = total_market * self.market_penetration\n        \n        return {\n            \'total_patients\': int(total_patients),\n            \'total_market\': total_market / 1e9,  # Tỷ USD\n            \'addressable_market\': addressable_market / 1e9\n        }\n    \n    def revenue_projection(self, years=10):\n        base_market = self.calculate_addressable_market()[\'addressable_market\']\n        \n        # Tăng trưởng thị trường và thâm nhập theo thời gian\n        revenues = []\n        for year in range(1, years + 1):\n            if year <= 3:\n                penetration = 0.02 * year  # Thâm nhập ban đầu chậm\n            elif year <= 6:\n                penetration = 0.06 + 0.03 * (year - 3)  # Giai đoạn tăng trưởng\n            else:\n                penetration = 0.15  # Thị trường trưởng thành\n            \n            market_growth = 1.05 ** year  # Tăng trưởng 5% hàng năm\n            annual_revenue = base_market * penetration * market_growth\n            revenues.append(annual_revenue)\n        \n        return revenues\n\n# Thực hiện phân tích thị trường\nmarket = MarketAnalysis()\nmarket_data = market.calculate_addressable_market()\nrevenues = market.revenue_projection()\n\nprint(f"Phân tích thị trường - LAG3i-001:")\nprint(f"Bệnh nhân dương tính với LAG-3: {market_data[\'total_patients\']:,}")\nprint(f"Tổng thị trường có thể tiếp cận: ${market_data[\'total_market\']:.1f}B")\nprint(f"Thị trường có thể tiếp cận đỉnh: ${market_data[\'addressable_market\']:.1f}B")\n\nprint(f"\\nDự báo doanh thu:")\nfor year, revenue in enumerate(revenues[:5], 1):\n    print(f"Năm {year}: ${revenue:.2f}B")\n\nprint(f"\\nDoanh thu đỉnh hàng năm (Năm 7+): ${max(revenues):.2f}B")\nprint(f"NPV (10 năm, chiết khấu 10%): ${sum(rev/(1.1**i) for i, rev in enumerate(revenues, 1)):.2f}B")\n```\n\n### Phân tích cạnh tranh:\n```bash\necho "Bối cảnh cạnh tranh:"\necho "\\nĐối thủ cạnh tranh trực tiếp:"\necho "1. Relatlimab (Bristol Myers Squibb)"\necho "   - Kháng thể LAG-3"\necho "   - Được phê duyệt kết hợp với nivolumab"\necho "   - Vị thế thị trường: Lợi thế người đi đầu"\n\necho "\\n2. Favezelimab (Merck)"\necho "   - Kháng thể LAG-3 đang được phát triển"\necho "   - Nhiều nghiên cứu kết hợp"\necho "   - Lịch trình: chậm hơn 2-3 năm"\n\necho "\\nLợi thế cạnh tranh:"\necho "- Dùng đường uống (so với kháng thể tiêm tĩnh mạch)"\necho "- Chi phí sản xuất thấp hơn"\necho "- Hồ sơ thân thiện với kết hợp"\necho "- Phương pháp tiếp cận dựa trên dấu ấn sinh học"\n\necho "\\nSự khác biệt chính:"\necho "- Sự tiện lợi cho bệnh nhân (dùng đường uống)"\necho "- Hiệu quả chi phí"\necho "- Khả năng tiếp cận bệnh nhân rộng hơn"\necho "- Hiểu biết về cơ chế mới"\n```\n\n## 8. Đánh giá & Giảm thiểu rủi ro\n\n### Rủi ro phát triển:\n```python\n# Khung phân tích rủi ro\nrisks = [\n    {\n        \'category\': \'Kỹ thuật\',\n        \'risk\': \'Hiệu quả không đủ trong Giai đoạn II\',\n        \'probability\': 0.35,\n        \'impact\': 0.9,\n        \'mitigation\': \'Lựa chọn bệnh nhân giàu dấu ấn sinh học, chiến lược kết hợp\'\n    },\n    {\n        \'category\': \'Pháp lý\',\n        \'risk\': \'Yêu cầu của FDA vượt quá mong đợi\',\n        \'probability\': 0.25,\n        \'impact\': 0.6,\n        \'mitigation\': \'Tương tác sớm với FDA, thiết kế thử nghiệm thích ứng\'\n    },\n    {\n        \'category\': \'Thương mại\',\n        \'risk\': \'Các mối đe dọa cạnh tranh từ kháng thể\',\n        \'probability\': 0.45,\n        \'impact\': 0.7,\n        \'mitigation\': \'Chiến lược khác biệt hóa, lợi thế chi phí\'\n    },\n    {\n        \'category\': \'Sản xuất\',\n        \'risk\': \'Thách thức mở rộng quy mô\',\n        \'probability\': 0.20,\n        \'impact\': 0.5,\n        \'mitigation\': \'Phát triển quy trình sớm, nhiều nhà cung cấp\'\n    }\n]\n\n# Tính điểm rủi ro\nprint("Ma trận đánh giá rủi ro:")\nprint("Hạng mục | Rủi ro | Xác suất | Tác động | Điểm | Giảm thiểu")\nprint("-" * 80)\n\nfor risk in risks:\n    score = risk[\'probability\'] * risk[\'impact\']\n    print(f"{risk[\'category\']:12} | {risk[\'risk\'][:20}:20} | {risk[\'probability\']:4.2f} | {risk[\'impact\']:6.2f} | {score:5.2f} | {risk[\'mitigation\'][:25]}")\n\n# Rủi ro tổng thể của dự án\ntotal_risk = sum(r[\'probability\'] * r[\'impact\'] for r in risks) / len(risks)\nprint(f"\\nĐiểm rủi ro tổng thể của dự án: {total_risk:.2f} (Trung bình)")\n```\n\n## 9. Chỉ số thành công & Cổng quyết định\n\n### Các mốc phát triển:\n```bash\necho "Các cổng quyết định chính:"\necho "\\nCổng 1 - Tối ưu hóa hợp chất dẫn đầu (Tháng 12):"\necho "Tiêu chí thành công:"\necho "- Ái lực liên kết: <5 nM"\necho "- Độ chọn lọc: >100 lần"\necho "- Sinh khả dụng đường uống: >50%"\necho "- Biên độ an toàn: >100 lần"\necho "Quyết định: Tiếp tục các nghiên cứu cho phép IND"\n\necho "\\nCổng 2 - Hoàn thành Giai đoạn I (Tháng 18):"\necho "Tiêu chí thành công:"\necho "- Xác định MTD"\necho "- Hồ sơ an toàn chấp nhận được"\necho "- Xác nhận các đặc tính PK"\necho "- Tương tác với dấu ấn sinh học"\necho "Quyết định: Tiếp tục Giai đoạn II"\n\necho "\\nCổng 3 - Tạm thời Giai đoạn II (Tháng 36):"\necho "Tiêu chí thành công:"\necho "- ORR >20% trong đơn trị liệu"\necho "- ORR >40% trong kết hợp"\necho "- Hồ sơ an toàn chấp nhận được"\necho "- Khả năng dự đoán của dấu ấn sinh học"\necho "Quyết định: Tiếp tục Giai đoạn III"\n\necho "\\nCổng 4 - Công bố kết quả Giai đoạn III (Tháng 60):"\necho "Tiêu chí thành công:"\necho "- Đạt được tiêu chí chính (PFS)"\necho "- Lợi ích-rủi ro thuận lợi"\necho "- Con đường phê duyệt pháp lý rõ ràng"\necho "- Khả năng thương mại được xác nhận"\necho "Quyết định: Nộp đơn xin phê duyệt"\n```\n\nDự án khám phá thuốc toàn diện này cho thấy sự phức tạp và nghiêm ngặt cần thiết để phát triển các liệu pháp ung thư mới, từ việc xác định mục tiêu ban đầu cho đến bằng chứng khái niệm lâm sàng.',
        materials: [
          'Các gói phần mềm tin sinh học',
          'Nền tảng sàng lọc thông lượng cao',
          'Cơ sở nuôi cấy tế bào',
          'Cơ sở thử nghiệm trên động vật',
          'Cơ sở hạ tầng thử nghiệm lâm sàng',
          'Hệ thống nộp hồ sơ pháp lý',
        ],
        procedure: [
          'Xác định và xác nhận mục tiêu trị liệu bằng gen',
          'Sàng lọc các thư viện hợp chất để xác định hợp chất dẫn đầu',
          'Tối ưu hóa các hợp chất dẫn đầu để có các đặc tính giống thuốc',
          'Tiến hành các nghiên cứu hiệu quả và an toàn tiền lâm sàng',
          'Thiết kế và thực hiện các thử nghiệm lâm sàng',
          'Chuẩn bị hồ sơ pháp lý để xin phê duyệt',
        ],
        expectedResults:
          'Một liệu pháp miễn dịch ung thư mới với hiệu quả đã được chứng minh trong các thử nghiệm lâm sàng, con đường phê duyệt pháp lý và tiềm năng thương mại vượt quá 2 tỷ USD hàng năm',
      },
    ],
    realWorldApplications: [
      'Liệu pháp miễn dịch ung thư và phát triển liệu pháp nhắm mục tiêu',
      'Y học cá nhân hóa và nền tảng chẩn đoán chính xác',
      'Phát triển liệu pháp cho các bệnh hiếm gặp',
      'Phát triển vắc-xin và phòng chống bệnh truyền nhiễm',
      'Ứng dụng y học tái tạo và kỹ thuật mô',
    ],
    resources: [
      {
        title: 'Cơ sở dữ liệu ClinicalTrials.gov',
        url: 'https://clinicaltrials.gov/',
        type: 'database',
        description: 'Sổ đăng ký thử nghiệm lâm sàng toàn diện với các giao thức và kết quả nghiên cứu',
      },
      {
        title: 'Hướng dẫn Phát triển Thuốc của FDA',
        url: 'https://www.fda.gov/drugs/development-approval-process-drugs',
        type: 'documentation',
        description: 'Các tài liệu hướng dẫn chính thức của FDA về phát triển và phê duyệt thuốc',
      },
    ],
    caseStudies: [
      {
        title: 'Phát triển Herceptin của Genentech/Roche: Tiên phong Y học Chính xác',
        organization: 'Genentech/Roche, Các Trung tâm Y tế Học thuật',
        problem:
          'Bệnh nhân ung thư vú dương tính với HER2 có bệnh diễn tiến nhanh với tiên lượng xấu, các lựa chọn điều trị hạn chế ngoài hóa trị. 20-25% các ca ung thư vú biểu hiện quá mức protein HER2, thúc đẩy sự phát triển và di căn của khối u.',
        solution:
          'Phát triển trastuzumab (Herceptin), liệu pháp nhắm mục tiêu đầu tiên cho ung thư vú dương tính với HER2. Sử dụng công nghệ kháng thể đơn dòng nhắm vào thụ thể HER2, kết hợp với xét nghiệm chẩn đoán đồng hành để xác định bệnh nhân phù hợp.',
        impact:
          'Biến ung thư vú HER2+ từ một căn bệnh gây tử vong thành một tình trạng có thể kiểm soát được. Cải thiện tỷ lệ sống sót sau 10 năm từ 25% lên hơn 80%. Tạo ra doanh thu hàng năm hơn 7 tỷ USD ở đỉnh điểm. Thiết lập mô hình y học chính xác với liệu pháp dựa trên dấu ấn sinh học.',
        innovations: [
          'Liệu pháp ung thư nhắm mục tiêu thành công đầu tiên',
          'Mô hình phát triển chẩn đoán đồng hành',
          'Thiết kế thử nghiệm lâm sàng phân tầng theo dấu ấn sinh học',
          'Khung thương mại y học cá nhân hóa',
          'Công nghệ nền tảng liên hợp kháng thể-thuốc',
        ],
      },
    ],
    vietnamContext: {
      title: 'Ngành Dược Việt Nam và Cuộc đua Khám phá Thuốc',
      content: [
        'Ngành công nghiệp dược phẩm Việt Nam đang có những bước chuyển mình mạnh mẽ, từ tập trung sản xuất thuốc generic sang đầu tư vào R&D để phát triển thuốc mới.',
        'Các công ty lớn như Vinfa (Vingroup), Nanogen, và các viện nghiên cứu đang đẩy mạnh nghiên cứu các liệu pháp điều trị ung thư, bệnh truyền nhiễm và các bệnh mạn tính phổ biến tại Việt Nam.',
        'Việc phát triển thành công một loại thuốc "Made in Vietnam" không chỉ mang lại giá trị kinh tế mà còn khẳng định vị thế khoa học công nghệ của quốc gia, đồng thời đảm bảo an ninh y tế và cung cấp thuốc với giá cả hợp lý cho người dân.',
      ],
    },
    careerConnect: {
      name: 'TS. Đỗ Minh Sĩ',
      title: 'Giám đốc R&D',
      company: 'Công ty Dược phẩm Nanogen',
      imageUrl: 'https://i.pravatar.cc/150?u=do-minh-si',
      quote:
        'Khám phá thuốc là một hành trình dài và đầy chông gai, nhưng mỗi bước tiến đều có thể mang lại hy vọng cho hàng triệu bệnh nhân. Tại Việt Nam, chúng tôi có cơ hội giải quyết những vấn đề sức khỏe đặc thù của người Việt và đóng góp vào bản đồ y học thế giới.',
    },
    quizzes: [
      {
        question:
          'Giai đoạn nào trong quy trình khám phá thuốc lần đầu tiên thử nghiệm một loại thuốc mới trên người để đánh giá sự an toàn của nó?',
        options: ['Tiền lâm sàng', 'Giai đoạn I', 'Giai đoạn II', 'Giai đoạn III'],
        correctAnswerIndex: 1,
        explanation:
          'Thử nghiệm lâm sàng Giai đoạn I là bước đầu tiên trên người, thường được thực hiện trên một nhóm nhỏ tình nguyện viên khỏe mạnh để xác định tính an toàn, liều lượng và các tác dụng phụ ban đầu của thuốc.',
      },
      {
        question: 'Y học cá nhân hóa (Personalized Medicine) nhằm mục đích gì?',
        options: [
          'Tạo ra một loại thuốc phù hợp cho tất cả mọi người',
          'Điều trị bệnh dựa trên đặc điểm di truyền, môi trường và lối sống riêng của từng cá nhân',
          'Chỉ sử dụng các phương pháp điều trị tự nhiên',
          'Giảm chi phí thuốc cho tất cả bệnh nhân',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Y học cá nhân hóa, hay y học chính xác, là một phương pháp tiếp cận y tế mới cho phép các bác sĩ lựa chọn phương pháp điều trị và phòng ngừa bệnh tật phù hợp nhất với từng bệnh nhân dựa trên thông tin di truyền và các yếu tố cá nhân khác.',
      },
    ],
  },
];

export const biotechnologyModuleData: ModuleData = {
  id: K2Module.Biotechnology,
  title: 'Biotechnology & Life Sciences',
  subtitle: 'Công nghệ sinh học & Khoa học sự sống',
  description:
    'Khám phá các công nghệ sinh học tiên tiến, từ kỹ thuật di truyền, chỉnh sửa gen CRISPR đến quy trình khám phá thuốc và y học cá nhân hóa.',
  category: 'science',
  icon: '🧬',
  color: 'from-cyan-500 to-blue-500',
  level: 'Nâng cao',
  duration: '10-12 giờ',
  features: [
    'Genetic Engineering',
    'CRISPR Technology',
    'Drug Discovery Process',
    'Personalized Medicine',
    'Bioinformatics',
  ],
  prerequisites: ['Kiến thức sinh học và hóa học cơ bản', 'Tư duy phân tích', 'Đam mê khoa học'],
  objectives: [
    'Hiểu sâu về các nguyên tắc và ứng dụng của công nghệ sinh học hiện đại.',
    'Nắm vững công nghệ chỉnh sửa gen CRISPR và các ứng dụng của nó.',
    'Tìm hiểu quy trình phát triển một loại thuốc mới từ phòng thí nghiệm ra thị trường.',
    'Khám phá các phương pháp chẩn đoán và điều trị dựa trên y học cá nhân hóa.',
  ],
  careerOutcomes: [
    'Kỹ sư Công nghệ sinh học',
    'Chuyên gia Nghiên cứu và Phát triển (R&D) trong ngành dược',
    'Nhà khoa học dữ liệu sinh học (Bioinformatician)',
    'Chuyên gia về các vấn đề pháp lý trong công nghệ sinh học',
    'Quản lý sản phẩm trong các công ty công nghệ sinh học',
  ],
  industryApplications: [
    { name: 'Y dược', description: 'Phát triển thuốc, vắc-xin, và liệu pháp gen.' },
    { name: 'Nông nghiệp', description: 'Tạo ra các giống cây trồng và vật nuôi có năng suất cao, chống chịu tốt.' },
    { name: 'Thực phẩm và Đồ uống', description: 'Sản xuất enzyme, men vi sinh, và các sản phẩm lên men.' },
    { name: 'Môi trường', description: 'Xử lý ô nhiễm sinh học và sản xuất năng lượng tái tạo.' },
    { name: 'Pháp y', description: 'Phân tích DNA để nhận dạng và điều tra tội phạm.' },
  ],
  marketDemand: {
    averageSalary: '80-200 triệu VND/năm',
    jobGrowth: '15% (nhanh)',
    hireDemand: 'Cao',
  },
  relatedModules: [K2Module.DataScienceAnalytics, K2Module.HealthcareTech],
  lessons: biotechnologyLessons,
};
