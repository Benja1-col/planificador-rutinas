const STORAGE_KEY = 'rutinas_salud_mental';

export function getRoutines() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveRoutines(routines) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(routines));
}

export function addRoutine(routine) {
  const routines = getRoutines();
  routines.push(routine);
  saveRoutines(routines);
}

export function updateRoutine(updatedRoutine) {
  let routines = getRoutines();
  routines = routines.map(r => r.id === updatedRoutine.id ? updatedRoutine : r);
  saveRoutines(routines);
}

export function deleteRoutine(id) {
  let routines = getRoutines();
  routines = routines.filter(r => r.id !== id);
  saveRoutines(routines);
}
