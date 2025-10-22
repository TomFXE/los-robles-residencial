import React from 'react';

export default function Header() {
  const styles = {
    header: {
      backgroundColor: '#fff',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eee'
    },
    logo: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: '#2c3e50'
    },
    nav: {
      display: 'flex',
      gap: '20px'
    },
    navLink: {
      textDecoration: 'none',
      color: '#34495e',
      fontWeight: '500'
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Los Robles</div>
      <nav style={styles.nav}>
        <a href="#inicio" style={styles.navLink}>Inicio</a>
        <a href="#modelos" style={styles.navLink}>Modelos</a>
        <a href="#amenidades" style={styles.navLink}>Amenidades</a>
        <a href="#contacto" style={styles.navLink}>Contacto</a>
      </nav>
    </header>
  );
}