import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  const item = projects.map((value) => (
    <div key={value.id} className="col-sm">
      <ProjectCard project={value} />
      <ProjectForm />
    </div>
  ));

  return <div className="row">{item}</div>;
}

export default ProjectList;
