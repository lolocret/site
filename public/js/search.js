(() => {
  // <stdin>
  (() => {
    const input = document.getElementById("search-input");
    const resultsEl = document.getElementById("search-results");
    const form = document.getElementById("search");
    if (!input || !resultsEl || !form) return;
    let pages = [];
    let ready = false;
    const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
    const render = (items, query) => {
      if (!query) {
        resultsEl.innerHTML = "";
        resultsEl.classList.add("search-hidden");
        return;
      }
      if (!items.length) {
        resultsEl.innerHTML = `<div class="search-empty">Aucun resultat.</div>`;
        resultsEl.classList.remove("search-hidden");
        return;
      }
      const list = items.slice(0, 8).map((item) => {
        const title = escapeHtml(item.title || "Sans titre");
        const summary = escapeHtml(item.summary || "");
        return `<a class="search-item" href="${item.permalink}">
          <span class="search-title">${title}</span>
          <span class="search-summary">${summary}</span>
        </a>`;
      }).join("");
      resultsEl.innerHTML = list;
      resultsEl.classList.remove("search-hidden");
    };
    const allowedSections = /* @__PURE__ */ new Set(["posts", "veille"]);
    const filterPages = (query) => {
      const q = query.toLowerCase().trim();
      if (!q) return [];
      return pages.filter((page) => {
        if (page.section && !allowedSections.has(page.section)) return false;
        const haystack = `${page.title || ""} ${page.summary || ""} ${page.content || ""}`.toLowerCase();
        return haystack.includes(q);
      });
    };
    const loadIndex = async () => {
      if (ready) return;
      try {
        const res = await fetch("/index.json", { cache: "no-store" });
        if (!res.ok) return;
        pages = await res.json();
        ready = true;
      } catch {
        ready = false;
      }
    };
    const handleInput = async () => {
      await loadIndex();
      const query = input.value;
      if (!ready) {
        render([], query);
        return;
      }
      render(filterPages(query), query);
    };
    input.addEventListener("input", handleInput);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      handleInput();
    });
    document.addEventListener("click", (event) => {
      if (!resultsEl.contains(event.target) && event.target !== input) {
        resultsEl.classList.add("search-hidden");
      }
    });
  })();
})();
