import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '@/components/header/nav-bar/index.jsx';

import LandingPage from '@/pages/index.jsx';
import About from '@/pages/about/index.jsx';
import Contact from '@/pages/contact/index.jsx';
import Projects from '@/pages/projects/index.jsx';
import Skills from '@/pages/skills/index.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
