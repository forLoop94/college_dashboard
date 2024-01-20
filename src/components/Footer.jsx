import {
  FaTwitter,
  FaFacebookF,
  FaGoogle,
  FaVimeoV,
  FaPinterestP,
  FaCopyright,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Icon"
        >
          <FaTwitter className="me-3" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Icon"
        >
          <FaFacebookF className="me-3" />
        </a>
        <a
          href="https://plus.google.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Icon"
        >
          <FaGoogle className="me-3" />
        </a>
        <a
          href="https://vimeo.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vimeo Icon"
        >
          <FaVimeoV className="me-3" />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest icon"
        >
          <FaPinterestP className="me-3" />
        </a>
      </div>
      <p className="copyright-text mt-2">
        <FaCopyright className="me-1" />
        v0.1. Made by Charles Andrews. <p>MIT License v2.</p>
      </p>
    </footer>
  );
};
