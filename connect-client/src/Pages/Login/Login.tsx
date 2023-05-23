import { Link } from "react-router-dom";
import "./Login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
