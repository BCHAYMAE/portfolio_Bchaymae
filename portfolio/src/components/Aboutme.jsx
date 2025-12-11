import "./Aboutme.css";

export default function Aboutme() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I’m Bellahcene Chaymae, a Full-Stack Developer who thrives on creativity and problem-solving.
            I enjoy bringing ideas to life through code, whether it’s crafting sleek front-end interfaces
            or building powerful back-end systems. Curious, collaborative, and always eager to learn, 
            I aim to make every project meaningful.
          </p>
        </div>

        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Front-End</h4>
              <ul>
                <li>HTML / CSS / JavaScript</li>
                <li>React & Vite </li>
                <li>CSS </li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Back-End</h4>
              <ul>
                <li>Node.js & Express</li>
                <li>PHP & Laravel</li>
                <li>MySQL & MongoDB </li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Tools & Platforms</h4>
              <ul>
                <li>Docker & Nginx </li>
                <li>Git & GitHub </li>
                <li>Postman</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Soft Skills</h4>
              <ul>
                <li>Agile development & teamwork</li>
                <li>Quick learner & self-motivated</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
