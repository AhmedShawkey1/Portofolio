import { $ } from '../../core/utils/dom.js';

// Using consistent emojis as icons for now to ensure no broken images
// In a real production env, these would be SVG paths or Devicon classes
const skillCategories = [
    {
        title: "Mobile Development",
        skills: [
            { name: "Flutter", icon: "📱" },
            { name: "Dart", icon: "🎯" },
            { name: "iOS / Swift", icon: "🍎" },
            { name: "Android / Kotlin", icon: "🤖" },
            { name: "State Management", icon: "🧠" },
            { name: "Clean Architecture", icon: "🏗️" },
        ]
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js", icon: "🟢" },
            { name: "Laravel", icon: "🔥" },
            { name: "MySQL", icon: "🐬" },
            { name: "Firebase", icon: "🔥" },
            { name: "MongoDB", icon: "🍃" },
            { name: "API Design", icon: "🔌" },
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git & GitHub", icon: "🐙" },
            { name: "Docker", icon: "🐳" },
            { name: "Figma", icon: "🖌️" },
            { name: "Postman", icon: "🚀" },
            { name: "VS Code", icon: "📝" },
            { name: "Agile", icon: "🔄" },
        ]
    }
];

const renderSkillItem = (skill) => `
    <div class="skill-item">
        <span class="skill-icon">${skill.icon}</span>
        <span>${skill.name}</span>
    </div>
`;

const renderCategory = (category) => `
    <div class="skill-category">
        <h3>${category.title}</h3>
        <div class="skills-list">
            ${category.skills.map(renderSkillItem).join('')}
        </div>
    </div>
`;

export const renderSkills = () => {
    return `
        <div class="container">
            <h2 class="section-title">Tools & Technologies</h2>
            <div class="skills-wrapper">
                ${skillCategories.map(renderCategory).join('')}
            </div>
        </div>
    `;
};

export const initSkills = () => {
    const section = $('#skills');
    if (section) {
        section.innerHTML = renderSkills();
    }
};
