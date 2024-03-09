import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut as firebaseSignOut } from 'firebase/auth';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { app } from './FirebaseProvider';
import SignupPage from './RegisterPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(app), provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const signInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(app), provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const signOut = () => {
    firebaseSignOut(getAuth(app)).then(() => {
      setUser(null);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={user ? <HomePage user={user} signOut={signOut} /> : <Navigate to="/" />} />
        <Route path="/" element={<LoginPage auth={getAuth(app)} signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook} />} />
        <Route path="signup" element={<SignupPage auth={getAuth(app)} signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook} />} />
      </Routes>
    </Router>
  );
}

export default App;
