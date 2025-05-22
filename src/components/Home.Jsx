import React from 'react';
import './Home.css';

function Home() {
    const morningTime = "6:00 AM";
  const eveningTime = "5:00 PM";
  return (
    
    <div className="home-container">
      <div className="overlay" />
      
      <div className="home-content">
        <div>
      <img src={`${process.env.PUBLIC_URL}/temple.jpg`} alt="Temple"/>
    </div>
        <h1>Welcome to Shri Gopinath Ashram & Mandir</h1>
        <div className="home-buttons">
          <button className="home-button">Daily Darshan</button>
          <button className="home-button">Join an Event</button>
          <button className="home-button">Donate Now</button>
        </div>
         <p>The committee created by Kashmiri society has built the Shri Siddheshwar Mahadev Mandir near Central Park in Vaishali.
         Shivling in the temple is the largest Shivling of Vaishali. Gopinath Ashram, which is connected to the temple, is 
         also operated by this committee. Yagya is also organized on the first Sunday of every month. There is a beautiful 
         garden in front of the temple. The temple committee celebrates the annual festival of Shivaratri and monthly 
         Shivterash with great joy. Establishment day, Gopinathji birthday and Gopinathji nirvana festivals are organized 
         as the day of bhandara. Know About Temple in Hindi | About Sant Shri Gopinath Ji</p>
         <div>
      <h2>Aarti Timings</h2>
      <h3>Morning Time: {morningTime}</h3>
      <h4>Evening Time: {eveningTime}</h4>
      {/* Other content */}
    </div>
      </div>
     <div className="key-highlights-container" style={{maxWidth:'320px',width:'100%',color:'white'}} >
      <h3>🔍 Key Highlights</h3>
      <ul className="highlights-list">
        <li>• The Largest Shivling of Vaishali.</li>
        <li>• Also Attached with Guru Shri Gopinath Ji Aashram.</li>
      </ul>
    </div>
    </div>
  );
}

export default Home;