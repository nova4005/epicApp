import React, { useEffect, useState } from "react";
import { getProjects } from "../src/projectController";

function Projects() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    getProjects().then((project) => {
      setProjects(project);
    });
  }, []);

  return (
    <div>
      <p>Projects</p>
      {projects &&
        projects.map((project) => (
          <div key={project.uuid}>
            <p>UUID: {project.uuid}</p>
            <p>Name: {project.name}</p>
            <p>Priority: {project.priority}</p>
          </div>
        ))}
    </div>
  );
}

export default Projects;
