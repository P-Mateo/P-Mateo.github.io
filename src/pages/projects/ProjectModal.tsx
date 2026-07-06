import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const images = project?.images ?? [];
  const selectedImage = images[selectedImageIndex];

  const showPreviousImage = () => {
    if (!images.length) {
      return;
    }

    setSelectedImageIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
  };

  const showNextImage = () => {
    if (!images.length) {
      return;
    }

    setSelectedImageIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
  };

  useEffect(() => {
    setSelectedImageIndex(0);
    setZoomedImage(null);
  }, [project]);

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
          return;
        }

        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, project, zoomedImage]);

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

            {selectedImage && (
              <div className="mt-6">
                <div
                  className="relative overflow-hidden rounded-2xl border border-border bg-surfaceElevated"
                  onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
                  onTouchEnd={(event) => {
                    if (touchStart === null) {
                      return;
                    }

                    const swipeDistance = touchStart - event.changedTouches[0].clientX;

                    if (Math.abs(swipeDistance) > 45) {
                      if (swipeDistance > 0) {
                        showNextImage();
                      } else {
                        showPreviousImage();
                      }
                    }

                    setTouchStart(null);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setZoomedImage(selectedImage)}
                    className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                    aria-label={`Agrandir l'image ${selectedImageIndex + 1} du projet ${project.name}`}
                  >
                    <img
                      src={selectedImage}
                      alt={`Image ${selectedImageIndex + 1} du projet ${project.name}`}
                      className="h-auto max-h-[52vh] min-h-64 w-full object-contain"
                    />
                    <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-text shadow-soft opacity-100 transition group-hover:bg-accentSoft sm:opacity-0 sm:group-hover:opacity-100">
                      <Maximize2 size={18} aria-hidden="true" />
                    </span>
                  </button>

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-soft transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label="Image précédente"
                      >
                        <ChevronLeft size={22} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-text shadow-soft transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label="Image suivante"
                      >
                        <ChevronRight size={22} aria-hidden="true" />
                      </button>
                    </>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                    {images.map((image, index) => (
                      <button
                        key={`${project.id}-${image}`}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          index === selectedImageIndex ? 'border-accent' : 'border-border opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`Afficher l'image ${index + 1} du projet ${project.name}`}
                      >
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

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

          <AnimatePresence>
            {zoomedImage && (
              <motion.div
                variants={modalBackdrop}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-10 flex items-center justify-center bg-black/35 p-4"
                onMouseDown={() => setZoomedImage(null)}
                role="dialog"
                aria-modal="true"
                aria-label={`Aperçu agrandi du projet ${project.name}`}
              >
                <motion.div
                  variants={modalPanel}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative max-h-[82vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface p-3 shadow-soft"
                  onMouseDown={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setZoomedImage(null)}
                    className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-text shadow-soft transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="Fermer l'aperçu"
                  >
                    <X size={20} aria-hidden="true" />
                  </button>
                  <img
                    src={zoomedImage}
                    alt={`Aperçu agrandi du projet ${project.name}`}
                    className="max-h-[76vh] w-full rounded-xl object-contain"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
