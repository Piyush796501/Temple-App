import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>the dog</h1>
      <div className="overlay" />
      <div className="home-content">
        <h1>Welcome to Shri Gopinath Ashram & Mandir</h1>
        <div className="home-buttons">
          <button className="home-button">Daily Darshan</button>
          <button className="home-button">Join an Event</button>
          <button className="home-button">Donate Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;