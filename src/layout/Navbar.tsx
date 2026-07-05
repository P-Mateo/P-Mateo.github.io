import { Menu } from 'lucide-react';
import { useState } from 'react';
import { content } from '../data/content';
import { navigation } from '../data/navigation';
import type { Theme } from '../hooks/useTheme';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { sectionIds } from '../utils/constants';
import { scrollToSection } from '../utils/helpers';
import { Container } from '../components/ui/Container';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy([...sectionIds]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl transition-colors">
        <Container className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('#accueil')}
            className="rounded-full text-sm font-semibold text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Retourner à l’accueil"
          >
            {content.brand}
          </button>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
            {navigation.map((item) => {
              const isActive = activeId === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive ? 'bg-accentSoft text-text' : 'text-muted hover:bg-surface hover:text-text'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-text md:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={isOpen} items={navigation} activeId={activeId} onClose={() => setIsOpen(false)} />
    </>
  );
};
