import React from 'react';

export default function HouseModelCard({ name, sqMeters, price, imgUrl }) {
  const styles = {
    card: {
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      textAlign: 'left'
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    content: {
      padding: '20px'
    },
    name: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      margin: '0 0 10px 0'
    },
    details: {
      fontSize: '1em',
      color: '#555',
      marginBottom: '5px'
    }
  };

  return (
    <div style={styles.card}>
      <img src={imgUrl} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.details}>{sqMeters} m² de construcción</p>
        <p style={styles.details}>Desde: <strong>{price}</strong></p>
      </div>
    </div>
  );
}