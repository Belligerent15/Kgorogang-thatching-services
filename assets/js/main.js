// =====================================
// Kgorogang Thatching Services
// Main JavaScript - Piet Seloga
// =====================================

document.addEventListener('DOMContentLoaded', function() {

    // ===== Mobile Navigation Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ===== Portfolio Filter =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    if (filterButtons.length > 0 && portfolioCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                portfolioCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'block';
                        // Small delay for nice animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ===== Contact Form Handling (Formspree) =====
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const formAction = this.getAttribute('action');

            // Demo mode warning
            if (formAction.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                if (formSuccess) {
                    contactForm.style.display = 'none';
                    formSuccess.style.display = 'block';
                    formSuccess.scrollIntoView({ behavior: 'smooth' });
                }
                return;
            }

            // Real Formspree submission - you can add extra validation here if needed
        });
    }

    // ===== Smooth Scroll for Internal Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Fade-in Animation on Scroll =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements
    document.querySelectorAll('.service-card, .portfolio-card, .value-card, .reason-card, .testimonial-card, .portfolio-item').forEach(el => {
        observer.observe(el);
    });

    // ===== WhatsApp Button Tracking =====
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('click', () => {
            console.log('%cWhatsApp button clicked - Lead generated', 'color: #25d366; font-weight: bold');
        });
    }

    // ===== Current Year in Footer =====
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });

    // ===== Final Message =====
    console.log('%c✅ Kgorogang Thatching Services website loaded successfully!', 
                'color: #2d5016; font-size: 14px; font-weight: bold;');
});
