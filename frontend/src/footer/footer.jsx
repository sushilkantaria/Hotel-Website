import React from 'react';
import { Link } from "react-router-dom";

import './footer.css';

import logo from '..//assets/logo.png';
import insta from '..//assets/instagram.png';
import x from '..//assets/twitter.png';
import yt from '..//assets/youtube.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-columns">
                {/* First Column: Logo, Vision, and Social Icons */}
                <div className="footer-left-section">
                    <div className="footer-column footer-logo">
                        <img src={logo} alt="Company Logo" />
                        <p>
                            We envision a future where technology enhances human potential. Our mission is to leverage AI for innovative solutions that empower a smarter, safer, and more sustainable world.
                        </p>
                        {/* Social Icons */}
                        {/* <ul className="social-icons-horizontal">
                            <li>
                                <a href="https://www.linkedin.com/company/perceptron-tech/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/perceptron.technologies?igsh=MXhqdnB5cng4MHlnbQ==" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/PerceptronTech" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>

                {/* Second Column: Explore */}
                <div className="footer-column">
                    <h3>Explore</h3>
                    <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/hearts">Photos</Link></li>
            <li><Link to="/awards">Awards</Link></li>
        </ul>
                </div>

                {/* Third Column: Quick Links */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/Privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/Terms&Con">Terms & Conditions</Link></li>
        </ul>
                </div>

                {/* Fourth Column: Get in Touch */}
                <div className="footer-column">
                    <h3>Get in Touch</h3>
                    <ul className="contact-info">
                        
            <li><Link to="/location">Location</Link></li>
            <li><Link to="/hearts">Hearts</Link></li>
                        <li>
  <a href="./Terms&Con.html">
    <div className="footer-internal-social-media-handles">
      <a href="https://www.instagram.com" target="_blank">
        <img src={insta} alt="Instagram" width="18" height="18" />
      </a>
      <a href="https://twitter.com" target="_blank">
        <img src={x} alt="Twitter" width="18" height="18" />
      </a>
      <a href="https://www.youtube.com" target="_blank">
        <img src={yt} alt="YouTube" width="18" height="18" />
      </a>
    </div>
  </a>
</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom: Privacy Policy, Terms of Use, and Copyright */}
            <div className="footer-bottom">
                <div className="footer-wrapper">
                    {/* Uncomment if you want to show policy links
                    <div className="policy-links">
                        <a href="./Privacypolicy.html" className="policy-link">Privacy Policy</a>
                        <a href="./Terms&Con.html" className="policy-link">Terms & Conditions</a>
                    </div>
                    */}
                </div>
                <p>Copyright &copy; 2024 <a href='home.jsx' style={{textDecoration : 'none'}}>Cove Companies Pvt. Ltd.</a>  All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;