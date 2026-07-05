import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { content } from '../data/content';
import { projects } from '../data/projects';
import type { Project } from '../types/portfolio';
import { staggerContainer } from '../utils/animations';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectModal } from './projects/ProjectModal';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projets" className="section-spacing">
      <Container>
        <SectionTitle
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          description={content.projects.description}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </motion.div>
      </Container>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};
