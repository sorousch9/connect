import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button className="register-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
