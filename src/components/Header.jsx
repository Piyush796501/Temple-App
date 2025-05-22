import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
     const [aboutMenuOpen, setAboutMenuOpen] = useState(false);

  const handleAboutClick = () => {
    setAboutMenuOpen((open) => !open);
  };
  return (
   <header>
    <div> <h4 className="header-title">Sidheswar Sivalay & Gopinath Aashram</h4></div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li style={{ position: 'relative' }} onMouseLeave={() => setAboutMenuOpen(false)}>
  <button
    type="button"
    onClick={handleAboutClick}
    className="about-btn"
  >
    About
  </button>

  {aboutMenuOpen && (
    <ul
      className="submenu"
      style={{
        position: 'absolute',
        left: 0,
        top: '100%',
        color:'white',
        listStyle: 'none',
        padding: '0.5em 1em',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        zIndex: 999, // add this to ensure it appears on top
      }}
    >
      <li>
        <Link to="/about/mandir" onClick={() => setAboutMenuOpen(false)}>
          Mandir
        </Link>
      </li>
      <li>
        <Link to="/about/aashram" onClick={() => setAboutMenuOpen(false)}>
          Aashram
        </Link>
      </li>
    </ul>
  )}
</li>
                    <li><Link to="/darshan">Darshan Times</Link></li>
                    <li><Link to="/donations">Donations</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => (
//   <header className="bg-yellow-50 shadow p-4">
//     {/* <nav className="flex justify-between items-center">
//       <h1 className="text-xl font-bold text-purple-800">Shri Gopinath Ashram & Mandir</h1>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/darshan">Darshan</Link>
//         <Link to="/events">Events</Link>
//         <Link to="/seva">Seva</Link>
//         <Link to="/donate">Donate</Link>
//         <Link to="/gallery">Gallery</Link>
//         <Link to="/contact">Contact</Link>
//       </div> 
//     </nav> */}
//   </header>
// );
// export default Header;