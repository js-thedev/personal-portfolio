import '@/pages/index.scss';
import '@/assets/styles/common-styles.scss';

import landingProfileImg from '@/assets/images/Landing-Profile.jpg';

function LandingPage() {
  return (
    <div className="landing-page page">
      <img
        className="full-width-img"
        src={landingProfileImg}
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
  );
}

export default LandingPage;
