import React, { Component } from "react";

import SVG from "./SVG";

class ProjectRight extends Component {
  render() {
    const { title, img, description, links } = this.props.data;
    return (
      <section className="project right">
        <div className="project-img">
          <img className="project-thumbnail" src={img.src} alt={img.alt} />
        </div>
        <article className="project-info">
          <div className="project-details">
            <h1 className="project-title">{title}</h1>
            <div className="tech-stack">
              <SVG filter={title} />
            </div>
            <hr className="description-divider" />
            <p className="description">{description}</p>
          </div>
          <div className="project-links">
            {/* <a target="_blank" rel="noopener noreferrer" className="link" href={links.live}>
              Live App
            </a>
            <div> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              href={links.client}
            >
              Client
            </a>
            <span> | </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              href={links.server}
            >
              Server
            </a>
            {/* </div> */}
          </div>
        </article>
      </section>
    );
  }
}

export default ProjectRight;
