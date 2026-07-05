import cvUrl from '../assets/cv-mateo.pdf';
import type {Profile} from '../types/portfolio';

export const profile: Profile = {
    firstName: 'Mateo',
    lastName: 'Pereira',
    role: 'Développeur en devenir',

    tagline:
        "Je développe des applications en mettant l'accent sur la logique, la structure et la résolution de problèmes.",

    shortBio:
        "Étudiant en BUT Informatique, je me spécialise dans la compréhension et la conception de systèmes applicatifs. Je suis particulièrement attiré par la logique de programmation, la résolution de problèmes et la construction de projets complets.",

    about: [
        "Je prends du plaisir à concevoir des solutions logiques, que ce soit à travers des projets de type jeu, des exercices techniques ou des applications plus structurées.",
        "Je m'intéresse au développement fullstack, même si mon point fort reste la logique et la compréhension du fonctionnement des systèmes plutôt que uniquement le visuel.",
        "J'aime travailler de manière autonome, analyser un problème et construire une solution propre, claire et évolutive.",
        "Mon objectif est de progresser vers un profil capable de comprendre un besoin global et de le transformer en application fonctionnelle et bien structurée.",
    ],

    email: 'mateopereira.06@gmail.com',
    location: 'France',
    cvUrl,
};
