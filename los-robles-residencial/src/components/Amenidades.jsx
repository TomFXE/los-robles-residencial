// src/components/Amenidades.jsx
import React from 'react';

// Datos de ejemplo
const amenidadesData = [
  {
    id: 1,
    nombre: 'Alberca',
    imgUrl: 'https://via.placeholder.com/300x200.png?text=Alberca'
  },
  {
    id: 2,
    nombre: 'Casa Club',
    imgUrl: 'https://via.placeholder.com/300x200.png?text=Casa+Club'
  },
  {
    id: 3,
    nombre: 'Áreas Verdes',
    imgUrl: 'https://via.placeholder.com/300x200.png?text=Areas+Verdes'
  }
];

export default function Amenidades() {
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
    grid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap'
    },
    card: {
      width: '300px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    cardContent: {
      padding: '15px'
    }
  };

  return (
    <section id="amenidades" style={styles.container}>
      <h2 style={styles.title}>Amenidades del Residencial</h2>
      <div style={styles.grid}>
        {amenidadesData.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.imgUrl} alt={item.nombre} style={styles.image} />
            <div style={styles.cardContent}>
              <h3>{item.nombre}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}