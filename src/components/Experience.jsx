import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      company: "Epic Digital",
      role: "Full stack developer",
      period: "fev 2026 — Present",
      accent: "present",
      icon: "/LogoIcon.png", 
      description:
    "Currently working as a Full-Stack Developer Intern contributing to web development projects. Assisting in building and improving web interfaces, implementing backend features, and collaborating with the team to deliver functional digital solutions."
    },
    {
      company: "Novelis",
      role: "Full-Stack Developer Intern",
      period: "Feb 2025 — Mar 2025",
      accent: "past",
      icon: "/novelis-square-logo.png", 
      description:
        "  I developed a Web-Based Auto-Deploy System to automate and streamline deployments, improving efficiency and reliability. Gained hands-on experience in web development and DevOps .",
    },
    {
      company: "Maison des Sciences",
      role: "Educational Workshop Facilitator",
      period: " oct 2022 — Present",
      accent: "present",
      icon: "/MSO.jpg",
      description:
            "Design and facilitate interactive workshops introducing children to technology concepts such as robotics, algorithms, artificial intelligence, and web development through hands-on projects."
    },
    {
      company: "ENACTUS ESTO",
      role: "Member ",
      period: "2023 — 2024",
      accent: "past",
      icon: "/images.png", 
      description:
            "Organized and participated in community initiatives including the Baidouz humanitarian caravan and the 'Chabab B7alkom' event."
    },
    {
      company: "DSIC — Prefecture of Oujda-Angad",
      role: "Web Development Intern",
      period: "Jul 2024 — Aug 2024",
      accent: "past",
      icon: "/logo-wilaya.png", 
      description:
            "Developed a dynamic web interface using HTML, CSS, and JavaScript. Built a MySQL database and implemented a PHP API to manage and dynamically display application content."
    },
  ];

  return (
    <section id="experience" className="exp">
      <div className="exp-container">
        <h2 className="exp-title">Experience</h2>

        <div className="exp-grid">
          {experiences.map((e, i) => (
            <article key={i} className="exp-card">
              <div className="exp-line" aria-hidden="true" />

              <div className="exp-head">
                <div className="exp-logo" aria-hidden="true">
                  {/* if you don’t have icons yet, replace img with letters */}
                  <img src={e.icon} alt="" />
                </div>

                <div className="exp-meta">
                  <h3 className="exp-company">{e.company}</h3>
                  <p className="exp-role">{e.role}</p>

                  <p className={`exp-period ${e.accent === "present" ? "is-present" : ""}`}>
                    {e.period}
                  </p>
                </div>
              </div>

              <p className="exp-desc">{e.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}