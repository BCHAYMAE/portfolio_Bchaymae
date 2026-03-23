import "./Aboutme.css";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import profilePic from "../assets/setup.png";
import {
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss
} from "react-icons/si";

export default function Aboutme() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-side">
            <div className="about-image-wrap">
              <img src={profilePic} alt="Chaymae Bellahcene workspace setup" className="about-image" />
            </div>

            <a
              href="/CV -BELLAHCENE Chaymae  (1).pdf"
              download
              className="resume-button"
            >
              Download Resume
            </a>
          </div>

          <div className="about-text-wrap">
            <h3 className="about-headline">
              I'm Chaymae Bellahcene. I build reliable, modern web applications.
            </h3>

            <p className="about-paragraph">
              I&apos;m a full-stack developer building modern web applications with React,
              Node.js, Laravel, MySQL, and MongoDB, and I&apos;m currently growing toward
              a DevOps path by focusing on Docker, CI/CD, automation, and cloud-ready
              deployment practices.
            </p>

          </div>
        </div>

        <section id="skills" className="skills-section">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h4>Front-End</h4>
              <ul>
                <li><SiHtml5 color="#E34F26" /> HTML</li>
                <li><SiCss color="#1572B6" /> CSS</li>
                <li><SiJavascript color="#F7DF1E" /> JavaScript</li>
                <li><FaReact color="#61DAFB" /> React</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Back-End</h4>
              <ul>
                <li><FaNodeJs color="#339933" /> Node.js</li>
                <li><SiLaravel color="#FF2D20" /> Laravel</li>
                <li><SiMysql color="#4479A1" /> MySQL</li>
                <li><SiMongodb color="#47A248" /> MongoDB</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Tools & Platforms</h4>
              <ul>
                <li><FaDocker color="#2496ED" /> Docker</li>
                <li><SiNginx color="#009639" /> Nginx</li>
                <li><FaGitAlt color="#F05032" /> Git</li>
                <li><SiPostman color="#FF6C37" /> Postman</li>
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
