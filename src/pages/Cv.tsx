import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { content } from '../data/content';
import { profile } from '../data/profile';
import { fadeUp } from '../utils/animations';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

export const Cv = () => (
  <section id="cv" className="section-spacing">
    <Container>
      <SectionTitle
        eyebrow={content.cv.eyebrow}
        title={content.cv.title}
        description={content.cv.description}
      />
      <Card className="overflow-hidden p-7 sm:p-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accentSoft text-accent">
              <FileText size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-text">{content.cv.cardTitle}</h3>
              <p className="mt-2 max-w-2xl leading-7 text-muted">{content.cv.cardText}</p>
            </div>
          </div>
          <Button href={profile.cvUrl} download className="shrink-0">
            <Download size={18} aria-hidden="true" />
            {content.cv.button}
          </Button>
        </motion.div>
      </Card>
    </Container>
  </section>
);
