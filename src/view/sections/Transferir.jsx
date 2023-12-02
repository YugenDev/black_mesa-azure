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
    setIsShowed(true);
  };

  const closeHandler = () => {
    setIsShowed(false);
  };

  return (
    <section className="transferir-saldo-section">
      <h2 className="titulo">Transferencias</h2>
      <div className="transferir-opciones">
        <h4 onClick={optionHandler}>Cuenta</h4>
        <h4 onClick={optionHandler}>valor</h4>
        <h4 onClick={optionHandler}>tipoGasto</h4>
        <h4 onClick={optionHandler}>Confirmacion</h4>
        <h4 onClick={optionHandler}>Comprobante</h4>
      </div>

      <div className="option-show-container-transferir">
        {opciones[optionSelected]}
      </div>
    </section>
  );
}

export default Transferir;
