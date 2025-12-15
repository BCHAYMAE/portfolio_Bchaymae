import "./Aboutme.css";

export default function Aboutme() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Hi! I’m Chaymae, a full-stack developer who loves creating web apps <br/>
            that are both functional and beautiful. I work with React, Laravel, Node.js, and databases <br/>
            like MySQL & MongoDB, and I enjoy turning ideas into real projects. <br/>
            I’m always learning new tools, exploring creative solutions, and building things that make people’s lives easier or at least more fun!
          </p>
          <a href="/CV-BELLAHCENE-Chaymae.pdf" download className="resume-button">Download Resume</a>
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
