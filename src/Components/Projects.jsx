import React, { useState } from 'react';
import eclipse from '../assets/eclipse.png';
import github from '../assets/github.png';
import rocket from '../assets/rocket.png'
import './projects.css'
import {projectsJson} from '../Utils/projects'
// import './responsive-updates.css'


function Projects() {

    return (
      <div className='projectCard-mn-cls'>
        <div id="carasoulMain-Id" class="carousel slide" data-ride="carousel">
          <div className='projectCard-title-cls'>
            Projects
          </div>
          <ol className="carousel-indicators">
              {projectsJson.map((_, idx) => (
                <li
                  key={idx}
                  data-target="#carasoulMain-Id"
                  data-slide-to={idx}
                  className={idx === 0 ? "active" : ""}
                ></li>
              ))}
          </ol>
          <div className='carasoul-mn-cls'>
          <a class="carousel-control-prev" href="#carasoulMain-Id" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
          <div className="carousel-inner">
              {projectsJson.map((project, idx) => (
                <div
                  className={`carousel-item${idx === 0 ? " active" : ""}`}
                  key={idx}
                  id="carousel-item-id"
                >
                  <div className="carousel-content-row">
                    <div className="carasoul-desc-cls">
                      <div className='carasoul-project-title-cls'>
                        <div>{project.title}</div>
                        <div className='project-github-img'><a href={project.githubLink}><img src={github}/></a></div>
                        {/* <div className='project-hosted-img'><a href={project.hostedLink}><img src={rocket}/></a></div> */}
                        </div>
                      <div className='carasoul-project-desc-cls'>{project?.desc.map((descPoint,idx) => (
                        <ul className='custom-counter'><li>{descPoint}</li></ul>
                      ))}</div>
                    </div>
                    <div className="carasoul-img-cls">
                      <img className="d-block w-100" src={project.src} alt={project.alt} />
                    </div>
                  </div>
                </div>

              ))}
          </div>
          <a class="carousel-control-next" href="#carasoulMain-Id" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
          </div>
        </div>
        </div>
    );
}

export default Projects;
