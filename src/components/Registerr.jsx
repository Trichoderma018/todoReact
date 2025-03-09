import React from 'react'
import '../styles/Register.css'

function Registerr() {
  return (
    <div>
      <div className='div-register'>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Correo</label>
        <input type="text" />
        <label htmlFor="">Contraseña</label>
        <input type="password" />
        <button>Registrarse</button>
      </div>
    </div>
  )
}

export default Registerr