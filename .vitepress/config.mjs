import { defineConfig } from 'vitepress';
import { generateAutoSidebar, generateAutoNavbar, generateMegaMenuData } from './sidebar.mjs';

const autoSidebar = generateAutoSidebar('.');
const autoNavbar = generateAutoNavbar('.');
const megaMenuData = generateMegaMenuData('.');

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
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'StudyDocs' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],

    // Script tương tác client siêu nhẹ cho chế độ MPA: Quản lý Sidebar, Dark Mode, Ngôn ngữ & Mermaid
    [
      'script',
      {},
      `
      (function() {
        // 1. Phục hồi trạng thái Sidebar đã lưu trước khi render giao diện
        if (typeof localStorage !== 'undefined' && localStorage.getItem('vp-sidebar-collapsed') === 'true') {
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
          if (typeof localStorage !== 'undefined') {
            var saved = localStorage.getItem('study_doc_lang');
            if (saved === 'en') return 'en';
          }
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

        // --- Khởi tạo khi DOM đã sẵn sàng ---
        document.addEventListener('DOMContentLoaded', function() {
          // 1. Phục hồi trạng thái Sidebar
          if (localStorage.getItem('vp-sidebar-collapsed') === 'true') {
            document.body.classList.add('sidebar-collapsed');
          }
          syncSidebarUI();

          // 2. Đồng bộ trạng thái Dark Mode
          syncDarkModeUI();

          // 3. Đồng bộ trạng thái Ngôn ngữ
          var currentLang = readCurrentLang();
          updateLanguageUI(currentLang === 'en');

          // 4. Bắt các sự kiện click tương tác
          document.addEventListener('click', function(e) {
            // A. Đổi giao diện Sáng / Tối (Dark / Light Mode)
            var themeBtn = e.target.closest('.VPSwitchAppearance');
            if (themeBtn) {
              var isDark = document.documentElement.classList.toggle('dark');
              localStorage.setItem('vitepress-theme-appearance', isDark ? 'dark' : 'light');
              syncDarkModeUI();
              return;
            }

            // B. Đổi Ngôn ngữ (Language Switcher)
            var langBtn = e.target.closest('.lang-toggle-btn');
            if (langBtn) {
              if (langBtn.classList.contains('is-loading')) return;
              langBtn.classList.add('is-loading');

              var cur = readCurrentLang();
              var targetLang = cur === 'en' ? 'vi' : 'en';

              if (typeof localStorage !== 'undefined') {
                localStorage.setItem('study_doc_lang', targetLang);
              }

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
            var sidebarBtn = e.target.closest('.sidebar-toggle-btn');
            if (sidebarBtn) {
              var isCollapsed = document.body.classList.toggle('sidebar-collapsed');
              localStorage.setItem('vp-sidebar-collapsed', isCollapsed ? 'true' : 'false');
              syncSidebarUI();
              return;
            }

            // D. Bật / Tắt Sidebar trên Mobile (Nút "Danh mục" trong VPLocalNav)
            var localNavBtn = e.target.closest('.VPLocalNav .menu');
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
            var backdropEl = e.target.closest('.VPBackdrop');
            if (backdropEl) {
              var sidebar = document.querySelector('.VPSidebar');
              if (sidebar) sidebar.classList.remove('open');
              backdropEl.style.display = 'none';

              var localNavBtn = document.querySelector('.VPLocalNav .menu');
              if (localNavBtn) localNavBtn.setAttribute('aria-expanded', 'false');

              document.body.classList.remove('nav-screen-open');
              var hamburger = document.querySelector('.VPNavBarHamburger');
              if (hamburger) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
              }

              document.body.style.overflow = '';
              return;
            }

            // F. Click link bên trong Sidebar trên mobile để tự động đóng drawer
            if (e.target.closest('.VPSidebar a')) {
              if (window.innerWidth < 960) {
                var sidebar = document.querySelector('.VPSidebar');
                if (sidebar) sidebar.classList.remove('open');
                var backdrop = document.querySelector('.VPBackdrop');
                if (backdrop) backdrop.style.display = 'none';
                var localNavBtn = document.querySelector('.VPLocalNav .menu');
                if (localNavBtn) localNavBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
              }
            }

            // G. Bật / Tắt Menu Navbar trên Mobile (Nút 3 gạch hamburger)
            var hamburgerBtn = e.target.closest('.VPNavBarHamburger');
            if (hamburgerBtn) {
              var isOpen = document.body.classList.toggle('nav-screen-open');
              hamburgerBtn.classList.toggle('active', isOpen);
              hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
              document.body.style.overflow = isOpen ? 'hidden' : '';
              return;
            }

            // H. Click link trong Mobile Navbar Menu để đóng menu
            if (e.target.closest('.VPNavBarMenu a') && document.body.classList.contains('nav-screen-open')) {
              document.body.classList.remove('nav-screen-open');
              var hamburger = document.querySelector('.VPNavBarHamburger');
              if (hamburger) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
              }
              document.body.style.overflow = '';
            }

            // I. Thu gọn / Mở rộng mục trong Sidebar (Cây thư mục)
            var sidebarItem = e.target.closest('.VPSidebarItem.collapsible > .item');
            if (sidebarItem) {
              var section = sidebarItem.parentElement;
              section.classList.toggle('collapsed');
              return;
            }

            // J. Mở / Đóng menu dropdown trên Navbar (Desktop & Mobile)
            var flyoutBtn = e.target.closest('.VPFlyout > .button, .VPFlyout .button');
            if (flyoutBtn) {
              var isExpanded = flyoutBtn.getAttribute('aria-expanded') === 'true';
              // Đóng tất cả các flyout khác trước khi toggle
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
            if (!e.target.closest('.VPFlyout')) {
              var openFlyouts = document.querySelectorAll('.VPFlyout > .button[aria-expanded="true"]');
              for (var k = 0; k < openFlyouts.length; k++) {
                openFlyouts[k].setAttribute('aria-expanded', 'false');
              }
            }

            // L. Nút "Lên đầu trang" trong VPLocalNavOutlineDropdown trên mobile
            var returnToTopBtn = e.target.closest('.VPLocalNavOutlineDropdown button');
            if (returnToTopBtn) {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              return;
            }

            // M. Bắt sự kiện click nút Copy Markdown
            var copyBtn = e.target.closest('.copy-markdown-btn');
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
          });

          // 5. Phím tắt Ctrl+B hoặc Cmd+B để Bật/Tắt Sidebar
          document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
              e.preventDefault();
              var isCollapsed = document.body.classList.toggle('sidebar-collapsed');
              localStorage.setItem('vp-sidebar-collapsed', isCollapsed ? 'true' : 'false');
              syncSidebarUI();
            }
          });

          // 6. Tự động đóng mobile sidebar/menu khi thay đổi kích thước màn hình lên Desktop
          window.addEventListener('resize', function() {
            if (window.innerWidth >= 960) {
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
          });
        });

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
          document.addEventListener('DOMContentLoaded', function() {
            protectTechnicalElements();
            renderMermaid();
          });
        } else {
          protectTechnicalElements();
          renderMermaid();
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

        // Đồng bộ lại UI nếu có navigation trong chế độ dev SPA
        window.addEventListener('popstate', function() {
          syncDarkModeUI();
          syncSidebarUI();
          var currentLang = readCurrentLang();
          updateLanguageUI(currentLang === 'en');
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
