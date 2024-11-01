import '@/pages/index.scss';
import '@/pages/projects/index.scss';

import ProjectCard from '@/components/projects/project-card/index.jsx';

import projects from '@/data/projects.json';

function Projects() {
  return (
    <div className="projects page">
      <div className="page-name">Projects</div>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
