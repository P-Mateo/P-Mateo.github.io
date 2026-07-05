import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { content } from '../data/content';
import { formations } from '../data/formation';
import { fadeUp, staggerContainer } from '../utils/animations';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const Formation = () => (
  <section id="formation" className="section-spacing">
    <Container>
      <SectionTitle
        eyebrow={content.formation.eyebrow}
        title={content.formation.title}
        description={content.formation.description}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative grid gap-5"
      >
        {formations.map((formation) => (
          <Card key={formation.id} className="p-6 sm:p-7">
            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-start">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accentSoft text-accent">
                <GraduationCap size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-text">{formation.title}</h3>
                <p className="mt-1 text-sm font-medium text-muted">{formation.school}</p>
                <p className="mt-4 leading-7 text-muted">{formation.description}</p>
              </div>
              <span className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted">
                {formation.period}
              </span>
            </motion.div>
          </Card>
        ))}
      </motion.div>
    </Container>
  </section>
);
