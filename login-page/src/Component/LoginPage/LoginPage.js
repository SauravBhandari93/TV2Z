import React, { useState } from "react";
import "./LoginPage.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function App() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var auth = JSON.parse(localStorage.getItem("auth"));

  const toggledisplay = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth === null) {
      toast.error("no user found");
    }
    const check = auth.filter((c) => c.email === email);
    if (check.length !== 0) {
      if (check[0].password === password) {
        toast.success("Login Successfully");
        setEmail("");
        setPassword("");
        navigate("/user");
      } else {
        toast.error("Invalid password");
        setEmail("");
        setPassword("");
      }
    } else {
      toast.error("email not found");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="app">
        <div className="Header">
          <h1>TV2Z</h1>
          <h3>LOG IN</h3>
        </div>

        <form className="Login">
          <h2>LOG IN</h2>
          <h3>Enter your credentials to log in to TV2Z</h3>
          <div className="inputfield">
            <input
              type="email"
              placeholder="Email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button type="submit" className="Login-btn" onClick={handleSubmit}>
            LOG IN
          </button>
          <h4>
            <span id="forget"> Don't have an account ? </span>

            <Link to="/signup" className="Sign-up">
              Sign up!
            </Link>
          </h4>
        </form>
        <footer className="footer">
          <p>&copy; 2020 WT TV2Z.All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
