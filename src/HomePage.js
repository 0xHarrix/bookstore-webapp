// HomePage.js

import React from 'react';

function HomePage({ user, signOut }) {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default HomePage;
