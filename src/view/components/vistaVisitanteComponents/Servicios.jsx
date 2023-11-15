import "./Servicios.css";
import billetera from "./imgsVistaVisitante/billetera.png";
import tarjetas from "./imgsVistaVisitante/tarjetas-de-credito.png"
import estadisticas from "./imgsVistaVisitante/estadisticas.png"
function Servicios() {
  return (
    <section className="contenedor-general-servicios">
      <article className="contenedor-titulo">
        <h2>Nuestros Servicios</h2>
      </article>
      <article className="contenedor-servicios">

        <div className="servicio">
          <img src={billetera} alt="billetera" />
          <h3>Cuenta de ahorros</h3>
          <button>ver</button>
        </div>

        <div className="servicio">
          <img src={tarjetas} alt="billetera" />
          <h3>Tarjetas de credito</h3>
          <button>ver</button>
        </div>

        <div className="servicio">
          <img src={estadisticas} alt="billetera" />
          <h3>Estadisticas de movimientos</h3>
          <button>ver</button>
        </div>

      </article>
    </section>
  );
}

export default Servicios;
