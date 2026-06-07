import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "GitRepo AutoDeploy App",
      description: `A full-stack deployment tool that automatically clones GitHub repositories
and generates Dockerfiles.

â€¢ Detects project type automatically
â€¢ Generates Docker configuration
â€¢ Deploys with Nginx reverse proxy`,
      tags: [
        "Node.js",
        "Express.js",
        "React-Vite",
        "Socket.IO",
        "simple-git",
        "CORS",
        "Docker",
        "Nginx",
      ],
      image: "/pro1.png",
      repo: "https://github.com/BCHAYMAE/deployment_app",
      demo: null,
    },
    {
      title: "AI Adventures",
      description: "It's a browser-based educational game inspired by classic maze games like Pac-Man, where players explore artificial intelligence concepts through interactive challenges. Children collect data, avoid enemies, and complete sorting tasks that introduce ideas such as supervised, unsupervised, and reinforcement learning. Designed with colorful visuals and simple controls, the game transforms complex AI concepts into fun, hands-on learning experiences",
      tags: [
        "Html",
        "Javascript",
        "Css",
      ],
      image: "/aiGame.PNG",
      repo: "https://github.com/BCHAYMAE/ai_learning",
      demo: "https://ai-adventures.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h2>Featured Projects</h2>
          <p>Selected work â€” source code available on GitHub.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article key={idx} className="project-card">
              
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="project-content">

                {/* Title + Buttons */}
                <div className="project-top">
                  <h3 className="project-title">{project.title}</h3>

                  <div className="project-actions">
                    <a
                      className="github-btn"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      GitHub â†—
                    </a>

                    {project.demo && (
                      <a
                        className="demo-btn"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo â†—
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
