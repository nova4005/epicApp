import React, { useEffect } from "react";
import { getProjects } from "../src/projectController";

function Projects() {
  useEffect(() => {
    getProjects();
  });
  return (
    <div>
      <p>Projects</p>
      <p>Load in projects from DynamoDB</p>
    </div>
  );
}

export default Projects;
