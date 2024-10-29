import '@/App.scss';
import '@/assets/styles/common-styles.scss';

import profile from '@/assets/Landing-Profile.jpg';

function App() {
  return (
    <div className="app">
      <div className="nav">Navigation Bar Spaceholder</div>

      <div className="landing-page">
        <img
          className="full-width-img"
          src={profile}
          alt="Landing-Profile.jpg"
        />
        <div className="intro">
          <div className="name">SCOTT PARK</div>
          <div className="role">DEV-OPS ENGINEER</div>
          <div className="summary">
            BUILDS AUTOMATION TO OPTIMIZE SOFTWARE DEVELOPMENT AND DEPLOYMENT
            PROCESSES
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
