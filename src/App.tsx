import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cv } from './pages/Cv';
import { Formation } from './pages/Formation';
import { Hero } from './pages/Hero';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import { useTheme } from './hooks/useTheme';
import { ScrollToTop } from './components/ui/ScrollToTop';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-text transition-colors duration-300">
      <div className="site-background" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Formation />
        <Cv />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
