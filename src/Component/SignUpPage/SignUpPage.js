import React, { useState } from "react";
import "./SignUpPage.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  var auth = JSON.parse(localStorage.getItem("auth"));

  const handleSignUp = (e) => {
    e.preventDefault();
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const ans = re.test(password);

    if (auth === null) {
      auth = [];
    }

    if (password !== confirmPassword) {
      toast.error("Password didn't match");
    } else if (password === confirmPassword && !ans) {
      toast.error(
        "Password should have atleast one uppercase,lowecase,numeric and special character "
      );
    } else {
      const present = auth.filter((p) => p.email === email);
      if (present.length === 0) {
        toast.success("Profile created successfully");
        auth = [
          ...auth,
          { email: email, username: username, password: password },
        ];
        localStorage.setItem("auth", JSON.stringify(auth));
        setUsername("");
        setPassword("");
        setEmail("");
        setConfirmPassword("");
        navigate("/");
      } else {
        toast.error("Email already Present");
      }

      // localStorage.setItem("name", username);
      // localStorage.setItem("email", email);
      // localStorage.setItem("password", password);
    }
  };

  return (
    <>
      <div className="Header">
        <Link to="/" className="Logo">
          <h1>TV2Z</h1>
        </Link>

        <h3>SIGN UP</h3>
      </div>
      <form className="SignUp" onSubmit={handleSignUp}>
        <div className="Username">
          <input
            id="inputdefault"
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="Email">
          <input
            id="inputdefault"
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="Password">
          <input
            id="inputdefault"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="Cpassword">
          <input
            id="inputdefault"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <button className="Submit-btn">Submit</button>
        </div>
      </form>
      <footer className="footer">
        <p>&copy; 2020 WT TV2Z.All rights reserved.</p>
      </footer>
    </>
  );
};

export default SignUpPage;
