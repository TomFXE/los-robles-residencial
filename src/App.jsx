// src/App.jsx (Modificado)
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ModelsSection from './components/ModelsSection'; 
import Footer from './components/Footer';

// 1. Importar el nuevo componente
import Galeria from './components/Galeria'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ModelsSection />
        <Galeria /> {/* 2. Añadir el componente aquí */}
      </main>
      <Footer />
    </div>
  );
}
export default App;