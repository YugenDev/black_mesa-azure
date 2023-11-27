import logotipo from "../../../assets/images/mesias-body.png";
import coin from "../../../assets/images/coin.png";
// import model from "../../../assets/3d-model/mesh.obj"
import "./Portada.css";

function Portada() {
  return (
    <section className="portada">
      <div className="contenedor-titulos">
        <div>
          <h1>
            LA TECNOLOG<strong>IA</strong>
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
        <button>Registrarse</button>
      </div>

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
