import { K2Module } from '@/data/k2-modules';
import { ModuleData } from '@/types';
import type { BaseLessonData } from '@/types/lesson-base';

export type PythonLesson = BaseLessonData;

export const pythonLessons: PythonLesson[] = [
  {
    id: 'introduction-to-python',
    title: 'Bài 1: Giới thiệu Python',
    description:
      'Khám phá thế giới lập trình với Python! Bạn sẽ tự tay cài đặt phần mềm, viết chương trình đầu tiên và trải nghiệm cảm giác "Hello World" đầy hứng khởi. Bài học này giúp bạn tự tin bắt đầu mọi dự án sáng tạo với Python.',
    videoUrl: 'https://www.youtube.com/watch?v=XEpIMlaD_sI',
    difficulty: 'Dễ',
    duration: '60 phút',
    objectives: [
      'Hiểu Python là gì và tại sao nên học Python',
      'Cài đặt Python và IDE/Text Editor',
      'Viết và chạy chương trình Python đầu tiên',
      'Hiểu cấu trúc cơ bản của chương trình Python',
      'Sử dụng Python interactive shell',
    ],
    prerequisites: ['Kiến thức máy tính cơ bản'],
    exercises: [
      {
        title: 'Hello World Plus',
        description:
          'Viết chương trình in ra lời chào với tên của bạn. Hints: Dùng input() để nhận dữ liệu từ user, Dùng f"..." để chèn biến vào string, Mỗi print() sẽ in một dòng mới.',
        difficulty: 'Dễ',
        solution: `name = input("Tên của bạn: ")
print(f"Xin chào {name}!")
print("Chào mừng bạn đến với Python!")`,
        procedure: ['Sử dụng input() để nhận tên', 'Sử dụng f-string để format', 'In ra ít nhất 2 dòng text'],
      },
    ],
    realWorldApplications: [
      'Web Development (Django, Flask)',
      'Data Science và Machine Learning',
      'Automation và Scripting',
      'Desktop Applications',
      'Game Development',
      'Scientific Computing',
    ],
    vietnamContext: {
      title: 'Python tại Việt Nam',
      content: [
        'Python là một trong những ngôn ngữ lập trình phổ biến nhất tại Việt Nam, đặc biệt trong lĩnh vực Khoa học Dữ liệu, AI và Web Development (Django).',
        'Cộng đồng Python Việt Nam (PyMi, PyCon Vietnam) rất lớn mạnh và thường xuyên tổ chức các buổi gặp gỡ, hội thảo.',
        'Nhiều công ty công nghệ lớn tại Việt Nam (VNG, FPT, Viettel) đang tuyển dụng mạnh mẽ các lập trình viên Python.',
        'Python được đưa vào giảng dạy ở nhiều trường đại học và trung tâm đào tạo lập trình trên cả nước.',
      ],
    },
    careerConnect: {
      name: 'Vương Quang Khải',
      title: 'Phó Tổng Giám đốc',
      company: 'VNG Corporation',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Python là ngôn ngữ của tương lai. Tại VNG, chúng tôi sử dụng Python để xây dựng các sản phẩm AI đột phá, phục vụ hàng triệu người dùng. Nắm vững Python là bạn đang nắm giữ chìa khóa để mở ra cánh cửa của cuộc cách mạng công nghiệp 4.0.',
    },
    quizzes: [
      {
        question: 'Tại sao Python lại phổ biến trong lĩnh vực Khoa học Dữ liệu và AI?',
        options: [
          'Vì nó là ngôn ngữ nhanh nhất',
          'Vì nó có cú pháp phức tạp, thử thách lập trình viên',
          'Vì nó có hệ sinh thái thư viện mạnh mẽ (NumPy, Pandas, TensorFlow) và cú pháp dễ đọc',
          'Vì nó chỉ chạy được trên hệ điều hành Linux',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sức mạnh của Python trong AI và Data Science đến từ cộng đồng lớn và hệ thống thư viện phong phú, giúp các nhà phát triển xây dựng mô hình phức tạp một cách nhanh chóng và hiệu quả.',
      },
    ],
    faqs: [
      {
        question: 'Python là gì và tại sao nó lại phổ biến đến vậy?',
        answer:
          'Python là một ngôn ngữ lập trình bậc cao, thông dịch, đa năng với cú pháp đơn giản và dễ đọc. Nó phổ biến vì có một hệ sinh thái thư viện khổng lồ, một cộng đồng lớn mạnh, và khả năng ứng dụng rộng rãi từ phát triển web, khoa học dữ liệu, AI, đến tự động hóa.',
      },
      {
        question: 'Python có phải là lựa chọn tốt cho người mới bắt đầu không?',
        answer:
          'Chắc chắn rồi. Cú pháp của Python rất gần với ngôn ngữ tự nhiên, giúp người mới bắt đầu tập trung vào việc học các khái niệm lập trình thay vì phải vật lộn với các cú pháp phức tạp. Đây là một trong những ngôn ngữ được khuyến khích nhất cho người mới học lập trình.',
      },
      {
        question: 'Tôi có thể xây dựng những gì với Python?',
        answer:
          'Bạn có thể xây dựng gần như mọi thứ: các trang web và ứng dụng web (sử dụng Django, Flask), các mô hình học máy và AI, các công cụ phân tích dữ liệu, script tự động hóa, game, ứng dụng máy tính, và nhiều hơn nữa.',
      },
      {
        question: 'Sự khác biệt giữa Python 2 và Python 3 là gì?',
        answer:
          'Python 3 là phiên bản hiện tại và được khuyến nghị sử dụng. Python 2 là phiên bản cũ, đã ngừng được hỗ trợ chính thức từ năm 2020. Python 3 có nhiều cải tiến và cú pháp rõ ràng hơn so với Python 2.',
      },
      {
        question: 'Học Python có tốn phí không?',
        answer:
          'Không. Python là một ngôn ngữ lập trình mã nguồn mở và hoàn toàn miễn phí. Bạn có thể tải về, cài đặt và sử dụng Python cho bất kỳ mục đích nào, kể cả thương mại, mà không tốn bất kỳ chi phí bản quyền nào.',
      },
      {
        question: 'IDE là gì và tôi nên dùng IDE nào cho Python?',
        answer:
          'IDE (Integrated Development Environment) là môi trường phát triển tích hợp, cung cấp các công cụ như trình soạn thảo code, trình gỡ lỗi, và trình quản lý dự án. Đối với Python, các lựa chọn phổ biến bao gồm Visual Studio Code (với extension Python), PyCharm, và Jupyter Notebook cho khoa học dữ liệu.',
      },
      {
        question: 'Ngôn ngữ "thông dịch" (interpreted language) nghĩa là gì?',
        answer:
          'Điều đó có nghĩa là code Python được thực thi từng dòng một bởi một chương trình gọi là trình thông dịch. Điều này khác với các ngôn ngữ "biên dịch" (compiled language) như C++, nơi toàn bộ code phải được chuyển đổi thành mã máy trước khi chạy.',
      },
      {
        question: 'Mất bao lâu để học Python?',
        answer:
          'Bạn có thể học các kiến thức cơ bản của Python trong vài tuần. Tuy nhiên, để trở nên thành thạo và có thể xây dựng các ứng dụng phức tạp, bạn sẽ cần vài tháng đến một năm thực hành và học hỏi liên tục.',
      },
      {
        question: 'Tôi có thể tìm sự giúp đỡ từ cộng đồng Python ở Việt Nam ở đâu?',
        answer:
          'Cộng đồng Python Việt Nam rất năng động. Bạn có thể tham gia các nhóm trên Facebook như "PyMi.vn", "Python Việt Nam", hoặc tham dự các sự kiện, hội thảo như PyCon Vietnam để kết nối và học hỏi.',
      },
      {
        question: 'Chương trình "Hello, World!" trong Python trông như thế nào?',
        answer:
          'Nó cực kỳ đơn giản, chỉ cần một dòng code: `print("Hello, World!")`. Điều này thể hiện triết lý thiết kế đơn giản và rõ ràng của Python.',
      },
    ],
  },
  {
    id: 'variables-data-types',
    title: 'Bài 2: Variables và Data Types',
    description:
      'Biến hóa dữ liệu như một nhà ảo thuật! Bạn sẽ học cách lưu trữ, xử lý và chuyển đổi thông tin với các kiểu dữ liệu đa dạng. Từ số, chuỗi đến logic, mọi thứ đều nằm trong tầm tay bạn.',
    videoUrl: 'https://www.youtube.com/watch?v=0roB7wZMLqI',
    difficulty: 'Dễ',
    duration: '90 phút',
    objectives: [
      'Hiểu khái niệm biến và cách đặt tên biến',
      'Nắm vững các kiểu dữ liệu cơ bản: int, float, string, boolean',
      'Thực hiện các phép toán với numbers',
      'Làm việc với strings và string methods',
      'Chuyển đổi giữa các kiểu dữ liệu khác nhau',
    ],
    prerequisites: ['Bài 1: Giới thiệu Python'],
    exercises: [
      {
        title: 'Máy Tính Cá Nhân',
        description: 'Tạo chương trình tính toán thông tin cá nhân',
        difficulty: 'Trung bình',
        solution: `# Thu thập thông tin
name = input("Tên: ")
birth_year = int(input("Năm sinh: "))
height_cm = float(input("Chiều cao (cm): "))

# Tính toán
current_year = 2024
age = current_year - birth_year
height_m = height_cm / 100
is_adult = age >= 18

# Hiển thị kết quả
print(f"\\n=== THÔNG TIN CÁ NHÂN ===")
print(f"Tên: {name}")
print(f"Tuổi: {age}")
print(f"Chiều cao: {height_m:.2f}m")
print(f"Trạng thái: {'Người lớn' if is_adult else 'Trẻ em'}")`,
        procedure: [
          'Nhận input cho tên, năm sinh, chiều cao',
          'Tính tuổi dựa trên năm hiện tại',
          'Chuyển đổi chiều cao từ cm sang m',
          'Kiểm tra có phải người lớn không',
          'Hiển thị thông tin đẹp mắt',
        ],
        expectedResults:
          'Dùng int() cho năm sinh. Dùng float() cho chiều cao. Dùng :.2f để làm tròn 2 chữ số thập phân. Dùng conditional expression cho status.',
      },
      {
        title: 'String Processor',
        description: 'Chương trình xử lý chuỗi văn bản',
        difficulty: 'Trung bình',
        solution: `text = input("Nhập một câu: ")

# Thống kê cơ bản
word_count = len(text.split())
char_count = len(text)
char_no_space = len(text.replace(' ', ''))

# Xử lý văn bản
upper_text = text.upper()
lower_text = text.lower()
title_text = text.title()
reversed_text = text[::-1]

print(f"\\n=== PHÂN TÍCH VĂN BẢN ===")
print(f"Số từ: {word_count}")
print(f"Số ký tự (có space): {char_count}")
print(f"Số ký tự (không space): {char_no_space}")
print(f"IN HOA: {upper_text}")
print(f"in thường: {lower_text}")
print(f"Title Case: {title_text}")
print(f"Ngược lại: {reversed_text}")`,
        procedure: ['Đếm số từ và ký tự', 'Chuyển đổi case khác nhau', 'Đảo ngược chuỗi', 'Hiển thị thống kê đẹp'],
        expectedResults:
          'Dùng split() để chia thành từ. Dùng len() để đếm. Dùng string methods: upper(), lower(), title(). Dùng slicing [::-1] để đảo ngược.',
      },
    ],
    realWorldApplications: [
      'Form validation trong web apps',
      'Data cleaning và preprocessing',
      'Configuration file processing',
      'User input handling',
      'Data type conversion in APIs',
      'Financial calculations',
    ],
    vietnamContext: {
      title: 'Xử lý Dữ liệu Tiếng Việt',
      content: [
        'Khi làm việc với chuỗi (string) tiếng Việt, cần đảm bảo sử dụng encoding UTF-8 để hiển thị dấu chính xác.',
        'Các bài toán thực tế tại Việt Nam thường liên quan đến việc xử lý dữ liệu tiền tệ (VND), cần sử dụng kiểu số nguyên (int) để tránh sai số làm tròn của số thực (float).',
        'Việc chuyển đổi dữ liệu từ ngày tháng theo định dạng Việt Nam (DD/MM/YYYY) sang các đối tượng `datetime` là một tác vụ phổ biến.',
        'Boolean (True/False) được dùng nhiều trong logic của các hệ thống thương mại điện tử, ví dụ: `is_verified`, `has_promotion`.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hà Đông',
      title: 'Nhà phát triển Game',
      company: '.GEARS',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Trong game, mỗi biến số đều quan trọng, từ điểm số của người chơi đến tọa độ của nhân vật. Quản lý tốt các kiểu dữ liệu là bước đầu tiên để tạo ra một thế giới game hoạt động trơn tru và không có lỗi.',
    },
    quizzes: [
      {
        question:
          'Để lưu trữ số tiền 50,000 VND một cách an toàn và chính xác nhất trong Python, bạn nên dùng kiểu dữ liệu nào?',
        options: ['float', 'string', 'int', 'boolean'],
        correctAnswerIndex: 2,
        explanation:
          'Sử dụng `int` (lưu 50000) là tốt nhất để tránh các sai số làm tròn có thể xảy ra với `float`. Các phép tính tiền tệ nên được thực hiện trên số nguyên (ví dụ: tính theo đơn vị đồng hoặc xu).',
      },
    ],
    faqs: [
      {
        question: 'Biến trong Python là gì?',
        answer:
          'Biến là một cái tên bạn đặt để tham chiếu đến một giá trị được lưu trữ trong bộ nhớ. Thay vì phải nhớ địa chỉ bộ nhớ phức tạp, bạn chỉ cần sử dụng tên biến để truy cập giá trị đó.',
      },
      {
        question: 'Các kiểu dữ liệu cơ bản trong Python là gì?',
        answer:
          'Các kiểu dữ liệu cơ bản bao gồm: `int` (số nguyên), `float` (số thực), `str` (chuỗi ký tự), và `bool` (logic, chỉ có hai giá trị là `True` hoặc `False`).',
      },
      {
        question: 'Sự khác biệt giữa `int` và `float` là gì?',
        answer:
          '`int` dùng để biểu diễn các số nguyên (ví dụ: 10, -5, 0). `float` dùng để biểu diễn các số có phần thập phân (ví dụ: 3.14, -0.5). `float` cần nhiều bộ nhớ hơn và có thể có sai số làm tròn.',
      },
      {
        question: 'Làm thế nào để chuyển đổi một chuỗi thành một số?',
        answer:
          'Bạn có thể sử dụng các hàm `int()` và `float()`. Ví dụ: `int("123")` sẽ trả về số nguyên 123, và `float("3.14")` sẽ trả về số thực 3.14. Nếu chuỗi không thể chuyển đổi, Python sẽ báo lỗi `ValueError`.',
      },
      {
        question: 'Kiểu dữ liệu boolean dùng để làm gì?',
        answer:
          'Kiểu `bool` (boolean) được dùng để biểu diễn các giá trị chân lý: `True` (đúng) và `False` (sai). Nó là nền tảng cho các cấu trúc điều khiển như `if`, `while` để ra quyết định trong chương trình.',
      },
      {
        question: 'Tôi có thể thay đổi kiểu dữ liệu của một biến không?',
        answer:
          'Có. Python là ngôn ngữ có kiểu động (dynamically typed), nghĩa là bạn có thể gán một giá trị có kiểu dữ liệu khác cho cùng một biến. Ví dụ: `x = 10` (int), sau đó `x = "hello"` (str) là hoàn toàn hợp lệ.',
      },
      {
        question: 'f-string là gì và tại sao tôi nên sử dụng chúng?',
        answer:
          'f-string (formatted string literals) là một cách hiện đại và tiện lợi để chèn giá trị của biến vào bên trong một chuỗi. Ví dụ: `f"Xin chào, {ten_bien}"`. Nó dễ đọc, ngắn gọn và thường nhanh hơn các phương pháp định dạng chuỗi khác.',
      },
      {
        question: 'Làm thế nào để xử lý ký tự tiếng Việt trong chuỗi?',
        answer:
          'Python 3 mặc định sử dụng mã hóa UTF-8, hỗ trợ đầy đủ tiếng Việt và hầu hết các ngôn ngữ trên thế giới. Bạn chỉ cần đảm bảo rằng trình soạn thảo code của bạn cũng được lưu với mã hóa UTF-8.',
      },
      {
        question: 'Tại sao tôi lại gặp lỗi `TypeError`?',
        answer:
          'Lỗi `TypeError` xảy ra khi bạn thực hiện một thao tác trên một kiểu dữ liệu không được hỗ trợ. Ví dụ phổ biến là cố gắng cộng một số với một chuỗi (`5 + "hello"`). Hãy kiểm tra kiểu dữ liệu của các biến của bạn.',
      },
      {
        question: 'Quy tắc đặt tên biến tốt nhất trong Python là gì?',
        answer:
          'Theo quy ước PEP 8, tên biến nên được viết bằng chữ thường, và các từ được phân cách bằng dấu gạch dưới (ví dụ: `ten_hoc_sinh`). Tên biến nên có ý nghĩa và mô tả rõ ràng giá trị mà nó lưu trữ.',
      },
    ],
  },
  {
    id: 'control-structures',
    title: 'Bài 3: Control Structures',
    description:
      'Làm chủ luồng chương trình với các cấu trúc điều khiển! Bạn sẽ biết cách ra quyết định, lặp lại thao tác và xây dựng logic thông minh cho mọi ứng dụng Python.',
    videoUrl: 'https://www.youtube.com/watch?v=kIPpTYjareA',
    difficulty: 'Trung bình',
    duration: '120 phút',
    objectives: [
      'Sử dụng if, elif, else statements',
      'Hiểu boolean logic và comparison operators',
      'Sử dụng for loops với ranges và sequences',
      'Sử dụng while loops',
      'Kết hợp control structures để giải quyết bài toán',
    ],
    prerequisites: ['Bài 2: Variables và Data Types'],
    exercises: [
      {
        title: 'Grade Calculator',
        description: 'Tính điểm trung bình và xếp loại học tập',
        difficulty: 'Trung bình',
        solution: `print("CHƯƠNG TRÌNH TÍNH ĐIỂM TRUNG BÌNH")
print("Nhập -1 để kết thúc")

scores = []
while True:
    score = float(input("Nhập điểm (0-10): "))
    if score == -1:
        break
    if 0 <= score <= 10:
        scores.append(score)
    else:
        print("Điểm không hợp lệ!")

if scores:
    average = sum(scores) / len(scores)
    print(f"\\nSố điểm đã nhập: {len(scores)}")
    print(f"Điểm trung bình: {average:.2f}")
    
    if average >= 9:
        grade = "Xuất sắc"
    elif average >= 8:
        grade = "Giỏi" 
    elif average >= 6.5:
        grade = "Khá"
    elif average >= 5:
        grade = "Trung bình"
    else:
        grade = "Yếu"
    
    print(f"Xếp loại: {grade}")
else:
    print("Không có điểm nào được nhập!")`,
        procedure: [
          'Nhập nhiều điểm số (dùng while loop)',
          'Validate điểm trong khoảng 0-10',
          'Tính điểm trung bình',
          'Xếp loại theo thang điểm Việt Nam',
          'Xử lý trường hợp không nhập điểm nào',
        ],
        expectedResults:
          'Dùng list để lưu điểm. Dùng while True và break. Kiểm tra range với 0 <= score <= 10. Dùng elif cho multiple conditions.',
      },
    ],
    realWorldApplications: [
      'User authentication systems',
      'Data validation logic',
      'Menu-driven applications',
      'Game logic implementation',
      'Automated decision making',
      'Business rule processing',
    ],
    vietnamContext: {
      title: 'Logic trong Ứng dụng Thực tế',
      content: [
        'Các hệ thống thương mại điện tử (Tiki, Shopee) sử dụng `if-elif-else` để phân loại khách hàng (thường, bạc, vàng, kim cương) và áp dụng các chính sách ưu đãi khác nhau.',
        '`for` loop được dùng để duyệt qua danh sách sản phẩm, bài viết, hoặc bình luận để hiển thị lên giao diện người dùng.',
        '`while` loop thường được dùng trong các game để giữ cho game chạy cho đến khi người chơi chọn thoát, hoặc trong các hệ thống lắng nghe sự kiện.',
        'Logic điều khiển là nền tảng của các chatbot trả lời tự động, giúp bot quyết định câu trả lời dựa trên input của người dùng.',
      ],
    },
    careerConnect: {
      name: 'Đàm Quang Hùng',
      title: 'Lead Software Engineer',
      company: 'Grab Vietnam',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Hệ thống của Grab xử lý hàng triệu yêu cầu mỗi ngày. Logic điều khiển chính xác là xương sống giúp chúng tôi quyết định ghép cặp tài xế và khách hàng, tính toán giá cước và ước tính thời gian di chuyển một cách hiệu quả.',
    },
    quizzes: [
      {
        question:
          'Một trang web tin tức muốn hiển thị 10 bài báo mới nhất từ một danh sách 100 bài báo. Cấu trúc lặp nào là phù hợp nhất?',
        options: [
          'Một `while` loop chạy vô tận',
          'Một `for` loop duyệt qua 10 phần tử đầu tiên của danh sách',
          'Một `if-else` statement',
          'Không cần vòng lặp',
        ],
        correctAnswerIndex: 1,
        explanation:
          '`for` loop là lựa chọn lý tưởng để duyệt qua một số lượng phần tử xác định trong một chuỗi hoặc danh sách, giúp code ngắn gọn và dễ hiểu.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt giữa `if`, `elif`, và `else` là gì?',
        answer:
          '`if` được dùng để kiểm tra một điều kiện. Nếu đúng, khối lệnh của `if` sẽ được thực thi. `elif` (else if) được dùng để kiểm tra một điều kiện khác nếu điều kiện `if` trước đó là sai. `else` sẽ được thực thi nếu tất cả các điều kiện `if` và `elif` trước đó đều sai.',
      },
      {
        question: 'Làm thế nào để viết một vòng lặp `for`?',
        answer:
          'Vòng lặp `for` được dùng để duyệt qua các phần tử của một đối tượng có thể lặp (như list, string, tuple). Cú pháp chung là: `for ten_bien in doi_tuong_lap: ...`',
      },
      {
        question: 'Sự khác biệt giữa vòng lặp `for` và `while` là gì?',
        answer:
          'Vòng lặp `for` thường được sử dụng khi bạn biết trước số lần lặp (ví dụ: duyệt qua tất cả các phần tử của một danh sách). Vòng lặp `while` được sử dụng khi bạn muốn lặp cho đến khi một điều kiện nào đó không còn đúng nữa, và bạn không biết trước số lần lặp.',
      },
      {
        question: 'Hàm `range()` trong Python dùng để làm gì?',
        answer:
          'Hàm `range()` tạo ra một chuỗi các số. Nó thường được dùng trong vòng lặp `for` để lặp một số lần nhất định. Ví dụ, `range(5)` sẽ tạo ra các số 0, 1, 2, 3, 4.',
      },
      {
        question: 'Làm thế nào để thoát khỏi một vòng lặp sớm?',
        answer:
          'Bạn có thể sử dụng câu lệnh `break`. Khi gặp `break`, chương trình sẽ ngay lập tức thoát khỏi vòng lặp gần nhất chứa nó và tiếp tục thực thi các lệnh sau vòng lặp.',
      },
      {
        question: 'Từ khóa `pass` có tác dụng gì?',
        answer:
          '`pass` là một câu lệnh không làm gì cả. Nó được sử dụng như một chỗ giữ chỗ (placeholder) ở những nơi cú pháp yêu cầu phải có một câu lệnh nhưng bạn chưa muốn viết logic cho nó, ví dụ như trong một khối `if` hoặc một hàm rỗng.',
      },
      {
        question: 'Toán tử so sánh trong Python là gì?',
        answer:
          'Các toán tử so sánh dùng để so sánh hai giá trị và trả về `True` hoặc `False`. Chúng bao gồm: `==` (bằng), `!=` (không bằng), `>` (lớn hơn), `<` (nhỏ hơn), `>=` (lớn hơn hoặc bằng), `<=` (nhỏ hơn hoặc bằng).',
      },
      {
        question: 'Các toán tử logic `and`, `or`, `not` hoạt động như thế nào?',
        answer:
          '`and` trả về `True` nếu cả hai vế đều đúng. `or` trả về `True` nếu ít nhất một vế đúng. `not` đảo ngược giá trị boolean (biến `True` thành `False` và ngược lại). Chúng được dùng để kết hợp nhiều điều kiện.',
      },
      {
        question: 'Tôi có thể lồng các vòng lặp vào nhau không?',
        answer:
          'Có, bạn hoàn toàn có thể. Một vòng lặp lồng nhau là một vòng lặp nằm bên trong một vòng lặp khác. Điều này rất hữu ích cho việc xử lý các cấu trúc dữ liệu hai chiều như ma trận hoặc bảng.',
      },
      {
        question: 'Tại sao việc thụt lề (indentation) lại quan trọng trong Python?',
        answer:
          'Không giống như nhiều ngôn ngữ khác dùng dấu ngoặc nhọn `{}`, Python sử dụng việc thụt lề (thường là 4 dấu cách) để xác định các khối code, ví dụ như nội dung của một vòng lặp hoặc một câu lệnh `if`. Thụt lề sai sẽ gây ra lỗi cú pháp `IndentationError`.',
      },
    ],
  },
  {
    id: 'functions',
    title: 'Bài 4: Functions',
    description:
      'Tổ chức code như một chuyên gia! Học cách tạo hàm, tái sử dụng logic, xử lý dữ liệu linh hoạt và xây dựng thư viện cá nhân. Functions giúp bạn tiết kiệm thời gian và tăng hiệu quả lập trình.',
    videoUrl: 'https://www.youtube.com/watch?v=u-OmVr_fT4s',
    difficulty: 'Trung bình',
    duration: '120 phút',
    objectives: [
      'Định nghĩa và gọi functions',
      'Sử dụng parameters và arguments',
      'Hiểu return values',
      'Scope của variables (local vs global)',
      'Viết docstrings cho functions',
    ],
    prerequisites: ['Bài 3: Control Structures'],
    exercises: [
      {
        title: 'Math Utils Library',
        description: 'Tạo thư viện các hàm toán học hữu ích',
        difficulty: 'Khó',
        solution: `def is_prime(n):
    """Kiểm tra số nguyên tố"""
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def factorial(n):
    """Tính giai thừa"""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

def gcd(a, b):
    """Tìm ước chung lớn nhất"""
    while b:
        a, b = b, a % b
    return a

def fibonacci(n):
    """Tạo dãy Fibonacci n số đầu"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

# Test functions
while True:
    print("\\n=== MATH UTILS ===")
    print("1. Kiểm tra số nguyên tố")
    print("2. Tính giai thừa")
    print("3. Tìm ƯCLN")
    print("4. Dãy Fibonacci")
    print("0. Thoát")
    
    choice = input("Chọn: ")
    
    if choice == "0":
        break
    elif choice == "1":
        n = int(input("Nhập số: "))
        print(f"{n} {'là' if is_prime(n) else 'không là'} số nguyên tố")
    elif choice == "2":
        n = int(input("Nhập số: "))
        print(f"{n}! = {factorial(n)}")`,
        procedure: [
          'Tạo ít nhất 4 functions toán học',
          'Mỗi function có docstring',
          'Xử lý edge cases',
          'Tạo menu để test functions',
          'Sử dụng recursion ít nhất 1 lần',
        ],
        expectedResults:
          'Dùng """...""" cho docstring. Kiểm tra input validity. Recursive function cần base case. Dùng while loop cho menu.',
      },
    ],
    realWorldApplications: [
      'Code organization và reusability',
      'API endpoint handlers',
      'Data processing pipelines',
      'Utility libraries',
      'Mathematical computations',
      'Business logic separation',
    ],
    vietnamContext: {
      title: 'Tổ chức Code trong Dự án Việt',
      content: [
        'Trong các dự án outsourcing, việc viết code thành các hàm (functions) rõ ràng, có tài liệu (docstrings) tốt giúp các thành viên trong nhóm dễ dàng hợp tác.',
        'Các hàm như `calculate_shipping_fee`, `check_promotion_code` là những ví dụ thực tế trong các dự-án thương mại điện tử tại Việt Nam.',
        'Việc chia nhỏ các tác vụ phức tạp thành các hàm giúp việc kiểm thử (testing) và gỡ lỗi (debugging) trở nên dễ dàng hơn, một yêu cầu quan trọng trong các công ty công nghệ.',
        'Scope (phạm vi của biến) là một khái niệm quan trọng để tránh các lỗi không mong muốn, đặc biệt khi nhiều người cùng làm việc trên một codebase.',
      ],
    },
    careerConnect: {
      name: 'Lê Hồng Minh',
      title: 'Nhà sáng lập & CEO',
      company: 'VNG Corporation',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Để xây dựng những sản phẩm lớn, bạn phải bắt đầu từ những khối xây dựng nhỏ và vững chắc. Functions trong lập trình cũng vậy. Một hàm được viết tốt cũng giống như một viên gạch chất lượng cao, là nền tảng cho cả một hệ thống vĩ đại.',
    },
    quizzes: [
      {
        question: 'Lợi ích chính của việc sử dụng hàm (function) trong lập trình là gì?',
        options: [
          'Làm cho chương trình chạy nhanh hơn',
          'Tái sử dụng code, tránh lặp lại và giúp chương trình dễ quản lý hơn',
          'Chỉ để in ra màn hình',
          'Làm cho code khó hiểu hơn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hàm cho phép bạn đóng gói một đoạn code để có thể gọi lại nhiều lần, giúp code ngắn gọn, dễ đọc, dễ bảo trì và nâng cấp.',
      },
    ],
    faqs: [
      {
        question: 'Hàm (function) trong Python là gì?',
        answer:
          'Hàm là một khối code được đặt tên, có thể tái sử dụng, dùng để thực hiện một tác vụ cụ thể. Hàm giúp chia nhỏ chương trình thành các phần dễ quản lý, tránh lặp lại code và làm cho code dễ đọc hơn.',
      },
      {
        question: 'Sự khác biệt giữa tham số (parameter) và đối số (argument) là gì?',
        answer:
          'Tham số là tên biến được định nghĩa trong phần khai báo hàm. Đối số là giá trị thực tế được truyền vào hàm khi nó được gọi. Ví dụ: trong `def chao(ten):`, `ten` là tham số. Khi gọi `chao("An")`, `"An"` là đối số.',
      },
      {
        question: 'Từ khóa `return` có tác dụng gì?',
        answer:
          '`return` được dùng để kết thúc việc thực thi một hàm và trả về một giá trị cho nơi đã gọi hàm đó. Một hàm có thể không có `return`, trong trường hợp đó nó sẽ ngầm trả về `None`.',
      },
      {
        question: 'Docstring là gì và tại sao nó quan trọng?',
        answer:
          'Docstring (documentation string) là một chuỗi ký tự được đặt ở dòng đầu tiên của một hàm (hoặc module, class) để giải thích mục đích và cách sử dụng của nó. Docstring rất quan trọng để tạo tài liệu cho code, giúp người khác (và cả bạn trong tương lai) hiểu được code làm gì.',
      },
      {
        question: 'Sự khác biệt giữa biến cục bộ (local) và biến toàn cục (global) là gì?',
        answer:
          'Biến cục bộ chỉ tồn tại và có thể được truy cập bên trong hàm nơi nó được khai báo. Biến toàn cục được khai báo bên ngoài tất cả các hàm và có thể được truy cập từ bất kỳ đâu trong chương trình. Nên hạn chế sử dụng biến toàn cục để tránh các lỗi khó lường.',
      },
      {
        question: 'Đệ quy (recursion) là gì?',
        answer:
          'Đệ quy là một kỹ thuật lập trình trong đó một hàm tự gọi lại chính nó. Một hàm đệ quy phải có một "điều kiện dừng" (base case) để tránh việc lặp vô hạn. Đệ quy rất hữu ích để giải quyết các bài toán có thể được chia nhỏ thành các bài toán con tương tự.',
      },
      {
        question: 'Một hàm có thể trả về nhiều giá trị không?',
        answer:
          'Có. Trong Python, bạn có thể trả về nhiều giá trị từ một hàm bằng cách phân tách chúng bằng dấu phẩy. Về mặt kỹ thuật, hàm sẽ trả về một tuple chứa các giá trị đó, và bạn có thể "giải nén" (unpack) tuple này vào nhiều biến.',
      },
      {
        question: 'Đối số mặc định (default arguments) là gì?',
        answer:
          'Đối số mặc định là một giá trị được gán sẵn cho một tham số trong định nghĩa hàm. Nếu khi gọi hàm, người dùng không cung cấp đối số cho tham số đó, giá trị mặc định sẽ được sử dụng.',
      },
      {
        question: '`*args` và `**kwargs` dùng để làm gì?',
        answer:
          '`*args` cho phép một hàm nhận một số lượng đối số vị trí (positional arguments) không xác định, chúng sẽ được gói vào một tuple. `**kwargs` cho phép hàm nhận một số lượng đối số từ khóa (keyword arguments) không xác định, chúng sẽ được gói vào một dictionary.',
      },
      {
        question: 'Làm thế nào để viết các hàm có thể tái sử dụng?',
        answer:
          'Để một hàm có thể tái sử dụng, nó nên được thiết kế để thực hiện một tác vụ cụ thể và duy nhất. Tránh để hàm thực hiện quá nhiều việc. Hàm nên nhận dữ liệu qua tham số và trả về kết quả qua `return`, thay vì phụ thuộc vào các biến toàn cục.',
      },
    ],
  },
  {
    id: 'lists-and-tuples',
    title: 'Bài 5: Lists và Tuples',
    description:
      'Quản lý dữ liệu như một chuyên gia! Bạn sẽ học cách lưu trữ, sắp xếp và thao tác với danh sách, tuple để xây dựng ứng dụng thực tế, từ quản lý công việc đến xử lý dữ liệu lớn.',
    videoUrl: 'https://www.youtube.com/watch?v=cs2MoxXBg2o',
    difficulty: 'Trung bình',
    duration: '100 phút',
    objectives: [
      'Tạo và thao tác với lists',
      'Sử dụng list methods: append, remove, sort, etc.',
      'Hiểu list indexing và slicing',
      'Làm việc với tuples',
      'So sánh lists vs tuples',
      'List comprehensions cơ bản',
    ],
    prerequisites: ['Bài 4: Functions'],
    exercises: [
      {
        title: 'Task Manager',
        description: 'Quản lý danh sách công việc với lists',
        difficulty: 'Khó',
        solution: `tasks = []
completed = []

def show_menu():
    print("\\n=== TASK MANAGER ===")
    print("1. Thêm task")
    print("2. Hiển thị tasks")
    print("3. Hoàn thành task")
    print("4. Xóa task")
    print("5. Tasks đã hoàn thành")
    print("0. Thoát")

def add_task():
    task = input("Mô tả task: ")
    priority = input("Mức độ ưu tiên (cao/trung/thấp): ").lower()
    tasks.append((task, priority))
    print("Đã thêm task!")

def show_tasks():
    if not tasks:
        print("Không có task nào!")
        return
    
    print("\\n=== DANH SÁCH TASKS ===")
    for i, (task, priority) in enumerate(tasks, 1):
        print(f"{i}. {task} ({priority})")

def complete_task():
    show_tasks()
    if not tasks:
        return
    
    try:
        index = int(input("Số thứ tự task hoàn thành: ")) - 1
        if 0 <= index < len(tasks):
            completed_task = tasks.pop(index)
            completed.append(completed_task)
            print("Task đã hoàn thành!")
        else:
            print("Số thứ tự không hợp lệ!")
    except ValueError:
        print("Vui lòng nhập số!")

while True:
    show_menu()
    choice = input("Chọn: ")
    
    if choice == "0":
        break
    elif choice == "1":
        add_task()
    elif choice == "2":
        show_tasks()
    elif choice == "3":
        complete_task()`,
        procedure: [
          'Sử dụng list để lưu tasks',
          'Mỗi task có description và priority',
          'Functions cho từng chức năng',
          'Menu-driven interface',
          'Xử lý edge cases và errors',
        ],
        expectedResults:
          'Dùng tuple để lưu (task, priority). enumerate() để đánh số thứ tự. pop() để xóa và lấy element. try/except để xử lý errors.',
      },
    ],
    realWorldApplications: [
      'Data storage và manipulation',
      'Shopping cart implementation',
      'User management systems',
      'Inventory tracking',
      'Menu systems',
      'Data processing workflows',
    ],
    vietnamContext: {
      title: 'Quản lý Dữ liệu Danh sách',
      content: [
        'Các ứng dụng giao đồ ăn như GrabFood, Baemin sử dụng list để quản lý danh sách các món ăn trong giỏ hàng của bạn.',
        'Tuple thường được dùng để lưu trữ các dữ liệu không thay đổi, ví dụ như tọa độ (kinh độ, vĩ độ) của một địa điểm trên bản đồ.',
        'List comprehensions là một kỹ thuật mạnh mẽ được các lập trình viên có kinh nghiệm ở Việt Nam sử dụng để viết code xử lý danh sách ngắn gọn và hiệu quả hơn.',
        'Các trang web hiển thị danh sách bài viết, sản phẩm, hay bình luận đều sử dụng list làm cấu trúc dữ liệu nền tảng.',
      ],
    },
    careerConnect: {
      name: 'Phan Bá Việt',
      title: 'Head of Engineering',
      company: 'Tiki',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Tại Tiki, chúng tôi xử lý hàng triệu sản phẩm. Việc sử dụng hiệu quả các cấu trúc dữ liệu như list và tuple là cực kỳ quan trọng để đảm bảo hệ thống chạy nhanh, ổn định và mang lại trải nghiệm tốt nhất cho người dùng.',
    },
    quizzes: [
      {
        question: 'Bạn nên sử dụng `tuple` thay vì `list` trong trường hợp nào?',
        options: [
          'Khi bạn cần một danh sách có thể thêm, xóa, sửa phần tử',
          'Khi bạn muốn lưu trữ một bộ dữ liệu không bao giờ thay đổi, ví dụ như các ngày trong tuần',
          'Khi bạn muốn sắp xếp các phần tử',
          'Khi danh sách của bạn rất lớn',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Tuple là "immutable" (bất biến), nghĩa là sau khi tạo ra, bạn không thể thay đổi nó. Điều này làm cho tuple trở nên an toàn và hiệu quả hơn cho các dữ liệu cố định.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt chính giữa List và Tuple là gì?',
        answer:
          'Sự khác biệt cốt lõi là List là "mutable" (có thể thay đổi), nghĩa là bạn có thể thêm, xóa, hoặc sửa đổi các phần tử sau khi tạo. Tuple là "immutable" (bất biến), nghĩa là một khi đã được tạo, bạn không thể thay đổi các phần tử của nó.',
      },
      {
        question: 'Khi nào tôi nên sử dụng List và khi nào nên sử dụng Tuple?',
        answer:
          'Sử dụng List khi bạn cần một tập hợp các mục có thể thay đổi, ví dụ như danh sách công việc hoặc giỏ hàng. Sử dụng Tuple khi bạn có một tập hợp các mục không nên thay đổi, ví dụ như tọa độ (x, y) hoặc các ngày trong tuần. Tuple cũng nhanh hơn một chút và an toàn hơn.',
      },
      {
        question: 'Làm thế nào để thêm một phần tử vào cuối một List?',
        answer:
          'Bạn có thể sử dụng phương thức `.append()`. Ví dụ: `my_list.append(new_item)` sẽ thêm `new_item` vào cuối của `my_list`.',
      },
      {
        question: 'Làm thế nào để xóa một phần tử khỏi một List?',
        answer:
          'Có nhiều cách: `.remove(value)` để xóa phần tử đầu tiên có giá trị `value`. `.pop(index)` để xóa và trả về phần tử tại vị trí `index`. `del my_list[index]` để xóa phần tử tại vị trí `index`.',
      },
      {
        question: 'List slicing là gì?',
        answer:
          'Slicing là một cách để trích xuất một phần của một List (hoặc chuỗi, tuple). Cú pháp là `my_list[start:stop:step]`. Nó tạo ra một List mới chứa các phần tử được chọn mà không làm thay đổi List ban đầu.',
      },
      {
        question: 'Làm thế nào để sắp xếp một List?',
        answer:
          'Bạn có thể dùng phương thức `.sort()` để sắp xếp List tại chỗ (thay đổi List gốc). Hoặc dùng hàm `sorted(my_list)` để trả về một List mới đã được sắp xếp mà không thay đổi List gốc.',
      },
      {
        question: 'List comprehension là gì?',
        answer:
          'List comprehension là một cách viết ngắn gọn và dễ đọc để tạo ra một List mới dựa trên một List đã có. Ví dụ: `[x*x for x in range(5)]` sẽ tạo ra một List chứa bình phương của các số từ 0 đến 4.',
      },
      {
        question: 'Một List có thể chứa các kiểu dữ liệu khác nhau không?',
        answer:
          'Có. Một List trong Python rất linh hoạt và có thể chứa các phần tử với các kiểu dữ liệu khác nhau, ví dụ: `[1, "hello", 3.14, True]`.',
      },
      {
        question: 'Làm thế nào để tìm số lượng phần tử trong một List?',
        answer: 'Sử dụng hàm `len()`. Ví dụ: `len(my_list)` sẽ trả về số lượng phần tử có trong `my_list`.',
      },
      {
        question: 'Hàm `enumerate()` có tác dụng gì khi dùng với List?',
        answer:
          '`enumerate()` rất hữu ích khi bạn cần cả chỉ số (index) và giá trị (value) của các phần tử trong một List khi lặp. Nó trả về một cặp `(index, value)` cho mỗi lần lặp.',
      },
    ],
  },
  {
    id: 'dictionaries',
    title: 'Bài 6: Dictionaries',
    description:
      'Lưu trữ thông tin thông minh với dictionaries! Bạn sẽ biết cách quản lý dữ liệu dạng key-value, xây dựng hệ thống quản lý học sinh, cấu hình phần mềm và nhiều ứng dụng thực tế khác.',
    videoUrl: 'https://www.youtube.com/watch?v=MZZSMaEAC2g',
    difficulty: 'Trung bình',
    duration: '100 phút',
    objectives: [
      'Tạo và sử dụng dictionaries',
      'Thêm, sửa, xóa key-value pairs',
      'Iterate through dictionaries',
      'Nested dictionaries',
      'Dictionary methods và best practices',
    ],
    prerequisites: ['Bài 5: Lists và Tuples'],
    exercises: [
      {
        title: 'Student Management System',
        description: 'Hệ thống quản lý thông tin học sinh',
        difficulty: 'Khó',
        solution: `students = {}

def add_student():
    student_id = input("Mã học sinh: ")
    if student_id in students:
        print("Học sinh đã tồn tại!")
        return
    
    name = input("Tên: ")
    age = int(input("Tuổi: "))
    grades = {}
    
    print("Nhập điểm các môn (enter để kết thúc):")
    while True:
        subject = input("Môn học: ")
        if not subject:
            break
        grade = float(input("Điểm: "))
        grades[subject] = grade
    
    students[student_id] = {
        'name': name,
        'age': age,
        'grades': grades
    }
    print("Đã thêm học sinh!")

def show_student():
    student_id = input("Mã học sinh: ")
    if student_id not in students:
        print("Không tìm thấy học sinh!")
        return
    
    student = students[student_id]
    print(f"\\n=== THÔNG TIN HỌC SINH ===")
    print(f"Mã: {student_id}")
    print(f"Tên: {student['name']}")
    print(f"Tuổi: {student['age']}")
    print("Điểm:")
    
    total = 0
    count = 0
    for subject, grade in student['grades'].items():
        print(f"  {subject}: {grade}")
        total += grade
        count += 1
    
    if count > 0:
        average = total / count
        print(f"Điểm trung bình: {average:.2f}")

def list_all_students():
    if not students:
        print("Chưa có học sinh nào!")
        return
    
    print("\\n=== DANH SÁCH HỌC SINH ===")
    for student_id, info in students.items():
        grades = info['grades']
        avg = sum(grades.values()) / len(grades) if grades else 0
        print(f"{student_id}: {info['name']} (TB: {avg:.1f})")`,
        procedure: [
          'Dictionary chính để lưu students',
          'Nested dictionary cho grades',
          'Functions cho CRUD operations',
          'Tính điểm trung bình',
          'Hiển thị danh sách tổng quan',
        ],
        expectedResults:
          'Dùng student_id làm key. Nested dict: {id: {name, age, grades: {subject: grade}}}. Dùng .items() để iterate. Check key existence với "in" operator.',
      },
    ],
    realWorldApplications: [
      'Database records representation',
      'Configuration management',
      'API response handling',
      'Cache implementation',
      'User profiles storage',
      'Settings và preferences',
    ],
    vietnamContext: {
      title: 'Dữ liệu Key-Value trong Thực tế',
      content: [
        'Thông tin cá nhân của bạn trên các trang web như Facebook, Zalo được lưu trữ dưới dạng dictionary (ví dụ: `{"name": "Nguyễn Văn A", "city": "Hà Nội"}`).',
        'Các file cấu hình JSON, một định dạng rất phổ biến trong phát triển web, về cơ bản chính là các dictionary của Python.',
        'Khi bạn tra cứu một từ trong từ điển online, ứng dụng đang sử dụng dictionary để tìm nhanh định nghĩa dựa trên từ khóa bạn nhập.',
        'Trong các ứng dụng thương mại điện tử, thông tin của một sản phẩm (tên, giá, mô tả, hình ảnh) thường được cấu trúc dưới dạng một dictionary.',
      ],
    },
    careerConnect: {
      name: 'Nguyễn Hòa Bình',
      title: 'Chủ tịch Tập đoàn',
      company: 'NextTech Group',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Trong thế giới số, mọi thứ đều có thể được ánh xạ. Dictionary là công cụ mạnh mẽ để tạo ra các ánh xạ đó, kết nối dữ liệu và tạo ra thông tin có giá trị. Hiểu nó là hiểu cách thông tin được tổ chức trong kỷ nguyên số.',
    },
    quizzes: [
      {
        question:
          'Để lấy giá trị tương ứng với key "age" trong một dictionary có tên là `person`, bạn sẽ dùng cú pháp nào?',
        options: ['person(age)', 'person.age', 'person["age"]', 'person.get_age()'],
        correctAnswerIndex: 2,
        explanation:
          'Cú pháp `dictionary[key]` là cách cơ bản và trực tiếp nhất để truy cập giá trị của một key trong dictionary.',
      },
    ],
    faqs: [
      {
        question: 'Dictionary trong Python là gì?',
        answer:
          'Dictionary là một cấu trúc dữ liệu dùng để lưu trữ các cặp key-value (khóa-giá trị). Mỗi key là duy nhất và được dùng để truy cập giá trị tương ứng. Dictionary không có thứ tự và có thể thay đổi (mutable).',
      },
      {
        question: 'Làm thế nào để truy cập một giá trị trong Dictionary?',
        answer:
          'Bạn có thể truy cập giá trị bằng cách sử dụng key của nó trong dấu ngoặc vuông, ví dụ: `my_dict["key"]`. Một cách khác an toàn hơn là sử dụng phương thức `.get("key")`, phương thức này sẽ trả về `None` (hoặc một giá trị mặc định) nếu key không tồn tại, thay vì báo lỗi.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi cố gắng truy cập một key không tồn tại?',
        answer:
          'Nếu bạn dùng cú pháp `my_dict["non_existent_key"]`, Python sẽ báo lỗi `KeyError`. Nếu bạn dùng `my_dict.get("non_existent_key")`, nó sẽ trả về `None` và không gây lỗi.',
      },
      {
        question: 'Làm thế nào để thêm hoặc cập nhật một cặp key-value?',
        answer:
          'Rất đơn giản, bạn chỉ cần gán một giá trị cho một key: `my_dict["new_key"] = "new_value"`. Nếu key đã tồn tại, giá trị của nó sẽ được cập nhật. Nếu key chưa tồn tại, một cặp key-value mới sẽ được thêm vào.',
      },
      {
        question: 'Làm thế nào để duyệt qua tất cả các cặp key-value trong một Dictionary?',
        answer:
          'Cách tốt nhất là sử dụng phương thức `.items()`. Ví dụ: `for key, value in my_dict.items(): ...`. Bạn cũng có thể duyệt qua chỉ các key với `.keys()` hoặc chỉ các giá trị với `.values()`.',
      },
      {
        question: 'Key trong Dictionary có thể là kiểu dữ liệu gì?',
        answer:
          'Key phải là một kiểu dữ liệu bất biến (immutable) như string, number, hoặc tuple. Bạn không thể sử dụng list hoặc dictionary khác làm key.',
      },
      {
        question: 'Làm thế nào để kiểm tra xem một key có tồn tại trong Dictionary hay không?',
        answer:
          'Sử dụng toán tử `in`. Ví dụ: `if "my_key" in my_dict:` sẽ trả về `True` nếu `my_key` tồn tại trong `my_dict`.',
      },
      {
        question: 'Sự khác biệt giữa List và Dictionary là gì?',
        answer:
          'List là một tập hợp các phần tử có thứ tự, được truy cập bằng chỉ số (index) là số nguyên. Dictionary là một tập hợp các cặp key-value không có thứ tự, được truy cập bằng key (có thể là string, number...).',
      },
      {
        question: 'Dictionary lồng nhau (nested dictionary) là gì?',
        answer:
          'Đó là một dictionary mà giá trị của nó lại là một dictionary khác. Điều này rất hữu ích để biểu diễn các cấu trúc dữ liệu phức tạp, có thứ bậc, ví dụ như một đối tượng JSON.',
      },
      {
        question: 'Làm thế nào để xóa một cặp key-value khỏi Dictionary?',
        answer:
          'Bạn có thể sử dụng câu lệnh `del my_dict["key_to_delete"]`. Một cách khác là sử dụng phương thức `.pop("key_to_delete")`, phương thức này sẽ xóa cặp key-value và trả về giá trị đã bị xóa.',
      },
    ],
  },
  {
    id: 'handling-files',
    title: 'Bài 7: File Handling',
    description:
      'Khai phá dữ liệu từ file! Học cách đọc, ghi, phân tích và tạo báo cáo từ file văn bản, CSV, log... Mở rộng khả năng tự động hóa và xử lý dữ liệu chuyên nghiệp với Python.',
    videoUrl: 'https://www.youtube.com/watch?v=-o5WNw4Hohk',
    difficulty: 'Khó',
    duration: '120 phút',
    objectives: [
      'Mở và đóng files',
      'Đọc dữ liệu từ text files',
      'Ghi dữ liệu ra files',
      'Xử lý CSV files',
      'Exception handling với files',
      'File paths và directories',
    ],
    prerequisites: ['Bài 6: Dictionaries'],
    exercises: [
      {
        title: 'Log Analyzer',
        description: 'Phân tích log files và tạo báo cáo',
        difficulty: 'Khó',
        solution: `import os
from datetime import datetime
from collections import Counter

def create_sample_log():
    """Tạo file log mẫu để test"""
    log_entries = [
        "2024-01-15 10:30:15 INFO User login: user123",
        "2024-01-15 10:31:22 ERROR Database connection failed",
        "2024-01-15 10:32:10 INFO User logout: user123",
        "2024-01-15 10:35:45 WARNING Low disk space",
        "2024-01-15 10:40:12 ERROR File not found: config.txt",
        "2024-01-15 10:42:33 INFO User login: user456",
        "2024-01-15 10:45:18 ERROR Network timeout"
    ]
    
    with open('sample.log', 'w', encoding='utf-8') as f:
        for entry in log_entries:
            f.write(entry + '\\n')
    print("Đã tạo file sample.log")

def analyze_log(filename):
    """Phân tích log file"""
    if not os.path.exists(filename):
        print(f"File {filename} không tồn tại!")
        return
    
    log_levels = Counter()
    error_messages = []
    user_activities = []
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            for line_num, line in enumerate(f, 1):
                line = line.strip()
                if not line:
                    continue
                
                parts = line.split(' ', 3)
                if len(parts) >= 3:
                    date_str = parts[0]
                    time_str = parts[1]
                    level = parts[2]
                    message = parts[3] if len(parts) > 3 else ""
                    
                    log_levels[level] += 1
                    
                    if level == "ERROR":
                        error_messages.append(f"Line {line_num}: {message}")
                    
                    if "User" in message:
                        user_activities.append(f"{date_str} {time_str}: {message}")
        
        # Tạo báo cáo
        create_report(log_levels, error_messages, user_activities)
        
    except Exception as e:
        print(f"Lỗi đọc file: {e}")

def create_report(log_levels, errors, activities):
    """Tạo báo cáo phân tích"""
    report_filename = f"log_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
    
    with open(report_filename, 'w', encoding='utf-8') as f:
        f.write("=== BÁO CÁO PHÂN TÍCH LOG ===\\n")
        f.write(f"Thời gian tạo: {datetime.now()}\\n\\n")
        
        f.write("1. THỐNG KÊ LOG LEVELS:\\n")
        for level, count in log_levels.most_common():
            f.write(f"   {level}: {count}\\n")
        
        f.write(f"\\n2. ERRORS ĐƯỢC TÌM THẤY ({len(errors)}):\\n")
        for error in errors:
            f.write(f"   {error}\\n")
        
        f.write(f"\\n3. HOẠT ĐỘNG USER ({len(activities)}):\\n")
        for activity in activities:
            f.write(f"   {activity}\\n")
    
    print(f"Đã tạo báo cáo: {report_filename}")

# Main program
print("=== LOG ANALYZER ===")
print("1. Tạo file log mẫu")
print("2. Phân tích log file")

choice = input("Chọn: ")
if choice == "1":
    create_sample_log()
elif choice == "2":
    filename = input("Tên file log: ")
    analyze_log(filename)`,
        procedure: [
          'Đọc và parse log files',
          'Đếm các loại log levels',
          'Tìm và liệt kê errors',
          'Tạo báo cáo ra file mới',
          'Xử lý exceptions khi đọc file',
        ],
        expectedResults:
          'Dùng with open() để tự động đóng file. split() để tách các phần của log entry. Counter từ collections để đếm. datetime để timestamp báo cáo.',
      },
    ],
    realWorldApplications: [
      'Data processing từ CSV/Excel',
      'Configuration file management',
      'Log analysis và monitoring',
      'Backup và restore systems',
      'Report generation',
      'Data migration tools',
    ],
    vietnamContext: {
      title: 'Xử lý File trong Công việc',
      content: [
        'Các công ty tài chính, ngân hàng thường xuyên phải xử lý các file CSV hoặc Excel chứa dữ liệu giao dịch hàng ngày.',
        'Lập trình viên web cần đọc các file cấu hình (ví dụ: `.env`, `config.json`) để lấy thông tin kết nối cơ sở dữ liệu, API keys...',
        'Các nhà phân tích dữ liệu viết script Python để đọc file log từ server, phân tích hành vi người dùng và tìm kiếm lỗi.',
        'Tự động hóa văn phòng: viết script để đọc dữ liệu từ một file text và điền vào một mẫu báo cáo Word là một ứng dụng phổ biến.',
      ],
    },
    careerConnect: {
      name: 'Lưu Danh Anh Vũ',
      title: 'Data Engineering Manager',
      company: 'Amanotes',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      quote:
        'Dữ liệu là dầu mỏ của thế kỷ 21, và các file chính là những mỏ dầu. Kỹ năng đọc, xử lý và trích xuất thông tin từ hàng terabyte dữ liệu file mỗi ngày là công việc cốt lõi của một kỹ sư dữ liệu tại Amanotes.',
    },
    quizzes: [
      {
        question: 'Tại sao nên sử dụng `with open(...) as f:` khi làm việc với file trong Python?',
        options: [
          'Để file trông đẹp hơn',
          'Nó giúp file được mở nhanh hơn',
          'Nó tự động đóng file sau khi khối lệnh kết thúc, kể cả khi có lỗi xảy ra',
          'Nó chỉ hoạt động với file text',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Sử dụng `with` statement đảm bảo rằng file sẽ luôn được đóng một cách an toàn, giúp tránh rò rỉ tài nguyên và các lỗi tiềm ẩn, làm cho code của bạn an toàn và đáng tin cậy hơn.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao nên sử dụng `with open(...)` khi làm việc với file?',
        answer:
          'Cú pháp `with open(...) as f:` tạo ra một "context manager". Nó đảm bảo rằng file sẽ được tự động đóng lại sau khi khối lệnh bên trong `with` thực thi xong, ngay cả khi có lỗi xảy ra. Điều này giúp tránh rò rỉ tài nguyên và làm cho code an toàn hơn.',
      },
      {
        question: 'Sự khác biệt giữa các chế độ (mode) "r", "w", và "a" là gì?',
        answer:
          '"r" (read): Mở file để đọc. Đây là chế độ mặc định. Sẽ báo lỗi nếu file không tồn tại. "w" (write): Mở file để ghi. Sẽ tạo file mới nếu chưa có, hoặc xóa toàn bộ nội dung file cũ nếu đã có. "a" (append): Mở file để ghi tiếp vào cuối. Sẽ tạo file mới nếu chưa có.',
      },
      {
        question: 'Làm thế nào để đọc toàn bộ nội dung của một file text?',
        answer:
          'Bạn có thể sử dụng phương thức `.read()`. Ví dụ: `with open("my_file.txt", "r") as f: content = f.read()`.',
      },
      {
        question: 'Làm thế nào để đọc file theo từng dòng?',
        answer:
          'Cách hiệu quả nhất là lặp trực tiếp qua đối tượng file: `for line in f: ...`. Một cách khác là sử dụng `.readlines()` để đọc tất cả các dòng vào một list, nhưng cách này không hiệu quả với các file lớn.',
      },
      {
        question: 'Làm thế nào để ghi dữ liệu vào một file?',
        answer:
          'Sử dụng phương thức `.write()`. Lưu ý rằng `.write()` không tự động thêm ký tự xuống dòng (`\\n`), bạn cần phải tự thêm nếu muốn mỗi lần ghi là một dòng mới.',
      },
      {
        question: 'File CSV là gì và làm thế nào để xử lý nó trong Python?',
        answer:
          'CSV (Comma-Separated Values) là một định dạng file văn bản đơn giản để lưu trữ dữ liệu dạng bảng. Python có một module tích hợp sẵn tên là `csv` giúp việc đọc và ghi file CSV trở nên rất dễ dàng và an toàn.',
      },
      {
        question: 'Làm thế nào để xử lý lỗi khi file không tồn tại?',
        answer:
          'Bạn có thể sử dụng khối `try...except FileNotFoundError`. Đặt lệnh `open()` bên trong khối `try` và xử lý lỗi trong khối `except`.',
      },
      {
        question: 'Đường dẫn tương đối (relative path) và đường dẫn tuyệt đối (absolute path) khác nhau như thế nào?',
        answer:
          'Đường dẫn tuyệt đối chỉ định vị trí của file từ thư mục gốc của hệ thống (ví dụ: `C:\\Users\\Admin\\file.txt`). Đường dẫn tương đối chỉ định vị trí của file so với thư mục làm việc hiện tại (ví dụ: `data/file.txt`).',
      },
      {
        question: 'Làm thế nào để làm việc với các thư mục trong Python?',
        answer:
          'Module `os` cung cấp nhiều hàm để tương tác với hệ điều hành, bao gồm tạo thư mục (`os.mkdir()`), xóa thư mục (`os.rmdir()`), liệt kê các file trong thư mục (`os.listdir()`), và kiểm tra sự tồn tại của đường dẫn (`os.path.exists()`).',
      },
      {
        question: 'Tại sao cần phải chỉ định `encoding="utf-8"` khi làm việc với file?',
        answer:
          'Chỉ định `encoding="utf-8"` đảm bảo rằng các ký tự đặc biệt, như tiếng Việt có dấu, được đọc và ghi một cách chính xác. Nếu không, bạn có thể gặp lỗi `UnicodeDecodeError` hoặc dữ liệu bị hiển thị sai.',
      },
    ],
  },
  {
    id: 'object-oriented-programming',
    title: 'Bài 8: Object-Oriented Programming',
    description:
      'Làm chủ lập trình hướng đối tượng! Tạo class, object, kế thừa, đóng gói dữ liệu và xây dựng hệ thống phần mềm chuyên nghiệp. Đây là chìa khóa để phát triển ứng dụng lớn và hiện đại.',
    videoUrl: 'https://www.youtube.com/watch?v=iLRZi0Gu8Go',
    difficulty: 'Khó',
    duration: '150 phút',
    objectives: [
      'Hiểu khái niệm OOP và tại sao sử dụng',
      'Tạo classes và objects',
      'Sử dụng constructors (__init__)',
      'Methods và attributes',
      'Encapsulation và data hiding',
      'Inheritance cơ bản',
    ],
    prerequisites: ['Bài 7: File Handling'],
    exercises: [
      {
        title: 'Bank Account System',
        description: 'Hệ thống quản lý tài khoản ngân hàng với OOP',
        difficulty: 'Khó',
        solution: `class BankAccount:
    def __init__(self, account_number, owner_name, initial_balance=0):
        self._account_number = account_number
        self._owner_name = owner_name
        self._balance = initial_balance
        self._transaction_history = []
        self._add_transaction("Mở tài khoản", initial_balance)
    
    def deposit(self, amount):
        if amount <= 0:
            print("Số tiền phải > 0!")
            return False
        
        self._balance += amount
        self._add_transaction("Nạp tiền", amount)
        print(f"Đã nạp {amount:,.0f}đ. Số dư: {self._balance:,.0f}đ")
        return True
    
    def withdraw(self, amount):
        if amount <= 0:
            print("Số tiền phải > 0!")
            return False
        
        if amount > self._balance:
            print("Số dư không đủ!")
            return False
        
        self._balance -= amount
        self._add_transaction("Rút tiền", -amount)
        print(f"Đã rút {amount:,.0f}đ. Số dư: {self._balance:,.0f}đ")
        return True
    
    def transfer(self, amount, target_account):
        if self.withdraw(amount):
            target_account.deposit(amount)
            self._add_transaction(f"Chuyển tiền đến {target_account._account_number}", -amount)
            target_account._add_transaction(f"Nhận tiền từ {self._account_number}", amount)
            print(f"Chuyển thành công {amount:,.0f}đ")
            return True
        return False
    
    def _add_transaction(self, description, amount):
        from datetime import datetime
        self._transaction_history.append({
            'time': datetime.now(),
            'description': description,
            'amount': amount,
            'balance': self._balance
        })
    
    def get_balance(self):
        return self._balance
    
    def get_statement(self):
        print(f"\\n=== SỔ SAO KÊ TÀI KHOẢN {self._account_number} ===")
        print(f"Chủ tài khoản: {self._owner_name}")
        print(f"Số dư hiện tại: {self._balance:,.0f}đ")
        print("\\nLịch sử giao dịch:")
        
        for transaction in self._transaction_history[-10:]:  # 10 giao dịch gần nhất
            time_str = transaction['time'].strftime("%d/%m/%Y %H:%M")
            amount = transaction['amount']
            amount_str = f"{amount:+,.0f}đ"
            print(f"{time_str} | {transaction['description']: <20} | {amount_str: >12} | {transaction['balance']:,.0f}đ")

class SavingsAccount(BankAccount):
    def __init__(self, account_number, owner_name, initial_balance=0, interest_rate=0.05):
        super().__init__(account_number, owner_name, initial_balance)
        self._interest_rate = interest_rate
    
    def calculate_interest(self):
        interest = self._balance * self._interest_rate / 12  # Lãi tháng
        self.deposit(interest)
        print(f"Đã cộng lãi: {interest:,.0f}đ (lãi suất {self._interest_rate*100}%/năm)")

# Demo system
def demo_bank_system():
    # Tạo tài khoản
    acc1 = BankAccount("001", "Nguyễn Văn A", 1000000)
    acc2 = SavingsAccount("002", "Trần Thị B", 2000000, 0.06)
    
    # Thực hiện giao dịch
    acc1.deposit(500000)
    acc1.withdraw(200000)
    acc1.transfer(300000, acc2)
    
    # Tính lãi cho tài khoản tiết kiệm
    acc2.calculate_interest()
    
    # In sao kê
    acc1.get_statement()
    acc2.get_statement()

demo_bank_system()`,
        procedure: [
          'Class BankAccount với các methods cơ bản',
          'Encapsulation với private attributes',
          'Transaction history tracking',
          'Class SavingsAccount kế thừa BankAccount',
          'Demo system với multiple accounts',
        ],
        expectedResults:
          'Dùng _attribute để private. super() để gọi parent constructor. datetime để track transaction time. String formatting cho currency display.',
      },
    ],
    realWorldApplications: [
      'Software architecture design',
      'Game development với entities',
      'Web framework components',
      'Database ORM models',
      'API client libraries',
      'GUI application structure',
    ],
    vietnamContext: {
      title: 'OOP trong các Hệ thống Lớn',
      content: [
        'Các framework web phổ biến như Django (dùng bởi VCCorp, Tiki) được xây dựng hoàn toàn dựa trên các nguyên tắc OOP.',
        'Trong phát triển game (ví dụ, các studio sử dụng Unity với C#, có thể áp dụng tư duy tương tự), mỗi nhân vật, vật phẩm, kẻ địch đều là một object với các thuộc tính và phương thức riêng.',
        'Các hệ thống ngân hàng tại Việt Nam sử dụng OOP để mô hình hóa các khái niệm phức tạp như `TaiKhoan`, `GiaoDich`, `KhachHang`.',
        'Mô hình Kế thừa (Inheritance) giúp tạo ra các phiên bản chuyên biệt, ví dụ: từ class `NhanVien` chung, có thể tạo ra `NhanVienKinhDoanh` và `NhanVienKyThuat` với các thuộc tính và hành vi riêng.',
      ],
    },
    careerConnect: {
      name: 'Dương Lê',
      title: 'Principal Software Engineer',
      company: 'Salesforce',
      imageUrl: 'https://i.pravatar.cc/150?u=duong-le',
      quote:
        'Lập trình hướng đối tượng không chỉ là một kỹ thuật, đó là một tư duy. Nó giúp chúng tôi ở Salesforce xây dựng các hệ thống phức tạp, dễ bảo trì và mở rộng, có khả năng phục vụ hàng triệu doanh nghiệp trên toàn cầu. Nắm vững OOP là bạn đang nói cùng một ngôn ngữ với các kỹ sư phần mềm hàng đầu thế giới.',
    },
    quizzes: [
      {
        question: 'Đóng gói (Encapsulation) trong OOP có ý nghĩa gì?',
        options: [
          'Làm cho code chạy chậm hơn',
          'Che giấu thông tin và các chi tiết triển khai bên trong một object, chỉ cung cấp giao diện công khai để tương tác',
          'Cho phép một class con thừa hưởng các thuộc tính từ class cha',
          'Viết tất cả code vào một file duy nhất',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Đóng gói giúp bảo vệ dữ liệu của object khỏi các truy cập không hợp lệ từ bên ngoài, tăng tính bảo mật và giúp code dễ quản lý hơn vì bạn chỉ cần quan tâm đến giao diện (các hàm public) mà không cần biết chi tiết bên trong.',
      },
    ],
    faqs: [
      {
        question: 'Lập trình hướng đối tượng (OOP) là gì?',
        answer:
          'OOP là một phương pháp lập trình dựa trên khái niệm "đối tượng" (object), có thể chứa dữ liệu (dưới dạng thuộc tính - attributes) và code (dưới dạng phương thức - methods). OOP giúp tổ chức các chương trình phức tạp thành các khối có thể tái sử dụng và dễ quản lý.',
      },
      {
        question: 'Sự khác biệt giữa Class và Object là gì?',
        answer:
          'Class là một bản thiết kế hoặc khuôn mẫu để tạo ra các đối tượng. Nó định nghĩa các thuộc tính và phương thức chung. Object là một thực thể cụ thể được tạo ra từ một class. Ví dụ, `Dog` là một class, còn `my_dog` là một object của class `Dog`.',
      },
      {
        question: 'Phương thức `__init__` dùng để làm gì?',
        answer:
          '`__init__` là một phương thức đặc biệt được gọi là hàm khởi tạo (constructor). Nó được tự động gọi khi một object mới được tạo ra từ class. `__init__` thường được dùng để khởi tạo các thuộc tính ban đầu cho object.',
      },
      {
        question: 'Sự khác biệt giữa thuộc tính (attribute) và phương thức (method) là gì?',
        answer:
          'Thuộc tính là các biến thuộc về một object, dùng để lưu trữ trạng thái hoặc dữ liệu của object đó (ví dụ: `dog.name`). Phương thức là các hàm thuộc về một object, dùng để định nghĩa hành vi của object đó (ví dụ: `dog.bark()`).',
      },
      {
        question: 'Đóng gói (Encapsulation) trong OOP là gì?',
        answer:
          'Đóng gói là nguyên tắc gộp dữ liệu và các phương thức làm việc với dữ liệu đó vào trong một đối tượng duy nhất. Nó cũng bao gồm việc che giấu các chi tiết triển khai bên trong và chỉ cho phép tương tác thông qua một giao diện công khai, giúp bảo vệ dữ liệu.',
      },
      {
        question: 'Kế thừa (Inheritance) trong OOP là gì?',
        answer:
          'Kế thừa cho phép một class mới (class con) thừa hưởng các thuộc tính và phương thức từ một class đã có (class cha). Điều này thúc đẩy việc tái sử dụng code và tạo ra một hệ thống phân cấp logic giữa các class.',
      },
      {
        question: 'Từ khóa `self` trong các phương thức của class có ý nghĩa gì?',
        answer:
          '`self` là một tham chiếu đến chính object đang gọi phương thức đó. Nó phải là tham số đầu tiên của bất kỳ phương thức nào trong class. Qua `self`, bạn có thể truy cập các thuộc tính và phương thức khác của object đó.',
      },
      {
        question: 'Đa hình (Polymorphism) trong OOP là gì?',
        answer:
          'Đa hình có nghĩa là "nhiều hình dạng". Trong OOP, nó cho phép các đối tượng của các class khác nhau có thể được xử lý thông qua cùng một giao diện. Ví dụ, cả object `Dog` và `Cat` đều có thể có phương thức `.speak()`, nhưng mỗi object sẽ thực hiện nó theo cách riêng.',
      },
      {
        question: 'Tại sao nên sử dụng OOP?',
        answer:
          'OOP giúp code trở nên có tổ chức, dễ bảo trì, dễ mở rộng và tái sử dụng. Nó cho phép mô hình hóa các vấn đề trong thế giới thực một cách tự nhiên hơn, đặc biệt hữu ích cho các dự án lớn và phức tạp.',
      },
      {
        question: 'Làm thế nào để biểu thị một thuộc tính là "private" trong Python?',
        answer:
          'Theo quy ước, các lập trình viên Python sử dụng một dấu gạch dưới ở đầu tên thuộc tính (ví dụ: `self._my_private_var`) để chỉ ra rằng nó chỉ nên được sử dụng nội bộ bên trong class và không nên được truy cập trực tiếp từ bên ngoài.',
      },
    ],
  },
  {
    id: 'algorithms-and-data-structures',
    title: 'Bài 9: Thuật toán & Cấu trúc dữ liệu',
    description:
      'Khám phá trái tim của lập trình - thuật toán và cấu trúc dữ liệu! Từ tìm kiếm nhị phân đến sắp xếp nhanh, từ stack/queue đến cây nhị phân. Bạn sẽ hiểu cách máy tính "suy nghĩ" và tối ưu hóa hiệu suất chương trình.',
    videoUrl: 'https://www.youtube.com/watch?v=V85332IZVs0',
    difficulty: 'Nâng cao',
    duration: '180 phút',
    objectives: [
      'Hiểu khái niệm độ phức tạp thời gian Big O',
      'Implement các thuật toán tìm kiếm và sắp xếp',
      'Sử dụng Stack, Queue, Linked List',
      'Làm việc với Binary Tree và Graph',
      'Áp dụng Dynamic Programming cơ bản',
      'Phân tích và tối ưu hóa thuật toán',
    ],
    prerequisites: ['Thành thạo functions và classes', 'Hiểu recursion cơ bản', 'Kiến thức toán học trung học'],
    exercises: [
      {
        title: 'Binary Search Implementation',
        description: 'Implement thuật toán tìm kiếm nhị phân và so sánh hiệu suất với linear search',
        difficulty: 'Trung bình',
        solution: `import time
import random

def linear_search(arr, target):
    """Tìm kiếm tuyến tính - O(n)"""
    for i, value in enumerate(arr):
        if value == target:
            return i
    return -1

def binary_search(arr, target):
    """Tìm kiếm nhị phân - O(log n)"""
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

def binary_search_recursive(arr, target, left=0, right=None):
    """Binary search với recursion"""
    if right is None:
        right = len(arr) - 1
    
    if left > right:
        return -1
    
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# Performance comparison
def compare_search_algorithms():
    # Tạo sorted array lớn
    size = 100000
    arr = sorted([random.randint(1, 1000000) for _ in range(size)])
    target = arr[size//2]  # Target ở giữa
    
    # Test linear search
    start = time.time()
    result1 = linear_search(arr, target)
    linear_time = time.time() - start
    
    # Test binary search
    start = time.time()
    result2 = binary_search(arr, target)
    binary_time = time.time() - start
    
    print(f"Array size: {size}")
    print(f"Linear Search: {linear_time:.6f}s - Result: {result1}")
    print(f"Binary Search: {binary_time:.6f}s - Result: {result2}")
    print(f"Speed up: {linear_time/binary_time:.2f}x faster")

compare_search_algorithms()`,
        procedure: [
          'Implement cả iterative và recursive binary search',
          'Performance comparison với timing',
          'Handles edge cases (empty array, not found)',
          'Clear documentation và comments',
          'Test với different array sizes',
        ],
        expectedResults:
          'Array phải được sort trước. Dùng time.time() để measure performance. Mid = (left + right) // 2 tránh overflow. Test với arrays có size khác nhau.',
      },
      {
        title: 'Stack & Queue Implementation',
        description: 'Tạo Stack và Queue từ đầu, implement các operations cơ bản',
        difficulty: 'Trung bình',
        solution: `class Stack:
    """Stack implementation - LIFO (Last In, First Out)"""
    
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Thêm element vào top"""
        self.items.append(item)
    
    def pop(self):
        """Remove và return top element"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items.pop()
    
    def peek(self):
        """Xem top element không remove"""
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def __str__(self):
        return f"Stack: {self.items}"

class Queue:
    """Queue implementation - FIFO (First In, First Out)"""
    
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        """Thêm element vào rear"""
        self.items.append(item)
    
    def dequeue(self):
        """Remove và return front element"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items.pop(0)
    
    def front(self):
        """Xem front element"""
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def __str__(self):
        return f"Queue: {self.items}"

# Demo
def demo_stack_queue():
    print("--- Stack Demo ---")
    s = Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    print(s)
    print(f"Pop: {s.pop()}")
    print(f"Peek: {s.peek()}")
    print(s)
    
    print("\\n--- Queue Demo ---")
    q = Queue()
    q.enqueue('A')
    q.enqueue('B')
    q.enqueue('C')
    print(q)
    print(f"Dequeue: {q.dequeue()}")
    print(f"Front: {q.front()}")
    print(q)

demo_stack_queue()`,
        procedure: [
          'Implement Stack class với push, pop, peek, is_empty',
          'Implement Queue class với enqueue, dequeue, front, is_empty',
          'Handle empty state exceptions',
          'Viết demo code để test',
          'Thêm docstrings và comments',
        ],
        expectedResults:
          'Stack: LIFO behavior. Queue: FIFO behavior. Dùng list.pop() cho stack, list.pop(0) cho queue. Raise IndexError khi empty.',
      },
      {
        title: 'Binary Tree & Tree Traversal',
        description: 'Implement Binary Tree với các phương pháp duyệt khác nhau',
        difficulty: 'Nâng cao',
        solution: `class TreeNode:
    """Node trong Binary Tree"""
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    
    def __str__(self):
        return str(self.value)

class BinaryTree:
    """Binary Tree implementation với traversal methods"""
    
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        """Insert value vào Binary Search Tree"""
        if self.root is None:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)
    
    def _insert_recursive(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursive(node.left, value)
        else:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursive(node.right, value)
    
    def inorder_traversal(self, node=None, result=None):
        """Left -> Root -> Right (sorted order cho BST)"""
        if result is None:
            result = []
        if node is None:
            node = self.root
        
        if node:
            self.inorder_traversal(node.left, result)
            result.append(node.value)
            self.inorder_traversal(node.right, result)
        
        return result
    
    def preorder_traversal(self, node=None, result=None):
        """Root -> Left -> Right"""
        if result is None:
            result = []
        if node is None:
            node = self.root
        
        if node:
            result.append(node.value)
            self.preorder_traversal(node.left, result)
            self.preorder_traversal(node.right, result)
        
        return result
    
    def postorder_traversal(self, node=None, result=None):
        """Left -> Right -> Root"""
        if result is None:
            result = []
        if node is None:
            node = self.root
        
        if node:
            self.postorder_traversal(node.left, result)
            self.postorder_traversal(node.right, result)
            result.append(node.value)
        
        return result
    
    def level_order_traversal(self):
        """Breadth-First traversal using Queue"""
        if not self.root:
            return []
        
        result = []
        queue = [self.root]
        
        while queue:
            node = queue.pop(0)
            result.append(node.value)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        return result
    
    def search(self, value, node=None):
        """Tìm kiếm value trong BST"""
        if node is None:
            node = self.root
        
        if node is None or node.value == value:
            return node
        
        if value < node.value:
            return self.search(value, node.left)
        else:
            return self.search(value, node.right)
    
    def height(self, node=None):
        """Tính chiều cao của tree"""
        if node is None:
            node = self.root
        
        if node is None:
            return 0
        
        left_height = self.height(node.left)
        right_height = self.height(node.right)
        
        return 1 + max(left_height, right_height)
    
    def count_nodes(self, node=None):
        """Đếm tổng số nodes"""
        if node is None:
            node = self.root
        
        if node is None:
            return 0
        
        return 1 + self.count_nodes(node.left) + self.count_nodes(node.right)
    
    def visualize(self, node=None, level=0, prefix="Root: "):
        """Simple tree visualization"""
        if node is None:
            node = self.root
        
        if node is not None:
            print(" " * (level * 4) + prefix + str(node.value))
            if node.left or node.right:
                if node.left:
                    self.visualize(node.left, level + 1, "L--- ")
                else:
                    print(" " * ((level + 1) * 4) + "L--- None")
                
                if node.right:
                    self.visualize(node.right, level + 1, "R--- ")
                else:
                    print(" " * ((level + 1) * 4) + "R--- None")

# Demo Binary Tree
def demo_binary_tree():
    print("=== BINARY TREE DEMO ===")
    tree = BinaryTree()
    
    # Insert values
    values = [50, 30, 70, 20, 40, 60, 80]
    for value in values:
        tree.insert(value)
    
    print(f"Inserted values: {values}")
    print(f"Tree height: {tree.height()}")
    print(f"Total nodes: {tree.count_nodes()}")
    
    print("\\n=== TREE TRAVERSALS ===")
    print(f"Inorder (sorted): {tree.inorder_traversal()}")
    print(f"Preorder: {tree.preorder_traversal()}")
    print(f"Postorder: {tree.postorder_traversal()}")
    print(f"Level order: {tree.level_order_traversal()}")
    
    print("\\n=== SEARCH TEST ===")
    search_value = 40
    found = tree.search(search_value)
    print(f"Search for {search_value}: {'Found' if found else 'Not found'}")
    
    print("\\n=== TREE VISUALIZATION ===")
    tree.visualize()

demo_binary_tree()`,
        procedure: [
          'Complete TreeNode và BinaryTree classes',
          'All 4 traversal methods (inorder, preorder, postorder, level-order)',
          'Search, height, count_nodes methods',
          'Tree visualization method',
          'Comprehensive demo với test cases',
        ],
        expectedResults:
          'Recursion là key cho tree operations. Inorder traversal cho BST = sorted order. Level order cần queue. Height = 1 + max(left_height, right_height).',
      },
    ],
    realWorldApplications: [
      'Database indexing và optimization',
      'Search engines và information retrieval',
      'Game AI và pathfinding algorithms',
      'Compiler design và parsing',
      'Network routing protocols',
      'Machine learning feature selection',
      'Financial algorithmic trading',
      'Data compression algorithms',
    ],
    faqs: [
      {
        question: 'Độ phức tạp thời gian (Big O) là gì?',
        answer:
          'Big O là một ký hiệu toán học dùng để mô tả hành vi của một thuật toán khi kích thước đầu vào tăng lên. Nó cho biết thời gian chạy hoặc không gian bộ nhớ của thuật toán tăng nhanh như thế nào, giúp so sánh hiệu quả giữa các thuật toán khác nhau.',
      },
      {
        question: 'Tại sao cần học thuật toán và cấu trúc dữ liệu?',
        answer:
          'Học thuật toán và cấu trúc dữ liệu giúp bạn viết code hiệu quả hơn, giải quyết các vấn đề phức tạp một cách tối ưu, và vượt qua các cuộc phỏng vấn kỹ thuật tại các công ty công nghệ lớn. Nó là nền tảng của khoa học máy tính.',
      },
      {
        question: 'Sự khác biệt giữa tìm kiếm tuyến tính và tìm kiếm nhị phân là gì?',
        answer:
          'Tìm kiếm tuyến tính (O(n)) duyệt qua từng phần tử cho đến khi tìm thấy. Tìm kiếm nhị phân (O(log n)) yêu cầu danh sách phải được sắp xếp và hoạt động bằng cách liên tục chia đôi khoảng tìm kiếm. Tìm kiếm nhị phân nhanh hơn rất nhiều với dữ liệu lớn.',
      },
      {
        question: 'Stack và Queue khác nhau như thế nào?',
        answer:
          'Stack hoạt động theo nguyên tắc LIFO (Last-In, First-Out) - phần tử vào sau cùng sẽ ra trước tiên, giống như một chồng đĩa. Queue hoạt động theo nguyên tắc FIFO (First-In, First-Out) - phần tử vào trước sẽ ra trước, giống như một hàng người xếp hàng.',
      },
      {
        question: 'Cây nhị phân (Binary Tree) là gì?',
        answer:
          'Cây nhị phân là một cấu trúc dữ liệu dạng cây trong đó mỗi nút có tối đa hai nút con, được gọi là nút con trái và nút con phải. Nó được sử dụng rộng rãi trong các thuật toán tìm kiếm và sắp xếp.',
      },
      {
        question: 'Khi nào tôi nên sử dụng Dictionary (Hash Table)?',
        answer:
          'Sử dụng Dictionary khi bạn cần truy cập, chèn hoặc xóa các phần tử một cách nhanh chóng dựa trên một khóa (key). Thời gian trung bình cho các thao tác này là O(1), rất hiệu quả.',
      },
      {
        question: 'Quy hoạch động (Dynamic Programming) là gì?',
        answer:
          'Quy hoạch động là một kỹ thuật tối ưu hóa bằng cách giải quyết các bài toán con nhỏ hơn và lưu trữ kết quả của chúng để tránh tính toán lại. Nó thường được áp dụng cho các bài toán có các bài toán con gối lên nhau.',
      },
      {
        question: 'Một số thuật toán sắp xếp phổ biến là gì?',
        answer:
          'Các thuật toán sắp xếp phổ biến bao gồm Bubble Sort (đơn giản nhưng chậm), Insertion Sort, Selection Sort, Merge Sort (hiệu quả, O(n log n)), Quick Sort (thường nhanh nhất trong thực tế), và Heap Sort.',
      },
      {
        question: 'Đồ thị (Graph) trong cấu trúc dữ liệu là gì?',
        answer:
          'Đồ thị là một cấu trúc bao gồm một tập hợp các đỉnh (vertices) và một tập hợp các cạnh (edges) nối các đỉnh đó. Đồ thị được dùng để mô hình hóa các mối quan hệ mạng lưới, như mạng xã hội, mạng máy tính, hoặc bản đồ đường đi.',
      },
      {
        question: 'Làm thế nào để chọn đúng cấu trúc dữ liệu cho bài toán của mình?',
        answer:
          'Việc lựa chọn phụ thuộc vào các thao tác bạn cần thực hiện. Hãy tự hỏi: Bạn có cần truy cập nhanh theo chỉ số không (dùng List)? Bạn có cần truy cập nhanh theo khóa không (dùng Dictionary)? Dữ liệu có cần được sắp xếp không? Bạn có cần thêm/xóa ở đầu/cuối không (dùng Stack/Queue)?',
      },
    ],
  },
];

export const pythonModuleData: ModuleData = {
  id: K2Module.Python,
  title: 'Python Programming',
  subtitle: 'Lập trình Python từ cơ bản đến nâng cao',
  description:
    'Khóa học toàn diện về Python, ngôn ngữ lập trình mạnh mẽ và linh hoạt nhất hiện nay. Từ "Hello World" đến xây dựng ứng dụng AI, khóa học này là bệ phóng cho sự nghiệp công nghệ của bạn.',
  category: 'programming',
  icon: '🐍',
  color: 'from-blue-500 to-yellow-400',
  level: 'Cơ bản - Nâng cao',
  duration: '20-25 giờ',
  features: [
    'Cú pháp dễ học',
    'Lập trình hướng đối tượng (OOP)',
    'Thư viện chuẩn phong phú',
    'Xử lý file và dữ liệu',
    'Giới thiệu thuật toán',
  ],
  prerequisites: ['Tư duy logic', 'Đam mê giải quyết vấn đề', 'Không yêu cầu kinh nghiệm lập trình'],
  objectives: [
    'Nắm vững các khái niệm lập trình cơ bản với Python.',
    'Xây dựng các ứng dụng nhỏ và script tự động hóa.',
    'Hiểu và áp dụng lập trình hướng đối tượng (OOP).',
    'Làm việc với file, xử lý dữ liệu văn bản và CSV.',
    'Có nền tảng về thuật toán và cấu trúc dữ liệu.',
  ],
  careerOutcomes: [
    'Python Developer',
    'Data Analyst',
    'Automation QA Engineer',
    'Backend Web Developer',
    'Junior Data Scientist',
  ],
  industryApplications: [
    { name: 'Phát triển Web', description: 'Xây dựng backend cho các trang web và API với Django, Flask.' },
    {
      name: 'Khoa học Dữ liệu & AI',
      description: 'Phân tích dữ liệu, xây dựng mô hình học máy với NumPy, Pandas, Scikit-learn, TensorFlow.',
    },
    { name: 'Tự động hóa', description: 'Viết script để tự động hóa các tác vụ lặp đi lặp lại trong công việc.' },
    { name: 'An ninh mạng', description: 'Phát triển các công cụ để kiểm tra và bảo vệ hệ thống.' },
    { name: 'Phát triển Game', description: 'Tạo các game đơn giản với thư viện Pygame.' },
  ],
  marketDemand: {
    averageSalary: '300-800 triệu VND/năm',
    jobGrowth: '20% (rất nhanh)',
    hireDemand: 'Rất cao',
  },
  relatedModules: [K2Module.DataScienceAnalytics, K2Module.AI, K2Module.Robotics],
  lessons: pythonLessons,
};
