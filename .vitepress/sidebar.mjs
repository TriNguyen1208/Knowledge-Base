import fs from 'node:fs';
import path from 'node:path';

const SUBJECT_META = {
  'Studying-Artificial-Intelligence': {
    domainTitle: '🧠 Trí tuệ Nhân tạo',
    displayName: '🧠 Trí tuệ Nhân tạo (AI)',
    shortLabel: 'AI',
  },
  'Studying-Computer-Science': {
    domainTitle: '💻 Khoa học Máy tính',
    displayName: '💻 Khoa học Máy tính (CS)',
    shortLabel: 'CS',
  },
  'Studying-Economic': {
    domainTitle: '📊 Kinh tế học',
    displayName: '📊 Kinh tế học (Economics)',
    shortLabel: 'ECON',
  },
  'Studying-Life-Skill': {
    domainTitle: '🌱 Kỹ năng sống',
    displayName: '🌱 Kỹ năng sống (Life Skills)',
    shortLabel: 'LIFE',
  },
};

function getSubjectMeta(name) {
  return (
    SUBJECT_META[name] ?? {
      domainTitle: `📚 ${formatTitle(name)}`,
      displayName: `📚 ${formatTitle(name)}`,
      shortLabel: formatTitle(name),
    }
  );
}

/**
 * Làm sạch tên hiển thị của folder/file
 */
export function formatTitle(rawName) {
  let title = rawName.replace(/\.md$/, '');
  // Chuẩn hóa định dạng số: "1." hoặc "01_" -> "01. "
  title = title.replace(/^(\d+)[._\s]+/, (match, num) => {
    return num.padStart(2, '0') + '. ';
  });
  // Đổi dấu gạch dưới thành dấu cách
  title = title.replace(/_/g, ' ');
  return title.trim();
}

/**
 * Lấy tiêu đề # Heading 1 đầu tiên trong file Markdown
 */
export function getMarkdownTitle(filePath, fallback) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^#\s+(.+)$/m);
    if (match && match[1]) {
      // Loại bỏ format markdown cơ bản trong heading nếu có (bold, code)
      return match[1].replace(/[*`_]/g, '').trim();
    }
  } catch (err) {
    // ignore
  }
  return formatTitle(fallback);
}

/**
 * Tìm link trang bài viết đầu tiên (leaf node) trong cây danh mục
 */
export function findFirstLeaf(nodes) {
  for (const node of nodes) {
    if (node.link && !node.text.startsWith('◀')) return node.link;
    if (node.items && node.items.length) {
      const l = findFirstLeaf(node.items);
      if (l) return l;
    }
  }
  return null;
}

/**
 * Hàm đệ quy duyệt cây thư mục
 * @param {string} rootDir Đường dẫn thư mục gốc quét (VD: ./Studying-Computer-Science)
 * @param {string} currentDir Thư mục hiện tại đang duyệt (tương đối từ rootDir)
 * @param {string} urlPrefix Tiền tố URL (VD: Studying-Computer-Science)
 * @param {number} depth Độ sâu hiện tại
 */
export function scanDirectoryRecursively(rootDir, currentDir = '', urlPrefix = '', depth = 0) {
  const targetPath = path.join(rootDir, currentDir);
  if (!fs.existsSync(targetPath)) return [];

  const dirents = fs.readdirSync(targetPath, { withFileTypes: true });

  // Sắp xếp tự nhiên (natural numerical sort) để 01, 02, 10 đứng đúng thứ tự
  dirents.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
  );

  const items = [];

  for (const dirent of dirents) {
    // Bỏ qua các file ẩn, node_modules, dist, README, SKILL
    if (
      dirent.name.startsWith('.') ||
      dirent.name === 'node_modules' ||
      dirent.name === 'dist' ||
      dirent.name === 'README.md' ||
      dirent.name === 'SKILL.md'
    ) {
      continue;
    }

    const relPath = path.join(currentDir, dirent.name).replace(/\\/g, '/');
    const fullPath = path.join(rootDir, relPath);

    if (dirent.isDirectory()) {
      // Gọi ĐỆ QUY thư mục con
      const subItems = scanDirectoryRecursively(rootDir, relPath, urlPrefix, depth + 1);
      if (subItems.length > 0) {
        items.push({
          text: formatTitle(dirent.name),
          collapsed: true, // Tự động thu gọn, VitePress sẽ tự mở nhánh khi người dùng vào trang đó
          items: subItems,
        });
      }
    } else if (dirent.isFile() && dirent.name.endsWith('.md')) {
      const docTitle = getMarkdownTitle(fullPath, dirent.name);
      // Link relative tính từ root của VitePress (bắt đầu bằng /)
      const linkPath = '/' + path.join(urlPrefix, relPath).replace(/\\/g, '/').replace(/\.md$/, '');
      items.push({
        text: docTitle,
        link: linkPath,
      });
    }
  }

  return items;
}

/**
 * Tự động sinh Multi-Sidebar theo từng chuyên đề/chương con
 */
export function generateAutoSidebar(baseDir = '.') {
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  const sidebar = {};

  // Tìm các folder chính (chỉ lấy các folder bắt đầu bằng Studying-)
  const studyDirs = entries.filter(
    (e) => e.isDirectory() && e.name.startsWith('Studying-')
  );

  for (const studyDir of studyDirs) {
    const studyDirPath = path.join(baseDir, studyDir.name);
    const { domainTitle } = getSubjectMeta(studyDir.name);

    // Đọc các chương con trực tiếp
    const chapterDirs = fs.readdirSync(studyDirPath, { withFileTypes: true }).filter(
      (e) =>
        e.isDirectory() &&
        !e.name.startsWith('.') &&
        e.name !== 'node_modules' &&
        e.name !== 'dist'
    );

    chapterDirs.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
    );

    const chapterSummaries = [];

    for (const chapter of chapterDirs) {
      const chapterUrlPrefix = `${studyDir.name}/${chapter.name}`;
      const chapterItems = scanDirectoryRecursively(studyDirPath, chapter.name, studyDir.name);

      if (chapterItems.length === 0) continue;

      const firstLeaf = findFirstLeaf(chapterItems);
      const formattedChapterTitle = formatTitle(chapter.name);

      chapterSummaries.push({
        text: formattedChapterTitle,
        link: firstLeaf || `/${chapterUrlPrefix}/`,
      });

      // Tạo route riêng cho từng chương (Multi-sidebar scoped route)
      const chapterRoute = `/${chapterUrlPrefix}/`;
      sidebar[chapterRoute] = chapterItems
    }

    // Sidebar mặc định cho trang tổng quan của môn học (Master Index page)
    if (chapterSummaries.length === 0) continue;
    sidebar[`/${studyDir.name}/`] = [
      {
        text: `${domainTitle} (${chapterSummaries.length} Chuyên đề)`,
        items: chapterSummaries,
      },
    ];
  }

  return sidebar;
}

/**
 * Tự động quét và tổng hợp dữ liệu Mega Menu 2 cấp: Lĩnh vực -> Danh sách chuyên đề
 */
export function generateMegaMenuData(baseDir = '.') {
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  const studyDirs = entries.filter(
    (e) => e.isDirectory() && e.name.startsWith('Studying-')
  );

  const domains = [];

  for (const studyDir of studyDirs) {
    const studyDirPath = path.join(baseDir, studyDir.name);
    const { displayName } = getSubjectMeta(studyDir.name);

    const chapterDirs = fs.readdirSync(studyDirPath, { withFileTypes: true }).filter(
      (e) =>
        e.isDirectory() &&
        !e.name.startsWith('.') &&
        e.name !== 'node_modules' &&
        e.name !== 'dist'
    );

    chapterDirs.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
    );

    const chapters = [];

    for (const chapter of chapterDirs) {
      const chapterItems = scanDirectoryRecursively(studyDirPath, chapter.name, studyDir.name);
      if (chapterItems.length === 0) continue;

      const firstLeaf = findFirstLeaf(chapterItems);
      chapters.push({
        text: formatTitle(chapter.name),
        link: firstLeaf || `/${studyDir.name}/${chapter.name}/`,
      });
    }

    if (chapters.length === 0) continue;

    domains.push({
      id: studyDir.name,
      title: displayName,
      count: chapters.length,
      chapters: chapters,
    });
  }

  return domains;
}

/**
 * Tự động sinh Navbar: Gọn gàng với Dropdown nhóm chuyên đề 2 cấp
 */
export function generateAutoNavbar(baseDir = '.') {
  const domains = generateMegaMenuData(baseDir);

  const domainGroups = domains.map((dom) => ({
    text: `${dom.title} (${dom.count})`,
    items: dom.chapters,
  }));

  return [
    { text: 'Trang chủ', link: '/' },
    {
      text: '📚 Lĩnh vực học tập',
      items: domainGroups,
    },
  ];
}

/**
 * Tự động đọc danh sách file nhạc từ public/audio
 * - Lấy tên file làm tên bài hát
 * - Xử lý dấu "_" thành khoảng trắng và chuẩn hóa Unicode (NFC)
 */
export function getAudioTracks(baseDir = '.') {
  const audioDir = path.resolve(baseDir, 'public/audio');
  if (!fs.existsSync(audioDir)) return [];

  const files = fs.readdirSync(audioDir);
  const audioExtensions = new Set(['.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac']);

  return files
    .filter((f) => audioExtensions.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, 'vi'))
    .map((file) => {
      const ext = path.extname(file);
      const raw = path.basename(file, ext);
      // Xử lý dấu "_" thành khoảng trắng và chuẩn hóa Unicode tiếng Việt NFC
      const title = raw.replace(/_+/g, ' ').trim().normalize('NFC');
      return {
        title,
        src: `/audio/${encodeURI(file)}`,
        file,
      };
    });
}

