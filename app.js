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
  
  // Search elements
  const searchInput = document.getElementById('globalSearch');
  const searchClear = document.getElementById('searchClear');
  const searchResults = document.getElementById('searchResults');

  let currentPage = null;
  let sidebarOpen = true;

  // ── Global Search Functionality ──
  function initSearch() {
    if (!searchInput) return;

    // Create search results dropdown
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'searchResults';
    resultsDiv.className = 'search-results';
    searchInput.parentElement.appendChild(resultsDiv);

    // Search on input
    searchInput.addEventListener('input', debounce(handleSearch, 300));

    // Clear search
    if (searchClear) {
      searchClear.addEventListener('click', clearSearch);
    }

    // Keyboard shortcut (Ctrl+K)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape' && searchInput) {
        searchInput.blur();
        hideSearchResults();
      }
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (!searchInput.parentElement.contains(e.target)) {
        hideSearchResults();
      }
    });
  }

  function handleSearch() {
    const query = searchInput.value.trim();
    
    // Show/hide clear button
    if (searchClear) {
      searchClear.classList.toggle('visible', query.length > 0);
    }

    if (query.length < 2) {
      hideSearchResults();
      return;
    }

    const results = searchGuide(query);
    showSearchResults(results, query);
  }

  function searchGuide(query) {
    const results = [];
    const queryLower = query.toLowerCase();
    const queryBN = query.toLowerCase(); // Bengali query

    // Search through all pages
    for (const [pageId, page] of Object.entries(PAGES)) {
      // Search in page title
      if (page.title && 
          (page.title.toLowerCase().includes(queryLower) || 
           page.title.includes(query))) {
        results.push({
          pageId,
          title: page.title,
          path: `মেনু → ${getPagePath(pageId)}`,
          type: 'page',
          score: 10
        });
      }

      // Search in sections
      if (page.sections) {
        page.sections.forEach((section, idx) => {
          if (section.toLowerCase().includes(queryLower) || 
              section.includes(query)) {
            results.push({
              pageId,
              title: section,
              path: `${page.title} → ${section}`,
              type: 'section',
              score: 5
            });
          }
        });
      }

      // Search in content (HTML)
      if (page.content) {
        const contentText = stripHtml(page.content).toLowerCase();
        if (contentText.includes(queryLower) || 
            stripHtml(page.content).includes(query)) {
          // Find which section contains the match
          const matchSection = findMatchingSection(page.content, query);
          results.push({
            pageId,
            title: matchSection || page.title,
            path: `${page.title}${matchSection ? ' → ' + matchSection : ''}`,
            type: 'content',
            score: 3
          });
        }
      }
    }

    // Sort by score and limit to 10 results
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  function findMatchingSection(html, query) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const sections = tmp.querySelectorAll('.section-title, h4.sub-title');
    
    for (const section of sections) {
      const text = section.textContent.toLowerCase();
      if (text.includes(query.toLowerCase()) || text.includes(query)) {
        return section.textContent.trim();
      }
    }
    return null;
  }

  function getPagePath(pageId) {
    const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
    if (navItem) {
      const groupLabel = navItem.closest('.nav-group')?.querySelector('.nav-group-label')?.textContent;
      return groupLabel || 'অন্যান্য';
    }
    return 'অন্যান্য';
  }

  function showSearchResults(results, query) {
    const resultsDiv = document.getElementById('searchResults');
    if (!resultsDiv) return;

    resultsDiv.innerHTML = '';

    if (results.length === 0) {
      resultsDiv.innerHTML = `
        <div class="search-no-results">
          <div class="search-no-results-icon">🔍</div>
          <div>কোনো ফলাফল পাওয়া যায়নি</div>
          <div style="font-size:12px;margin-top:8px">"${escapeHtml(query)}" এর জন্য কোনো মিল পাওয়া যায়নি</div>
        </div>
      `;
      resultsDiv.classList.add('visible');
      return;
    }

    // Header
    const header = document.createElement('div');
    header.className = 'search-results-header';
    header.innerHTML = `
      <span>অনুসন্ধান ফলাফল</span>
      <span class="search-results-count">${results.length}টি ফলাফল</span>
    `;
    resultsDiv.appendChild(header);

    // Results
    results.forEach(result => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div class="search-result-title">${highlightText(result.title, query)}</div>
        <div class="search-result-path">${highlightText(result.path, query)}</div>
      `;
      item.addEventListener('click', () => {
        loadPage(result.pageId);
        hideSearchResults();
        searchInput.value = '';
        if (searchClear) searchClear.classList.remove('visible');
        
        // Scroll to section if it's a section match
        if (result.type === 'section') {
          setTimeout(() => {
            const sectionId = 'sec-' + result.title.replace(/\s+/g, '-');
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              el.style.animation = 'highlight 2s ease';
            }
          }, 100);
        }
      });
      resultsDiv.appendChild(item);
    });

    resultsDiv.classList.add('visible');
  }

  function hideSearchResults() {
    const resultsDiv = document.getElementById('searchResults');
    if (resultsDiv) {
      resultsDiv.classList.remove('visible');
    }
  }

  function clearSearch() {
    searchInput.value = '';
    if (searchClear) searchClear.classList.remove('visible');
    hideSearchResults();
    searchInput.focus();
  }

  function highlightText(text, query) {
    const regex = new RegExp(`(${escapeHtml(query)})`, 'gi');
    return text.replace(regex, '<span class="search-result-highlight">$1</span>');
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ── Initialize Search ──
  initSearch();

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
