// Show/hide navigation in mobile

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuLink = document.querySelector('a.mobile');
  const navElement = document.getElementById('nav');
  const publicNavLinks = document.querySelectorAll('.publicnav a');

  if (mobileMenuLink && navElement) {
    mobileMenuLink.addEventListener('click', (event) => {
      event.preventDefault();
      navElement.classList.toggle('show');
    });
  }

  publicNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960 && navElement) {
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
    if (!supportedLanguages.includes(lang)) {
      return;
    }

    body.classList.remove('mk', 'al');
    body.classList.add(lang);

    html.setAttribute('lang', lang === 'al' ? 'sq' : 'mk');

    langLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.dataset.lang === lang
      );
    });

    try {
      localStorage.setItem('siteLanguage', lang);
    } catch (error) {
      // Continue if localStorage is unavailable.
    }
  }

  langLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      setLanguage(this.dataset.lang);
    });
  });

  let savedLanguage = null;

  try {
    savedLanguage = localStorage.getItem('siteLanguage');
  } catch (error) {
    savedLanguage = null;
  }

  if (
    savedLanguage &&
    supportedLanguages.includes(savedLanguage)
  ) {
    setLanguage(savedLanguage);
  } else if (body.classList.contains('al')) {
    setLanguage('al');
  } else {
    setLanguage('mk');
  }
});


// Page navigation, popup routing and smooth scrolling

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('.main-content');

  const popupPages = document.querySelectorAll(
    '.content[class*="popup-"]'
  );

  const navLinks = document.querySelectorAll(
    '#nav .publicnav a'
  );

  const homeLinks = document.querySelectorAll(
    'a[href="index.html"], a[href="./index.html"]'
  );

  const contactLinks = document.querySelectorAll(
    'a[href="#contact"]'
  );

  const routeToPopup = {
    about: 'popup-about',
    care: 'popup-care',
    invoices: 'popup-invoices',
    payments: 'popup-payments',
    change: 'popup-change',
    regulations: 'popup-regulations',
    faq: 'popup-faq'
  };

  const popupToRoute = {
    'popup-about': 'about',
    'popup-care': 'care',
    'popup-invoices': 'invoices',
    'popup-payments': 'payments',
    'popup-change': 'change',
    'popup-regulations': 'regulations',
    'popup-faq': 'faq'
  };

  const routeNames = Object.keys(routeToPopup);

  const duration = 1600;

  let scrollAnimationId = null;
  let userInterruptedScroll = false;

  /*
   * Automatically detects where the website is installed.
   *
   *
   * https://energyecolink.mk/
   * basePath = ""
   *
   * https://brainaux.com/energy/
   * basePath = "/energy"
   *
   * http://localhost:5500/
   * basePath = ""
   */

  const basePath = detectBasePath();

  function normalizePath(pathname) {
    let path = pathname || '/';

    try {
      path = decodeURIComponent(path);
    } catch (error) {
      // Continue with the original path.
    }

    path = path.replace(/\\/g, '/');
    path = path.replace(/\/+/g, '/');

    if (path.length > 1) {
      path = path.replace(/\/+$/, '');
    }

    return path;
  }

  function getPathParts(pathname) {
    return normalizePath(pathname)
      .split('/')
      .filter(Boolean);
  }

  function detectBasePath() {
    const parts = getPathParts(window.location.pathname);

    if (parts.length === 0) {
      return '';
    }

    const lastPart = parts[parts.length - 1].toLowerCase();

    if (
      lastPart === 'index.html' ||
      lastPart === 'index.htm'
    ) {
      parts.pop();
    } else if (routeNames.includes(lastPart)) {
      parts.pop();
    }

    if (parts.length === 0) {
      return '';
    }

    return '/' + parts.join('/');
  }

  function getCurrentRouteName() {
    const parts = getPathParts(window.location.pathname);

    if (parts.length === 0) {
      return null;
    }

    const lastPart = parts[parts.length - 1].toLowerCase();

    return routeNames.includes(lastPart)
      ? lastPart
      : null;
  }

  function createUrl(path) {
    if (!path) {
      return basePath
        ? `${basePath}/`
        : '/';
    }

    return `${basePath}/${path}`.replace(/\/+/g, '/');
  }

  function updateUrl(url, replaceState = false) {
    const currentUrl =
      window.location.pathname +
      window.location.search +
      window.location.hash;

    if (currentUrl === url) {
      return;
    }

    try {
      if (replaceState) {
        window.history.replaceState({}, '', url);
      } else {
        window.history.pushState({}, '', url);
      }
    } catch (error) {
      // The page still works if the URL cannot be updated.
    }
  }

  function easeOutCubic(progress) {
    return 1 - Math.pow(1 - progress, 3);
  }

  function clearActiveLinks() {
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
  }

  function hideAllPopups() {
    popupPages.forEach((popupPage) => {
      popupPage.classList.add('hidden');

      popupPage
        .querySelectorAll('.reveal-section')
        .forEach((section) => {
          section.classList.remove('is-visible');
        });
    });
  }

  function showMainContent() {
    hideAllPopups();

    if (mainContent) {
      mainContent.classList.remove('hidden');
    }
  }

  function revealPopup(targetPopup) {
    requestAnimationFrame(() => {
      targetPopup
        .querySelectorAll('.reveal-section')
        .forEach((section) => {
          section.classList.add('is-visible');
        });
    });
  }

  function setActiveHomeLink() {
    clearActiveLinks();

    const homeLink = document.querySelector(
      '#nav .publicnav a[href="index.html"], ' +
      '#nav .publicnav a[href="./index.html"]'
    );

    if (homeLink) {
      homeLink.classList.add('active');
    }
  }

  function setActiveContactLink() {
    clearActiveLinks();

    const contactLink = document.querySelector(
      '#nav .publicnav a[href="#contact"]'
    );

    if (contactLink) {
      contactLink.classList.add('active');
    }
  }

  function setActivePopupLink(popupClass) {
    clearActiveLinks();

    const activeLink = document.querySelector(
      `#nav .publicnav a[href="#${popupClass}"]`
    );

    if (!activeLink) {
      return;
    }

    const parentDropdown = activeLink.closest('.subexpand');

    if (parentDropdown) {
      const parentExpandLink =
        parentDropdown.previousElementSibling;

      if (parentExpandLink) {
        parentExpandLink.classList.add('active');
      }
    } else {
      activeLink.classList.add('active');
    }
  }

  function showPopup(popupClass) {
    const targetPopup = document.querySelector(
      `.${popupClass}`
    );

    if (!targetPopup) {
      return false;
    }

    if (mainContent) {
      mainContent.classList.add('hidden');
    }

    hideAllPopups();
    setActivePopupLink(popupClass);

    targetPopup.classList.remove('hidden');
    revealPopup(targetPopup);

    window.scrollTo(0, 0);

    return true;
  }

  function animateScrollTo(targetY) {
    if (scrollAnimationId) {
      cancelAnimationFrame(scrollAnimationId);
    }

    userInterruptedScroll = false;

    const cancelScroll = () => {
      userInterruptedScroll = true;

      if (scrollAnimationId) {
        cancelAnimationFrame(scrollAnimationId);
        scrollAnimationId = null;
      }
    };

    window.addEventListener(
      'wheel',
      cancelScroll,
      {
        passive: true,
        once: true
      }
    );

    window.addEventListener(
      'touchmove',
      cancelScroll,
      {
        passive: true,
        once: true
      }
    );

    window.addEventListener(
      'keydown',
      cancelScroll,
      {
        once: true
      }
    );

    const startY = window.pageYOffset;
    const distance = targetY - startY;

    let startTime = null;

    function step(timestamp) {
      if (userInterruptedScroll) {
        return;
      }

      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = easeOutCubic(progress);

      window.scrollTo(
        0,
        startY + distance * easedProgress
      );

      if (progress < 1) {
        scrollAnimationId = requestAnimationFrame(step);
      } else {
        scrollAnimationId = null;
      }
    }

    scrollAnimationId = requestAnimationFrame(step);
  }

  function scrollToContact(animated) {
    requestAnimationFrame(() => {
      const contactSection = document.querySelector('#contact');

      if (!contactSection) {
        return;
      }

      const targetY =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (animated) {
        animateScrollTo(targetY);
      } else {
        window.scrollTo(0, targetY);
      }
    });
  }

  function openHome(updateBrowserUrl = false) {
    showMainContent();
    setActiveHomeLink();

    if (updateBrowserUrl) {
      updateUrl(createUrl(''));
    }

    animateScrollTo(0);
  }

  function openContact(
    updateBrowserUrl = false,
    animated = true
  ) {
    showMainContent();
    setActiveContactLink();

    if (updateBrowserUrl) {
      updateUrl(`${createUrl('')}#contact`);
    }

    scrollToContact(animated);
  }

  function openPopup(
    popupClass,
    updateBrowserUrl = false
  ) {
    if (!showPopup(popupClass)) {
      return;
    }

    const routeName = popupToRoute[popupClass];

    if (
      updateBrowserUrl &&
      routeName
    ) {
      updateUrl(createUrl(routeName));
    }
  }

  function openPageFromUrl() {
    const routeName = getCurrentRouteName();

    if (routeName) {
      const popupClass = routeToPopup[routeName];

      openPopup(popupClass, false);
      return;
    }

    const hash = window.location.hash.toLowerCase();

    if (hash === '#contact') {
      openContact(false, false);
      return;
    }

    if (hash.startsWith('#popup-')) {
      const popupClass = hash.substring(1);
      const routeNameFromPopup = popupToRoute[popupClass];

      if (routeNameFromPopup) {
        openPopup(popupClass, false);

        updateUrl(
          createUrl(routeNameFromPopup),
          true
        );

        return;
      }
    }

    showMainContent();
    setActiveHomeLink();
    window.scrollTo(0, 0);
  }

  homeLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      openHome(true);
    });
  });

  contactLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      openContact(true, true);
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      const href = this.getAttribute('href');

      if (this.classList.contains('expand')) {
        event.preventDefault();
        event.stopPropagation();

        this.classList.remove('active');

        return;
      }

      if (
        href &&
        href.startsWith('#popup-')
      ) {
        event.preventDefault();

        const popupClass = href.substring(1);

        openPopup(popupClass, true);
      }
    });
  });

  window.addEventListener(
    'popstate',
    openPageFromUrl
  );

  window.addEventListener(
    'hashchange',
    openPageFromUrl
  );

  openPageFromUrl();
});


// Reveal content

document.addEventListener('DOMContentLoaded', () => {
  const revealSections = document.querySelectorAll(
    '.reveal-section'
  );

  if (!('IntersectionObserver' in window)) {
    revealSections.forEach((section) => {
      section.classList.add('is-visible');
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4
    }
  );

  revealSections.forEach((section) => {
    observer.observe(section);
  });
});


// FAQ toggle

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.faq')
    .forEach((faq) => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('visible');
      });
    });
});