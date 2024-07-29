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


    // =========== EMAIL JS ============= 


    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_0gu7r8v','template_3ypmkyb','#contact-form', 'Q0tB-gMsrTiO_0G27')
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
            contactForm.textContent = "Message not sent (service error) ❌";
        
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