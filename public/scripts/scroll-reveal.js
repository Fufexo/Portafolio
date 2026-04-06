(function () {
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  var SKIP_CLASSES = ['absolute', 'fixed', 'pointer-events-none'];

  function shouldSkip(el) {
    if (SKIP_TAGS[el.tagName]) return true;
    for (var i = 0; i < SKIP_CLASSES.length; i++) {
      if (el.classList.contains(SKIP_CLASSES[i])) return true;
    }
    return false;
  }

  function initScrollReveal() {
    var sections = document.querySelectorAll('main section');
    var targets = [];

    sections.forEach(function (section) {
      var children = Array.from(section.children).filter(function (el) {
        return !shouldSkip(el) && !el.classList.contains('scroll-reveal');
      });

      children.forEach(function (el, idx) {
        el.classList.add('scroll-reveal');
        el.style.setProperty('--reveal-delay', (idx * 90) + 'ms');
        targets.push(el);
      });
    });

    if (!targets.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
  document.addEventListener('astro:page-load', initScrollReveal);
})();
