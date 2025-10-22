import React from 'react';

export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '30px',
      marginTop: '40px'
    }
  };

  return (
    <footer style={styles.footer}>
      <p>© 2025 Los Robles Residencial. Todos los derechos reservados.</p>
      <p>Aviso de Privacidad</p>
    </footer>
  );
}