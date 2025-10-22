import React from 'react';


import Header from './components/Header';
import Hero from './components/Hero';
import ModelsPage from './pages/ModelsPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ModelsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;