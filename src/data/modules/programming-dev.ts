import { ModuleData } from '@/types';
import { ProgrammingLesson } from '@/types/lesson-base';

export const programmingDevLessons: ProgrammingLesson[] = [
  {
    id: 'git-version-control',
    title: 'Quản lý phiên bản với Git',
    description: 'Học cách sử dụng Git để quản lý mã nguồn và hợp tác trong các dự án phần mềm.',
    duration: '90 phút',
    difficulty: 'Cơ bản',
    objectives: [
        'Hiểu khái niệm về hệ thống quản lý phiên bản (VCS).',
        'Thực hiện các lệnh Git cơ bản: clone, add, commit, push, pull.',
        'Tạo và quản lý nhánh (branch) để phát triển tính năng mới.',
        'Giải quyết xung đột (merge conflict) khi hợp nhất code.'
    ],
    prerequisites: ['Kiến thức cơ bản về dòng lệnh (command line).'],
    exercises: [
        {
            title: 'Tạo repository đầu tiên',
            description: 'Khởi tạo một dự án mới, tạo một file README.md, và đẩy lên một repository mới trên GitHub.',
            difficulty: 'Cơ bản',
            expectedResults: 'Một repository mới trên GitHub chứa code của bạn.'
        }
    ],
    realWorldApplications: [
        'Hợp tác với các nhà phát triển khác trên toàn thế giới trong các dự án mã nguồn mở.',
        'Quản lý các phiên bản khác nhau của một sản phẩm phần mềm.',
        'Dễ dàng quay lại một phiên bản ổn định khi có lỗi xảy ra.'
    ],
    faqs: [
        {
            question: 'Git và GitHub khác nhau như thế nào?',
            answer: 'Git là một hệ thống quản lý phiên bản phân tán, một công cụ dòng lệnh bạn cài đặt trên máy tính. GitHub là một dịch vụ lưu trữ repository Git trên nền tảng web, cung cấp thêm các tính năng như quản lý dự án, theo dõi lỗi, và mạng xã hội cho lập trình viên.'
        },
        {
            question: '`git fetch` và `git pull` khác nhau ra sao?',
            answer: '`git fetch` tải về tất cả các thay đổi từ remote repository nhưng không tự động hợp nhất (merge) chúng vào nhánh hiện tại của bạn. `git pull` là sự kết hợp của `git fetch` và `git merge`, nó vừa tải về thay đổi vừa cố gắng hợp nhất chúng ngay lập tức.'
        },
        {
            question: 'HEAD trong Git là gì?',
            answer: 'HEAD là một con trỏ tham chiếu đến commit mới nhất trong nhánh bạn đang làm việc. Hầu hết các lệnh Git ghi lại thay đổi đều bắt đầu từ HEAD.'
        },
        {
            question: '`git rebase` là gì và khi nào nên sử dụng?',
            answer: '`git rebase` là một cách khác để tích hợp các thay đổi từ một nhánh này sang một nhánh khác. Thay vì tạo một commit hợp nhất, rebase sẽ viết lại lịch sử commit bằng cách đặt các commit của bạn lên trên cùng của nhánh đích. Nó giúp lịch sử commit thẳng và sạch sẽ hơn, thường được sử dụng trên các nhánh cá nhân trước khi hợp nhất vào nhánh chính.'
        },
        {
            question: 'Làm thế nào để hoàn tác một commit đã đẩy lên remote?',
            answer: 'Cách an toàn nhất là sử dụng `git revert <commit_hash>`. Lệnh này sẽ tạo một commit mới để hoàn tác lại các thay đổi của commit cũ. Tránh sử dụng `git reset` trên các nhánh đã chia sẻ vì nó thay đổi lịch sử commit, có thể gây rối cho các thành viên khác.'
        },
        {
            question: 'Staging area (hay index) trong Git là gì?',
            answer: 'Là một khu vực trung gian nơi bạn chuẩn bị cho commit tiếp theo. Lệnh `git add` sẽ đưa các thay đổi từ thư mục làm việc của bạn vào staging area. Điều này cho phép bạn chọn lọc những thay đổi nào sẽ được đưa vào commit tiếp theo.'
        },
        {
            question: '`.gitignore` dùng để làm gì?',
            answer: 'Là một file văn bản nơi bạn liệt kê các file hoặc thư mục mà Git nên bỏ qua, không theo dõi. Ví dụ: các file log, thư mục chứa các gói đã cài đặt (node_modules), hoặc các file cấu hình chứa thông tin nhạy cảm.'
        },
        {
            question: 'Sự khác biệt giữa `git merge` và `git merge --squash`?',
            answer: '`git merge` sẽ tích hợp các commit từ một nhánh khác và giữ nguyên lịch sử của chúng. `git merge --squash` sẽ gộp tất cả các commit từ nhánh kia thành một commit duy nhất trên nhánh hiện tại. Điều này hữu ích khi bạn muốn giữ lịch sử của nhánh chính gọn gàng.'
        },
        {
            question: 'Fork một repository là gì?',
            answer: 'Fork là hành động tạo một bản sao của một repository của người khác về tài khoản của bạn. Điều này cho phép bạn tự do thử nghiệm, thay đổi mà không ảnh hưởng đến dự án gốc. Nếu bạn muốn đóng góp lại, bạn có thể tạo một "Pull Request".'
        },
        {
            question: 'Pull Request (PR) là gì?',
            answer: 'Là một yêu cầu bạn gửi đến chủ sở hữu của một repository để họ xem xét và hợp nhất các thay đổi từ nhánh của bạn vào nhánh của họ. Đây là cơ chế hợp tác chính trên các nền tảng như GitHub, GitLab.'
        }
    ]
  },
  {
    id: 'agile-development',
    title: 'Phát triển phần mềm Agile',
    description: 'Tìm hiểu về phương pháp phát triển phần mềm linh hoạt Agile và Scrum.',
    duration: '120 phút',
    difficulty: 'Trung bình',
    objectives: [
        'Hiểu 4 giá trị cốt lõi và 12 nguyên tắc của Agile.',
        'Nắm được các vai trò, sự kiện và tạo tác (artifacts) trong Scrum.',
        'Phân biệt giữa Agile và các mô hình phát triển truyền thống (như Waterfall).',
        'Áp dụng các khái niệm như User Story, Sprint, và Daily Stand-up.'
    ],
    prerequisites: ['Có kinh nghiệm hoặc kiến thức cơ bản về quy trình phát triển phần mềm.'],
    exercises: [
        {
            title: 'Lập kế hoạch một Sprint',
            description: 'Chọn một dự án nhỏ (ví dụ: làm một trang web portfolio). Viết ra các User Story, ước tính độ khó, và chọn một vài story để đưa vào một Sprint kéo dài 1 tuần. Lên kế hoạch các công việc cần làm.',
            difficulty: 'Trung bình',
            expectedResults: 'Hiểu rõ hơn về cách một Sprint được lên kế hoạch và thực thi trong thực tế.'
        }
    ],
    realWorldApplications: [
        'Phát triển sản phẩm trong các công ty công nghệ hàng đầu thế giới.',
        'Quản lý các dự án phức tạp với yêu cầu thường xuyên thay đổi.',
        'Cải thiện sự hợp tác và giao tiếp giữa các đội nhóm phát triển, kinh doanh và khách hàng.'
    ],
    faqs: [
        {
            question: 'Agile có phải là một phương pháp luận (methodology) không?',
            answer: 'Không hẳn. Agile là một tư duy (mindset) hoặc một triết lý dựa trên 4 giá trị và 12 nguyên tắc được nêu trong Tuyên ngôn Agile. Scrum, Kanban, XP là các framework hoặc phương pháp luận cụ thể để hiện thực hóa tư duy Agile đó.'
        },
        {
            question: 'Scrum là gì?',
            answer: 'Scrum là một framework phổ biến nhất để triển khai Agile. Nó cấu trúc việc phát triển thành các chu kỳ lặp lại gọi là Sprint, thường kéo dài từ 1-4 tuần. Scrum có các vai trò (Product Owner, Scrum Master, Development Team), sự kiện (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective) và tạo tác (Product Backlog, Sprint Backlog) rất cụ thể.'
        },
        {
            question: 'User Story là gì?',
            answer: 'Là một cách mô tả yêu cầu của một tính năng từ góc nhìn của người dùng cuối. Cấu trúc phổ biến là: "Là một [vai trò người dùng], tôi muốn [làm một việc gì đó] để [đạt được một giá trị nào đó]".'
        },
        {
            question: 'Sự khác biệt giữa Product Owner và Scrum Master?',
            answer: 'Product Owner chịu trách nhiệm về "cái gì" - tức là xác định các tính năng cần xây dựng và ưu tiên chúng trong Product Backlog để tối đa hóa giá trị cho sản phẩm. Scrum Master chịu trách nhiệm về "cách làm" - tức là đảm bảo đội nhóm tuân thủ quy trình Scrum, loại bỏ các trở ngại và hoạt động hiệu quả.'
        },
        {
            question: 'Sprint là gì?',
            answer: 'Là một khoảng thời gian cố định (time-box) mà trong đó đội Scrum làm việc để hoàn thành một lượng công việc đã chọn. Vào cuối mỗi Sprint, đội nhóm phải tạo ra một phần tăng trưởng sản phẩm "có thể chuyển giao được".'
        },
        {
            question: 'Mục đích của Daily Stand-up (hay Daily Scrum) là gì?',
            answer: 'Đây là một cuộc họp ngắn 15 phút mỗi ngày để đội phát triển đồng bộ hóa công việc và lập kế hoạch cho 24 giờ tiếp theo. Mỗi thành viên thường trả lời 3 câu hỏi: Hôm qua tôi đã làm gì? Hôm nay tôi sẽ làm gì? Có trở ngại nào không?'
        },
        {
            question: 'Kanban là gì và nó khác Scrum như thế nào?',
            answer: 'Kanban cũng là một phương pháp Agile, nhưng nó tập trung vào dòng chảy công việc liên tục thay vì các Sprint có thời gian cố định. Kanban trực quan hóa công việc trên một bảng (Kanban board) và giới hạn số lượng công việc đang thực hiện (Work in Progress - WIP) để tối ưu hóa hiệu suất.'
        },
        {
            question: 'Mô hình Thác nước (Waterfall) là gì?',
            answer: 'Là một mô hình phát triển tuần tự, trong đó mỗi giai đoạn (yêu cầu, thiết kế, lập trình, kiểm thử, triển khai) phải được hoàn thành đầy đủ trước khi chuyển sang giai đoạn tiếp theo. Mô hình này thiếu linh hoạt khi có sự thay đổi yêu cầu.'
        },
        {
            question: 'Definition of Done (Định nghĩa Hoàn thành) là gì?',
            answer: 'Là một danh sách kiểm tra (checklist) chung mà cả đội thống nhất, quy định các tiêu chí để một User Story được coi là "hoàn thành". Ví dụ: đã viết code, đã qua code review, đã viết unit test, đã được kiểm thử bởi QA. Điều này đảm bảo chất lượng và sự minh bạch.'
        },
        {
            question: 'Velocity (Vận tốc) trong Scrum là gì?',
            answer: 'Là một thước đo về lượng công việc (thường tính bằng story point) mà một đội có thể hoàn thành trong một Sprint. Dữ liệu Velocity từ các Sprint trước giúp đội nhóm dự báo khả năng của mình trong các Sprint tương lai một cách thực tế hơn.'
        }
    ]
  },
];

export const programmingDevModule: ModuleData = {
  id: 'programming-dev',
  title: 'Phát triển và Quy trình Lập trình',
  description: 'Học các công cụ, phương pháp và quy trình để phát triển phần mềm chuyên nghiệp và hiệu quả.',
  category: 'Lập trình',
  image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=600&fit=crop',
  tags: ['git', 'agile', 'scrum', 'devops', 'quy trình phát triển'],
  level: 'Cơ bản đến Trung bình',
  duration: '4 tuần',
  lessons: programmingDevLessons,
  features: [
    'Thực hành Git trên repository thật.',
    'Mô phỏng một Sprint trong Scrum.',
    'So sánh các mô hình phát triển phần mềm.',
    'Các câu hỏi phỏng vấn thường gặp về Git và Agile.'
  ],
  prerequisites: ['Có kiến thức về ít nhất một ngôn ngữ lập trình.'],
  objectives: [
    'Sử dụng thành thạo Git để quản lý mã nguồn và hợp tác.',
    'Hiểu và áp dụng được các nguyên tắc của Agile và framework Scrum.',
    'Nắm được quy trình phát triển phần mềm hiện đại.',
    'Cải thiện kỹ năng làm việc nhóm và quản lý dự án.'
  ],
  careerOutcomes: [
    'Sẵn sàng tham gia vào các dự án phần mềm chuyên nghiệp.',
    'Cải thiện hiệu suất làm việc và khả năng hợp tác trong đội nhóm.',
    'Tăng khả năng được tuyển dụng vào các công ty công nghệ áp dụng Agile.'
  ],
  color: 'from-gray-700 to-gray-900',
};

