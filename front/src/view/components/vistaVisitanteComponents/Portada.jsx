import logotipo from "../../../assets/images/mesias-body.png";
import coin from "../../../assets/images/coin.png";
// import model from "../../../assets/3d-model/mesh.obj"
import "./Portada.css";
import Modal from "../../sections/Modal";
import { useState } from "react";
import RegistroBancoFormulario from "./Registro";
import LoginRegistro from "./LoginRegistro";


function Portada({ isLogged, setIsLogged, currentUser, setCurrentUser }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const logOut = () => {
    setCurrentUser({});
    setIsLogged(false);
  };

  return (
    <section className="portada">
      <div className="contenedor-titulos">
        <div>
          <h1>
            LA TECNOLOG<strong>íA</strong>
          </h1>
          <h1>DEL FUTURO A TU SERVICIO</h1>
        </div>
        <div>
          <h3>
            Obtén hoy mismo tu <strong>asistente financiero personal</strong>,
            impulsado por inteligencia artificial
          </h3>
          <h3>Siempre disponible, siempre listo para ayudarte.</h3>
        </div>
        <button onClick={openModal}>Regístrate</button>
      </div>

      {modalOpen&&(
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <LoginRegistro 
          setIsLogged={setIsLogged}
          onClose={closeModal}/>
        </Modal>
      )}

      <div className="contenedor-logo">
        <img src={logotipo} alt="logo" className="logo-img"/>
        <img src={coin} alt="coin" className="coin" />
        <img src={coin} alt="coin" className="coin" />
        <img src={coin} alt="coin" className="coin" />
        <img src={coin} alt="coin" className="coin" />
        </div>
    </section>
  );
}

export default Portada;
