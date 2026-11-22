<script setup>
import { ref, onMounted } from 'vue';

const currentLang = ref('vi');
const isLoading = ref(false);

const readCurrentLang = () => {
  if (typeof document === 'undefined') return 'vi';
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (match && match[1]) {
    const val = decodeURIComponent(match[1]);
    if (val.includes('/en')) return 'en';
  }
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('study_doc_lang');
    if (saved === 'en') return 'en';
  }
  return 'vi';
};

const setGoogleTransCookie = (targetLang) => {
  const cookieVal = targetLang === 'en' ? '/vi/en' : '/vi/vi';
  const expires = new Date(Date.now() + 30 * 864e5).toUTCString();

  document.cookie = `googtrans=${cookieVal}; path=/; expires=${expires}`;
  document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname}; expires=${expires}`;

  const hostParts = window.location.hostname.split('.');
  if (hostParts.length > 2) {
    const rootDomain = '.' + hostParts.slice(-2).join('.');
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${rootDomain}; expires=${expires}`;
  }

  if (targetLang === 'vi') {
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    if (hostParts.length > 2) {
      const rootDomain = '.' + hostParts.slice(-2).join('.');
      document.cookie = `googtrans=; path=/; domain=${rootDomain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }
  }
};

const toggleLanguage = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (isLoading.value) return;
  isLoading.value = true;

  const targetLang = currentLang.value === 'en' ? 'vi' : 'en';
  currentLang.value = targetLang;

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('study_doc_lang', targetLang);
  }

  setGoogleTransCookie(targetLang);

  const select = document.querySelector('.goog-te-combo');
  if (select && select.value !== targetLang) {
    select.value = targetLang;
    select.dispatchEvent(new Event('change'));

    if (targetLang === 'vi') {
      setTimeout(() => {
        window.location.reload();
      }, 100);
      return;
    }
    setTimeout(() => {
      isLoading.value = false;
    }, 400);
  } else {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
};

onMounted(() => {
  currentLang.value = readCurrentLang();
});
</script>

<template>
  <div class="lang-toggle-wrapper notranslate" translate="no">
    <!-- Container ẩn cho Google Translate Element -->
    <div id="google_translate_element" style="display: none;"></div>

    <button
      class="lang-toggle-btn"
      :class="{ 'is-en': currentLang === 'en', 'is-loading': isLoading }"
      type="button"
      @click="toggleLanguage"
      :title="currentLang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'"
      :aria-label="currentLang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'"
    >
      <span class="lang-flag">{{ currentLang === 'en' ? '🇬🇧' : '🇻🇳' }}</span>
      <span class="lang-name">{{ currentLang === 'en' ? 'English' : 'Tiếng Việt' }}</span>
      <span class="lang-badge">{{ currentLang === 'en' ? 'EN' : 'VI' }}</span>
    </button>
  </div>
</template>

<style scoped>
.lang-toggle-wrapper {
  display: inline-flex;
  align-items: center;
  pointer-events: auto;
}

.lang-toggle-btn {
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

.lang-toggle-btn:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
}

.lang-toggle-btn.is-en {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-soft);
  background-color: var(--vp-c-brand-soft);
}

.lang-flag {
  font-size: 14px;
  line-height: 1;
}

.lang-name {
  font-size: 12.5px;
  font-weight: 600;
}

.lang-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: var(--vp-c-divider);
  color: var(--vp-c-text-2);
  line-height: 1.2;
}

.lang-toggle-btn.is-en .lang-badge {
  background-color: var(--vp-c-brand-1);
  color: #fff;
}

.lang-toggle-btn.is-loading {
  opacity: 0.7;
  cursor: wait;
}

@media (max-width: 640px) {
  .lang-name {
    display: none;
  }
}
</style>
