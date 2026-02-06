import { $ } from '../../core/utils/dom.js';

const education = [
    {
        degree: "Bachelor in Computer Science / IT",
        school: "Mansoura University",
        date: "2022 – 2026",
        description: `
            <strong>Major:</strong> Computer Science / Information Technology<br><br>
            Studied computer science fundamentals with a strong focus on software development, mobile applications, and web technologies. Gained hands-on experience in:<br><br>
            <strong>🔹 Web Development:</strong> HTML, CSS, JavaScript<br>
            <strong>🔹 Mobile App Development:</strong> Flutter, Dart<br>
            <strong>🔹 Programming Languages:</strong> C#, C++<br>
            <strong>🔹 Core Concepts:</strong> Object-Oriented Programming (OOP), Data Structures, Algorithms Basics
        `,
        logo: "./assets/images/mansoura.png"
    },
    {
        degree: "Flutter Developer Intern",
        school: "National Telecommunication Institute (NTI)",
        date: "Nov 2025 – Feb 2026",
        highlight: true,
        description: `
            <strong>Start with Performance:</strong><br><br>
            Developed high-performance mobile applications using Flutter, focusing on scalable architecture and smooth user experiences.<br><br>
            <strong>Key Responsibilities:</strong>
            <ul style="list-style-type: none; margin-left: 0; color: #94a3b8; margin-top: 10px; padding-left: 0;">
                <li style="margin-bottom: 6px;">📱 Developed mobile applications using Flutter framework</li>
                <li style="margin-bottom: 6px;">🎨 Built interactive and responsive user interfaces</li>
                <li style="margin-bottom: 6px;">🔥 Integrated Firebase and REST APIs</li>
                <li style="margin-bottom: 6px;">🏗️ Applied state management patterns (Provider, Bloc)</li>
            </ul>
        `,
        logo: "./assets/images/nti_group.jpg"
    }
];

const renderEducationCard = (edu) => `
    <div class="edu-card animate-fade-in ${edu.highlight ? 'highlight-card' : ''}">
        <div class="edu-logo-wrapper">
             <img src="${edu.logo}" alt="${edu.school}" class="edu-logo" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;">
        </div>
        <div class="edu-content">
            <h3 class="edu-degree">
                ${edu.degree}
                <span class="edu-year">${edu.date}</span>
            </h3>
            <h4 class="edu-school">
                ${edu.school}
            </h4>
            <p class="edu-desc">${edu.description}</p>
        </div>
    </div>
`;

export const renderEducation = () => {
    return `
        <div class="container">
            <h2 class="section-title">Education & Experience</h2>
            <div class="education-cards">
                ${education.map(renderEducationCard).join('')}
            </div>
        </div>
    `;
};

export const initEducation = () => {
    const section = $('#education');
    if (section) {
        section.innerHTML = renderEducation();
    }
};
