document.addEventListener('DOMContentLoaded', () => {

    // Get all the necessary elements from the DOM
    const productImage = document.getElementById('product-image');
    const colorSwatches = document.querySelectorAll('.swatch');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // --- Color Swatch Functionality ---
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            // Get the image path from the data-image attribute
            const newImage = swatch.dataset.image;
            
            // Set the main product image's src to the new path
            productImage.src = newImage;

            // Update the 'active' class on swatches
            // 1. Remove 'active' from the currently active swatch
            document.querySelector('.swatch.active').classList.remove('active');
            
            // 2. Add 'active' to the clicked swatch
            swatch.classList.add('active');
        });
    });

    // --- Modal Functionality ---

    // Show the modal when "Add to Cart" is clicked
    addToCartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    // Hide the modal when the "Continue Shopping" button is clicked
    closeModalBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // Optional: Hide the modal if the user clicks on the overlay background
    cartModal.addEventListener('click', (event) => {
        // Only close if the click is on the overlay itself, not the content
        if (event.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

});