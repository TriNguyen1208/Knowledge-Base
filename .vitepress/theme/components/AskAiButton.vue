<script setup>
import { ref } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();
const isOpening = ref(false);

const getPublicUrl = () => {
  const productionBase = 'https://studying-docs.pages.dev';
  let path = '';
  if (typeof window !== 'undefined' && window.location.pathname) {
    path = window.location.pathname;
  } else if (route && route.path) {
    path = route.path;
  }
  const cleanPath = path.replace(/\.html$/, '');
  let fullUrl = productionBase + cleanPath;

  if (
    typeof window !== 'undefined' &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1' &&
    window.location.origin.startsWith('http')
  ) {
    fullUrl = window.location.origin + cleanPath;
  }
  return fullUrl;
};

const getRawMarkdown = () => {
  if (typeof document === 'undefined') return '';
  const rawEl = document.querySelector('.raw-markdown-content');
  if (!rawEl) return '';
  try {
    const base64 = rawEl.textContent.trim();
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0));
    return new TextDecoder().decode(bytes);
  } catch (err) {
    return '';
  }
};

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

const handleAskAi = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const url = getPublicUrl();
  const rawText = getRawMarkdown();
  const prompt = `Hãy đọc nội dung từ đường dẫn sau và giải thích đơn giản, dễ hiểu nhưng vẫn đầy đủ, chi tiết:\n${url}`;
  const fullText = prompt + (rawText ? `\n\n---\n${rawText}` : '');

  // 1. Sao chép dự phòng vào Clipboard
  copyToClipboard(fullText).catch(() => {});

  // 2. Hiển thị trạng thái phản hồi
  isOpening.value = true;
  setTimeout(() => {
    isOpening.value = false;
  }, 2500);

  // 3. Mở ChatGPT thông minh theo thiết bị:
  // - Máy tính: Mở ở tab mới riêng biệt để bạn giữ nguyên trang tài liệu đang đọc
  // - Điện thoại: Kích hoạt Deep Link mở thẳng vào App ChatGPT (giữ PWA không bị văng)
  const chatGptLink = `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`;
  if (typeof window !== 'undefined') {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = chatGptLink;
    } else {
      window.open(chatGptLink, '_blank', 'noopener,noreferrer');
    }
  }
};
</script>

<template>
  <button
    v-if="route.path !== '/'"
    class="ask-ai-btn"
    :class="{ opening: isOpening }"
    type="button"
    @click="handleAskAi"
    title="Gửi bài viết này cho ChatGPT để giải thích đơn giản và chi tiết"
    aria-label="Hỏi AI - Giải thích nội dung bài viết này"
  >
    <svg
      class="ai-icon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
    <span class="ai-text">{{ isOpening ? 'Đang mở ChatGPT...' : 'Hỏi AI' }}</span>
  </button>
</template>

<style scoped>
.ask-ai-btn {
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

.ask-ai-btn:hover {
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.1);
  border-color: #10b981;
  box-shadow: 0 1px 4px rgba(16, 185, 129, 0.15);
  transform: translateY(-0.5px);
}

.ask-ai-btn.opening {
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
  font-weight: 600;
}

.ai-icon {
  flex-shrink: 0;
  color: #10b981;
  transition: transform 0.2s ease;
}

.ask-ai-btn:hover .ai-icon {
  transform: scale(1.15) rotate(6deg);
}
</style>
