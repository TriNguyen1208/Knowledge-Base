<script setup>
import { ref } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();
const isCopied = ref(false);

const copyToClipboard = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      textarea.remove();
      return Promise.resolve();
    } catch (err) {
      textarea.remove();
      return Promise.reject(err);
    }
  }
};

const handleCopy = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (isCopied.value) return;

  const rawEl = document.querySelector('.raw-markdown-content');
  if (!rawEl) {
    console.warn('Không tìm thấy nội dung raw markdown trên trang này.');
    return;
  }

  try {
    const base64 = rawEl.textContent.trim();
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
    const rawText = new TextDecoder().decode(bytes);

    copyToClipboard(rawText).then(() => {
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    });
  } catch (err) {
    console.error('Lỗi sao chép markdown:', err);
  }
};
</script>

<template>
  <button
    v-if="route.path !== '/'"
    class="copy-markdown-btn"
    :class="{ copied: isCopied }"
    type="button"
    @click="handleCopy"
    :title="isCopied ? 'Đã sao chép vào bộ nhớ tạm!' : 'Sao chép toàn bộ nội dung Markdown (Raw)'"
    :aria-label="isCopied ? 'Đã sao chép vào bộ nhớ tạm!' : 'Sao chép toàn bộ nội dung Markdown'"
  >
    <svg
      v-if="!isCopied"
      class="copy-icon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
    <svg
      v-else
      class="copy-icon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
    <span class="copy-text">{{ isCopied ? 'Đã sao chép!' : 'Sao chép Markdown' }}</span>
  </button>
</template>

<style scoped>
.copy-markdown-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 11px;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
  pointer-events: auto;
}

.copy-markdown-btn:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.copy-markdown-btn.copied {
  color: #059669;
  background-color: rgba(16, 185, 129, 0.12);
  border-color: #10b981;
  font-weight: 600;
}

.copy-icon {
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.copy-markdown-btn:hover .copy-icon {
  transform: scale(1.08);
}
</style>
