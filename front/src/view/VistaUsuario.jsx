import React from "react";
import "./VistaUsuario.css";
import ConsultarSaldo from "./sections/ConsultarSaldo";
import Transferir from "./sections/Transferir";
import Chatbot from "./sections/Chatbot";
import Tarjetas from "./sections/Tarjetas";
import Estadisticas from "./sections/Estadisticas";

function VistaUsuario({
  currentUser,
  setActualizar,
  actualizar,
  setSesionOpenAI,
  sesionOpenAI,
  mensajes,
  setMensajes,
}) {
  return (
    <main>
      <Estadisticas 
        actualizar={actualizar}
        currentUser={currentUser}
      />
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
      <Tarjetas />
    </main>
  );
}

export default VistaUsuario;
