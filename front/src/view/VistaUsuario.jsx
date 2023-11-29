import React from 'react'
import ConsultarSaldo from "./sections/ConsultarSaldo";
import Transferir from "./sections/Transferir";
import Chatbot from './sections/Chatbot';
import "./VistaUsuario.css"

function VistaUsuario ({currentUser}) {
  return (
    <main>
        <Chatbot currentUser={currentUser} />
        <ConsultarSaldo currentUser={currentUser} />
        <Transferir currentUser={currentUser} />
    </main>
  )
}

export default VistaUsuario