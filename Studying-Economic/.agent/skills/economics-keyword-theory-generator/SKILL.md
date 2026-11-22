---
name: economics-keyword-theory-generator
description: "Triggers when the user provides economics keywords, a syllabus, or a curriculum covering microeconomics, macroeconomics, econometrics, finance, international economics, development, public policy, or business economics and requests Markdown documentation. Produces short, clear notes for each keyword using a simple 6-question template, organized as Parent -> Subfolder -> Markdown files, with practical examples, formulas only when needed, key data caveats, and Vietnam context."
---

# Economics Keyword Generator

Skill này tạo tài liệu **Kinh tế học** ngắn gọn, dễ hiểu. Mỗi keyword là một "gói kiến thức" nhỏ: hiểu định nghĩa, nắm cơ chế, biết ví dụ và dùng được.

## 1. Nguyên tắc chính

- **Ngắn gọn:** mỗi keyword khoảng 200–400 từ, tối đa 1 trang.
- **Dễ hiểu:** câu ngắn, gạch đầu dòng; giải thích thuật ngữ ngay khi dùng.
- **Có ví dụ:** ít nhất 1 ví dụ số và 1 ví dụ Việt Nam hoặc quốc tế.
- **Trung thực:** không bịa số liệu; số tự đặt phải ghi rõ "số liệu minh họa".
- **Không lan man:** bỏ lịch sử dài, bảng lớn, mô hình phức tạp nếu không cần.
- **Đủ keyword:** không bỏ sót; keyword trùng thì gộp lại và ghi chú.

## 2. Cấu trúc của mỗi keyword

Mỗi keyword trả lời 6 câu hỏi theo đúng thứ tự sau:

### [Tên keyword] ([English term])

**1. Là gì?**
- 2–3 câu: định nghĩa hình thức + cách nói thường.
- Thêm một câu "Nếu chỉ nhớ một điều..."

**2. Hoạt động thế nào?**
- Ai quyết định? Họ tối ưu hóa gì? Chịu ràng buộc nào?
- Động cơ, giá cả, cung–cầu, thể chế.
- Cân bằng hình thành ra sao? Nếu giả định thay đổi thì kết quả đổi thế nào?

**3. Công thức & mô hình (nếu cần)**
- Công thức KaTeX, giải thích từng ký hiệu.
- Đồ thị: trục, độ dốc, điểm cân bằng, dấu hiệu dịch chuyển.
- Chỉ số đo lường: công thức, đơn vị, tần suất.
- Keyword không cần mô hình thì bỏ phần này và ghi một dòng lý do.

**4. Ví dụ**
- 1 ví dụ số: giả định rõ, tính từng bước, ghi đơn vị.
- 1 case Việt Nam hoặc quốc tế: bối cảnh, năm, nguồn.
- 1 counterfactual ngắn: đổi điều kiện thì kết quả đổi thế nào?

**5. Ứng dụng & tranh luận**
- Dùng ở đâu: chính sách, doanh nghiệp, tài chính, lao động, thương mại...
- Ưu/nhược điểm và trade-off chính.
- Rủi ro, lỗi thường gặp, quan điểm trái chiều (nếu có).

**6. Liên kết**
- 3–5 keyword liên quan, có cross-link.
- Keyword nào nên đọc trước, keyword nào là phần mở rộng.

> Nếu người dùng chỉ muốn hiểu nhanh, trả lời theo 6 phần trong chat, không cần tạo file. Có thể rút gọn phần 3 và 6 nhưng phải có định nghĩa, cơ chế, ví dụ và lỗi thường gặp.

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

Các nhóm chuyên đề gợi ý: **Microeconomics, Macroeconomics, Econometrics & Data, Finance, International Economics, Public & Development Economics, Industrial Organization & Business, Economic History & Schools of Thought, Applied Economics & Vietnam**.

Ví dụ cây thư mục:

```text
Studying-Economic/
├── SKILL.md
├── 01_Economics_Foundations/
│   └── 01_Introduction_to_Economics/
│       ├── 01_Definition_Scarcity_and_Choice.md
│       └── 02_Choice_Tradeoffs_and_Opportunity_Cost.md
├── 02_Macroeconomics/
│   └── 01_GDP_and_Inflation/
│       └── 01_GDP_Growth_and_Price_Indices.md
└── 03_Applied_Economics/
    └── 01_Vietnam_Economy/
        └── 01_Doi_Moi_and_Export_Led_Growth.md
```

## 4. Quy tắc nội dung quan trọng

- **Số liệu:** ghi nguồn + năm + đơn vị; ưu tiên GSO, SBV, Bộ Tài chính, IMF, World Bank, ADB, FRED, OECD.
- **Phân biệt rõ:** positive/normative, micro/macro, ngắn hạn/dài hạn, nominal/real, stock/flow, cầu vs lượng cầu, tương quan vs nhân quả.
- **Mô hình:** nêu giả định, biến nội sinh/ngoại sinh, ceteris paribus; không kết luận chính sách khi bỏ qua giả định.
- **Tranh luận:** nêu quan điểm chính thống trước, phê bình sau; không "cân bằng giả" giữa quan điểm có bằng chứng mạnh và quan điểm yếu.
- **Việt Nam:** nêu bối cảnh, chính sách và đặc thù (kinh tế ngầm, hộ gia đình, DNNN, hội nhập...) khi liên quan.

## 5. Quy trình làm việc

1. **Nhóm keyword:** đọc danh sách, phân vào chuyên đề, đề xuất cây thư mục ngắn gọn.
2. **Xác nhận:** nếu danh sách dài hoặc cấu trúc chưa rõ, hỏi 2–3 câu ngắn (phạm vi, ưu tiên Việt Nam/quốc tế, chia đợt). Nếu người dùng đã nói "làm luôn", bắt đầu ngay.
3. **Viết:** tạo file theo mẫu; mỗi keyword đủ 6 phần, mỗi phần 2–5 dòng.
4. **Kiểm tra:** đủ keyword, đúng cấu trúc, có ví dụ, số liệu có nguồn hoặc ghi rõ minh họa.
5. **Báo cáo:** bảng ngắn `Keyword → File → Trạng thái`, ghi chú keyword đã gộp/tách và điểm cần lưu ý.

## 6. Checklist trước khi bàn giao

- [ ] Đủ 100% keyword trong danh sách.
- [ ] Mỗi keyword có đủ 6 phần: Là gì → Hoạt động → Công thức (nếu cần) → Ví dụ → Ứng dụng → Liên kết.
- [ ] Mỗi phần chỉ 2–5 dòng, câu ngắn, dễ hiểu.
- [ ] Có ít nhất 1 ví dụ số và 1 case thực tế cho mỗi keyword.
- [ ] Công thức KaTeX đúng, ký hiệu được giải thích.
- [ ] Số liệu có nguồn, năm, đơn vị; số minh họa được ghi rõ.
- [ ] Phân biệt đúng các cặp dễ nhầm khi liên quan.
- [ ] Có cross-link giữa các keyword.
- [ ] Không có định nghĩa kiểu từ điển 1–2 dòng.
- [ ] Không bịa số liệu, không trích nguồn không kiểm chứng.

## 7. Ví dụ ngắn

### Chi phí cơ hội (Opportunity Cost)

**1. Là gì?**
Chi phí cơ hội là giá trị của phương án tốt nhất bị bỏ qua khi đưa ra một lựa chọn. Nó gồm chi phí hiện (explicit) và chi phí ẩn (implicit). Nếu chỉ nhớ một điều: chi phí thật của một lựa chọn là thứ tốt nhất bạn phải từ bỏ, không phải số tiền đã trả.

**2. Hoạt động thế nào?**
- Cá nhân/doanh nghiệp có nguồn lực hữu hạn, phải chọn giữa các phương án.
- Họ so sánh lợi ích ròng của phương án được chọn với phương án thay thế tốt nhất.
- Khi thu nhập, giá, thời gian hoặc lãi suất thay đổi, phương án thay thế tốt nhất thay đổi và chi phí cơ hội thay đổi theo.

**3. Công thức**

$$
OC = \text{Explicit Cost} + \text{Implicit Cost}
$$

Trong đó chi phí hiện là tiền thực trả; chi phí ẩn là giá trị nguồn lực tự có hoặc thu nhập bị bỏ qua. Trên đường PPF, độ dốc là chi phí cơ hội biên.

**4. Ví dụ**
- Học đại học 4 năm: học phí 30 triệu/năm; đi làm ngay được 120 triệu/năm (số liệu minh họa).
- Chi phí kế toán = 30 triệu/năm. Chi phí kinh tế = 30 + 120 = 150 triệu/năm.
- Nếu có học bổng toàn phần, chi phí kế toán còn 0 nhưng chi phí cơ hội vẫn là 120 triệu/năm.
- Việt Nam: nhiều lao động trẻ chọn học nghề hoặc đi làm sớm vì chi phí cơ hội của 4 năm học cao.

**5. Ứng dụng & tranh luận**
- Dùng trong đánh giá dự án, phân tích chi phí–lợi ích, quyết định đầu tư, chọn nghề.
- Ưu: tránh bỏ sót chi phí ẩn. Nhược: khó định giá phương án thay thế tốt nhất.
- Lỗi thường gặp: nhầm chi phí kế toán với chi phí kinh tế; tính cả chi phí chìm.

**6. Liên kết**
- [Lựa chọn](#) · [Đánh đổi](#) · [Chi phí chìm](#) · [Lợi thế so sánh](#)

## 8. Tóm tắt một câu

**Nhận keyword → nhóm chuyên đề → viết ngắn theo 6 câu hỏi → kiểm tra ví dụ và số liệu → bàn giao.**
