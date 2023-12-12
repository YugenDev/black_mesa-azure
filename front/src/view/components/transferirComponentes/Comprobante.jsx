import { useEffect, useState } from "react";
import "./Comprobante.css";
import { format } from "date-fns";
import axios from "axios";

function Comprobante({
  setStep,
  setOptionSelected,
  idCuentaOrigen,
  valorTransferencia,
  numeroCuentaTransferencia,
  setNumeroCuentaTransferencia,
  setValorTransferencia,
  setGastoTransferencia,
  setNombreCuentaTransferencia,
}) {
  const [cuentaOrigen, setCuentaOrigen] = useState(null);

  useEffect(() => {
    const traerCuenta = async () => {
      let responseCuenta = await axios.get(
        `http://localhost:3000/cuentas?id=${idCuentaOrigen}`
      );
      setCuentaOrigen(responseCuenta.data[0]);
    };
    traerCuenta();
  }, []);

  const finalizar = () => {
    setNumeroCuentaTransferencia(null);
    setValorTransferencia(null);
    setGastoTransferencia(null);
    setNombreCuentaTransferencia(null);
    setOptionSelected("Cuenta");
    setStep(1);
  };

  return (
    <article className="contenedor-comprobante">
      <div className="dato-comprobante">
        <h3>Transferencia exitosa</h3>
      </div>
      <div className="dato-comprobante">
        <h4>Costo de la transferencia</h4>
        <p>$ 0</p>
      </div>
      <div className="dato-comprobante">
        <h4>Cuenta de origen</h4>
        <p>{cuentaOrigen?.numeroCuenta}</p>
      </div>
      <div className="dato-comprobante">
        <h4>N° cuenta de destino</h4>
        <p>{numeroCuentaTransferencia}</p>
      </div>
      <div className="dato-comprobante">
        <h4>Valor transferido</h4>
        <p>${Number(valorTransferencia).toLocaleString("es-CO")}</p>
      </div>
      <div className="dato-comprobante">
        <h4>N° comprobante</h4>
        <p>{Math.round(Math.random() * 10000000)}</p>
      </div>
      <div className="dato-comprobante">
        <h4>Fecha</h4>
        <p>{format(new Date(), "yyyy-MM-dd")}</p>
      </div>
      <button onClick={finalizar}>Finalizar</button>
    </article>
  );
}

export default Comprobante;
