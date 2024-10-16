   // SHOWING HIDDEN NAV 

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


    // SHOW MENU 

    if ( navToggle ) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        })
    } 
    
    if ( navClose ) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        })
    }

    //REMOVE MOBILE MENU

    const navLink = document.querySelectorAll('.nav__link');

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu');

        // click nav__link to remove show menu class 
        navMenu.classList.remove('show-menu');
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));

    //SHADOW HEADER
    const shadowHeader = () => {
        const header = document.getElementById('header');

        window.scrollY >= 50 ? header.classList.add('shadow-header')
                           : header.classList.remove('shadow-header');
    }

    window.addEventListener('scroll', shadowHeader);



    // $$$$$$$$$$$$$$ ANIMATING THE HOME SECTION 


    document.addEventListener('DOMContentLoaded', () => {
        const homeName = document.querySelector('.home__name');
        const homeImage = document.querySelector('.home__image img');
        const homeScrollBox = document.querySelector('.home__scroll-box');
        const homeDescription = document.querySelector('.home__description');
        const homeSocialLinks = document.querySelectorAll('.home__social-link');
      
        // Animate Home Name
        homeName.style.animation = 'fadeIn 1s ease-out forwards';
        
        // Animate Home Image
        homeImage.style.animation = 'slideIn 1.5s ease-out forwards 0.5s';
        
        // Animate Home Description
        homeDescription.style.animation = 'fadeIn 2s ease-out forwards 1s';
      
        // Animate Scroll Box
        homeScrollBox.style.animation = 'fadeIn 2s ease-out forwards 1.5s';
        
        // Animate Social Links
        homeSocialLinks.forEach((link, index) => {
          link.style.animation = `rotateIn 1s ease-out forwards ${1.5 + index * 0.2}s`;
        });
      });
      
       



    // =========== EMAIL JS ============= 


    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_0gu7r8v','template_3ypmkyb',contactForm, 'Q0tB-gMsrTiO_0G27')
        .then(() => {
            //show sent message if successful
            contactMessage.textContent = 'Message sent successfully ✅';

            //removing the successful message after 5 seconds

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            //clearing the input fields
            contactForm.reset();

        }, () => {
            //show error message
            contactMessage.textContent = "Message not sent (service error) ❌";
        
        }); 
    } 

    contactForm.addEventListener('submit', sendEmail);


    // =========== SHOW SCROLL UP BUTTON ==========
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')

        //when the scroll is higher than the 350 viewport height, add the 
        window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll');
    }
    
    window.addEventListener('scroll', scrollUp);


//  ========== SCROLL SECTIONS ACTIVE LINK =============

const sections = document.querySelectorAll('section[id]');


const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if ( scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight ) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


// ============== DARK LIGHT THEME ============== 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//obtain current theme that the interface has by validating the dark-theme class
const getCurrentTheme  = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

//validating if the user previously chose a topic
if (selectedTheme) {
    //asking the issue to know if the dark theme is activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)

}

//activating/deactivating the theme using the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //saving the current theme + icon
    localStorage.setItem('selected-theme', getCurrentTheme)
    localStorage.setItem('selected-icon', getCurrentIcon)
})


// $$$$$$$$$$$$$$$$ SKILLS 

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// $$$$$$$$$ ANIMATING THE SERVICES SECTION
  document.addEventListener('DOMContentLoaded', function() {
    const animateSection = (sectionSelector, cardSelector, animationName) => {
      const section = document.querySelector(sectionSelector);
      const cards = document.querySelectorAll(cardSelector);

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
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
    };

    animateSection('.projects', '.projects__cards', 'slideDown');
    animateSection('.service', '.services__card', 'slideIn');
  });


  // $$$$$$$$$$$$$$$$ PROJECTS CATEGORIES

  // ####
//         GALLERY 2
// ####

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button-1');
  const articles = document.querySelectorAll('#grid-container article');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const filter = button.dataset.filter;
          articles.forEach(article => {
              if (article.matches(filter)) {
                  article.style.display = 'block';
              } else {
                  article.style.display = 'none';
              }
          });
      });
  });
});




