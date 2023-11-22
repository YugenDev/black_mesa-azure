import Header from "./view/sections/Header"
import ConsultarSaldo from "./view/sections/ConsultarSaldo";
import Transferir from "./view/sections/Transferir";
import Modal from "./view/sections/Modal";
import { useState } from "react";
import VistaVisitante from "./view/sections/VistaVisitante";
import { FormFirebase } from "./view/sections/FormFirebase";
import { AuthProvider } from "./context/authContext";

var isLogged = true;

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Header isLogged={isLogged}></Header>
      <ConsultarSaldo></ConsultarSaldo>
      <Transferir></Transferir>
      <VistaVisitante />
      
      {/* <button onClick={openModal}>Abrir Modal</button> */}

      {/* <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>ventana modal aqui</h2>
        <input type="text" placeholder="inputs o algo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fuga!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, facere.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, pariatur?</p>
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal> */
      }

      <AuthProvider>
        <h1>FORMULARIO</h1>
       <FormFirebase/>
      </AuthProvider>

    </>
  )
}

export default App
