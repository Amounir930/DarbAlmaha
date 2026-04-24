/* landing.js - Interactivity & i18n for Dar Al Mahara */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Language Switching Logic ---
    const langBtn = document.getElementById('langToggle');
    const htmlTag = document.documentElement;

    langBtn.addEventListener('click', () => {
        const currentLang = htmlTag.getAttribute('lang');
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        const newDir = newLang === 'ar' ? 'rtl' : 'ltr';

        // Update HTML attributes
        htmlTag.setAttribute('lang', newLang);
        htmlTag.setAttribute('dir', newDir);

        // Update button text
        langBtn.textContent = newLang === 'ar' ? 'English' : 'عربي';

        // Update all translation elements
        document.querySelectorAll('[data-ar]').forEach(el => {
            el.textContent = el.getAttribute(`data-${newLang}`);
        });

        // Save preference
        localStorage.setItem('preferredLang', newLang);
    });

    // Load saved language preference if any
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== htmlTag.getAttribute('lang')) {
        langBtn.click(); // Trigger change
    }

    // --- 2. Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const headerNav = document.querySelector('.header-nav');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isMenuOpen = navLinks.classList.contains('active');
            mobileBtn.innerHTML = isMenuOpen ? '✕' : '☰';

            // Show/hide nav links on mobile
            if (headerNav) {
                headerNav.style.display = isMenuOpen ? 'block' : 'none';
            }
        });
    }

    // Close mobile menu on link click with smooth scroll
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only handle anchor links (sections)
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Close mobile menu first
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        if (mobileBtn) mobileBtn.innerHTML = '☰';
                        if (headerNav) headerNav.style.display = 'none';

                        // Wait for menu animation to complete, then scroll
                        setTimeout(() => {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }, 300);
                    } else {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        });
    });

    // --- 3. Sticky Header on Scroll ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 4. Counter Animation for Stats ---
    const counters = document.querySelectorAll('.counter-val');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Intersection Observer to trigger counters only when visible
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(statsSection);
    }

    // --- 5. Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.fade-in-up');
    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
