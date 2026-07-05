import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (
  <motion.div
    whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    className={`rounded-3xl border border-border/70 bg-surface/80 shadow-card backdrop-blur transition-colors ${className}`}
  >
    {children}
  </motion.div>
);
