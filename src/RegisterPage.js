import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './styles/Login.css'

function SignupPage({ auth }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        navigate('/home'); // Redirect to login after successful sign-up
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="signup">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="loginbutton">Sign Up</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="signup-link">
          <span>Already have an account? </span>
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
