document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // 1. MOBILE NAV TOGGLE
  // ========================================
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      siteNav.classList.toggle('open');
    });

    const navLinks = siteNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        siteNav.classList.remove('open');
      });
    });

    document.addEventListener('click', function(event) {
      const isClickInsideNav = siteNav.contains(event.target);
      const isClickInsideToggle = navToggle.contains(event.target);

      if (!isClickInsideNav && !isClickInsideToggle) {
        navToggle.classList.remove('active');
        siteNav.classList.remove('open');
      }
    });
  }

  // ========================================
  // 2. HEADER SCROLL SHADOW
  // ========================================
  const siteHeader = document.querySelector('.site-header');

  function updateHeaderShadow() {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }

  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });

  // ========================================
  // 3. SUBTLE 3D TILT ON .frame-card
  // ========================================
  if (window.matchMedia('(hover: hover)').matches) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const frameCards = document.querySelectorAll('.frame-card');

      frameCards.forEach(function(card) {
        const originalTransition = window.getComputedStyle(card).transition;

        card.addEventListener('mouseenter', function() {
          card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
        });

        card.addEventListener('mousemove', function(event) {
          const rect = card.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;

          const normalizedX = (mouseX - centerX) / centerX;
          const normalizedY = (mouseY - centerY) / centerY;

          const maxRotation = 2;
          const rotateX = normalizedY * maxRotation;
          const rotateY = normalizedX * -maxRotation;

          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', function() {
          card.style.transition = originalTransition;
          card.style.transform = '';
        });
      });
    }
  }

  // ========================================
  // 4. BODY LOADED CLASS
  // ========================================
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 50);
});
