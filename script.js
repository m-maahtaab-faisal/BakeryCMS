document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Hamburger Navigation Logic
    const mobileMenuToggle = document.querySelector('#mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-item');

    const toggleMenu = () => {
        mobileMenuToggle.classList.toggle('is-active');
        navLinksContainer.classList.toggle('active');
    };

    mobileMenuToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 2. Scroll Spy Engine
    const sections = document.querySelectorAll('section[id]');
    
    const scrollSpy = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 80;
            const sectionId = current.getAttribute('id');
            const targetNavLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (targetNavLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    targetNavLink.classList.add('active');
                } else {
                    targetNavLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', scrollSpy);
});