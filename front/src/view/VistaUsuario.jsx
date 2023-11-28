import React from 'react'
import ConsultarSaldo from "./sections/ConsultarSaldo";
import Transferir from "./sections/Transferir";
import "./VistaUsuario.css"

function VistaUsuario ({currentUser}) {
  return (
    <main>
        <ConsultarSaldo currentUser={currentUser} />
        <Transferir currentUser={currentUser} />
    </main>
  )
}

export default VistaUsuario