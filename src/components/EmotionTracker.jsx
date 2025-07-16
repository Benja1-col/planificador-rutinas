import React, { useState, useEffect } from 'react';

const EmotionTracker = () => {
  const [emotion, setEmotion] = useState('');
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('emotions');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emotion) return;

    const today = new Date().toLocaleDateString();
    const newEntry = { date: today, emotion };

    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem('emotions', JSON.stringify(updatedHistory));
    setEmotion('');
  };

  return (
    <div className="mt-4">
      <h4>¿Cómo te sientes hoy?</h4>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          placeholder="Feliz, ansioso, relajado..."
        />
        <button type="submit" className="btn btn-outline-primary">Guardar emoción</button>
      </form>

      <h5>Historial emocional</h5>
      <ul className="list-group">
        {history.map((entry, index) => (
          <li key={index} className="list-group-item">
            {entry.date}: {entry.emotion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmotionTracker;
