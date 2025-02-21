import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="navbar-logo">Demo Site</Link>
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/docs" onClick={() => setMenuOpen(false)}>Docs</Link></li>
        <li><Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
        <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;