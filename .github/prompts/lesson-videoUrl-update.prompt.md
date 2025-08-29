---
mode: agent
---

Mục đích

- Tự động cập nhật trường videoUrl và (tuỳ chọn) imageUrl cho các bài học trong các file TypeScript nằm trong thư mục src/data dựa trên một mảng đối tượng đầu vào.

Đầu vào (một mảng JSON)
Mỗi phần tử là object có tối thiểu:

- filePath: đường dẫn tương đối tới file (ví dụ: "src/data/agritech-precision-farming.ts")
- lessonId: id của bài học cần tìm (ví dụ: "agricultural-robotics")
- videoUrl: URL YouTube mới muốn cập nhật
- status: "updated" | khác (nếu không có -> mặc định "updated")
- optional: videoDetails: { thumbnail: string } (nếu có thì cập nhật imageUrl)

Quy tắc xử lý

1. Chỉ xử lý các mục có status === "updated" hoặc không có field status.
2. Mở file tại filePath; file giả định export một mảng bài học (TypeScript).
3. Tìm bài học có lesson.id === lessonId.
   - Nếu không tìm thấy -> báo "skipped" (không thay đổi file).
4. Nếu bài học có trường videoUrl:
   - Thay giá trị videoUrl bằng videoUrl nếu có, ngược lại dùng suggestedVideoUrl.
   - Nếu videoUrl là YouTube, bạn có thể chuẩn hoá thành dạng https://www.youtube.com/watch?v=VIDEO_ID (không bắt buộc nhưng khuyến nghị).
5. Nếu bài học có trường duration:

- Thay giá trị duration bằng duration nếu có

6. Nếu input có videoDetails.thumbnail:
   - Cập nhật trường imageUrl của bài học bằng giá trị videoDetails.thumbnail nếu trường tồn tại.
7. Chỉ thay đổi các giá trị của thuộc tính videoUrl và imageUrl trong đối tượng bài học; không thay đổi phần khác của file.
8. Sau cập nhật, giữ nguyên định dạng TypeScript; đảm bảo không phá vỡ cú pháp.

Regex gợi ý để trích videoId (nếu cần):

- /[?&]v=([A-Za-z0-9_-]{11})/
- /youtu\.be\/([A-Za-z0-9_-]{11})/

Ví dụ hành động (mô tả)

- Mở src/data/agritech-precision-farming.ts
- Tìm lesson.id === "agricultural-robotics"
- Nếu tìm thấy và status là "updated": thay lesson.videoUrl = "https://www.youtube.com/watch?v=NEW_ID"
- Nếu có videoDetails.thumbnail: lesson.imageUrl = "https://...thumbnail.jpg"

Kết quả mong muốn

- Các file TypeScript được cập nhật đúng trường videoUrl và imageUrl
- Nếu không tìm thấy lessonId -> trả status "skipped" với message rõ lý do (logging/output của agent)
- Tránh thay đổi các dòng khác ngoài các trường nêu trên

Ghi chú triển khai cho developer/agent

- Giữ nguyên định dạng file TypeScript; chỉ sửa giá trị trong đối tượng.
- Nếu không tìm thấy lessonId trong file specified -> skip và ghi message.
- Nên kiểm tra nhanh TypeScript: npx tsc --noEmit sau khi thực hiện (nếu môi trường hỗ trợ).
- Tránh chèn hay xoá nhiều dòng; chỉ chỉnh giá trị chuỗi của videoUrl/imageUrl.
