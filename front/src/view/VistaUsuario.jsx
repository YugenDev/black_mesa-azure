import React from "react";
import ConsultarSaldo from "./sections/ConsultarSaldo";
import Transferir from "./sections/Transferir";
import Chatbot from "./sections/Chatbot";
import "./VistaUsuario.css";
import Tarjetas from "./sections/Tarjetas";

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
