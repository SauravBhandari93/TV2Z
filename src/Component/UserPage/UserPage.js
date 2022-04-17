import React from "react";
import "./UserPage.css";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import TextField from "@mui/material/TextField";

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
        <div className="feedback-form">
          <h2 className="feedback">Feedback</h2>
          <h4 className="bug-text">
            Have a bug or suggestion? Please fill the form below to report it to
            us
          </h4>
          <div>
            <textarea
              rows={8}
              cols={40}
              className="teaxtarea1"
              placeholder="Type your message here"
            />
          </div>
          <div>
            <textarea
              rows={2}
              cols={40}
              className="teaxtarea2"
              placeholder="Type your message here"
            />
          </div>
          <div className="checkbox">
            <span>
              <input type="radio" className="bug" />
              Bug
            </span>
            <span>
              <input type="radio" className="suggestion" />
              Suggestion
            </span>
            <span>
              <input type="radio" />
              Other
            </span>
          </div>
          <button className="feedback-btn">SEND FEEDBACK</button>
        </div>
      </div>

      {/* <footer className="footer1">
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
      </footer> */}
      <footer className="footer">
        <p>&copy; 2020 WT TV2Z.All rights reserved.</p>
      </footer>
    </>
  );
};

export default UserPage;
