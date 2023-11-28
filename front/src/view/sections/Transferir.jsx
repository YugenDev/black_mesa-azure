import NumeroCuenta from "../components/transferirComponentes/NumeroCuenta";
import ValorTransferir from "../components/transferirComponentes/ValorTransferir";
import TipoDeGasto from "../components/transferirComponentes/TipoDeGasto";
import Confirmacion from "../components/transferirComponentes/Confrimacion";
import Comprobante from "../components/transferirComponentes/Comprobante";
import { useState } from "react";
import "./Transferir.css";

let opciones = {
  Cuenta: <NumeroCuenta />,
  valor: <ValorTransferir />,
  tipoGasto: <TipoDeGasto />,
  Confirmacion: <Confirmacion />,
  Comprobante: <Comprobante />,
};

function Transferir() {
  const [optionSelected, setOptionSelected] = useState("Cuenta");

  const optionHandler = (e) => {
    setOptionSelected(e.target.textContent);
  };

  return (
    <section className="transferir-saldo-section">
      <h2 className="titulo">Transferencia</h2>
      <div className="transferir-opciones">
        <div className="flecha">
          <span></span>
          <h4 onClick={optionHandler}>Cuenta</h4>
          <span></span>
        </div>
        <div className="flecha">
          <span></span>
          <h4 onClick={optionHandler}>valor</h4>
          <span></span>
        </div>
        <div className="flecha">
          <span></span>
          <h4 onClick={optionHandler}>tipoGasto</h4>
          <span></span>
        </div>
        <div className="flecha">
          <span></span>
          <h4 onClick={optionHandler}>Confirmacion</h4>
          <span></span>
        </div>
        <div className="flecha">
          <span></span>
          <h4 onClick={optionHandler}>Comprobante</h4>
          <span></span>
        </div>
      </div>

      <div className="option-show-container-transferir">
        {opciones[optionSelected]}
      </div>
    </section>
  );
}

export default Transferir;
