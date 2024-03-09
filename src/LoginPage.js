import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css'

function LoginPage({ auth, signInWithGoogle, signInWithFacebook }) {
  const navigate = useNavigate();

  const handleEmailSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '33%', padding: '0 20px' }}>
        <h2 className='login'>Login</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const { email, password } = e.target.elements;
          handleEmailSignIn(email.value, password.value);
        }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="email" id="email" name="email" placeholder="Email" ></input>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className='loginbutton'>Sign in</button>
        </form>
        <div className="lineWithText">
  <span>Or</span>
</div>
<div className="buttonContainer">
        <button onClick={handleGoogleSignIn} className='googlebutton'><img src="Google.png" alt="Google Logo" style={{ marginRight: '10px' }}/>Google</button>
        <button onClick={handleFacebookSignIn} className='googlebutton'><img src="Facebook.png" alt="Google Logo" style={{ marginRight: '10px' }}/>Facebook</button>
        </div>
      </div>
      <div style={{ width: '66%' }}>
        <img src='loginillustration.png' alt="Login Illustration" style={{ width: '100%', height: '99.5vh', objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default LoginPage;
