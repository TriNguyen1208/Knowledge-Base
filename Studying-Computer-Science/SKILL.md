---
name: cs-keyword-theory-generator
description: "Triggers when the user provides a list of computer science, programming, software engineering, or backend keywords / curriculum syllabus and requests to generate or overhaul theoretical documentation in Markdown. Enforces confirmation first, mandatory [!IMPORTANT] single-takeaway header callout, hierarchical folder structuring, intuitive-yet-deep pedagogical standard (Section 1: Simple yet detailed with code leading, analogies, toy walkthroughs, systems impact), default uncolored Mermaid diagrams, dual-engine code (C++20 & TypeScript/Python), hardcore systems depth (CPU/RAM/Cache/OS), decision matrices, enterprise checklists, and VitePress/MathJax build safety."
---

# Computer Science Keyword Theory Generator & Documentation Skill

Skill này quy định quy trình chuẩn mực, cấu trúc sư phạm và các quy tắc kỹ thuật khắt khe dành cho Agent mỗi khi biên soạn, tái cấu trúc hoặc nâng cấp tài liệu lý thuyết Khoa học Máy tính, Kỹ thuật Phần mềm và Backend Systems trong toàn bộ dự án.

---

## 🎯 NGUYÊN TẮC CỐT LÕI (CORE DIRECTIVES)

### 1. XÁC NHẬN KẾ HOẠCH TRƯỚC KHI THỰC HIỆN (PRE-FLIGHT CONFIRMATION BẮT BUỘC)
- Khi nhận được danh sách keyword hoặc yêu cầu nâng cấp chuyên đề/thư mục, **tuyệt đối không được vội vàng tạo/sửa file ngay lập tức**.
- Agent phải phân tích phạm vi, đề xuất cấu trúc cây thư mục (Folder Tree), xác nhận danh sách file cần tạo/cập nhật, trình bày kế hoạch tóm tắt và **chờ sự đồng ý rõ ràng từ người dùng** trước khi tiến hành thực thi hàng loạt.

### 2. TRIẾT LÝ SƯ PHẠM: "ĐƠN GIẢN NHƯNG PHẢI CHI TIẾT" (INTUITIVE YET DEEP)
- **Không mở đầu bằng các định nghĩa trừu tượng khô khan**: Mở đầu mỗi bài học luôn phải là góc nhìn trực quan, dễ hiểu nhất của một kỹ sư thực chiến (Dẫn nhập code thực tế, hình tượng hóa bằng đời sống, mô phỏng tracing từng bước với tập dữ liệu số nhỏ).
- **Không dừng lại ở bề nổi (No Fluff / Hardcore Internals)**: Sau phần trực quan hóa, toàn bộ nội dung tiếp theo phải khoan sâu không khoan nhượng xuống tận tầng vi kiến trúc phần cứng (CPU Register, ALU, L1/L2/L3 Cache Line 64B, RAM, Memory Alignment, MMU, Paging, Kernel Syscalls, Compiler AST/JIT).

### 3. BẮT BUỘC CÓ KHỐI ALERT `> [!IMPORTANT]` Ở ĐẦU MỖI FILE (SINGLE-TAKEAWAY CALLOUT)
- Ngay sau tiêu đề chính `# [Số thứ tự]. [Tên Chủ Đề] ([Tên Tiếng Việt])`, **BẮT BUỘC PHẢI CÓ** khối alert GitHub Markdown:
  ```markdown
  # [Số thứ tự]. [Tên Chủ Đề] ([Tên Tiếng Việt])

  > [!IMPORTANT]
  > **Nếu bạn chỉ được nhớ một điều duy nhất:** [1-2 câu sâu sắc, cô đọng bản chất kỹ thuật cốt lõi/vật lý hạt nhân/hệ thống của chủ đề, giúp lập trình viên giác ngộ ngay trong 30 giây].

  ---
  ```
- **Quy chuẩn khắt khe**:
  - **Không bao giờ được bỏ trống khối alert**: Tuyệt đối không để `> [!IMPORTANT]` đứng trơ trọi mà không có nội dung phía sau.
  - **Không dùng blockquote thường**: Phải dùng đúng cú pháp `> [!IMPORTANT]`.
  - **Câu mở đầu bất khả biến**: Bắt buộc bắt đầu bằng `> **Nếu bạn chỉ được nhớ một điều duy nhất:** `.
  - **Chất lượng nội dung**: Phải là 1-2 câu tinh hoa, đắt giá nhất, phản ánh bản chất phần cứng, sự đánh đổi (trade-offs) kinh điển hoặc nguyên lý hoạt động sâu sắc nhất của toàn bộ bài học.

### 4. QUY CHUẨN SƠ ĐỒ MERMAID: MÀU MẶC ĐỊNH (DEFAULT THEME ONLY)
- **TUYỆT ĐỐI KHÔNG sử dụng màu sắc tùy biến**:
  - Không dùng `classDef <name> fill:#...,stroke:#...;`
  - Không dùng `style <Node> fill:#...,stroke:#...;`
  - Không dùng `class <Node1>,<Node2> <className>;`
  - Không dùng `linkStyle <idx> stroke:#...;`
  - Không dùng cú pháp inline class `Node:::className`
- **Chỉ sử dụng cấu trúc ngữ nghĩa thuần túy**: Chỉ định nghĩa các khối (`[Node]`, `(Node)`, `[(Database)]`, `{{Condition}}`) và các đường nối ngữ nghĩa (`-->`, `---|text|`).
- **Mục đích**: Đảm bảo sơ đồ tự động tương thích 100% với cả 2 chế độ Light Mode và Dark Mode trên VitePress, tránh xung đột CSS màu nền và màu chữ.

### 5. THỨ TỰ ƯU TIÊN NGÔN NGỮ (LANGUAGE PRIORITY)
- Các đoạn mã ví dụ minh họa bắt buộc tuân thủ thứ tự ưu tiên:
  $$\textbf{C++20 / C++23} \quad > \quad \textbf{TypeScript} \quad > \quad \textbf{Python} \quad > \quad \textbf{Go/Rust (khi cần)}$$
- **C++ (C++20)**: Sử dụng cho quản lý bộ nhớ, con trỏ, RAII, Cache Locality, SIMD, Data Layout, Bitwise, Multi-threading.
- **TypeScript**: Sử dụng cho Type Systems, Async/Event Loop, REST/gRPC API DTOs, High-level Software Patterns.
- **Python**: Sử dụng cho minh họa thuật toán cấp cao, trực quan hóa toán học hoặc so sánh đối chiếu đa hình thái.

### 6. AN TOÀN VITEPRESS & MATHJAX (BUILD & PARSER SAFETY)
- **Không để lọt ký tự điều khiển ASCII**: Khi viết script tự động hóa sinh hoặc sửa file Markdown bằng Python, **phải luôn dùng Raw String (`r"..."`) hoặc lambda replacement (`lambda m: replacement`)**.
  - Tránh biến `\alpha` thành `\x07lpha` (ký tự Bell `\x07`).
  - Tránh biến `\frac` thành `\x0c` + `rac` (ký tự Formfeed `\x0c`).
  - Tránh biến `\beta` thành `\x08eta` (ký tự Backspace `\x08`).
  - Tránh biến `\text` hoặc `\times` thành `\t` + `ext` hoặc `\t` + `imes` (ký tự Tab `\t` bên trong `$ ... $` hoặc header).
  - Các ký tự điều khiển trên sẽ khiến trình phân tích MathJax của VitePress bị crash với lỗi: `Cannot read properties of null (reading '4')`.
- **Cân bằng Code Fences & Math Blocks**: Mỗi file markdown phải đảm bảo số lượng thẻ đóng mở code fences (```` ``` ````) và thẻ khối toán KaTeX (`$$`) là số chẵn (`count % 2 == 0`).

---

## 📑 CẤU TRÚC 6 PHẦN CHUẨN MỰC CHO MỖI FILE MARKDOWN

Mỗi file tài liệu kỹ thuật trong giáo trình bắt buộc phải được xây dựng theo đúng tiêu đề và cấu trúc 6 phần sau đây:

```markdown
# [Số thứ tự]. [Tên Chủ Đề] ([Tên Tiếng Việt])

> [!IMPORTANT]
> **Nếu bạn chỉ được nhớ một điều duy nhất:** [1-2 câu sâu sắc, cô đọng bản chất kỹ thuật cốt lõi/vật lý hạt nhân/hệ thống của chủ đề, giúp lập trình viên giác ngộ ngay trong 30 giây].

---

## 1. Trực Quan Hóa: Bản Chất [Tên Chủ Đề] Dưới Góc Nhìn Lập Trình Viên

### 1.1. Đoạn Code Dẫn Nhập & Vấn Đề Thực Tế
- Đưa ngay một đoạn mã ngắn thực tế (production code hoặc bug thường gặp).
- Nêu bật vấn đề: Tại sao code chạy chậm? Tại sao bị crash? Tại sao tốn tài nguyên?

### 1.2. Ẩn Dụ Đời Sống & Phân Tích Cơ Chế Hoạt Động
- Sử dụng hình ảnh so sánh đời thực gần gũi (thư viện sách, tủ gửi đồ sân bay, ngã tư giao thông, băng chuyền nhà máy...).
- Dẫn dắt người đọc hiểu cơ chế vận hành tự nhiên trước khi tiếp xúc với thuật ngữ phức tạp.

### 1.3. Mô Phỏng Dữ Liệu Số Nhỏ Từng Bước (Toy Walkthrough)
- Chọn tập dữ liệu mẫu cực nhỏ (ví dụ mảng 4-5 phần tử, chuỗi vài ký tự).
- Tracing từng bước chi tiết (Step 1, Step 2, Step 3...), thể hiện sự biến đổi của biến, con trỏ, thanh ghi và ô nhớ.

### 1.4. Tác Động Thực Tế Tầng Backend & Systems
- Liên hệ trực tiếp tới 3 khía cạnh sống còn của hệ thống:
  1. Hiệu năng & Cache Locality (L1/L2/L3 Cache Hit/Miss, Sequential vs Random Access).
  2. Băng thông bộ nhớ & Dung lượng RAM (Padding overhead, Allocator metadata, Memory Fragmentation).
  3. Độ trễ đuôi (Tail Latency p99) & Khả năng chịu tải (Throughput, Hash DoS, Lock contention).

### 1.5. Sơ Đồ Tư Duy & Kiến Trúc Bộ Nhớ (Mermaid)
- Sơ đồ Flowchart / Sequence thể hiện luồng hoạt động hoặc bố cục bộ nhớ.
- **Lưu ý**: Sử dụng 100% màu mặc định, tuyệt đối không có classDef hoặc style fill/stroke.

---

## 2. Chi tiết từng Keyword (Under-the-Hood Deep Dive)

Phần này phân rã và đào sâu vào từng keyword cốt lõi trong chủ đề (bao phủ 100% keywords không bỏ sót). Mỗi keyword được trình bày thành một mục `### 2.x`:

### 2.1. [Tên Keyword 1]
- **Bản chất lý thuyết & Nền tảng Toán học**: Định nghĩa chặt chẽ, không gian mẫu, công thức toán học bằng KaTeX chuẩn (`$...$` và `$$...$$`), định lý, phân tích độ phức tạp thời gian/không gian (Big-O, $\Omega$, $\Theta$).
- **Cơ chế hoạt động tầng sâu (Under-the-hood Internals)**:
  - Tầng Hardware & CPU: Registers, ALU, Instruction Pipeline, Branch Prediction.
  - Tầng Bộ nhớ: Stack, Heap, Pointer dereferencing, Padding & Memory Alignment.
  - Tầng OS & Compiler: System Calls, VTable/VPTR, Calling conventions, Assembly mapping.

### 2.2. [Tên Keyword 2]
- Tiếp tục phân tích sâu tương tự cho các keyword tiếp theo...

---

## 3. Thực thi Mã nguồn & Mô phỏng Chuyên sâu (Dual-Engine Implementation)
- **Mã nguồn Engine 1 (C++20)**: Viết mã nguồn cấp thấp, cấu trúc dữ liệu tường minh, quản lý bộ nhớ, áp dụng con trỏ / templates / RAII chuẩn chỉ, có comment giải thích rõ lý do thiết kế.
- **Mã nguồn Engine 2 (TypeScript / Python)**: Viết mã nguồn ứng dụng thực chiến ở tầng high-level.
- **Benchmark & So Sánh Định Lượng**: Bảng số liệu hoặc đo đạc so sánh CPU Cycles, Memory Footprint giữa các giải pháp.

---

## 4. Systems Engineering & Production Pitfalls
- Phân tích chi tiết hành vi ở tầng máy tính và hệ thống phân tán thực tế:
  - CPU Cache Line (64 bytes) và Data Locality.
  - TLB (Translation Lookaside Buffer) & Page Faults (Minor/Major).
  - Branch Prediction & Pipeline Stalls.
  - Memory Alignment, Structure Padding & False Sharing trong môi trường đa luồng.
  - Tác động tới Garbage Collection (GC Pause) hoặc Allocator Overhead (`ptmalloc`, `jemalloc`, `tcmalloc`).
  - Các cạm bẫy thực tế (Production Pitfalls): Memory leaks, buffer bloat, deadlocks, tail latency spikes.

---

## 5. Bảng So sánh & Decision Matrix
- Bảng so sánh đa chiều đối chiếu chủ đề hiện tại với các giải pháp / cấu trúc dữ liệu thay thế:
  | Tiêu Chí Đánh Giá | Giải Pháp Hiện Tại | Giải Pháp B | Giải Pháp C |
  | :--- | :--- | :--- | :--- |
  | **Độ Phức Tạp (Avg)** | ... | ... | ... |
  | **Độ Phức Tạp (Worst)** | ... | ... | ... |
  | **Cache Locality** | Tuyệt vời (Tuần tự) | Kém (Pointer jumping) | ... |
  | **Memory Overhead** | Rất thấp (0 byte extra) | Cao (+24B / node) | ... |
  | **Kịch Bản Tối Ưu** | Read-heavy, mảng tĩnh | Insert/Delete thường xuyên | ... |
  | **Kịch Bản Nên Tránh** | Kích thước biến động lớn | Hệ thống hạn chế RAM | ... |

---

## 6. Enterprise Production Checklist & Verification
- Danh sách kiểm tra hành động (Actionable Checklist) gồm 6-10 mục cho lập trình viên và kiến trúc sư hệ thống trước khi đưa lên Production:
  - [ ] **Khởi Tạo Dung Lượng (Initial Sizing)**: Ước lượng dung lượng ban đầu để tránh cấp phát động liên tục.
  - [ ] **Bảo Vệ Hệ Thống (Security & DoS Protection)**: Sử dụng hàm băm kháng va chạm ngẫu nhiên hoặc rate limit.
  - [ ] **Giám Sát Tài Nguyên (Telemetry & Metrics)**: Đo lường độ trễ p95/p99, tỷ lệ cache miss, số lượng phân mảnh.
  - [ ] **Tối Ưu Cấu Hình Hệ Điều Hành**: Bật HugePages, tinh chỉnh swap hoặc cấu hình CPU affinity nếu cần.
```

---

## 🛠 QUY TRÌNH KIỂM THỬ VÀ DEPLOY (AUTOMATED CI/CD WORKFLOW)

Sau khi tạo hoặc chỉnh sửa bất kỳ nhóm file markdown nào, Agent **bắt buộc phải thực hiện các bước kiểm thử tự động sau**:

1. **Kiểm tra cú pháp Markdown & LaTeX tự động bằng Python script**:
   - `important_check`: Kiểm tra 100% file đều có khối alert `> [!IMPORTANT]` với câu `> **Nếu bạn chỉ được nhớ một điều duy nhất:** [nội dung]` và tuyệt đối không bị bỏ trống.
   - `fences % 2 == 0` (Code fences đóng mở cân bằng).
   - `$$ % 2 == 0` (KaTeX block math cân bằng).
   - `bad_chars` scan: Quét toàn bộ mã byte không được chứa `\x07`, `\x0c`, `\x08`, `\x00`...
   - `math_tabs` scan: Không chứa ký tự tab `\t` bên trong các biểu thức toán học hoặc tiêu đề.
   - `mermaid_colors` scan: Không chứa `classDef`, `style ... fill`, `:::`.

2. **Chạy thử nghiệm Build & Deploy**:
   ```bash
   npm run build-and-deploy
   ```
   - Lệnh này sẽ build toàn bộ trang tài liệu VitePress và deploy tự động lên Cloudflare Pages (`studying-docs`).
   - Nếu build thành công, thông báo URL triển khai cho người dùng.
   - Nếu xuất hiện lỗi parse, lập tức xác định dòng file gây lỗi và sửa triệt để trước khi báo cáo.
