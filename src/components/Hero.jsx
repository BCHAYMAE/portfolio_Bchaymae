import "./Hero.css";
import LanyardBadge from "./LanyardBadge";
import chaymaePhoto from "../assets/bchaymae.png";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title-highlight"> CHAYMAE</span> <br/>
            BELLAHCENE
          </h1>

          <p className="hero-description">
            Chaymae Bellahcene is a Full-Stack Developer who enjoys building web
            applications with React, Node.js and Laravel.
            <br />
            Currently learning DevOps practices and experimenting with Docker,
            Nginx and deployment automation.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn primary-btn"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&to=bellahcene.chaymae@gmail.com",
                  "_blank"
                )
              }
            >
              Let's Work Together
            </button>
          </div>
        </div>

        <div className="hero-image">
        
          <LanyardBadge
            name="Chaymae Bellahcene"
            title="full stack developer"
            tagline="slogan to add later"
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
