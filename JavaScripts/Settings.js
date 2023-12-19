document.addEventListener('DOMContentLoaded', function () {
    const appearanceToggle = document.getElementById('appearance-toggle');
    const styleLink = document.getElementById('style-link');
    
    appearanceToggle.addEventListener('change', function () {
        if (appearanceToggle.checked) {
            // Dark mode is enabled
            document.body.classList.add('dark-mode');
            styleLink.href = '../CSS/Styles-Dark.css'; // Link to dark mode styles
        } else {
            // Dark mode is disabled
            document.body.classList.remove('dark-mode');
            styleLink.href = '../CSS/Styles.css'; // Link to light mode styles
        }
    });
});
