import { ArrowUpRight } from 'lucide-react';
import { githubActivity } from '../content/portfolio';

export function GitHubActivity() {
  return (
    <section className="section github-section" id="github" aria-labelledby="github-title">
      <div className="section-heading">
        <p className="eyebrow">Public activity</p>
        <h2 id="github-title">{githubActivity.title}</h2>
        <p>{githubActivity.description}</p>
      </div>
      <a className="contribution-link" href={githubActivity.profileUrl}>
        <img
          alt="angelroma GitHub contribution graph"
          src={githubActivity.contributionGraphUrl}
        />
      </a>
      <a className="text-link" href={githubActivity.profileUrl}>
        View GitHub profile
        <ArrowUpRight aria-hidden="true" size={15} />
      </a>
    </section>
  );
}
