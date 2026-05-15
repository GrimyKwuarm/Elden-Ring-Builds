(function () {
  const checks = Array.from(document.querySelectorAll("[data-step]"));
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const filters = Array.from(document.querySelectorAll("[data-filter]"));
  const steps = Array.from(document.querySelectorAll(".step"));
  const mapTabs = Array.from(document.querySelectorAll("[data-map]"));
  const mapPanels = Array.from(document.querySelectorAll(".map-panel"));
  const copyLink = document.getElementById("copyLink");
  const storageKey = "starfall-spellblade-progress";

  function readProgress() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch (error) {
      return {};
    }
  }

  function writeProgress(progress) {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }

  function updateProgress() {
    const complete = checks.filter((check) => check.checked).length;
    const total = checks.length;
    const percent = total ? Math.round((complete / total) * 100) : 0;
    progressFill.style.width = `${percent}%`;
    progressText.textContent = `${complete} of ${total} complete`;
  }

  const saved = readProgress();
  checks.forEach((check) => {
    check.checked = Boolean(saved[check.dataset.step]);
    check.addEventListener("change", () => {
      const next = readProgress();
      next[check.dataset.step] = check.checked;
      writeProgress(next);
      updateProgress();
    });
  });
  updateProgress();

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const phase = filter.dataset.filter;
      filters.forEach((item) => item.classList.toggle("active", item === filter));
      steps.forEach((step) => {
        const show = phase === "all" || step.dataset.phase === phase;
        step.hidden = !show;
      });
    });
  });

  mapTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.map;
      mapTabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      mapPanels.forEach((panel) => {
        const active = panel.id === id;
        panel.hidden = !active;
        panel.classList.toggle("active", active);
      });
    });
  });

  if (copyLink) {
    copyLink.addEventListener("click", async () => {
      const url = window.location.href.split("#")[0];
      try {
        await navigator.clipboard.writeText(url);
        copyLink.textContent = "Link copied";
      } catch (error) {
        copyLink.textContent = "Copy unavailable";
      }
      window.setTimeout(() => {
        copyLink.textContent = "Copy guide link";
      }, 1800);
    });
  }
})();

