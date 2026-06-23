import "./Hero.css";
import LanyardBadge from "./LanyardBadge";
import chaymaePhoto from "../assets/bchaymae.png";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg hero-bg-one"></div>
      <div className="hero-bg hero-bg-two"></div>

      <div className="hero-container">
        <div className="hero-text">
          <span className="hero-eyebrow">Full-Stack Developer</span>

          <h1 className="hero-title">
            Hi, I’m <span>Chaymae</span>
            <br />
            Bellahcene
          </h1>

          <p className="hero-description">
            Full-Stack Developer with a strong interest in web technologies and software development. 
            Through projects and hands-on learning, I have gained experience building web applications 
            across both frontend and backend development. I enjoy solving technical challenges,
             learning new technologies, and creating practical, user-friendly digital solutions
              while continuously growing as a developer.
          </p>

          <div className="hero-buttons">
            <a
              href="mailto:bellahcene.chaymae@gmail.com"
              className="hero-btn primary-btn"
            >
              Let’s Work Together
            </a>

            <a
              href="/CV-BELLAHCENE Chaymae.pdf"
              className="hero-btn secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <LanyardBadge
            name="Chaymae Bellahcene"
            title="Full-Stack Developer"
            tagline="Building web apps from idea to deployment"
            avatarUrl={chaymaePhoto}
            links={{
              github: "https://github.com/ChaymaeBellahcene",
              linkedin: "https://www.linkedin.com/in/chaymae-bellahcene/",
              email: "mailto:bellahcene.chaymae@gmail.com",
              resume: "/CV-BELLAHCENE Chaymae.pdf",
            }}
          />
        </div>
      </div>
    </section>
  );
}