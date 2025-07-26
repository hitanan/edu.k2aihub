import { City } from '@/types';

// Static city data for all 34 provincial-level administrative units
export const citiesData: City[] = [
  {
    id: 1,
    code: '01',
    name: 'Thành phố Hà Nội',
    slug: 'ha-noi',
    oldNames: ['Hà Nội'],
    region: 'Bắc Bộ',
    coordinates: { x: 380, y: 180 },
    color: '#ff6b35',
    population: '8,807,523',
    area: '3,359.84 km²',
    description:
      'Hà Nội là thủ đô của Việt Nam, trung tâm chính trị, văn hóa và giáo dục của cả nước. Thành phố có lịch sử hơn 1000 năm tuổi với nhiều di tích lịch sử quan trọng như Văn Miếu, Hoàng thành Thăng Long.',
    fullPageContent: `
      <h2>Tổng quan về Hà Nội</h2>
      <p>Hà Nội là thủ đô của nước Cộng hòa Xã hội chủ nghĩa Việt Nam và là thành phố trực thuộc trung ương loại đặc biệt. Thành phố nằm ở vùng châu thổ sông Hồng, phía bắc Việt Nam.</p>
      
      <h3>Lịch sử</h3>
      <p>Hà Nội có lịch sử hơn 1000 năm, được thành lập năm 1010 dưới triều Lý với tên gọi Thăng Long. Qua các triều đại phong kiến, thành phố luôn giữ vai trò là trung tâm chính trị quan trọng.</p>
      
      <h3>Địa lý và Dân số</h3>
      <ul>
        <li>Diện tích: 3,359.84 km² (xếp hạng 32/34)</li>
        <li>Dân số: 8,807,523 người (xếp hạng 2/34)</li>
        <li>Khí hậu: Nhiệt đới gió mùa với 4 mùa rõ rệt</li>
      </ul>
      
      <h3>Kinh tế</h3>
      <p>Hà Nội là trung tâm kinh tế lớn thứ hai của Việt Nam với các chỉ số kinh tế ấn tượng:</p>
      <ul>
        <li>GRDP 2024: 1,425,521,277 triệu đồng (xếp hạng 2/34)</li>
        <li>Thu ngân sách: 511,338,453 triệu đồng (xếp hạng 2/34)</li>
        <li>Thu nhập bình quân: 89.00 triệu đồng/năm</li>
      </ul>
      
      <h3>Văn hóa và du lịch</h3>
      <p>Thành phố sở hữu nhiều di sản văn hóa thế giới như Hoàng thành Thăng Long, Văn Miếu - Quốc Tử Giám. Phố cổ Hà Nội với 36 phố phường là điểm thu hút khách du lịch quốc tế.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/H%C3%A0_N%E1%BB%99i" target="_blank">Wikipedia - Hà Nội</a></li>
        <li><a href="https://hanoi.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Hà Nội</a></li>
      </ul>
    `
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
    population: '555,809',
    area: '6,700.4 km²',
    description:
      'Cao Bằng là tỉnh miền núi phía Bắc, nổi tiếng với thác Bản Giốc - thác nước lớn nhất Việt Nam. Tỉnh có nhiều di tích lịch sử cách mạng quan trọng như hang Pác Bó - nơi Chủ tịch Hồ Chí Minh về nước.',
    fullPageContent: `
      <h2>Cao Bằng</h2>
      <p>Cao Bằng là tỉnh miền núi phía bắc Việt Nam, giáp biên giới với Trung Quốc. Tỉnh nổi tiếng với thác Bản Giốc - thác nước lớn nhất Việt Nam và nhiều di tích lịch sử cách mạng quan trọng.</p>
      
      <h3>Lịch sử</h3>
      <p>Cao Bằng là vùng đất có nhiều di tích lịch sử cách mạng quan trọng, đặc biệt là hang Pác Bó - nơi Chủ tịch Hồ Chí Minh về nước và hoạt động cách mạng đầu tiên.</p>
      
      <h3>Địa lý</h3>
      <p>Tỉnh có diện tích 6.700,4 km² với dân số 555.809 người. Cao Bằng có địa hình núi cao hiểm trở, khí hậu cận nhiệt đới gió mùa.</p>
      <ul>
        <li>Diện tích: 6.700,4 km²</li>
        <li>Dân số: 555.809 người</li>
        <li>Thủ phủ: Thành phố Cao Bằng</li>
      </ul>
      
      <h3>Văn hóa và Du lịch</h3>
      <p>Thác Bản Giốc là điểm đến du lịch nổi tiếng với dòng nước đổ từ độ cao 30m. Bên cạnh đó, tỉnh còn có nhiều hang động đẹp, di tích lịch sử và văn hóa đa dân tộc đặc sắc.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Cao_B%E1%BA%B1ng" target="_blank">Wikipedia - Cao Bằng</a></li>
        <li><a href="http://caobang.gov.vn/" target="_blank">Cổng thông tin tỉnh Cao Bằng</a></li>
      </ul>
    `
  },
  {
    id: 3,
    code: '08',
    name: 'Tuyên Quang',
    slug: 'tuyen-quang',
    oldNames: ['Tuyên Quang', 'Hà Giang'],
    region: 'Bắc Bộ',
    coordinates: { x: 360, y: 120 },
    color: '#45b7d1',
    population: '1,865,270',
    area: '13,795.50 km²',
    description:
      "Tuyên Quang là tỉnh miền núi phía Bắc sau sáp nhập với Hà Giang, được mệnh danh là 'thủ đô của rừng'. Tỉnh có nhiều danh thắng thiên nhiên như Hồ Na Hang, Công viên địa chất Đồng Văn.",
    fullPageContent: `
      <h2>Tỉnh Tuyên Quang - Vùng núi phía Bắc với tiềm năng phát triển</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Tuyên Quang là tỉnh miền núi với GRDP đạt <strong>88,751,988 triệu đồng</strong>, xếp hạng <strong>20/34</strong> toàn quốc. Thu ngân sách đạt <strong>11,838,569 triệu đồng</strong>, xếp hạng <strong>20/34</strong>. Sau sáp nhập với Hà Giang, tỉnh có quy mô kinh tế lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>36.23 triệu đồng/năm</strong>, xếp hạng <strong>33/34</strong> toàn quốc. Với dân số <strong>1,865,270 người</strong> (xếp hạng <strong>12/34</strong>) và diện tích <strong>13,795.50 km²</strong> (xếp hạng <strong>3/34</strong>), Tuyên Quang có diện tích lớn nhưng mật độ dân số thấp.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Theo quy hoạch mới, Tuyên Quang sáp nhập với Hà Giang tạo thành tỉnh lớn với địa hình chủ yếu là núi cao, nhiều thung lũng và cao nguyên đá. Đây là nơi có nhiều di tích lịch sử cách mạng và là cái nôi của nhiều phong trào yêu nước.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Tỉnh được mệnh danh là "thủ đô của rừng" với tiềm năng lớn về du lịch sinh thái. Có Công viên địa chất Đồng Văn - di sản địa chất thế giới, Hồ Na Hang, cao nguyên đá Đồng Văn với cảnh quan hùng vĩ và văn hóa các dân tộc thiểu số đặc sắc.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 88,751,988 triệu đồng (Xếp hạng 20/34)</li>
        <li>Thu ngân sách: 11,838,569 triệu đồng (Xếp hạng 20/34)</li>
        <li>Thu nhập bình quân: 36.23 triệu đồng/năm (Xếp hạng 33/34)</li>
        <li>Dân số: 1,865,270 người (Xếp hạng 12/34)</li>
        <li>Diện tích: 13,795.50 km² (Xếp hạng 3/34)</li>
        <li>Thủ phủ: Thành phố Tuyên Quang</li>
        <li>Trước sáp nhập: Tuyên Quang + Hà Giang</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Tuy%C3%AAn_Quang" target="_blank">Wikipedia - Tuyên Quang</a></li>
        <li><a href="http://tuyenquang.gov.vn/" target="_blank">Cổng thông tin tỉnh Tuyên Quang</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    oldNames: ['Lào Cai', 'Yên Bái'],
    region: 'Tây Bắc',
    coordinates: { x: 340, y: 100 },
    color: '#74b9ff',
    population: '1,778,785',
    area: '13,256.92 km²',
    description:
      'Lào Cai là tỉnh biên giới phía Bắc sau sáp nhập với Yên Bái, nổi tiếng với Sa Pa - điểm du lịch nổi tiếng thế giới. Tỉnh có đỉnh Fansipan - nóc nhà Đông Dương cao 3,143m. Đây là nơi sinh sống của nhiều dân tộc thiểu số với những thửa ruộng bậc thang tuyệt đẹp.',
    fullPageContent: `
      <h2>Tỉnh Lào Cai - Thiên đường du lịch miền núi phía Bắc</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Lào Cai là tỉnh miền núi với GRDP đạt <strong>88,089,394 triệu đồng</strong>, xếp hạng <strong>21/34</strong> toàn quốc. Thu ngân sách đạt <strong>15,298,559 triệu đồng</strong>, xếp hạng <strong>17/34</strong>. Sau sáp nhập với Yên Bái, tỉnh có quy mô kinh tế và tiềm năng phát triển lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>37.71 triệu đồng/năm</strong>, xếp hạng <strong>32/34</strong> toàn quốc. Với dân số <strong>1,778,785 người</strong> (xếp hạng <strong>13/34</strong>) và diện tích <strong>13,256.92 km²</strong> (xếp hạng <strong>4/34</strong>), Lào Cai có diện tích lớn và tiềm năng phát triển du lịch cao.</p>

      <h3>Vị trí địa lý và du lịch</h3>
      <p>Lào Cai là tỉnh biên giới phía Bắc, nổi tiếng với Sa Pa - điểm du lịch nổi tiếng thế giới với khí hậu mát mẻ quanh năm. Tỉnh có đỉnh Fansipan - nóc nhà Đông Dương cao 3,143m. Đây là nơi sinh sống của nhiều dân tộc thiểu số với văn hóa đặc sắc và những thửa ruộng bậc thang tuyệt đẹp.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Sau sáp nhập với Yên Bái, Lào Cai trở thành tỉnh có diện tích lớn với tiềm năng du lịch sinh thái, du lịch văn hóa và thương mại biên giới. Tỉnh có thế mạnh về nông nghiệp vùng cao, chăn nuôi và các sản phẩm đặc trưng như trà, thuốc nam.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 88,089,394 triệu đồng (Xếp hạng 21/34)</li>
        <li>Thu ngân sách: 15,298,559 triệu đồng (Xếp hạng 17/34)</li>
        <li>Thu nhập bình quân: 37.71 triệu đồng/năm (Xếp hạng 32/34)</li>
        <li>Dân số: 1,778,785 người (Xếp hạng 13/34)</li>
        <li>Diện tích: 13,256.92 km² (Xếp hạng 4/34)</li>
        <li>Thủ phủ: Thành phố Lào Cai</li>
        <li>Trước sáp nhập: Lào Cai + Yên Bái</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/L%C3%A0o_Cai" target="_blank">Wikipedia - Lào Cai</a></li>
        <li><a href="http://laocai.gov.vn/" target="_blank">Cổng thông tin tỉnh Lào Cai</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 8,
    code: '19',
    name: 'Thái Nguyên',
    slug: 'thai-nguyen',
    oldNames: ['Thái Nguyên', 'Bắc Kạn'],
    region: 'Bắc Bộ',
    coordinates: { x: 390, y: 150 },
    color: '#a29bfe',
    population: '1,799,489',
    area: '8,375.21 km²',
    description:
      "Thái Nguyên được mệnh danh là 'thủ đô chè' của Việt Nam với truyền thống trồng chè hàng trăm năm. Tỉnh là trung tâm công nghiệp quan trọng với nhiều khu công nghiệp lớn. Sau sáp nhập với Bắc Kạn, Thái Nguyên tạo thành một tỉnh có tiềm năng phát triển lớn.",
    fullPageContent: `
      <h2>Tỉnh Thái Nguyên - Thủ đô chè và trung tâm công nghiệp Bắc Bộ</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Thái Nguyên là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>185,613,943 triệu đồng</strong>, xếp hạng <strong>23/34</strong> toàn quốc. Thu ngân sách đạt <strong>21,057,020 triệu đồng</strong>, xếp hạng <strong>22/34</strong>. Sau sáp nhập với Bắc Kạn, tỉnh có quy mô kinh tế và diện tích lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>57.55 triệu đồng/năm</strong>, xếp hạng <strong>26/34</strong> toàn quốc. Với dân số <strong>1,799,489 người</strong> (xếp hạng <strong>25/34</strong>) và diện tích <strong>8,375.21 km²</strong> (xếp hạng <strong>19/34</strong>), Thái Nguyên có quy mô trung bình với tiềm năng phát triển công nghiệp.</p>

      <h3>Vị trí địa lý và đặc sản</h3>
      <p>Thái Nguyên được mệnh danh là "thủ đô chè" của Việt Nam với truyền thống trồng chè hàng trăm năm và sản phẩm chè Thái Nguyên nổi tiếng. Tỉnh là trung tâm công nghiệp quan trọng với nhiều khu công nghiệp lớn và có Đại học Thái Nguyên - trung tâm giáo dục quan trọng của miền Bắc.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Sau sáp nhập với Bắc Kạn, Thái Nguyên có thêm tiềm năng về du lịch sinh thái, khoáng sản và nông lâm nghiệp. Tỉnh có vị trí giao thông thuận lợi, gần Hà Nội và biên giới Trung Quốc, tạo nhiều cơ hội phát triển thương mại, công nghiệp và du lịch.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 185,613,943 triệu đồng (Xếp hạng 23/34)</li>
        <li>Thu ngân sách: 21,057,020 triệu đồng (Xếp hạng 22/34)</li>
        <li>Thu nhập bình quân: 57.55 triệu đồng/năm (Xếp hạng 26/34)</li>
        <li>Dân số: 1,799,489 người (Xếp hạng 25/34)</li>
        <li>Diện tích: 8,375.21 km² (Xếp hạng 19/34)</li>
        <li>Thủ phủ: Thành phố Thái Nguyên</li>
        <li>Trước sáp nhập: Thái Nguyên + Bắc Kạn</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Th%C3%A1i_Nguy%C3%AAn" target="_blank">Wikipedia - Thái Nguyên</a></li>
        <li><a href="http://thainguyen.gov.vn/" target="_blank">Cổng thông tin tỉnh Thái Nguyên</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '813,978',
    area: '8,310.2 km²',
    description:
      'Lạng Sơn là tỉnh biên giới quan trọng với Trung Quốc, có cửa khẩu Đồng Đăng lớn nhất phía Bắc. Tỉnh có nhiều di tích lịch sử như Thành cổ Cây Thị, động Tam Thanh.',
    fullPageContent: `
      <h2>Lạng Sơn</h2>
      <p>Lạng Sơn là tỉnh biên giới phía bắc Việt Nam, giáp với Trung Quốc. Tỉnh có vị trí chiến lược quan trọng với cửa khẩu Đồng Đăng - cửa khẩu lớn nhất phía Bắc.</p>
      
      <h3>Lịch sử</h3>
      <p>Lạng Sơn có lịch sử lâu đời với nhiều di tích quan trọng như Thành cổ Cây Thị, động Tam Thanh. Đây là nơi có truyền thống anh hùng với nhiều câu chuyện lịch sử hào hùng.</p>
      
      <h3>Địa lý</h3>
      <p>Tỉnh có diện tích 8.310,2 km² với dân số 813.978 người. Lạng Sơn có địa hình núi cao, nhiều thung lũng và sông suối.</p>
      <ul>
        <li>Diện tích: 8.310,2 km²</li>
        <li>Dân số: 813.978 người</li>
        <li>Thủ phủ: Thành phố Lạng Sơn</li>
      </ul>
      
      <h3>Kinh tế</h3>
      <p>Lạng Sơn là cửa ngõ giao thương quan trọng với Trung Quốc. Tỉnh phát triển mạnh về thương mại biên giới và có tiềm năng lớn về du lịch.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/L%E1%BA%A1ng_S%C6%A1n" target="_blank">Wikipedia - Lạng Sơn</a></li>
        <li><a href="http://langson.gov.vn/" target="_blank">Cổng thông tin tỉnh Lạng Sơn</a></li>
      </ul>
    `
  },
  {
    id: 10,
    code: '22',
    name: 'Quảng Ninh',
    slug: 'quang-ninh',
    oldNames: ['Quảng Ninh'],
    region: 'Đông Bắc',
    coordinates: { x: 460, y: 150 },
    color: '#00b894',
    population: '1,429,841',
    area: '6,207.9 km²',
    description:
      'Quảng Ninh là tỉnh ven biển nổi tiếng với vịnh Hạ Long - di sản thiên nhiên thế giới. Tỉnh có nhiều đảo đẹp, hang động kỳ thú và là trung tâm khai thác than quan trọng.',
    fullPageContent: `
      <h2>Tỉnh Quảng Ninh - Trung tâm du lịch và công nghiệp</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Quảng Ninh là một trong những trung tâm kinh tế quan trọng của miền Bắc với GRDP đạt <strong>459,162,298 triệu đồng</strong>, xếp hạng <strong>8/34</strong> toàn quốc. Thu ngân sách đạt <strong>136,702,488 triệu đồng</strong>, xếp hạng <strong>8/34</strong>, thể hiện sức mạnh kinh tế của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>244.99 triệu đồng/năm</strong>, xếp hạng <strong>1/34</strong> toàn quốc - cao nhất cả nước. Với dân số <strong>1,429,841 người</strong> (xếp hạng <strong>15/34</strong>) và diện tích <strong>6,207.9 km²</strong> (xếp hạng <strong>18/34</strong>), Quảng Ninh có mức sống cao nhất Việt Nam.</p>

      <h3>Vị trí địa lý và du lịch</h3>
      <p>Quảng Ninh là tỉnh ven biển phía đông bắc Việt Nam, nổi tiếng với danh thắng Vịnh Hạ Long - Di sản thiên nhiên thế giới được UNESCO công nhận. Tỉnh giáp Trung Quốc về phía đông bắc và có đường bờ biển dài với nhiều đảo đẹp, tạo nên tiềm năng du lịch và thương mại biên giới lớn.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Quảng Ninh có vị trí chiến lược quan trọng, là cửa ngõ giao thương với Trung Quốc và trung tâm du lịch hàng đầu. Vịnh Hạ Long với hàng nghìn đảo đá vôi kỳ thú là điểm đến hàng đầu của du lịch Việt Nam. Tỉnh còn phát triển mạnh khai thác than đá và các ngành công nghiệp khác.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 459,162,298 triệu đồng (Xếp hạng 8/34)</li>
        <li>Thu ngân sách: 136,702,488 triệu đồng (Xếp hạng 8/34)</li>
        <li>Thu nhập bình quân: 244.99 triệu đồng/năm (Xếp hạng 1/34)</li>
        <li>Dân số: 1,429,841 người (Xếp hạng 15/34)</li>
        <li>Diện tích: 6,207.9 km² (Xếp hạng 18/34)</li>
        <li>Thủ phủ: Thành phố Hạ Long</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Quảng_Ninh" target="_blank">Wikipedia - Quảng Ninh</a></li>
        <li><a href="https://quangninh.gov.vn/" target="_blank">Cổng thông tin tỉnh Quảng Ninh</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '3,619,433',
    area: '4,718.6 km²',
    description:
      "Bắc Ninh là tỉnh có mật độ dân số cao nhất cả nước, được mệnh danh là 'đất tổ' văn hóa Việt Nam. Tỉnh nổi tiếng với làng quan họ Bắc Ninh và nhiều di tích lịch sử. Sau sáp nhập với Bắc Giang, tỉnh trở thành trung tâm công nghiệp quan trọng với nhiều khu công nghiệp lớn.",
    fullPageContent: `
      <h2>Tỉnh Bắc Ninh - Trung tâm công nghiệp công nghệ cao</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Bắc Ninh là một trong những trung tâm công nghiệp hàng đầu với GRDP đạt <strong>504,513,894 triệu đồng</strong>, xếp hạng <strong>7/34</strong> toàn quốc. Thu ngân sách đạt <strong>151,043,775 triệu đồng</strong>, xếp hạng <strong>6/34</strong>, cho thấy hiệu quả kinh tế cao của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>106.25 triệu đồng/năm</strong>, xếp hạng <strong>7/34</strong> toàn quốc. Với dân số <strong>3,619,433 người</strong> (xếp hạng <strong>7/34</strong>) và diện tích <strong>4,718.6 km²</strong> (xếp hạng <strong>24/34</strong>), Bắc Ninh có mật độ dân số rất cao và là trung tâm công nghiệp tập trung.</p>

      <h3>Vị trí địa lý và văn hóa</h3>
      <p>Bắc Ninh được mệnh danh là "đất tổ" văn hóa Việt Nam, nổi tiếng với làng quan họ và nhiều di tích lịch sử quan trọng. Tỉnh có vị trí địa lý thuận lợi, gần Hà Nội, tạo điều kiện phát triển công nghiệp và dịch vụ. Sau sáp nhập với Bắc Giang, tỉnh trở thành một trung tâm kinh tế lớn.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Bắc Ninh là trung tâm công nghiệp công nghệ cao quan trọng với nhiều khu công nghiệp lớn, đặc biệt trong lĩnh vực điện tử và công nghệ thông tin. Tỉnh có hạ tầng phát triển và lực lượng lao động chất lượng cao, là điểm đến hấp dẫn cho các nhà đầu tư trong và ngoài nước.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 504,513,894 triệu đồng (Xếp hạng 7/34)</li>
        <li>Thu ngân sách: 151,043,775 triệu đồng (Xếp hạng 6/34)</li>
        <li>Thu nhập bình quân: 106.25 triệu đồng/năm (Xếp hạng 7/34)</li>
        <li>Dân số: 3,619,433 người (Xếp hạng 7/34)</li>
        <li>Diện tích: 4,718.6 km² (Xếp hạng 24/34)</li>
        <li>Thủ phủ: Thành phố Bắc Ninh</li>
        <li>Trước sáp nhập: Bắc Ninh + Bắc Giang</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/B%E1%BA%AFc_Ninh" target="_blank">Wikipedia - Bắc Ninh</a></li>
        <li><a href="http://bacninh.gov.vn/" target="_blank">Cổng thông tin tỉnh Bắc Ninh</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 12,
    code: '25',
    name: 'Phú Thọ',
    slug: 'phu-tho',
    oldNames: ['Phú Thọ', 'Hòa Bình', 'Vĩnh Phúc'],
    region: 'Đồng bằng Bắc Bộ',
    coordinates: { x: 360, y: 160 },
    color: '#0984e3',
    population: '4,022,638',
    area: '9,361.38 km²',
    description:
      "Phú Thọ được mệnh danh là 'đất tổ' của dân tộc Việt Nam với đền Hùng - nơi thờ các vua Hùng. Tỉnh có vị trí giao thông quan trọng, là cầu nối giữa Hà Nội và các tỉnh Tây Bắc. Sau sáp nhập với Hòa Bình và Vĩnh Phúc, Phú Thọ có tiềm năng phát triển kinh tế lớn.",
    fullPageContent: `
      <h2>Tỉnh Phú Thọ - Đất tổ dân tộc và trung tâm kinh tế quan trọng</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Phú Thọ là một trong những trung tâm kinh tế quan trọng với GRDP đạt <strong>449,336,598 triệu đồng</strong>, xếp hạng <strong>9/34</strong> toàn quốc. Thu ngân sách đạt <strong>61,799,876 triệu đồng</strong>, xếp hạng <strong>9/34</strong>, thể hiện tiềm lực kinh tế mạnh mẽ sau sáp nhập.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>85.10 triệu đồng/năm</strong>, xếp hạng <strong>11/34</strong> toàn quốc. Với dân số <strong>4,022,638 người</strong> (xếp hạng <strong>6/34</strong>) và diện tích <strong>9,361.38 km²</strong> (xếp hạng <strong>9/34</strong>), Phú Thọ là một trong những tỉnh có quy mô lớn sau sáp nhập.</p>

      <h3>Vị trí văn hóa và lịch sử</h3>
      <p>Phú Thọ được mệnh danh là "đất tổ" của dân tộc Việt Nam với đền Hùng - nơi thờ các vua Hùng, tổ tiên của dân tộc Việt. Tỉnh có vị trí giao thông quan trọng, là cầu nối giữa Hà Nội và các tỉnh Tây Bắc. Sau sáp nhập với Hòa Bình và Vĩnh Phúc, tỉnh có thêm nhiều tiềm năng phát triển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Phú Thọ có vị trí địa lý thuận lợi, gần Hà Nội, với hạ tầng giao thông phát triển. Tỉnh có tiềm năng lớn về du lịch tâm linh với đền Hùng, công nghiệp chế biến và dịch vụ. Việc sáp nhập tạo ra một tỉnh có quy mô kinh tế lớn với nhiều lợi thế c경쟁 tranh.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 449,336,598 triệu đồng (Xếp hạng 9/34)</li>
        <li>Thu ngân sách: 61,799,876 triệu đồng (Xếp hạng 9/34)</li>
        <li>Thu nhập bình quân: 85.10 triệu đồng/năm (Xếp hạng 11/34)</li>
        <li>Dân số: 4,022,638 người (Xếp hạng 6/34)</li>
        <li>Diện tích: 9,361.38 km² (Xếp hạng 9/34)</li>
        <li>Thủ phủ: Thành phố Việt Trì</li>
        <li>Trước sáp nhập: Phú Thọ + Hòa Bình + Vĩnh Phúc</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Ph%C3%BA_Th%E1%BB%8D" target="_blank">Wikipedia - Phú Thọ</a></li>
        <li><a href="http://phuthe.gov.vn/" target="_blank">Cổng thông tin tỉnh Phú Thọ</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '4,664,124',
    area: '3,194.72 km²',
    description:
      'Hải Phòng là thành phố cảng lớn nhất miền Bắc sau sáp nhập với Hải Dương, cửa ngõ ra biển quan trọng của Việt Nam với cảng container lớn nhất Đông Nam Á.',
    fullPageContent: `
      <h2>Thành phố Hải Phòng</h2>
      <p>Hải Phòng là thành phố cảng lớn nhất miền Bắc Việt Nam sau khi sáp nhập với Hải Dương, là cửa ngõ ra biển quan trọng của cả nước với hệ thống cảng hiện đại.</p>
      
      <h3>Lịch sử và Sáp nhập</h3>
      <p>Theo quy hoạch mới, Hải Phòng sáp nhập với Hải Dương tạo thành thành phố với diện tích 3.194,72 km² và dân số 4.664.124 người, trở thành trung tâm kinh tế biển quan trọng.</p>
      
      <h3>Địa lý và Dân số</h3>
      <ul>
        <li>Diện tích: 3.194,72 km² (xếp hạng 33/34)</li>
        <li>Dân số: 4.664.124 người (xếp hạng 4/34)</li>
        <li>Bao gồm: Hải Phòng cũ + Hải Dương cũ</li>
      </ul>
      
      <h3>Kinh tế</h3>
      <p>Hải Phòng là trung tâm kinh tế biển mạnh với các chỉ số ấn tượng:</p>
      <ul>
        <li>GRDP 2024: 658,318,192 triệu đồng (xếp hạng 3/34)</li>
        <li>Thu ngân sách: 148,383,113 triệu đồng (xếp hạng 3/34)</li>
        <li>Thu nhập bình quân: 78.75 triệu đồng/năm</li>
      </ul>
      
      <h3>Cảng biển và Logistics</h3>
      <p>Cảng Hải Phòng là một trong những cảng container lớn nhất Đông Nam Á, đóng vai trò quan trọng trong thương mại quốc tế và logistics của Việt Nam.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/H%E1%BA%A3i_Ph%C3%B2ng" target="_blank">Wikipedia - Hải Phòng</a></li>
        <li><a href="https://haiphong.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Hải Phòng</a></li>
      </ul>
    `
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
    population: '3,760,650',
    area: '11,114.7 km²',
    description:
      'Thanh Hóa là tỉnh có diện tích và dân số lớn nhất miền Bắc, có bờ biển dài với nhiều bãi tắm đẹp. Tỉnh là quê hương Chủ tịch Hồ Chí Minh với làng Sen - Kim Liên.',
    fullPageContent: `
      <h2>Tỉnh Thanh Hóa - Trung tâm kinh tế miền Trung Bắc</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Thanh Hóa là một trong những trung tâm kinh tế quan trọng của miền Trung Bắc với GRDP đạt <strong>331,899,568 triệu đồng</strong>, xếp hạng <strong>5/34</strong> toàn quốc. Thu ngân sách đạt <strong>60,479,569 triệu đồng</strong>, xếp hạng <strong>5/34</strong>, cho thấy tiềm lực kinh tế mạnh mẽ của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>67.25 triệu đồng/năm</strong>, xếp hạng <strong>22/34</strong> toàn quốc. Với dân số <strong>3,760,650 người</strong> (xếp hạng <strong>3/34</strong>) và diện tích <strong>11,114.7 km²</strong> (xếp hạng <strong>5/34</strong>), Thanh Hóa là tỉnh có quy mô dân số và diện tích lớn nhất miền Bắc.</p>

      <h3>Vị trí địa lý và lịch sử</h3>
      <p>Thanh Hóa có lịch sử lâu đời với nhiều di tích quan trọng. Đây là quê hương Chủ tịch Hồ Chí Minh với làng Sen - Kim Liên, nơi Người sinh ra và lớn lên. Tỉnh có cả miền núi và ven biển với đường bờ biển dài 102km, tạo điều kiện phát triển đa dạng các ngành kinh tế.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Thanh Hóa sở hữu vị trí địa lý thuận lợi, là cửa ngõ kết nối miền Bắc với miền Trung. Tỉnh có nhiều tiềm năng phát triển du lịch với biển Sầm Sơn, Hồ Hàm Rồng, động Hoa Tiên và các khu công nghiệp hiện đại. Đây là trung tâm công nghiệp, nông nghiệp và du lịch quan trọng của vùng Bắc Trung Bộ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 331,899,568 triệu đồng (Xếp hạng 5/34)</li>
        <li>Thu ngân sách: 60,479,569 triệu đồng (Xếp hạng 5/34)</li>
        <li>Thu nhập bình quân: 67.25 triệu đồng/năm (Xếp hạng 22/34)</li>
        <li>Dân số: 3,760,650 người (Xếp hạng 3/34)</li>
        <li>Diện tích: 11,114.7 km² (Xếp hạng 5/34)</li>
        <li>Thủ phủ: Thành phố Thanh Hóa</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Thanh_H%C3%B3a" target="_blank">Wikipedia - Thanh Hóa</a></li>
        <li><a href="http://thanhhoa.gov.vn/" target="_blank">Cổng thông tin tỉnh Thanh Hóa</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '3,470,988',
    area: '16,493.7 km²',
    description:
      'Nghệ An là tỉnh có diện tích lớn nhất cả nước, có cả miền núi và ven biển. Tỉnh là quê hương của nhiều danh nhân lịch sử và có truyền thống cách mạng lâu đời. Nghệ An nổi tiếng với các sản phẩm nông nghiệp đặc trưng và có tiềm năng du lịch sinh thái lớn.',
    fullPageContent: `
      <h2>Tỉnh Nghệ An - Vùng đất anh hùng và kinh tế quan trọng</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Nghệ An là một trong những trung tâm kinh tế lớn của miền Trung với GRDP đạt <strong>261,433,982 triệu đồng</strong>, xếp hạng <strong>6/34</strong> toàn quốc. Thu ngân sách đạt <strong>44,127,386 triệu đồng</strong>, xếp hạng <strong>7/34</strong>, thể hiện tiềm lực kinh tế đáng kể của tỉnh.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>57.38 triệu đồng/năm</strong>, xếp hạng <strong>29/34</strong> toàn quốc. Với dân số <strong>3,470,988 người</strong> (xếp hạng <strong>4/34</strong>) và diện tích <strong>16,493.7 km²</strong> (xếp hạng <strong>1/34</strong>), Nghệ An là tỉnh có diện tích lớn nhất và dân số đông thứ 4 cả nước.</p>

      <h3>Vị trí địa lý và lịch sử</h3>
      <p>Nghệ An có lịch sử lâu đời và vinh quang, là quê hương của nhiều danh nhân, anh hùng dân tộc. Đây là vùng đất có truyền thống cách mạng với nhiều phong trào đấu tranh anh dũng. Tỉnh có địa hình đa dạng từ miền núi cao đến ven biển, tạo điều kiện phát triển nhiều ngành kinh tế.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Với diện tích lớn nhất cả nước, Nghệ An có nhiều tiềm năng phát triển về nông nghiệp, công nghiệp và du lịch. Tỉnh có nhiều danh thắng như quê Bác, Khu di tích Kim Liên, biển Cửa Lò và các khu công nghiệp phát triển. Đây là trung tâm quan trọng của vùng Bắc Trung Bộ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 261,433,982 triệu đồng (Xếp hạng 6/34)</li>
        <li>Thu ngân sách: 44,127,386 triệu đồng (Xếp hạng 7/34)</li>
        <li>Thu nhập bình quân: 57.38 triệu đồng/năm (Xếp hạng 29/34)</li>
        <li>Dân số: 3,470,988 người (Xếp hạng 4/34)</li>
        <li>Diện tích: 16,493.7 km² (Xếp hạng 1/34)</li>
        <li>Thủ phủ: Thành phố Vinh</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Ngh%E1%BB%87_An" target="_blank">Wikipedia - Nghệ An</a></li>
        <li><a href="http://nghean.gov.vn/" target="_blank">Cổng thông tin tỉnh Nghệ An</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '1,622,901',
    area: '5,994.4 km²',
    description:
      'Hà Tĩnh là tỉnh ven biển miền Trung, nổi tiếng là quê hương Chủ tịch Hồ Chí Minh. Tỉnh có nhiều di tích lịch sử quan trọng và phong cảnh thiên nhiên đẹp. Hà Tĩnh đang phát triển mạnh về công nghiệp với khu kinh tế Vũng Áng.',
    fullPageContent: `
      <h2>Tỉnh Hà Tĩnh - Quê hương Bác Hồ và trung tâm công nghiệp nặng</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Hà Tĩnh là tỉnh có tiềm lực kinh tế quan trọng với GRDP đạt <strong>112,855,090 triệu đồng</strong>, xếp hạng <strong>27/34</strong> toàn quốc. Thu ngân sách đạt <strong>17,972,968 triệu đồng</strong>, xếp hạng <strong>23/34</strong>. Tỉnh đang có sự phát triển mạnh mẽ về công nghiệp nặng.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>51.60 triệu đồng/năm</strong>, xếp hạng <strong>28/34</strong> toàn quốc. Với dân số <strong>1,622,901 người</strong> (xếp hạng <strong>27/34</strong>) và diện tích <strong>5,994.4 km²</strong> (xếp hạng <strong>27/34</strong>), Hà Tĩnh có quy mô trung bình nhưng tiềm năng phát triển lớn.</p>

      <h3>Vị trí lịch sử và văn hóa</h3>
      <p>Hà Tĩnh là tỉnh ven biển miền Trung, nổi tiếng là quê hương của Chủ tịch Hồ Chí Minh vĩ đại. Tỉnh có nhiều di tích lịch sử quan trọng như Làng Sen - Kim Liên, và phong cảnh thiên nhiên đẹp với bãi biển Thiên Cầm, vườn quốc gia Vũ Quang.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Hà Tĩnh đang phát triển mạnh về công nghiệp nặng với khu kinh tế Vũng Áng - một trong những khu kinh tế trọng điểm quốc gia. Tỉnh có cảng nước sâu, hạ tầng công nghiệp hiện đại và nhiều dự án đầu tư lớn từ trong và ngoài nước, hứa hẹn trở thành trung tâm công nghiệp quan trọng của miền Trung.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 112,855,090 triệu đồng (Xếp hạng 27/34)</li>
        <li>Thu ngân sách: 17,972,968 triệu đồng (Xếp hạng 23/34)</li>
        <li>Thu nhập bình quân: 51.60 triệu đồng/năm (Xếp hạng 28/34)</li>
        <li>Dân số: 1,622,901 người (Xếp hạng 27/34)</li>
        <li>Diện tích: 5,994.4 km² (Xếp hạng 27/34)</li>
        <li>Thủ phủ: Thành phố Hà Tĩnh</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/H%C3%A0_T%C4%A9nh" target="_blank">Wikipedia - Hà Tĩnh</a></li>
        <li><a href="http://hatinh.gov.vn/" target="_blank">Cổng thông tin tỉnh Hà Tĩnh</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '1,870,845',
    area: '12,700 km²',
    description:
      'Quảng Trị là vùng đất anh hùng với nhiều di tích lịch sử thời kỳ kháng chiến. Tỉnh có vị trí địa lý quan trọng ở vùng Bắc Trung Bộ. Sau sáp nhập với Quảng Bình, tỉnh có thêm các di sản thiên nhiên như động Phong Nha - Kẻ Bàng.',
    fullPageContent: `
      <h2>Tỉnh Quảng Trị - Vùng đất anh hùng và di sản thiên nhiên</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Quảng Trị là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>113,687,549 triệu đồng</strong>, xếp hạng <strong>26/34</strong> toàn quốc. Thu ngân sách đạt <strong>12,082,370 triệu đồng</strong>, xếp hạng <strong>27/34</strong>. Sau sáp nhập với Quảng Bình, tỉnh có quy mô kinh tế lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>48.65 triệu đồng/năm</strong>, xếp hạng <strong>30/34</strong> toàn quốc. Với dân số <strong>1,870,845 người</strong> (xếp hạng <strong>23/34</strong>) và diện tích <strong>12,700 km²</strong> (xếp hạng <strong>10/34</strong>), Quảng Trị có diện tích lớn với nhiều tiềm năng phát triển.</p>

      <h3>Vị trí lịch sử và di sản</h3>
      <p>Quảng Trị là vùng đất anh hùng với nhiều di tích lịch sử thời kỳ kháng chiến như Vịnh Mốc, Thành cổ Quảng Trị, cầu Hiền Lương. Tỉnh có vị trí địa lý quan trọng ở vùng Bắc Trung Bộ, là cửa ngõ nối liền miền Bắc và miền Nam.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Sau sáp nhập với Quảng Bình, tỉnh có thêm các di sản thiên nhiên thế giới như động Phong Nha - Kẻ Bàng, tạo tiềm năng lớn cho du lịch. Quảng Trị còn có vị trí giao thông thuận lợi, cảng biển và nhiều tiềm năng phát triển công nghiệp, nông nghiệp và dịch vụ.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 113,687,549 triệu đồng (Xếp hạng 26/34)</li>
        <li>Thu ngân sách: 12,082,370 triệu đồng (Xếp hạng 27/34)</li>
        <li>Thu nhập bình quân: 48.65 triệu đồng/năm (Xếp hạng 30/34)</li>
        <li>Dân số: 1,870,845 người (Xếp hạng 23/34)</li>
        <li>Diện tích: 12,700 km² (Xếp hạng 10/34)</li>
        <li>Thủ phủ: Thành phố Đông Hà</li>
        <li>Trước sáp nhập: Quảng Trị + Quảng Bình</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_Tr%E1%BB%8B" target="_blank">Wikipedia - Quảng Trị</a></li>
        <li><a href="http://quangtri.gov.vn/" target="_blank">Cổng thông tin tỉnh Quảng Trị</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '1,236,393',
    area: '4,947.1 km²',
    description:
      'Huế là cố đô của Việt Nam thời phong kiến, di sản văn hóa thế giới với Hoàng thành Huế. Thành phố có nền văn hóa cung đình độc đáo và ẩm thực truyền thống phong phú.',
    fullPageContent: `
      <h2>Tổng quan về Thành phố Huế</h2>
      <p>Huế là thành phố trực thuộc trung ương, cố đô của Việt Nam thời phong kiến. Thành phố nằm ở miền Trung Việt Nam, bên bờ sông Hương thơ mộng.</p>
      
      <h3>Lịch sử</h3>
      <p>Huế là kinh đô của triều Nguyễn từ 1802 đến 1945, nơi lưu giữ nhiều di sản văn hóa quý báu. Hoàng thành Huế được UNESCO công nhận là di sản văn hóa thế giới năm 1993.</p>
      
      <h3>Địa lý và khí hậu</h3>
      <p>Diện tích: 4,947.1 km²<br>
      Dân số: 1,236,393 người<br>
      Khí hậu: Nhiệt đới gió mùa, có mùa mưa từ tháng 9 đến tháng 2</p>
      
      <h3>Di sản văn hóa</h3>
      <p>Huế sở hữu hệ thống di tích cung đình phong phú bao gồm Hoàng thành, các lăng tẩm của các vua triều Nguyễn, và hệ thống đền chùa cổ kính.</p>
      
      <h3>Ẩm thực</h3>
      <p>Ẩm thực Huế mang đậm dấu ấn cung đình với các món ăn tinh tế như bún bò Huế, bánh khoái, chè Huế.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Hu%E1%BA%BF" target="_blank">Wikipedia - Huế</a></li>
        <li><a href="https://huecity.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Huế</a></li>
      </ul>
    `
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
    population: '3,065,628',
    area: '11,859.59 km²',
    description:
      'Đà Nẵng là thành phố trực thuộc trung ương, cửa ngõ kinh tế của miền Trung. Sau sáp nhập với Quảng Nam, thành phố có thêm di sản văn hóa thế giới Hội An và thánh địa Mỹ Sơn.',
    fullPageContent: `
      <h2>Thành phố Đà Nẵng - Cửa ngõ kinh tế miền Trung và trung tâm du lịch</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Đà Nẵng là một trong những trung tâm kinh tế quan trọng của miền Trung với GRDP đạt <strong>279,926,325 triệu đồng</strong>, xếp hạng <strong>14/34</strong> toàn quốc. Thu ngân sách đạt <strong>54,916,707 triệu đồng</strong>, xếp hạng <strong>7/34</strong>, thể hiện hiệu quả kinh tế cao của thành phố.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>64.68 triệu đồng/năm</strong>, xếp hạng <strong>12/34</strong> toàn quốc. Với dân số <strong>3,065,628 người</strong> (xếp hạng <strong>19/34</strong>) và diện tích <strong>11,859.59 km²</strong> (xếp hạng <strong>11/34</strong>), Đà Nẵng có mức sống khá cao và phát triển cân bằng.</p>

      <h3>Vị trí chiến lược và sáp nhập</h3>
      <p>Đà Nẵng là thành phố trực thuộc trung ương, cửa ngõ kinh tế của miền Trung Việt Nam. Sau sáp nhập với Quảng Nam, thành phố trở thành một trung tâm du lịch và văn hóa quan trọng với di sản văn hóa thế giới Hội An và thánh địa Mỹ Sơn. Thành phố có cả vùng núi, đồng bằng và bờ biển đẹp.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Đà Nẵng có bãi biển Mỹ Khê được bình chọn là một trong những bãi biển đẹp nhất thế giới. Với việc sáp nhập, thành phố có thêm nhiều di sản văn hóa và tiềm năng du lịch lớn, đồng thời là trung tâm công nghệ thông tin và dịch vụ quan trọng của miền Trung.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 279,926,325 triệu đồng (Xếp hạng 14/34)</li>
        <li>Thu ngân sách: 54,916,707 triệu đồng (Xếp hạng 7/34)</li>
        <li>Thu nhập bình quân: 64.68 triệu đồng/năm (Xếp hạng 12/34)</li>
        <li>Dân số: 3,065,628 người (Xếp hạng 19/34)</li>
        <li>Diện tích: 11,859.59 km² (Xếp hạng 11/34)</li>
        <li>Trung tâm: Quận Hải Châu</li>
        <li>Trước sáp nhập: Đà Nẵng + Quảng Nam</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90%C3%A0_N%E1%BA%B5ng" target="_blank">Wikipedia - Đà Nẵng</a></li>
        <li><a href="https://danang.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Đà Nẵng</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 22,
    code: '51',
    name: 'Quảng Ngãi',
    slug: 'quang-ngai',
    oldNames: ['Quảng Ngãi', 'Kon Tum'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 460, y: 420 },
    color: '#fd79a8',
    population: '2,161,755',
    area: '14,832.55 km²',
    description:
      'Quảng Ngãi là tỉnh ven biển Nam Trung Bộ, có đảo Lý Sơn nổi tiếng với tỏi Lý Sơn. Tỉnh có nhiều bãi biển đẹp và khu bảo tồn thiên nhiên. Sau sáp nhập với Kon Tum, tỉnh có thêm tiềm năng về du lịch sinh thái và văn hóa dân tộc.',
    fullPageContent: `
      <h2>Tỉnh Quảng Ngãi - Vùng đất anh hùng và đa dạng văn hóa</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Quảng Ngãi là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>173,526,456 triệu đồng</strong>, xếp hạng <strong>24/34</strong> toàn quốc. Thu ngân sách đạt <strong>33,685,093 triệu đồng</strong>, xếp hạng <strong>13/34</strong>. Sau sáp nhập với Kon Tum, tỉnh có quy mô kinh tế và tiềm năng lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>49.53 triệu đồng/năm</strong>, xếp hạng <strong>29/34</strong> toàn quốc. Với dân số <strong>2,161,755 người</strong> (xếp hạng <strong>22/34</strong>) và diện tích <strong>14,832.55 km²</strong> (xếp hạng <strong>5/34</strong>), Quảng Ngãi có diện tích lớn với nhiều tiềm năng phát triển.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Quảng Ngãi là tỉnh ven biển Nam Trung Bộ, có đảo Lý Sơn nổi tiếng với tỏi Lý Sơn và nhiều bãi biển đẹp. Sau sáp nhập với Kon Tum, tỉnh có địa hình đa dạng từ bờ biển đến vùng cao nguyên, tạo điều kiện phát triển đa dạng các ngành kinh tế và du lịch sinh thái.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Quảng Ngãi có nhiều tiềm năng phát triển với các di tích lịch sử, khu bảo tồn thiên nhiên, và sau sáp nhập có thêm văn hóa các dân tộc thiểu số từ Kon Tum. Tỉnh đang phát triển mạnh về du lịch biển và có tiềm năng lớn về năng lượng tái tạo, nông nghiệp và lâm nghiệp.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 173,526,456 triệu đồng (Xếp hạng 24/34)</li>
        <li>Thu ngân sách: 33,685,093 triệu đồng (Xếp hạng 13/34)</li>
        <li>Thu nhập bình quân: 49.53 triệu đồng/năm (Xếp hạng 29/34)</li>
        <li>Dân số: 2,161,755 người (Xếp hạng 22/34)</li>
        <li>Diện tích: 14,832.55 km² (Xếp hạng 5/34)</li>
        <li>Thủ phủ: Thành phố Quảng Ngãi</li>
        <li>Trước sáp nhập: Quảng Ngãi + Kon Tum</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_Ng%C3%A3i" target="_blank">Wikipedia - Quảng Ngãi</a></li>
        <li><a href="http://quangngai.gov.vn/" target="_blank">Cổng thông tin tỉnh Quảng Ngãi</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 23,
    code: '52',
    name: 'Gia Lai',
    slug: 'gia-lai',
    oldNames: ['Gia Lai', 'Bình Định'],
    region: 'Tây Nguyên',
    coordinates: { x: 440, y: 460 },
    color: '#00cec9',
    population: '3,583,693',
    area: '21,576.53 km²',
    description:
      'Gia Lai là tỉnh cao nguyên với khí hậu mát mẻ quanh năm, nổi tiếng với cà phê Buôn Ma Thuột. Tỉnh có nhiều thác nước đẹp và rừng nguyên sinh. Sau sáp nhập với Bình Định, Gia Lai trở thành tỉnh có diện tích lớn với đa dạng dân tộc thiểu số.',
    fullPageContent: `
      <h2>Tỉnh Gia Lai - Cao nguyên cà phê và đa dạng văn hóa</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Gia Lai là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>242,007,551 triệu đồng</strong>, xếp hạng <strong>19/34</strong> toàn quốc. Thu ngân sách đạt <strong>22,736,658 triệu đồng</strong>, xếp hạng <strong>19/34</strong>. Sau sáp nhập với Bình Định, tỉnh có quy mô kinh tế và diện tích lớn hơn đáng kể.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>47.93 triệu đồng/năm</strong>, xếp hạng <strong>31/34</strong> toàn quốc. Với dân số <strong>3,583,693 người</strong> (xếp hạng <strong>15/34</strong>) và diện tích <strong>21,576.53 km²</strong> (xếp hạng <strong>2/34</strong>), Gia Lai có diện tích lớn thứ 2 cả nước với mật độ dân số thưa.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Gia Lai là tỉnh cao nguyên với khí hậu mát mẻ quanh năm, nổi tiếng với cà phê Buôn Ma Thuột chất lượng cao. Tỉnh có nhiều thác nước đẹp và rừng nguyên sinh. Sau sáp nhập với Bình Định, tỉnh có thêm vùng ven biển, tạo sự đa dạng về địa hình từ cao nguyên đến bờ biển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Gia Lai có tiềm năng lớn về nông nghiệp (đặc biệt là cà phê), du lịch sinh thái và văn hóa dân tộc thiểu số. Sau sáp nhập với Bình Định, tỉnh có thêm tiềm năng phát triển du lịch biển, công nghiệp chế biến thủy sản và logistics. Đây là trung tâm quan trọng của vùng Tây Nguyên với nhiều cơ hội phát triển.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 242,007,551 triệu đồng (Xếp hạng 19/34)</li>
        <li>Thu ngân sách: 22,736,658 triệu đồng (Xếp hạng 19/34)</li>
        <li>Thu nhập bình quân: 47.93 triệu đồng/năm (Xếp hạng 31/34)</li>
        <li>Dân số: 3,583,693 người (Xếp hạng 15/34)</li>
        <li>Diện tích: 21,576.53 km² (Xếp hạng 2/34)</li>
        <li>Thủ phủ: Thành phố Pleiku</li>
        <li>Trước sáp nhập: Gia Lai + Bình Định</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Gia_Lai" target="_blank">Wikipedia - Gia Lai</a></li>
        <li><a href="http://gialai.gov.vn/" target="_blank">Cổng thông tin tỉnh Gia Lai</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 24,
    code: '56',
    name: 'Khánh Hòa',
    slug: 'khanh-hoa',
    oldNames: ['Khánh Hòa', 'Ninh Thuận'],
    region: 'Nam Trung Bộ',
    coordinates: { x: 480, y: 480 },
    color: '#6c5ce7',
    population: '2,243,554',
    area: '8,555.86 km²',
    description:
      'Khánh Hòa là tỉnh ven biển nổi tiếng với Nha Trang - thành phố du lịch biển hàng đầu Việt Nam. Tỉnh có nhiều hòn đảo đẹp và các khu nghỉ dưỡng cao cấp. Sau sáp nhập với Ninh Thuận, Khánh Hòa có bờ biển dài hơn với nhiều bãi tắm đẹp.',
    fullPageContent: `
      <h2>Tỉnh Khánh Hòa - Thiên đường du lịch biển Việt Nam</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Khánh Hòa là tỉnh có tiềm năng kinh tế du lịch với GRDP đạt <strong>191,357,151 triệu đồng</strong>, xếp hạng <strong>22/34</strong> toàn quốc. Thu ngân sách đạt <strong>25,880,100 triệu đồng</strong>, xếp hạng <strong>16/34</strong>. Sau sáp nhập với Ninh Thuận, tỉnh có quy mô kinh tế và tiềm năng du lịch lớn hơn.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>49.83 triệu đồng/năm</strong>, xếp hạng <strong>27/34</strong> toàn quốc. Với dân số <strong>2,243,554 người</strong> (xếp hạng <strong>21/34</strong>) và diện tích <strong>8,555.86 km²</strong> (xếp hạng <strong>17/34</strong>), Khánh Hòa có quy mô trung bình với thế mạnh về du lịch.</p>

      <h3>Vị trí địa lý và du lịch</h3>
      <p>Khánh Hòa là tỉnh ven biển nổi tiếng với Nha Trang - thành phố du lịch biển hàng đầu Việt Nam. Tỉnh có nhiều hòn đảo đẹp như Hòn Tre, Hòn Mun và các khu nghỉ dưỡng cao cấp. Sau sáp nhập với Ninh Thuận, tỉnh có bờ biển dài hơn với nhiều bãi tắm đẹp và văn hóa Chăm đặc sắc.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Khánh Hòa có tiềm năng rất lớn về du lịch biển, nghỉ dưỡng cao cấp và thể thao biển. Tỉnh là điểm đến ưa thích của khách du lịch quốc tế với hạ tầng du lịch phát triển. Sau sáp nhập, tỉnh có thêm tiềm năng về nông nghiệp, nuôi trồng thủy sản và văn hóa đa dạng.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 191,357,151 triệu đồng (Xếp hạng 22/34)</li>
        <li>Thu ngân sách: 25,880,100 triệu đồng (Xếp hạng 16/34)</li>
        <li>Thu nhập bình quân: 49.83 triệu đồng/năm (Xếp hạng 27/34)</li>
        <li>Dân số: 2,243,554 người (Xếp hạng 21/34)</li>
        <li>Diện tích: 8,555.86 km² (Xếp hạng 17/34)</li>
        <li>Thủ phủ: Thành phố Nha Trang</li>
        <li>Trước sáp nhập: Khánh Hòa + Ninh Thuận</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Kh%C3%A1nh_H%C3%B2a" target="_blank">Wikipedia - Khánh Hòa</a></li>
        <li><a href="http://khanhhoa.gov.vn/" target="_blank">Cổng thông tin tỉnh Khánh Hòa</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 25,
    code: '66',
    name: 'Đắk Lắk',
    slug: 'dak-lak',
    oldNames: ['Đắk Lắk', 'Phú Yên'],
    region: 'Tây Nguyên',
    coordinates: { x: 460, y: 500 },
    color: '#fdcb6e',
    population: '3,346,853',
    area: '18,096.40 km²',
    description:
      "Đắk Lắk là tỉnh lớn nhất Tây Nguyên, được mệnh danh là 'thủ đô cà phê' của Việt Nam. Tỉnh có nhiều vườn quốc gia và khu bảo tồn thiên nhiên quý hiếm. Sau sáp nhập với Phú Yên, Đắk Lắk trở thành vùng sản xuất cà phê lớn nhất cả nước và có thêm bờ biển.",
    fullPageContent: `
      <h2>Tỉnh Đắk Lắk - Thủ đô cà phê và trung tâm Tây Nguyên</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Đắk Lắk là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>198,132,950 triệu đồng</strong>, xếp hạng <strong>21/34</strong> toàn quốc. Thu ngân sách đạt <strong>14,095,836 triệu đồng</strong>, xếp hạng <strong>25/34</strong>. Sau sáp nhập với Phú Yên, tỉnh có quy mô kinh tế và diện tích lớn hơn đáng kể.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>46.82 triệu đồng/năm</strong>, xếp hạng <strong>32/34</strong> toàn quốc. Với dân số <strong>3,346,853 người</strong> (xếp hạng <strong>17/34</strong>) và diện tích <strong>18,096.40 km²</strong> (xếp hạng <strong>3/34</strong>), Đắk Lắk có diện tích lớn thứ 3 cả nước với mật độ dân số thấp.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Đắk Lắk là tỉnh lớn nhất Tây Nguyên, được mệnh danh là "thủ đô cà phê" của Việt Nam. Tỉnh có nhiều vườn quốc gia và khu bảo tồn thiên nhiên quý hiếm như Vườn quốc gia Yok Đôn. Sau sáp nhập với Phú Yên, tỉnh có thêm bờ biển đẹp, tạo sự đa dạng về địa hình từ cao nguyên đến ven biển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Đắk Lắk có tiềm năng rất lớn về nông nghiệp (đặc biệt là cà phê), du lịch sinh thái và văn hóa dân tộc thiểu số. Sau sáp nhập với Phú Yên, tỉnh có thêm tiềm năng về du lịch biển, thủy sản và logistics. Đây là trung tâm quan trọng của vùng Tây Nguyên với nhiều cơ hội phát triển đa dạng.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 198,132,950 triệu đồng (Xếp hạng 21/34)</li>
        <li>Thu ngân sách: 14,095,836 triệu đồng (Xếp hạng 25/34)</li>
        <li>Thu nhập bình quân: 46.82 triệu đồng/năm (Xếp hạng 32/34)</li>
        <li>Dân số: 3,346,853 người (Xếp hạng 17/34)</li>
        <li>Diện tích: 18,096.40 km² (Xếp hạng 3/34)</li>
        <li>Thủ phủ: Thành phố Buôn Ma Thuột</li>
        <li>Trước sáp nhập: Đắk Lắk + Phú Yên</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BA%AFk_L%E1%BA%AFk" target="_blank">Wikipedia - Đắk Lắk</a></li>
        <li><a href="http://daklak.gov.vn/" target="_blank">Cổng thông tin tỉnh Đắk Lắk</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 26,
    code: '68',
    name: 'Lâm Đồng',
    slug: 'lam-dong',
    oldNames: ['Lâm Đồng', 'Đắk Nông', 'Bình Thuận'],
    region: 'Tây Nguyên',
    coordinates: { x: 480, y: 520 },
    color: '#e84393',
    population: '3,872,999',
    area: '24,233.07 km²',
    description:
      'Lâm Đồng là tỉnh cao nguyên với khí hậu mát mẻ, nổi tiếng với Đà Lạt - thành phố ngàn hoa. Tỉnh có nhiều thác nước đẹp, hồ nước trong xanh và là trung tâm sản xuất hoa, rau quả ôn đới. Sau sáp nhập với Đắk Nông và Bình Thuận, Lâm Đồng trở thành tỉnh có diện tích lớn nhất cả nước.',
    fullPageContent: `
      <h2>Tỉnh Lâm Đồng - Cao nguyên ngàn hoa và diện tích lớn nhất cả nước</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Lâm Đồng là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>319,878,839 triệu đồng</strong>, xếp hạng <strong>8/34</strong> toàn quốc. Thu ngân sách đạt <strong>27,190,308 triệu đồng</strong>, xếp hạng <strong>14/34</strong>. Sau sáp nhập với Đắk Nông và Bình Thuận, tỉnh có quy mô kinh tế và diện tích lớn nhất cả nước.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>59.36 triệu đồng/năm</strong>, xếp hạng <strong>23/34</strong> toàn quốc. Với dân số <strong>3,872,999 người</strong> (xếp hạng <strong>12/34</strong>) và diện tích <strong>24,233.07 km²</strong> (xếp hạng <strong>1/34</strong>), Lâm Đồng có diện tích lớn nhất cả nước với mật độ dân số thấp.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Lâm Đồng là tỉnh cao nguyên với khí hậu mát mẻ, nổi tiếng với Đà Lạt - thành phố ngàn hoa. Tỉnh có nhiều thác nước đẹp, hồ nước trong xanh và là trung tâm sản xuất hoa, rau quả ôn đới. Sau sáp nhập với Đắk Nông và Bình Thuận, tỉnh có địa hình đa dạng từ cao nguyên đến bờ biển.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Lâm Đồng có tiềm năng rất lớn về du lịch nghỉ dưỡng với khí hậu Châu Âu thu nhỏ, nông nghiệp công nghệ cao và du lịch sinh thái. Sau sáp nhập, tỉnh có thêm tiềm năng về du lịch biển, năng lượng tái tạo và công nghiệp chế biển. Với diện tích lớn nhất cả nước, đây là tỉnh có nhiều cơ hội phát triển đa dạng.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 319,878,839 triệu đồng (Xếp hạng 8/34)</li>
        <li>Thu ngân sách: 27,190,308 triệu đồng (Xếp hạng 14/34)</li>
        <li>Thu nhập bình quân: 59.36 triệu đồng/năm (Xếp hạng 23/34)</li>
        <li>Dân số: 3,872,999 người (Xếp hạng 12/34)</li>
        <li>Diện tích: 24,233.07 km² (Xếp hạng 1/34)</li>
        <li>Thủ phủ: Thành phố Đà Lạt</li>
        <li>Trước sáp nhập: Lâm Đồng + Đắk Nông + Bình Thuận</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/L%C3%A2m_%C4%90%E1%BB%93ng" target="_blank">Wikipedia - Lâm Đồng</a></li>
        <li><a href="http://lamdong.gov.vn/" target="_blank">Cổng thông tin tỉnh Lâm Đồng</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
  },
  {
    id: 27,
    code: '75',
    name: 'Đồng Nai',
    slug: 'dong-nai',
    oldNames: ['Đồng Nai', 'Bình Phước'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 500, y: 560 },
    color: '#00b894',
    population: '4,491,408',
    area: '12,737.18 km²',
    description:
      'Đồng Nai là tỉnh công nghiệp phát triển sau sáp nhập với Bình Phước, giáp ranh với TP.HCM. Tỉnh có nhiều khu công nghiệp lớn và là trung tâm sản xuất quan trọng.',
    fullPageContent: `
      <h2>Đồng Nai</h2>
      <p>Đồng Nai là tỉnh công nghiệp phát triển sau khi sáp nhập với Bình Phước, giáp ranh với TP.HCM. Tỉnh có nhiều khu công nghiệp lớn và là trung tâm sản xuất quan trọng của vùng kinh tế trọng điểm phía Nam.</p>
      
      <h3>Lịch sử và Sáp nhập</h3>
      <p>Theo quy hoạch mới, Đồng Nai sáp nhập với Bình Phước tạo thành tỉnh với diện tích 12.737,18 km² và dân số 4.491.408 người, trở thành tỉnh có tiềm lực kinh tế mạnh nhất miền Đông Nam Bộ.</p>
      
      <h3>Địa lý và Dân số</h3>
      <ul>
        <li>Diện tích: 12.737,18 km² (xếp hạng 9/34)</li>
        <li>Dân số: 4.491.408 người (xếp hạng 5/34)</li>
        <li>Bao gồm: Đồng Nai cũ + Bình Phước cũ</li>
      </ul>
      
      <h3>Kinh tế</h3>
      <p>Đồng Nai có nền kinh tế công nghiệp mạnh với các chỉ số dẫn đầu:</p>
      <ul>
        <li>GRDP 2024: 609,176,602 triệu đồng (xếp hạng 4/34)</li>
        <li>Thu ngân sách: 73,458,454 triệu đồng (xếp hạng 4/34)</li>
        <li>Thu nhập bình quân: 78.04 triệu đồng/năm</li>
      </ul>
      
      <h3>Công nghiệp và Sản xuất</h3>
      <p>Tỉnh có nhiều khu công nghiệp lớn như Amata, Long Thành, Nhơn Trạch, là trung tâm sản xuất ô tô, điện tử, dệt may và chế biến nông sản của cả nước.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/%C4%90%E1%BB%93ng_Nai" target="_blank">Wikipedia - Đồng Nai</a></li>
        <li><a href="http://dongnai.gov.vn/" target="_blank">Cổng thông tin tỉnh Đồng Nai</a></li>
      </ul>
    `
  },
  {
    id: 28,
    code: '79',
    name: 'Thành phố Hồ Chí Minh',
    slug: 'ho-chi-minh',
    oldNames: ['TP.HCM', 'Bà Rịa - Vũng Tàu', 'Bình Dương'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 480, y: 580 },
    color: '#ff6b35',
    population: '14,002,598',
    area: '6,772.59 km²',
    description:
      'TP.HCM là thành phố lớn nhất Việt Nam, trung tâm kinh tế, tài chính của cả nước. Sau sáp nhập với Bà Rịa - Vũng Tàu và Bình Dương, TP.HCM trở thành đô thị đặc biệt lớn nhất Việt Nam.',
    fullPageContent: `
      <h2>Thành phố Hồ Chí Minh</h2>
      <p>TP.HCM là thành phố lớn nhất Việt Nam, trung tâm kinh tế - tài chính - thương mại của cả nước. Sau sáp nhập với Bà Rịa - Vũng Tàu và Bình Dương, TP.HCM trở thành đô thị đặc biệt lớn nhất Việt Nam.</p>
      
      <h3>Lịch sử và Sáp nhập</h3>
      <p>TP.HCM được thành lập từ việc sáp nhập Sài Gòn - Gia Định. Theo quy hoạch mới, thành phố sáp nhập với Bà Rịa - Vũng Tàu và Bình Dương tạo thành đô thị đặc biệt với diện tích 6.772,59 km² và dân số 14.002.598 người.</p>
      
      <h3>Địa lý và Dân số</h3>
      <ul>
        <li>Diện tích: 6.772,59 km² (xếp hạng 22/34)</li>
        <li>Dân số: 14.002.598 người (xếp hạng 1/34)</li>
        <li>Trung tâm: Quận 1</li>
        <li>Bao gồm: TP.HCM cũ + Bà Rịa - Vũng Tàu + Bình Dương</li>
      </ul>
      
      <h3>Kinh tế</h3>
      <p>TP.HCM là động lực kinh tế lớn nhất Việt Nam với các chỉ số dẫn đầu cả nước:</p>
      <ul>
        <li>GRDP 2024: 2,715,782,233 triệu đồng (xếp hạng 1/34)</li>
        <li>Thu ngân sách: 681,935,856 triệu đồng (xếp hạng 1/34)</li>
        <li>Thu nhập bình quân: 85.53 triệu đồng/năm</li>
        <li>Đóng góp khoảng 23% GDP cả nước</li>
      </ul>
      
      <h3>Thương mại và Công nghiệp</h3>
      <p>Thành phố là trung tâm tài chính, thương mại, công nghiệp và dịch vụ lớn nhất Việt Nam. Có cảng Sài Gòn và nhiều khu công nghiệp phát triển.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh" target="_blank">Wikipedia - TP.HCM</a></li>
        <li><a href="https://www.hochiminhcity.gov.vn/" target="_blank">Cổng thông tin điện tử TP.HCM</a></li>
      </ul>
    `
  },
  {
    id: 29,
    code: '80',
    name: 'Tây Ninh',
    slug: 'tay-ninh',
    oldNames: ['Tây Ninh', 'Long An'],
    region: 'Đông Nam Bộ',
    coordinates: { x: 460, y: 600 },
    color: '#a29bfe',
    population: '3,254,170',
    area: '8,536.44 km²',
    description:
      'Tây Ninh là tỉnh biên giới với Campuchia, nổi tiếng với núi Bà Đen và tòa thánh Cao Đài. Tỉnh có nhiều di tích lịch sử thời kỳ kháng chiến. Sau sáp nhập với Long An, Tây Ninh có thêm vùng đồng bằng sông Cửu Long với tiềm năng nông nghiệp lớn.',
    fullPageContent: `
      <h2>Tỉnh Tây Ninh - Vùng đất thiêng và cửa ngõ biên giới</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Tây Ninh là tỉnh có tiềm năng kinh tế với GRDP đạt <strong>312,456,603 triệu đồng</strong>, xếp hạng <strong>10/34</strong> toàn quốc. Thu ngân sách đạt <strong>39,704,480 triệu đồng</strong>, xếp hạng <strong>12/34</strong>. Sau sáp nhập với Long An, tỉnh có quy mô kinh tế và tiềm năng lớn hơn đáng kể.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>58.54 triệu đồng/năm</strong>, xếp hạng <strong>24/34</strong> toàn quốc. Với dân số <strong>3,254,170 người</strong> (xếp hạng <strong>18/34</strong>) và diện tích <strong>8,536.44 km²</strong> (xếp hạng <strong>18/34</strong>), Tây Ninh có quy mô trung bình với tiềm năng phát triển tốt.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Tây Ninh là tỉnh biên giới với Campuchia, nổi tiếng với núi Bà Đen - đỉnh núi cao nhất Nam Bộ và tòa thánh Cao Đài. Tỉnh có nhiều di tích lịch sử thời kỳ kháng chiến và văn hóa tôn giáo đặc sắc. Sau sáp nhập với Long An, tỉnh có thêm vùng đồng bằng sông Cửu Long phì nhiêu.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Tây Ninh có tiềm năng lớn về thương mại biên giới, du lịch tâm linh và nông nghiệp. Sau sáp nhập với Long An, tỉnh có thêm tiềm năng về nông nghiệp công nghệ cao, chăn nuôi và logistics. Đây là cửa ngõ quan trọng nối liền Việt Nam với Campuchia và có nhiều cơ hội phát triển kinh tế biên giới.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 312,456,603 triệu đồng (Xếp hạng 10/34)</li>
        <li>Thu ngân sách: 39,704,480 triệu đồng (Xếp hạng 12/34)</li>
        <li>Thu nhập bình quân: 58.54 triệu đồng/năm (Xếp hạng 24/34)</li>
        <li>Dân số: 3,254,170 người (Xếp hạng 18/34)</li>
        <li>Diện tích: 8,536.44 km² (Xếp hạng 18/34)</li>
        <li>Thủ phủ: Thành phố Tây Ninh</li>
        <li>Trước sáp nhập: Tây Ninh + Long An</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/T%C3%A2y_Ninh" target="_blank">Wikipedia - Tây Ninh</a></li>
        <li><a href="http://tayninh.gov.vn/" target="_blank">Cổng thông tin tỉnh Tây Ninh</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
    population: '4,952,238',
    area: '9,888.91 km²',
    description:
      'An Giang là tỉnh biên giới với Campuchia sau sáp nhập với Kiên Giang, có núi Sam và nhiều di tích Phật giáo cổ. Tỉnh có thêm vùng ven biển với đảo Phú Quốc nổi tiếng.',
    fullPageContent: `
      <h2>An Giang</h2>
      <p>An Giang là tỉnh biên giới với Campuchia sau khi sáp nhập với Kiên Giang. Tỉnh có núi Sam và nhiều di tích Phật giáo cổ, cùng với vùng ven biển và đảo Phú Quốc nổi tiếng.</p>
      
      <h3>Lịch sử và Sáp nhập</h3>
      <p>Theo quy hoạch mới, An Giang sáp nhập với Kiên Giang tạo thành tỉnh với diện tích 9.888,91 km² và dân số 4.952.238 người. Việc sáp nhập mang lại vùng ven biển với tiềm năng du lịch lớn.</p>
      
      <h3>Địa lý</h3>
      <p>Tỉnh có diện tích 9.888,91 km² với dân số 4.952.238 người. An Giang có cả vùng đồng bằng sông Cửu Long và vùng ven biển với nhiều đảo.</p>
      <ul>
        <li>Diện tích: 9.888,91 km²</li>
        <li>Dân số: 4.952.238 người</li>
        <li>Thủ phủ: Thành phố Long Xuyên</li>
        <li>Bao gồm: An Giang cũ + Kiên Giang cũ</li>
      </ul>
      
      <h3>Văn hóa và Du lịch</h3>
      <p>Tỉnh nổi tiếng với lễ hội Ok Om Bok của đồng bào Khmer, núi Sam với nhiều di tích Phật giáo. Đảo Phú Quốc là điểm đến du lịch hàng đầu với biển đẹp và rừng nguyên sinh.</p>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/An_Giang" target="_blank">Wikipedia - An Giang</a></li>
        <li><a href="http://angiang.gov.vn/" target="_blank">Cổng thông tin tỉnh An Giang</a></li>
      </ul>
    `
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
    population: '4,199,824',
    area: '6,360.83 km²',
    description:
      'Cần Thơ là thành phố trực thuộc trung ương, trung tâm kinh tế của đồng bằng sông Cửu Long. Sau sáp nhập với Hậu Giang và Sóc Trăng, Cần Thơ trở thành đô thị lớn nhất ĐBSCL.',
    fullPageContent: `
      <h2>Thành phố Cần Thơ - Trung tâm kinh tế đồng bằng sông Cửu Long</h2>
      
      <h3>Tổng quan kinh tế</h3>
      <p>Cần Thơ là trung tâm kinh tế quan trọng với GRDP đạt <strong>281,674,628 triệu đồng</strong>, xếp hạng <strong>13/34</strong> toàn quốc. Thu ngân sách đạt <strong>24,788,357 triệu đồng</strong>, xếp hạng <strong>18/34</strong>. Sau sáp nhập với Hậu Giang và Sóc Trăng, thành phố có quy mô kinh tế lớn và vai trò trung tâm vùng ĐBSCL.</p>

      <h3>Chỉ tiêu kinh tế và xã hội</h3>
      <p>Thu nhập bình quân đầu người đạt <strong>59.56 triệu đồng/năm</strong>, xếp hạng <strong>22/34</strong> toàn quốc. Với dân số <strong>4,199,824 người</strong> (xếp hạng <strong>10/34</strong>) và diện tích <strong>6,360.83 km²</strong> (xếp hạng <strong>24/34</strong>), Cần Thơ có mật độ dân số cao và là đô thị lớn nhất ĐBSCL.</p>

      <h3>Vị trí địa lý và sáp nhập</h3>
      <p>Cần Thơ là thành phố trực thuộc trung ương, trung tâm kinh tế của đồng bằng sông Cửu Long. Thành phố nằm trong vùng trung tâm ĐBSCL với hệ thống sông ngòi chằng chịt. Sau sáp nhập với Hậu Giang và Sóc Trăng, Cần Thơ trở thành đô thị lớn nhất và quan trọng nhất của vùng.</p>

      <h3>Tiềm năng phát triển</h3>
      <p>Cần Thơ có vị trí chiến lược là trung tâm giao thông, thương mại và dịch vụ của ĐBSCL. Thành phố có sân bay quốc tế, cảng sông lớn và là trung tâm giáo dục, y tế của vùng. Sau sáp nhập, thành phố có thêm tiềm năng về nông nghiệp, nuôi trồng thủy sản và du lịch sinh thái sông nước.</p>

      <h3>Thông tin cơ bản</h3>
      <ul>
        <li>GRDP: 281,674,628 triệu đồng (Xếp hạng 13/34)</li>
        <li>Thu ngân sách: 24,788,357 triệu đồng (Xếp hạng 18/34)</li>
        <li>Thu nhập bình quân: 59.56 triệu đồng/năm (Xếp hạng 22/34)</li>
        <li>Dân số: 4,199,824 người (Xếp hạng 10/34)</li>
        <li>Diện tích: 6,360.83 km² (Xếp hạng 24/34)</li>
        <li>Trung tâm: Quận Ninh Kiều</li>
        <li>Trước sáp nhập: Cần Thơ + Hậu Giang + Sóc Trăng</li>
      </ul>
      
      <h3>Tham khảo</h3>
      <ul>
        <li><a href="https://vi.wikipedia.org/wiki/C%E1%BA%A7n_Th%C6%A1" target="_blank">Wikipedia - Cần Thơ</a></li>
        <li><a href="https://cantho.gov.vn/" target="_blank">Cổng thông tin điện tử thành phố Cần Thơ</a></li>
      </ul>

      <p><em>Nguồn: Bảng xếp hạng kinh tế 34 tỉnh thành Việt Nam</em></p>
    `
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
