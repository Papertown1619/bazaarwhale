
// Main JavaScript file for BazaarWhale

document.addEventListener('DOMContentLoaded', function() {
    console.log('BazaarWhale application initialized');
    
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function() {
            const mainNav = document.querySelector('.main-nav');
            mainNav.classList.toggle('active');
        });
    }
    
    // Product image gallery
    const productThumbnails = document.querySelectorAll('.product-thumbnail');
    if (productThumbnails.length > 0) {
        productThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const mainImage = document.querySelector('.product-main-image img');
                mainImage.src = this.dataset.src;
                
                // Remove active class from all thumbnails
                productThumbnails.forEach(thumb => thumb.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
            });
        });
    }
    
    // Form validation
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            
            // Simple required field validation
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                    
                    // Find or create error message
                    let errorMsg = field.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('div');
                        errorMsg.classList.add('error-message');
                        field.parentNode.insertBefore(errorMsg, field.nextSibling);
                    }
                    
                    errorMsg.textContent = 'This field is required';
                } else {
                    field.classList.remove('is-invalid');
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.textContent = '';
                    }
                }
            });
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    });
});
