---
title: 'Hướng Dẫn Lập Trình Scratch: Sáng Tạo Game và Hoạt Hình Đầu Tiên'
description: 'Học lập trình một cách vui nhộn và trực quan với Scratch. Hướng dẫn chi tiết từ K2AiHub giúp bạn tạo ra trò chơi và phim hoạt hình của riêng mình bằng cách kéo-thả các khối lệnh.'
date: '2025-09-26'
author: 'K2AiHub Edu Team'
category: 'Hướng Dẫn'
tags: ['Scratch', 'lập trình cho trẻ em', 'lập trình trực quan', 'phát triển game', 'hướng dẫn', 'K2AiHub']
featured: true
readingTime: '15 phút đọc'
---

## Giới Thiệu: Lập Trình Dễ Như Chơi Lego?

Bạn có nghĩ rằng lập trình là một thứ gì đó khô khan, phức tạp và chỉ dành cho các chuyên gia máy tính? Hãy nghĩ lại! Với Scratch, một ngôn ngữ lập trình do Viện Công nghệ Massachusetts (MIT) phát triển, việc tạo ra một trò chơi hay một đoạn phim hoạt hình trở nên dễ dàng và vui nhộn như chơi Lego.

Scratch sử dụng các khối lệnh có màu sắc, bạn chỉ cần kéo và thả chúng lại với nhau để tạo ra một chương trình. Đây là cách tuyệt vời để trẻ em (và cả người lớn!) tiếp cận với tư duy lập trình một cách tự nhiên và sáng tạo. Bài viết này của **K2AiHub** sẽ hướng dẫn bạn những bước đầu tiên để trở thành một "Scratcher".

## Bước 1: Bắt Đầu Với Scratch

1.  **Truy cập Scratch:** Mở trình duyệt web và truy cập vào địa chỉ [scratch.mit.edu](https://scratch.mit.edu).
2.  **Tạo tài khoản:** Nhấn vào "Join Scratch" để tạo một tài khoản miễn phí. Việc này sẽ giúp bạn lưu và chia sẻ các dự án của mình.
3.  **Khám phá giao diện:** Sau khi đăng nhập, nhấn vào "Create" ở góc trên bên trái. Bạn sẽ được đưa đến trình soạn thảo của Scratch.
    - **Sân khấu (Stage):** Nằm ở góc trên bên phải, đây là nơi sản phẩm của bạn (game, hoạt hình) sẽ diễn ra. Chú mèo mặc định là nhân vật đầu tiên của bạn.
    - **Nhân vật (Sprite):** Là các đối tượng trên sân khấu. Bạn có thể thay đổi, vẽ mới hoặc tải lên các nhân vật của riêng mình.
    - **Khu vực khối lệnh (Blocks Palette):** Nằm ở bên trái, chứa tất cả các khối lệnh được phân loại theo chức năng (Chuyển động, Hiển thị, Âm thanh, Sự kiện...).
    - **Khu vực lập trình (Code Area):** Nằm ở giữa, đây là nơi bạn sẽ kéo các khối lệnh vào để "viết" chương trình.

## Bước 2: Dự Án Đầu Tiên - Khiến Chú Mèo Nhảy Múa

Hãy bắt đầu bằng một chương trình đơn giản để làm quen.

1.  **Bắt đầu sự kiện:** Từ mục `Events` (Sự kiện), kéo khối `when green flag clicked` (khi cờ xanh được nhấn) vào khu vực lập trình. Đây là khối lệnh khởi đầu cho hầu hết các chương trình.
2.  **Tạo chuyển động lặp lại:**
    - Từ mục `Control` (Điều khiển), kéo khối `forever` (mãi mãi) và gắn nó vào dưới khối cờ xanh. Mọi thứ bên trong khối này sẽ được lặp lại liên tục.
    - Từ mục `Motion` (Chuyển động), kéo khối `move 10 steps` (di chuyển 10 bước) vào bên trong khối `forever`.
    - Vẫn từ mục `Motion`, kéo khối `if on edge, bounce` (nếu chạm cạnh, bật lại) vào bên trong khối `forever`, ngay dưới khối `move`.
3.  **Thêm hoạt ảnh:**
    - Từ mục `Looks` (Hiển thị), kéo khối `next costume` (trang phục kế tiếp) vào trong khối `forever`. Chú mèo mặc định có 2 "trang phục" (costume) mô phỏng dáng đi.
    - Từ mục `Control`, kéo khối `wait 0.1 seconds` (đợi 0.1 giây) vào trong khối `forever` để làm chuyển động chậm lại, trông tự nhiên hơn.

Bây giờ, hãy nhấn vào lá cờ xanh phía trên sân khấu. Chú mèo của bạn sẽ bắt đầu đi qua lại không ngừng!

## Bước 3: Sáng Tạo Một Trò Chơi Đơn Giản - "Đuổi Bắt Táo"

Bây giờ, hãy áp dụng những gì đã học để tạo một trò chơi nhỏ.

**Ý tưởng:** Người chơi sẽ dùng chuột để điều khiển chú mèo bắt những quả táo rơi từ trên trời xuống.

### 1. Thiết Lập Sân Khấu và Nhân Vật

- **Xóa chú mèo:** Nhấn vào biểu tượng thùng rác ở nhân vật mèo để xóa nó.
- **Thêm nhân vật mới:**
    - Nhấn vào nút "Choose a Sprite" (biểu tượng mặt mèo) ở góc dưới bên phải.
    - Chọn một nhân vật bạn thích (ví dụ: "Bowl" - cái bát).
    - Chọn thêm một nhân vật nữa là "Apple" (quả táo).
- **Thêm phông nền:** Nhấn vào nút "Choose a Backdrop" và chọn một phông nền (ví dụ: "Blue Sky").

### 2. Lập Trình Cho Cái Bát (Người Chơi)

- Chọn nhân vật "Bowl".
- Kéo các khối lệnh sau vào khu vực lập trình:
    - `when green flag clicked`
    - `forever`
        - `go to mouse-pointer` (đi tới con trỏ chuột) - nằm trong mục `Motion`.
        - *Tuy nhiên, chúng ta chỉ muốn cái bát di chuyển theo chiều ngang.*
        - Thay khối `go to` bằng khối `set x to (mouse x)`. Khối `mouse x` (tọa độ x của chuột) nằm trong mục `Sensing` (Cảm biến).

### 3. Lập Trình Cho Quả Táo (Vật Phẩm)

- Chọn nhân vật "Apple".
- **Làm quả táo rơi xuống:**
    - `when green flag clicked`
    - `forever`
        - `go to random position` (đi tới vị trí ngẫu nhiên) - để quả táo xuất hiện ở một nơi bất kỳ trên cùng.
        - `set y to 180` (đặt y = 180) - 180 là tọa độ trên cùng của sân khấu.
        - `repeat until (touching Bowl? or y position < -170)` (lặp lại cho đến khi chạm vào cái bát hoặc đi xuống dưới đáy màn hình). Khối `touching ...?` và `y position` nằm trong mục `Sensing`.
            - `change y by -5` (thay đổi y một lượng -5) - làm quả táo rơi xuống.
- **Xử lý khi bắt được táo:**
    - Sau khối `forever`, thêm một khối `if (touching Bowl?) then`.
    - Bên trong khối `if`, thêm âm thanh "pop" (từ mục `Sound`) và tăng điểm số.

### 4. Tạo Biến Điểm Số

- Từ mục `Variables` (Biến số), nhấn "Make a Variable" và đặt tên là "Score".
- Khi bắt đầu game (cờ xanh được nhấn), dùng khối `set Score to 0`.
- Khi bắt được táo, dùng khối `change Score by 1`.

## Kết Luận

Chỉ với vài bước kéo-thả, bạn đã tạo ra được một trò chơi tương tác của riêng mình! Scratch là một sân chơi tuyệt vời để bạn thử nghiệm các ý tưởng, học cách suy nghĩ logic và giải quyết vấn đề - những kỹ năng cốt lõi của lập trình.

Từ đây, bạn có thể:
- Thêm nhiều loại trái cây khác nhau.
- Thêm "bom" rơi xuống, nếu bắt phải sẽ bị trừ điểm.
- Thêm màn hình kết thúc khi hết thời gian.

Hãy tiếp tục khám phá và đừng ngại thử nghiệm. Để có thêm nhiều ý tưởng và dự án nâng cao, hãy tham gia khóa học **[Scratch Programming](/learning/scratch)** tại **K2AiHub**. Chúc bạn có những giờ phút sáng tạo vui vẻ!
