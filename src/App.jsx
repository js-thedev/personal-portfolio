import '@/App.scss';
import profile from '@/assets/Landing-Profile.jpg';

function App() {
  return (
    <div className="app">
      <div className="Nav">Navigation Bar Spaceholder</div>
      <img src={profile} alt="Landing-Profile.jpg"></img>
      <div className="text-container">
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

export default App;
