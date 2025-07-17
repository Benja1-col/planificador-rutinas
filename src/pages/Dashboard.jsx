import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import RoutineForm from '../components/RoutineForm';
import RoutineList from '../components/RoutineList';
import EmotionTracker from '../components/EmotionTracker';
import MotivationalQuote from '../components/MotivationalQuote';
import { getRoutines, saveRoutines } from '../utils/localStorageHelper';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    actividad: '',
    dia: '',
    hora: '',
  });
  const [routines, setRoutines] = useState([]);
  const [editId, setEditId] = useState(null);

  // Cargar rutinas desde Local Storage al iniciar
  useEffect(() => {
    setRoutines(getRoutines());
  }, []);

  // Guardar rutinas en Local Storage cada vez que cambian
  useEffect(() => {
    saveRoutines(routines);
  }, [routines]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.actividad || !formData.dia || !formData.hora) return;

    if (editId) {
      setRoutines(prev => prev.map(r => r.id === editId ? { ...r, ...formData } : r));
      setEditId(null);
    } else {
      const newRoutine = {
        id: Date.now(),
        ...formData,
      };
      setRoutines(prev => [...prev, newRoutine]);
    }
    setFormData({ actividad: '', dia: '', hora: '' });
  };

  const handleEdit = (routine) => {
    setFormData({ actividad: routine.actividad, dia: routine.dia, hora: routine.hora });
    setEditId(routine.id);
  };

  const handleDelete = (id) => {
    setRoutines(prev => prev.filter(r => r.id !== id));
    if (editId === id) {
      setEditId(null);
      setFormData({ actividad: '', dia: '', hora: '' });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4 dashboard-bg" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="fw-bold mb-4 text-center" style={{ color: '#1565c0', letterSpacing: '1px' }}>Planificador Deportivo y de Bienestar</h2>
        <MotivationalQuote />
        <div className="row g-4 mt-2">
          <div className="col-12 col-md-6">
            <RoutineForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            {editId && (
              <div className="alert alert-info mt-2 py-2">Editando rutina. <button className="btn btn-sm btn-link text-danger" onClick={() => { setEditId(null); setFormData({ actividad: '', dia: '', hora: '' }); }}>Cancelar</button></div>
            )}
            <hr className="my-4 d-md-none" />
          </div>
          <div className="col-12 col-md-6">
            <EmotionTracker />
          </div>
        </div>
        <hr className="my-4" />
        <div className="row justify-content-center">
          <div className="col-md-8">
            <RoutineList
              routines={routines}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
