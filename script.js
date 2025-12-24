document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Toggle Mobile Menu
    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        mobileNavToggle.classList.toggle('open');
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            mobileNavToggle.classList.remove('open');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Simple Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Email Obfuscation Protection
    // Assemble email: brandenstein [at] posteo.de
    const user = 'brandenstein';
    const domain = 'posteo.de';
    const email = `${user}@${domain}`;
    
    document.querySelectorAll('.protected-email').forEach(el => {
        // Set the visible text if it's empty or needs replacing
        if (el.textContent === '' || el.textContent.includes('(at)')) {
            el.textContent = email;
        }
        
        // Wrap in a link if requested
        if (el.dataset.mailto === 'true') {
            el.style.cursor = 'pointer';
            el.addEventListener('click', (e) => {
                window.location.href = `mailto:${email}`;
            });
        }
    });
});
