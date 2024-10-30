import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from '@/pages/index.jsx';
import NavBar from '@/components/header/nav-bar/index.jsx';

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
