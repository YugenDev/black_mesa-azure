import "./NumeroCuenta.css";
import avatar from "./imgsTransferir/icono-card.png";
function NumeroCuenta() {
  return (
    <article className="contenedor-general">
      <div className="contenedor-numero-cuenta">
        <input
          type="number"
          name="numero-cuenta-transferir"
          id="numero-cuenta-transferir"
          placeholder="N° cuenta"
        />
        <p>Nombre</p>
        <button>Siguiente</button>
      </div>
      <div className="contenedor-cuentas-registradas">
        <h5>Cuentas frecuentes</h5>
        <div className="contenedor-frecuentes">
          <div className="perfil">
            <img src={avatar} alt="logo" />
            <div>
              <h3>Juan Pablo</h3>
              <p>3225108713</p>
            </div>
          </div>
          <div className="perfil">
            <img src={avatar} alt="logo" />
            <div>
              <h3>Andres Felipe</h3>
              <p>3225108713</p>
            </div>
          </div>
          <div className="perfil">
            <img src={avatar} alt="logo" />

            <div>
              <h3>Juan Esteban</h3>
              <p>3225108713</p>
            </div>
          </div>
          <div className="perfil">
            <img src={avatar} alt="logo" />
            <div>
              <h3>otro man</h3>
              <p>3225108713</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default NumeroCuenta;
