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
      <Navbar/>
      <h1 className='herotext1'>
  The <span className='orange'>Smart</span> <br /> Choice For
  <span className='orange'> Future</span>
</h1>
<h2 className='herotext2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>

    </div>
  );
}

export default HomePage;
