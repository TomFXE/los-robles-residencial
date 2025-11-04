// src/components/Galeria.jsx
import React, { useState } from 'react';
import { galleryData } from '../mocks/galleryData';

export default function Galeria() {
  // Estado para manejar el modal (criterio opcional )
  const [selectedImage, setSelectedImage] = useState(null);

  const styles = {
    container: {
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    },
    title: {
      fontSize: '2.5em',
      marginBottom: '40px',
      color: '#333'
    },
    // Estilo para el "formato de grid (cuadrícula)" [cite: 85]
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px'
    },
    gridImage: {
      width: '350px',
      height: '250px',
      objectFit: 'cover',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    },
    // --- Estilos para el Modal ---
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modalContent: {
      position: 'relative',
      padding: '10px'
    },
    modalImage: {
      maxWidth: '90vw',
      maxHeight: '90vh',
      borderRadius: '8px'
    }
  };

  // Función para aplicar un efecto hover simple con JS
  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.03)';
  };
  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    // "Debe existir una nueva sección 'Galería'" [cite: 84]
    <section id="galeria" style={styles.container}>
      <h2 style={styles.title}>Galería del Proyecto</h2>
      
      <div style={styles.grid}>
        {galleryData.map((image) => (
          <img
            key={image.id}
            src={image.imgUrl}
            alt="Foto de la galería"
            style={styles.gridImage}
            onClick={() => setSelectedImage(image.imgUrl)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        ))}
      </div>

      {/* Modal para la imagen ampliada  */}
      {selectedImage && (
        <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent}>
            <img 
              src={selectedImage} 
              alt="Vista ampliada" 
              style={styles.modalImage} 
            />
          </div>
        </div>
      )}
    </section>
  );
}