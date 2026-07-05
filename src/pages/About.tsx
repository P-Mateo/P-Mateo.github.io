import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { content } from '../data/content';
import { profile } from '../data/profile';
import { fadeUp, staggerContainer } from '../utils/animations';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const About = () => (
  <section id="a-propos" className="section-spacing">
    <Container>
      <SectionTitle
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        description={content.about.description}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]"
      >
        <Card className="p-7 sm:p-8">
          <div className="grid gap-5">
            {profile.about.map((paragraph) => (
              <motion.p key={paragraph} variants={fadeUp} className="text-base leading-8 text-muted">
                {paragraph}
              </motion.p>
            ))}
          </div>
        </Card>
        <Card className="p-7 sm:p-8">
          <motion.div variants={fadeUp} className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accentSoft text-accent">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted">{content.about.locationLabel}</p>
              <p className="mt-1 text-lg font-semibold text-text">{profile.location}</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 border-t border-border pt-6">
            <p className="text-sm font-medium text-muted">{content.about.availabilityLabel}</p>
            <p className="mt-1 leading-7 text-text">{content.about.availabilityText}</p>
          </motion.div>
        </Card>
      </motion.div>
    </Container>
  </section>
);
