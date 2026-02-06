document.addEventListener('DOMContentLoaded', function() {

  // ========================================
  // 1. MOBILE NAV
  // ========================================
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });

    document.addEventListener('click', function(e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        toggle.classList.remove('active');
        nav.classList.remove('open');
      }
    });
  }

  // ========================================
  // 2. HEADER SCROLL SHADOW
  // ========================================
  var header = document.querySelector('.site-header');

  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ========================================
  // 3. SUBTLE 3D TILT ON .frame-card
  // ========================================
  var canHover = window.matchMedia('(hover: hover)').matches;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canHover && !reducedMotion) {
    document.querySelectorAll('.frame-card').forEach(function(card) {

      card.addEventListener('mouseenter', function() {
        card.style.transition = 'box-shadow 0.35s ease, border-color 0.35s ease';
      });

      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var dx = ((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2);
        var dy = ((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2);

        card.style.transform =
          'perspective(800px) rotateX(' + (-dy * 1.5) + 'deg) rotateY(' + (dx * 1.5) + 'deg) translateY(-5px)';
      });

      card.addEventListener('mouseleave', function() {
        card.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease';
        card.style.transform = '';
      });
    });
  }

  // ========================================
  // 4. LOADED STATE
  // ========================================
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 50);

});
