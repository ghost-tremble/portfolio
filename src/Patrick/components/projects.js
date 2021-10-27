import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/project.css";
import project from "../data/projects";
const Projects = () => {
  const [projects, setProjects] = React.useState(project);

  return (
    <div>
      <h1 className="text-center project-title">Portfolio</h1>
      <div className="projects-container container" id="portfolio">
        <div className="row justify-content-center">
          {projects.map((project) => {
            const { name } = project;
            return (
              <div className="col-md-5 col-sm-12 single-project">
                <div className="service-content">
                  <h1>{name}</h1>
                </div>
                <div className="view-modal-btn">
                  <a href="">
                    <i class="bi bi-arrow-up-right-square"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
