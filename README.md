# 📚 Kho Tri Thức Khoa Học Máy Tính & Trí Tuệ Nhân Tạo

Trang web tài liệu tĩnh (**SSG - Static Site Generation**) hiệu năng cao xây dựng bằng **VitePress**, tự động đọc và phân cấp cây thư mục đệ quy cho hơn 1.000 bài viết nghiên cứu chuyên sâu.

---

## 🚀 Tính năng nổi bật

1. **Cấu trúc Cây Đệ quy Tự động (`.vitepress/sidebar.mjs`)**:
   - Tự động duyệt qua toàn bộ thư mục cha và các thư mục con ở mọi cấp độ.
   - Trích xuất tiêu đề thực tế từ thẻ `# H1` trong file Markdown (không hiện tên file thô).
   - Sắp xếp chuẩn theo thứ tự số học tự nhiên (`01`, `02`, ..., `10`, ...).
   - Khi bạn thêm/xóa bất kỳ folder hay file Markdown nào, hệ thống sẽ tự động cập nhật mà không cần cấu hình thủ công.

2. **Hiệu năng Tĩnh Siêu tốc (SSG + CDN Ready)**:
   - Toàn bộ nội dung được xuất ra file HTML/CSS/JS thuần trong thư mục `.vitepress/dist/`.
   - Phản hồi tải trang cực nhanh, zero cold-start, không cần backend server hay database.

3. **Giao diện Đọc Cao cấp (Aesthetic Reading Experience)**:
   - **Tô màu code block bằng Shiki**: Chuẩn engine Visual Studio Code với các theme hiện đại.
   - **Toán học KaTeX / MathJax**: Hiển thị mượt mà các công thức $E = mc^2$ hay ma trận tensor nhiều chiều.
   - **Sơ đồ Mermaid**: Tự động render sơ đồ kiến trúc hệ thống trực quan.
   - **Tìm kiếm toàn văn tại Client (Ctrl + K)**: Tìm kiếm tức thì trong hơn 1.000 tài liệu mà không cần gọi API backend.
   - **Mục lục On This Page (TOC)**: Tự động trích xuất các tiêu đề H2, H3 bên cột phải và cuộn mượt.
   - **Dark / Light Mode**: Chuyển đổi giao diện sáng/tối với animation dịu mắt.

---

## 🛠️ Hướng dẫn Sử dụng

### 1. Khởi động Chế độ Xem trước (Development)
Chạy lệnh sau trong terminal:
```bash
npm run docs:dev
```
Truy cập vào trình duyệt: [http://localhost:5173](http://localhost:5173)

### 2. Xuất bản Tĩnh (Build SSG cho CDN)
Khi cần triển khai lên CDN, chạy:
```bash
npm run docs:build
```
Toàn bộ mã nguồn tĩnh sẽ được tạo tại `.vitepress/dist/`.

Để xem thử bản build tĩnh trên máy nội bộ:
```bash
npm run docs:preview
```

---

## 🌐 Triển khai lên CDN Miễn phí

### Cách 1: Cloudflare Pages (Khuyên dùng - Tốc độ nhanh nhất)
1. Đăng nhập [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Chọn repo của bạn.
3. Cấu hình Build settings:
   - **Framework preset**: `VitePress`
   - **Build command**: `npm run docs:build`
   - **Build output directory**: `.vitepress/dist`
   - **Environment variables**: Thêm `NODE_VERSION = 22`
4. Bấm **Save and Deploy**. Toàn bộ tài liệu sẽ được phân phối trên mạng lưới toàn cầu của Cloudflare.

### Cách 2: Vercel
1. Đăng nhập [Vercel](https://vercel.com/) > **Add New Project** > Chọn Git repository.
2. Dự án đã có sẵn file `vercel.json` tối ưu sẵn. Bạn chỉ cần bấm **Deploy**.

### Cách 3: GitHub Pages
1. Dự án đã được tạo sẵn workflow tự động tại `.github/workflows/deploy.yml`.
2. Trên GitHub Repo, vào **Settings** > **Pages** > **Build and deployment** > Chọn **Source: GitHub Actions**.
3. Mỗi khi bạn `git push` bài viết mới lên nhánh `main`, GitHub Actions sẽ tự động build và publish trang web.
