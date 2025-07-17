import React from 'react';

const RoutineForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg" style={{ background: 'rgba(33, 150, 243, 0.07)', borderColor: '#1976d2' }}>
      <div className="mb-3">
        <label htmlFor="actividad" className="form-label fw-bold" style={{ color: '#1565c0' }}>Actividad</label>
        <input
          type="text"
          className="form-control"
          id="actividad"
          name="actividad"
          value={formData.actividad}
          onChange={handleChange}
          required
          placeholder="Nombre de la actividad"
          style={{ borderColor: '#1976d2' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dia" className="form-label fw-bold" style={{ color: '#1565c0' }}>Día de la semana</label>
        <select
          className="form-select"
          id="dia"
          name="dia"
          value={formData.dia}
          onChange={handleChange}
          required
          style={{ borderColor: '#1976d2' }}
        >
          <option value="">Selecciona un día</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
          <option value="Sábado">Sábado</option>
          <option value="Domingo">Domingo</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="hora" className="form-label fw-bold" style={{ color: '#1565c0' }}>Hora</label>
        <input
          type="time"
          className="form-control"
          id="hora"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          required
          style={{ borderColor: '#1976d2' }}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100" style={{ background: '#1976d2', border: 'none', fontWeight: 'bold', letterSpacing: '1px' }}>Guardar rutina</button>
    </form>
  );
};

export default RoutineForm;
