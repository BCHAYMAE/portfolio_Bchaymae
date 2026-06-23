import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "GitRepo AutoDeploy App",
      description: `A full-stack deployment tool that automatically clones GitHub repositories and generates Dockerfiles.
- Automatically detects project type
- Generates Docker configuration
- Deploys using Nginx reverse proxy`,
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
    {
      title: "Epic digital Website",
      description: "Designed and developed the official website for Epic Digital, a digital marketing agency. The platform showcases the agency’s services, projects, and company information through a modern, responsive, and user-friendly interface, helping strengthen its online presence and improve client engagement.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer",
        "GSAP",
        "ScrollTrigger",
        "i18next",
        "SEO features",
      ],
      image: "/epic.PNG",
      repo: null,
      demo: "https://epicdigital.ma/",
    },
     {
      title: "Synthesis Project OFPPT",
      description: `This application covers two main needs:
      - Administrative management of reference data such as provinces, communes, domaines, chantiers, and programmes.
      - Operational monitoring of projects and sousprojets, including progress, localization, beneficiaries, financing, and comments.`,
      tags: [
        "Laravel",
      ],
      image: "/laravel.PNG",
      repo: "https://github.com/drawliin/Synthesis-Project-OFPPT",
      demo: null,
    },
    {
      title: "Epic Digital Portfolio",
      description: "Designed and developed a portfolio website for Epic Digital to showcase the agency’s projects, achievements, and expertise. The platform features a modern, responsive design that highlights completed work and provides visitors with an engaging overview of the agency’s capabilities.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
        "Framer Motion",
        "Nodemailer",
        "React Three Fiber",
        "SEO features",
      ],
      image: "/port.PNG",
      repo: null,
      demo: "https://portfolio.epicdigital.ma/",
    },
    {
      title: "Sudoku",
      description: `A small Go Sudoku project with:
          - a backtracking solver
          - a simple browser interface rendered by Go
          - the command-line solver mode`,
      tags: [
        "go",
      ],
      image: "/soduko.PNG",
      repo: "https://github.com/BCHAYMAE/sudoku",
      demo: null,
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h2>Featured Projects</h2>
          <p>Selected work, source code available on GitHub.</p>
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
                      GitHub 
                    </a>

                    {project.demo && (
                      <a
                        className="demo-btn"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo 
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
