import { $ } from '../../core/utils/dom.js';

const experiences = [
    {
        role: "Flutter Developer Intern",
        company: "National Telecommunication Institute (NTI)",
        date: "Nov 2025 – Feb 2026",
        description: `
            <strong>Internship Responsibilities:</strong>
            <ul style="list-style-type: none; margin-left: 0; color: #94a3b8; margin-top: 10px; padding-left: 0;">
                <li style="margin-bottom: 6px;">📱 Developed mobile applications using Flutter framework</li>
                <li style="margin-bottom: 6px;">🎨 Built interactive and responsive user interfaces</li>
                <li style="margin-bottom: 6px;">🔥 Integrated Firebase and REST APIs</li>
                <li style="margin-bottom: 6px;">🏗️ Applied state management patterns (Provider, Bloc)</li>
            </ul>
        `,
        logo: "./assets/images/nti_group.jpg"
    },
    {
        role: "Freelance Flutter Developer",
        company: "Self-Employed",
        date: "2022 - 2023",
        description: "Developing cross-platform mobile applications using Flutter & Dart. Delivering high-performance apps with custom UI/UX.",
        logo: "./assets/images/freelance.png"
    }
];

const renderExperienceItem = (exp) => `
    <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <img src="${exp.logo}" alt="${exp.company}" class="company-logo" onerror="this.src='https://via.placeholder.com/60?text=C'">
            <div class="timeline-info">
                <span class="timeline-date">${exp.date}</span>
                <h3 class="timeline-role">${exp.role}</h3>
                <h4 class="timeline-company">${exp.company}</h4>
                <p class="timeline-desc">${exp.description}</p>
            </div>
        </div>
    </div>
`;

export const renderExperience = () => {
    return `
        <div class="container">
            <h2 class="section-title">Work & Experience</h2>
            <div class="timeline">
                ${experiences.map(renderExperienceItem).join('')}
            </div>
        </div>
    `;
};

export const initExperience = () => {
    const section = $('#experience');
    if (section) {
        section.innerHTML = renderExperience();
    }
};
