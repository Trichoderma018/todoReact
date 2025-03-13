import React, { useState } from 'react'
import llamados from '../services/llamados'

function ToDo() {
  //Input, enventos al imput que es el onchanque, el value, el Hook y la funcion para cargar los datos
  //Llamar los servicios y guardar
  const [tareaCreada,SetTareaCreada]=useState("")

  function cargar () {
    let todotarea = {
      "tarea":tareaCreada
    }
    llamados.PostData(todotarea, 'tasks')
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  function tarea(evento){
    SetTareaCreada(evento.target.value)
  }
  return (
    <div>
        <div>
          <h1>Lista To-Do</h1>
          <label htmlFor="">Tarea: </label>
          <input value={tareaCreada} onChange={tarea} type="text" />
          <button onClick={cargar}>Agregar</button>
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
    </div>
  )
}

export default ToDo