import React from 'react'
import '../styles/Loginn.css'

function Loginn() {
  return (
    <div>
        <div className='login'>
            <h4>Login</h4>
            <label htmlFor="">Nombre</label>
            <input type="text" />
            <label htmlFor="">Correo</label>
            <input type="text" />
        </div>
    </div>
  )
}

export default Loginn