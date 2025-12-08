// Enhanced website with 3D effects and animations
document.addEventListener('DOMContentLoaded', function () {

    // Create floating elements
    createFloatingElements();

    // Add parallax scrolling effect
    addParallaxEffect();

    // Add 3D tilt effects to cards
    add3DTiltEffects();

    // Initialize hamburger menu
    initHamburgerMenu();

    // Initialize hero slider
    initHeroSlider();
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            const submitButton = this.querySelector('button[type="submit"]');

            // Disable submit button during submission
            submitButton.disabled = true;
            submitButton.textContent = 'SENDING...';

            // Re-enable button after 3 seconds (for demo purposes)
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'SEND MESSAGE';
            }, 3000);
        });
    }

    // Add scroll-to-top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #AF6A4C;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 1000;
    `;

    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effects to product items
    const productItems = document.querySelectorAll('.product-item, .popular-item, .latest-item');
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });



    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Create floating background elements
function createFloatingElements() {
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-elements';

    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 6 + 's';
        element.style.animationDuration = (Math.random() * 4 + 4) + 's';
        floatingContainer.appendChild(element);
    }

    document.body.appendChild(floatingContainer);
}

// Add parallax scrolling effect
function addParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero-section, .products-section');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;

        parallaxElements.forEach(element => {
            const parallaxBg = document.createElement('div');
            parallaxBg.className = 'parallax-bg';
            if (!element.querySelector('.parallax-bg')) {
                element.appendChild(parallaxBg);
            }

            const bg = element.querySelector('.parallax-bg');
            if (bg) {
                bg.style.transform = `translateY(${rate}px)`;
            }
        });
    });
}

// Add 3D tilt effects to product cards
function add3DTiltEffects() {
    const cards = document.querySelectorAll('.product-item, .popular-item, .latest-item');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Add morphing shapes to sections
function addMorphingShapes() {
    const sections = document.querySelectorAll('.hero-section, .about-section, .products-section');

    sections.forEach((section, index) => {
        const shape = document.createElement('div');
        shape.className = 'morphing-shape';
        shape.style.top = Math.random() * 50 + '%';
        shape.style.right = Math.random() * 20 + '%';
        shape.style.animationDelay = index * 2 + 's';
        section.style.position = 'relative';
        section.appendChild(shape);
    });
}

// Enhanced scroll animations with 3D effects
function enhancedScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotateX(0deg)';

                // Add stagger effect for grid items
                const gridItems = entry.target.querySelectorAll('.product-item, .popular-item, .latest-item');
                gridItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0) rotateX(0deg)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px) rotateX(-10deg)';
        section.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(section);

        // Set initial state for grid items
        const gridItems = section.querySelectorAll('.product-item, .popular-item, .latest-item');
        gridItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px) rotateX(-15deg)';
            item.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });
}

// Add particle effect on button clicks
function addParticleEffect(element) {
    const particles = 12;
    const colors = ['#AF6A4C', '#D4956B', '#8B543C'];

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;

        const rect = element.getBoundingClientRect();
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 100 + Math.random() * 50;

        particle.animate([{
            transform: 'translate(0, 0) scale(1)',
            opacity: 1
        },
        {
            transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
            opacity: 0
        }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

// Enhanced button interactions
function enhanceButtonInteractions() {
    const buttons = document.querySelectorAll('.cta-button, button[type="submit"]');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            addParticleEffect(this);

            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Add magnetic effect to interactive elements
function addMagneticEffect() {
    const magneticElements = document.querySelectorAll('.cta-button, .nav a, .product-item');

    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Initialize all enhanced effects
addMorphingShapes();
enhancedScrollAnimations();
enhanceButtonInteractions();
addMagneticEffect();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add smooth page transitions
function addPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));

            if (target) {
                // Add transition effect
                document.body.style.transform = 'scale(0.98)';
                document.body.style.transition = 'transform 0.3s ease';

                setTimeout(() => {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    document.body.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
}

addPageTransitions();

// Hamburger Menu Functionality
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const navOverlay = document.getElementById('navOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // Open mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.add('active');
        mobileNav.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Add entrance animation to menu items
        mobileNavLinks.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateX(50px)';
            setTimeout(() => {
                link.style.transition = 'all 0.3s ease';
                link.style.opacity = '1';
                link.style.transform = 'translateX(0)';
            }, index * 100 + 200);
        });
    });

    // Close mobile menu function
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';

        // Reset menu items
        mobileNavLinks.forEach(link => {
            link.style.transition = 'none';
            link.style.opacity = '';
            link.style.transform = '';
        });
    }

    // Close menu events
    mobileNavClose.addEventListener('click', closeMobileMenu);
    navOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Only prevent default for internal anchor links (starting with #)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                // Update active states
                document.querySelectorAll('.nav a, .mobile-nav a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                link.classList.add('active');
                document.querySelector(`.nav a[href="${targetId}"]`).classList.add('active');

                // Close menu and scroll to section
                closeMobileMenu();

                setTimeout(() => {
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 300);
            } else {
                // For external links (like products.html), just close the menu
                closeMobileMenu();
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Enhanced mobile menu animations
function addMobileMenuAnimations() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    mobileNavLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(15px) scale(1.05)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0) scale(1)';
        });
    });
}

addMobileMenuAnimations();

// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;
    let isTransitioning = false;
    let autoSlideInterval;

    // Auto slide every 8 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 8000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function goToSlide(index) {
        if (isTransitioning || index === currentSlide) return;

        isTransitioning = true;

        // Add professional exit animation to current slide
        slides[currentSlide].classList.add('exiting');
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');

        // Prepare next slide for entrance
        slides[index].classList.add('entering');

        // Update current slide
        const previousSlide = currentSlide;
        currentSlide = index;

        // Complete transition after animation
        setTimeout(() => {
            // Clean up previous slide
            slides[previousSlide].classList.remove('exiting');
            slides[previousSlide].classList.add('prev');

            // Activate new slide
            slides[currentSlide].classList.remove('entering', 'prev', 'next');
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');

            // Clean up all transition classes
            slides.forEach(slide => {
                if (slide !== slides[currentSlide]) {
                    slide.classList.remove('prev', 'next', 'entering', 'exiting');
                }
            });

            isTransitioning = false;
        }, 400); // Match CSS animation duration
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Pause auto-slide on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
            stopAutoSlide();
            startAutoSlide();
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        }
    });

    // Initialize auto-slide
    startAutoSlide();

    // Preload images
    const imageUrls = [
        '01 - Edited.jpg',
        '02 - Edited.jpg',
        '03 - Edited.jpg',
        '04 - Edited.jpg',
        '05 - Edited.jpg'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Auto-scroll for Popular and Latest Products on Mobile
function initMobileProductScroll() {
    // Only run on mobile devices
    if (window.innerWidth <= 768) {
        const popularGrid = document.querySelector('.popular-grid');
        const latestGrid = document.querySelector('.latest-grid');

        function autoScroll(container) {
            if (!container) return;

            let currentIndex = 0;
            const items = container.querySelectorAll('.popular-item, .latest-item');
            const totalItems = items.length;
            const scrollSpeed = 4000; // 4 seconds per item (slower)
            let isUserScrolling = false;

            const scrollInterval = setInterval(() => {
                // Check if user is near this section (within viewport)
                const rect = container.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible && !isUserScrolling) {
                    currentIndex++;

                    // Reset to beginning if reached end
                    if (currentIndex >= totalItems) {
                        currentIndex = 0;
                    }

                    // Scroll to next item (full width)
                    const scrollPosition = currentIndex * container.clientWidth;
                    container.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            }, scrollSpeed);

            // Pause auto-scroll when user manually scrolls
            container.addEventListener('touchstart', () => {
                isUserScrolling = true;
            });

            let scrollTimeout;
            container.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isUserScrolling = false;
                }, 2000);
            });
        }

        // Initialize auto-scroll for both sections
        if (popularGrid) autoScroll(popularGrid);
        if (latestGrid) autoScroll(latestGrid);
    }
}

// Initialize mobile product scroll
initMobileProductScroll();

// Re-initialize on window resize
window.addEventListener('resize', () => {
    initMobileProductScroll();
});


// Contact form feedback
window.addEventListener('DOMContentLoaded', function() {
    // Check for success/error messages in URL
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.get('success') === '1') {
        showMessage('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
        // Remove query parameters from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    } else if (urlParams.get('error')) {
        const errorType = urlParams.get('error');
        let errorMessage = 'Sorry, there was an error sending your message. Please try again.';
        
        if (errorType === 'missing_fields') {
            errorMessage = 'Please fill in all required fields.';
        } else if (errorType === 'invalid_email') {
            errorMessage = 'Please enter a valid email address.';
        }
        
        showMessage(errorMessage, 'error');
        // Remove query parameters from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});

function showMessage(message, type) {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `contact-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        font-size: 16px;
        font-weight: 500;
        animation: slideDown 0.5s ease;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 500);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-50px);
        }
    }
`;
document.head.appendChild(style);
