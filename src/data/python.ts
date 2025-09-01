export interface PythonLesson {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  objectives: string[];
  prerequisites: string[];
  exercises: Exercise[];
  realWorldApplications: string[];
  videoUrl: string;
  relatedGames?: Array<{
    gameId: string;
    title: string;
    connection: string;
    difficulty: string;
  }>;
}

interface Exercise {
  title: string;
  description: string;
  difficulty: string;
  solution: string;
  requirements: string[];
  hints: string[];
}

export const pythonLessons: PythonLesson[] = [
  {
    id: 'python-introduction',
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
        description: 'Viết chương trình in ra lời chào với tên của bạn',
        difficulty: 'Dễ',
        solution: `name = input("Tên của bạn: ")
print(f"Xin chào {name}!")
print("Chào mừng bạn đến với Python!")`,
        requirements: ['Sử dụng input() để nhận tên', 'Sử dụng f-string để format', 'In ra ít nhất 2 dòng text'],
        hints: [
          'Dùng input() để nhận dữ liệu từ user',
          'Dùng f"..." để chèn biến vào string',
          'Mỗi print() sẽ in một dòng mới',
        ],
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
        requirements: [
          'Nhận input cho tên, năm sinh, chiều cao',
          'Tính tuổi dựa trên năm hiện tại',
          'Chuyển đổi chiều cao từ cm sang m',
          'Kiểm tra có phải người lớn không',
          'Hiển thị thông tin đẹp mắt',
        ],
        hints: [
          'Dùng int() cho năm sinh',
          'Dùng float() cho chiều cao',
          'Dùng :.2f để làm tròn 2 chữ số thập phân',
          'Dùng conditional expression cho status',
        ],
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
        requirements: ['Đếm số từ và ký tự', 'Chuyển đổi case khác nhau', 'Đảo ngược chuỗi', 'Hiển thị thống kê đẹp'],
        hints: [
          'Dùng split() để chia thành từ',
          'Dùng len() để đếm',
          'Dùng string methods: upper(), lower(), title()',
          'Dùng slicing [::-1] để đảo ngược',
        ],
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
    relatedGames: [
      {
        gameId: 'typing-speed-challenge',
        title: 'Thử Thách Tốc Độ Gõ',
        connection: 'Luyện tập tốc độ gõ code Python nhanh và chính xác',
        difficulty: 'Cơ bản',
      },
      {
        gameId: 'python-coding-puzzle',
        title: 'Python Coding Puzzle',
        connection: 'Áp dụng kiến thức Python cơ bản để giải các puzzle lập trình',
        difficulty: 'Cơ bản',
      },
      {
        gameId: 'word-builder',
        title: 'Xây Dựng Từ',
        connection: 'Thực hành xử lý string và input/output trong Python',
        difficulty: 'Cơ bản',
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
        requirements: [
          'Nhập nhiều điểm số (dùng while loop)',
          'Validate điểm trong khoảng 0-10',
          'Tính điểm trung bình',
          'Xếp loại theo thang điểm Việt Nam',
          'Xử lý trường hợp không nhập điểm nào',
        ],
        hints: [
          'Dùng list để lưu điểm',
          'Dùng while True và break',
          'Kiểm tra range với 0 <= score <= 10',
          'Dùng elif cho multiple conditions',
        ],
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
        requirements: [
          'Tạo ít nhất 4 functions toán học',
          'Mỗi function có docstring',
          'Xử lý edge cases',
          'Tạo menu để test functions',
          'Sử dụng recursion ít nhất 1 lần',
        ],
        hints: [
          'Dùng """...""" cho docstring',
          'Kiểm tra input validity',
          'Recursive function cần base case',
          'Dùng while loop cho menu',
        ],
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
  },
  {
    id: 'lists-tuples',
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
        requirements: [
          'Sử dụng list để lưu tasks',
          'Mỗi task có description và priority',
          'Functions cho từng chức năng',
          'Menu-driven interface',
          'Xử lý edge cases và errors',
        ],
        hints: [
          'Dùng tuple để lưu (task, priority)',
          'enumerate() để đánh số thứ tự',
          'pop() để xóa và lấy element',
          'try/except để xử lý errors',
        ],
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
        requirements: [
          'Dictionary chính để lưu students',
          'Nested dictionary cho grades',
          'Functions cho CRUD operations',
          'Tính điểm trung bình',
          'Hiển thị danh sách tổng quan',
        ],
        hints: [
          'Dùng student_id làm key',
          'Nested dict: {id: {name, age, grades: {subject: grade}}}',
          'Dùng .items() để iterate',
          'Check key existence với "in" operator',
        ],
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
  },
  {
    id: 'file-handling',
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
        requirements: [
          'Đọc và parse log files',
          'Đếm các loại log levels',
          'Tìm và liệt kê errors',
          'Tạo báo cáo ra file mới',
          'Xử lý exceptions khi đọc file',
        ],
        hints: [
          'Dùng with open() để tự động đóng file',
          'split() để tách các phần của log entry',
          'Counter từ collections để đếm',
          'datetime để timestamp báo cáo',
        ],
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
  },
  {
    id: 'oop-basics',
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
        requirements: [
          'Class BankAccount với các methods cơ bản',
          'Encapsulation với private attributes',
          'Transaction history tracking',
          'Class SavingsAccount kế thừa BankAccount',
          'Demo system với multiple accounts',
        ],
        hints: [
          'Dùng _attribute để private',
          'super() để gọi parent constructor',
          'datetime để track transaction time',
          'String formatting cho currency display',
        ],
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
  },
  {
    id: 'algorithms-data-structures',
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
        requirements: [
          'Implement cả iterative và recursive binary search',
          'Performance comparison với timing',
          'Handles edge cases (empty array, not found)',
          'Clear documentation và comments',
          'Test với different array sizes',
        ],
        hints: [
          'Array phải được sort trước',
          'Dùng time.time() để measure performance',
          'Mid = (left + right) // 2 tránh overflow',
          'Test với arrays có size khác nhau',
        ],
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

# Undo/Redo system using Stack
class UndoRedoSystem:
    def __init__(self):
        self.undo_stack = Stack()
        self.redo_stack = Stack()
        self.current_state = ""
    
    def execute_command(self, command):
        """Execute command và save state for undo"""
        self.undo_stack.push(self.current_state)
        self.current_state = command
        # Clear redo stack khi có command mới
        self.redo_stack = Stack()
        print(f"Executed: {command}")
    
    def undo(self):
        """Undo last command"""
        if not self.undo_stack.is_empty():
            self.redo_stack.push(self.current_state)
            self.current_state = self.undo_stack.pop()
            print(f"Undid to: {self.current_state}")
        else:
            print("Nothing to undo")
    
    def redo(self):
        """Redo last undone command"""
        if not self.redo_stack.is_empty():
            self.undo_stack.push(self.current_state)
            self.current_state = self.redo_stack.pop()
            print(f"Redid to: {self.current_state}")
        else:
            print("Nothing to redo")

# Demo Stack & Queue
def demo_stack_queue():
    print("=== STACK DEMO ===")
    stack = Stack()
    stack.push("First")
    stack.push("Second")
    stack.push("Third")
    print(stack)
    print(f"Pop: {stack.pop()}")  # Third
    print(f"Peek: {stack.peek()}")  # Second
    print(stack)
    
    print("\\n=== QUEUE DEMO ===")
    queue = Queue()
    queue.enqueue("First")
    queue.enqueue("Second") 
    queue.enqueue("Third")
    print(queue)
    print(f"Dequeue: {queue.dequeue()}")  # First
    print(f"Front: {queue.front()}")  # Second
    print(queue)
    
    print("\\n=== UNDO/REDO DEMO ===")
    editor = UndoRedoSystem()
    editor.execute_command("Type 'Hello'")
    editor.execute_command("Type ' World'")
    editor.execute_command("Delete 'World'")
    editor.undo()  # Back to "Type ' World'"
    editor.undo()  # Back to "Type 'Hello'"
    editor.redo()  # Forward to "Type ' World'"

demo_stack_queue()`,
        requirements: [
          'Complete Stack class với error handling',
          'Complete Queue class với all operations',
          'Real-world example (Undo/Redo system)',
          'Proper exception handling',
          'Demo function showing usage',
        ],
        hints: [
          'List.append() và list.pop() cho Stack',
          'List.append() và list.pop(0) cho Queue',
          'Check empty trước khi pop/dequeue',
          'Undo/Redo cần 2 stacks',
        ],
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
        requirements: [
          'Complete TreeNode và BinaryTree classes',
          'All 4 traversal methods (inorder, preorder, postorder, level-order)',
          'Search, height, count_nodes methods',
          'Tree visualization method',
          'Comprehensive demo với test cases',
        ],
        hints: [
          'Recursion là key cho tree operations',
          'Inorder traversal cho BST = sorted order',
          'Level order cần queue',
          'Height = 1 + max(left_height, right_height)',
        ],
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
  },
];

export default pythonLessons;
