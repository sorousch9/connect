import { Link } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErr(error.response?.data);
      } else {
        setErr(null);
      }
    }
  };

  
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Join Our Network</h1>
          <p>
            Connect with like-minded individuals, share your experiences, and
            expand your network in a supportive community.
          </p>
          <span>Already have an account ?</span>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Create an Account</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <button className="register-btn" onClick={handleClick}>
              {err && err}
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
