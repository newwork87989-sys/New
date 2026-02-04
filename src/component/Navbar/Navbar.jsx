import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Savage<span>UI</span></div>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
         <Link to="/Contact">Contact</Link>
          <li><button className="btn">Login</button></li>
        </ul>

        <div className="menu" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    
      
    </>
  );
}
export default Navbar
