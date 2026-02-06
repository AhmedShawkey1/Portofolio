import { $ } from '../../core/utils/dom.js';

const services = [
    {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-9L10 0H4a2 2 0 0 0-2 2v1h18l2.9-2.2A2 2 0 0 0 20 7ZM2 6v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H2v-2"></path><path d="M16 16c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8 14h.01"></path></svg>',
        title: 'Web Development',
        description: 'Building fast, responsive, and secure websites using modern technologies like React, Vue, and Vanilla JS.',
        color: 'cyan'
    },
    {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
        title: 'Mobile App Development',
        description: 'Creating cross-platform mobile applications with Flutter that run smoothly on iOS and Android.',
        color: 'violet'
    },
    {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><circle cx="6.5" cy="12.5" r="2.5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>',
        title: 'UI/UX Design',
        description: 'Designing intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
        color: 'pink'
    },
    {
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
        title: 'SEO Optimization',
        description: 'Optimizing websites for search engines to improve visibility and attract more organic traffic.',
        color: 'blue'
    }
];

const renderServiceCard = (service) => `
    <div class="service-card group ${service.color}">
        <div class="service-icon-wrapper">
            <div class="service-icon">
                ${service.icon}
            </div>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
    </div>
`;

export const renderServices = () => {
    return `
        <div class="container">
            <h2 class="section-title">My Services</h2>
            <div class="services-grid">
                ${services.map(renderServiceCard).join('')}
            </div>
        </div>
    `;
};

export const initServices = () => {
    const section = $('#services');
    if (section) {
        section.innerHTML = renderServices();
    }
};
