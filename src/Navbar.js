import React from 'react';
import './styles/Navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
  return (
<div style={{ marginLeft: '40px', marginRight: '40px'}}>
      <nav style={{ backgroundColor: 'transparent', color: '#ED6E12', padding: '10px', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="logo.png" alt="Logo" style={{ marginRight: '10px', width: '30px', height: '30px' }} />
            <h1 className='Foodie'>Book Store</h1>
          </div>
          <div>
              <div className='links'>
                <a href="/" className='link'>Home</a>
                <a href="/" className='link'>About Us</a>                
                <a href="/" className='link'>Courses</a>
                <a href="/" className='link'>Faculty</a>
                <a href="/" className='link'>Contact Us</a>
                <a href="/" className='Signup'>Login</a>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
