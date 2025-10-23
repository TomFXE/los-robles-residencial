// src/components/Footer.jsx (Después)
import React from 'react';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '30px',
      marginTop: '40px'
    },
    // NUEVO ESTILO
    socials: {
      marginTop: '15px'
    },
    // NUEVO ESTILO
    socialLink: {
      color: 'white',
      textDecoration: 'none',
      margin: '0 10px'
    }
  };

  return (
    <footer style={styles.footer}>
      {/* SECCIÓN AÑADIDA */}
      <div style={styles.socials}>
        <a href="#" style={styles.socialLink}>Facebook</a>
        <a href="#" style={styles.socialLink}>Instagram</a>
        <a href="#" style={styles.socialLink}>Twitter</a>
      </div>
      
      <p>© 2025 Los Robles Residencial. Todos los derechos reservados.</p>
      <p>Aviso de Privacidad</p>
    </footer>
  );
}