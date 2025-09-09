import React from 'react';

const Card = ({ title, subtitle, description, period }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }}>
    <h3>{title}</h3>
    <h4 style={{ color: '#666' }}>{subtitle}</h4>
    {period && <small style={{ color: '#999' }}>{period}</small>}
    <p>{description}</p>
  </div>
);

export default Card;
