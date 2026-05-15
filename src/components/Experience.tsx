import { experience } from '../content/portfolio';

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">So far</p>
        <h2 id="experience-title">Experience</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={`${item.title}-${item.context}`}>
            <div>
              <p className="period">{item.period}</p>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="context">{item.context}</p>
              <p>{item.description}</p>
              <ul className="stack-list" aria-label={`${item.title} technologies`}>
                {item.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
