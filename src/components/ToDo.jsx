import React, { useState, useEffect } from 'react';
import llamados from '../services/llamados';
import './ToDo.css';

function ToDo() {
  const [tareaCreada, setTareaCreada] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editarTaskId, setEditarTaskId] = useState(null);
  const [editarTaskTexto, setEditarTaskTexto] = useState("");

  useEffect(() => {
    obtenerTareas();
  }, []);

  function obtenerTareas() {
    llamados.GetData('tasks')
      .then(data => setTasks(data))
      .catch(error => console.error('Error al obtener tareas:', error));
  }

  function agregarTarea() {
    let nuevaTarea = {
      "tarea": tareaCreada,
      "completed": false
    };
    llamados.PostData(nuevaTarea, 'tasks')
      .then(data => {
        console.log(data);
        obtenerTareas(); // Obtener tareas nuevamente para actualizar la lista
        setTareaCreada(""); // Limpiar el campo de entrada
      })
      .catch(error => console.error('Error al agregar tarea:', error));
  }

  function manejarCambio(evento) {
    setTareaCreada(evento.target.value);
  }

  function alternarCompletado(task) {
    const tareaActualizada = { ...task, completed: !task.completed };
    llamados.UpdateData(tareaActualizada, 'tasks', task.id)
      .then(() => obtenerTareas())
      .catch(error => console.error('Error al actualizar tarea:', error));
  }

  function iniciarEdicion(task) {
    setEditarTaskId(task.id);
    setEditarTaskTexto(task.tarea);
  }

  function guardarEdicion(task) {
    const tareaActualizada = { ...task, tarea: editarTaskTexto };
    llamados.UpdateData(tareaActualizada, 'tasks', task.id)
      .then(() => {
        obtenerTareas();
        setEditarTaskId(null);
        setEditarTaskTexto("");
      })
      .catch(error => console.error('Error al actualizar tarea:', error));
  }

  function eliminarTarea(taskId) {
    llamados.DeleteData('tasks', taskId)
      .then(() => obtenerTareas())
      .catch(error => console.error('Error al eliminar tarea:', error));
  }

  return (
    <div className="todo-container">
      <div>
        <h1>Lista To-Do</h1>
        <label htmlFor="">Tarea: </label>
        <input value={tareaCreada} onChange={manejarCambio} type="text" />
        <button className="agregar" onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => alternarCompletado(task)}
            />
            {editarTaskId === task.id ? (
              <input
                type="text"
                value={editarTaskTexto}
                onChange={(e) => setEditarTaskTexto(e.target.value)}
              />
            ) : (
              <span>{task.tarea}</span>
            )}
            {editarTaskId === task.id ? (
              <button className="guardar" onClick={() => guardarEdicion(task)}>Guardar</button>
            ) : (
              <button className="editar" onClick={() => iniciarEdicion(task)}>Editar</button>
            )}
            <button className="eliminar" onClick={() => eliminarTarea(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;