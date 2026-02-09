// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      siteNav.classList.toggle('active');
    });

    // Close nav on link click
    const navLinks = siteNav.querySelectorAll('.site-nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        siteNav.classList.remove('active');
      });
    });
  }

  // Close nav on outside click
  document.addEventListener('click', function(e) {
    if (navToggle && siteNav && !e.target.closest('.site-nav') && !e.target.closest('.nav-toggle')) {
      siteNav.classList.remove('active');
    }
  });

  // Form submission handler
  const joinForm = document.querySelector('.join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you. You will receive new writing when it is ready.');
      this.reset();
    });
  }
});
