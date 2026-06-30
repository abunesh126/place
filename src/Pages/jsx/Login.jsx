// useState lets a component "remember" values, like what the user typed.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  // One state variable for email, one for password.
  // This is simpler to read than combining them into one object.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigate lets us send the user to a different page after login.
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing

    console.log("Email:", email);
    console.log("Password:", password);

    // After "logging in", go to the Show Student page.
    navigate("/show-student");
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>

        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
