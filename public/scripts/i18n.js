(function () {
  var STORAGE_KEY = 'fabrizio-lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val === null) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = lang === 'es' ? 'EN' : 'ES';
    });
  }

  function toggleLang() {
    var current = localStorage.getItem(STORAGE_KEY) || 'es';
    var next = current === 'es' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
    document.dispatchEvent(new CustomEvent('fabrizio:langchange', { detail: { lang: next } }));
  }

  function updateNavActive() {
    var pathname = window.location.pathname;

    document.querySelectorAll('[data-nav-link]').forEach(function (link) {
      var href = link.getAttribute('data-nav-href');
      var underline = link.querySelector('[data-nav-underline]');
      var active = href === '/' ? pathname === '/' : pathname.startsWith(href);

      if (active) {
        link.classList.add('text-[#D2BBFF]');
        link.classList.remove('text-[#E5E1E4]/50');
        if (underline) {
          underline.classList.add('w-full', 'shadow-[0_0_8px_#D2BBFF]');
          underline.classList.remove('w-0');
        }
      } else {
        link.classList.remove('text-[#D2BBFF]');
        link.classList.add('text-[#E5E1E4]/50');
        if (underline) {
          underline.classList.remove('w-full', 'shadow-[0_0_8px_#D2BBFF]');
          underline.classList.add('w-0');
        }
      }
    });

    document.querySelectorAll('[data-bottom-link]').forEach(function (link) {
      var href = link.getAttribute('data-nav-href');
      var dot  = link.querySelector('[data-nav-dot]');
      var icon = link.querySelector('[data-nav-icon]');
      var active = href === '/' ? pathname === '/' : pathname.startsWith(href);

      if (active) {
        link.classList.add('text-[#D2BBFF]');
        link.classList.remove('text-[#E5E1E4]/50');
        if (icon) icon.style.fontVariationSettings = "'FILL' 1";
        if (dot)  dot.classList.remove('hidden');
      } else {
        link.classList.remove('text-[#D2BBFF]');
        link.classList.add('text-[#E5E1E4]/50');
        if (icon) icon.style.fontVariationSettings = "'FILL' 0";
        if (dot)  dot.classList.add('hidden');
      }
    });
  }

  function showJokeToast() {
    var existing = document.getElementById('joke-toast');
    if (existing) existing.remove();

    var lang = localStorage.getItem(STORAGE_KEY) || 'es';
    var msg = lang === 'en'
      ? "No no no. This is a portfolio, not an Excel spreadsheet. 🤚"
      : "No no no. Esto es un portfolio, no una hoja de Excel. 🤚";

    var toast = document.createElement('div');
    toast.id = 'joke-toast';
    toast.className = 'joke-toast fixed z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-xl bg-surface-container-highest text-on-surface text-sm font-semibold shadow-[0_8px_32px_rgba(0,0,0,0.5)]';
    toast.style.top = '50%';
    toast.style.left = '50%';
    toast.style.transform = 'translate(-50%, -50%)';
    toast.style.maxWidth = 'calc(100vw - 2rem)';
    toast.innerHTML = '<span>' + msg + '</span>';
    document.body.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = '0';
      setTimeout(function () { toast.remove(); }, 300);
    }, 3000);
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || 'es';
    applyLang(saved);
    updateNavActive();

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.removeEventListener('click', toggleLang);
      btn.addEventListener('click', toggleLang);
    });

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
