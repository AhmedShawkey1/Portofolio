import { $ } from '../../core/utils/dom.js';

const projects = [
    {
        title: "E-Commerce App",
        image: "https://placehold.co/600x400/2563EB/FFFFFF?text=E-Commerce",
        description: "A full-featured mobile shopping application built with Flutter. Includes payment integration, user profiles, and order tracking.",
        tags: ["Flutter", "Dart", "Firebase", "Stripe"],
        liveLink: "#",
        repoLink: "#"
    },
    {
        title: "Portfolio Website",
        image: "https://placehold.co/600x400/10B981/FFFFFF?text=Portfolio",
        description: "A clean, modern, and responsive portfolio website built with Vanilla JavaScript and CSS Grid. High performance and accessibility.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveLink: "#",
        repoLink: "#"
    },
    {
        title: "Dashboard UI",
        image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Dashboard",
        description: "An analytics dashboard for tracking user metrics. Features interactive charts/graphs and dark mode support.",
        tags: ["React", "Chart.js", "Tailwind CSS"],
        liveLink: "#",
        repoLink: "#"
    }
];

const renderTag = (tag) => `<span class="project-tag">${tag}</span>`;

const renderProjectCard = (project) => `
    <article class="project-card">
        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(renderTag).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" class="link-btn" target="_blank" rel="noopener noreferrer" aria-label="View Live Demo for ${project.title}">Live Demo ↗</a>
                <a href="${project.repoLink}" class="link-btn" target="_blank" rel="noopener noreferrer" aria-label="View Source Code for ${project.title} on GitHub">GitHub ↗</a>
            </div>
        </div>
    </article>
`;

export const renderProjects = () => {
    return `
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                ${projects.map(renderProjectCard).join('')}
            </div>
        </div>
    `;
};

export const initProjects = () => {
    const section = $('#projects');
    if (section) {
        section.innerHTML = renderProjects();
    }
};
