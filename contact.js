// JavaScript for Debugging and Interaction

document.addEventListener("DOMContentLoaded", function () {
    // Ensure links are working and debug with console logs
    const socialLinks = document.querySelectorAll('.social-icons a');

    socialLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href');
            console.log('Navigating to:', href);
        });

        // Add hover interaction for debugging
        link.addEventListener('mouseenter', function () {
            console.log(`Hovering over: ${link.getAttribute('href')}`);
        });
    });
});
