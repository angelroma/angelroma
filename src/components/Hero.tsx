import { ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
import { profile, socialLinks } from '../content/portfolio';

export function Hero() {
  const github = socialLinks.find((link) => link.label === 'GitHub');
  const linkedIn = socialLinks.find((link) => link.label === 'LinkedIn');

  return (
    <section className="hero section-band" id="top">
      <div className="hero-content">
        <p className="eyebrow">@{profile.handle}</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-meta">
          <span>
            <MapPin aria-hidden="true" size={17} />
            {profile.location}
          </span>
          <span>Portfolio for GitHub Pages</span>
        </div>
        <div className="hero-actions">
          {github ? (
            <a className="button primary" href={github.href}>
              <Github aria-hidden="true" size={18} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ) : null}
          {linkedIn ? (
            <a className="button secondary" href={linkedIn.href}>
              <Linkedin aria-hidden="true" size={18} />
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
      <aside className="hero-panel" aria-label="Developer focus">
        <p className="panel-label">Current focus</p>
        <ul>
          <li>Building portfolio-ready applications</li>
          <li>Designing clear product workflows</li>
          <li>Growing through public GitHub work</li>
        </ul>
      </aside>
    </section>
  );
}
