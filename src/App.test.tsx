import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the required portfolio content', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /angel roma/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/modern developer/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /featured projects/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /quehay/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /porky finance/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /experience/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /github contributions/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /angelroma github contribution graph/i }),
    ).toBeInTheDocument();

    expect(
      screen
        .getAllByRole('link', { name: /linkedin/i })
        .some((link) => link.getAttribute('href')?.includes('linkedin.com')),
    ).toBe(true);
    expect(
      screen
        .getAllByRole('link', { name: /github/i })
        .some((link) => link.getAttribute('href') === 'https://github.com/angelroma'),
    ).toBe(true);
  });
});
