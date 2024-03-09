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
<div style={{ display: 'flex', alignItems: 'center', position: "absolute", top: '490px', left: '194px' }}>
  <div style={{ position: 'relative', width: '300px' }}>
  <input
  type="text"
  placeholder="Search"
  style={{
    padding: '14px 32px 14px 32px', // Adjust padding to accommodate image and text
    borderRadius: '24px',
    border: '1px solid #ccc',
    width: '100%', // Adjust width as needed
    backgroundImage: 'url(Search.png)',
    backgroundPosition: '10px center', // Adjust position of the image // Add the path to your image here
    backgroundRepeat: 'no-repeat',
    backgroundSize: '12px 12px', // Adjust size of the image
  }}
/>
    <button
      style={{
        padding: '12px 20px',
        borderRadius: '24px',
        backgroundColor: 'purple',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        position: 'absolute',
        top: '50%', // Align button to the vertical center
        transform: 'translateY(-50%)', // Move button up by half of its height
        left: '90.5%',
        height: '100%'
      }}
    >
      Continue
    </button>
  </div>
</div>
</div>
  );
}

export default HomePage;
