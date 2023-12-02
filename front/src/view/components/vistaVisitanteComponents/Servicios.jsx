import "./Servicios.css";
import { useState } from "react";
import billetera from "./imgsVistaVisitante/billetera.png";
import tarjetas from "./imgsVistaVisitante/tarjetas-de-credito.png";
import estadisticas from "./imgsVistaVisitante/estadisticas.png";
import chatbot from "./imgsVistaVisitante/chat-bot-logo.png";
import RegistroBancoFormulario from "../vistaVisitanteComponents/Registro"
import LoginRegistro from "./LoginRegistro";
import Modal from "../../sections/Modal";

function Servicios({ isLogged, setIsLogged, currentUser, setCurrentUser }) {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  return (
    <section className="contenedor-general-servicios">
      <article className="contenedor-titulo">
        <h2>Nuestros servicios</h2>
      </article>
      <article className="contenedor-servicios">
        <div className="servicio">
          <img src={billetera} alt="billetera" />
          <h3>Cuenta de ahorros</h3>
          <p>Descubre el poder del ahorro, con nuestra nueva tecnologia encontraras la fórmula perfecta para hacer crecer tus fondos de manera eficiente e inteligente.</p>
          <button onClick={openModal}>Ir</button>
        </div>

        <div className="servicio">
          <img src={tarjetas} alt="billetera" />
          <h3>Tarjetas de crédito</h3>
          <p>Tu boleto para la libertad financiera es nuestra tarjeta de crédito. Gastos controlados, beneficios ilimitados. Haz realidad tus sueños un gasto a la vez.</p>
          <button onClick={openModal}>Ir</button>
        </div>
        
        <div className="servicio">
          <img src={estadisticas} alt="billetera" />
          <h3>Estadísticas de movimientos</h3>
          <p>Conoce tu progreso financiero con nuestras estadísticas de movimientos. Toma el control, toma decisiones informadas y haz que cada movimiento cuente.</p>
          <button onClick={openModal}>Ir</button>
        </div>

        <div className="servicio">
          <img src={chatbot} alt="billetera" />
          <h3>Chatbot</h3>
          <p>Optimiza tu experiencia financiera con nuestro chatbot de soporte. Obtén respuestas instantáneas a tus preguntas, asesoramiento personalizado y una guía amigable en cada paso.</p>
          <button onClick={openModal}>Ir</button>
        </div>

        {modalOpen&&(
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <LoginRegistro 
          setIsLogged={setIsLogged}
          onClose={closeModal}/>
        </Modal>
      )}
      
      </article>
    </section>
  );
}

export default Servicios;
