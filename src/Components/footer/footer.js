import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
  faFacebookF,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5">
        <div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              fixedWidth
              size="2x"
              className="facebook social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-3"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              fixedWidth
              size="2x"
              className="instagram social-icon"
            />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-3"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              fixedWidth
              size="2x"
              className="whatsapp social-icon"
            />
          </a>
          <a
            href="https://www.telegram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-3"
          >
            <FontAwesomeIcon
              icon={faTelegram}
              fixedWidth
              size="2x"
              className="telegram social-icon"
            />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-3"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              fixedWidth
              size="2x"
              className="tiktok social-icon"
            />
          </a>
        </div>

        <div className="footerNav">
          <ul className="text-white fs-4 p-3 d-flex justify-content-center list-unstyled">
            <li>
              <a className="m-2 text-decoration-none text-white" href="#about">
                Home
              </a>
            </li>
            <li>
              <a className="m-2 text-decoration-none text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="m-2 text-decoration-none text-white" href="#about">
                Gallery
              </a>
            </li>
            <li>
              <a className="m-2 text-decoration-none text-white" href="#about">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black p-3">
        <p className="text-white">Copyright &copy; 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
