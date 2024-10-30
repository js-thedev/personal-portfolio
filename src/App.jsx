import '@/App.scss';

import NavBar from '@/components/header/nav-bar/index.jsx';

import LandingPage from '@/pages/index.jsx';
import About from '@/pages/about/index.jsx';
import Contact from '@/pages/contact/index.jsx';
import Projects from '@/pages/projects/index.jsx';
import Skills from '@/pages/skills/index.jsx';

function App() {
  // TODO: Remove when we implement router
  const test = 1;

  return (
    <div className="app">
      <NavBar />
      {/* TODO: Replace fake router when we implement router */}
      {test === 1 ? (
        <LandingPage />
      ) : test === 2 ? (
        <About />
      ) : test === 3 ? (
        <Contact />
      ) : test === 4 ? (
        <Projects />
      ) : test === 5 ? (
        <Skills />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
