// WhatsApp Contact for Quote functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the product title from the page
    const productTitle = document.querySelector('.product-title');
    const contactButton = document.querySelector('.action-btn.tertiary');
    
    if (contactButton && productTitle) {
        contactButton.addEventListener('click', function() {
            // Get product name and clean it
            const productName = productTitle.textContent.trim();
            
            // WhatsApp number - Gottlich
            // Format: Country code + number (without + or spaces)
            const whatsappNumber = '917412807291'; // +91 74128 07291
            
            // Create message with product name
            const message = `Hi, I want to know about ${productName}`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
        });
    }
});
