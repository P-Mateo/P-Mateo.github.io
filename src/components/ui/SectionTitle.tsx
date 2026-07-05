import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className="mb-10 max-w-2xl"
  >
    {eyebrow && <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
    <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>}
  </motion.div>
);
