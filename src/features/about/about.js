import { $ } from '../../core/utils/dom.js';
import { profile } from '../../core/data/profile.js';

export const renderAbout = () => {
    return `
        <div class="container">
            <div class="about-grid">
                <!-- Bio Card -->
                <div class="bento-card card-bio animate-fade-in">
                    <h2 class="section-title gradient-text">
                        About Me
                    </h2>
                    <p class="bio-text">
                        I am a dedicated <span class="highlight text-cyan">Senior Mobile App Developer</span> with a passion for crafting <span class="highlight">exceptional digital experiences</span>. Specialized in <span class="highlight text-blue">Flutter</span> and <span class="highlight text-violet">Dart</span>, I focus on building <span class="highlight">accessible</span>, <span class="highlight">pixel-perfect</span>, and highly <span class="highlight">performant</span> applications. With a deep commitment to <span class="highlight text-cyan">Clean Architecture</span> and <span class="highlight">scalable code</span>, I transform complex requirements into elegant, <span class="highlight text-blue">user-centric</span> mobile solutions.
                    </p>
                    <div style="margin-top: 2rem;">
                        <a href="${profile.actions.cv}" class="btn btn-primary glow-button">
                            Download Resume
                        </a>
                    </div>
                </div>

                <!-- Visual/Image Card -->
                <div class="about-visual card-visual animate-fade-in" style="animation-delay: 0.2s;">
                     <div class="image-wrapper">
                        <img src="./assets/images/setup.png" alt="Developer Workspace">
                        <div class="image-overlay"></div>
                     </div>
                </div>

                <!-- Core Focus Card -->
                <div class="bento-card card-focus animate-fade-in" style="animation-delay: 0.4s;">
                    <div class="focus-item">
                        <div class="focus-icon-box box-cyan">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        </div>
                        <div class="focus-content">
                            <h3>Clean Architecture</h3>
                            <span>Scalable & Testable</span>
                        </div>
                    </div>

                     <div class="focus-item">
                        <div class="focus-icon-box box-violet">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                        </div>
                        <div class="focus-content">
                            <h3>High Performance</h3>
                            <span>Smooth 60fps UI</span>
                        </div>
                    </div>

                     <div class="focus-item">
                        <div class="focus-icon-box box-pink">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                        </div>
                        <div class="focus-content">
                            <h3>Pixel Perfect</h3>
                            <span>Detail Oriented</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export const initAbout = () => {
    const section = $('#about');
    if (section) {
        section.innerHTML = renderAbout();
    }
};
