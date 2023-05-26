import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";
interface Inputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState<Inputs>({
    username: "",
    password: "",
  });
  const [err, setErr] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err: any) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Join Our Community</h1>
          <p>
            Come and be a part of our community where you can connect with
            people, share your thoughts and ideas, and learn from each other.
          </p>
          <span>Don't have an account yet?</span>
          <Link to="/register">
            <button className="register-btn">Create Account</button>
          </Link>
        </div>
        <div className="right">
          <h1>Welcome Back</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            {err && err}
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
