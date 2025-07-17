import React from 'react';

const RoutineList = ({ routines, onEdit, onDelete }) => {
  if (!routines.length) return <div className="alert alert-info text-center">No hay actividades aún.</div>;

  return (
    <div className="list-group shadow-sm">
      {routines.map(r => (
        <div key={r.id} className="list-group-item d-flex justify-content-between align-items-center mb-2 rounded" style={{ background: 'rgba(21, 101, 192, 0.08)', border: '1px solid #1976d2' }}>
          <div>
            <span className="fw-bold" style={{ color: '#1565c0' }}>{r.actividad}</span>
            <span className="ms-2 text-secondary">{r.dia} a las {r.hora}</span>
          </div>
          <div>
            <button
              className="btn btn-sm btn-outline-primary me-2"
              style={{ borderColor: '#1976d2', color: '#1976d2', fontWeight: 'bold' }}
              onClick={() => onEdit(r)}
              aria-label={`Editar ${r.actividad}`}
            >
              Editar
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              style={{ borderColor: '#d32f2f', color: '#d32f2f', fontWeight: 'bold' }}
              onClick={() => {
                if (window.confirm(`¿Eliminar la actividad "${r.actividad}"?`)) {
                  onDelete(r.id);
                }
              }}
              aria-label={`Eliminar ${r.actividad}`}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoutineList;
