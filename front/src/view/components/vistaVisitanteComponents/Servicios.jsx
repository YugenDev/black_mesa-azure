import "./Servicios.css";
import billetera from "./imgsVistaVisitante/billetera.png";
import tarjetas from "./imgsVistaVisitante/tarjetas-de-credito.png";
import estadisticas from "./imgsVistaVisitante/estadisticas.png";
import chatbot from "./imgsVistaVisitante/chat-bot-logo.png";
function Servicios() {
  return (
    <section className="contenedor-general-servicios">
      <article className="contenedor-titulo">
        <h2>Nuestros servicios</h2>
      </article>
      <article className="contenedor-servicios">
        <div className="servicio">
          <img src={billetera} alt="billetera" />
          <h3>Cuenta de ahorros</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum suscipit temporibus.</p>
          <button>Ir</button>
        </div>

        <div className="servicio">
          <img src={tarjetas} alt="billetera" />
          <h3>Tarjetas de credito</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum suscipit temporibus.</p>
          <button>Ir</button>
        </div>

        <div className="servicio">
          <img src={estadisticas} alt="billetera" />
          <h3>Estadisticas de movimientos</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum suscipit temporibus.</p>
          <button>Ir</button>
        </div>

        <div className="servicio">
          <img src={chatbot} alt="billetera" />
          <h3>Chatbot</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum suscipit temporibus.</p>
          <button>Ir</button>
        </div>
      </article>
    </section>
  );
}

export default Servicios;
