import React, { useState } from 'react';
import NavBar from '../components/NavBar';  // Si tienes NavBar, sino comenta esta línea y la que lo usa
import RoutineForm from '../components/RoutineForm';
import RoutineList from '../components/RoutineList';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    actividad: '',
    dia: '',
    hora: '',
  });

  const [routines, setRoutines] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple: no agregar si alguna campo está vacío
    if (!formData.actividad || !formData.dia || !formData.hora) return;

    const newRoutine = {
      id: Date.now(), // ID único
      ...formData,
    };

    setRoutines(prev => [...prev, newRoutine]);

    // Limpiar formulario
    setFormData({ actividad: '', dia: '', hora: '' });
  };

  const handleEdit = (routine) => {
    alert(`Función editar para: ${routine.actividad} (a implementar)`);
  };

  const handleDelete = (id) => {
    setRoutines(prev => prev.filter(r => r.id !== id));
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h2>Tu Rutina Semanal</h2>
        <RoutineForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <hr />
        <RoutineList
          routines={routines}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Dashboard;
