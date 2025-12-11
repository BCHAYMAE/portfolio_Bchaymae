import legoVideo from "../assets/lego.mp4"; 
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      <video src={legoVideo} autoPlay loop muted className="hero-video" />

      <div className="hero-content">
        <div className="hero-badge">
          {"< Full-Stack Developer />"}
        </div>

        <h1 className="hero-title">
          BELLAHCENE
          <span className="hero-title-highlight">CHAYMAE</span>
        </h1>

        <p className="hero-description">
          A Full-Stack Developer who loves turning concepts into real experiences.
          Curious, creative, and committed, I strive to make every project functional, clear, and enjoyable.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-btn primary-btn" onClick={() => window.open(
      "https://mail.google.com/mail/?view=cm&to=bellahcene.chaymae@gmail.com","_blank")}>
          Let's Work Together
          </button>
        </div>

        <div className="hero-scroll">
          <div>↓ Scroll to explore</div>
        </div>
      </div>
    </section>
  );
}
