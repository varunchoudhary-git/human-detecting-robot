// JavaScript for any dynamic behavior (if necessary)
document.addEventListener('DOMContentLoaded', function() {
    // Adding animation delay to sections as they scroll into view
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.style.animation = 'fadeInUp 1s forwards';
            }
        });
    });

    // Check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
    }
});
