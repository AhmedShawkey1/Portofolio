import { $, $$ } from '../core/utils/dom.js';

export const renderHeader = () => {
    return `
        <div class="container nav-container">
            <a href="#" class="logo" aria-label="Ahmed Portfolio">Ahmed</a>
            
            <nav class="nav-links">
                <a href="#hero" class="nav-link active">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <button class="mobile-menu-btn" aria-label="Toggle Menu">
                ☰
            </button>
        </div>

        <nav class="mobile-nav">
                <a href="#hero" class="nav-link">Home</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#services" class="nav-link">Services</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#contact" class="nav-link">Contact</a>
        </nav>
    `;
};

export const initHeader = () => {
    const header = $('#header');
    if (header) {
        header.innerHTML = renderHeader();

        // Mobile Menu Logic
        const btn = $('.mobile-menu-btn');
        const mobileNav = $('.mobile-nav');

        btn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            btn.innerHTML = mobileNav.classList.contains('open') ? '✕' : '☰';
        });

        // Close mobile menu on link click
        $$('.mobile-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                btn.innerHTML = '☰';
            });
        });
    }
};

export const renderFooter = () => {
    const year = new Date().getFullYear();
    return `
        <div class="container">
            <p>&copy; ${year} Ahmed Shawqui. All rights reserved.</p>
            <p style="font-size: var(--font-size-xs); margin-top: var(--spacing-sm);">Built with Vanilla JS & Clean Architecture</p>
        </div>
    `;
};

export const initFooter = () => {
    const footer = $('#footer');
    if (footer) footer.innerHTML = renderFooter();
};
