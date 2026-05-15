export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: string;
  contribution: string;
  githubUrl: string;
  liveUrl?: string;
};

export type ExperienceItem = {
  title: string;
  context: string;
  period: string;
  description: string;
  technologies: string[];
};

export const profile = {
  name: 'Angel Roma',
  handle: 'angelroma',
  role: 'Modern developer building practical web and finance tools.',
  summary:
    'I build focused digital products that turn everyday problems into usable software. My current work highlights full-stack product thinking, clean interfaces, and steady growth through real projects.',
  location: 'Mexico',
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/angelroma',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/angelroma',
  },
];

export const projects: Project[] = [
  {
    name: 'QueHay',
    description:
      'A project centered on helping people discover what is available around them with a clear, practical user experience.',
    stack: ['React', 'TypeScript', 'Product Design'],
    status: 'Featured project',
    contribution:
      'Built the product direction, interface structure, and core user-facing experience.',
    githubUrl: 'https://github.com/angelroma/quehay',
  },
  {
    name: 'Porky Finance',
    description:
      'A personal finance project designed to make money tracking and financial decisions easier to understand.',
    stack: ['React', 'TypeScript', 'Finance UX'],
    status: 'Featured project',
    contribution:
      'Designed the finance-focused workflow and translated it into a developer portfolio project.',
    githubUrl: 'https://github.com/angelroma/porky-finance',
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Independent Developer',
    context: 'Personal and portfolio projects',
    period: 'Current',
    description:
      'Building real projects to strengthen frontend architecture, product thinking, and practical delivery habits.',
    technologies: ['React', 'TypeScript', 'GitHub Pages'],
  },
  {
    title: 'Project-Based Learning',
    context: 'Developer growth',
    period: 'Ongoing',
    description:
      'Turning ideas into shipped interfaces, documenting decisions, and improving code organization through each project.',
    technologies: ['Web Development', 'UI Systems', 'Git'],
  },
];

export const githubActivity = {
  title: 'GitHub Contributions',
  description:
    'A snapshot of ongoing GitHub activity, project iteration, and public development progress.',
  contributionGraphUrl:
    'https://ghchart.rshah.org/2f8f83/angelroma',
  profileUrl: 'https://github.com/angelroma',
};
