/**
 * johnrichardking.com — Phase 1
 * Vanilla JS: mobile nav, scroll header, card parallax
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------
     1. MOBILE NAV TOGGLE
     ------------------------------------------------ */
  var navToggle = document.getElementById('nav-toggle');
  var siteNav   = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navToggle.classList.toggle('active');
      siteNav.classList.toggle('open');
    });

    // Close when a link is tapped
    var links = siteNav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        navToggle.classList.remove('active');
        siteNav.classList.remove('open');
      });
    }

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !siteNav.contains(e.target)) {
        navToggle.classList.remove('active');
        siteNav.classList.remove('open');
      }
    });
  }


  /* ------------------------------------------------
     2. HEADER SCROLL SHADOW
     ------------------------------------------------ */
  var header = document.querySelector('.site-header');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ------------------------------------------------
     3. SUBTLE 3D TILT ON .frame-card
     Only on hover-capable devices.
     Disabled for prefers-reduced-motion.
     Max rotation: 2 degrees (restrained).
     ------------------------------------------------ */
  var canHover        = window.matchMedia('(hover: hover)').matches;
  var reducedMotion   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canHover && !reducedMotion) {
    var cards = document.querySelectorAll('.frame-card');

    cards.forEach(function (card) {

      card.addEventListener('mouseenter', function () {
        // Remove CSS transition so mousemove feels instant
        card.style.transition = 'box-shadow 0.35s ease, border-color 0.35s ease';
      });

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var cx   = rect.width  / 2;
        var cy   = rect.height / 2;
        var mx   = e.clientX - rect.left;
        var my   = e.clientY - rect.top;

        // -1 to 1 range
        var dx = (mx - cx) / cx;
        var dy = (my - cy) / cy;

        var maxDeg = 2;
        var rotY   =  dx * maxDeg;
        var rotX   = -dy * maxDeg;

        card.style.transform =
          'perspective(800px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-6px)';
      });

      card.addEventListener('mouseleave', function () {
        // Smooth reset
        card.style.transition =
          'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease';
        card.style.transform = '';
      });
    });
  }


  /* ------------------------------------------------
     4. BODY LOADED CLASS (for optional CSS fade-in)
     ------------------------------------------------ */
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 50);

});
