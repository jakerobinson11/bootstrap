document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#portfolioCarousel .carousel-item img');
    const modalElement = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // Initialize the modal once
    const imageModal = new bootstrap.Modal(modalElement);

    images.forEach(img => {
        img.addEventListener('click', function() {
            modalImage.src = this.src; // Set modal image src to the clicked image's src
            modalImage.alt = this.alt || "Enlarged Image"; // Optional: Set alt attribute
            
            // Show the modal
            imageModal.show();
        });
    });

    // Reset focus trap or cleanup if needed on modal hide
    modalElement.addEventListener('hidden.bs.modal', function() {
        document.activeElement.blur(); // Removes focus from any last active element
    });
});
document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

