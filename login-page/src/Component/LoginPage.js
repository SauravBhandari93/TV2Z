import React, { useState } from "react";
import "./LoginPage.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function App() {
  const [show, setShow] = useState(false);

  const toggledisplay = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="app">
        <div className="Header">
          <h1>TV2Z</h1>
          <h3>LOG IN</h3>
        </div>
        <div className="Login">
          <h2>LOG IN</h2>
          <h3>Enter your credentials to log in to TV2Z</h3>
          <div className="inputfield">
            <input type="email" placeholder="Email" id="Email" />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              id="Password"
            />
            <button className="icons" onClick={toggledisplay}>
              {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
          <h4>
            <span id="forget"> Forgot password ?</span>
            <span> Click here!</span>
          </h4>
          <h5>
            <span id="forget">
              By clicking on 'Log in' button,you are hereby agreeing to our
            </span>
            <span> Privacy Policy </span>
            <span id="forget">and</span> Terms & Conditions.
          </h5>
          <button className="Login-btn">LOG IN</button>
          <h4>
            <span id="forget"> Don't have an account ? </span>
            Sign up!
          </h4>
        </div>
        <footer className="footer">
          <p>&copy; 2020 WT TV2Z.All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
