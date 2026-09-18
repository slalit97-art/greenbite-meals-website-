/* ==========================================================================
   GreenBite Meals — script.js
   Vanilla JS only: sticky navbar state, mobile hamburger menu, smooth-scroll
   active-link highlighting, scroll-in animations (Intersection Observer),
   contact form handling, and footer year.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------
     1. STICKY NAVBAR — add solid background/shadow once page is scrolled
  ------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');

  const handleNavbarScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  /* ------------------------------------------------------------------
     2. MOBILE HAMBURGER MENU
  ------------------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navbarNav = document.getElementById('navbarNav');

  const closeMenu = () => {
    hamburger.classList.remove('is-open');
    navbarNav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = navbarNav.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close the mobile menu whenever a nav link is tapped (smooth-scroll takes over)
  document.querySelectorAll('.nav-link, .navbar__cta').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  /* ------------------------------------------------------------------
     3. ACTIVE NAV-LINK HIGHLIGHTING WHILE SCROLLING
  ------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightActiveLink = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
    });
  };

  highlightActiveLink();
  window.addEventListener('scroll', highlightActiveLink, { passive: true });

  /* ------------------------------------------------------------------
     4. SCROLL-IN ANIMATIONS via Intersection Observer
        Elements with .fade-in-up get .is-visible once they enter the
        viewport; an optional data-delay attribute staggers the effect.
  ------------------------------------------------------------------- */
  const animatedEls = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  animatedEls.forEach((el) => observer.observe(el));

  /* ------------------------------------------------------------------
     5. CONTACT FORM — client-side handling (no backend wired up yet).
        Validates required fields, then hands off to WhatsApp with a
        pre-filled message so messages are never silently lost.
  ------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  const WHATSAPP_NUMBER = '971500000000';

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formNote.textContent = 'Please fill in all fields correctly before sending.';
      formNote.style.color = '#dc2626';
      contactForm.reportValidity();
      return;
    }

    const name = contactForm.name.value.trim();
    const phone = contactForm.phone.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    const whatsappText = encodeURIComponent(
      `Hi GreenBite Meals! My name is ${name}.\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    );

    formNote.style.color = '';
    formNote.textContent = 'Thanks! Opening WhatsApp to complete your message...';

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`, '_blank', 'noopener');
    contactForm.reset();
  });

  /* ------------------------------------------------------------------
     6. FAQ ACCORDION — one open panel at a time, fully accessible
        (aria-expanded on the trigger, aria-hidden on the collapsed panel).
  ------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq__trigger');
    const panel = item.querySelector('.faq__panel');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close every other panel so only one FAQ is open at a time
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          otherItem.querySelector('.faq__trigger').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq__panel').setAttribute('aria-hidden', 'true');
        }
      });

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
      panel.setAttribute('aria-hidden', String(isOpen));
    });
  });

  /* ------------------------------------------------------------------
     7. FOOTER — auto-update copyright year
  ------------------------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
