import Historial from "../components/consultarSaldoComponentes/Historial";
import Bolsillos from "../components/consultarSaldoComponentes/Bolsillos";
import Gastos from "../components/consultarSaldoComponentes/Gastos";
import "./ConsultarSaldo.css";
import { useState } from "react";

var numeroCuenta = 12345678;
var saldoLibre = 1000;
var saldoTotal = 15000;

let option = {
  Historial: <Historial />,
  Bolsillos: <Bolsillos />,
  Gastos: <Gastos />,
};

function ConsultarSaldo() {
  const [optionSelected, setOptionSelected] = useState();
  const [isShowed, setIsShowed] = useState(false);

  const optionHandler = (e) => {
    // e.preventDefault();
    setOptionSelected(e.target.textContent);
    setIsShowed(true);
  };

  const closeHandler = () =>{
    setIsShowed(false);
  }

  return (
    <section className="consultar-saldo-section">
      <div className="cuenta-card">
        <p>Cuenta de ahorro</p>
        <p>{`N° ${numeroCuenta}`}</p>
        <p>Saldo libre</p>
        <p>{`$ ${saldoLibre}`}</p>
        <p>Tu cuenta</p>
        <p>Total: ${saldoTotal}</p>
      </div>
      <div className="consultar-saldo-options">
        <h5 onClick={optionHandler}>Bolsillos</h5>
        <h5 onClick={optionHandler}>Historial</h5>
        <h5 onClick={optionHandler}>Gastos</h5>
      </div>
      {isShowed ? (
        <div className="option-show-container">
          <span onClick={closeHandler} className="cerrar">X</span>
          {option[optionSelected]}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default ConsultarSaldo;
