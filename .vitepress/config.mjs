import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vitepress';
import { generateAutoSidebar, generateAutoNavbar, generateMegaMenuData, getAudioTracks } from './sidebar.mjs';

const autoSidebar = generateAutoSidebar('.');
const autoNavbar = generateAutoNavbar('.');
const megaMenuData = generateMegaMenuData('.');
const audioTracks = getAudioTracks('.');

try {
  fs.writeFileSync(path.resolve('public/audio-list.json'), JSON.stringify(audioTracks, null, 2), 'utf-8');
} catch (e) {
  // ignore
}

export default defineConfig({
  title: 'Knowledge Base',
  description: 'Kho lưu trữ tri thức Khoa học Máy tính & Trí tuệ Nhân tạo',
  lang: 'vi-VN',
  cleanUrls: true,
  ignoreDeadLinks: true,
  srcExclude: ['**/node_modules/**', '**/dist/**', '**/.git/**'],

  // Bật chế độ Multi-Page App (MPA) để tạo static HTML thuần túy
  // Giảm hơn 90% dung lượng build (từ >500MB xuống ~35MB), tối ưu tối đa cho Cloudflare Pages
  mpa: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/pwa-192x192.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'StudyDocs' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],

    // Cấu hình dữ liệu danh sách nhạc và nạp trình phát nhạc Audio Player
    [
      'script',
      {},
      `window.__AUDIO_TRACKS__ = ${JSON.stringify(audioTracks)};`
    ],
    ['script', { src: '/audio-player.js', defer: '' }],

    // Script tương tác client siêu nhẹ cho chế độ MPA: Quản lý Sidebar, Dark Mode, Ngôn ngữ & Mermaid
    [
      'script',
      {},
      `
      (function() {
        function storageGet(key) {
          try {
            return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
          } catch (e) {
            return null;
          }
        }

        function storageSet(key, val) {
          try {
            if (typeof localStorage !== 'undefined') localStorage.setItem(key, val);
          } catch (e) {}
        }

        // 1. Phục hồi trạng thái Sidebar đã lưu trước khi render giao diện
        if (storageGet('vp-sidebar-collapsed') === 'true') {
          document.documentElement.classList.add('sidebar-collapsed-init');
        }

        // --- Helper cho chức năng Đa ngôn ngữ (Google Translate) ---
        function readCurrentLang() {
          if (typeof document === 'undefined') return 'vi';
          var match = document.cookie.match(/(?:^|;\\s*)googtrans=([^;]+)/);
          if (match && match[1]) {
            var val = decodeURIComponent(match[1]);
            if (val.includes('/en')) return 'en';
          }
          var saved = storageGet('study_doc_lang');
          if (saved === 'en') return 'en';
          return 'vi';
        }

        function setGoogleTransCookie(targetLang) {
          var cookieVal = targetLang === 'en' ? '/vi/en' : '/vi/vi';
          var expires = new Date(Date.now() + 30 * 864e5).toUTCString();

          document.cookie = 'googtrans=' + cookieVal + '; path=/; expires=' + expires;
          document.cookie = 'googtrans=' + cookieVal + '; path=/; domain=' + window.location.hostname + '; expires=' + expires;

          var hostParts = window.location.hostname.split('.');
          if (hostParts.length > 2) {
            var rootDomain = '.' + hostParts.slice(-2).join('.');
            document.cookie = 'googtrans=' + cookieVal + '; path=/; domain=' + rootDomain + '; expires=' + expires;
          }

          if (targetLang === 'vi') {
            document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
            document.cookie = 'googtrans=; path=/; domain=' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
            if (hostParts.length > 2) {
              var rootDomain = '.' + hostParts.slice(-2).join('.');
              document.cookie = 'googtrans=; path=/; domain=' + rootDomain + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
            }
          }
        }

        function updateLanguageUI(isEn) {
          var btns = document.querySelectorAll('.lang-toggle-btn');
          for (var i = 0; i < btns.length; i++) {
            var b = btns[i];
            if (isEn) {
              b.classList.add('is-en');
              b.setAttribute('title', 'Chuyển sang Tiếng Việt');
              b.setAttribute('aria-label', 'Chuyển sang Tiếng Việt');
            } else {
              b.classList.remove('is-en');
              b.setAttribute('title', 'Switch to English');
              b.setAttribute('aria-label', 'Switch to English');
            }
            var flag = b.querySelector('.lang-flag');
            if (flag) flag.textContent = isEn ? '🇬🇧' : '🇻🇳';
            var name = b.querySelector('.lang-name');
            if (name) name.textContent = isEn ? 'English' : 'Tiếng Việt';
            var badge = b.querySelector('.lang-badge');
            if (badge) badge.textContent = isEn ? 'EN' : 'VI';
          }
        }

        function syncDarkModeUI() {
          var isDark = document.documentElement.classList.contains('dark');
          var switches = document.querySelectorAll('.VPSwitchAppearance');
          for (var i = 0; i < switches.length; i++) {
            switches[i].setAttribute('aria-checked', isDark ? 'true' : 'false');
          }
        }

        function syncSidebarUI() {
          var isCollapsed = document.body.classList.contains('sidebar-collapsed');
          var btns = document.querySelectorAll('.sidebar-toggle-btn');
          for (var i = 0; i < btns.length; i++) {
            var text = btns[i].querySelector('.sidebar-toggle-text');
            if (text) text.textContent = isCollapsed ? 'Mở Menu' : 'Thu gọn';
            btns[i].setAttribute('title', isCollapsed ? 'Mở rộng Menu (Ctrl+B)' : 'Thu gọn Menu (Ctrl+B)');
            btns[i].setAttribute('aria-label', isCollapsed ? 'Mở rộng Menu' : 'Thu gọn Menu');
          }
        }

        function isIosStandalone() {
          try {
            if (typeof window === 'undefined' || !window.navigator) return false;
            if (window.navigator.standalone === true) return true;
            var isAppleMobile = /iPhone|iPad|iPod/i.test(window.navigator.userAgent || '');
            return !!(isAppleMobile && window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
          } catch (e) {
            return false;
          }
        }

        function closeMobileDrawers() {
          var sidebar = document.querySelector('.VPSidebar');
          if (sidebar) sidebar.classList.remove('open');
          var backdrop = document.querySelector('.VPBackdrop');
          if (backdrop) backdrop.style.display = 'none';
          var localNavBtn = document.querySelector('.VPLocalNav .menu');
          if (localNavBtn) localNavBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('nav-screen-open');
          var hamburger = document.querySelector('.VPNavBarHamburger');
          if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
          }
          document.body.style.overflow = '';
        }

        // Trong chế độ PWA Standalone trên iOS, loại bỏ thuộc tính href trên link nội bộ
        // (chuyển sang data-spa-href) để ngăn WebKit tự ý bật SFSafariViewController ("Done")
        function neutralizeStandaloneLinks() {
          if (!isIosStandalone()) return;
          try {
            var anchors = document.querySelectorAll('a[href]');
            for (var i = 0; i < anchors.length; i++) {
              var a = anchors[i];
              var raw = a.getAttribute('href');
              if (!raw || raw.charAt(0) === '#') continue;
              if (raw.indexOf('mailto:') === 0 || raw.indexOf('tel:') === 0 || raw.indexOf('javascript:') === 0) continue;
              if (a.getAttribute('target') === '_blank' || a.hasAttribute('download')) continue;
              try {
                var u = new URL(raw, window.location.href);
                if (u.origin === window.location.origin) {
                  if (u.pathname === window.location.pathname && u.search === window.location.search && u.hash) continue;
                  a.setAttribute('data-spa-href', raw);
                  a.removeAttribute('href');
                  if (!a.hasAttribute('role')) a.setAttribute('role', 'link');
                  if (!a.hasAttribute('tabindex')) a.setAttribute('tabindex', '0');
                  a.style.cursor = 'pointer';
                }
              } catch (err) {}
            }
          } catch (err) {}
        }

        // --- 0. SPA Navigation (PJAX) cho chế độ MPA ---
        // Chuyển trang tức thì không tải lại trang, giữ trọn vẹn 100% chế độ PWA Standalone trên iOS (không bao giờ bung Safari "Done")
        var spaNavToken = 0;
        function navigateSpa(url, push) {
          var myToken = ++spaNavToken;
          fetch(url, { credentials: 'same-origin' })
            .then(function(res) {
              if (!res.ok) throw new Error('HTTP ' + res.status);
              return res.text();
            })
            .then(function(html) {
              if (myToken !== spaNavToken) return;
              var parser = new DOMParser();
              var doc = parser.parseFromString(html, 'text/html');

              if (doc.title) {
                document.title = doc.title;
              }

              var newApp = doc.querySelector('#app');
              var curApp = document.querySelector('#app');
              if (!newApp || !curApp || !newApp.innerHTML || !newApp.innerHTML.trim()) {
                throw new Error('Missing #app container');
              }
              curApp.innerHTML = newApp.innerHTML;

              if (push !== false) {
                try {
                  history.pushState({ __spa: true }, '', url);
                } catch (e) {}
              }

              try {
                window.scrollTo(0, 0);
                if (document.documentElement) document.documentElement.scrollTop = 0;
                if (document.body) document.body.scrollTop = 0;
              } catch (e) {}

              // Đồng bộ lại UI trong try/catch để lỗi phụ không bao giờ kích hoạt reload trang
              try {
                closeMobileDrawers();
                neutralizeStandaloneLinks();
                syncDarkModeUI();
                syncSidebarUI();
                var currentLang = readCurrentLang();
                updateLanguageUI(currentLang === 'en');
                protectTechnicalElements();
                renderMermaid();
              } catch (e) {
                console.warn('SPA post-render sync warning:', e);
              }

              try {
                window.dispatchEvent(new Event('popstate'));
              } catch (e) {}
            })
            .catch(function(err) {
              if (myToken !== spaNavToken) return;
              console.warn('SPA Navigation fallback:', err);
              window.location.href = url;
            });
        }

        function handleGlobalClick(e) {
          var rawTarget = e.target;
          var targetEl = rawTarget && rawTarget.nodeType === 3 ? rawTarget.parentElement : rawTarget;
          if (!targetEl || !targetEl.closest) return;

          // A. Đổi giao diện Sáng / Tối (Dark / Light Mode)
          var themeBtn = targetEl.closest('.VPSwitchAppearance');
          if (themeBtn) {
            var isDark = document.documentElement.classList.toggle('dark');
            storageSet('vitepress-theme-appearance', isDark ? 'dark' : 'light');
            syncDarkModeUI();
            return;
          }

          // B. Đổi Ngôn ngữ (Language Switcher)
          var langBtn = targetEl.closest('.lang-toggle-btn');
          if (langBtn) {
            if (langBtn.classList.contains('is-loading')) return;
            langBtn.classList.add('is-loading');

            var cur = readCurrentLang();
            var targetLang = cur === 'en' ? 'vi' : 'en';
            storageSet('study_doc_lang', targetLang);

            setGoogleTransCookie(targetLang);
            updateLanguageUI(targetLang === 'en');

            var select = document.querySelector('.goog-te-combo');
            if (select && select.value !== targetLang) {
              select.value = targetLang;
              select.dispatchEvent(new Event('change'));

              if (targetLang === 'vi') {
                setTimeout(function() {
                  window.location.reload();
                }, 100);
                return;
              }
              setTimeout(function() {
                langBtn.classList.remove('is-loading');
              }, 400);
            } else {
              setTimeout(function() {
                window.location.reload();
              }, 100);
            }
            return;
          }

          // C. Bật / Tắt Sidebar trên Desktop
          var sidebarBtn = targetEl.closest('.sidebar-toggle-btn');
          if (sidebarBtn) {
            var isCollapsed = document.body.classList.toggle('sidebar-collapsed');
            storageSet('vp-sidebar-collapsed', isCollapsed ? 'true' : 'false');
            syncSidebarUI();
            return;
          }

          // D. Bật / Tắt Sidebar trên Mobile (Nút "Danh mục" trong VPLocalNav)
          var localNavBtn = targetEl.closest('.VPLocalNav .menu');
          if (localNavBtn) {
            var sidebar = document.querySelector('.VPSidebar');
            if (sidebar) {
              var isOpen = sidebar.classList.toggle('open');
              localNavBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

              var backdrop = document.querySelector('.VPBackdrop');
              if (!backdrop) {
                backdrop = document.createElement('div');
                backdrop.className = 'VPBackdrop backdrop';
                document.body.appendChild(backdrop);
              }
              backdrop.style.display = isOpen ? 'block' : 'none';
              document.body.style.overflow = isOpen ? 'hidden' : '';
            }
            return;
          }

          // E. Click Backdrop để đóng Mobile Sidebar hoặc Mobile Nav
          var backdropEl = targetEl.closest('.VPBackdrop');
          if (backdropEl) {
            closeMobileDrawers();
            return;
          }

          // F. Bắt click link nội bộ để chuyển trang SPA mượt mà (ngăn iOS PWA thoát ra Safari "Done")
          var linkEl = targetEl.closest('a, [data-spa-href]');
          if (linkEl) {
            var rawHref = linkEl.getAttribute('data-spa-href') || linkEl.getAttribute('href');
            if (rawHref) {
              var isSpecial = rawHref.indexOf('mailto:') === 0 || rawHref.indexOf('tel:') === 0 || rawHref.indexOf('javascript:') === 0;
              var isBlank = linkEl.getAttribute('target') === '_blank';
              var isDownload = linkEl.hasAttribute('download');
              var hasModifier = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (typeof e.button === 'number' && e.button !== 0);

              if (!isSpecial && !isBlank && !isDownload && !hasModifier) {
                var parsedUrl = null;
                try {
                  parsedUrl = new URL(rawHref, window.location.href);
                } catch (err) {}

                if (parsedUrl && parsedUrl.origin === window.location.origin) {
                  var currentPath = window.location.pathname;
                  var targetPath = parsedUrl.pathname;

                  // Nếu là anchor hash cuộn trên cùng 1 trang (ví dụ #heading) -> đóng mobile drawer và để trình duyệt tự cuộn
                  if (targetPath === currentPath && parsedUrl.search === window.location.search && parsedUrl.hash) {
                    if (window.innerWidth < 960) {
                      closeMobileDrawers();
                    }
                    return;
                  }

                  // Nếu là link chuyển trang:
                  e.preventDefault();
                  closeMobileDrawers();
                  navigateSpa(parsedUrl.href, true);
                  return;
                }
              }
            }
          }

          // G. Bật / Tắt Menu Navbar trên Mobile (Nút 3 gạch hamburger)
          var hamburgerBtn = targetEl.closest('.VPNavBarHamburger');
          if (hamburgerBtn) {
            var isOpen = document.body.classList.toggle('nav-screen-open');
            hamburgerBtn.classList.toggle('active', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.style.overflow = isOpen ? 'hidden' : '';
            return;
          }

          // I. Thu gọn / Mở rộng mục trong Sidebar (Cây thư mục)
          var sidebarItem = targetEl.closest('.VPSidebarItem.collapsible > .item');
          if (sidebarItem) {
            var section = sidebarItem.parentElement;
            section.classList.toggle('collapsed');
            return;
          }

          // J. Mở / Đóng menu dropdown trên Navbar (Desktop & Mobile)
          var flyoutBtn = targetEl.closest('.VPFlyout > .button, .VPFlyout .button');
          if (flyoutBtn) {
            var isExpanded = flyoutBtn.getAttribute('aria-expanded') === 'true';
            var allFlyouts = document.querySelectorAll('.VPFlyout > .button');
            for (var f = 0; f < allFlyouts.length; f++) {
              if (allFlyouts[f] !== flyoutBtn) {
                allFlyouts[f].setAttribute('aria-expanded', 'false');
              }
            }
            flyoutBtn.setAttribute('aria-expanded', !isExpanded);
            return;
          }

          // K. Đóng dropdown khi click ra ngoài
          if (!targetEl.closest('.VPFlyout')) {
            var openFlyouts = document.querySelectorAll('.VPFlyout > .button[aria-expanded="true"]');
            for (var k = 0; k < openFlyouts.length; k++) {
              openFlyouts[k].setAttribute('aria-expanded', 'false');
            }
          }

          // L. Nút "Lên đầu trang" trong VPLocalNavOutlineDropdown trên mobile
          var returnToTopBtn = targetEl.closest('.VPLocalNavOutlineDropdown button');
          if (returnToTopBtn) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            return;
          }

          // M. Bắt sự kiện click nút Copy Markdown
          var copyBtn = targetEl.closest('.copy-markdown-btn');
          if (copyBtn) {
            var rawEl = document.querySelector('.raw-markdown-content');
            if (rawEl) {
              try {
                var base64 = rawEl.textContent.trim();
                var binString = atob(base64);
                var bytes = Uint8Array.from(binString, function(m) { return m.codePointAt(0); });
                var rawText = new TextDecoder().decode(bytes);

                var doCopy = function(text) {
                  if (navigator.clipboard && window.isSecureContext) {
                    return navigator.clipboard.writeText(text);
                  } else {
                    var textarea = document.createElement('textarea');
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

                doCopy(rawText).then(function() {
                  var textSpan = copyBtn.querySelector('.copy-text');
                  var origText = textSpan ? textSpan.textContent : 'Sao chép Markdown';
                  copyBtn.classList.add('copied');
                  if (textSpan) textSpan.textContent = 'Đã sao chép!';
                  setTimeout(function() {
                    copyBtn.classList.remove('copied');
                    if (textSpan) textSpan.textContent = origText;
                  }, 2000);
                });
              } catch (err) {
                console.error('Lỗi khi sao chép raw markdown:', err);
              }
            }
            return;
          }

          // N. Bắt sự kiện click nút Hỏi AI (Mở ChatGPT & tự động điền prompt)
          var askAiBtn = targetEl.closest('.ask-ai-btn');
          if (askAiBtn) {
            var rawEl = document.querySelector('.raw-markdown-content');
            var rawText = '';
            if (rawEl) {
              try {
                var base64 = rawEl.textContent.trim();
                var binString = atob(base64);
                var bytes = Uint8Array.from(binString, function(m) { return m.codePointAt(0); });
                rawText = new TextDecoder().decode(bytes);
              } catch (err) {
                console.error('Lỗi giải mã raw markdown:', err);
              }
            }

            var productionBase = 'https://studying-docs.pages.dev';
            var cleanPath = window.location.pathname.replace(/\.html$/, '');
            var fullPublicUrl = productionBase + cleanPath;

            if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' && window.location.origin.indexOf('http') === 0) {
              fullPublicUrl = window.location.origin + cleanPath;
            }

            var targetPrompt = 'Hãy đọc nội dung từ đường dẫn sau và giải thích đơn giản, dễ hiểu nhưng vẫn đầy đủ, chi tiết:\\n' + fullPublicUrl;
            var chatGptLink = 'https://chatgpt.com/?hints=search&q=' + encodeURIComponent(targetPrompt);
            var clipboardText = targetPrompt + (rawText ? '\\n\\n---\\n' + rawText : '');

            if (clipboardText) {
              try {
                if (navigator.clipboard && window.isSecureContext) {
                  navigator.clipboard.writeText(clipboardText);
                }
              } catch (err) {}
            }

            var aiText = askAiBtn.querySelector('.ai-text');
            if (aiText) {
              var originalText = aiText.textContent;
              aiText.textContent = 'Đang mở ChatGPT...';
              askAiBtn.classList.add('opening');
              setTimeout(function() {
                aiText.textContent = originalText;
                askAiBtn.classList.remove('opening');
              }, 2500);
            }

            var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (isMobile) {
              window.location.href = chatGptLink;
            } else {
              window.open(chatGptLink, '_blank', 'noopener,noreferrer');
            }
            return;
          }
        }

        // Đăng ký ngay lập tức ở Capture Phase để chặn mọi điều hướng gốc trên iOS WebKit
        if (typeof document !== 'undefined') {
          document.addEventListener('click', handleGlobalClick, true);
        }

        // 5. Phím tắt Ctrl+B / Cmd+B và Enter cho link PWA standalone
        if (typeof document !== 'undefined') {
          document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key && e.key.toLowerCase() === 'b') {
              e.preventDefault();
              var isCollapsed = document.body.classList.toggle('sidebar-collapsed');
              storageSet('vp-sidebar-collapsed', isCollapsed ? 'true' : 'false');
              syncSidebarUI();
              return;
            }
            if (e.key === 'Enter' && e.target && e.target.getAttribute) {
              var spaTarget = e.target.closest && e.target.closest('[data-spa-href]');
              if (spaTarget) {
                var spaHref = spaTarget.getAttribute('data-spa-href');
                if (spaHref) {
                  e.preventDefault();
                  try {
                    var u = new URL(spaHref, window.location.href);
                    closeMobileDrawers();
                    navigateSpa(u.href, true);
                  } catch (err) {}
                }
              }
            }
          });
        }

        // 6. Tự động đóng mobile sidebar/menu khi thay đổi kích thước màn hình lên Desktop
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', function() {
            if (window.innerWidth >= 960) {
              closeMobileDrawers();
            }
          });
        }

        // --- Khởi tạo UI khi DOM sẵn sàng ---
        function initPageUi() {
          if (storageGet('vp-sidebar-collapsed') === 'true') {
            document.body.classList.add('sidebar-collapsed');
          }
          syncSidebarUI();
          syncDarkModeUI();
          var currentLang = readCurrentLang();
          updateLanguageUI(currentLang === 'en');
          neutralizeStandaloneLinks();
          protectTechnicalElements();
          renderMermaid();
        }

        // 6. Bảo vệ phần tử kỹ thuật (Code, Math, Mermaid) không bị dịch nhầm
        function protectTechnicalElements() {
          var els = document.querySelectorAll('pre, code, .mermaid, mjx-container, .mjx-chtml, .katex, div[class*="language-"]');
          for (var i = 0; i < els.length; i++) {
            els[i].classList.add('notranslate');
            els[i].setAttribute('translate', 'no');
          }
        }

        // 7. Tải & Render Mermaid trực tiếp từ CDN chỉ khi trang có sơ đồ
        function renderMermaid() {
          var diagrams = document.querySelectorAll('.mermaid');
          if (!diagrams.length) return;

          import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')
            .then(function(m) {
              var isDark = document.documentElement.classList.contains('dark');
              m.default.initialize({
                startOnLoad: false,
                theme: isDark ? 'dark' : 'default',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                securityLevel: 'loose'
              });
              m.default.run({ querySelector: '.mermaid' });
            })
            .catch(function(err) {
              console.error('Mermaid render error:', err);
            });
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initPageUi);
        } else {
          initPageUi();
        }

        // 8. Tự động re-render Mermaid & đồng bộ Dark Mode khi thuộc tính class thay đổi
        var observer = new MutationObserver(function(mutations) {
          for (var i = 0; i < mutations.length; i++) {
            if (mutations[i].attributeName === 'class') {
              renderMermaid();
              syncDarkModeUI();
              break;
            }
          }
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Đồng bộ lại UI và chuyển trang mượt mà khi người dùng bấm nút Back / Forward của trình duyệt
        window.addEventListener('popstate', function(e) {
          if (e.state && e.state.__spa) {
            navigateSpa(window.location.href, false);
          } else {
            syncDarkModeUI();
            syncSidebarUI();
            var currentLang = readCurrentLang();
            updateLanguageUI(currentLang === 'en');
          }
        });
      })();
      `
    ],

    // Dịch đoạn văn được chọn, hoạt động cả trong chế độ MPA production preview
    [
      'script',
      {},
      `
      (function() {
        var selectedText = '';
        var targetBlock = null;
        var translationElement = null;
        var menu = null;

        function getSelectedText() {
          var selection = window.getSelection();
          if (!selection || selection.isCollapsed || !selection.rangeCount) return '';

          var range = selection.getRangeAt(0);
          var node = range.commonAncestorContainer;
          var container = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
          var article = container && container.closest ? container.closest('.vp-doc') : null;
          if (!article || (container.closest && container.closest('pre, code, .mermaid, mjx-container, .notranslate'))) return '';

          return selection.toString().replace(/\\s+/g, ' ').trim().slice(0, 5000);
        }

        function closeMenu() {
          if (menu) {
            menu.remove();
            menu = null;
          }
        }

        function showMenuAt(x, y, text) {
          closeMenu();
          menu = document.createElement('div');
          menu.className = 'selection-translate-menu notranslate';
          menu.setAttribute('translate', 'no');
          menu.style.left = Math.max(8, Math.min(x, window.innerWidth - 220)) + 'px';
          menu.style.top = Math.max(8, Math.min(y, window.innerHeight - 70)) + 'px';

          var button = document.createElement('button');
          button.type = 'button';
          button.innerHTML = '<span aria-hidden="true">🌐</span> Translate to English';
          button.addEventListener('click', function() {
            closeMenu();
            translate(text);
          });
          menu.appendChild(button);
          document.body.appendChild(menu);
        }

        function showMenu(event, text) {
          showMenuAt(event.clientX, event.clientY, text);
        }

        function translate(source) {
          if (!source || !targetBlock) return;
          if (translationElement) translationElement.remove();

          translationElement = document.createElement('p');
          translationElement.className = 'selection-translation-inline notranslate';
          translationElement.setAttribute('translate', 'no');
          translationElement.textContent = 'Translating…';
          targetBlock.insertAdjacentElement('afterend', translationElement);

          fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(source) + '&langpair=vi|en', {
            headers: { Accept: 'application/json' }
          })
            .then(function(response) {
              if (!response.ok) throw new Error('The translation service returned an error.');
              return response.json();
            })
            .then(function(data) {
              var result = data && data.responseData && data.responseData.translatedText;
              if (!result || !result.trim()) throw new Error('No translation was returned.');
              translationElement.textContent = result.trim();
              translationElement.classList.add('is-complete');
            })
            .catch(function(error) {
              translationElement.textContent = error.message || 'Translation failed.';
              translationElement.classList.add('is-error');
            });
        }

        document.addEventListener('contextmenu', function(event) {
          var text = getSelectedText();
          if (!text) {
            closeMenu();
            return;
          }

          event.preventDefault();
          selectedText = text;
          var selection = window.getSelection();
          var anchor = selection && selection.anchorNode;
          var anchorElement = anchor && (anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : anchor);
          targetBlock = anchorElement && anchorElement.closest
            ? anchorElement.closest('p, li, blockquote, td, th')
            : null;
          showMenu(event, selectedText);
        });

        // Mobile browsers do not have a right-click event. Show the same action
        // after the user selects text with a long press.
        var mobileSelectionTimer = null;
        document.addEventListener('selectionchange', function() {
          if (window.innerWidth > 768) return;
          clearTimeout(mobileSelectionTimer);
          mobileSelectionTimer = setTimeout(function() {
            var text = getSelectedText();
            if (!text) {
              closeMenu();
              return;
            }

            var selection = window.getSelection();
            var anchor = selection && selection.anchorNode;
            var anchorElement = anchor && (anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : anchor);
            targetBlock = anchorElement && anchorElement.closest
              ? anchorElement.closest('p, li, blockquote, td, th')
              : null;
            if (!targetBlock || !selection.rangeCount) return;

            selectedText = text;
            var rect = selection.getRangeAt(0).getBoundingClientRect();
            showMenuAt(rect.left + (rect.width / 2) - 102, rect.bottom + 8, selectedText);
          }, 250);
        });

        document.addEventListener('click', function(event) {
          if (!event.target.closest || !event.target.closest('.selection-translate-menu')) closeMenu();
        });

        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') closeMenu();
        });
      })();
      `
    ],

    // Script khởi tạo Google Translate Engine
    [
      'script',
      {},
      `
      window.googleTranslateElementInit = function() {
        function init() {
          if (typeof google !== 'undefined' && google.translate) {
            var el = document.getElementById('google_translate_element');
            if (!el) {
              el = document.createElement('div');
              el.id = 'google_translate_element';
              el.style.display = 'none';
              document.body.appendChild(el);
            }
            new google.translate.TranslateElement({
              pageLanguage: 'vi',
              includedLanguages: 'en,vi',
              autoDisplay: false
            }, 'google_translate_element');
          }
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', init);
        } else {
          init();
        }
      };
      `
    ],
    [
      'script',
      {
        src: 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
        async: '',
        defer: ''
      }
    ],
  ],

  // Giới hạn luồng render song song
  buildConcurrency: 4,

  // Tối ưu hóa Vite build
  vite: {
    plugins: [
      {
        name: 'inject-raw-markdown',
        enforce: 'pre',
        transform(src, id) {
          const cleanId = id.split('?')[0];
          if (cleanId.endsWith('.md') && !cleanId.includes('node_modules')) {
            const base64 = Buffer.from(src, 'utf-8').toString('base64');
            return `${src}\n\n<div class="raw-markdown-content" style="display:none;" v-pre>${base64}</div>\n`;
          }
        },
      },
    ],
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        cache: false,
      },
    },
  },

  // Tự động map mọi README.md thành index.md của thư mục tương ứng
  rewrites(id) {
    if (id.endsWith('/README.md')) {
      return id.replace(/\/README\.md$/, '/index.md');
    }
    return id;
  },

  // Hỗ trợ công thức Toán học (MathJax / KaTeX) & Bộ tô màu Shiki
  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    languageAlias: {
      nasm: 'asm',
      assembly: 'asm',
      redis: 'shell',
      promql: 'sql',
      rego: 'go',
      wit: 'rust',
    },
    config: (md) => {
      // 1. Tự động gắn v-pre & bảo vệ không dịch (notranslate) cho toàn bộ inline code
      const defaultCodeInline =
        md.renderer.rules.code_inline ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options);
        };
      md.renderer.rules.code_inline = function (tokens, idx, options, env, self) {
        tokens[idx].attrSet('v-pre', '');
        tokens[idx].attrSet('translate', 'no');
        tokens[idx].attrJoin('class', 'notranslate');
        return defaultCodeInline(tokens, idx, options, env, self);
      };

      // 2. Tự động gắn v-pre & bảo vệ MathJax không bị dịch (tránh trùng lặp thuộc tính class)
      const patchMathJax = (rendered) => {
        let res = rendered.replace(/^<mjx-container /, '<mjx-container v-pre translate="no" ');
        if (res.includes('class="')) {
          res = res.replace(/class="/, 'class="notranslate ');
        } else {
          res = res.replace(/^<mjx-container /, '<mjx-container class="notranslate" ');
        }
        return res;
      };

      const defaultMathInline = md.renderer.rules.math_inline;
      if (defaultMathInline) {
        md.renderer.rules.math_inline = function (tokens, idx, options, env, self) {
          const rendered = defaultMathInline(tokens, idx, options, env, self);
          return patchMathJax(rendered);
        };
      }

      const defaultMathBlock = md.renderer.rules.math_block;
      if (defaultMathBlock) {
        md.renderer.rules.math_block = function (tokens, idx, options, env, self) {
          const rendered = defaultMathBlock(tokens, idx, options, env, self);
          return patchMathJax(rendered);
        };
      }

      // 3. Render Mermaid & Code blocks với thuộc tính notranslate
      const defaultFence = md.renderer.rules.fence.bind(md.renderer.rules);
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        if (token.info.trim() === 'mermaid' || token.info.trim() === 'mmd') {
          const escaped = token.content
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
          return `<pre class="mermaid notranslate" translate="no">\n${escaped}</pre>\n`;
        }
        tokens[idx].attrSet('translate', 'no');
        tokens[idx].attrJoin('class', 'notranslate');
        return defaultFence(tokens, idx, options, env, self);
      };
    },
  },

  themeConfig: {
    audioTracks: audioTracks,
    siteTitle: '📚 Study Docs',
    logo: { text: '🧠' },

    nav: autoNavbar,
    sidebar: autoSidebar,
    megaMenuData: megaMenuData,

    // Mục lục bài viết bên phải (On this page)
    outline: {
      level: [2, 3],
      label: 'Mục lục nội dung',
    },

    // Chân trang điều hướng
    docFooter: {
      prev: 'Bài trước',
      next: 'Bài tiếp theo',
    },

    darkModeSwitchLabel: 'Chế độ giao diện',
    sidebarMenuLabel: 'Danh mục',
    returnToTopLabel: 'Lên đầu trang',

    // Chân trang hiển thị thông báo miễn trừ trách nhiệm
    footer: {
      message: '⚠️ Lưu ý: Tất cả kiến thức do AI tạo ra, không đảm bảo tính chính xác tuyệt đối, chỉ mang tính chất tham khảo.',
      copyright: 'Tài liệu phục vụ mục đích nghiên cứu & học tập cá nhân',
    },
  },
});
