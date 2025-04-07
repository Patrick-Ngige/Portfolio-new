document.addEventListener('DOMContentLoaded', () => {
  // SHOWING HIDDEN NAV
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');

  if (navToggle) {
      navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
      });
  }

  if (navClose) {
      navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
      });
  }

  // REMOVE MOBILE MENU
  const navLink = document.querySelectorAll('.nav__link');
  const linkAction = () => {
      if (navMenu) {
          navMenu.classList.remove('show-menu');
      }
  };

  navLink.forEach((n) => n.addEventListener('click', linkAction));

  // SHADOW HEADER
  const shadowHeader = () => {
      const header = document.getElementById('header');
      if (header) {
          window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
      }
  };

  window.addEventListener('scroll', shadowHeader);

  // ANIMATING THE HOME SECTION
  const homeName = document.querySelector('.home__name');
  const homeImage = document.querySelector('.home__image img');
  const homeScrollBox = document.querySelector('.home__scroll-box');
  const homeDescription = document.querySelector('.home__description');
  const homeSocialLinks = document.querySelectorAll('.home__social-link');

  if (homeName) {
      homeName.style.animation = 'fadeIn 1s ease-out forwards';
  }
  if (homeImage) {
      homeImage.style.animation = 'slideIn 1.5s ease-out forwards 0.5s';
  }
  if (homeDescription) {
      homeDescription.style.animation = 'fadeIn 2s ease-out forwards 1s';
  }
  if (homeScrollBox) {
      homeScrollBox.style.animation = 'fadeIn 2s ease-out forwards 1.5s';
  }
  homeSocialLinks.forEach((link, index) => {
      if (link) {
          link.style.animation = `rotateIn 1s ease-out forwards ${1.5 + index * 0.2}s`;
      }
  });

  // ANIMATING THE SERVICE SECTION
  const animateSection = (sectionSelector, cardSelector, animationName) => {
      const section = document.querySelector(sectionSelector);
      const cards = document.querySelectorAll(cardSelector);

      if (section && cards.length) {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1,
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      section.style.opacity = '1';
                      cards.forEach((card, index) => {
                          card.style.opacity = '1';
                          card.style.transform = 'translateY(0)';
                          card.style.animation = `${animationName} 2s ease forwards ${index * 0.3}s`;
                      });
                      observer.unobserve(section);
                  }
              });
          }, observerOptions);

          observer.observe(section);
      }
  };

  animateSection('.service', '.services__card', 'slideIn');
  animateSection('.projects', '.projects__cards', 'slideDown');

  // EMAIL JS
  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');

  if (contactForm) {
      const sendEmail = (e) => {
          e.preventDefault();

          emailjs
              .sendForm('service_0gu7r8v', 'template_3ypmkyb', contactForm, 'Q0tB-gMsrTiO_0G27')
              .then(() => {
                  if (contactMessage) {
                      contactMessage.textContent = 'Message sent successfully ✅';
                      setTimeout(() => {
                          contactMessage.textContent = '';
                      }, 5000);
                  }
                  contactForm.reset();
              })
              .catch(() => {
                  if (contactMessage) {
                      contactMessage.textContent = 'Message not sent (service error) ❌';
                  }
              });
      };

      contactForm.addEventListener('submit', sendEmail);
  }

  // SHOW SCROLL UP BUTTON
  const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up');
      if (scrollUp) {
          window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
      }
  };

  window.addEventListener('scroll', scrollUp);

  // SCROLL SECTIONS ACTIVE LINK
  const sections = document.querySelectorAll('section[id]');
  const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 58;
          const sectionId = current.getAttribute('id');
          const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

          if (sectionsClass) {
              if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                  sectionsClass.classList.add('active-link');
              } else {
                  sectionsClass.classList.remove('active-link');
              }
          }
      });
  };

  if (sections.length) {
      window.addEventListener('scroll', scrollActive);
  }

  // DARK LIGHT THEME
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'ri-sun-line';

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

  if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      if (themeButton) {
          themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
      }
  }

  if (themeButton) {
      themeButton.addEventListener('click', () => {
          document.body.classList.toggle(darkTheme);
          themeButton.classList.toggle(iconTheme);

          localStorage.setItem('selected-theme', getCurrentTheme());
          localStorage.setItem('selected-icon', getCurrentIcon());
      });
  }

  // PROJECTS CATEGORIES
  const buttons = document.querySelectorAll('.button-1');
  const articles = document.querySelectorAll('#grid-container article');

  if (buttons.length && articles.length) {
      buttons.forEach((button) => {
          button.addEventListener('click', () => {
              buttons.forEach((btn) => btn.classList.remove('active'));
              button.classList.add('active');

              const filter = button.dataset.filter;
              articles.forEach((article) => {
                  if (article.matches(filter)) {
                      article.style.display = 'block';
                  } else {
                      article.style.display = 'none';
                  }
              });
          });
      });
  }
});