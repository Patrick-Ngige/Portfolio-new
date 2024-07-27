import { API_KEY, serviceID } from "./config";

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


    // HIDE MENU 

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

        this.scrollY >= 50 ? header.classList.add('shadow-header')
                           : header.classList.remove('shadow-header');
    }

    window.addEventListener('scroll', shadowHeader);


    // =========== EMAIL JS ============= 


    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        // serviceID - templateID - #form - publicKey
        emailjs.sendForm(serviceID,'template_3ypmkyb','#contact-form', API_KEY)
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
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll');
    }
    
    window.addEventListener('scroll', scrollUp);


    // const handleScroll = () => {
    //     const scrollUpButton = document.getElementById('scroll-up');
    //     const scrollThreshold = 350;
    
    //     if (window.scrollY >= scrollThreshold) {
    //         scrollUpButton.classList.add('show-scroll');
    //     } else {
    //         scrollUpButton.classList.remove('show-scroll');
    //     }
    // };
    
    // // Listen for scrolls (throttled for performance)
    // window.addEventListener('scroll', handleScroll, { passive: true });
    