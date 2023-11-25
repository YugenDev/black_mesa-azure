import React from 'react'
import ConsultarSaldo from "./sections/ConsultarSaldo";
import Transferir from "./sections/Transferir";

function VistaUsuario ({currentUser}) {
  return (
    <>
        <ConsultarSaldo currentUser={currentUser} />
        <Transferir currentUser={currentUser} />
    </>
  )
}

export default VistaUsuario