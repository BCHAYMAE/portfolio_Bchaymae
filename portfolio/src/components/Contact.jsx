import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Let's create something amazing together</p>

        <div className="contact-links">
          <a
            href="mailto:bellahcene.chaymae@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com" className="contact-link" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}
