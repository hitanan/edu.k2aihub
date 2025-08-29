---
mode: agent
---

Mục tiêu: Cho mỗi bài học trong mỗi module đầu vào, cầu hãy tìm và đề xuất một YouTube video phù hợp với nội dung bài học (không quan tâm videoUrl cũ).

Yêu cầu thực thi:

1. với mỗi module tìm file data module tương ứng trong trong /src/data và phân tích toàn bộ lessons trong array. Không chỉ lesson đầu tiên mà TẤT CẢ lessons trong module.

**Ví dụ cấu trúc data:**

```typescript
export const renewableEnergyLessons: RenewableEnergyLesson[] = [
  {
    id: 'solar-energy-fundamentals',
    title: 'Solar Energy Systems & Photovoltaic Technology',
    description: 'Khám phá công nghệ năng lượng mặt trời...',
    duration: '180 phút',
    difficulty: 'Cơ bản',
    videoUrl: 'https://www.youtube.com/watch?v=xy9nj94xvKA', // CÓ SẴN - bỏ qua
    objectives: [...],
    prerequisites: [...],
  },
  {
    id: 'wind-power-technology',
    title: 'Wind Power Systems & Turbine Technology',
    description: 'Explore wind energy technology...',
    duration: '200 phút',
    difficulty: 'Trung bình',
    // videoUrl: THIẾU - CẦN TÌM VIDEO
    objectives: [...],
  },
  {
    id: 'energy-storage-systems',
    title: 'Energy Storage & Smart Grid Integration',
    description: 'Master advanced energy storage technologies...',
    duration: '160 phút',
    difficulty: 'Nâng cao',
    videoUrl: 'https://www.youtube.com/watch?v=vd2dtkMINIw', // DEFAULT VIDEO - CẦN THAY THẾ
    objectives: [...],
    prerequisites: [...],
  }
  // ... TẤT CẢ lessons khác trong array
]
```

**Yêu cầu parsing:**

- Parse toàn bộ array lessons, không chỉ lesson đầu tiên
- Xử lý tất cả lessons cần cập nhật videoUrl

  **OUTPUT FORMAT:** Trả về kết quả ở định dạng JSON (một mảng object). Mỗi object gồm:

  ```json
  {
    "filePath": "src/data/renewable-energy.ts",
    "lessonId": "wind-power-technology",
    "lessonTitle": "Wind Power Systems & Turbine Technology",
    "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
    "status": "updated" | "no_match" | "fallback",
    "searchQuery": "Wind Power Systems vietnamese english turbine technology tutorial",
    "duration": 120,
    "videoDetails": {
      "title": "How Wind Turbines Work - The Physics Explained",
      "channel": "TED-Ed",
      "thumbnail": "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
      "publishedAt": "2023-01-15T10:00:00Z",
      "verified": true
    }
  }
  ```

  **COMPREHENSIVE PROCESSING:** Đảm bảo xử lý HẾT TẤT CẢ lessons trong mỗi module:
  - Không dừng lại ở lesson đầu tiên
  - Process toàn bộ array lessons cho mỗi module
  - Log progress để theo dõi: "Processing lesson [X]/[TOTAL] in module [MODULE_NAME]"

3. Thực hiện tìm kiếm YouTube Data API v3 bằng API key lấy từ [.envy](../../.envy) file và lấy giá trị KEY từ dòng đầu tiên (biến KEY: YOUR_API_KEY). Không hardcode key, Nếu KEY hết quota, hãy dùng key ở dòng thứ tiếp theo.
   - Sử dụng endpoint Search: https://www.googleapis.com/youtube/v3/search?part=snippet&q={query}&type=video&key=YOUR_API_KEY
   <!-- 4. Khi có candidate VIDEO_ID, xác thực bằng endpoint Videos:
      https://www.googleapis.com/youtube/v3/videos?part=id&id={VIDEO_ID}&key=YOUR_API_KEY
   - Nếu response trả về pageInfo.totalResults === 0 thì video không hợp lệ → bỏ và thử candidate khác. -->
4. Lựa chọn video ưu tiên theo thứ tự:
   - Video chính thức/giáo dục, phù hợp nội dung bài;
   - Ngôn ngữ tiếng Việt (nếu có);
   - Thời lượng hợp lý (ví dụ < 120 phút) và có mô tả liên quan.
5. Nếu không tìm được video phù hợp, tìm video khác tương tự nhất
6. **RATE LIMITING & LOGGING:**
   - Hạn chế tần suất yêu cầu để tránh bị throttled (1-2 seconds delay between requests)
   - Implement exponential backoff nếu gặp API errors
   - Ghi log chi tiết cho mỗi lesson: "✅ Updated: [lesson.id] with [video.title]" hoặc "⚠️ Fallback: [lesson.id] - no suitable video found"

7. **SAVE RESULTS:** Ghi kết quả vào file `/src/data/lessons-video-update-{timestamp}.json`.
   - Không thay đổi file module trực tiếp trong script này
   - File JSON sẽ được sử dụng bởi script khác để update các module data files
   - Include summary statistics: totalLessonsProcessed, successfullyUpdated, fallbackUsed

**Ví dụ mong muốn đầu ra JSON - TOÀN BỘ LESSONS ĐƯỢC XỬ LÝ:**

```json
[
  {
    "filePath": "src/data/renewable-energy.ts",
    "lessonId": "solar-energy-fundamentals",
    "lessonTitle": "Solar Energy Systems & Photovoltaic Technology",
    "videoUrl": "https://www.youtube.com/watch?v=xy9nj94xvKA",
    "status": "skipped",
    "reason": "lesson already has valid video URL"
  },
  {
    "filePath": "src/data/renewable-energy.ts",
    "lessonId": "wind-power-technology",
    "lessonTitle": "Wind Power Systems & Turbine Technology",
    "videoUrl": "https://www.youtube.com/watch?v=qJom3l7vJWI",
    "status": "updated",
    "duration": 240,
    "videoDetails": {
      "title": "How Wind Turbines Generate Electricity",
      "channel": "TED-Ed",
      "thumbnail": "https://i.ytimg.com/vi/qJom3l7vJWI/hqdefault.jpg"
    }
  },
  {
    "filePath": "src/data/renewable-energy.ts",
    "lessonId": "energy-storage-systems",
    "lessonTitle": "Energy Storage & Smart Grid Integration",
    "videoUrl": "https://www.youtube.com/watch?v=5uz6xOFWi4A",
    "status": "updated",
    "duration": 180,
    "videoDetails": {
      "title": "How Energy Storage Works",
      "channel": "CleanTechnica",
      "thumbnail": "https://i.ytimg.com/vi/5uz6xOFWi4A/hqdefault.jpg"
    }
  }
]
```

12. **POST-PROCESSING:** Sau khi generate hết data cho tất cả các modules, có thể gọi prompt [lesson-videoUrl-update.prompt.md](lesson-videoUrl-update.prompt.md) với đầu vào là file JSON vừa tạo để cập nhật lại dữ liệu cho các file modules

**Lưu ý quan trọng:**

- **XỬ LÝ TẤT CẢ LESSONS:** Script phải duyệt qua toàn bộ array lessons trong mỗi module, không chỉ phần tử đầu tiên
- **COMPREHENSIVE OUTPUT:** JSON kết quả phải bao gồm tất cả lessons (cả skipped và updated)

Lưu ý bảo mật:

- Không in hoặc commit API key vào file. Chỉ đọc key từ file .envy trong runtime.
- Nếu sử dụng cache để giảm gọi API, lưu trữ cache tạm thời trong /tmp hoặc môi trường agent.
