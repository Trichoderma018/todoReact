import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import llamados from '../services/llamados'
import '../styles/Register.css'

function Registerr() {
  const [nombreUsuario,SetNombreUsuario]=useState("")
  const [correoUsuario,SetCorreoUsuario]=useState("")
  const [contraUsuario,SetContraUsuario]=useState("")

  function cargar() {
    let usuario = {
      "nombre":nombreUsuario,
      "correo":correoUsuario,
      "contrasena":contraUsuario
    }

    llamados.PostData(usuario,"users")
  }
  function contrasena(evento) {
    SetContraUsuario(evento.target.value)
  }
  function correo(evento) {
    SetCorreoUsuario(evento.target.value)
  }
  function nombre(evento) {
    SetNombreUsuario(evento.target.value)
  }
  return (
    <div>
      <div className='div-register'>
        <label >Nombre</label>
        <input value={nombreUsuario} onChange={nombre} type="text" />
        <label >Correo</label>
        <input value={correoUsuario} onChange={correo} type="text" />
        <label >Contraseña</label>
        <input value={contraUsuario} onChange={contrasena} type="password" />
        <button onClick={cargar}>Registrarse</button>

        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia aqui</Link></p>
      </div>
    </div>
  )
}

export default Registerr