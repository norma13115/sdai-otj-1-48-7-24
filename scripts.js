function fadeIn(element, duration) {
    if (!element) return; // Handle potential missing element

    let opacity = 0;
    const startTime = performance.now(); // Use performance.now() for accurate timing

    function increase() {
        const elapsedTime = performance.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 50); // Ensure progress doesn't exceed 1
        opacity = progress; 

        element.style.opacity = opacity;
        element.style.display = 'block';

        if (progress < 1) {
            requestAnimationFrame(increase);
        }
    }

    requestAnimationFrame(increase);
}

document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    fadeIn(heroImage, 10000); // Adjust duration as needed

    const qMenu = document.querySelector('.q-menu');
    fadeIn(qMenu, 10000); // Adjust duration as needed

    

});