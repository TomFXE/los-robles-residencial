// src/components/Contacto.jsx
import React from 'react';

export default function Contacto() {
  const styles = {
    container: {
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    },
    title: {
      fontSize: '2.5em',
      marginBottom: '40px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    },
    input: {
      padding: '15px',
      fontSize: '1em',
      border: '1px solid #ddd',
      borderRadius: '5px'
    },
    textarea: {
      padding: '15px',
      fontSize: '1em',
      border: '1px solid #ddd',
      borderRadius: '5px',
      minHeight: '150px'
    },
    button: {
      padding: '15px',
      fontSize: '1.2em',
      backgroundColor: '#2c3e50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <section id="contacto" style={styles.container}>
      <h2 style={styles.title}>Pide Informes</h2>
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nombre" style={styles.input} required />
        <input type="email" placeholder="Email" style={styles.input} required />
        <input type="tel" placeholder="Teléfono" style={styles.input} />
        <textarea placeholder="Mensaje" style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </section>
  );
}