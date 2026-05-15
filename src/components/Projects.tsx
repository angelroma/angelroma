import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '../content/portfolio';

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title">Featured Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="card-topline">
              <span>{project.status}</span>
              <Code2 aria-hidden="true" size={18} />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="contribution">{project.contribution}</p>
            <ul className="stack-list" aria-label={`${project.name} tech stack`}>
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <div className="card-actions">
              <a href={project.githubUrl}>
                Repository
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              {project.liveUrl ? (
                <a href={project.liveUrl}>
                  Live site
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
