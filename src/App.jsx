import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '@/components/header/nav-bar/index.jsx';

import LandingPage from '@/pages/index.jsx';
import About from '@/pages/about/index.jsx';
import Contact from '@/pages/contact/index.jsx';
import Projects from '@/pages/projects/index.jsx';
import Skills from '@/pages/skills/index.jsx';

import StockInvestmentAdvisor from '@/pages/projects/projects-list/stock-investment-advisor/index.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/stock-investment-advisor"
            element={<StockInvestmentAdvisor />}
          />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
