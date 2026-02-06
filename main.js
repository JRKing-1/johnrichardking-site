// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    siteNav.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close nav on link click
  const navLinks = siteNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      siteNav.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Close nav on outside click
document.addEventListener('click', function(e) {
  if (!e.target.closest('.site-nav') && !e.target.closest('.nav-toggle')) {
    siteNav.classList.remove('active');
    if (navToggle) {
      navToggle.classList.remove('active');
    }
  }
});

// Header scroll shadow
const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
});

// Update active nav link on scroll
const navLinks = document.querySelectorAll('.site-nav__link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('site-nav__link--active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('site-nav__link--active');
    }
  });
});

// Subtle 3D tilt on cards (only if hover supported and no reduced-motion)
const supportsHover = window.matchMedia('(hover: hover)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (supportsHover && !prefersReducedMotion) {
  const cards = document.querySelectorAll('.work-card, .frame-card, .devo-preview');

  cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 100;
      const rotateY = (centerX - x) / 100;

      card.style.transform = `perspective(800px) rotateX(${Math.min(Math.max(rotateX, -1.5), 1.5)}deg) rotateY(${Math.min(Math.max(rotateY, -1.5), 1.5)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// Add loaded class to body after 50ms
setTimeout(function() {
  document.body.classList.add('loaded');
}, 50);
