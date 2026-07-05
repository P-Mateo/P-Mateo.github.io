import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderKanban } from 'lucide-react';
import { content } from '../data/content';
import { profile } from '../data/profile';
import { fadeUp, staggerContainer } from '../utils/animations';
import { scrollToSection } from '../utils/helpers';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

export const Hero = () => (
  <section id="accueil" className="relative flex min-h-screen items-center pt-20">
    <Container>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl py-24 sm:py-28 lg:py-32"
      >
        <motion.p variants={fadeUp} className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent">
          {profile.role}
        </motion.p>
        <motion.h1 variants={fadeUp} className="text-5xl font-semibold leading-tight text-text sm:text-6xl lg:text-7xl">
          {profile.firstName} {profile.lastName}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-xl leading-8 text-text/90 sm:text-2xl">
          {profile.tagline}
        </motion.p>
        <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {profile.shortBio}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button type="button" onClick={() => scrollToSection('#projets')}>
            <FolderKanban size={18} aria-hidden="true" />
            {content.hero.projectsButton}
          </Button>
          <Button href={profile.cvUrl} download variant="secondary">
            <Download size={18} aria-hidden="true" />
            {content.hero.cvButton}
          </Button>
        </motion.div>
      </motion.div>
    </Container>

    <motion.button
      type="button"
      onClick={() => scrollToSection('#a-propos')}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full p-3 text-muted transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:inline-flex"
      aria-label="Descendre vers la section à propos"
    >
      <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
        <ArrowDown size={22} aria-hidden="true" />
      </motion.span>
    </motion.button>
  </section>
);
