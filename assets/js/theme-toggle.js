/**
 * Theme Toggle Script for Lana Gasparyan Portfolio
 * Handles dark/light mode switching with localStorage persistence
 */

(function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    if (!themeToggle || !themeIcon) {
        console.warn('Theme toggle elements not found');
        return;
    }

    // Get current theme (already set in head/custom.html)
    const currentTheme = html.getAttribute('data-theme') || 'light';
    updateIcon(currentTheme);

    // Theme toggle event listener
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Update theme
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);

        // Optional: Announce to screen readers
        themeToggle.setAttribute('aria-label', `Switch to ${currentTheme} mode`);
    });

    // Update icon based on theme
    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeToggle.setAttribute('title', 'Switch to light mode');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeToggle.setAttribute('title', 'Switch to dark mode');
        }
    }

    // Listen for system theme preference changes (optional enhancement)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only apply if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                html.setAttribute('data-theme', newTheme);
                updateIcon(newTheme);
            }
        });
    }
})();
