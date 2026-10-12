(function () {
  function showJokeToast() {
    var existing = document.getElementById('joke-toast');
    if (existing) existing.remove();

    var lang = localStorage.getItem('fabrizio-lang') || 'es';
    var msg = lang === 'en'
      ? 'No no no. This is a portfolio, not an Excel spreadsheet. 🤚'
      : 'No no no. Esto es un portfolio, no una hoja de Excel. 🤚';

    var toast = document.createElement('div');
    toast.id = 'joke-toast';
    toast.className = 'joke-toast fixed z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-xl bg-surface-container-highest text-on-surface text-sm font-semibold shadow-toast';
    toast.style.top = '50%';
    toast.style.left = '50%';
    toast.style.transform = 'translate(-50%, -50%)';
    toast.style.maxWidth = 'calc(100vw - 2rem)';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = msg;
    document.body.appendChild(toast);

    function dismiss() {
      toast.classList.add('hide');
      setTimeout(function () { toast.remove(); }, 250);
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') dismiss(); }

    toast.addEventListener('click', dismiss);
    document.addEventListener('keydown', onKey);
    setTimeout(dismiss, 3000);
  }

  function updateNavActive() {
    var pathname = window.location.pathname;

    function applyActiveState(link, active) {
      link.classList.toggle('text-primary', active);
      link.classList.toggle('text-on-surface-variant', !active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }

    // Las páginas de proyecto cuentan como parte de "Proyectos"
    function isLinkActive(href) {
      if (href === '/') return pathname === '/' || pathname.startsWith('/proyectos');
      return pathname.startsWith(href);
    }

    document.querySelectorAll('[data-nav-link]').forEach(function (link) {
      var href = link.getAttribute('data-nav-href');
      var underline = link.querySelector('[data-nav-underline]');
      var active = isLinkActive(href);
      applyActiveState(link, active);

      if (underline) {
        if (active) {
          underline.classList.add('w-full', 'shadow-glow-dot');
          underline.classList.remove('w-0');
        } else {
          underline.classList.remove('w-full', 'shadow-glow-dot');
          underline.classList.add('w-0');
        }
      }
    });

    document.querySelectorAll('[data-bottom-link]').forEach(function (link) {
      var href = link.getAttribute('data-nav-href');
      var dot = link.querySelector('[data-nav-dot]');
      var icon = link.querySelector('[data-nav-icon]');
      var active = isLinkActive(href);
      applyActiveState(link, active);

      if (icon) icon.style.fontVariationSettings = active ? "'FILL' 1" : "'FILL' 0";
      if (dot) dot.classList.toggle('hidden', !active);
    });
  }

  function init() {
    updateNavActive();

    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.removeEventListener('click', showJokeToast);
      btn.addEventListener('click', showJokeToast);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('astro:page-load', init);
})();
