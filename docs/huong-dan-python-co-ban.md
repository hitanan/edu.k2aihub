---
title: 'Hướng Dẫn Python Cơ Bản Cho Người Mới Bắt Đầu'
description: 'Lộ trình học Python từ con số 0: cài đặt, cú pháp cơ bản, xử lý dữ liệu, và các ví dụ thực tế.'
date: '2025-09-20'
author: 'K2AiHub Programming Team'
category: 'Hướng Dẫn'
tags: ['Python', 'Lập Trình', 'Data Science', 'AI', 'K2AiHub']
featured: false
readingTime: '14 phút đọc'
---

# Hướng Dẫn Python Cơ Bản Cho Người Mới Bắt Đầu

Python là ngôn ngữ lập trình phổ biến, dễ học và mạnh mẽ. Bài hướng dẫn này giúp bạn bắt đầu nhanh, đúng trọng tâm và có thực hành.

## Cài đặt Python và IDE

- Tải Python từ python.org (Windows chọn Add to PATH).
- IDE gợi ý: VS Code + Python extension.
- Tạo môi trường ảo: `python -m venv .venv` → kích hoạt và cài thư viện.

## Cú pháp cơ bản bạn cần nắm

- Biến, kiểu dữ liệu (int, float, str, list, dict)
- Cấu trúc điều khiển: if/elif/else, for, while
- Hàm và module: def, import
- Xử lý lỗi: try/except

## Thực hành nhanh

```python
# Tính điểm trung bình
scores = [8.0, 7.5, 9.0]
avg = sum(scores) / len(scores)
print(f"Điểm TB: {avg:.2f}")
```

## Làm việc với dữ liệu (Pandas)

```python
import pandas as pd

df = pd.DataFrame({"mon": ["Toán", "Lý", "Hóa"], "diem": [8.5, 7.8, 9.2]})
print(df.describe())
```

## Gợi ý lộ trình 30 ngày

- Tuần 1: Cú pháp cơ bản + 10 bài tập nhỏ
- Tuần 2: File, JSON, requests API
- Tuần 3: Pandas + trực quan hóa
- Tuần 4: Mini project (phân tích dữ liệu điểm thi, web scraping nhẹ)

## Học tiếp gì?

- [Module Python](/python)
- [STEM - Coding for Kids](/learning/stem)
- [AI Của Tôi](/ai)
