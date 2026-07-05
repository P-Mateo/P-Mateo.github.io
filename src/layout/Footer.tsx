import { content } from '../data/content';
import { profile } from '../data/profile';
import { getCurrentYear } from '../utils/helpers';
import { Container } from '../components/ui/Container';

export const Footer = () => (
  <footer className="border-t border-border/70 py-8">
    <Container className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        {profile.firstName} {profile.lastName} - {getCurrentYear()}
      </p>
      <p>{content.footer.mention}</p>
    </Container>
  </footer>
);
