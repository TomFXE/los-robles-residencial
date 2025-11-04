// src/components/Footer.jsx (MODIFICADO)

import React from 'react';

export default function Footer() {

  // --- CAMBIOS DE SPRINT 3 ---
  // 'const styles = {}' ha sido eliminado.
  // Los estilos se movieron a App.css
  // --- FIN DE CAMBIOS ---

  return (
    // Usamos 'className'
    <footer className="footer-main">
      <div className="footer-socials">
        <a href="#" className="footer-social-link">Facebook</a>
        <a href="#" className="footer-social-link">Instagram</a>
        <a href="#" className="footer-social-link">Twitter</a>
      </div>
      
      <p>© 2025 Los Robles Residencial. Todos los derechos reservados.</p>
      <p>Curso: Fundamentos de Frontend</p>
      <p>Nombre: [Tomas Jimenez Cardenas]</p>
      <p>Código: [224790878]</p>
      <p>Correo: [tomas.jimenez9087@alumnos.udg.mx]</p>
      <p>Aviso de Privacidad</p>

    </footer>
  );
}