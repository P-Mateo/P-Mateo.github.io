import type { SkillCategory } from '../types/portfolio';

const devicon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', logo: `${devicon}/react/react-original.svg`, alt: 'Logo React' },
      { name: 'TypeScript', logo: `${devicon}/typescript/typescript-original.svg`, alt: 'Logo TypeScript' },
      { name: 'Tailwind CSS', logo: `${devicon}/tailwindcss/tailwindcss-original.svg`, alt: 'Logo Tailwind CSS' },
      { name: 'Vite', logo: `${devicon}/vitejs/vitejs-original.svg`, alt: 'Logo Vite' },
    ],
  },
  {
    title: 'Langages',
    skills: [
      { name: 'JavaScript', logo: `${devicon}/javascript/javascript-original.svg`, alt: 'Logo JavaScript' },
      { name: 'HTML5', logo: `${devicon}/html5/html5-original.svg`, alt: 'Logo HTML5' },
      { name: 'CSS3', logo: `${devicon}/css3/css3-original.svg`, alt: 'Logo CSS3' },
      { name: 'Java', logo: `${devicon}/java/java-original.svg`, alt: 'Logo Java' },
    ],
  },
  {
    title: 'Base de données',
    skills: [
      { name: 'MySQL', logo: `${devicon}/mysql/mysql-original.svg`, alt: 'Logo MySQL' },
      { name: 'PostgreSQL', logo: `${devicon}/postgresql/postgresql-original.svg`, alt: 'Logo PostgreSQL' },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { name: 'Git', logo: `${devicon}/git/git-original.svg`, alt: 'Logo Git' },
      { name: 'GitHub', logo: `${devicon}/github/github-original.svg`, alt: 'Logo GitHub' },
      { name: 'Figma', logo: `${devicon}/figma/figma-original.svg`, alt: 'Logo Figma' },
      { name: 'WebStorm', logo: `${devicon}/webstorm/webstorm-original.svg`, alt: 'Logo WebStorm' },
    ],
  },
];
