import dashboardImage from '../assets/projects/dashboard.svg';
import portfolioImage from '../assets/projects/portfolio.svg';
import taskflowImage from '../assets/projects/taskflow.svg';
import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'taskflow',
    name: 'TaskFlow',
    year: '2026',
    summary: 'Application de suivi de tâches avec interface claire, filtres et organisation par état.',
    description: [
      'TaskFlow est une interface de gestion de tâches pensée pour suivre simplement l’avancement d’un petit projet.',
      'Le travail s’est concentré sur une expérience lisible, des composants réutilisables et une structure facile à enrichir.',
    ],
    image: taskflowImage,
    images: [taskflowImage, dashboardImage, portfolioImage],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    learnedSkills: ['Architecture de composants', 'Gestion d’état locale', 'Responsive design', 'Accessibilité clavier'],
    githubUrl: 'https://github.com/P-Mateo',
  },
  {
    id: 'portfolio',
    name: 'Portfolio personnel',
    year: '2026',
    summary: 'Portfolio one page moderne destiné à présenter un profil, des projets et un parcours.',
    description: [
      'Ce portfolio met l’accent sur une navigation fluide, des animations discrètes et une personnalisation rapide depuis des fichiers de données.',
      'Il est conçu pour être hébergé facilement sur GitHub Pages et évoluer avec de nouveaux projets.',
    ],
    image: portfolioImage,
    images: [portfolioImage, taskflowImage, dashboardImage],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Lucide React'],
    learnedSkills: ['Design system léger', 'Thème clair et sombre', 'Animations performantes', 'Modales accessibles'],
    githubUrl: 'https://github.com/P-Mateo/P-Mateo.github.io',
  },
  {
    id: 'databoard',
    name: 'DataBoard',
    year: '2025',
    summary: 'Tableau de bord front-end pour visualiser des indicateurs de manière simple et structurée.',
    description: [
      'DataBoard regroupe des cartes de statistiques, des graphiques statiques et une lecture rapide des indicateurs importants.',
      'Le projet a permis de travailler la hiérarchie visuelle, les grilles responsive et la cohérence d’interface.',
    ],
    image: dashboardImage,
    images: [dashboardImage, portfolioImage, taskflowImage],
    technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
    learnedSkills: ['Composition d’interface', 'Visualisation de données', 'Optimisation responsive', 'Structure TypeScript'],
  },
];
