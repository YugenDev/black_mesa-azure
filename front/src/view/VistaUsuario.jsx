import React, { useState } from "react";
import "./VistaUsuario.css";
import ConsultarSaldo from "./sections/ConsultarSaldo";
import Transferir from "./sections/Transferir";
import Chatbot from "./sections/Chatbot";
import Tarjetas from "./sections/Tarjetas";
import Estadisticas from "./sections/Estadisticas";
import Mistarjetas from "./sections/Mistarjetas";


function VistaUsuario({
  currentUser,
  setActualizar,
  actualizar,
  setSesionOpenAI,
  sesionOpenAI,
  mensajes,
  setMensajes,

})
{

const[mostrarMisTarjetas, setMostrarMisTarjetas]=useState(false)

const handleConfirmarClick = () => {
  setMostrarMisTarjetas(true);
};


  return (
    <main>
      
      <Chatbot
        sesionOpenAI={sesionOpenAI}
        setSesionOpenAI={setSesionOpenAI}
        currentUser={currentUser}
      />
      <ConsultarSaldo
        mensajes={mensajes}
        setMensajes={setMensajes}
        sesionOpenAI={sesionOpenAI}
        setSesionOpenAI={setSesionOpenAI}
        currentUser={currentUser}
        actualizar={actualizar}
        setActualizar={setActualizar}
      />
      <Transferir currentUser={currentUser} setActualizar={setActualizar} />
      <Tarjetas currentUser={currentUser}  confirmarTarjeta={handleConfirmarClick}/>
      {mostrarMisTarjetas&&(<Mistarjetas/>)}
      <Mistarjetas/>
      <Estadisticas 
        actualizar={actualizar}
        currentUser={currentUser}
      />      
    </main>
  );
}

export default VistaUsuario;
