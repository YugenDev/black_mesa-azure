import logotipo from "../../../assets/images/logo-bmb.png"
import "./Portada.css"
function Portada() {
  return (
    <section className="portada">

      <article className="contenedor-titulos">
        <h1>Frase Importante</h1>
        <h2>Aqui</h2>
        <h3>Texto sobre la inteligencia artificial</h3>
        <h3>Aqui, para organizar bien bonito</h3>
        <button>Registrarse</button>
      </article>

        <article className="contenedor-logo">
            <img src={logotipo} alt="logo" />
        </article>
      
    </section>
  );
}

export default Portada;
