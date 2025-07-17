import React, { useState, useEffect } from 'react';

const EmotionTracker = () => {
  const [emotion, setEmotion] = useState('');
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('emotions');
    return saved ? JSON.parse(saved) : [];
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emotion) return;

    let updatedHistory;
    if (editIndex !== null) {
      updatedHistory = history.map((entry, idx) => idx === editIndex ? { ...entry, emotion } : entry);
      setEditIndex(null);
    } else {
      const today = new Date().toLocaleDateString();
      const newEntry = { date: today, emotion };
      updatedHistory = [...history, newEntry];
    }
    setHistory(updatedHistory);
    localStorage.setItem('emotions', JSON.stringify(updatedHistory));
    setEmotion('');
  };

  const handleEdit = (idx) => {
    setEmotion(history[idx].emotion);
    setEditIndex(idx);
  };

  const handleDelete = (idx) => {
    const updatedHistory = history.filter((_, i) => i !== idx);
    setHistory(updatedHistory);
    localStorage.setItem('emotions', JSON.stringify(updatedHistory));
    if (editIndex === idx) {
      setEditIndex(null);
      setEmotion('');
    }
  };

  return (
    <div className="mt-4">
      <h4 className="fw-bold mb-3" style={{ color: '#1565c0' }}>¿Cómo te sientes hoy?</h4>
      <form onSubmit={handleSubmit} className="mb-3 d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">
        <input
          type="text"
          className="form-control mb-2 mb-md-0"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          placeholder="Feliz, ansioso, relajado..."
          style={{ maxWidth: 250, borderColor: '#1976d2' }}
        />
        <button type="submit" className="btn btn-primary" style={{ background: '#1976d2', border: 'none', fontWeight: 'bold' }}>{editIndex !== null ? 'Actualizar' : 'Guardar emoción'}</button>
        {editIndex !== null && (
          <button type="button" className="btn btn-link text-danger" onClick={() => { setEditIndex(null); setEmotion(''); }}>Cancelar</button>
        )}
      </form>

      <h5 className="fw-bold" style={{ color: '#1976d2' }}>Historial emocional</h5>
      <ul className="list-group shadow-sm" style={{ maxWidth: 350, margin: '0 auto' }}>
        {history.map((entry, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center" style={{ background: 'rgba(21, 101, 192, 0.08)', border: '1px solid #1976d2', color: '#1565c0' }}>
            <span>{entry.date}: <span className="fw-bold">{entry.emotion}</span></span>
            <span>
              <button className="btn btn-sm btn-outline-primary me-2" style={{ borderColor: '#1976d2', color: '#1976d2' }} onClick={() => handleEdit(index)} aria-label="Editar emoción">Editar</button>
              <button className="btn btn-sm btn-outline-danger" style={{ borderColor: '#d32f2f', color: '#d32f2f' }} onClick={() => handleDelete(index)} aria-label="Eliminar emoción">Eliminar</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmotionTracker;
