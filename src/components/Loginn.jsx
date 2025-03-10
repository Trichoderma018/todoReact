import React from 'react'
import '../styles/Loginn.css'

function Loginn() {
  const [nombreUsuario,SetNombreUsuario]=useState()
  const [contraUsuario,SetcontraUsuario]=useState()
  const [usuarios,SetUsuarios]=useState()


  const navigate = useNavigate()

  useEffect(() => {
  
    async function fetchDataUsers() {

      const datos = await llamados.GetUsers()
      
      SetUsuarios(datos)
    };
    fetchDataUsers();
  }, []); 

  function nombre(evento) {
    SetNombreUsuario(evento.target.value)
  }

  function contrasena(evento) {
    SetcontraUsuario(evento.target.value)
  }

  function validar() {
    console.log(nombreUsuario,contraUsuario);
    console.log(usuarios);

    const encontrado = usuarios.filter(usuario => usuario.nombre===nombreUsuario && usuario.contrasena=== contraUsuario)
     
    if (encontrado.length === 0) {
      console.log("Usuario o contrasena incorrectos"); 
    }else{
      navigate('/Home')
    }
  }
  return (
    <div>
      <div className='login'>
      <label htmlFor="">Nombre</label>
      <input value={nombreUsuario} onChange={nombre} type="text" />
      <label htmlFor="">Contraseña</label>
      <input value={contraUsuario} onChange={contrasena} type="text" />
      <button onClick={validar}>Iniciar</button>
      <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </div>
    </div>
  )
}

export default Loginn