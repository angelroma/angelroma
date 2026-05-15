import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../content/portfolio';

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Next step</p>
        <h2 id="contact-title">Contact</h2>
        <p>
          Connect through LinkedIn or review the latest work directly on GitHub.
        </p>
      </div>
      <div className="contact-links">
        {socialLinks.map((link) => (
          <a className="button secondary" key={link.label} href={link.href}>
            {link.label}
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}
