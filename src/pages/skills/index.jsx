import '@/pages/index.scss';
import '@/pages/skills/index.scss';

function Skills() {
  return (
    <div className="skills page">
      <div className="devops">
        <div className="section-title">DevOps</div>
        <div className="skills-list">
          Kubernetes (Certified), GCP (Certified), Terraform, Azure, Red Hat
          (Certified)
        </div>
      </div>
      <div className="backend">
        <div className="section-title">Backend</div>
        <div className="skills-list">Python, FastAPI, JavaScript, Django</div>
      </div>
      <div className="frontend">
        <div className="section-title">Frontend</div>
        <div className="skills-list">
          Vue.js, Javascript, HTML/CSS, BootStrap
        </div>
      </div>
    </div>
  );
}

export default Skills;
