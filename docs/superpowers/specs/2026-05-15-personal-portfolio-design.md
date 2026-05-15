# Personal Portfolio Design

Date: 2026-05-15

## Goal

Build `angelroma.github.io` as a modern developer portfolio for the GitHub user `angelroma`. The site should present Angel Roma's developer identity, featured projects, experience so far, GitHub activity, and contact links in a concise, recruiter-friendly format.

The GitHub repository should be named `angelroma.github.io` so GitHub Pages publishes it as the user site at `https://angelroma.github.io`.

## Audience

The primary audience is recruiters, hiring managers, and technical reviewers who need to quickly understand:

- What Angel builds.
- Which projects best represent his work.
- What experience he has so far.
- How active he is on GitHub.
- How to contact him, mainly through LinkedIn.

## Tone And Style

The site should feel like a modern developer portfolio: technical, sharp, readable, and professional. It should avoid a generic corporate resume look while still being easy to scan.

The visual direction should prioritize:

- Clean layout and strong hierarchy.
- Project-first presentation.
- Clear links to GitHub and LinkedIn.
- Restrained use of motion or decorative elements.
- Responsive behavior for both desktop and mobile.

## Site Structure

The first version will be a single-page portfolio. This keeps the site easy to review and simple to maintain while leaving room to expand later.

### Hero / Summary

The hero section introduces Angel with a short summary of who he is, what he builds, and where he is heading as a developer.

It should include primary links to:

- GitHub profile.
- LinkedIn profile.
- Optional resume or email link if Angel wants to make one public.

### Featured Projects

The projects section shows local, curated project cards. Initial examples include:

- QueHay.
- Porky Finance.

Each project card should support:

- Project name.
- Short description.
- Tech stack.
- Status.
- GitHub link.
- Demo or live link if available.
- A short note on what Angel built or contributed.

Project content should be stored locally in a structured format so updates are simple and do not require changing layout code.

### Experience

The experience section presents Angel's experience so far in a compact list or timeline. It can include work history, internships, freelance work, major personal projects, learning milestones, or practical contributions.

Each experience item should support:

- Role or activity title.
- Organization, client, or context.
- Date range.
- Short description.
- Key technologies or responsibilities when useful.

### GitHub Contributions

The site will use a semi-automated GitHub presence:

- Project and experience content stays local and curated.
- GitHub contribution visuals or stats are embedded or generated.
- The first version can use embedded generated GitHub visuals.
- The structure should allow a future GitHub Action to fetch and refresh static GitHub data at build time.

This avoids relying on fragile browser-side API calls and keeps the page dependable on GitHub Pages.

### Contact

The contact section should be minimal and direct. LinkedIn is the primary contact channel. GitHub should also be present. Email can be included only if Angel wants it public.

## Technical Approach

Use a static-first frontend suitable for GitHub Pages. The recommended implementation is Vite + React because it provides a clean developer workflow, reusable components, and easy future expansion.

Content should be separated from presentation:

- Project data in a local structured file.
- Experience data in a local structured file.
- Site/profile metadata in a local structured file.

This keeps future edits focused on content rather than component markup.

## Components

The initial component set should include:

- Layout shell.
- Header/navigation.
- Hero summary.
- Project card.
- Projects section.
- Experience item.
- Experience section.
- GitHub activity section.
- Contact section.
- Footer.

Components should stay small and focused. Styling should follow one consistent design system rather than one-off section styles.

## Data Flow

All curated content loads from local static data at build time. The React app renders the page from that data.

GitHub activity initially uses embedded generated visuals or static generated assets. A future GitHub Action can replace or supplement those embeds by writing generated data into the static site before deployment.

## Error Handling

Because the first version is static, error handling is mostly about graceful fallbacks:

- Project cards should still look complete if a demo link is missing.
- Contact links should be optional except for LinkedIn and GitHub.
- GitHub visuals should have fallback labels or links so the section remains useful if an embedded image fails.

## Testing And Verification

Before considering implementation complete:

- Run the project build command.
- Verify the page locally in a browser.
- Check responsive behavior on desktop and mobile widths.
- Confirm all external links point to the intended destinations.
- Confirm the GitHub Pages deployment path works for `angelroma.github.io`.

## Out Of Scope For First Version

The first version will not include:

- A blog.
- Authentication.
- A CMS.
- A contact form backend.
- Fully dynamic browser-side GitHub API loading.
- Multi-page routing unless future content requires it.

These can be revisited after the core portfolio is live.
