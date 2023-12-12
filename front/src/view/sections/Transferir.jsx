import NumeroCuenta from "../components/transferirComponentes/NumeroCuenta";
import ValorTransferir from "../components/transferirComponentes/ValorTransferir";
import TipoDeGasto from "../components/transferirComponentes/TipoDeGasto";
import Confirmacion from "../components/transferirComponentes/Confirmacion";
import Comprobante from "../components/transferirComponentes/Comprobante";
import { useState } from "react";
import "./Transferir.css";

function Transferir({ currentUser,setActualizar }) {
  const [optionSelected, setOptionSelected] = useState("Cuenta");
  const [step, setStep] = useState(1);

  const [numeroCuentaTransferencia, setNumeroCuentaTransferencia] =
    useState(null);
  const [valorTransferencia, setValorTransferencia] = useState(null);
  const [gastoTransferencia, setGastoTransferencia] = useState(null);

  const [nombreCuentaTransferencia, setNombreCuentaTransferencia] =
    useState(null);

  let opciones = {
    Cuenta: (
      <NumeroCuenta
        setNombreCuentaTransferencia={setNombreCuentaTransferencia}
        setStep={setStep}
        setOptionSelected={setOptionSelected}
        setNumeroCuentaTransferencia={setNumeroCuentaTransferencia}
      />
    ),
    Valor: (
      <ValorTransferir
        currentUser={currentUser}
        setValorTransferencia={setValorTransferencia}
        setStep={setStep}
        setOptionSelected={setOptionSelected}
      />
    ),
    Gasto: (
      <TipoDeGasto
        setGastoTransferencia={setGastoTransferencia}
        setStep={setStep}
        setOptionSelected={setOptionSelected}
      />
    ),
    Confirmacion: (
      <Confirmacion
        gastoTransferencia={gastoTransferencia}
        numeroCuentaTransferencia={numeroCuentaTransferencia}
        nombreCuentaTransferencia={nombreCuentaTransferencia}
        valorTransferencia={valorTransferencia}
        idCuentaOrigen={currentUser.id}
        setStep={setStep}
        setOptionSelected={setOptionSelected}
        setActualizar={setActualizar}
      />
    ),
    Comprobante: (
      <Comprobante 
      setStep={setStep} 
      setOptionSelected={setOptionSelected} 
      idCuentaOrigen={currentUser.id}
      numeroCuentaTransferencia={numeroCuentaTransferencia}
      valorTransferencia={valorTransferencia}
      setNumeroCuentaTransferencia={setNumeroCuentaTransferencia}
      setValorTransferencia={setValorTransferencia}
      setGastoTransferencia={setGastoTransferencia}
      setNombreCuentaTransferencia={setNombreCuentaTransferencia}

      />
    ),
  };
  const optionHandler = (e) => {
    let pasos = {
      Cuenta: 1,
      Valor: 2,
      Gasto: 3,
      Confirmacion: 4,
      Comprobante: 5,
    };
    setOptionSelected(e.target.textContent);
    setStep(pasos[e.target.textContent]);
  };

  return (
    <section className="transferir-saldo-section">
      <h2 className="titulo">Transferencia</h2>
      <div className="transferir-opciones">
        <div className={step >= 1 ? "flecha listo" : "flecha"}>
          <span className={step >= 1 ? "listo" : ""}></span>
          <h4 onClick={optionHandler} className={step >= 1 ? "listo" : ""}>
            Cuenta
          </h4>
          <span className={step >= 1 ? "listo" : ""}></span>
        </div>
        <div className={step >= 2 ? "flecha listo" : "flecha"}>
          <span></span>
          <h4 onClick={optionHandler}>Valor</h4>
          <span></span>
        </div>
        <div className={step >= 3 ? "flecha listo" : "flecha"}>
          <span></span>
          <h4 onClick={optionHandler}>Gasto</h4>
          <span></span>
        </div>
        <div className={step >= 4 ? "flecha listo" : "flecha"}>
          <span></span>
          <h4>Confirmacion</h4>
          <span></span>
        </div>
        <div className={step >= 5 ? "flecha listo" : "flecha"}>
          <span></span>
          <h4>Comprobante</h4>
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
