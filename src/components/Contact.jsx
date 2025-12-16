import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-card">
        <h2>Let’s Build Something Together!</h2>
        <p>
          I’m always happy to chat about projects, ideas, or even just to say hello
        </p>
        <div className="socials">
          <a href="https://github.com/BCHAYMAE" target="_blank" rel="noreferrer"><FaGithub size={24} /> </a>
          <a href="https://www.linkedin.com/in/chaymae-bellahcene-93a780336/" target="_blank" rel="noreferrer"><FaLinkedin size={24} /> </a>
           <a href="#" onClick={(e) => { e.preventDefault(); window.open("https://mail.google.com/mail/?view=cm&to=bellahcene.chaymae@gmail.com","_blank");
    }} title="Email" > <FaEnvelope size={24} /></a>

        </div>
      </div>
    </section>
  );
}