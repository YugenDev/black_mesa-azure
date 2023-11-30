import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";

const Registro = () => {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [contrasena, setContrasena] = useState("");

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      nombre,
      apellido,
      correo,
      contrasena,
      saldo,
      bolsillos: [],
      gastos: [],
      historial: []
    };

    // el id lo genera firebase
    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...newUser
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Limpia los campos después del envío
    setNombre("");
    setApellido("");
    setCorreo("");
    setContrasena("");
    setSaldo(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        Apellido:
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
      </label>
      <br />
      <label>
        Saldo inicial:
        <input
          type="number" 
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Registro;

