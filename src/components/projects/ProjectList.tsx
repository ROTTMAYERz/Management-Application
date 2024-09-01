import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ onSave, projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  const item = projects.map((value) => (
    <div key={value.id} className="col-sm">
      {value === projectBeingEdited ? (
        <ProjectForm project={value} onCancel={cancelEditing} onSave={onSave} />
      ) : (
        <ProjectCard project={value} onEdit={handleEdit} />
      )}
    </div>
  ));

  return <div className="row">{item}</div>;
}

export default ProjectList;
