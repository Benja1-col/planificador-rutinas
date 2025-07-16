import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Bienvenido al Planificador de Rutinas</h1>
      <p>Organiza tus actividades, cuida tu salud mental y lleva un seguimiento emocional.</p>
      <Link to="/dashboard" className="btn btn-primary mt-3">Ir al Panel</Link>
    </div>
  );
};

export default Home;
