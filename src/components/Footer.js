import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="">
            <h1>Travel More</h1>
            <p>Choose your favourite destination.</p>
          </div>
          <div className="">
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-behance-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Cumminity</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Projects</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Supports</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contacts Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Services</a>
            <a href="/">Privcy Policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
