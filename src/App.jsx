import '@/App.scss';

import NavBar from '@/components/header/nav-bar/index.jsx';

import LandingPage from '@/pages/index.jsx';
import About from '@/pages/about/index.jsx';

function App() {
  // TODO: Remove when we implement router
  const test = 2;

  return (
    <div className="app">
      <NavBar />
      {/* TODO: Replace fake router when we implement router */}
      {test === 1 ? (
        <LandingPage />
      ) : test === 2 ? (
        <About />
      ) : test === 3 ? (
        <About />
      ) : test === 4 ? (
        <About />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
