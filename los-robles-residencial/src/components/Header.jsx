// src/components/Header.jsx (MODIFICADO)

// --- CAMBIOS DE SPRINT 3 ---
// Importamos 'useState' para manejar el estado del menú móvil
import React, { useState } from 'react'; 
// --- FIN DE CAMBIOS ---

export default function Header() {
  
  // --- CAMBIOS DE SPRINT 3 ---
  // Estado para abrir/cerrar el menú móvil
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Ya no definimos 'const styles = {}' aquí.
  // Esos estilos se moverán a App.css
  // --- FIN DE CAMBIOS ---

  return (
    // Usamos 'className' para los estilos de App.css
    <header className="header-main">
      <div className="header-logo">Los Robles</div>

      {/* --- CAMBIO DE SPRINT 3: Menú de Escritorio --- */}
      {/* Este 'nav' ahora solo se mostrará en escritorio */}
      <nav className="header-nav-desktop">
        <a href="#inicio" className="header-nav-link">Inicio</a>
        <a href="#modelos" className="header-nav-link">Modelos</a>
        <a href="#amenidades" className="header-nav-link">Amenidades</a>
        <a href="#contacto" className="header-nav-link">Contacto</a>
      </nav>

      {/* --- CAMBIO DE SPRINT 3: Botón de Menú Móvil --- */}
      {/* Este botón solo será visible en móviles (definido en App.css) */}
      <button 
        className="header-hamburger" 
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰ {/* Icono de hamburguesa */}
      </button>

      {/* --- CAMBIO DE SPRINT 3: Menú Desplegable Móvil --- */}
      {/* Este 'nav' solo aparece si 'menuAbierto' es true */}
      {menuAbierto && (
        <nav className="header-nav-mobile">
          <a href="#inicio" className="header-nav-link" onClick={() => setMenuAbierto(false)}>Inicio</a>
          <a href="#modelos" className="header-nav-link" onClick={() => setMenuAbierto(false)}>Modelos</a>
          <a href="#amenidades" className="header-nav-link" onClick={() => setMenuAbierto(false)}>Amenidades</a>
          <a href="#contacto" className="header-nav-link" onClick={() => setMenuAbierto(false)}>Contacto</a>
        </nav>
      )}
    </header>
  );
}