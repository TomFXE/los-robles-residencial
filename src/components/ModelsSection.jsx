// src/components/ModelsSection.jsx (Después)
import React from 'react';
import HouseModelCard from './HouseModelCard';
// IMPORTACIÓN AÑADIDA
import { modelsData } from '../mocks/modelsData';

// DATOS MOCK ELIMINADOS DE AQUÍ

// NOMBRE DE FUNCIÓN CAMBIADO
export default function ModelsSection() { 
  const styles = {
    container: {
      padding: '40px',
      textAlign: 'center'
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
    }
  };

  return (
    <section id="modelos" style={styles.container}>
      <h2 style={styles.title}>Nuestros Modelos</h2>
      <div style={styles.grid}>
        {modelsData.map(model => (
          <HouseModelCard
            key={model.id}
            name={model.name}
            sqMeters={model.sqMeters}
            price={model.price}
            imgUrl={model.imgUrl}
          />
        ))}
      </div>
    </section>
  );
}