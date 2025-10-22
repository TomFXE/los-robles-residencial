import React from 'react';
import HouseModelCard from '../components/HouseModelCard';

// Tarea 2.1: Datos mock (pueden estar en un JSON)
const modelsData = [
  {
    id: 1,
    name: 'Modelo Fresno',
    sqMeters: 180,
    price: '$3,500,000',
    imgUrl: 'https://tse3.mm.bing.net/th/id/OIP.7M95bTxvhzFyb3eOKVxdDAHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 2,
    name: 'Modelo Roble',
    sqMeters: 220,
    price: '$4,200,000',
    imgUrl: 'https://tse2.mm.bing.net/th/id/OIP.n8ZlBCZmwfEnluwD_slWFQHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 3,
    name: 'Modelo Cedro',
    sqMeters: 250,
    price: '$4,800,000',
    imgUrl: 'https://tse1.mm.bing.net/th/id/OIP.EyL3EUBCJGw1Rx2toMCE0gHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
  }
];

export default function ModelsPage() {
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