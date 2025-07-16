import React from 'react';

const RoutineForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
      <div className="mb-3">
        <label htmlFor="actividad" className="form-label">Actividad</label>
        <input
          type="text"
          className="form-control"
          id="actividad"
          name="actividad"
          value={formData.actividad}
          onChange={handleChange}
          required
          placeholder="Nombre de la actividad"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dia" className="form-label">Día de la semana</label>
        <select
          className="form-select"
          id="dia"
          name="dia"
          value={formData.dia}
          onChange={handleChange}
          required
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
        <label htmlFor="hora" className="form-label">Hora</label>
        <input
          type="time"
          className="form-control"
          id="hora"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Guardar rutina</button>
    </form>
  );
};

export default RoutineForm;
