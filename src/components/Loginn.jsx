import React from 'react'
import '../styles/Loginn.css'

function Loginn() {
  return (
    <div>
      <div className='login'>
        <h4>Login</h4>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Contraseña</label>
        <input type="password" />
        <button>Iniciar Sesion</button>
      </div>
    </div>
  )
}

export default Loginn