<script setup>
import { ref, onMounted } from 'vue';
import { useSidebar } from 'vitepress/theme';

const { hasSidebar } = useSidebar();
const isCollapsed = ref(false);

const toggleSidebar = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  isCollapsed.value = !isCollapsed.value;
  if (typeof document !== 'undefined') {
    document.body.classList.toggle('sidebar-collapsed', isCollapsed.value);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('vp-sidebar-collapsed', isCollapsed.value ? 'true' : 'false');
    }
  }
};

onMounted(() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('vp-sidebar-collapsed') === 'true') {
    isCollapsed.value = true;
    document.body.classList.add('sidebar-collapsed');
  }
});
</script>

<template>
  <div v-if="hasSidebar" class="sidebar-toggle-wrapper">
    <!-- Nút trên thanh Navbar -->
    <button
      class="sidebar-toggle-btn"
      type="button"
      @click="toggleSidebar"
      :title="isCollapsed ? 'Mở rộng Menu (Ctrl+B)' : 'Thu gọn Menu (Ctrl+B)'"
      :aria-label="isCollapsed ? 'Mở rộng Menu' : 'Thu gọn Menu'"
    >
      <svg
        class="sidebar-toggle-icon"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 3v18" />
        <!-- Mũi tên chỉ hướng thu/mở -->
        <path d="M14 9l-3 3 3 3" />
      </svg>
      <span class="sidebar-toggle-text">{{ isCollapsed ? 'Mở Menu' : 'Thu gọn' }}</span>
    </button>    
  </div>
</template>

<style scoped>
.sidebar-toggle-wrapper {
  display: flex;
  align-items: center;
  pointer-events: auto;
}

.sidebar-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  pointer-events: auto;
}

.sidebar-toggle-btn:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
}

.sidebar-toggle-icon {
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

/* Ẩn nút trên màn hình điện thoại (<960px) vì mobile đã có nút hamburger mặc định */
@media (max-width: 959px) {
  .sidebar-toggle-wrapper {
    display: none !important;
  }
}
</style>
