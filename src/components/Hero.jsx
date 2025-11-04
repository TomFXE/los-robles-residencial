// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <h1 className="hero-title">Los Robles Residencial</h1>
      <p className="hero-subtitle">Tu nuevo hogar te espera.</p>

      <div id="video" style={{ marginTop: '20px' }}>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: 'white',
            color: '#2c3e50',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Ver Video del Residencial
        </a>
      </div>
    </section>
  );
}
