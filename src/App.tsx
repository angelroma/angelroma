import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { GitHubActivity } from './components/GitHubActivity';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <GitHubActivity />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>Angel Roma</span>
        <span>Built for angelroma.github.io</span>
      </footer>
    </>
  );
}
