import React from 'react';

const Footer = () => (
  <footer style={{
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#1e1e2f',
    color: '#aaa',
    marginTop: '2rem',
  }}>
    <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
  </footer>
);

export default Footer;
