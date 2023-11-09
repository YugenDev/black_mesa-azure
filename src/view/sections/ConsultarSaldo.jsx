import Historial from "../components/historial";
import Bolsillos from "../components/Bolsillos";
import Gastos from "../components/Gastos";

var numeroCuenta = 12345678;
var saldoLibre = 1000;
var isShowed = true;
var optionSelected = "Gastos";

let option = {
  historial: <Historial />,
  bolsillos: <Bolsillos />,
  Gastos: <Gastos />,
};

function ConsultarSaldo() {
  return (
    <section className="consultar-saldo-section">
      <div className="cuenta-card">
        <p>Cuenta de ahorro</p>
        <p>{`N° ${numeroCuenta}`}</p>
        <p>saldo libre</p>
        <p>{`$ ${saldoLibre}`}</p>
      </div>
      <div className="consultar-saldo-options">
        <h5>Bolsillos</h5>
        <h5>Historial</h5>
        <h5>Gastos</h5>
      </div>
      {isShowed ? <div className="option-show-container">
        {
            option[optionSelected]
        }
      </div> : <></>}
    </section>
  );
}

export default ConsultarSaldo;
