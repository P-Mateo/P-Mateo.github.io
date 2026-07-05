export interface Profile {
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  shortBio: string;
  about: string[];
  email: string;
  location: string;
  cvUrl: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  logo: string;
  alt: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  name: string;
  year: string;
  summary: string;
  description: string[];
  image: string;
  images: string[];
  technologies: string[];
  learnedSkills: string[];
  githubUrl?: string;
}

export interface Formation {
  id: string;
  title: string;
  school: string;
  period: string;
  description: string;
}

export type SocialIcon = 'github' | 'linkedin' | 'mail';

export interface Social {
  name: string;
  url: string;
  icon: SocialIcon;
  label: string;
}
