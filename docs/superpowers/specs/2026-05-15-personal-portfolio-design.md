# GitHub Profile README Design

Date: 2026-05-15

## Goal

Build a GitHub profile-style `README.md` for the GitHub user `angelroma`. The README should present Angel Roma's developer identity, featured projects, experience so far, GitHub activity, and contact links in a concise format inspired by strong GitHub profile READMEs.

For GitHub profile behavior, the repository should be named exactly `angelroma`. A repository named `angelroma.github.io` is for GitHub Pages, not the GitHub profile README.

## Audience

The primary audience is recruiters, hiring managers, and technical reviewers viewing the GitHub profile. They need to quickly understand:

- What Angel builds.
- Which projects best represent his work.
- What experience he has so far.
- How active he is on GitHub.
- How to contact him, mainly through LinkedIn.

## Tone And Style

The README should feel like a modern developer profile: technical, direct, readable, and professional. It should avoid a marketing-style portfolio page and instead use a GitHub-native structure with concise sections, links, badges, and bullets.

The visual direction should prioritize:

- Clean Markdown hierarchy.
- Project-first presentation.
- Clear links to GitHub and LinkedIn.
- Technology badges.
- A contribution graph image.

## Site Structure

The first version will be a single `README.md`, not a Vite/React app and not a GitHub Pages site.

### Intro / Summary

The opening section introduces Angel with a short summary of who he is, what he builds, and where he is heading as a developer.

It should include primary links to:

- GitHub profile.
- LinkedIn profile.
- Optional email link only if Angel wants it public.

### Start Here

The "Start Here" section should point readers to the most important destinations:

- QueHay.
- Porky Finance.
- GitHub profile.
- LinkedIn profile.

### Current Projects

The project section uses concise Markdown bullets. Initial examples include:

- QueHay.
- Porky Finance.

Each project item should support:

- Project name.
- Short description.
- GitHub link.
- A short note on what Angel built or contributed.

### Experience

The experience section presents Angel's experience so far in compact bullets. It can include practical project experience, learning milestones, GitHub practice, freelance/client work if relevant, internships, or work history.

### GitHub Contributions

The README embeds a GitHub contribution graph image that links back to the GitHub profile.

### Contact

The contact section should be minimal and direct. LinkedIn is the primary contact channel. GitHub should also be present.

## Technical Approach

Use plain Markdown in `README.md`. No app framework, package manager, build system, generated HTML, or GitHub Pages deployment is needed for the current direction.

## Error Handling

Because the README is static Markdown, graceful behavior comes from keeping links clear and using descriptive image alt text. If the contribution graph image fails, the image remains a link to the GitHub profile.

## Testing And Verification

Before considering implementation complete:

- Review `README.md` for spelling, stale links, and broken Markdown.
- Confirm external links point to the intended destinations.
- Confirm no HTML app/tooling files remain in the repo.

## Out Of Scope For First Version

The first version will not include:

- A blog.
- Authentication.
- A CMS.
- A contact form backend.
- A Vite/React app.
- GitHub Pages HTML.
- Multi-page routing.

These can be revisited after the core portfolio is live.
