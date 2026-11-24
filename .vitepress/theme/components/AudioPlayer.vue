<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

const { theme } = useData();
const tracks = computed(() => theme.value.audioTracks || []);
const initialTrack = computed(() => tracks.value[0] || { title: 'Đang tải nhạc...' });
</script>

<template>
  <div class="vp-audio-player" id="vp-audio-player" aria-label="Trình phát nhạc nền">
    <!-- Nút điều khiển chính trên Navbar -->
    <div class="audio-controls-bar">
      <!-- Nút bài trước (Prev) -->
      <button
        type="button"
        class="audio-btn audio-btn-prev"
        id="audio-btn-prev"
        title="Bài trước"
        aria-label="Bài trước"
      >
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
          <polygon points="19 20 9 12 19 4 19 20" />
          <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>

      <!-- Nút Phát / Tạm dừng (Play / Pause) -->
      <button
        type="button"
        class="audio-btn audio-btn-play"
        id="audio-btn-play"
        title="Phát nhạc"
        aria-label="Phát hoặc Tạm dừng nhạc"
      >
        <!-- Icon Play (khi tạm dừng) -->
        <svg class="audio-icon-play" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
          <polygon points="8 5 19 12 8 19" />
        </svg>
        <!-- Icon Pause (khi đang phát) -->
        <svg class="audio-icon-pause" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
          <rect x="6" y="5" width="4" height="14" rx="1.5" />
          <rect x="14" y="5" width="4" height="14" rx="1.5" />
        </svg>
      </button>

      <!-- Nút bài tiếp theo (Next) -->
      <button
        type="button"
        class="audio-btn audio-btn-next"
        id="audio-btn-next"
        title="Bài tiếp theo"
        aria-label="Bài tiếp theo"
      >
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
          <polygon points="5 4 15 12 5 20 5 4" />
          <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>

      <!-- Khung hiển thị thông tin bài hát và thanh thời lượng (Desktop / Màn hình lớn) -->
      <div class="audio-track-info-wrap">
        <div class="audio-title-line">
          <span class="audio-note-icon">🎵</span>
          <span class="audio-track-title" id="audio-track-title" :title="initialTrack.title">
            {{ initialTrack.title }}
          </span>
        </div>

        <div class="audio-progress-section">
          <span class="audio-time audio-time-cur" id="audio-time-cur">00:00</span>
          
          <div class="audio-progress-container" id="audio-progress-container">
            <div class="audio-progress-track">
              <div class="audio-progress-fill" id="audio-progress-fill" style="width: 0%;"></div>
            </div>
            <input
              type="range"
              class="audio-seek-slider"
              id="audio-seek-slider"
              min="0"
              max="100"
              value="0"
              step="0.1"
              title="Kéo hoặc click để tua nhạc"
              aria-label="Thanh tua thời gian bài hát"
            />
          </div>

          <span class="audio-time audio-time-dur" id="audio-time-dur">00:00</span>
        </div>
      </div>

      <!-- Nút Lặp lại bài hát hiện tại (Loop / Repeat) -->
      <button
        type="button"
        class="audio-btn audio-btn-loop"
        id="audio-btn-loop"
        title="Bật/Tắt lặp lại bài hát hiện tại"
        aria-label="Lặp lại bài hát hiện tại"
      >
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
        <span class="loop-badge">1</span>
      </button>

      <!-- Nút Mở Menu chọn bài (Playlist Menu) -->
      <div class="audio-menu-wrapper">
        <button
          type="button"
          class="audio-btn audio-btn-menu"
          id="audio-btn-menu"
          title="Danh sách bài hát"
          aria-label="Mở danh sách bài hát"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </button>

        <!-- Dropdown Popup danh sách bài hát & Trình phát chi tiết cho Mobile -->
        <div class="audio-playlist-popup" id="audio-playlist-popup">
          <div class="playlist-header">
            <span class="playlist-heading">
              🎧 Trình phát nhạc <span class="playlist-count">({{ tracks.length }})</span>
            </span>
            <button type="button" class="playlist-close-btn" id="audio-playlist-close" title="Đóng danh sách">✕</button>
          </div>

          <!-- Bảng điều khiển tích hợp cho Mobile (< 425px) -->
          <div class="mobile-player-panel" id="mobile-player-panel">
            <div class="mobile-track-meta">
              <span class="mobile-note-icon">🎵</span>
              <span class="mobile-track-title" id="mobile-track-title" :title="initialTrack.title">
                {{ initialTrack.title }}
              </span>
            </div>

            <!-- Thanh tua nhạc trên mobile -->
            <div class="mobile-progress-row">
              <span class="mobile-time mobile-time-cur" id="mobile-time-cur">00:00</span>
              <div class="mobile-seek-container" id="mobile-seek-container">
                <div class="mobile-seek-track">
                  <div class="mobile-seek-fill" id="mobile-seek-fill" style="width: 0%;"></div>
                </div>
                <input
                  type="range"
                  class="mobile-seek-slider"
                  id="mobile-seek-slider"
                  min="0"
                  max="100"
                  value="0"
                  step="0.1"
                  aria-label="Tua thời gian bài hát trên mobile"
                />
              </div>
              <span class="mobile-time mobile-time-dur" id="mobile-time-dur">00:00</span>
            </div>

            <!-- Nút điều khiển đầy đủ trên mobile -->
            <div class="mobile-ctrl-row">
              <button type="button" class="mobile-ctrl-btn" id="mobile-btn-prev" title="Bài trước" aria-label="Bài trước">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <polygon points="19 20 9 12 19 4 19 20" />
                  <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </button>

              <button type="button" class="mobile-ctrl-btn mobile-play-btn" id="mobile-btn-play" title="Phát/Tạm dừng" aria-label="Phát hoặc Tạm dừng">
                <svg class="audio-icon-play" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <polygon points="8 5 19 12 8 19" />
                </svg>
                <svg class="audio-icon-pause" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1.5" />
                  <rect x="14" y="5" width="4" height="14" rx="1.5" />
                </svg>
              </button>

              <button type="button" class="mobile-ctrl-btn" id="mobile-btn-next" title="Bài tiếp" aria-label="Bài tiếp theo">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <polygon points="5 4 15 12 5 20 5 4" />
                  <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </button>

              <button type="button" class="mobile-ctrl-btn mobile-loop-btn" id="mobile-btn-loop" title="Lặp lại bài hát" aria-label="Lặp lại bài hát">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="17 1 21 5 17 9" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                  <polyline points="7 23 3 19 7 15" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
                <span class="loop-badge">1</span>
              </button>
            </div>
          </div>

          <!-- Danh sách bài hát -->
          <div class="playlist-subheading">Chọn bài hát:</div>
          <ul class="playlist-items" id="audio-playlist-items">
            <li
              v-for="(t, idx) in tracks"
              :key="idx"
              class="playlist-item"
              :data-index="idx"
              :class="{ active: idx === 0 }"
            >
              <div class="playlist-item-left">
                <span class="playlist-index">{{ idx + 1 }}</span>
                <span class="playlist-item-title">{{ t.title }}</span>
              </div>
              <div class="playlist-equalizer">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ========================================================
   Khung chứa tổng thể: Cố định tuyệt đối chiều cao & căn giữa
   ======================================================== */
.vp-audio-player {
  position: relative;
  display: flex;
  align-items: center;
  height: var(--vp-nav-height);
  user-select: none;
  font-family: var(--vp-font-family-base);
  pointer-events: auto !important;
  z-index: 25;
  box-sizing: border-box;
}

.vp-audio-player::before {
  content: "";
  display: inline-block;
  width: 1px;
  height: 20px;
  margin: 0 10px;
  background-color: var(--vp-c-divider);
  flex-shrink: 0;
}

/* ========================================================
   Thanh điều khiển (Bar): Cố định chiều cao 34px không co giật
   ======================================================== */
.audio-controls-bar {
  display: flex;
  align-items: center;
  height: 50px;
  max-height: 50px;
  gap: 5px;
  padding: 0 8px;
  border-radius: 17px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.dark .audio-controls-bar {
  background-color: rgba(30, 41, 59, 0.65);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.audio-controls-bar:hover {
  border-color: var(--vp-c-brand-1);
}

/* ========================================================
   Nút bấm điều khiển: Kích thước đồng đều 28x28px, căn giữa chuẩn
   Không dùng transform scale để tránh lệch tâm hoặc giật giao diện
   ======================================================== */
.audio-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  line-height: 1;
  box-sizing: border-box;
}

.audio-btn svg {
  display: block;
  margin: auto;
  flex-shrink: 0;
  pointer-events: none;
}

.audio-btn:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-mute);
}

/* Nút Play / Pause */
.audio-btn-play {
  background-color: var(--vp-c-brand-1);
  color: #ffffff !important;
}

.audio-btn-play:hover {
  background-color: var(--vp-c-brand-2);
  color: #ffffff !important;
}

/* Chuyển đổi trạng thái Play / Pause icon */
.audio-icon-pause {
  display: none;
}

.audio-icon-play {
  display: block;
}

.vp-audio-player.is-playing .audio-icon-play,
.audio-btn-play.is-playing .audio-icon-play,
.mobile-play-btn.is-playing .audio-icon-play {
  display: none !important;
}

.vp-audio-player.is-playing .audio-icon-pause,
.audio-btn-play.is-playing .audio-icon-pause,
.mobile-play-btn.is-playing .audio-icon-pause {
  display: block !important;
}

/* Nút Loop */
.audio-btn-loop {
  position: relative;
}

.loop-badge {
  position: absolute;
  top: 1px;
  right: 1px;
  font-size: 8px;
  font-weight: 700;
  line-height: 1;
  color: var(--vp-c-brand-1);
  display: none;
  pointer-events: none;
}

.audio-btn-loop.active,
.mobile-loop-btn.active {
  color: var(--vp-c-brand-1) !important;
  background-color: var(--vp-c-brand-soft);
}

.audio-btn-loop.active .loop-badge,
.mobile-loop-btn.active .loop-badge {
  display: block;
}

/* ========================================================
   Khu vực Thông tin bài hát & Thanh thời lượng (Desktop)
   ======================================================== */
.audio-track-info-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
  min-width: 130px;
  max-width: 180px;
  padding: 0 4px;
  box-sizing: border-box;
  overflow: hidden;
}

.audio-title-line {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 14px;
  line-height: 14px;
  margin-bottom: 2px;
}

.audio-note-icon {
  font-size: 11px;
  line-height: 1;
  flex-shrink: 0;
}

.audio-track-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 155px;
  line-height: 1;
}

/* Thanh thời lượng & tua nhạc */
.audio-progress-section {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 14px;
  line-height: 14px;
}

.audio-time {
  font-size: 9.5px;
  font-family: var(--vp-font-family-mono);
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
  letter-spacing: -0.2px;
  flex-shrink: 0;
  min-width: 28px;
  text-align: center;
  line-height: 1;
}

.audio-progress-container {
  position: relative;
  flex-grow: 1;
  height: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.audio-progress-track {
  position: relative;
  width: 100%;
  height: 3.5px;
  border-radius: 2px;
  background-color: var(--vp-c-bg-mute);
  overflow: hidden;
}

.dark .audio-progress-track {
  background-color: rgba(255, 255, 255, 0.12);
}

.audio-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transition: width 0.08s linear;
}

.audio-seek-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  margin: 0;
  padding: 0;
  z-index: 2;
}

/* ========================================================
   Playlist Menu Wrapper & Dropdown Popup
   ======================================================== */
.audio-menu-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.audio-playlist-popup {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 290px;
  max-height: 420px;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  display: none;
  flex-direction: column;
  overflow: hidden;
  z-index: 100;
  animation: audioPopupIn 0.16s cubic-bezier(0.16, 1, 0.3, 1);
}

.audio-playlist-popup.open {
  display: flex !important;
}

@keyframes audioPopupIn {
  from {
    opacity: 0;
    transform: translateY(-4px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.playlist-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.playlist-heading {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.playlist-count {
  font-weight: 500;
  color: var(--vp-c-text-3);
  font-size: 12px;
}

.playlist-close-btn {
  border: none;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  font-size: 13px;
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.playlist-close-btn:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-mute);
}

.playlist-subheading {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--vp-c-text-3);
  padding: 8px 14px 2px;
}

.playlist-items {
  list-style: none;
  margin: 0;
  padding: 4px 0 8px;
  overflow-y: auto;
  max-height: 240px;
}

.playlist-items::-webkit-scrollbar {
  width: 5px;
}
.playlist-items::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 4px;
}

.playlist-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  font-size: 12.5px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.playlist-item:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.playlist-item.active {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.playlist-item-left {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.playlist-index {
  font-size: 11px;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-3);
  min-width: 14px;
}

.playlist-item.active .playlist-index {
  color: var(--vp-c-brand-1);
}

.playlist-item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Equalizer sóng nhạc */
.playlist-equalizer {
  display: none;
  align-items: flex-end;
  gap: 2px;
  height: 12px;
  flex-shrink: 0;
}

.playlist-item.active .playlist-equalizer {
  display: flex;
}

.playlist-equalizer span {
  width: 2.5px;
  height: 100%;
  background-color: var(--vp-c-brand-1);
  border-radius: 1px;
  animation: eqWave 0.8s ease-in-out infinite alternate;
}

.playlist-equalizer span:nth-child(1) { animation-delay: 0.1s; }
.playlist-equalizer span:nth-child(2) { animation-delay: 0.3s; }
.playlist-equalizer span:nth-child(3) { animation-delay: 0.2s; }

@keyframes eqWave {
  0% { height: 3px; }
  100% { height: 12px; }
}

/* ========================================================
   Bảng điều khiển cho Mobile bên trong Popup (< 425px)
   ======================================================== */
.mobile-player-panel {
  display: none;
  padding: 12px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.mobile-track-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
}

.mobile-note-icon {
  font-size: 13px;
  flex-shrink: 0;
}

.mobile-track-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mobile-progress-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.mobile-time {
  font-size: 10px;
  font-family: var(--vp-font-family-mono);
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text-3);
  min-width: 30px;
  text-align: center;
}

.mobile-seek-container {
  position: relative;
  flex-grow: 1;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.mobile-seek-track {
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: var(--vp-c-bg-mute);
  overflow: hidden;
}

.dark .mobile-seek-track {
  background-color: rgba(255, 255, 255, 0.15);
}

.mobile-seek-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  transition: width 0.08s linear;
}

.mobile-seek-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  margin: 0;
  padding: 0;
  z-index: 3;
}

.mobile-ctrl-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.mobile-ctrl-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.mobile-play-btn {
  width: 38px;
  height: 38px;
  background-color: var(--vp-c-brand-1);
  color: #ffffff !important;
  border: none;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
}

.mobile-play-btn:hover {
  background-color: var(--vp-c-brand-2);
}

/* ========================================================
   Responsive Breakpoints
   - <= 1024px: Thu gọn giống kiểu 768px (Ẩn thanh thời lượng trên Navbar)
   - <= 768px: Giữ Prev, Play, Next, Menu
   - < 425px: Dành riêng cho màn hình điện thoại siêu nhỏ (iPhone/Android < 425px)
   ======================================================== */
@media (max-width: 1024px) {
  .audio-track-info-wrap {
    display: none !important;
  }
  .audio-controls-bar {
    padding: 0 6px;
    gap: 4px;
  }
}

@media (max-width: 768px) {
  .audio-btn-loop {
    display: none !important;
  }
  .vp-audio-player::before {
    margin: 0 6px;
  }
}

@media (max-width: 425px) {
  /* =======================================================
     GIẢI PHÁP CHO ĐIỆN THOẠI < 425px:
     1. Trên Navbar: Chỉ hiện Pill siêu gọn [Play] [Menu] (chỉ ~58px),
        không bao giờ bị tràn Navbar trên bất kỳ màn hình nào.
     2. Khi bấm [Menu]: Mở Modal Popup nổi toàn diện ở gần đáy màn hình,
        tích hợp đầy đủ thông tin, thanh tua nhạc & nút điều khiển.
     ======================================================= */
  .vp-audio-player::before {
    margin: 0 4px;
    height: 16px;
  }

  .audio-controls-bar {
    padding: 0 4px;
    gap: 3px;
    height: 30px;
    border-radius: 15px;
  }

  .audio-btn {
    width: 26px;
    height: 26px;
    min-width: 26px;
    min-height: 26px;
  }

  /* Ẩn các nút phụ trên Navbar hẹp */
  .audio-btn-prev,
  .audio-btn-next,
  .audio-btn-loop,
  .audio-track-info-wrap {
    display: none !important;
  }

  /* Chỉ hiển thị Play và Menu trên Navbar mobile */
  .audio-btn-play,
  .audio-btn-menu {
    display: flex !important;
  }

  /* Popup chuyển thành Mobile Modal nổi ở đáy màn hình */
  .audio-playlist-popup {
    position: fixed !important;
    top: auto !important;
    bottom: 20px !important;
    left: 12px !important;
    right: 12px !important;
    width: auto !important;
    max-width: calc(100vw - 24px) !important;
    max-height: 80vh !important;
    border-radius: 16px !important;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4) !important;
    z-index: 9999 !important;
  }

  /* Kích hoạt bảng điều khiển tích hợp trên Mobile */
  .mobile-player-panel {
    display: block !important;
  }

  .playlist-items {
    max-height: 180px;
  }
}
</style>
