// HomePage.js

import React from 'react';
import Navbar from './Navbar';
import './styles/Hero.css'

function HomePage({ user, signOut }) {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <Navbar></Navbar>
    </div>
  );
}

export default HomePage;
