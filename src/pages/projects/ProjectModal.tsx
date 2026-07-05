import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect } from 'react';
import { content } from '../../data/content';
import type { Project } from '../../types/portfolio';
import { modalBackdrop, modalPanel } from '../../utils/animations';
import { externalLinkProps } from '../../utils/constants';
import { Button } from '../../components/ui/Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
          onMouseDown={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            variants={modalPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-surface p-5 shadow-soft sm:p-7"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-accent">{project.year}</p>
                <h3 id="project-modal-title" className="mt-1 text-2xl font-semibold text-text sm:text-3xl">
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surfaceElevated text-text transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Fermer la modale"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {project.images.map((image, index) => (
                <img
                  key={`${project.id}-${image}`}
                  src={image}
                  alt={`Image ${index + 1} du projet ${project.name}`}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-2xl border border-border object-cover"
                />
              ))}
            </div>

            <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                  {content.projects.descriptionHeading}
                </h4>
                <div className="mt-3 grid gap-4">
                  {project.description.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="grid gap-5">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    {content.projects.technologiesHeading}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full bg-accentSoft px-3 py-1 text-sm font-medium text-text">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    {content.projects.learnedSkillsHeading}
                  </h4>
                  <ul className="mt-3 grid gap-2 text-sm text-muted">
                    {project.learnedSkills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary" {...externalLinkProps}>
                  <Github size={18} aria-hidden="true" />
                  {content.projects.githubButton}
                  <ExternalLink size={15} aria-hidden="true" />
                </Button>
              )}
              <Button type="button" onClick={onClose}>
                {content.projects.closeButton}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
