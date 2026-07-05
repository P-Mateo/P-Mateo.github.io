import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { NavigationItem } from '../types/portfolio';
import { scrollToSection } from '../utils/helpers';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavigationItem[];
  activeId: string;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, items, activeId, onClose }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl md:hidden"
        onClick={onClose}
      >
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.2 }}
          className="mx-4 mt-4 rounded-3xl border border-border bg-surface p-4 shadow-soft"
          aria-label="Navigation mobile"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-text">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Fermer le menu"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="grid gap-1">
            {items.map((item) => {
              const isActive = activeId === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => {
                    scrollToSection(item.href);
                    onClose();
                  }}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive ? 'bg-accentSoft text-text' : 'text-muted hover:bg-surfaceElevated hover:text-text'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.nav>
      </motion.div>
    )}
  </AnimatePresence>
);
