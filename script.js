/* ========================================
   Supun — Minimal Portfolio Scripts
   ======================================== */

(function () {
  'use strict';

  // --- Theme Toggle ---
  const toggle = document.querySelector('.theme-toggle');
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  function updateMeta() {
    if (metaTheme) {
      metaTheme.content = getTheme() === 'dark' ? '#1A1814' : '#F5F1E8';
    }
  }

  updateMeta();

  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = getTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      updateMeta();
    });
  }

  // --- Scroll Reveal (IntersectionObserver) ---
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var animElements = document.querySelectorAll('[data-animate]');

  if (reducedMotion) {
    animElements.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    animElements.forEach(function (el) { revealObserver.observe(el); });
  }

  // --- Dot Nav Active State ---
  var sections = document.querySelectorAll('.section');
  var dots = document.querySelectorAll('.dot-nav .dot');

  if (sections.length && dots.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          dots.forEach(function (dot) {
            dot.classList.toggle('active', dot.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(function (section) { navObserver.observe(section); });
  }

  // --- Scroll Cue Hide ---
  var scrollCue = document.querySelector('.scroll-cue');
  if (scrollCue) {
    var heroSection = document.getElementById('hero');
    if (heroSection) {
      var cueObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          scrollCue.classList.toggle('hidden', !entry.isIntersecting);
        });
      }, { threshold: 0.5 });
      cueObserver.observe(heroSection);
    }
  }

})();
