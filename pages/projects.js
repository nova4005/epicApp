import React, { useEffect, useState } from "react";
import { getProject } from "../src/projectController";

function Projects() {
  const [project, setProject] = useState(null);
  useEffect(() => {
    const pro = getProject("abc123").then(item => {
      setProject(item);
      console.log(item);
    });
  }, []);

  return (
    <div>
      <p>Projects</p>
      {project && (
        <div>
          <p>UUID: {project.uuid.S}</p>
          <p>Name: {project.name.S}</p>
          <p>Priority: {project.priority.N}</p>
        </div>
      )}
    </div>
  );
}

export default Projects;
