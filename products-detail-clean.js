// Product Detail Page JavaScript - Clean Version

document.addEventListener('DOMContentLoaded', function() {
    // Image Gallery Functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainProductImage');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Change main image
            const newImageSrc = this.getAttribute('data-image');
            mainImage.src = newImageSrc;
            
            // Add animation effect
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 150);
        });
    });

    // Size Button Functionality
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all size buttons
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const navOverlay = document.getElementById('navOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            mobileNav.classList.add('active');
            navOverlay.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        function closeMobileNav() {
            mobileNav.classList.remove('active');
            navOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }

        mobileNavClose.addEventListener('click', closeMobileNav);
        navOverlay.addEventListener('click', closeMobileNav);

        // Close mobile nav when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }
});