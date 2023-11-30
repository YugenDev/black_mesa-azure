import React, { useState } from 'react';
import "./Registro.css"
import imagenRegistro from "../../../assets/images/robot-registro.png"

const RegistroBancoFormulario = () => {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [saldo, setSaldo] = useState("")
  const [contrasena, setContrasena] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor

    // Limpia los campos después del envío
    setNombre('');
    setApellido('');
    setCorreo('');
    setContrasena('');
    setSaldo(0);
  };

  return (
    <section className='contenedor-registro'>
      

      <form onSubmit={handleSubmit} className='contenedor-form'>
        <h3>Registrarme</h3>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombres' />
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder='Apellidos'/>
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder='Email'/>
          <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder='Contraseña'/>
          <input type="number" value={saldo} onChange={(e) => setSaldo(e.target.value)} placeholder='Saldo Inicial'/>
          <div className="botones">
          <button type="submit" className='boton-registrarse'>Registrarse</button>
          <button type="submit" className='boton-google'>Registrarse con Google</button>
          </div>
         
      </form>

      <div className="contenedor-img">
        <img src={imagenRegistro} alt="robot-con-celular" />
      </div>
    </section>
  );
};

export default RegistroBancoFormulario;



