import { BaseLessonData } from '@/types/lesson-base';
import { ModuleData } from '@/types';

export interface RobloxLessonType extends BaseLessonData {
  studioVersion: string;
  luaVersion: string;
}

export const robloxLessons: RobloxLessonType[] = [
  {
    id: 'roblox-studio-intro',
    title: 'Bắt đầu với Roblox Studio',
    description:
      'Làm quen với giao diện Roblox Studio, các công cụ xây dựng cơ bản và tạo ra không gian 3D đầu tiên của bạn.',
    duration: '120 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=srOXlSvpLI8',
    imageUrl: 'https://i.ytimg.com/vi/srOXlSvpLI8/hqdefault.jpg',
    studioVersion: 'v613',
    luaVersion: '5.1',
    objectives: [
      'Hiểu rõ giao diện và các cửa sổ chính của Roblox Studio.',
      'Sử dụng các công cụ để tạo và thao tác với các đối tượng (Parts).',
      'Xây dựng một cảnh quan đơn giản với địa hình và các vật thể.',
      'Lưu và xuất bản dự án đầu tiên của bạn lên Roblox.',
    ],
    prerequisites: ['Tài khoản Roblox.', 'Máy tính đã cài đặt Roblox Studio.', 'Kỹ năng sử dụng máy tính cơ bản.'],
    exercises: [
      {
        title: 'Xây dựng Ngôi nhà đầu tiên',
        description: 'Thực hành sử dụng các Part để xây dựng một ngôi nhà đơn giản với tường, mái và cửa.',
        difficulty: 'Cơ bản',
        procedure: [
          'Mở một template Baseplate trong Roblox Studio.',
          'Sử dụng công cụ Part để tạo các khối cho tường nhà.',
          'Dùng công cụ Scale, Move, và Rotate để điều chỉnh kích thước và vị trí các bức tường.',
          'Tạo một mái nhà bằng cách sử dụng Part hình nêm (Wedge).',
          'Thêm một Part làm cửa ra vào.',
        ],
        expectedResults: 'Một mô hình ngôi nhà 3D đơn giản được xây dựng từ các Parts.',
      },
    ],
    realWorldApplications: [
      'Nền tảng để thiết kế bất kỳ loại game nào trên Roblox.',
      'Kỹ năng thiết kế cấp độ (level design) cho game.',
      'Tạo ra các mô hình 3D cho các dự án cá nhân hoặc bán trên Marketplace.',
    ],
    vietnamContext: {
      title: 'Cộng đồng Sáng tạo Roblox tại Việt Nam',
      content: [
        'Cộng đồng nhà phát triển game Roblox (Roblox developers) tại Việt Nam đang phát triển rất mạnh mẽ, với nhiều diễn đàn, nhóm trên mạng xã hội và các cuộc thi được tổ chức. Đây là một sân chơi tuyệt vời để học hỏi, giao lưu và hợp tác.',
        'Nhiều nhà phát triển Việt Nam đã tạo ra những tựa game thành công trên Roblox, thu hút hàng triệu lượt chơi và tạo ra nguồn thu nhập đáng kể. Điều này cho thấy tiềm năng to lớn của việc phát triển game trên nền tảng này.',
      ],
    },
    careerConnect: {
      name: 'Anh Nguyễn Minh "T-Dev" Trí',
      title: 'Nhà phát triển Game Roblox & YouTuber',
      company: 'T-Dev Studio',
      imageUrl: 'https://i.pravatar.cc/150?u=nguyen-minh-tri',
      quote:
        'Roblox không chỉ là một Interactive Practice, đó là một vũ trụ nơi bạn có thể xây dựng bất cứ điều gì bạn tưởng tượng. Bắt đầu từ những khối vuông đơn giản, bạn có thể tạo ra cả một thế giới và chia sẻ nó với hàng triệu người.',
    },
    quizzes: [
      {
        question: 'Công cụ nào trong Roblox Studio dùng để tạo các khối vật thể cơ bản?',
        options: ['Toolbox', 'Explorer', 'Part', 'Script'],
        correctAnswerIndex: 2,
        explanation:
          'Công cụ "Part" cho phép bạn chèn các vật thể cơ bản như khối hộp, hình cầu, hình trụ và hình nêm vào không gian game của mình.',
      },
      {
        question: 'Cửa sổ nào hiển thị cấu trúc phân cấp của tất cả các đối tượng trong game?',
        options: ['Properties', 'Explorer', 'Toolbox', 'Output'],
        correctAnswerIndex: 1,
        explanation:
          'Cửa sổ "Explorer" hiển thị tất cả các đối tượng trong game của bạn dưới dạng cây thư mục, giúp bạn dễ dàng quản lý và tìm kiếm chúng.',
      },
    ],
    faqs: [
      {
        question: 'Roblox Studio có miễn phí không?',
        answer:
          'Có, Roblox Studio hoàn toàn miễn phí để tải về và sử dụng. Bạn chỉ cần một tài khoản Roblox để bắt đầu tạo ra thế giới của riêng mình.',
      },
      {
        question: 'Tôi có cần biết lập trình để sử dụng Roblox Studio không?',
        answer:
          'Không cần thiết cho việc xây dựng cơ bản! Bạn có thể tạo ra nhiều thứ thú vị chỉ bằng cách sử dụng các công cụ xây dựng và các mô hình có sẵn trong Toolbox. Tuy nhiên, để tạo ra các Interactive Practice có tương tác phức tạp, bạn sẽ cần học lập trình Lua.',
      },
      {
        question: 'Part là gì và tại sao nó quan trọng?',
        answer:
          'Part là viên gạch xây dựng cơ bản nhất trong Roblox. Mọi thứ từ tường nhà, mặt đất, đến các vật thể phức tạp đều được tạo ra từ việc kết hợp và tùy chỉnh các Part. Nắm vững cách sử dụng Part là bước đầu tiên để trở thành một nhà xây dựng giỏi.',
      },
      {
        question: 'Làm thế nào để thay đổi màu sắc và vật liệu của một Part?',
        answer:
          'Bạn có thể thay đổi các thuộc tính này trong cửa sổ "Properties". Chọn Part bạn muốn thay đổi, sau đó tìm đến thuộc tính "Color" để chọn màu và "Material" để chọn vật liệu (ví dụ: gỗ, kim loại, cỏ).',
      },
      {
        question: 'Công cụ "Toolbox" dùng để làm gì?',
        answer:
          'Toolbox là một thư viện khổng lồ chứa các mô hình, script, và các tài sản khác do Roblox và cộng đồng tạo ra. Bạn có thể kéo thả chúng vào game của mình để tiết kiệm thời gian, nhưng hãy cẩn thận với các script độc hại có thể có trong các mô hình miễn phí.',
      },
      {
        question: 'Làm thế nào để cố định một vật thể không bị rơi xuống khi game bắt đầu?',
        answer:
          'Bạn cần "neo" (Anchor) vật thể đó lại. Chọn Part bạn muốn cố định, sau đó trong cửa sổ Properties, tìm và tick vào ô "Anchored". Các vật thể được neo sẽ không bị ảnh hưởng bởi trọng lực.',
      },
      {
        question: 'Sự khác biệt giữa công cụ "Move" và "Scale" là gì?',
        answer:
          'Công cụ "Move" dùng để di chuyển vị trí của vật thể trong không gian 3D. Công cụ "Scale" dùng để thay đổi kích thước (chiều dài, rộng, cao) của vật thể.',
      },
      {
        question: 'Làm thế nào để kiểm tra game của tôi hoạt động như thế nào?',
        answer:
          'Bạn có thể nhấn nút "Play" (hoặc phím F5) ở thanh công cụ trên cùng. Thao tác này sẽ bắt đầu một phiên chơi thử, cho phép bạn trải nghiệm game của mình như một người chơi thực thụ.',
      },
      {
        question: 'Tôi có thể hợp tác xây dựng game với bạn bè không?',
        answer:
          'Có, Roblox Studio có một tính năng gọi là "Team Create". Nó cho phép nhiều người cùng làm việc trên một dự án game trong thời gian thực, rất tuyệt vời cho các dự án nhóm.',
      },
      {
        question: 'Xuất bản (Publish) game có nghĩa là gì?',
        answer:
          'Xuất bản game là quá trình tải game của bạn lên nền tảng Roblox, giúp lưu lại tiến trình của bạn trên đám mây và cho phép người khác có thể tìm và chơi game của bạn (nếu bạn đặt nó ở chế độ công khai).',
      },
    ],
  },
  {
    id: 'lua-scripting-basics',
    title: 'Lập trình Lua cơ bản cho Game Roblox',
    description:
      'Học những khái niệm cơ bản của ngôn ngữ lập trình Lua, ngôn ngữ chính được sử dụng trong Roblox, để làm cho các đối tượng trong game của bạn có thể tương tác.',
    duration: '180 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=srOXlSvpLI8',
    imageUrl: 'https://i.ytimg.com/vi/srOXlSvpLI8/hqdefault.jpg',
    studioVersion: 'v613',
    luaVersion: '5.1',
    objectives: [
      'Hiểu về biến, kiểu dữ liệu và các toán tử trong Lua.',
      'Sử dụng các cấu trúc điều khiển như if-then-else và vòng lặp.',
      'Viết các hàm (functions) để tái sử dụng code.',
      'Tạo một Script đơn giản để thay đổi thuộc tính của một Part (ví dụ: màu sắc, độ trong suốt).',
    ],
    prerequisites: ['Hoàn thành bài học "Bắt đầu với Roblox Studio".', 'Tư duy logic và giải quyết vấn đề.'],
    exercises: [
      {
        title: 'Tạo một Part đổi màu',
        description: 'Viết một script Lua để một Part tự động thay đổi màu sắc sau mỗi vài giây.',
        difficulty: 'Trung bình',
        procedure: [
          'Tạo một Part trong Workspace.',
          'Thêm một Script vào trong Part đó.',
          'Trong Script, viết một vòng lặp vô tận (while true do).',
          'Bên trong vòng lặp, thay đổi thuộc tính Color của Part.',
          'Sử dụng hàm wait() để tạo độ trễ giữa các lần đổi màu.',
        ],
        expectedResults: 'Part sẽ liên tục đổi màu khi chạy game.',
        solution:
          '```lua\nlocal part = script.Parent\n\nwhile true do\n  part.Color = Color3.new(math.random(), math.random(), math.random())\n  wait(1)\nend\n```',
      },
    ],
    realWorldApplications: [
      'Tạo ra cơ chế game (game mechanics) như cửa tự động mở, bẫy, hoặc các nút bấm.',
      'Lập trình hành vi cho các nhân vật NPC (Non-Player Character).',
      'Xây dựng hệ thống tính điểm, tiền tệ trong game.',
    ],
    vietnamContext: {
      title: 'Lua: Ngôn ngữ lập trình "Made in Brazil" phổ biến tại Việt Nam',
      content: [
        'Mặc dù không phải là ngôn ngữ lập trình phổ biến nhất trong ngành công nghiệp phần mềm nói chung, Lua lại cực kỳ phổ biến trong cộng đồng phát triển game tại Việt Nam nhờ Roblox.',
        'Sự đơn giản, dễ học của Lua là một rào cản gia nhập thấp, cho phép nhiều bạn trẻ, thậm chí là học sinh cấp 2, cấp 3, có thể bắt đầu hành trình lập trình và sáng tạo game của riêng mình.',
      ],
    },
    careerConnect: {
      name: 'Chị Trần "Mèo" Anh Thư',
      title: 'Lập trình viên Gameplay',
      company: 'Uplift Games (Adopt Me!)',
      imageUrl: 'https://i.pravatar.cc/150?u=tran-anh-thu',
      quote:
        'Lập trình trong Roblox giống như ban phép thuật cho các vật thể. Bạn ra lệnh, và chúng tuân theo. Với Lua, bạn có thể tạo ra những cơ chế game phức tạp từ những dòng code đơn giản. Sức mạnh nằm ở sự sáng tạo của bạn.',
    },
    quizzes: [
      {
        question: 'Ngôn ngữ lập trình chính được sử dụng trong Roblox là gì?',
        options: ['Python', 'JavaScript', 'C++', 'Lua'],
        correctAnswerIndex: 3,
        explanation:
          'Roblox sử dụng một phiên bản của Lua, một ngôn ngữ kịch bản nhẹ và mạnh mẽ, để lập trình các hành vi và cơ chế trong game.',
      },
      {
        question: 'Trong Lua, hàm `wait(n)` có chức năng gì?',
        options: [
          'Chờ người chơi nhấn một nút',
          'Tạm dừng script trong `n` giây',
          'Làm cho script chạy nhanh hơn `n` lần',
          'In ra số `n`',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Hàm `wait(n)` là một hàm rất quan trọng trong Roblox, dùng để tạo độ trễ và ngăn các vòng lặp vô tận làm treo game.',
      },
    ],
    faqs: [
      {
        question: 'Tại sao tôi nên học Lua?',
        answer:
          'Nếu bạn muốn tạo ra các Interactive Practice tương tác trên Roblox, Lua là ngôn ngữ bắt buộc phải học. Nó cho phép bạn điều khiển mọi thứ, từ việc làm cho một cánh cửa tự mở, tạo ra vũ khí, đến việc xây dựng các hệ thống phức tạp như bảng xếp hạng hay cửa hàng trong game.',
      },
      {
        question: 'Script và LocalScript khác nhau như thế nào?',
        answer:
          'Script chạy trên máy chủ (server-side), ảnh hưởng đến tất cả người chơi trong game. LocalScript chạy trên máy của từng người chơi (client-side), chỉ ảnh hưởng đến người chơi đó. Ví dụ: Script dùng để xử lý điểm số chung, còn LocalScript dùng để hiển thị giao diện người dùng (GUI) riêng cho mỗi người.',
      },
      {
        question: 'Biến (variable) trong Lua là gì?',
        answer:
          'Biến là một cái tên bạn đặt để lưu trữ một giá trị, ví dụ như một con số, một chuỗi văn bản, hoặc một tham chiếu đến một đối tượng trong game. Ví dụ: `local score = 0` tạo ra một biến tên là `score` và gán cho nó giá trị ban đầu là 0.',
      },
      {
        question: '`script.Parent` có nghĩa là gì?',
        answer:
          '`script.Parent` là một cách rất phổ biến để tham chiếu đến đối tượng chứa script đó. Ví dụ, nếu bạn đặt một Script vào trong một Part, thì `script.Parent` chính là Part đó.',
      },
      {
        question: 'Làm thế nào để xử lý sự kiện một người chơi chạm vào một Part?',
        answer:
          'Bạn có thể sử dụng sự kiện (event) `.Touched`. Bạn kết nối một hàm với sự kiện này, và hàm đó sẽ được thực thi mỗi khi có một vật thể khác chạm vào Part. Ví dụ: `part.Touched:Connect(function(otherPart) ... end)`.',
      },
      {
        question: 'Hàm (function) là gì?',
        answer:
          'Hàm là một khối code có thể được đặt tên và gọi lại nhiều lần. Nó giúp bạn tổ chức code gọn gàng và tránh lặp lại cùng một đoạn code ở nhiều nơi.',
      },
      {
        question: 'Cửa sổ "Output" trong Roblox Studio dùng để làm gì?',
        answer:
          'Cửa sổ "Output" rất quan trọng để gỡ lỗi (debug). Nó hiển thị các thông báo lỗi từ script của bạn và bạn cũng có thể dùng hàm `print()` để in ra các giá trị của biến hoặc các thông báo để kiểm tra xem script có đang chạy đúng như mong đợi không.',
      },
      {
        question: 'Làm thế nào để lấy một đối tượng trong game bằng script?',
        answer:
          'Bạn có thể sử dụng `game.Workspace` để truy cập vào không gian làm việc chính, sau đó dùng dấu chấm để đi sâu vào các đối tượng con. Ví dụ: `game.Workspace.MyPart` sẽ lấy đối tượng có tên là "MyPart" nằm trong Workspace.',
      },
      {
        question: 'Vòng lặp `for` và `while` khác nhau như thế nào?',
        answer:
          'Vòng lặp `for` thường được sử dụng khi bạn biết trước số lần lặp (ví dụ: lặp 10 lần). Vòng lặp `while` được sử dụng khi bạn muốn lặp lại một hành động miễn là một điều kiện nào đó vẫn còn đúng (ví dụ: lặp lại cho đến khi máu của người chơi về 0).',
      },
      {
        question: 'Tôi có thể tìm hiểu thêm về Roblox API ở đâu?',
        answer:
          'Trang web Roblox Creator Documentation (trước đây là Developer Hub) là nguồn tài liệu chính thức và đầy đủ nhất. Nó chứa thông tin chi tiết về tất cả các đối tượng, thuộc tính, sự kiện và hàm mà bạn có thể sử dụng trong lập trình Roblox.',
      },
    ],
  },
  {
    id: 'publishing-your-game',
    title: 'Xuất bản và Quảng bá Game của bạn',
    description:
      'Tìm hiểu các bước cuối cùng để đưa game của bạn đến với cộng đồng Roblox, bao gồm cấu hình game, tạo icon, và các chiến lược quảng bá cơ bản.',
    duration: '90 phút',
    difficulty: 'Trung bình',
    videoUrl: 'https://www.youtube.com/watch?v=M3Jj6cwDChE',
    imageUrl: 'https://i.ytimg.com/vi/M3Jj6cwDChE/hqdefault.jpg',
    studioVersion: 'v613',
    luaVersion: '5.1',
    objectives: [
      'Cấu hình các thiết lập quan trọng cho game (tên, mô tả, thể loại).',
      'Thiết kế icon và thumbnail hấp dẫn cho game.',
      'Hiểu các tùy chọn về kiếm tiền trong game (Game Passes, Developer Products).',
      'Xuất bản game và chia sẻ với bạn bè.',
    ],
    prerequisites: ['Có một game (dù đơn giản) đã được tạo.', 'Hoàn thành các bài học trước.'],
    exercises: [
      {
        title: 'Thiết lập trang Game',
        description: 'Thực hành cấu hình trang chính cho game của bạn để thu hút người chơi.',
        difficulty: 'Cơ bản',
        procedure: [
          'Vào menu File > Game Settings.',
          'Điền các thông tin cơ bản như tên và mô tả game.',
          'Trong tab Monetization, tạo một Game Pass thử nghiệm.',
          'Lưu các thiết lập và xuất bản game.',
        ],
        expectedResults: 'Game của bạn được xuất bản và có một trang thông tin cơ bản trên Roblox.',
      },
    ],
    realWorldApplications: [
      'Phát hành một sản phẩm phần mềm hoàn chỉnh.',
      'Kỹ năng marketing và quảng bá sản phẩm.',
      'Cơ hội kiếm thu nhập từ việc phát triển game.',
    ],
    vietnamContext: {
      title: 'Từ "Sân chơi" đến "Sự nghiệp"',
      content: [
        'Nhiều nhà phát triển game chuyên nghiệp tại Việt Nam đã có bước khởi đầu từ việc xuất bản những game đơn giản trên Roblox. Đây là một môi trường thực tế để học hỏi về chu kỳ phát triển sản phẩm, từ ý tưởng, phát triển, đến phát hành và thu thập phản hồi từ người dùng.',
        'Chương trình Developer Exchange (DevEx) của Roblox cho phép các nhà phát triển đổi tiền ảo trong game (Robux) ra tiền thật, mở ra một con đường sự nghiệp thực sự cho những ai nghiêm túc và tạo ra được các sản phẩm chất lượng.',
      ],
    },
    careerConnect: {
      name: 'Anh Lê "LêAK" Anh Kiệt',
      title: 'Nhà sản xuất Game',
      company: 'Gamefam',
      imageUrl: 'https://i.pravatar.cc/150?u=le-anh-kiet',
      quote:
        'Việc nhấn nút "Publish" lần đầu tiên là một khoảnh khắc đáng nhớ. Nó biến bạn từ một người chơi game thành một người tạo ra game. Đừng sợ thất bại, mỗi lượt chơi, mỗi phản hồi đều là một bài học quý giá để bạn làm tốt hơn trong lần tiếp theo.',
    },
    quizzes: [
      {
        question: '"Game Pass" trong Roblox là gì?',
        options: [
          'Một vé để vào chơi game',
          'Một vật phẩm bán một lần, mang lại lợi ích vĩnh viễn cho người chơi (ví dụ: VIP, vũ khí đặc biệt)',
          'Một vật phẩm có thể mua nhiều lần (ví dụ: tiền trong game)',
          'Một bản cập nhật của game',
        ],
        correctAnswerIndex: 1,
        explanation:
          'Game Pass là một hình thức kiếm tiền phổ biến, cho phép người chơi mua một lần để nhận được các đặc quyền hoặc vật phẩm vĩnh viễn trong game đó.',
      },
      {
        question: 'Chương trình DevEx của Roblox cho phép nhà phát triển làm gì?',
        options: [
          'Nhận các công cụ phát triển độc quyền',
          'Quảng cáo game của họ miễn phí',
          'Đổi tiền ảo Robux kiếm được từ game ra tiền thật',
          'Tham gia các sự kiện của Roblox',
        ],
        correctAnswerIndex: 2,
        explanation:
          'Developer Exchange (DevEx) là chương trình cho phép các nhà phát triển thành công biến đam mê của mình thành một nguồn thu nhập thực sự bằng cách quy đổi Robux sang USD.',
      },
    ],
    faqs: [
      {
        question: 'Sự khác biệt giữa việc "Save to Roblox" và "Publish to Roblox" là gì?',
        answer:
          '"Save to Roblox" chỉ đơn giản là lưu phiên bản game của bạn lên đám mây để bạn có thể tiếp tục làm việc trên các máy tính khác. "Publish to Roblox" sẽ cập nhật phiên bản game mà người chơi sẽ thấy và chơi.',
      },
      {
        question: 'Làm thế nào để game của tôi nổi bật giữa hàng triệu game khác?',
        answer:
          'Một icon và thumbnail hấp dẫn là rất quan trọng để thu hút sự chú ý ban đầu. Ngoài ra, một ý tưởng game độc đáo, gameplay cuốn hút và việc cập nhật thường xuyên là chìa khóa để giữ chân người chơi.',
      },
      {
        question: 'Tôi có thể kiếm tiền từ game Roblox của mình như thế nào?',
        answer:
          'Có nhiều cách: bán Game Passes (đặc quyền vĩnh viễn), Developer Products (vật phẩm dùng một lần), tạo quần áo và vật phẩm cho avatar, và thông qua Premium Payouts (bạn được trả tiền khi người dùng Premium dành thời gian trong game của bạn).',
      },
      {
        question: 'Developer Products khác Game Passes như thế nào?',
        answer:
          'Game Pass được mua một lần và cung cấp lợi ích vĩnh viễn (ví dụ: quyền truy cập khu vực VIP). Developer Product có thể được mua nhiều lần (ví dụ: mua 100 vàng, một bình máu).',
      },
      {
        question: 'Làm thế nào để quảng bá game của tôi?',
        answer:
          'Bạn có thể sử dụng hệ thống quảng cáo của Roblox (Roblox Ads) để chạy các banner quảng cáo. Ngoài ra, xây dựng một cộng đồng trên các mạng xã hội như YouTube, TikTok, Discord cũng là một cách rất hiệu quả để thu hút người chơi.',
      },
      {
        question: 'Tôi có cần phải trả tiền để xuất bản game không?',
        answer:
          'Không, việc xuất bản game lên Roblox là hoàn toàn miễn phí. Tuy nhiên, việc chạy quảng cáo để quảng bá game sẽ tốn Robux.',
      },
      {
        question: 'Làm thế nào để xem các số liệu phân tích về game của tôi?',
        answer:
          'Trên trang web của Roblox, vào tab "Create", bạn có thể truy cập vào "Developer Stats" cho game của mình. Nó cung cấp các thông tin hữu ích như số lượng người chơi hàng ngày, thời gian chơi trung bình, và doanh thu.',
      },
      {
        question: 'Tại sao việc cập nhật game thường xuyên lại quan trọng?',
        answer:
          'Cập nhật thường xuyên cho thấy rằng bạn quan tâm đến game và cộng đồng của mình. Các bản cập nhật với nội dung mới (vật phẩm, bản đồ, tính năng) sẽ giữ cho game luôn mới mẻ và khiến người chơi quay trở lại.',
      },
      {
        question: 'Tôi nên đặt game của mình ở chế độ "Public" hay "Private"?',
        answer:
          'Khi bạn đang trong quá trình phát triển và thử nghiệm, bạn nên đặt game ở chế độ "Private". Khi bạn đã sẵn sàng để mọi người chơi, hãy chuyển nó sang "Public".',
      },
      {
        question: 'Robux kiếm được từ game có thể đổi ra tiền thật ngay lập tức không?',
        answer:
          'Không. Bạn cần phải đáp ứng các yêu cầu của chương trình Developer Exchange (DevEx), bao gồm việc là thành viên Premium, đủ 13 tuổi, và có một lượng Robux kiếm được tối thiểu (hiện tại là 30,000 Robux) để có thể yêu cầu quy đổi.',
      },
    ],
  },
];

export const robloxGameDevModuleData: ModuleData = {
  id: 'roblox-game-dev',
  title: 'Phát triển Game với Roblox',
  subtitle: 'Từ ý tưởng đến thế giới 3D tương tác',
  description:
    'Khóa học này sẽ dẫn dắt bạn qua toàn bộ quá trình tạo ra một Interactive Practice trên nền tảng Roblox. Bạn sẽ học cách sử dụng Roblox Studio, một công cụ mạnh mẽ để xây dựng thế giới 3D, và làm quen với Lua, ngôn ngữ lập trình giúp bạn thổi hồn vào các vật thể và tạo ra những trải nghiệm tương tác độc đáo. Đây là bước khởi đầu hoàn hảo cho những ai đam mê sáng tạo và muốn trở thành một nhà phát triển game.',
  level: 'Cơ bản',
  duration: '8-10 giờ',
  category: 'Creative Technology',
  features: [
    'Hướng dẫn trực quan với Roblox Studio.',
    'Lập trình game với ngôn ngữ Lua dễ tiếp cận.',
    'Xây dựng các kịch bản game từ đơn giản đến phức tạp.',
    'Học cách xuất bản và chia sẻ game với cộng đồng hàng triệu người chơi.',
  ],
  icon: '🎮',
  color: 'from-red-500 to-rose-500',
  heroImageUrl: 'https://images.unsplash.com/photo-1611996573833-5c8a5b39b8a1?w=1200&h=600&fit=crop',
  objectives: [
    'Sử dụng thành thạo các công cụ trong Roblox Studio để xây dựng và thiết kế.',
    'Viết mã Lua để tạo ra các cơ chế và tương tác trong game.',
    'Hiểu các nguyên tắc cơ bản của thiết kế game.',
    'Xuất bản thành công một game hoàn chỉnh lên nền tảng Roblox.',
  ],
  prerequisites: [
    'Kỹ năng sử dụng máy tính cơ bản.',
    'Tư duy sáng tạo và logic.',
    'Không yêu cầu kinh nghiệm lập trình trước đó.',
  ],
  careerOutcomes: [
    'Nhà phát triển game Roblox',
    'Nhà thiết kế cấp độ (Level Designer)',
    'Lập trình viên Lua',
    'Người sáng tạo nội dung game',
  ],
  industryApplications: [
    'Giải trí và Interactive Practice điện tử',
    'Giáo dục (tạo ra các bài học tương tác)',
    'Mô phỏng và Huấn luyện',
    'Marketing và Sự kiện ảo',
  ],
  marketDemand: {
    averageSalary: 'Thỏa thuận (dựa trên doanh thu game)',
    jobGrowth: '+30%',
    hireDemand: 'Rất cao',
  },
  relatedModules: ['game-development', 'python', 'ai-art-creative-tech'],
};
