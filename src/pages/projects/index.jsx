import { Outlet } from 'react-router-dom';

import '@/pages/index.scss';
import '@/pages/projects/index.scss';

import stockInvestmentAdvisor from '@/assets/images/projects/stock-investment-adivsor.webp';

function Projects() {
  return (
    <div className="projects page">
      <div className="page-name">Projects</div>
      <div className="projects-list">
        <div className="project">
          <img className="square-img" src={stockInvestmentAdvisor} />
          <div className="project-name">Stock Investment Advisor Web App</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Projects;
