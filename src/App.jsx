import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '@/components/header/nav-bar/index.jsx';

import LandingPage from '@/pages/index.jsx';
import About from '@/pages/about/index.jsx';
import Contact from '@/pages/contact/index.jsx';
import Projects from '@/pages/projects/index.jsx';
import Skills from '@/pages/skills/index.jsx';

import ProjectDetail from '@/pages/projects/project-detail/index.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
