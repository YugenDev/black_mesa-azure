import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../../../firebase/firebase.config";

const generarNumeroCuentaAleatorio = () => {
  const longitudCuenta = 10;
  const numerosPermitidos = "0123456789";
  let numeroCuenta = "";

  for (let i = 0; i < longitudCuenta; i++) {
    const indice = Math.floor(Math.random() * numerosPermitidos.length);
    numeroCuenta += numerosPermitidos.charAt(indice);
  }

  return numeroCuenta;
};

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

    const nuevoNumeroCuenta = generarNumeroCuentaAleatorio();

    try {
      // Registrar usuario con Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        correo,
        contrasena
      );

      // Obtener el ID del usuario recién registrado
      const userId = userCredential.user.uid;

      // Crear un nuevo usuario para almacenar en Firestore
      const newUser = {
        userId,
        nombre,
        apellido,
        correo,
        saldo,
        numeroCuenta: nuevoNumeroCuenta,
        bolsillos: [],
        historial: [],
      };

      // Almacenar información adicional en Firestore
      const docRef = await addDoc(collection(db, "users"), newUser);

      console.log("Document written with ID: ", docRef.id);

      // Limpia los campos después del envío
      setNombre("");
      setApellido("");
      setCorreo("");
      setContrasena("");
      setSaldo(0);
    } catch (error) {
      console.error("Error during registration: ", error);
    }
  };

  // Manejar el inicio de sesión con Google
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // Crear un nuevo usuario para almacenar en Firestore
      const newUser = {
        userId: user.uid,
        nombre: user.displayName || "", // Puedes acceder al nombre si está disponible
        correo: user.email || "", // Puedes acceder al correo electrónico si está disponible
        saldo,
        bolsillos: [],
        historial: [],
      };

      // Almacenar información adicional en Firestore
      const docRef = await addDoc(collection(db, "users"), newUser);

      console.log("Document written with ID: ", docRef.id);

      // Puedes realizar acciones adicionales después del inicio de sesión con Google si es necesario
      console.log("Google sign-in successful:", user);
    } catch (error) {
      console.error("Error during Google sign-in: ", error);
    }
  };

  return (
    <div>
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
        <button type="submit">Registrarse con Correo</button>
      </form>

      <div>
        <p>O inicia sesión con:</p>
        <button onClick={handleGoogleSignIn}>Google</button>
      </div>
    </div>
  );
};

export default Registro;
