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