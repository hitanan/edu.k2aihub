---
mode: agent
---

Mục tiêu: Cho mỗi bài học trong thư mục /src/data, nếu trường videoUrl theo yêu cầu (ví dụ đang không có field videoUrl), hãy tìm và đề xuất một YouTube video phù hợp với nội dung bài học.

Yêu cầu thực thi:

1. Đọc tất cả file bài học trong /src/data và tìm các bài có videoUrl theo yêu cầu.
2. Với mỗi bài cần cập nhật, tạo truy vấn tìm kiếm gồm: tiêu đề bài học + các từ khóa liên quan (module name, chủ đề, description) và ưu tiên kết quả bằng tiếng Việt nếu có.
3. Thực hiện tìm kiếm YouTube Data API v3 bằng API key lấy từ [.envy](../../.envy) file và lấy giá trị KEY từ dòng đầu tiên (biến KEY: YOUR_API_KEY). Không hardcode key, Nếu KEY hết quota, hãy dùng key ở dòng thứ tiếp theo.
   - Sử dụng endpoint Search: https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&type=video&key=YOUR_API_KEY
   <!-- 4. Khi có candidate VIDEO_ID, xác thực bằng endpoint Videos:
      https://www.googleapis.com/youtube/v3/videos?part=id&id={VIDEO_ID}&key=YOUR_API_KEY
   - Nếu response trả về pageInfo.totalResults === 0 thì video không hợp lệ → bỏ và thử candidate khác. -->
4. Lựa chọn video ưu tiên theo thứ tự:
   - Video chính thức/giáo dục, phù hợp nội dung bài;
   - Ngôn ngữ tiếng Việt (nếu có);
   - Thời lượng hợp lý (ví dụ < 120 phút) và có mô tả liên quan.
5. Nếu không tìm được video phù hợp, tìm video khác tương tự nhất rồi cập nhật và ghi lý do "no_match".
6. Trả về kết quả ở định dạng JSON (một mảng object). Mỗi object gồm:
   {
   "filePath": "src/data/xxx.ts",
   "lessonId": "lesson-id",
   "originalVideoUrl": "https://www.youtube.com/watch?v=vd2dtkMINIw",
   "newVideoUrl": "https://www.youtube.com/watch?v=VIDEO_ID" | null,
   "videoId": "VIDEO_ID" | null,
   "status": "updated" | "no_match" | "skipped",
   "duration": 120,
   "videoDetails": {
   "title": "Fundamentals of Aerodynamics . Introduction . Pitching Moment",
   "channel": "AeroAcademy",
   "publishedAt": "2020-10-11T03:32:16Z",
   "language": "en",
   "thumbnail": "https://i.ytimg.com/vi/AkC5xAy3WAY/hqdefault.jpg",
   "searchQuery": "Aircraft Design & Aerodynamics Fundamentals học tập tutorial"
   },
   "reason": "brief reason if no_match or skipped"
   }
7. Hạn chế tần suất yêu cầu để tránh bị throttled (backoff/retry tối thiểu).
8. Ghi log ngắn gọn cho mỗi bài (id và status) vào file `/src/lessons-video-{currentdatetime}.json`. Không thay đổi file trực tiếp trong prompt — chỉ xuất JSON kết quả; file cập nhật sẽ do runner/agent khác xử lý.

Ví dụ mong muốn đầu ra (JSON) vào file `/src/lessons-video-202310111010.json`:
[
{
"filePath": "src/data/python.ts",
"lessonId": "python-intro",
"originalVideoUrl": "https://www.youtube.com/watch?v=vd2dtkMINIw",
"newVideoUrl": "https://www.youtube.com/watch?v=abcd1234",
"videoId": "abcd1234",
"status": "updated",
"duration": 120,
"videoDetails": {
"title": "Fundamentals of Aerodynamics . Introduction . Pitching Moment",
"channel": "AeroAcademy",
"publishedAt": "2020-10-11T03:32:16Z",
"language": "en",
"thumbnail": "https://i.ytimg.com/vi/AkC5xAy3WAY/hqdefault.jpg",
"searchQuery": "Aircraft Design & Aerodynamics Fundamentals học tập tutorial"
},
"reason": "matched by title + description (tiếng Việt)"
},
{
"filePath": "src/data/arduino.ts",
"lessonId": "arduino-setup",
"originalVideoUrl": "https://www.youtube.com/watch?v=vd2dtkMINIw",
"newVideoUrl": null,
"videoId": null,
"status": "no_match",
"duration": 20,
"videoDetails": {
"title": "Fundamentals of Aerodynamics . Introduction . Pitching Moment",
"channel": "AeroAcademy",
"publishedAt": "2020-10-11T03:32:16Z",
"language": "en",
"thumbnail": "https://i.ytimg.com/vi/AkC5xAy3WAY/hqdefault.jpg",
"searchQuery": "Aircraft Design & Aerodynamics Fundamentals học tập tutorial"
}
"reason": "no suitable Vietnamese/educational video found"
}
]

Lưu ý bảo mật:

- Không in hoặc commit API key. Chỉ đọc key từ file .envy trong runtime.
- Nếu sử dụng cache để giảm gọi API, lưu trữ cache tạm thời trong /tmp hoặc môi trường agent.
