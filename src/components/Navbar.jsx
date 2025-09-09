import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    padding: '1rem 2rem',       // padding on sides
    backgroundColor: '#1e1e2f',
    color: '#fff',
  };

  const ulStyle = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',   // <-- this shifts all links right
    flexGrow: 1,                  // take all horizontal space
  };

  const activeStyle = {
    color: '#61dafb',
    fontWeight: 'bold',
    borderBottom: '2px solid #61dafb',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff' })} end>Home</NavLink></li>
        <li><NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff' })}>About</NavLink></li>
        <li><NavLink to="/skills" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff' })}>Skills</NavLink></li>
        <li><NavLink to="/projects" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff' })}>Projects</NavLink></li>
        <li><NavLink to="/experience" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff' })}>Experience</NavLink></li>
        <li><NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : { color: '#fff' })}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
