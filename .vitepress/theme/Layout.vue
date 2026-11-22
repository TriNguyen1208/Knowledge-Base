<script setup>
import DefaultTheme from 'vitepress/theme';
import SidebarToggle from './components/SidebarToggle.vue';
import LanguageToggle from './components/LanguageToggle.vue';
import CopyMarkdownButton from './components/CopyMarkdownButton.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!-- Gắn nút Bật/Tắt Sidebar & Nút Chuyển đổi Ngôn ngữ vào thanh Navbar -->
    <template #nav-bar-content-before>
      <div class="nav-custom-controls">
        <SidebarToggle />
        <LanguageToggle />
      </div>
    </template>

    <!-- Nút Copy Markdown ở đầu bài viết (Phương án 1) -->
    <template #doc-before>
      <div class="doc-actions-top">
        <CopyMarkdownButton />
      </div>
    </template>

    <!-- Gắn thông báo miễn trừ trách nhiệm AI ở chân mỗi bài viết tài liệu -->
    <template #doc-after>
      <div class="ai-disclaimer-box">
        <span class="ai-disclaimer-icon">⚠️</span>
        <div class="ai-disclaimer-text">
          <strong>Tuyên bố miễn trừ trách nhiệm AI:</strong> Tất cả tài liệu và kiến thức trong kho lưu trữ này được tổng hợp và tạo bởi Trí tuệ Nhân tạo (AI). Nội dung không đảm bảo tính chính xác tuyệt đối, chỉ mang tính chất tham khảo và nghiên cứu cá nhân. Bạn đọc nên đối chiếu với tài liệu học thuật chính thống trước khi áp dụng vào môi trường sản xuất.
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.nav-custom-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 16px;
  margin-right: auto;
  pointer-events: auto !important;
  z-index: 20;
}

.doc-actions-top {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 4px;
}
</style>
