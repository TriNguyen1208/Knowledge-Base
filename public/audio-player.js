/**
 * Audio Player Controller for VitePress
 * Hỗ trợ chế độ MPA (Multi-Page App) & Tối ưu toàn diện cho Mobile (< 425px)
 */
(function () {
  'use strict';

  // Khởi tạo đối tượng Audio singleton toàn cục (tránh tạo nhiều audio instance)
  var audio = window.__STUDY_AUDIO__;
  if (!audio) {
    audio = new Audio();
    audio.preload = 'metadata';
    window.__STUDY_AUDIO__ = audio;
  }

  var tracks = window.__AUDIO_TRACKS__ || [];
  var currentIndex = 0;
  var isLoop = false;
  var isSeeking = false;
  var lastSavedTime = 0;

  function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) return '00:00';
    var totalSec = Math.floor(seconds);
    var min = Math.floor(totalSec / 60);
    var sec = totalSec % 60;
    return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function syncDOM() {
    var playerEl = document.getElementById('vp-audio-player');
    if (!playerEl) return;

    var track = tracks[currentIndex];
    if (track) {
      var titleEl = document.getElementById('audio-track-title');
      if (titleEl) {
        titleEl.textContent = track.title;
        titleEl.setAttribute('title', track.title);
      }
      var mobTitleEl = document.getElementById('mobile-track-title');
      if (mobTitleEl) {
        mobTitleEl.textContent = track.title;
        mobTitleEl.setAttribute('title', track.title);
      }
    }

    // Đồng bộ trạng thái Loop (cả Desktop & Mobile)
    var loopBtns = [
      document.getElementById('audio-btn-loop'),
      document.getElementById('mobile-btn-loop')
    ];
    loopBtns.forEach(function (btn) {
      if (!btn) return;
      if (isLoop) {
        btn.classList.add('active');
        btn.setAttribute('title', 'Đang lặp lại bài này (Click để tắt)');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('title', 'Lặp lại bài hát hiện tại (Click để bật)');
      }
    });

    // Đồng bộ trạng thái Đang phát & chuyển đổi hiển thị Icon Play / Pause
    var playBtns = [
      document.getElementById('audio-btn-play'),
      document.getElementById('mobile-btn-play')
    ];

    if (audio.paused) {
      playerEl.classList.remove('is-playing');
      playBtns.forEach(function (btn) {
        if (!btn) return;
        btn.classList.remove('is-playing');
        btn.setAttribute('title', 'Phát nhạc');
        btn.setAttribute('aria-label', 'Phát nhạc');
        var playIcon = btn.querySelector('.audio-icon-play');
        var pauseIcon = btn.querySelector('.audio-icon-pause');
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      });
    } else {
      playerEl.classList.add('is-playing');
      playBtns.forEach(function (btn) {
        if (!btn) return;
        btn.classList.add('is-playing');
        btn.setAttribute('title', 'Tạm dừng');
        btn.setAttribute('aria-label', 'Tạm dừng');
        var playIcon = btn.querySelector('.audio-icon-play');
        var pauseIcon = btn.querySelector('.audio-icon-pause');
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
      });
    }

    // Đồng bộ playlist highlight
    var items = document.querySelectorAll('.playlist-item');
    for (var i = 0; i < items.length; i++) {
      var idx = parseInt(items[i].getAttribute('data-index'), 10);
      if (idx === currentIndex) {
        items[i].classList.add('active');
      } else {
        items[i].classList.remove('active');
      }
    }

    // Đồng bộ thời lượng
    if (audio.duration && !isNaN(audio.duration)) {
      var durEl = document.getElementById('audio-time-dur');
      if (durEl) durEl.textContent = formatTime(audio.duration);
      var mobDurEl = document.getElementById('mobile-time-dur');
      if (mobDurEl) mobDurEl.textContent = formatTime(audio.duration);
    }
  }

  function loadTrack(index, autoPlay) {
    if (!tracks || !tracks.length) return;
    if (index < 0) index = tracks.length - 1;
    if (index >= tracks.length) index = 0;

    currentIndex = index;
    try {
      localStorage.setItem('study_audio_idx', currentIndex.toString());
    } catch (e) {}

    var track = tracks[currentIndex];
    if (!track) return;

    var targetSrc = track.src;
    var currentSrc = audio.src;
    if (!currentSrc || !currentSrc.endsWith(encodeURI(track.file))) {
      audio.src = targetSrc;
      audio.load();
    }

    syncDOM();

    if (autoPlay) {
      var playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(function (err) {
          console.warn('Tự động phát bị chặn bởi chính sách trình duyệt:', err);
        });
      }
    }
  }

  function playPrev() {
    if (!tracks || !tracks.length) return;
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      audio.play().catch(function () {});
      return;
    }
    loadTrack(currentIndex - 1, true);
  }

  function playNext(auto) {
    if (!tracks || !tracks.length) return;
    loadTrack(currentIndex + 1, true);
  }

  function togglePlay() {
    if (!tracks || !tracks.length) return;
    if (audio.paused) {
      if (!audio.src || audio.src === '' || audio.src === window.location.href) {
        loadTrack(currentIndex, true);
      } else {
        audio.play().catch(function (err) {
          console.warn('Không thể phát nhạc:', err);
        });
      }
    } else {
      audio.pause();
    }
  }

  function toggleLoop() {
    isLoop = !isLoop;
    try {
      localStorage.setItem('study_audio_loop', isLoop ? 'true' : 'false');
    } catch (e) {}
    syncDOM();
  }

  function togglePlaylist(forceClose) {
    var popup = document.getElementById('audio-playlist-popup');
    if (!popup) return;
    if (forceClose === true) {
      popup.classList.remove('open');
    } else {
      popup.classList.toggle('open');
    }
  }

  // --- Lắng nghe các sự kiện của Audio Element ---
  audio.addEventListener('timeupdate', function () {
    if (isSeeking) return;

    var curTime = audio.currentTime;
    var duration = audio.duration;

    // Desktop
    var curEl = document.getElementById('audio-time-cur');
    var durEl = document.getElementById('audio-time-dur');
    var fillEl = document.getElementById('audio-progress-fill');
    var sliderEl = document.getElementById('audio-seek-slider');

    // Mobile
    var mobCurEl = document.getElementById('mobile-time-cur');
    var mobDurEl = document.getElementById('mobile-time-dur');
    var mobFillEl = document.getElementById('mobile-seek-fill');
    var mobSliderEl = document.getElementById('mobile-seek-slider');

    var timeText = formatTime(curTime);
    if (curEl) curEl.textContent = timeText;
    if (mobCurEl) mobCurEl.textContent = timeText;

    if (duration && !isNaN(duration) && duration > 0) {
      var pct = (curTime / duration) * 100;
      if (pct > 100) pct = 100;

      if (fillEl) fillEl.style.width = pct + '%';
      if (sliderEl) sliderEl.value = pct;

      if (mobFillEl) mobFillEl.style.width = pct + '%';
      if (mobSliderEl) mobSliderEl.value = pct;

      var durText = formatTime(duration);
      if (durEl && durEl.textContent === '00:00') durEl.textContent = durText;
      if (mobDurEl && mobDurEl.textContent === '00:00') mobDurEl.textContent = durText;
    }

    // Lưu lại thời gian phát (throttle mỗi 1 giây)
    var now = Math.floor(curTime);
    if (now !== lastSavedTime) {
      lastSavedTime = now;
      try {
        localStorage.setItem('study_audio_time', curTime.toString());
      } catch (e) {}
    }
  });

  audio.addEventListener('loadedmetadata', function () {
    if (audio.duration && !isNaN(audio.duration)) {
      var durText = formatTime(audio.duration);
      var durEl = document.getElementById('audio-time-dur');
      if (durEl) durEl.textContent = durText;
      var mobDurEl = document.getElementById('mobile-time-dur');
      if (mobDurEl) mobDurEl.textContent = durText;
    }
  });

  audio.addEventListener('ended', function () {
    if (isLoop) {
      audio.currentTime = 0;
      audio.play().catch(function () {});
    } else {
      playNext(true);
    }
  });

  audio.addEventListener('play', function () {
    try {
      localStorage.setItem('study_audio_playing', 'true');
    } catch (e) {}
    syncDOM();
  });

  audio.addEventListener('pause', function () {
    try {
      localStorage.setItem('study_audio_playing', 'false');
    } catch (e) {}
    syncDOM();
  });

  // --- Khởi tạo và liên kết sự kiện UI ---
  function init() {
    if (!tracks || !tracks.length) {
      if (window.__AUDIO_TRACKS__ && window.__AUDIO_TRACKS__.length) {
        tracks = window.__AUDIO_TRACKS__;
      }
    }

    try {
      var savedIdx = parseInt(localStorage.getItem('study_audio_idx') || '0', 10);
      if (!isNaN(savedIdx) && savedIdx >= 0 && savedIdx < tracks.length) {
        currentIndex = savedIdx;
      }
      isLoop = localStorage.getItem('study_audio_loop') === 'true';
    } catch (e) {}

    var currentTrack = tracks[currentIndex];
    if (currentTrack && (!audio.src || audio.src === '' || audio.src === window.location.href)) {
      audio.src = currentTrack.src;
      try {
        var savedTime = parseFloat(localStorage.getItem('study_audio_time') || '0');
        if (savedTime > 0) {
          audio.currentTime = savedTime;
        }
      } catch (e) {}
    }

    syncDOM();

    try {
      var wasPlaying = localStorage.getItem('study_audio_playing') === 'true';
      if (wasPlaying && audio.paused) {
        var p = audio.play();
        if (p !== undefined) {
          p.catch(function () {});
        }
      }
    } catch (e) {}
  }

  // --- Lắng nghe sự kiện tương tác trên toàn document (Event Delegation) ---
  document.addEventListener('click', function (e) {
    // 1. Nút Prev (Desktop + Mobile)
    if (e.target.closest('#audio-btn-prev, #mobile-btn-prev')) {
      e.preventDefault();
      playPrev();
      return;
    }

    // 2. Nút Play / Pause (Desktop + Mobile)
    if (e.target.closest('#audio-btn-play, #mobile-btn-play')) {
      e.preventDefault();
      togglePlay();
      return;
    }

    // 3. Nút Next (Desktop + Mobile)
    if (e.target.closest('#audio-btn-next, #mobile-btn-next')) {
      e.preventDefault();
      playNext();
      return;
    }

    // 4. Nút Loop (Desktop + Mobile)
    if (e.target.closest('#audio-btn-loop, #mobile-btn-loop')) {
      e.preventDefault();
      toggleLoop();
      return;
    }

    // 5. Nút Menu mở Playlist
    if (e.target.closest('#audio-btn-menu')) {
      e.preventDefault();
      togglePlaylist();
      return;
    }

    // 6. Nút Đóng Playlist
    if (e.target.closest('#audio-playlist-close')) {
      e.preventDefault();
      togglePlaylist(true);
      return;
    }

    // 7. Chọn bài trong Playlist
    var item = e.target.closest('.playlist-item');
    if (item) {
      e.preventDefault();
      var idx = parseInt(item.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        loadTrack(idx, true);
        // Trên mobile không cần đóng vội để người dùng có thể nghe tiếp hoặc xem tiến trình
        if (window.innerWidth > 425) {
          togglePlaylist(true);
        }
      }
      return;
    }

    // 8. Click ngoài Playlist Popup -> Tự động đóng
    if (!e.target.closest('.audio-menu-wrapper') && !e.target.closest('#audio-playlist-popup')) {
      togglePlaylist(true);
    }
  });

  // --- Lắng nghe sự kiện tua thời gian (Seek Slider) Desktop + Mobile ---
  function bindSeekEvents() {
    function setupSlider(sliderId, fillId, curId) {
      var slider = document.getElementById(sliderId);
      if (!slider) return;

      slider.addEventListener('input', function () {
        isSeeking = true;
        var val = parseFloat(slider.value);
        var fillEl = document.getElementById(fillId);
        var curEl = document.getElementById(curId);
        if (fillEl) fillEl.style.width = val + '%';
        if (audio.duration && curEl) {
          curEl.textContent = formatTime((val / 100) * audio.duration);
        }
      });

      slider.addEventListener('change', function () {
        isSeeking = false;
        var val = parseFloat(slider.value);
        if (audio.duration) {
          audio.currentTime = (val / 100) * audio.duration;
        }
      });
    }

    setupSlider('audio-seek-slider', 'audio-progress-fill', 'audio-time-cur');
    setupSlider('mobile-seek-slider', 'mobile-seek-fill', 'mobile-time-cur');
  }

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
      bindSeekEvents();
    });
  } else {
    init();
    bindSeekEvents();
  }

  // Dự phòng khi chuyển trang bằng pushState / popstate
  window.addEventListener('popstate', function () {
    setTimeout(function () {
      syncDOM();
      bindSeekEvents();
    }, 50);
  });
})();
