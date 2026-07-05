import { motion } from 'framer-motion';
import { content } from '../data/content';
import { skillCategories } from '../data/skills';
import { fadeUp, staggerContainer } from '../utils/animations';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const Skills = () => (
  <section id="competences" className="section-spacing">
    <Container>
      <SectionTitle
        eyebrow={content.skills.eyebrow}
        title={content.skills.title}
        description={content.skills.description}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-5 md:grid-cols-2"
      >
        {skillCategories.map((category) => (
          <Card key={category.title} className="p-6">
            <motion.h3 variants={fadeUp} className="text-lg font-semibold text-text">
              {category.title}
            </motion.h3>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-border bg-surfaceElevated/80 p-4 text-center transition hover:border-accent/40"
                >
                  <img src={skill.logo} alt={skill.alt} loading="lazy" className="h-9 w-9 object-contain" />
                  <span className="mt-3 text-sm font-medium text-text">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        ))}
      </motion.div>
    </Container>
  </section>
);
