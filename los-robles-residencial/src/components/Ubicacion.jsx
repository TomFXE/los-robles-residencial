// src/components/Ubicacion.jsx
import React from 'react';

export default function Ubicacion() {
  const styles = {
    container: {
      padding: '40px',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.5em',
      marginBottom: '20px'
    },
    address: {
      fontSize: '1.2em',
      color: '#555',
      marginBottom: '30px'
    },
    mapContainer: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    }
  };

  return (
    <section id="ubicacion" style={styles.container}>
      <h2 style={styles.title}>Nuestra Ubicación</h2>
      <p style={styles.address}>
        Av. Robles Residencial #1234, Zapopan, Jalisco, México.
      </p>
      <div style={styles.mapContainer}>
        {/* Google Maps Embebido */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.813028212175!2d-103.3918666850731!3d20.67713898619114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0c86b16867%3A0x4c3a2f7c0d5073f!2sArcos%20de%20Guadalajara!5e0!3m2!1ses!2smx!4v1678886612345!5m2!1ses!2smx"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}