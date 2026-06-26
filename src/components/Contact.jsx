import { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to send message.");
      }

      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus(error.message || "Failed to send message.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact">
      <div className="contact-card">
        <h2>Let's Build Something Together!</h2>
        <p>I'm always happy to chat about projects, ideas, or even just to say hello.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
          </label>

          <button className="submit-btn" type="submit" disabled={isSending}>
            <FaPaperPlane /> {isSending ? "Sending..." : "Send Message"}
          </button>

          {status ? <p className="status-message">{status}</p> : null}
        </form>

        <div className="socials">
          <a href="https://github.com/BCHAYMAE" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/chaymae-bellahcene-93a780336/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:bellahcene.chaymae@gmail.com" title="Email">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
