import React from 'react';

export default function Hero() {
  const styles = {
    hero: {
      height: '400px',
      backgroundColor: '#34495e',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',

      backgroundImage: 'url(https://via.placeholder.com/1200x400.png?text=Vista+Residencial)',
      backgroundSize: 'cover'
    },
    title: {
      fontSize: '3em',
      margin: '0 0 10px 0',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    subtitle: {
      fontSize: '1.5em',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
    }
  };

  return (
    <section id="inicio" style={styles.hero}>
      <h1 style={styles.title}>Los Robles Residencial</h1>
      <p style={styles.subtitle}>Tu nuevo hogar te espera.</p>
    </section>
  );
}