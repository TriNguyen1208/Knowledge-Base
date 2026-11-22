---
name: ai-theory-and-math-generator
description: "Triggers when generating comprehensive theoretical and practical documentation for Artificial Intelligence, Machine Learning, Deep Learning, LLMs, Computer Vision, NLP, and AI Mathematical Foundations. Enforces the 'Intuition First, Rigorous Math & Hardware Depth Second' pedagogical principle: starting with mental models and geometric analogies, demystifying mathematical notation, detailing GPU/Memory/Computational graph internals, providing runnable dual-engine code (Python PyTorch/NumPy + C++), Mermaid diagrams, and real-world AI applications."
---

# AI & Mathematical Foundations Theory Generator Skill

Skill này quy định quy trình chuẩn mực, sư phạm và chuyên sâu dành cho Agent khi biên soạn tài liệu lý thuyết và thực hành cho toàn bộ lĩnh vực **Trí tuệ Nhân tạo (AI), Học máy (Machine Learning), Học sâu (Deep Learning), Mô hình Ngôn ngữ Lớn (LLM), Xử lý Ngôn ngữ Tự nhiên (NLP), Thị giác Máy tính (CV) và Nền tảng Toán học cho AI (Toán giải tích, Đại số tuyến tính, Xác suất thống kê, Tối ưu hóa)**.

---

## 🎯 1. NGUYÊN TẮC CỐT LÕI (CORE PEDAGOGICAL DIRECTIVES)

> 💡 **Khẩu quyết cốt lõi**: *"Trực giác hình học mở lối — Toán học chặt chẽ & Tầng sâu điện toán định hình bản chất."*
> Tài liệu phải giúp người học **cảm nhận được vẻ đẹp và ý nghĩa trực giác đằng sau các thuật toán/công thức**, không bị choáng ngợp bởi ký hiệu toán học hàn lâm, đồng thời giúp kỹ sư AI hiểu sâu sắc **cơ chế tính toán trên GPU, bộ nhớ Tensor và các cạm bẫy huấn luyện thực tế**.

### 1.1. Trực giác trước, Toán học sâu sau (Intuition-First Approach)
- **Tuyệt đối không bắt đầu bằng một mớ công thức toán hình thức ($\sigma$-algebra, Lebesgue measure, ma trận tensor bậc cao) mà không có cầu nối trực giác**:
  - Mở đầu mỗi khái niệm luôn có **1 câu cốt lõi: *"Nếu chỉ nhớ một điều..."***.
  - Sử dụng **Trực giác hình học & Ẩn dụ đời thường (Geometric Intuition & Real-world Analogy)**:
    - *Gradient*: Vector chỉ hướng leo dốc đứng nhất trên sườn đồi sương mù.
    - *Eigenvector / Eigenvalue*: Những trục xương sống mà khi biến đổi không gian (kéo dãn/co bóp), hướng của chúng vẫn giữ nguyên, chỉ thay đổi độ dài theo tỷ lệ eigenvalue.
    - *Self-Attention*: Người đọc cầm một chiếc đèn pin định hướng, khi đọc tới một từ sẽ tự động soi sáng các từ có liên quan mật thiết nhất trong câu.
    - *Backpropagation*: Cuộc điều tra quy trách nhiệm theo dây chuyền — xem mỗi trọng số đóng góp bao nhiêu phần trăm vào sai số dự đoán cuối cùng.
    - *KL Divergence*: Mức độ "bất ngờ" hoặc lượng thông tin bị lãng phí khi dùng một giả định sai để xấp xỉ phân phối thực tế.
  - Chỉ rõ: **"Bài toán này giải quyết nút thắt (bottleneck) nào trong AI? Nếu không có nó thì mô hình sẽ thất bại ra sao?"**

### 1.2. Giải nghĩa Tường minh Mọi Ký hiệu Toán học (KaTeX Demystification)
- Mọi công thức KaTeX ($...$ và $$...$$) đều **bắt buộc phải kèm theo danh sách giải thích ý nghĩa từng biến số**:
  - Ví dụ: Thay vì chỉ viết $\text{Attention}(Q, K, V) = \text{Softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$, phải giải thích rõ:
    - $Q$ (Query): Vector truy vấn đại diện cho thông tin ta đang tìm kiếm.
    - $K$ (Key): Vector nhãn/địa chỉ của các ô nhớ có sẵn.
    - $V$ (Value): Vector nội dung thông tin thực sự được rút trích ra.
    - $\sqrt{d_k}$: Hệ số co dãn để ngăn chặn giá trị tích vô hướng quá lớn làm bão hòa đạo hàm của hàm Softmax.

### 1.3. Cơ chế Tầng Sâu & Điện toán (Hardware & Computational Internals)
Mổ xẻ cơ chế hoạt động thực tế trên phần cứng và runtime:
- **Tensor Memory Layout**: Flat buffers, Strides, Row-Major (C-style) vs Column-Major (Fortran-style), Memory Alignment, Zero-copy views (`view`, `reshape`, `transpose`).
- **GPU & Hardware Acceleration**:
  - HBM (High Bandwidth Memory) vs SRAM, Memory-bound vs Compute-bound operations.
  - GPU Streaming Multiprocessors (SM), Tensor Cores, FP32, FP16, BF16 và kỹ thuật Mixed Precision Training.
  - FlashAttention, Operator Fusion, Kernel Launch Overhead.
- **Autograd & Computational Graph**:
  - Đồ thị tính toán động (Dynamic Graph / Tape-based) vs Đồ thị tĩnh (Static Graph).
  - Forward pass lưu lại activations nào cho Backward pass; chi phí bộ nhớ đệm (Activation Memory Overhead).
  - Ngắt đồ thị (`detach()`), Tích lũy Gradient (`gradient accumulation`), In-place modification hazards.
- **Ổn định Số học (Numerical Stability)**:
  - Hiện tượng triệt tiêu thảm khốc (Catastrophic Cancellation), Tràn số trên/dưới (Overflow/Underflow).
  - Thủ thuật LogSumExp trick, Softmax clipping, Gradient clipping, Condition number $\kappa(A)$ của ma trận.

### 1.4. Code Thực chiến Hai Lớp (Dual-Engine: Python + C++)
- **Python (PyTorch / NumPy)**: Trọng tâm chính, thể hiện cách triển khai chuẩn mực trong Deep Learning hiện đại, clean code, có chú thích giải thích *TẠI SAO*, in ra tensor shapes và kết quả mẫu.
- **C++ (C++17/20, Eigen hoặc Con trỏ thuần)**: Minh họa cách tổ chức bộ nhớ vùng đệm (buffer), tính toán SIMD hoặc tối ưu cache khi cần bộc lộ bản chất cấp thấp.

### 1.5. Tuyệt đối Không Sơ sài (Anti-Sparse Quality Gate)
- Không viết gạch đầu dòng hời hợt vài dòng.
- Mỗi keyword phải triển khai đầy đủ 6 phần chuẩn mực bên dưới.
- Bắt buộc có Mermaid diagram minh họa trực quan cấu trúc hoặc luồng tính toán.

---

## 📋 2. CẤU TRÚC TIÊU CHUẨN CỦA MỖI FILE MARKDOWN

Mỗi file Markdown phải tuân thủ nghiêm ngặt cấu trúc 6 phần sau cho từng Keyword:

```markdown
# [Tên Chuyên Đề] ([Tên Tiếng Anh])

## 1. Tổng quan Chuyên đề
- Vấn đề cốt lõi mà chuyên đề này giải quyết trong Toán học & Trí tuệ Nhân tạo.
- Sơ đồ tư duy trực quan (Mermaid Diagram) kết nối các khái niệm trong bài.

---

## 2. Chi tiết từng Keyword

### [Số thứ tự]. [Tên Keyword] ([Tên Tiếng Anh])

#### a. Trực giác Khái niệm & Ẩn dụ Đời thực (Intuitive Mental Model)
- **Nếu chỉ nhớ một điều**: [1 câu tóm tắt đắt giá nhất về bản chất của khái niệm].
- **Ẩn dụ đời thường / Trực giác hình học**: [Ví dụ sinh động, mô tả hình ảnh không gian hoặc so sánh đời thực].
- **Vấn đề cốt lõi (Why it matters)**: [Tại sao các nhà nghiên cứu cần phát minh ra khái niệm này].

#### b. Bản chất Toán học & Giải nghĩa Ký hiệu (Rigorous Mathematical Formulation)
- Công thức toán học chuẩn KaTeX ($...$ và $$...$$).
- **Ý nghĩa các biến số**:
  - $x$: [Ý nghĩa]
  - $W$: [Ý nghĩa]
  - $\nabla$: [Ý nghĩa]
- Ý nghĩa giải tích / xác suất / hình học của phương trình.

#### c. Cơ chế Tầng Sâu & Điện toán (Hardware & Computational Internals)
- Tác động tới GPU/CPU, Bố cục bộ nhớ Tensor (Strides, Cache locality).
- Autograd Tape, Chi phí bộ nhớ Forward/Backward, Memory-bound vs Compute-bound.
- Vấn đề ổn định số học (Numerical stability, Underflow/Overflow).

#### d. Sơ đồ Minh họa Trực quan (Mermaid Diagram)
- Biểu đồ mô phỏng luồng tensor, đồ thị tính toán (Computational Graph), hoặc cấu trúc kiến trúc.

#### e. Code Thực chiến (Python PyTorch / NumPy & C++)
- Code sạch, chạy được, có chú thích giải thích cặn kẽ từng dòng lệnh quan trọng.
- In ra Shape của Tensor và kết quả chạy mẫu (Expected Output).

#### f. Cạm bẫy Huấn luyện, Lỗi Thường gặp & Ứng dụng Thực tế (Pitfalls & AI Applications)
- **Cạm bẫy thực chiến**: Exploding/Vanishing gradients, Dying ReLU, Data leakage, Broken computational graph...
- **Ứng dụng thực tế**: Xuất hiện ở đâu trong Transformer, GPT-4, LLaMA, Stable Diffusion, YOLO, AlphaGo...
```

---

## 🚫 3. CÁC ĐIỀU CẤM KỴ (ANTI-PATTERNS TO AVOID)

> ❌ **TUYỆT ĐỐI TRÁNH**:
> 1. Viết công thức toán học khô khan mà không giải thích ý nghĩa của các ký hiệu biến số.
> 2. Cắt bớt phần code thực chiến hoặc chỉ đưa ra mã giả không chạy được.
> 3. Bỏ qua trực giác hình học và ẩn dụ đời thường khiến người đọc cảm thấy trừu tượng và khó hiểu.
> 4. Bỏ qua các vấn đề phần cứng (GPU/Memory) và cạm bẫy thực tế khi huấn luyện mô hình.
