import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-hero d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ background: 'linear-gradient(135deg, #0d47a1 60%, #1976d2 100%)', color: '#fff' }}>
      <div className="p-5 rounded shadow-lg" style={{ background: 'rgba(0, 30, 60, 0.85)' }}>
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#42a5f5' }}>Planificador de Rutinas para Bienestar</h1>
        <p className="lead mb-4" style={{ color: '#bbdefb', fontWeight: 500 }}>
          Organiza tus actividades deportivas y de autocuidado.<br />
          Medita, lee, camina, escribe y potencia tu salud mental.<br />
          Registra tu estado emocional y observa tu evolución.<br />
          <span style={{ color: '#fff', fontWeight: 700 }}>¡Convierte el bienestar en tu mejor rutina!</span>
        </p>
        <Link to="/dashboard" className="btn btn-lg btn-primary px-5 py-2 shadow" style={{ background: '#1565c0', border: 'none', fontWeight: 'bold', letterSpacing: '1px', fontSize: '1.2rem' }}>
          Comenzar ahora
        </Link>
      </div>
    </div>
  );
};

export default Home;
