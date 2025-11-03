// src/components/Hero.jsx (MODIFICADO)

import React from 'react';

export default function Hero() {
  
  // --- CAMBIOS DE SPRINT 3 ---
  // 'const styles = {}' ha sido eliminado.
  // Los estilos se movieron a App.css
  // --- FIN DE CAMBIOS ---

  return (
    // Usamos 'className' en lugar de 'style'
    <section id="inicio" className="hero-section">
      <h1 className="hero-title">Los Robles Residencial</h1>
      <p className="hero-subtitle">Tu nuevo hogar te espera.</p>
    </section>
  );
}