import { City } from '@/types';

// Static city data for all 34 provincial-level administrative units
export const citiesData: City[] = [
  {
    id: 1,
    code: '01',
    name: 'Thành phố Hà Nội',
    slug: 'ha-noi',
    oldNames: ['Hà Nội', 'Hà Đông', 'Sơn Tây'],
    region: 'Bắc Bộ',
    coordinates: { x: 380, y: 180 },
    color: '#ff6b35',
    population: '8,435,700',
    area: '3,359 km²',
    description:
      'Hà Nội là thủ đô của Việt Nam, trung tâm chính trị, văn hóa và giáo dục của cả nước. Thành phố có lịch sử hơn 1000 năm tuổi với nhiều di tích lịch sử quan trọng như Văn Miếu, Hoàng thành Thăng Long. Hà Nội được hình thành từ việc sáp nhập các tỉnh Hà Nội cũ, Hà Tây và một phần của Hòa Bình, Vĩnh Phúc.'
  },
  {
    id: 2,
    code: '04',
    name: 'Cao Bằng',
    slug: 'cao-bang',
    oldNames: ['Cao Bằng'],
    region: 'Bắc Bộ',
    coordinates: { x: 420, y: 90 },
    color: '#4ecdc4',
    population: '525,000',
    area: '6,707 km²',
    description:
      'Cao Bằng là tỉnh miền núi phía Bắc, nổi tiếng với thác Bản Giốc - thác nước lớn nhất Việt Nam. Tỉnh có nhiều di tích lịch sử cách mạng quan trọng như hang Pác Bó - nơi Chủ tịch Hồ Chí Minh về nước. Đây là vùng đất có nhiều dân tộc thiểu số sinh sống với văn hóa đặc sắc.'
  },
  {
    id: 3,
    code: '08',
    name: 'Tuyên Quang',
    slug: 'tuyen-quang',
    oldNames: ['Tuyên Quang'],
    region: 'Bắc Bộ',
    coordinates: { x: 360, y: 120 },
    color: '#45b7d1',
    population: '760,000',
    area: '5,867 km²',
    description:
      "Tuyên Quang là tỉnh miền núi phía Bắc, được mệnh danh là 'thủ đô của rừng'. Tỉnh có nhiều danh thắng thiên nhiên như Hồ Na Hang, Công viên địa chất Đồng Văn. Đây cũng là nơi có nhiều di tích lịch sử cách mạng và là cái nôi của nhiều phong trào yêu nước."
  },
  {
    id: 4,
    code: '11',
    name: 'Điện Biên',
    slug: 'dien-bien',
    oldNames: ['Điện Biên', 'Lai Châu cũ'],
    region: 'Tây Bắc',
    coordinates: { x: 280, y: 140 },
    color: '#96ceb4',
    population: '580,000',
    area: '9,562 km²',
    description:
      'Điện Biên nổi tiếng với chiến thắng Điện Biên Phủ lịch sử năm 1954. Tỉnh có địa hình đồi núi hiểm trở, khí hậu cận nhiệt đới ẩm gió mùa. Đây là nơi sinh sống của nhiều dân tộc thiểu số với văn hóa truyền thống đặc sắc.'
  },
  {
    id: 5,
    code: '12',
    name: 'Lai Châu',
    slug: 'lai-chau',
    oldNames: ['Lai Châu'],
    region: 'Tây Bắc',
    coordinates: { x: 260, y: 120 },
    color: '#feca57',
    population: '460,000',
    area: '9,068 km²',
    description:
      'Lai Châu là tỉnh miền núi Tây Bắc, có nhiều thung lũng màu mỡ và đỉnh núi cao. Tỉnh được biết đến với các sản phẩm nông nghiệp chất lượng cao như chè Shan Tuyết, các loại quả đặc sản. Đây là nơi sinh sống chủ yếu của đồng bào dân tộc Thái với nền văn hóa độc đáo.'
  },
  {
    id: 6,
    code: '14',
    name: 'Sơn La',
    slug: 'son-la',
    oldNames: ['Sơn La'],
    region: 'Tây Bắc',
    coordinates: { x: 320, y: 160 },
    color: '#ff9ff3',
    population: '1,250,000',
    area: '14,055 km²',
    description:
      'Sơn La là tỉnh có diện tích lớn nhất miền Bắc, nổi tiếng với nhà tù Sơn La - di tích lịch sử quan trọng. Tỉnh có thế mạnh về thủy điện với nhà máy thủy điện Sơn La lớn nhất Đông Nam Á. Đây cũng là vùng trồng chè, cà phê và các cây ăn quả có múi chất lượng cao.'
  },
  {
    id: 7,
    code: '15',
    name: 'Lào Cai',
    slug: 'lao-cai',
    oldNames: ['Lào Cai'],
    region: 'Tây Bắc',
    coordinates: { x: 340, y: 100 },
    color: '#74b9ff',
    population: '730,000',
    area: '6,364 km²',
    description:
      'Lào Cai là tỉnh biên giới phía Bắc, nổi tiếng với Sa Pa - điểm du lịch nổi tiếng thế giới. Tỉnh có đỉnh Fansipan - nóc nhà Đông Dương cao 3,143m. Đây là nơi sinh sống của nhiều dân tộc thiểu số với những thửa ruộng bậc thang tuyệt đẹp.'
  },
  {
    id: 8,
    code: '19',
    name: 'Thái Nguyên',
    slug: 'thai-nguyen',
    oldNames: ['Thái Nguyên', 'Bắc Cạn'],
    region: 'Bắc Bộ',
    coordinates: { x: 390, y: 150 },
    color: '#a29bfe',
    population: '1,280,000',
    area: '3,534 km²',
    description:
      "Thái Nguyên được mệnh danh là 'thủ đô chè' của Việt Nam với truyền thống trồng chè hàng trăm năm. Tỉnh là trung tâm công nghiệp quan trọng với nhiều khu công nghiệp lớn. Sau sáp nhập, Thái Nguyên bao gồm cả tỉnh Bắc Cạn cũ, tạo thành một tỉnh có tiềm năng phát triển lớn."
  },
  {
    id: 9,
    code: '20',
    name: 'Lạng Sơn',
    slug: 'lang-son',
    oldNames: ['Lạng Sơn'],
    region: 'Đông Bắc',
    coordinates: { x: 430, y: 120 },
    color: '#fd79a8',
    population: '780,000',
    area: '8,320 km²',
    description:
      'Lạng Sơn là tỉnh biên giới quan trọng với Trung Quốc, có cửa khẩu Đồng Đăng lớn nhất phía Bắc. Tỉnh có nhiều di tích lịch sử như Thành cổ Cây Thị, động Tam Thanh. Đây là nơi có truyền thống anh hùng với nhiều câu chuyện lịch sử hào hùng.'
  },
  {
    id: 10,
    code: '22',
    name: 'Quảng Ninh',
    slug: 'quang-ninh',
    oldNames: ['Quảng Ninh', 'Hải Dương một phần'],
    region: 'Đông Bắc',
    coordinates: { x: 460, y: 150 },
    color: '#00b894',
    population: '1,320,000',
    area: '6,102 km²',
    description:
      'Quảng Ninh là tỉnh ven biển nổi tiếng với vịnh Hạ Long - di sản thiên nhiên thế giới. Tỉnh có nhiều đảo đẹp, hang động kỳ thú và là trung tâm khai thác than quan trọng. Sau sáp nhập, Quảng Ninh mở rộng diện tích và trở thành cửa ngõ kinh tế quan trọng phía Bắc.'
  },
  {
    id: 11,
    code: '24',
    name: 'Bắc Ninh',
    slug: 'bac-ninh',
    oldNames: ['Bắc Ninh', 'Bắc Giang'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 420, y: 180 },
    color: '#e17055',
    population: '1,540,000',
    area: '822 km²',
    description:
      "Bắc Ninh là tỉnh có mật độ dân số cao nhất cả nước, được mệnh danh là 'đất tổ' văn hóa Việt Nam. Tỉnh nổi tiếng với làng quan họ Bắc Ninh và nhiều di tích lịch sử. Sau sáp nhập với Bắc Giang, tỉnh trở thành trung tâm công nghiệp quan trọng với nhiều khu công nghiệp lớn."
  },
  {
    id: 12,
    code: '25',
    name: 'Phú Thọ',
    slug: 'phu-tho',
    oldNames: ['Phú Thọ', 'Vĩnh Phúc'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 360, y: 160 },
    color: '#0984e3',
    population: '1,450,000',
    area: '3,533 km²',
    description:
      "Phú Thọ được mệnh danh là 'đất tổ' của dân tộc Việt Nam với đền Hùng - nơi thờ các vua Hùng. Tỉnh có vị trí giao thông quan trọng, là cầu nối giữa Hà Nội và các tỉnh Tây Bắc. Sau sáp nhập với Vĩnh Phúc, Phú Thọ có tiềm năng phát triển kinh tế lớn."
  },
  {
    id: 13,
    code: '31',
    name: 'Thành phố Hải Phòng',
    slug: 'hai-phong',
    oldNames: ['Hải Phòng', 'Hải Dương'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 440, y: 200 },
    color: '#6c5ce7',
    population: '2,130,000',
    area: '1,523 km²',
    description:
      'Hải Phòng là thành phố cảng lớn nhất miền Bắc, cửa ngõ ra biển quan trọng của Việt Nam. Thành phố có cảng Hải Phòng - một trong những cảng container lớn nhất Đông Nam Á. Sau sáp nhập với Hải Dương, Hải Phòng trở thành trung tâm kinh tế biển quan trọng.'
  },
  {
    id: 14,
    code: '33',
    name: 'Hưng Yên',
    slug: 'hung-yen',
    oldNames: ['Hưng Yên', 'Hà Nam'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 400, y: 200 },
    color: '#fd79a8',
    population: '1,180,000',
    area: '926 km²',
    description:
      'Hưng Yên là tỉnh nằm trong vùng kinh tế trọng điểm Bắc Bộ, có nhiều làng nghề truyền thống. Tỉnh nổi tiếng với nhãn lồng Hưng Yên và các sản phẩm nông nghiệp chất lượng cao. Sau sáp nhập với Hà Nam, tỉnh có diện tích và dân số lớn hơn đáng kể.'
  },
  {
    id: 15,
    code: '37',
    name: 'Ninh Bình',
    slug: 'ninh-binh',
    oldNames: ['Ninh Bình', 'Nam Định'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 380, y: 220 },
    color: '#00cec9',
    population: '1,050,000',
    area: '1,376 km²',
    description:
      "Ninh Bình được mệnh danh là 'Hạ Long trên cạn' với quần thể danh thắng Tràng An - di sản thiên nhiên và văn hóa thế giới. Tỉnh có nhiều đền chùa cổ kính như Bái Đính, Tam Cốc. Sau sáp nhập với Nam Định, tỉnh có thêm vùng ven biển phát triển."
  },
  {
    id: 16,
    code: '38',
    name: 'Thanh Hóa',
    slug: 'thanh-hoa',
    oldNames: ['Thanh Hóa'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 360, y: 260 },
    color: '#fdcb6e',
    population: '3,640,000',
    area: '11,132 km²',
    description:
      'Thanh Hóa là tỉnh có diện tích và dân số lớn nhất miền Bắc, có bờ biển dài với nhiều bãi tắm đẹp. Tỉnh là quê hương Chủ tịch Hồ Chí Minh với làng Sen - Kim Liên. Thanh Hóa có tiềm năng du lịch lớn với biển Sầm Sơn, Hồ Hàm Rồng và nhiều di tích lịch sử.'
  },
  {
    id: 17,
    code: '40',
    name: 'Nghệ An',
    slug: 'nghe-an',
    oldNames: ['Nghệ An', 'Hà Tĩnh một phần'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 360, y: 300 },
    color: '#e84393',
    population: '3,100,000',
    area: '16,490 km²',
    description:
      'Nghệ An là tỉnh có diện tích lớn nhất cả nước, có cả miền núi và ven biển. Tỉnh là quê hương của nhiều danh nhân lịch sử và có truyền thống cách mạng lâu đời. Nghệ An nổi tiếng với các sản phẩm nông nghiệp đặc trưng và có tiềm năng du lịch sinh thái lớn.'
  },
  {
    id: 18,
    code: '42',
    name: 'Hà Tĩnh',
    slug: 'ha-tinh',
    oldNames: ['Hà Tĩnh'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 380, y: 320 },
    color: '#00b894',
    population: '1,290,000',
    area: '6,056 km²',
    description:
      'Hà Tĩnh là tỉnh ven biển miền Trung, nổi tiếng là quê hương Chủ tịch Hồ Chí Minh. Tỉnh có nhiều di tích lịch sử quan trọng và phong cảnh thiên nhiên đẹp. Hà Tĩnh đang phát triển mạnh về công nghiệp với khu kinh tế Vũng Áng.'
  },
  {
    id: 19,
    code: '44',
    name: 'Quảng Trị',
    slug: 'quang-tri',
    oldNames: ['Quảng Trị', 'Quảng Bình'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 400, y: 360 },
    color: '#a29bfe',
    population: '870,000',
    area: '4,739 km²',
    description:
      'Quảng Trị là vùng đất anh hùng với nhiều di tích lịch sử thời kỳ kháng chiến. Tỉnh có vị trí địa lý quan trọng ở vùng Bắc Trung Bộ. Sau sáp nhập với Quảng Bình, tỉnh có thêm các di sản thiên nhiên như động Phong Nha - Kẻ Bàng.'
  },
  {
    id: 20,
    code: '46',
    name: 'Thành phố Huế',
    slug: 'hue',
    oldNames: ['Thừa Thiên Huế'],
    region: 'Bắc Trung Bộ',
    coordinates: { x: 420, y: 380 },
    color: '#74b9ff',
    population: '1,230,000',
    area: '5,009 km²',
    description:
      'Huế là cố đô của Việt Nam thời phong kiến, di sản văn hóa thế giới với Hoàng thành Huế. Thành phố có nền văn hóa cung đình độc đáo và ẩm thực truyền thống phong phú. Huế là trung tâm giáo dục quan trọng của miền Trung với nhiều trường đại học danh tiếng.'
  },
  {
    id: 21,
    code: '48',
    name: 'Thành phố Đà Nẵng',
    slug: 'da-nang',
    oldNames: ['Đà Nẵng', 'Quảng Nam'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 440, y: 400 },
    color: '#ff7675',
    population: '1,540,000',
    area: '1,285 km²',
    description:
      'Đà Nẵng là thành phố trực thuộc trung ương, cửa ngõ kinh tế của miền Trung. Thành phố có bãi biển Mỹ Khê được bình chọn là một trong những bãi biển đẹp nhất thế giới. Sau sáp nhập với Quảng Nam, Đà Nẵng có thêm di sản văn hóa thế giới Hội An và thánh địa Mỹ Sơn.'
  },
  {
    id: 22,
    code: '51',
    name: 'Quảng Ngãi',
    slug: 'quang-ngai',
    oldNames: ['Quảng Ngãi'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 460, y: 420 },
    color: '#fd79a8',
    population: '1,250,000',
    area: '5,153 km²',
    description:
      'Quảng Ngãi là tỉnh ven biển Nam Trung Bộ, có đảo Lý Sơn nổi tiếng với tỏi Lý Sơn. Tỉnh có nhiều bãi biển đẹp và khu bảo tồn thiên nhiên. Quảng Ngãi đang phát triển mạnh về du lịch biển và có tiềm năng lớn về năng lượng tái tạo.'
  },
  {
    id: 23,
    code: '52',
    name: 'Gia Lai',
    slug: 'gia-lai',
    oldNames: ['Gia Lai', 'Kon Tum'],
    region: 'Tây Nguyên',
    coordinates: { x: 440, y: 460 },
    color: '#00cec9',
    population: '1,510,000',
    area: '15,536 km²',
    description:
      'Gia Lai là tỉnh cao nguyên với khí hậu mát mẻ quanh năm, nổi tiếng với cà phê Buôn Ma Thuột. Tỉnh có nhiều thác nước đẹp và rừng nguyên sinh. Sau sáp nhập với Kon Tum, Gia Lai trở thành tỉnh có diện tích lớn với đa dạng dân tộc thiểu số.'
  },
  {
    id: 24,
    code: '56',
    name: 'Khánh Hòa',
    slug: 'khanh-hoa',
    oldNames: ['Khánh Hòa', 'Phú Yên'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 480, y: 480 },
    color: '#6c5ce7',
    population: '1,320,000',
    area: '5,197 km²',
    description:
      'Khánh Hòa là tỉnh ven biển nổi tiếng với Nha Trang - thành phố du lịch biển hàng đầu Việt Nam. Tỉnh có nhiều hòn đảo đẹp và các khu nghỉ dưỡng cao cấp. Sau sáp nhập với Phú Yên, Khánh Hòa có bờ biển dài hơn với nhiều bãi tắm đẹp.'
  },
  {
    id: 25,
    code: '66',
    name: 'Đắk Lắk',
    slug: 'dak-lak',
    oldNames: ['Đắk Lắk', 'Đắk Nông'],
    region: 'Tây Nguyên',
    coordinates: { x: 460, y: 500 },
    color: '#fdcb6e',
    population: '2,020,000',
    area: '13,125 km²',
    description:
      "Đắk Lắk là tỉnh lớn nhất Tây Nguyên, được mệnh danh là 'thủ đô cà phê' của Việt Nam. Tỉnh có nhiều vườn quốc gia và khu bảo tồn thiên nhiên quý hiếm. Sau sáp nhập với Đắk Nông, Đắk Lắk trở thành vùng sản xuất cà phê lớn nhất cả nước."
  },
  {
    id: 26,
    code: '68',
    name: 'Lâm Đồng',
    slug: 'lam-dong',
    oldNames: ['Lâm Đồng'],
    region: 'Tây Nguyên',
    coordinates: { x: 480, y: 520 },
    color: '#e84393',
    population: '1,350,000',
    area: '9,773 km²',
    description:
      'Lâm Đồng là tỉnh cao nguyên với khí hậu mát mẻ, nổi tiếng với Đà Lạt - thành phố ngàn hoa. Tỉnh có nhiều thác nước đẹp, hồ nước trong xanh và là trung tâm sản xuất hoa, rau quả ôn đới. Lâm Đồng là điểm du lịch nghỉ dưỡng lý tưởng với khí hậu Châu Âu thu nhỏ.'
  },
  {
    id: 27,
    code: '75',
    name: 'Đồng Nai',
    slug: 'dong-nai',
    oldNames: ['Đồng Nai', 'Bình Phước', 'Bình Dương'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 500, y: 560 },
    color: '#00b894',
    population: '3,240,000',
    area: '5,907 km²',
    description:
      'Đồng Nai là tỉnh công nghiệp phát triển, giáp ranh với TP.HCM. Tỉnh có nhiều khu công nghiệp lớn và là trung tâm sản xuất quan trọng. Sau sáp nhập với Bình Phước và Bình Dương, Đồng Nai trở thành tỉnh có tiềm lực kinh tế mạnh nhất miền Đông Nam Bộ.'
  },
  {
    id: 28,
    code: '79',
    name: 'Thành phố Hồ Chí Minh',
    slug: 'ho-chi-minh',
    oldNames: ['TP.HCM', 'Bà Rịa - Vũng Tàu'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 480, y: 580 },
    color: '#ff6b35',
    population: '10,420,000',
    area: '2,095 km²',
    description:
      'TP.HCM là thành phố lớn nhất Việt Nam, trung tâm kinh tế, tài chính của cả nước. Thành phố có mật độ dân số cao và là nơi tập trung nhiều doanh nghiệp lớn. Sau sáp nhập với Bà Rịa - Vũng Tàu, TP.HCM có thêm vùng ven biển phát triển du lịch và công nghiệp.'
  },
  {
    id: 29,
    code: '80',
    name: 'Tây Ninh',
    slug: 'tay-ninh',
    oldNames: ['Tây Ninh', 'Bình Thuận'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 460, y: 600 },
    color: '#a29bfe',
    population: '1,320,000',
    area: '4,039 km²',
    description:
      'Tây Ninh là tỉnh biên giới với Campuchia, nổi tiếng với núi Bà Đen và tòa thánh Cao Đài. Tỉnh có nhiều di tích lịch sử thời kỳ kháng chiến. Sau sáp nhập với Bình Thuận, Tây Ninh có thêm vùng ven biển với tiềm năng du lịch lớn.'
  },
  {
    id: 30,
    code: '82',
    name: 'Đồng Tháp',
    slug: 'dong-thap',
    oldNames: ['Đồng Tháp', 'Long An'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 440, y: 620 },
    color: '#74b9ff',
    population: '1,830,000',
    area: '3,238 km²',
    description:
      'Đồng Tháp là tỉnh đồng bằng sông Cửu Long, nổi tiếng với vườn quốc gia Tràm Chim. Tỉnh có nền nông nghiệp phát triển với sản lượng lúa cao. Sau sáp nhập với Long An, Đồng Tháp có vị trí giao thông quan trọng gần TP.HCM và biên giới Campuchia.'
  },
  {
    id: 31,
    code: '86',
    name: 'Vĩnh Long',
    slug: 'vinh-long',
    oldNames: ['Vĩnh Long', 'Tiền Giang', 'Bến Tre'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 460, y: 640 },
    color: '#fd79a8',
    population: '2,120,000',
    area: '2,367 km²',
    description:
      'Vĩnh Long là tỉnh nằm giữa lòng đồng bằng sông Cửu Long, có hệ thống sông ngòi chằng chịt. Tỉnh nổi tiếng với du lịch sinh thái sông nước và các sản phẩm nông nghiệp đặc trưng. Sau sáp nhập với Tiền Giang và Bến Tre, Vĩnh Long trở thành trung tâm nông nghiệp quan trọng của ĐBSCL.'
  },
  {
    id: 32,
    code: '91',
    name: 'An Giang',
    slug: 'an-giang',
    oldNames: ['An Giang', 'Kiên Giang'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 420, y: 660 },
    color: '#00cec9',
    population: '2,430,000',
    area: '3,406 km²',
    description:
      'An Giang là tỉnh biên giới với Campuchia, có núi Sam và nhiều di tích Phật giáo cổ. Tỉnh nổi tiếng với lễ hội Ok Om Bok của đồng bào Khmer. Sau sáp nhập với Kiên Giang, An Giang có thêm vùng ven biển với đảo Phú Quốc nổi tiếng.'
  },
  {
    id: 33,
    code: '92',
    name: 'Thành phố Cần Thơ',
    slug: 'can-tho',
    oldNames: ['Cần Thơ', 'Hậu Giang', 'Sóc Trăng'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 440, y: 680 },
    color: '#6c5ce7',
    population: '2,750,000',
    area: '1,409 km²',
    description:
      'Cần Thơ là thành phố trực thuộc trung ương, trung tâm kinh tế của đồng bằng sông Cửu Long. Thành phố nổi tiếng với chợ nổi Cái Răng và các món ăn đặc sản miền Tây. Sau sáp nhập với Hậu Giang và Sóc Trăng, Cần Thơ trở thành đô thị lớn nhất ĐBSCL.'
  },
  {
    id: 34,
    code: '96',
    name: 'Cà Mau',
    slug: 'ca-mau',
    oldNames: ['Cà Mau', 'Bạc Liêu'],
    region: 'Đồng bằng sông Cửu Long',
    coordinates: { x: 460, y: 720 },
    color: '#e17055',
    population: '1,640,000',
    area: '5,294 km²',
    description:
      'Cà Mau là tỉnh cực Nam của Việt Nam, có vị trí địa lý đặc biệt ở mũi Cà Mau. Tỉnh có rừng U Minh Hạ và nhiều khu bảo tồn thiên nhiên quý hiếm. Sau sáp nhập với Bạc Liêu, Cà Mau có thêm tiềm năng phát triển năng lượng gió và du lịch sinh thái.'
  }
];

export default citiesData;
