import '@/App.scss';

import NavBar from '@/components/header/nav-bar/index.jsx';

import LandingPage from '@/pages/index.jsx';

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
        <LandingPage />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
