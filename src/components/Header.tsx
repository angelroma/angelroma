import { Github, Linkedin } from 'lucide-react';
import { socialLinks } from '../content/portfolio';

const iconByLabel = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" aria-label="Angel Roma home">
        AR
      </a>
      <nav className="nav-links" aria-label="Portfolio sections">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#github">GitHub</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-socials" aria-label="Social links">
        {socialLinks.map((link) => {
          const Icon = iconByLabel[link.label as keyof typeof iconByLabel];

          return (
            <a key={link.label} href={link.href} aria-label={link.label}>
              {Icon ? <Icon aria-hidden="true" size={18} /> : link.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}
