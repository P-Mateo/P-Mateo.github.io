import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { fadeUp } from '../../utils/animations';
import { Card } from '../../components/ui/Card';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => (
  <motion.article variants={fadeUp}>
    <Card className="group h-full overflow-hidden">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="flex h-full w-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label={`Ouvrir le projet ${project.name}`}
      >
        <div className="aspect-[16/10] overflow-hidden bg-surfaceElevated">
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-accent">{project.year}</p>
              <h3 className="mt-1 text-xl font-semibold text-text">{project.name}</h3>
            </div>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accentSoft text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </div>
          <p className="mt-4 flex-1 text-sm leading-7 text-muted">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <span key={technology} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </button>
    </Card>
  </motion.article>
);
