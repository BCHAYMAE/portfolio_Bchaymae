import "./Projects.css"

export default function Projects() {
  const projects = [
    {
      title: "GitRepo AutoDeploy App",
      description:
        "This application is a full-stack deployment tool that automates cloning Git repositories, auto-detecting frontend/backend/database technologies, generating Dockerfiles, and deploying containerized apps via Docker Compose with real-time WebSocket updates.",
      tags: [
        "Node.js",
        "Express.js",
        "React-Vite",
        "Socket.IO",
        "simple-git",
        "CORS",
        "Docker",
      ],
      image: "/pro1.png", 
      repo: "https://github.com/BCHAYMAE/deployment_app",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Click the project title to view the source code on GitHub</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>
                  <a href={project.repo} target="_blank"rel="noopener noreferrer" className="project-link">
                  {project.title}
                  </a></h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

