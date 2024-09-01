import { useState } from 'react';
import { MOCK_PROJECTS } from './MockProject';
import { Project } from './Project';
import ProjectList from './ProjectList';

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    const updatedProject = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });

    setProjects(updatedProject);
  };

  return (
    <>
      <h1>Projects Page</h1>
      <ProjectList projects={projects} onSave={saveProject} />
    </>
  );
}

export default ProjectsPage;
