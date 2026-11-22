---
name: life-skill-keyword-theory-generator
description: "Triggers when the user provides a list of life-skill keywords (kỹ năng sống), a syllabus, or a curriculum covering self-management, communication, relationships, health, household living, safety, career, learning, finance, civic, or family life and requests Markdown documentation. Produces short, simple, easy-to-understand notes for each keyword using a 6-question template, organized as Parent -> Subfolder -> Markdown files, with basic safety notes and Vietnam context."
---

# Life Skill Keyword Generator

Skill này tạo tài liệu **Kỹ năng sống** ngắn gọn, dễ hiểu. Mỗi keyword là một "gói thực hành" nhỏ: đọc nhanh, hiểu ngay, làm được.

## 1. Nguyên tắc chính

- **Ngắn gọn:** mỗi keyword khoảng 200–300 từ, tối đa 1 trang.
- **Dễ hiểu:** câu ngắn, gạch đầu dòng, ví dụ đời thường; giải thích thuật ngữ ngay khi dùng.
- **Thực hành được:** luôn có các bước làm cụ thể và ít nhất một ví dụ.
- **Không lan man:** bỏ qua lịch sử, lý thuyết hàn lâm, bảng biểu dài và sơ đồ phức tạp nếu không cần.
- **An toàn:** kỹ năng nguy hiểm phải có cảnh báo, dụng cụ bảo hộ, điều kiện dừng và số khẩn cấp.
- **Trung thực:** không bịa số liệu, giá cả, đường dây nóng hoặc quy định pháp luật.
- **Đủ keyword:** không bỏ sót; keyword trùng thì gộp lại và ghi chú.

## 2. Cấu trúc của mỗi keyword

Mỗi keyword trả lời 6 câu hỏi đơn giản theo đúng thứ tự sau:

### [Tên keyword] ([English term])

**1. Là gì?**
- 2–3 câu: định nghĩa bằng lời thường + vì sao quan trọng.
- Có thể thêm một câu "Nếu chỉ nhớ một điều..." nếu hữu ích.

**2. Cần chuẩn bị gì?**
- 3–5 gạch đầu dòng: dụng cụ, thời gian, không gian, kiến thức tối thiểu.
- Ghi rõ phương án miễn phí hoặc tiết kiệm nếu có.
- Với kỹ năng mềm: giấy bút, mẫu câu, người luyện cùng.

**3. Làm thế nào?**
- 3–7 bước đánh số, mỗi bước một hành động rõ ràng.
- Thêm "khi nào dừng / kiểm tra an toàn" ở bước có rủi ro.
- Kết thúc bằng 1–3 dòng checklist nếu cần.

**4. Sai lầm thường gặp**
- 3–5 dòng theo dạng: **Lỗi** → cách sửa.
- Nêu 1–2 điều tuyệt đối không làm (nếu có).

**5. Áp dụng thực tế**
- 1–2 tình huống ngắn: gia đình, trường học, nơi làm việc, cộng đồng.
- 1 câu luyện tập cụ thể có thể làm ngay hôm nay.
- Dùng bối cảnh gần gũi Việt Nam khi phù hợp (nhà trọ, chung cư, xe máy, chợ, mùa mưa...).

**6. Khi có sự cố**
- 2–3 gạch đầu dòng: dấu hiệu → việc làm ngay → khi nào cần nhờ chuyên gia.
- Kỹ năng nguy hiểm: ghi số **113** (công an), **114** (cứu hỏa/cứu nạn), **115** (cấp cứu).
- Trẻ em cần bảo vệ khẩn cấp: gọi **111**.

> Không cần bảng biểu, Mermaid hay kế hoạch 7 ngày nếu người dùng không yêu cầu. Ưu tiên nội dung ngắn, dễ đọc.

## 3. Tổ chức file và thư mục

- Cấu trúc: **Folder cha (module) → Folder con (chuyên đề) → File Markdown**.
- Mỗi file chứa **3–6 keyword** cùng chủ đề; không gom hàng chục keyword vào một file.
- Tên folder và file dùng tiếng Anh, không dấu, có số thứ tự.
- Mỗi file gồm:
  - Tiêu đề chuyên đề.
  - 1–2 câu giới thiệu.
  - Các keyword theo mẫu 6 phần.
  - 3–5 câu hỏi tự kiểm tra ở cuối (nếu phù hợp).
- Không cần tạo README cho từng module.

Các nhóm chuyên đề gợi ý: Tự quản lý, Giao tiếp, Cảm xúc, Sức khỏe, Việc nhà, An toàn, Nghề nghiệp, Học tập, Pháp lý – tài chính, Gia đình – cộng đồng.

Ví dụ cây thư mục:

```text
Studying-Life-Skill/
├── SKILL.md
├── 01_Self_Management/
│   ├── 01_Time_Management/
│   │   └── 01_Time_Blocking_and_Priorities.md
│   └── 02_Habits/
│       └── 01_Building_Good_Habits.md
├── 02_Communication/
│   └── 01_Listening/
│       └── 01_Active_Listening.md
└── 03_Health/
    └── 01_First_Aid/
        └── 01_Minor_Cuts_and_Burns.md
```

## 4. Quy trình làm việc

1. **Nhóm keyword:** đọc danh sách, phân vào chuyên đề và đề xuất cây thư mục ngắn gọn.
2. **Xác nhận:** nếu danh sách dài hoặc cấu trúc chưa rõ, hỏi người dùng 2–3 câu ngắn (đối tượng, bối cảnh, có cần chia đợt không). Nếu người dùng đã nói "làm luôn", bắt đầu ngay.
3. **Viết:** tạo file theo mẫu; mỗi keyword đủ 6 phần nhưng mỗi phần chỉ 2–5 dòng.
4. **Kiểm tra:** đủ keyword, đúng cấu trúc, có ví dụ và có cảnh báo an toàn.
5. **Báo cáo:** bảng ngắn `Keyword → File → Trạng thái`, ghi chú keyword đã gộp/tách và các cảnh báo cần lưu ý.

Nếu người dùng chỉ muốn hiểu keyword, trả lời trực tiếp theo 6 phần trong chat, không cần tạo file.

## 5. Lưu ý an toàn

- Kỹ năng rủi ro cao (sơ cứu, điện, gas, lửa, nước, độ cao, tự vệ, lái xe, hóa chất): nêu dụng cụ bảo hộ, người có chuyên môn, điều kiện dừng và số khẩn cấp.
- Không chẩn đoán bệnh, kê đơn hoặc đưa lời khuyên pháp lý/tài chính như thể chắc chắn đúng.
- Sức khỏe tâm thần: không trị liệu; nếu có nguy cơ tự hại, hướng dẫn gọi **115** hoặc đến cơ sở y tế gần nhất; trẻ em gọi **111**.
- Tự vệ: ưu tiên phòng tránh và thoát hiểm; không dạy đòn gây thương tích nghiêm trọng.
- Không đổ lỗi nạn nhân, không áp đặt lối sống; tôn trọng văn hóa, giới, khuyết tật và hoàn cảnh kinh tế.
- Không hứa "an toàn 100%", "chắc chắn thành công" hay "chữa khỏi".

## 6. Ví dụ ngắn

### Quản lý thời gian (Time Management)

**1. Là gì?**
Quản lý thời gian là chọn đúng việc quan trọng và dành thời gian cho việc đó. Làm tốt giúp giảm trễ hạn và căng thẳng.

**2. Cần chuẩn bị gì?**
- Lịch giấy hoặc lịch trong điện thoại.
- Giấy bút hoặc ứng dụng ghi chú.
- Một nơi duy nhất để ghi mọi việc cần làm.
- 5–10 phút mỗi tối để xem lại ngày mai.

**3. Làm thế nào?**
1. Ghi mọi việc cần làm vào một danh sách.
2. Chọn 1–3 việc quan trọng nhất trong ngày.
3. Đặt giờ cụ thể cho từng việc trên lịch.
4. Làm từng việc một, tắt thông báo.
5. Cuối ngày dành 5 phút xem việc nào xong, việc nào dời.

**4. Sai lầm thường gặp**
- Ôm quá nhiều việc → chọn 1–3 việc chính mỗi ngày.
- Không để thời gian dự phòng → chừa 20–30% thời gian.
- Vừa làm vừa lướt điện thoại → tắt thông báo, làm theo khối 25–45 phút.
- Lập kế hoạch nhưng không xem lại → review cuối ngày.

**5. Áp dụng thực tế**
- Sinh viên mùa thi: chọn 3 môn ưu tiên, chia đề cương thành các khối 45 phút.
- Người đi làm: chặn 1–2 khối tập trung mỗi ngày, gom việc nhỏ vào cuối ngày.
- Luyện ngay: tối nay ghi 5 việc, chọn 1 việc quan trọng nhất và đặt giờ làm.

**6. Khi có sự cố**
- Trễ hạn → báo sớm, chọn phần tối thiểu phải xong, xin gia hạn nếu cần.
- Quá tải → dừng lại, bỏ hoặc nhờ người khác làm việc ít quan trọng.
- Mất ngủ hoặc lo âu kéo dài → giảm việc, tìm hỗ trợ; gọi **115** nếu nguy hiểm tức thời.

## 7. Checklist trước khi bàn giao

- [ ] Đủ 100% keyword trong danh sách.
- [ ] Mỗi keyword có đủ 6 phần: Là gì → Cần gì → Làm thế nào → Sai lầm → Áp dụng → Sự cố.
- [ ] Mỗi phần chỉ 2–5 dòng, câu ngắn, dễ hiểu.
- [ ] Có ít nhất 1 ví dụ thực tế cho mỗi keyword.
- [ ] Có cảnh báo an toàn và số khẩn cấp với kỹ năng nguy hiểm.
- [ ] Không có đoạn lý thuyết dài, bảng quá 5 dòng hoặc sơ đồ phức tạp.
- [ ] Không bịa số liệu, giá cả, đường dây nóng.
- [ ] Có báo cáo keyword → file.

## 8. Tóm tắt một câu

**Nhận keyword → nhóm chuyên đề → viết ngắn theo 6 câu hỏi → kiểm tra an toàn → bàn giao.**
