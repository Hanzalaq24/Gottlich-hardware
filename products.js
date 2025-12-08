// Product Showcase JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing product cards...'); // Debug log
    
    // Wait a bit for all elements to be ready
    setTimeout(function() {
        initializeProductCards();
    }, 100);
});

function initializeProductCards() {
    // Product Card Hover Effects
    const productCards = document.querySelectorAll('.product-card');
    console.log('Found product cards:', productCards.length); // Debug log
    
    if (productCards.length === 0) {
        console.log('No product cards found, retrying in 500ms...');
        setTimeout(initializeProductCards, 500);
        return;
    }
    
    productCards.forEach((card, index) => {
        console.log(`Setting up card ${index}:`, card); // Debug log
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Visual feedback
        card.style.cursor = 'pointer';
    });

    // Scroll Animations for Product Cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards for scroll animation
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Mobile Navigation (reuse from main script)
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

// Product Data for Detail Pages
const productDetailData = {
    'AUTO HINGES': {
        title: 'AUTO HINGES',
        subtitle: 'JOURNEY TOWARDS EXCELLENCE',
        mainImage: '05 - Edited.jpg',
        thumbnails: ['05 - Edited.jpg', 'category/3-1.jpeg', 'LP-5.jpeg', 'MPP-5.jpeg'],
        features: [
            'Built-in concealed soft-closing mechanism',
            '50,000 Cycles Tested for durability',
            'Fully Smooth Performance with cold-rolled steel material',
            'Door adjustment: 2D/3D adjustable for perfect alignment',
            'Available in MS, Black, and SS finishes'
        ],
        sizes: ['2D Auto Hinges', '3D Auto Hinges'],
        specifications: [
            { code: 'AH - 2D-MS', size: '2D Auto', finish: 'MS' },
            { code: 'AH - 2D-SS', size: '2D Auto', finish: 'SS' },
            { code: 'AH - 3D-MS', size: '3D Auto', finish: 'MS' },
            { code: 'AH - 3D-BLK', size: '3D Auto', finish: 'BLACK' },
            { code: 'AH - 3D-SS', size: '3D Auto', finish: 'SS' }
        ]
    },
    'SLIM TANDEM BOX SERIES': {
        title: 'SLIM TANDEM BOX',
        subtitle: 'JOURNEY TOWARDS EXCELLENCE',
        mainImage: '02 - Edited.jpg',
        thumbnails: ['02 - Edited.jpg', 'category/1-1.jpg', 'MPP-1.jpeg', 'MPP-2.jpeg'],
        features: [
            'Drawer Width Can Be Designed Freely with Automatic Error Adjustment',
            'Hidden Full Pullout Silencing Skid Can bear 45 kg and enjoys',
            'Excellent Stability and Quite and Smooth Sliding Performance',
            'Newly designed built in damper ensures soft close and smooth drawer movements',
            'Weight Capacity 45 kg Board Is High 86 mm to 300 mm'
        ],
        sizes: ['4" (86MM)', '6" (116MM)', '8" (171MM)', '10" (203MM)'],
        specifications: [
            { code: 'STB - 4086', size: '300MM', finish: 'GRAY' },
            { code: 'STB - 4086', size: '350MM', finish: 'GRAY' },
            { code: 'STB - 4086', size: '400MM', finish: 'GRAY' },
            { code: 'STB - 4086', size: '450MM', finish: 'GRAY' },
            { code: 'STB - 4086', size: '500MM', finish: 'GRAY' },
            { code: 'STB - 4086', size: '550MM', finish: 'GRAY' }
        ]
    },
    'PULL-OUT': {
        title: 'PULL-OUT',
        subtitle: 'JOURNEY TOWARDS EXCELLENCE',
        mainImage: '03 - Edited.jpg',
        thumbnails: ['03 - Edited.jpg', 'category/1-2.jpg', 'LP-1.jpeg', 'LP-2.jpg'],
        features: [
            'Glass Pull-Out for storing spice and oil bottles',
            'Universal pullout Side mounted with frame',
            'Fully smooth sliding performance',
            'Can be used both side left or right',
            'Perfect for storing small bottles and containers'
        ],
        sizes: ['Glass Pull-Out', 'Grey Finish Pull-Out'],
        specifications: [
            { code: 'PO - GLASS', size: 'Standard', finish: 'GLASS' },
            { code: 'PO - GREY', size: 'Standard', finish: 'GREY' }
        ]
    },
    'MAGIC CORNER': {
        title: 'MAGIC CORNER',
        subtitle: 'JOURNEY TOWARDS EXCELLENCE',
        mainImage: '04 - Edited.jpg',
        thumbnails: ['04 - Edited.jpg', 'category/1-3.jpg', 'LP-3.jpg', 'LP-4.jpeg'],
        features: [
            'Universal installation with 24 kg loading capacity',
            'Solid base with 4 basket configuration',
            'Basket with anti slip matt for secure storage',
            'Suitable for blind corner cabinet door size of 450mm',
            'Available in Glass and Grey finishes'
        ],
        sizes: ['Glass Magic Corner', 'Grey Magic Corner'],
        specifications: [
            { code: 'MC - GLASS', size: '660x515x600MM', finish: 'GLASS' },
            { code: 'MC - GREY', size: '660x515x600MM', finish: 'GREY' }
        ]
    },
    'TELESCOPIC': {
        title: 'TELESCOPIC CHANNEL',
        subtitle: 'JOURNEY TOWARDS EXCELLENCE',
        mainImage: '01 - Edited.jpg',
        thumbnails: ['01 - Edited.jpg', 'category/3-2.jpg', 'MPP-3.jpeg', 'MPP-4.jpeg'],
        features: [
            'Full Extension with Zinc Plated/Powder Coated finish',
            'Electrophoresis Treatment for strong anti-rust ability',
            'Sliding fit in horizontal and vertical directions',
            'Suitable for kitchen cabinet, home drawer & office furniture',
            'Heavy Duty and Channel Telescopic options available'
        ],
        sizes: ['Heavy Duty', 'Channel Telescopic'],
        specifications: [
            { code: 'TC - HD300', size: '300MM', finish: 'ZINC PLATED' },
            { code: 'TC - HD400', size: '400MM', finish: 'ZINC PLATED' },
            { code: 'TC - CH300', size: '300MM', finish: 'POWDER COATED' },
            { code: 'TC - CH400', size: '400MM', finish: 'POWDER COATED' }
        ]
    }
};

// Helper Functions - Make this global so onclick can access it
window.showProductInfo = function(productName) {
    console.log('showProductInfo called with:', productName); // Debug log
    
    // Hide the product showcase
    const heroSection = document.querySelector('.products-hero');
    const showcaseSection = document.querySelector('.products-showcase');
    
    console.log('Hero section found:', heroSection); // Debug log
    console.log('Showcase section found:', showcaseSection); // Debug log
    
    if (heroSection) heroSection.style.display = 'none';
    if (showcaseSection) showcaseSection.style.display = 'none';
    
    // Show the product detail section
    showProductDetail(productName);
}
    
    // Add modal styles
    const modalStyles = `
        .product-info-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 30px;
            border-bottom: 1px solid #eee;
        }
        .modal-header h2 {
            color: #AF6A4C;
            margin: 0;
            font-size: 1.5rem;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            transition: color 0.3s ease;
        }
        .modal-close:hover {
            color: #AF6A4C;
        }
        .modal-body {
            padding: 30px;
        }
        .modal-body p {
            margin-bottom: 15px;
            line-height: 1.6;
            color: #555;
        }
        .modal-actions {
            display: flex;
            gap: 15px;
            margin-top: 25px;
        }
        .modal-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            flex: 1;
        }
        .modal-btn.primary {
            background: linear-gradient(45deg, #AF6A4C, #D4956B);
            color: white;
        }
        .modal-btn.primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(175, 106, 76, 0.3);
        }
        .modal-btn.secondary {
            background: white;
            color: #AF6A4C;
            border: 2px solid #AF6A4C;
        }
        .modal-btn.secondary:hover {
            background: #AF6A4C;
            color: white;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
    
    // Close modal functionality
    const closeModal = () => {
        modal.remove();
        styleSheet.remove();
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Button functionality
    modal.querySelector('.modal-btn.primary').addEventListener('click', () => {
        closeModal();
        window.location.href = 'index.html#contact';
    });
    
    modal.querySelector('.modal-btn.secondary').addEventListener('click', () => {
        closeModal();
        showNotification('Catalog download will be available soon!', 'info');
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        }
        .notification.success {
            background: linear-gradient(45deg, #4CAF50, #45a049);
        }
        .notification.info {
            background: linear-gradient(45deg, #AF6A4C, #D4956B);
        }
        .notification.error {
            background: linear-gradient(45deg, #f44336, #da190b);
        }
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function showProductDetail(productName) {
    const product = productDetailData[productName] || {
        title: productName,
        subtitle: 'JOURNEY TOWARDS EXCELLENCE',
        mainImage: '02 - Edited.jpg',
        thumbnails: ['02 - Edited.jpg', 'category/1-1.jpg', 'MPP-1.jpeg', 'MPP-2.jpeg'],
        features: [
            'High-quality and durable product designed for modern living',
            'Premium materials and construction',
            'Smooth operation and long-lasting performance',
            'Easy installation and maintenance',
            'Available in multiple finishes'
        ],
        sizes: ['Standard Size'],
        specifications: [
            { code: 'STD - 001', size: 'Standard', finish: 'STANDARD' }
        ]
    };

    // Create the product detail HTML
    const productDetailHTML = `
        <section class="product-detail-section">
            <div class="back-navigation">
                <button class="back-btn" id="backToProducts">
                    <span>←</span> Back to All Products
                </button>
            </div>
            <div class="product-container">
                <!-- Left Side - Product Images -->
                <div class="product-images">
                    <div class="thumbnail-list">
                        ${product.thumbnails.map((img, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                                <img src="${img}" alt="${product.title} View ${index + 1}" width="150" height="150">
                            </div>
                        `).join('')}
                    </div>

                    <div class="main-image-container">
                        <img id="mainProductImage" src="${product.mainImage}" alt="${product.title} Main View" width="600" height="400">
                        <div class="image-overlay"></div>
                    </div>
                </div>

                <!-- Right Side - Product Info -->
                <div class="product-info">
                    <div class="product-header">
                        <h1 class="product-title">${product.title}</h1>
                        <p class="product-subtitle">${product.subtitle}</p>
                    </div>

                    <div class="features-section">
                        <h2>Features</h2>
                        <ul class="features-list">
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>

                    <!-- Size Options -->
                    <div class="size-options">
                        <h3>Available Sizes</h3>
                        <div class="size-buttons">
                            ${product.sizes.map((size, index) => `
                                <button class="size-btn ${index === 0 ? 'active' : ''}" data-size="${size}">${size}</button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Specifications Table -->
                    <div class="specifications">
                        <h3>Specifications</h3>
                        <div class="spec-table">
                            <div class="spec-header">
                                <span>CODE</span>
                                <span>SIZE</span>
                                <span>FINISH</span>
                            </div>
                            ${product.specifications.map(spec => `
                                <div class="spec-row">
                                    <span>${spec.code}</span>
                                    <span>${spec.size}</span>
                                    <span>${spec.finish}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="product-actions">
                        <button class="action-btn primary">Installation Guide</button>
                        <button class="action-btn secondary">Download Catalog</button>
                        <button class="action-btn tertiary">Contact for Quote</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Products Section -->
        <section class="related-products">
            <h2>Related Products</h2>
            <div class="related-grid">
                <div class="related-item" onclick="showProductInfo('TELESCOPIC')">
                    <img src="01 - Edited.jpg" alt="Telescopic Channel" width="200" height="200">
                    <h3>TELESCOPIC CHANNEL</h3>
                    <p>Full Extension - Finish Zinc Plated</p>
                </div>
                <div class="related-item" onclick="showProductInfo('PULL-OUT')">
                    <img src="03 - Edited.jpg" alt="Pull-Out" width="200" height="200">
                    <h3>PULL-OUT</h3>
                    <p>Universal pullout Side mounted</p>
                </div>
                <div class="related-item" onclick="showProductInfo('MAGIC CORNER')">
                    <img src="04 - Edited.jpg" alt="Magic Corner" width="200" height="200">
                    <h3>MAGIC CORNER</h3>
                    <p>Universal installation Loading capacity: 24 kg</p>
                </div>
                <div class="related-item" onclick="showProductInfo('AUTO HINGES')">
                    <img src="05 - Edited.jpg" alt="Auto Hinges" width="200" height="200">
                    <h3>AUTO HINGES</h3>
                    <p>Built-in concealed soft-closing</p>
                </div>
            </div>
        </section>
    `;

    // Insert the product detail HTML after the main tag
    const main = document.querySelector('main');
    main.insertAdjacentHTML('beforeend', productDetailHTML);

    // Initialize the product detail functionality
    initializeProductDetail();
}

function initializeProductDetail() {
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

    // Action Button Functionality
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle different button actions
            switch(buttonText) {
                case 'Installation Guide':
                    showInstallationGuide();
                    break;
                case 'Download Catalog':
                    downloadCatalog();
                    break;
                case 'Contact for Quote':
                    window.location.href = 'index.html#contact';
                    break;
            }
        });
    });

    // Back button functionality
    const backBtn = document.getElementById('backToProducts');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Remove the product detail section
            document.querySelector('.product-detail-section').remove();
            document.querySelector('.related-products').remove();
            
            // Show the product showcase
            document.querySelector('.products-hero').style.display = 'block';
            document.querySelector('.products-showcase').style.display = 'block';
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function showInstallationGuide() {
    // Create modal for installation guide
    const modal = document.createElement('div');
    modal.className = 'installation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Installation Guide</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Product Installation Steps:</h3>
                <ol>
                    <li>Measure and mark the cabinet interior dimensions</li>
                    <li>Install the hardware according to specifications</li>
                    <li>Mount the product ensuring proper alignment</li>
                    <li>Test the mechanism for smooth operation</li>
                    <li>Adjust if necessary for optimal performance</li>
                </ol>
                <p><strong>Tools Required:</strong> Drill, Screwdriver, Measuring tape, Level</p>
                <p><strong>Installation Time:</strong> Approximately 30-45 minutes</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyles = `
        .installation-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            animation: slideUp 0.3s ease;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 30px;
            border-bottom: 1px solid #eee;
        }
        .modal-header h2 {
            color: #AF6A4C;
            margin: 0;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
        }
        .modal-body {
            padding: 30px;
        }
        .modal-body h3 {
            color: #AF6A4C;
            margin-bottom: 20px;
        }
        .modal-body ol {
            margin-bottom: 20px;
        }
        .modal-body li {
            margin-bottom: 10px;
            line-height: 1.6;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
    
    // Close modal functionality
    const closeModal = () => {
        modal.remove();
        styleSheet.remove();
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function downloadCatalog() {
    showNotification('Catalog download will be available soon!', 'info');
}