import devIllustration from "../assets/pic.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title-highlight"> CHAYMAE</span> <br/>
            BELLAHCENE
          </h1>

          <p className="hero-description">
            Full-Stack Developer who enjoys building web applications with
            React, Node.js and Laravel.
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
          <img src={devIllustration} alt="Developer illustration" />
        </div>

      </div>
    </section>
  );
}