// src/App.jsx (Después)
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// RUTA Y NOMBRE ACTUALIZADOS
import ModelsSection from './components/ModelsSection'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ModelsSection /> {/* <-- Usa 'ModelsSection' */}
      </main>
      <Footer />
    </div>
  );
}
export default App;