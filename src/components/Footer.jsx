import "./Footer.css";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Built with <FaReact color="#61DAFB" /> React and{" "}
        <SiVite color="#646CFF" /> Vite by{" "}
        <strong>Chaymae Bellahcene</strong>
      </p>
    </footer>
  );
}