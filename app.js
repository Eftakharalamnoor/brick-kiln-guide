// app.js — Navigation & Page Rendering Logic

// মার্জ: PAGES_PURCHASE → PAGES (pages_purchase_full.js থেকে)
document.addEventListener('DOMContentLoaded', function () {
  if (typeof PAGES_PURCHASE !== 'undefined') {
    Object.assign(PAGES, PAGES_PURCHASE);
  }
});

(function () {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  const pageContainer = document.getElementById('pageContainer');
  const pageIndex = document.getElementById('pageIndex');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const navItems = document.querySelectorAll('.nav-item[data-page]');

  let currentPage = null;
  let sidebarOpen = true;

  // ── Sidebar Toggle ──
  sidebarToggle.addEventListener('click', () => {
    sidebarOpen = !sidebarOpen;
    sidebar.classList.toggle('collapsed', !sidebarOpen);
    mainContent.classList.toggle('sidebar-collapsed', !sidebarOpen);
  });

  // ── Load a page ──
  function loadPage(pageId) {
    const page = PAGES[pageId];
    if (!page) return;

    currentPage = pageId;

    // Update nav active state
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageId);
    });

    // Render content
    pageContainer.innerHTML = page.content;

    // Build right-panel index
    buildPageIndex(page.sections);

    // Scroll to top
    mainContent.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash
    history.replaceState(null, '', `#${pageId}`);

    // Animate sections in
    const sections = pageContainer.querySelectorAll('.section, .page-hero');
    sections.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = `opacity 0.3s ease ${i * 0.07}s, transform 0.3s ease ${i * 0.07}s`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });

    // Progress bar animations
    const fills = pageContainer.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
      const w = fill.style.width;
      fill.style.width = '0';
      setTimeout(() => { fill.style.width = w; }, 300);
    });
  }

  // ── Build right panel index ──
  function buildPageIndex(sections) {
    pageIndex.innerHTML = '';
    if (!sections || sections.length === 0) return;

    sections.forEach((title, idx) => {
      const a = document.createElement('a');
      a.className = 'page-index-item';
      a.textContent = title;
      a.href = '#';
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = 'sec-' + title.replace(/\s+/g, '-');
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Mark active
        document.querySelectorAll('.page-index-item').forEach(i => i.classList.remove('active'));
        a.classList.add('active');
      });
      pageIndex.appendChild(a);
    });

    // Intersection observer to highlight active section
    setupSectionObserver();
  }

  // ── Section observer for right panel ──
  function setupSectionObserver() {
    const items = document.querySelectorAll('.page-index-item');
    const sections = pageContainer.querySelectorAll('.section[id]');

    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const title = id.replace('sec-', '').replace(/-/g, ' ');
          items.forEach(item => {
            const match = item.textContent.replace(/\s+/g, ' ').trim();
            const sectionTitle = title.replace(/\s+/g, ' ').trim();
            // fuzzy match
            item.classList.toggle('active',
              match.includes(sectionTitle) || sectionTitle.includes(match)
            );
          });
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 });

    sections.forEach(s => observer.observe(s));
  }

  // ── Nav item clicks ──
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = item.dataset.page;
      if (pageId) loadPage(pageId);
    });
  });

  // ── Load from hash or default ──
  const hash = location.hash.replace('#', '');
  const firstPage = (hash && PAGES[hash]) ? hash : 'intro';
  loadPage(firstPage);

  // ── Welcome screen if intro ──
  // (already loaded above)

})();
