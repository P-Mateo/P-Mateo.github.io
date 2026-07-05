import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { content } from '../data/content';
import { profile } from '../data/profile';
import { socials } from '../data/socials';
import type { SocialIcon } from '../types/portfolio';
import { fadeUp, staggerContainer } from '../utils/animations';
import { externalLinkProps } from '../utils/constants';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

const icons: Record<SocialIcon, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export const Contact = () => (
  <section id="contact" className="section-spacing">
    <Container>
      <SectionTitle
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        description={content.contact.description}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <Card className="p-7">
          <motion.div variants={fadeUp}>
            <p className="text-sm font-medium text-muted">{content.contact.emailLabel}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-block text-xl font-semibold text-text transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {profile.email}
            </a>
          </motion.div>
        </Card>
        <div className="grid gap-5 sm:grid-cols-3">
          {socials.map((social) => {
            const Icon = icons[social.icon];
            const linkProps = social.url.startsWith('mailto:') ? {} : externalLinkProps;

            return (
              <motion.a
                key={social.name}
                variants={fadeUp}
                href={social.url}
                aria-label={social.label}
                className="group rounded-3xl border border-border bg-surface/80 p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                {...linkProps}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accentSoft text-accent transition group-hover:scale-105">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="mt-5 block text-lg font-semibold text-text">{social.name}</span>
                <span className="mt-2 block text-sm text-muted">{social.label}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </Container>
  </section>
);
