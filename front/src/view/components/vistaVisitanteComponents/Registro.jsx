import React, { useState } from 'react';

const RegistroBancoFormulario = () => {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [saldo, setSaldo] = useState(0)
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
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <br />
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </label>
      <br />
      <label>
        Saldo inicial:
        <input type="numeber" value={saldo} onChange={(e) => setSaldo(e.target.value)} />
      </label>
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegistroBancoFormulario;



