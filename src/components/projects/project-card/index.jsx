import { Link } from 'react-router-dom';

import '@/pages/index.scss';
import '@/pages/projects/index.scss';
import '@/components/projects/project-card/index.scss';

function ProjectCard({ id, name, image }) {
  return (
    <div className="card">
      <Link to={`/projects/${id}`} className="project normal-link">
        <img src={image} alt={name} className="square-img" />
        <div className="project-name">{name}</div>
      </Link>
    </div>
  );
}

export default ProjectCard;
