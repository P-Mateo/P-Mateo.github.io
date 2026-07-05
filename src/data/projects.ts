import shroomsImage from '../assets/projects/shrooms.png';
import chessImage from '../assets/projects/chess.png';
import qrImage from '../assets/projects/qr.png';
import n8nImage from '../assets/projects/n8n.jpg';
import iutImage from '../assets/projects/dashboard.svg';
import buvetteImage from '../assets/projects/dashboard.svg';
import joImage from '../assets/projects/dashboard.svg';
import dbImage from '../assets/projects/dashboard.svg';

import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  // =========================
  // 🔥 STAGE (PRINCIPAL)
  // =========================

  {
    id: 'qr-code-dynamique',
    name: 'Application QR Code dynamique',
    year: '2026',
    summary:
        "Application entreprise de génération et gestion de QR codes dynamiques sécurisés avec SSO Microsoft.",
    description: [
      "Application interne permettant la génération de QR codes dynamiques personnalisés (liens, PDF, WiFi).",
      "Système sécurisé avec authentification SSO Microsoft et JWT.",
      "Chaque QR code possède des statistiques de consultation et un suivi en base de données.",
      "Interface admin permettant la gestion globale et l'analyse des données d'utilisation.",
    ],
    image: qrImage,
    images: [qrImage],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'MySQL',
      'SSO Microsoft',
      'JWT',
    ],
    learnedSkills: [
      'Sécurité applicative',
      'Authentification SSO',
      'Gestion de données',
      'Architecture fullstack',
      'Systèmes de tracking',
    ],
  },

  {
    id: 'n8n-workflows',
    name: 'Automatisation veille technologique (n8n)',
    year: '2026',
    summary:
        "Système d'automatisation de veille technologique basé sur n8n et traitement de données OneDrive.",
    description: [
      "Récupération quotidienne et mensuelle de journaux technologiques depuis OneDrive.",
      "Tri et analyse automatique des informations pour générer des tendances.",
      "Création d'un classement des informations importantes pour l'entreprise.",
      "Envoi automatique d'un email récapitulatif mensuel (top 10 global).",
    ],
    image: n8nImage,
    technologies: ['n8n', 'Docker', 'OneDrive API', 'Automation'],
    learnedSkills: [
      'Automatisation de workflows',
      'Traitement de données',
      'Intégration API',
      'Organisation de données',
    ],
  },

  // =========================
  // 🚀 PROJETS FULLSTACK
  // =========================

  {
    id: 'iut-portes-ouvertes',
    name: 'Application portes ouvertes IUT',
    year: '2025',
    summary:
        "Application web permettant aux visiteurs de s’enregistrer et consulter les informations d’événement.",
    description: [
      "Application utilisée sur tablette lors des journées portes ouvertes.",
      "Les visiteurs peuvent s’enregistrer et laisser des informations.",
      "Interface admin avec statistiques et graphiques.",
      "Export des données au format CSV.",
    ],
    image: iutImage,
    technologies: ['React', 'Python', 'Vite'],
    learnedSkills: [
      'Développement fullstack',
      'Gestion de données utilisateur',
      'API backend',
      'Visualisation de données',
    ],
  },

  {
    id: 'buvette-associative',
    name: 'Plateforme buvette associative',
    year: '2025',
    summary:
        "Application de gestion complète pour buvette associative avec comptes et commandes.",
    description: [
      "Gestion de plusieurs buvettes et création de menus personnalisés.",
      "Système de commandes avec validation et gestion des rôles.",
      "Gestion des utilisateurs et accès par permissions.",
      "Base de données MySQL via PHPMyAdmin.",
    ],
    image: buvetteImage,
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    learnedSkills: [
      'Gestion backend PHP',
      'Base de données relationnelle',
      'Système de rôles',
      'Gestion de commandes',
    ],
  },

  // =========================
  // 🎓 PROJETS ÉCOLE
  // =========================

  {
    id: 'shrooms',
    name: 'SHROOMS',
    year: '2025',
    summary:
        "Jeu 2D type Terraria développé en Java avec architecture MVC.",
    description: [
      "Jeu développé entièrement en Java avec JavaFX.",
      "Architecture MVC et programmation orientée objet.",
      "Gestion de l’inventaire, exploration et interactions joueur.",
      "Projet construit progressivement depuis zéro.",
    ],
    image: shroomsImage,
    technologies: ['Java', 'JavaFX', 'MVC', 'POO'],
    learnedSkills: [
      'Architecture logicielle',
      'Programmation orientée objet',
      'Gestion de projet',
      'Conception de jeu',
    ],
  },

  {
    id: 'chess-java',
    name: 'Jeu d’échecs (terminal)',
    year: '2024',
    summary:
        "Premier projet majeur de programmation : jeu d’échecs en Java sans POO avancée.",
    description: [
      "Implémentation complète d’un jeu d’échecs en Java.",
      "Projet réalisé en début de formation.",
      "Interface en terminal avec logique de jeu complète.",
      "Projet formateur sur les bases de la programmation.",
    ],
    image: chessImage,
    technologies: ['Java'],
    learnedSkills: [
      'Logique algorithmique',
      'Structures de base',
      'Résolution de problèmes',
    ],
  },

  // =========================
  // 🧪 SAE (MINORS)
  // =========================

  {
    id: 'jo-2028',
    name: 'Site JO Los Angeles 2028',
    year: '2024',
    summary:
        "Site informatif sur les infrastructures et impacts des JO 2028.",
    description: [
      "Site web informatif réalisé dans un cadre académique.",
      "Analyse des impacts économiques et environnementaux.",
      "Projet de type SAE avec documentation et présentation.",
    ],
    image: joImage,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    learnedSkills: ['Structuration web', 'Recherche documentaire'],
  },

  {
    id: 'database-optician',
    name: 'Base de données opticien',
    year: '2024',
    summary:
        "Projet de modélisation et manipulation de base de données relationnelle.",
    description: [
      "Création d’un schéma de base de données pour une boutique d’optique.",
      "Requêtes SQL et gestion de données relationnelles.",
    ],
    image: dbImage,
    technologies: ['SQL', 'MySQL'],
    learnedSkills: ['Modélisation de données', 'SQL'],
  },
];