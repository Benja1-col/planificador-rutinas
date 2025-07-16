import React from 'react';

const RoutineList = ({ routines, onEdit, onDelete }) => {
  if (!routines.length) return <p>No hay actividades aún.</p>;

  return (
    <div className="list-group">
      {routines.map(r => (
        <div key={r.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>{r.actividad}</strong> - {r.dia} a las {r.hora}
          </div>
          <div>
            <button
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => onEdit(r)}
              aria-label={`Editar ${r.actividad}`}
            >
              
            </button>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => {
                if (window.confirm(`¿Eliminar la actividad "${r.actividad}"?`)) {
                  onDelete(r.id);
                }
              }}
              aria-label={`Eliminar ${r.actividad}`}
            >
            
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoutineList;
