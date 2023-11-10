import Historial from "../components/historial";
import Bolsillos from "../components/Bolsillos";
import Gastos from "../components/Gastos";
import { useState } from "react";

var numeroCuenta = 12345678;
var saldoLibre = 1000;
var isShowed = true;

let option = {
  Historial: <Historial />,
  Bolsillos: <Bolsillos />,
  Gastos: <Gastos />,
};


function ConsultarSaldo() {

  const [optionSelected, setOptionSelected] = useState();

  const optionHandler = (e) => {
    e.preventDefault();
    setOptionSelected(e.target.textContent)
  }  


  return (
    <section className="consultar-saldo-section">
      <div className="cuenta-card">
        <p>Cuenta de ahorro</p>
        <p>{`N° ${numeroCuenta}`}</p>
        <p>saldo libre</p>
        <p>{`$ ${saldoLibre}`}</p>
      </div>
      <div className="consultar-saldo-options">
        <h5 onClick={optionHandler}>Bolsillos</h5>
        <h5 onClick={optionHandler}>Historial</h5>
        <h5 onClick={optionHandler}>Gastos</h5>
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
