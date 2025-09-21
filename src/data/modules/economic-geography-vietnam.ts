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
        {
          question: 'Vùng kinh tế trọng điểm Bắc Bộ có vai trò như thế nào?',
          answer: 'Vùng kinh tế trọng điểm Bắc Bộ (bao gồm Hà Nội, Hải Phòng, Quảng Ninh, Hải Dương, Hưng Yên, Bắc Ninh, Vĩnh Phúc) là hạt nhân tăng trưởng, thúc đẩy sự phát triển của toàn vùng Đồng bằng sông Hồng và cả khu vực phía Bắc, đóng vai trò là trung tâm giao thương quốc tế.'
        },
        {
          question: 'Nông nghiệp của vùng có những đặc điểm nổi bật nào?',
          answer: 'Đây là vựa lúa lớn thứ hai của cả nước sau Đồng bằng sông Cửu Long. Nền nông nghiệp thâm canh cao, áp dụng nhiều tiến bộ khoa học kỹ thuật. Ngoài lúa, vùng còn phát triển mạnh vụ đông với các cây ưa lạnh như khoai tây, ngô đông, rau củ, đem lại hiệu quả kinh tế cao.'
        },
        {
          question: 'Ngành dịch vụ của vùng phát triển dựa trên những lợi thế nào?',
          answer: 'Ngành dịch vụ phát triển mạnh mẽ dựa trên lợi thế là thủ đô Hà Nội - trung tâm chính trị, văn hóa, giáo dục lớn nhất nước, và cảng Hải Phòng - cửa ngõ xuất nhập khẩu quan trọng của miền Bắc. Các ngành như tài chính, ngân hàng, viễn thông, du lịch đều rất phát triển.'
        },
        {
          question: 'Vấn đề môi trường cấp bách nhất của vùng là gì?',
          answer: 'Do mật độ dân số cao và tập trung nhiều khu công nghiệp, các vấn đề môi trường như ô nhiễm không khí ở các đô thị lớn, ô nhiễm nguồn nước mặt từ các sông chính (sông Nhuệ, sông Đáy), và xử lý rác thải sinh hoạt, công nghiệp là những thách thức lớn.'
        },
        {
          question: 'Tại sao vùng lại có trình độ phát triển dân trí cao?',
          answer: 'Vùng có lịch sử văn hóa lâu đời, là nơi tập trung hệ thống các trường đại học, viện nghiên cứu hàng đầu cả nước. Đây là cái nôi của nền văn minh lúa nước và có truyền thống hiếu học, tạo nên một mặt bằng dân trí cao so với các vùng khác.'
        },
        {
          question: 'Định hướng phát triển công nghiệp của vùng trong tương lai là gì?',
          answer: 'Vùng tập trung vào việc phát triển các ngành công nghiệp công nghệ cao, có giá trị gia tăng lớn và thân thiện với môi trường. Ưu tiên thu hút đầu tư vào các lĩnh vực như điện tử, công nghệ thông tin, sản xuất phần mềm, và công nghiệp phụ trợ.'
        },
        {
          question: 'Hệ thống đê điều có vai trò như thế nào đối với vùng?',
          answer: 'Hệ thống đê điều ven sông Hồng và các sông lớn khác có vai trò cực kỳ quan trọng trong việc phòng chống lũ lụt, bảo vệ các khu dân cư và vùng sản xuất nông nghiệp. Tuy nhiên, nó cũng làm cho vùng không được bồi đắp phù sa tự nhiên hàng năm.'
        },
        {
          question: 'Các làng nghề truyền thống có ý nghĩa gì đối với kinh tế vùng?',
          answer: 'Các làng nghề truyền thống (gốm Bát Tràng, lụa Vạn Phúc, đồ gỗ Đồng Kỵ...) không chỉ tạo ra nhiều việc làm, tăng thu nhập cho người dân mà còn là một tài nguyên du lịch nhân văn độc đáo, thu hút khách du lịch trong và ngoài nước, góp phần bảo tồn giá trị văn hóa.'
        }
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
        {
          question: 'Vùng Đông Nam Bộ có những khó khăn gì trong quá trình phát triển?',
          answer: 'Vùng đối mặt với nhiều thách thức như: cơ sở hạ tầng quá tải (đặc biệt là giao thông), vấn đề ô nhiễm môi trường do công nghiệp và đô thị hóa, nguy cơ thiếu nước vào mùa khô, và sự chênh lệch giàu nghèo ngày càng tăng.'
        },
        {
          question: 'Vai trò của hệ thống cảng biển ở Đông Nam Bộ là gì?',
          answer: 'Hệ thống cảng biển, đặc biệt là cụm cảng Sài Gòn và Cái Mép - Thị Vải, là cửa ngõ giao thương quốc tế lớn nhất Việt Nam. Đây là đầu mối xuất nhập khẩu hàng hóa cho cả vùng và các vùng lân cận, đóng vai trò then chốt trong chuỗi cung ứng toàn cầu.'
        },
        {
          question: 'Nông nghiệp của vùng có gì khác biệt so với các vùng khác?',
          answer: 'Nông nghiệp của Đông Nam Bộ phát triển theo hướng sản xuất hàng hóa quy mô lớn, chuyên canh các cây công nghiệp có giá trị cao như cao su, cà phê, điều, hồ tiêu. Vùng cũng áp dụng nhiều công nghệ cao vào sản xuất nông nghiệp.'
        },
        {
          question: 'Tại sao vùng này lại thu hút mạnh mẽ nguồn lao động nhập cư?',
          answer: 'Do là vùng kinh tế năng động nhất, tập trung nhiều khu công nghiệp, khu chế xuất, Đông Nam Bộ tạo ra nhu cầu việc làm rất lớn. Mức thu nhập và cơ hội phát triển cao hơn đã thu hút một lượng lớn lao động từ khắp các tỉnh thành trong cả nước.'
        },
        {
          question: 'Tài nguyên rừng của vùng có đặc điểm gì?',
          answer: 'Tài nguyên rừng không còn nhiều, chủ yếu là các khu rừng phòng hộ ven biển như Cần Giờ (được UNESCO công nhận là khu dự trữ sinh quyển thế giới) và các vườn quốc gia như Cát Tiên, Lò Gò - Xa Mát, có vai trò quan trọng trong việc bảo vệ đa dạng sinh học và cân bằng môi trường.'
        },
        {
          question: 'Định hướng phát triển của vùng trong tương lai là gì?',
          answer: 'Vùng đang chuyển đổi mô hình tăng trưởng theo chiều sâu, ưu tiên phát triển các ngành dịch vụ cao cấp (tài chính, logistics), công nghiệp công nghệ cao, và nông nghiệp công nghệ cao. Đồng thời, tập trung giải quyết các vấn đề về hạ tầng, môi trường và liên kết vùng.'
        },
        {
          question: 'Vùng tứ giác kinh tế trọng điểm phía Nam gồm những tỉnh/thành nào?',
          answer: 'Vùng kinh tế trọng điểm phía Nam bao gồm TP. Hồ Chí Minh, Bình Dương, Đồng Nai, và Bà Rịa - Vũng Tàu. Đây là khu vực năng động nhất, đóng góp phần lớn vào GDP và ngân sách của cả nước.'
        },
        {
          question: 'Ngoài dầu khí, vùng còn có tiềm năng khoáng sản nào khác?',
          answer: 'Ngoài dầu khí là quan trọng nhất, vùng còn có một số khoáng sản khác như sét và cao lanh dùng cho sản xuất vật liệu xây dựng, và cát thủy tinh ở ven biển, là nguyên liệu cho ngành công nghiệp thủy tinh, pha lê.'
        }
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
        {
          question: 'Tài nguyên du lịch nhân văn của Việt Nam bao gồm những gì?',
          answer: 'Bao gồm các di tích lịch sử - văn hóa (Cố đô Huế, Thánh địa Mỹ Sơn), các di sản thế giới được UNESCO công nhận, các lễ hội truyền thống, làng nghề, và nền ẩm thực phong phú, đa dạng. Đây là yếu tố tạo nên sự khác biệt và sức hấp dẫn riêng cho du lịch Việt Nam.'
        },
        {
          question: 'Du lịch cộng đồng (Community-based tourism) là gì?',
          answer: 'Là loại hình du lịch do cộng đồng dân cư địa phương tổ chức, quản lý và hưởng lợi. Du khách sẽ được trải nghiệm cuộc sống, văn hóa bản địa một cách chân thực (ví dụ: ở homestay, tham gia làm nông). Loại hình này giúp tạo sinh kế bền vững cho người dân và bảo tồn văn hóa.'
        },
        {
          question: 'Thách thức lớn nhất đối với ngành du lịch Việt Nam là gì?',
          answer: 'Những thách thức chính bao gồm: tính mùa vụ cao, chất lượng dịch vụ chưa đồng đều, sản phẩm du lịch chưa thực sự đa dạng và độc đáo, vấn đề ô nhiễm môi trường tại các điểm du lịch nổi tiếng, và hạ tầng giao thông kết nối còn hạn chế.'
        },
        {
          question: '"Du lịch MICE" là gì?',
          answer: 'MICE là viết tắt của Meetings (Hội họp), Incentives (Khen thưởng), Conferences (Hội nghị), và Exhibitions (Triển lãm). Đây là loại hình du lịch kết hợp công việc, thu hút đối tượng khách hàng có chi tiêu cao và lưu trú dài ngày, là một phân khúc rất tiềm năng.'
        },
        {
          question: 'Sản phẩm du lịch đặc trưng của vùng miền núi phía Bắc là gì?',
          answer: 'Vùng này có thế mạnh về du lịch sinh thái và du lịch văn hóa, khám phá. Các sản phẩm nổi bật bao gồm trekking, ngắm ruộng bậc thang (Mù Cang Chải, Sa Pa), khám phá văn hóa các dân tộc thiểu số, và du lịch mạo hiểm trên các cung đường đèo hùng vĩ.'
        },
        {
          question: 'Vai trò của công nghệ số trong ngành du lịch hiện nay?',
          answer: 'Công nghệ số đóng vai trò then chốt, từ việc marketing điểm đến trên mạng xã hội, đặt phòng và vé trực tuyến, ứng dụng hướng dẫn viên ảo, cho đến việc quản lý điểm đến thông minh và phân tích dữ liệu lớn để hiểu rõ hơn về hành vi của du khách.'
        },
        {
          question: 'Tại sao ẩm thực là một yếu tố quan trọng của du lịch Việt Nam?',
          answer: 'Ẩm thực Việt Nam được biết đến trên toàn thế giới với sự đa dạng, tinh tế và tốt cho sức khỏe. Nhiều du khách quốc tế đến Việt Nam không chỉ để tham quan mà còn để thưởng thức các món ăn đặc trưng như Phở, Bánh mì, Nem rán. Ẩm thực là một "đại sứ" văn hóa hiệu quả.'
        },
        {
          question: 'Chính sách thị thực (visa) ảnh hưởng đến du lịch như thế nào?',
          answer: 'Chính sách thị thực thông thoáng, miễn visa cho nhiều quốc gia là một yếu tố cạnh tranh quan trọng để thu hút khách du lịch quốc tế. Việc đơn giản hóa thủ tục cấp visa hoặc kéo dài thời gian miễn thị thực có thể tạo ra một cú hích lớn cho ngành du lịch.'
        }
      ],
      quizzes: [
        {
          question: 'Tiềm năng du lịch biển đảo của Việt Nam được thể hiện qua yếu tố nào sau đây?',
          options: [
            'Việt Nam có đường bờ biển dài và nhiều đảo lớn nhỏ.',
            'Việt Nam nằm trong khu vực ôn đới, có mùa đông lạnh giá.',
            'Việt Nam có nhiều di tích lịch sử văn hóa được UNESCO công nhận.',
            'Việt Nam là quốc gia có diện tích nhỏ nhất Đông Nam Á.',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Việt Nam có đường bờ biển dài hơn 3260 km và hàng nghìn hòn đảo lớn nhỏ, tạo điều kiện thuận lợi cho phát triển du lịch biển đảo.',
        },
        {
          question: 'Một trong những thách thức lớn nhất đối với du lịch Việt Nam hiện nay là gì?',
          options: [
            'Thiếu điểm đến du lịch nổi tiếng.',
            'Chất lượng dịch vụ chưa đồng đều và ô nhiễm môi trường.',
            'Không có đủ nguồn nhân lực cho ngành du lịch.',
            'Mùa du lịch quá ngắn ngủi.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Ngành du lịch Việt Nam đang đối mặt với thách thức về chất lượng dịch vụ chưa đồng đều và ô nhiễm môi trường tại các điểm du lịch nổi tiếng.',
        },
        {
          question: 'Du lịch cộng đồng mang lại lợi ích gì cho địa phương?',
          options: [
            'Chỉ thu hút khách du lịch nước ngoài.',
            'Giúp bảo tồn văn hóa và tạo sinh kế bền vững cho người dân.',
            'Tạo ra nhiều khu nghỉ dưỡng sang trọng.',
            'Không mang lại lợi ích kinh tế đáng kể nào.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch cộng đồng giúp bảo tồn văn hóa bản địa, tạo sinh kế bền vững cho người dân thông qua việc tổ chức các hoạt động du lịch trải nghiệm.',
        },
        {
          question: 'MICE là loại hình du lịch kết hợp những hoạt động nào?',
          options: [
            'Chỉ bao gồm các hội nghị và triển lãm.',
            'Hội họp, khen thưởng, hội nghị và triển lãm.',
            'Du lịch mạo hiểm và khám phá.',
            'Nghỉ dưỡng và chăm sóc sức khỏe.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'MICE là viết tắt của Meetings (Hội họp), Incentives (Khen thưởng), Conferences (Hội nghị), và Exhibitions (Triển lãm), là loại hình du lịch kết hợp công việc và giải trí.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch sinh thái?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 3,
          explanation:
            'Sa Pa - Mù Cang Chải nổi tiếng với các tour trekking, ngắm ruộng bậc thang, và khám phá văn hóa các dân tộc thiểu số, là những hoạt động đặc trưng của du lịch sinh thái.',
        },
        {
          question: 'Yếu tố nào sau đây không phải là lợi thế của du lịch Việt Nam?',
          options: [
            'Có nhiều di sản văn hóa thế giới được UNESCO công nhận.',
            'Đường bờ biển dài và nhiều bãi biển đẹp.',
            'Khí hậu nhiệt đới thuận lợi cho du lịch biển.',
            'Thiếu điểm đến du lịch nổi tiếng toàn cầu.',
          ],
          correctAnswerIndex: 3,
          explanation:
            'Việt Nam có nhiều lợi thế để phát triển du lịch, trong đó có sự đa dạng về tài nguyên du lịch tự nhiên và nhân văn, khí hậu nhiệt đới, và đặc biệt là nền ẩm thực phong phú.',
        },
        {
          question: 'Thành phố nào được coi là trung tâm du lịch lớn nhất Việt Nam hiện nay?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh là trung tâm du lịch lớn nhất Việt Nam, với nhiều điểm tham quan nổi tiếng, dịch vụ du lịch phát triển và là cửa ngõ quốc tế chính của Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những chính sách thị thực nhằm thu hút khách du lịch quốc tế đến Việt Nam?',
          options: [
            'Miễn thị thực cho công dân một số nước.',
            'Đơn giản hóa thủ tục cấp visa.',
            'Kéo dài thời gian miễn thị thực.',
            'Tăng cường kiểm soát và hạn chế cấp visa.',
          ],
          correctAnswerIndex: 3,
          explanation:
            'Việc tăng cường kiểm soát và hạn chế cấp visa trái ngược với xu hướng thu hút khách du lịch quốc tế. Các chính sách hiện tại chủ yếu nhằm đơn giản hóa thủ tục và mở rộng đối tượng miễn visa.',
        },
        {
          question: 'Điểm khác biệt lớn nhất giữa du lịch truyền thống và du lịch bền vững là gì?',
          options: [
            'Du lịch truyền thống chỉ tập trung vào lợi nhuận kinh tế.',
            'Du lịch bền vững không quan tâm đến lợi nhuận.',
            'Du lịch bền vững chú trọng đến bảo vệ môi trường và văn hóa địa phương.',
            'Du lịch truyền thống thường kéo dài quanh năm, còn du lịch bền vững chỉ diễn ra theo mùa vụ.',
          ],
          correctAnswerIndex: 2,
          explanation:
            'Du lịch bền vững chú trọng đến việc bảo vệ môi trường, văn hóa địa phương và mang lại lợi ích lâu dài cho cộng đồng, trong khi du lịch truyền thống thường tập trung vào lợi nhuận kinh tế trước mắt.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
        {
          question: 'Cảng biển nào là cửa ngõ giao thương quốc tế lớn nhất Việt Nam hiện nay?',
          options: [
            'Cảng Hải Phòng',
            'Cảng Sài Gòn',
            'Cảng Đà Nẵng',
            'Cảng Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Cảng Sài Gòn là cảng biển lớn nhất Việt Nam, đóng vai trò quan trọng trong việc xuất nhập khẩu hàng hóa và là trung tâm giao thương quốc tế của miền Nam Việt Nam.',
        },
        {
          question: 'Đâu không phải là một trong những hoạt động chính của du lịch sinh thái?',
          options: [
            'Trekking qua các khu rừng nguyên sinh.',
            'Tham quan các di tích lịch sử văn hóa.',
            'Ngắm cảnh thiên nhiên hoang dã.',
            'Tham gia vào các hoạt động bảo tồn động thực vật.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch sinh thái chủ yếu tập trung vào việc khám phá và trải nghiệm thiên nhiên hoang dã, tham gia vào các hoạt động bảo tồn động thực vật, trong khi tham quan các di tích lịch sử văn hóa thường thuộc về du lịch văn hóa.',
        },
        {
          question: 'Thành phố nào được mệnh danh là "Hòn ngọc Viễn Đông"?',
          options: [
            'Hà Nội',
            'TP. Hồ Chí Minh',
            'Đà Nẵng',
            'Nha Trang',
          ],
          correctAnswerIndex: 1,
          explanation:
            'TP. Hồ Chí Minh được mệnh danh là "Hòn ngọc Viễn Đông" không chỉ vì vẻ đẹp hiện đại, năng động mà còn vì vị trí địa lý thuận lợi, là trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Nam Việt Nam.',
        },
        {
          question: 'Một trong những đặc trưng của du lịch văn hóa ở Việt Nam là gì?',
          options: [
            'Chỉ tập trung vào các di tích lịch sử.',
            'Bao gồm các hoạt động trải nghiệm văn hóa địa phương.',
            'Chỉ dành cho khách du lịch nước ngoài.',
            'Không có sự tham gia của cộng đồng địa phương.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch văn hóa ở Việt Nam thường bao gồm các hoạt động trải nghiệm văn hóa địa phương, tham gia vào các lễ hội truyền thống, và khám phá ẩm thực đặc sắc, bên cạnh việc tham quan các di tích lịch sử.',
        },
        {
          question: 'Điểm du lịch nào sau đây nổi tiếng với loại hình du lịch văn hóa?',
          options: [
            'Vịnh Hạ Long',
            'Phố cổ Hội An',
            'Đồng bằng sông Cửu Long',
            'Sa Pa - Mù Cang Chải',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Phố cổ Hội An nổi tiếng với kiến trúc cổ kính, các lễ hội truyền thống, và ẩm thực đặc sắc, là những yếu tố thu hút khách du lịch đến với loại hình du lịch văn hóa.',
        },
        {
          question: 'Thế nào là một điểm đến du lịch bền vững?',
          options: [
            'Là điểm đến chỉ tập trung vào lợi nhuận kinh tế.',
            'Là điểm đến bảo vệ và tôn tạo các nguồn tài nguyên cho tương lai.',
            'Là điểm đến không quan tâm đến sự phát triển của cộng đồng địa phương.',
            'Là điểm đến chỉ mở cửa cho khách du lịch cao cấp.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Điểm đến du lịch bền vững là nơi mà hoạt động du lịch được tiến hành một cách có trách nhiệm, bảo vệ và tôn tạo các nguồn tài nguyên thiên nhiên và văn hóa, đồng thời mang lại lợi ích cho cộng đồng địa phương.',
        },
        {
          question: 'Một trong những lợi ích của việc phát triển du lịch bền vững là gì?',
          options: [
            'Tăng trưởng kinh tế nhanh chóng mà không cần quan tâm đến môi trường.',
            'Bảo tồn được các giá trị văn hóa, lịch sử và thiên nhiên.',
            'Chỉ tập trung vào việc thu hút khách du lịch cao cấp.',
            'Giảm thiểu sự tham gia của cộng đồng địa phương trong phát triển du lịch.',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Du lịch bền vững giúp bảo tồn các giá trị văn hóa, lịch sử và thiên nhiên, đồng thời mang lại lợi ích kinh tế cho cộng đồng địa phương thông qua việc tạo ra các sản phẩm du lịch độc đáo và có trách nhiệm.',
        },
      ],
    },
  ],
};