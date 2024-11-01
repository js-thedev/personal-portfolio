import { useParams } from 'react-router-dom';

import '@/pages/index.scss';
import '@/pages/projects/project-detail/index.scss';

import projects from '@/data/projects.json';

function ProjectDetail() {
  // TODO: Implement useParams
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-description-page page">
      <img className="full-width-img" src={project.image} />
      <div className="project-name">{project.name}</div>
      <div className="section-name">Description</div>
      <div className="project-descriptions">
        {project.descriptions.map((desc, index) => (
          <div key={index} className="project-description">
            {desc}
          </div>
        ))}
      </div>
      <a className="normal-link" href={project.github}>
        Find this project at github
      </a>
    </div>
  );
}

export default ProjectDetail;
