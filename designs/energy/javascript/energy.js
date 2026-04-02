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


// Smooth scroll

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.publicnav a[href^="#"]');
  const scrollLinks = document.querySelectorAll('a[href^="#"]:not(.lang-link):not(.mobile)');
  const offset = 60;   // header + nav height
  const duration = 1000;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function setActiveLink(hash) {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    });
  }

  function getCurrentHash() {
    const scrollPosition = window.pageYOffset + offset + 1;

    // top of page = home link
    if (window.pageYOffset < 100) {
      return '#';
    }

    let currentHash = '#';

    navLinks.forEach(link => {
      const hash = link.getAttribute('href');

      if (!hash || hash === '#') return;

      const section = document.querySelector(hash);
      if (!section) return;

      if (scrollPosition >= section.offsetTop) {
        currentHash = hash;
      }
    });

    return currentHash;
  }

  function updateActiveOnScroll() {
    setActiveLink(getCurrentHash());
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

  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const hash = this.getAttribute('href');

      if (!hash) return;

      e.preventDefault();

      // Home link
      if (hash === '#') {
        animateScrollTo(0, function () {
          setActiveLink('#');
        });
        return;
      }

      const target = document.querySelector(hash);
      if (!target) return;

      const targetY = Math.max(
        target.getBoundingClientRect().top + window.pageYOffset - offset,
        0
      );

      animateScrollTo(targetY, function () {
        setActiveLink(hash);
      });
    });
  });

  window.addEventListener('scroll', updateActiveOnScroll, { passive: true });

  // Set correct active link on first load
  updateActiveOnScroll();
});



// Popup

document.addEventListener('DOMContentLoaded', function () {
  const lastChild = document.body.lastElementChild;

  // Is the last element on the page a "popup"
  if (lastChild && lastChild.classList.contains('popup')) {
    const observer = new MutationObserver(() => {
      // Check if the popup has the class "hidden"
      if (lastChild.classList.contains('hidden')) {
        document.body.classList.remove('overflow');
      } else {
        document.body.classList.add('overflow');
      }
    });

    // Check for changes in the last element
    observer.observe(lastChild, { attributes: true, attributeFilter: ['class'] });

    // Initially, check for the hidden class on load
    if (!lastChild.classList.contains('hidden')) {
      document.body.classList.add('overflow');
    }
  }
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
    threshold: 0.2
  });

  revealSections.forEach(section => {
    observer.observe(section);
  });
});