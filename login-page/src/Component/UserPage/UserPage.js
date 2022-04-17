import React from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const UserPage = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="company-name">
          <h1>TV2Z</h1>
        </div>
        <div className="list">
          <ul style={{ listStyleType: "none" }}>
            <li>Themes</li>
            <li>Age</li>
            <li>Recommended</li>
          </ul>
        </div>
        <div className="Logout">
          <h2>
            <Link className="link" to="/">
              Logout
            </Link>
          </h2>
        </div>
      </nav>

      <div className="card">
        <div className="feedback-form"></div>
      </div>

      <footer className="footer1">
        <nav className="main-nav">
          <div className="company-name">
            <h1>TV2Z</h1>
          </div>
          <div className="list">
            <ul style={{ listStyleType: "none" }}>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="social-media">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <CgFacebook style={{ color: "white" }} className="facebook" />
              </li>
              <li style={{ color: "white" }} className="twitter">
                <BsTwitter />
              </li>
              <li style={{ color: "white" }} className="linkedin">
                <FaLinkedinIn />
              </li>
              <li style={{ color: "white" }} className="instagram">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </nav>
      </footer>
      <footer className="footer">
        <p>&copy; 2020 WT TV2Z.All rights reserved.</p>
      </footer>
    </>
  );
};

export default UserPage;
