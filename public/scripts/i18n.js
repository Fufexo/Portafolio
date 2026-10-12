(function () {
  var LANG_STORAGE_KEY = 'fabrizio-lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val === null) return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-aria-es]').forEach(function (el) {
      var label = el.getAttribute('data-aria-' + lang);
      if (label !== null) el.setAttribute('aria-label', label);
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = lang === 'es' ? 'EN' : 'ES';
    });
  }

  function toggleLang() {
    var current = localStorage.getItem(LANG_STORAGE_KEY) || 'es';
    var next = current === 'es' ? 'en' : 'es';
    localStorage.setItem(LANG_STORAGE_KEY, next);
    applyLang(next);
    document.dispatchEvent(new CustomEvent('fabrizio:langchange', { detail: { lang: next } }));
  }

  function init() {
    var savedLang = localStorage.getItem(LANG_STORAGE_KEY) || 'es';
    applyLang(savedLang);

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.removeEventListener('click', toggleLang);
      btn.addEventListener('click', toggleLang);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('astro:page-load', init);
})();
