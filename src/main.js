// Main Entry Point
import './core/utils/dom.js';

// Import Layout
import { initHeader, initFooter } from './components/layout.js';

// Import Features
import { initHero } from './features/hero/hero.js';
import { initAbout } from './features/about/about.js';
import { initServices } from './features/services/services.js';
import { initSkills } from './features/skills/skills.js';
import { initExperience } from './features/experience/experience.js';
import { initEducation } from './features/education/education.js';
import { initProjects } from './features/projects/projects.js';
import { initContact } from './features/contact/contact.js';

console.log("Portfolio App Initialized");

// Initialize Features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Layout
    initHeader();

    // Features
    initHero();
    initAbout();
    initServices();
    initSkills();
    initExperience(); // Work Experience
    initEducation();
    initProjects();
    initContact();

    // Layout
    initFooter();

    // Observers
    import('./core/utils/observer.js').then(({ initScrollObserver, initActiveNavLinkObserver }) => {
        initScrollObserver();
        initActiveNavLinkObserver();
        console.log("Observers Initialized");
    });

    // Creative Visuals
    import('./features/visuals/background.js').then(module => {
        module.initBackground();
    });

    console.log("All features mounted successfully.");
});
