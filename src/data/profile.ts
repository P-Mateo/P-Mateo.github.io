import cvUrl from '../assets/cv-mateo.pdf';
import type { Profile } from '../types/portfolio';

export const profile: Profile = {
  firstName: 'Mateo',
  lastName: 'P.',
  role: 'Développeur en devenir',
  tagline: 'Je conçois des interfaces web modernes, accessibles et maintenables.',
  shortBio:
    'Étudiant en informatique, je m’intéresse particulièrement au développement front-end, à la qualité d’interface et aux expériences sobres qui répondent clairement aux besoins utilisateurs.',
  about: [
    'Je développe des applications web avec une attention particulière portée à la structure du code, à la lisibilité et à l’expérience utilisateur.',
    'Mon objectif est de progresser vers un profil front-end solide, capable de transformer une idée en interface fiable, responsive et agréable à utiliser.',
    'J’aime travailler sur des projets concrets, documenter mes choix et construire des bases faciles à faire évoluer.',
  ],
  email: 'mateo@example.com',
  location: 'France',
  cvUrl,
};
