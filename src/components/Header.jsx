import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
   <header>
    <div> <h4 className="header-title">Sidheswar Sivalay & Gopinath Aashram</h4></div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
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