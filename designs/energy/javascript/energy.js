// Show hide navigation in mobile 

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuLink = document.querySelector('a.mobile');
  const navElement = document.getElementById('nav');
  const publicNavLinks = document.querySelectorAll('.publicnav a');

  mobileMenuLink.addEventListener('click', (event) => {
    event.preventDefault();
    navElement.classList.toggle('show');
  });

  publicNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960) {
        navElement.classList.remove('show');
      }
    });
  });
});


// Language selection

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const html = document.documentElement;
  const langLinks = document.querySelectorAll('.language .lang-link');
  const supportedLanguages = ['mk', 'al'];

  function setLanguage(lang) {
    if (!supportedLanguages.includes(lang)) return;

    body.classList.remove('mk', 'al');
    body.classList.add(lang);

    html.setAttribute('lang', lang === 'al' ? 'sq' : 'mk');

    langLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.lang === lang);
    });

    localStorage.setItem('siteLanguage', lang);
  }

  langLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      setLanguage(this.dataset.lang);
    });
  });

  const savedLanguage = localStorage.getItem('siteLanguage');

  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    setLanguage(savedLanguage);
  } else if (body.classList.contains('al')) {
    setLanguage('al');
  } else {
    setLanguage('mk');
  }
});


// Smooth scroll only for Home and Contact

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#nav .publicnav a');
  const homeLinks = document.querySelectorAll('a[href="index.html"], a[href="./index.html"]');
  const contactLinks = document.querySelectorAll('a[href="#contact"]');

  const offset = 60;
  const duration = 1000;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function clearActiveLinks() {
    navLinks.forEach(link => link.classList.remove('active'));
  }

  function hideAllPopups() {
    document.querySelectorAll('.content[class*="popup-"]').forEach(page => {
      page.classList.add('hidden');
    });
  }

  function showMainContent() {
    const mainContent = document.querySelector('.main-content');

    hideAllPopups();

    if (mainContent) {
      mainContent.classList.remove('hidden');
    }
  }

  function animateScrollTo(targetY, callback) {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else if (callback) {
        callback();
      }
    }

    requestAnimationFrame(step);
  }

  homeLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      showMainContent();
      clearActiveLinks();
      this.classList.add('active');

      window.scrollTo(0, 0);
    });
  });

  contactLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      showMainContent();
      clearActiveLinks();
      this.classList.add('active');

      const target = document.querySelector('#contact');
      if (!target) return;

      const targetY = Math.max(
        target.getBoundingClientRect().top + window.pageYOffset - offset,
        0
      );

      animateScrollTo(targetY);
    });
  });
});

// Reveal content 

document.addEventListener('DOMContentLoaded', () => {
  const revealSections = document.querySelectorAll('.reveal-section');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4
  });

  revealSections.forEach(section => {
    observer.observe(section);
  });
});

// Popup page navigation

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('.main-content');
  const popupPages = document.querySelectorAll('.content[class*="popup-"]');
  const navLinks = document.querySelectorAll('#nav .publicnav a');

  function clearActiveLinks() {
    navLinks.forEach(link => link.classList.remove('active'));
  }

  function hideAllPopups() {
    popupPages.forEach(page => {
      page.classList.add('hidden');
      page.querySelectorAll('.reveal-section').forEach(section => {
        section.classList.remove('is-visible');
      });
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (this.classList.contains('expand')) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove('active');
        return;
      }

      if (href && href.startsWith('#popup-')) {
        e.preventDefault();

        clearActiveLinks();

        const parentDropdown = this.closest('.subexpand');

        if (parentDropdown) {
          const parentExpandLink = parentDropdown.previousElementSibling;
          if (parentExpandLink) parentExpandLink.classList.add('active');
        } else {
          this.classList.add('active');
        }

        if (mainContent) mainContent.classList.add('hidden');

        hideAllPopups();

        const targetPopup = document.querySelector(href.replace('#', '.'));

        if (targetPopup) {
          targetPopup.classList.remove('hidden');

          requestAnimationFrame(() => {
            targetPopup.querySelectorAll('.reveal-section').forEach(section => {
              section.classList.add('is-visible');
            });
          });
        }

        window.scrollTo(0, 0);
      }
    });
  });
});