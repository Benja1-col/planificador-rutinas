import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(90deg, #1565c0 60%, #1976d2 100%)' }}>
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/" style={{ color: '#fff', letterSpacing: '2px', fontSize: '1.5rem' }}>Rutinas Deportivas</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard" style={{ color: '#bbdefb', fontWeight: 'bold', fontSize: '1.1rem' }}>Panel</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
