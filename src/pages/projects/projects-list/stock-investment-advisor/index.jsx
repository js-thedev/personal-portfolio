import '@/pages/index.scss';
import '@/pages/projects/projects-list/index.scss';

import stockInvestmentAdvisor from '@/assets/images/projects/stock-investment-adivsor.webp';

function StockInvestmentAdvisor() {
  return (
    <div className="project-description-page page">
      <img className="full-width-img" src={stockInvestmentAdvisor} />
      <div className="project-name">Stock Investment Advisor Web App</div>
      <div className="section-name">Description</div>
      <div className="project-descriptions">
        <div className="project-description">
          Monolith architecture, FastAPI for RESTful endpoints
        </div>
        <div className="project-description">
          Vuejs framework to design and implement the frontend UI
        </div>
        <div className="project-description">
          Django framework to handle data collection, processing, and model
          training
        </div>
      </div>
      <a
        className="normalLink"
        href="https://github.com/js-thedev/stock-investor"
      >
        Find this project at github
      </a>
    </div>
  );
}

export default StockInvestmentAdvisor;
