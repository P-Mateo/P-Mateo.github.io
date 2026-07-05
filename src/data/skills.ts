import type { SkillCategory } from '../types/portfolio';

const devicon = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const simpleIcons = 'https://cdn.simpleicons.org';

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
      { name: 'C', logo: `${devicon}/c/c-original.svg`, alt: 'Logo C' },
      { name: 'Python', logo: `${devicon}/python/python-original.svg`, alt: 'Logo Python' },
      { name: 'PHP', logo: `${devicon}/php/php-original.svg`, alt: 'Logo PHP' },
      { name: 'Java', logo: `${devicon}/java/java-original.svg`, alt: 'Logo Java' },
      { name: 'Macro VBA', logo: `${devicon}/visualbasic/visualbasic-original.svg`, alt: 'Logo Visual Basic' },
    ],
  },
  {
    title: 'Base de données',
    skills: [
      { name: 'MySQL', logo: `${devicon}/mysql/mysql-original.svg`, alt: 'Logo MySQL' },
      { name: 'PostgreSQL', logo: `${devicon}/postgresql/postgresql-original.svg`, alt: 'Logo PostgreSQL' },
      { name: 'MongoDB', logo: `${devicon}/mongodb/mongodb-original.svg`, alt: 'Logo MongoDB' },
      { name: 'Oracle', logo: `${devicon}/oracle/oracle-original.svg`, alt: 'Logo Oracle' },
      { name: 'PhpMyAdmin', logo: `${simpleIcons}/phpmyadmin/6C78AF`, alt: 'Logo PhpMyAdmin' },
    ],
  },
  {
    title: 'Outils',
    skills: [
      { name: 'Git', logo: `${devicon}/git/git-original.svg`, alt: 'Logo Git' },
      { name: 'GitHub', logo: `${devicon}/github/github-original.svg`, alt: 'Logo GitHub' },
      { name: 'GitLab', logo: `${devicon}/gitlab/gitlab-original.svg`, alt: 'Logo GitLab' },
      { name: 'Figma', logo: `${devicon}/figma/figma-original.svg`, alt: 'Logo Figma' },
      { name: 'VSCode', logo: `${devicon}/vscode/vscode-original.svg`, alt: 'Logo VSCode' },
      { name: 'WebStorm', logo: `${devicon}/webstorm/webstorm-original.svg`, alt: 'Logo WebStorm' },
      { name: 'PyCharm', logo: `${devicon}/pycharm/pycharm-original.svg`, alt: 'Logo PyCharm' },
      { name: 'IntelliJ', logo: `${devicon}/intellij/intellij-original.svg`, alt: 'Logo IntelliJ' },
      { name: 'N8N', logo: `${simpleIcons}/n8n/EA4B71`, alt: 'Logo N8N' },
      { name: 'Docker', logo: `${devicon}/docker/docker-original.svg`, alt: 'Logo Docker' },
      { name: 'Excel', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg', alt: 'Logo Excel' },
    ],
  },
];
