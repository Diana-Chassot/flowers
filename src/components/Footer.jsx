import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-media">
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <p>Diana`s Cool Flowers&copy;</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
