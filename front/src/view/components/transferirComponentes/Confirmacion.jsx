import { useEffect, useState } from "react";
import "./Confirmacion.css";
import axios from "axios";
import { format } from "date-fns";

function Confirmacion({
  setStep,
  setOptionSelected,
  idCuentaOrigen,
  valorTransferencia,
  gastoTransferencia,
  nombreCuentaTransferencia,
  numeroCuentaTransferencia,
  setActualizar
}) {
  const [cuentaOrigen, setCuentaOrigen] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (
      !cuentaOrigen?.numeroCuenta ||
      !valorTransferencia ||
      !nombreCuentaTransferencia ||
      !numeroCuentaTransferencia
    ) {
      setIsCorrect(false);
    } else {
      setIsCorrect(true);
    }
  }, [cuentaOrigen]);

  useEffect(() => {
    const traerCuenta = async () => {
      let responseCuenta = await axios.get(
        `http://localhost:3000/cuentas?id=${idCuentaOrigen}`
      );
      setCuentaOrigen(responseCuenta.data[0]);
    };
    traerCuenta();
  }, []);

  const handleCancel = () => {
    setOptionSelected("Cuenta");
    setStep(1);
  };
  const handleConfirm = async () => {

    // Pido todos los datos que necesito
    let responseCuentaDestino = await axios.get(
      `http://localhost:3000/cuentas?numeroCuenta=${numeroCuentaTransferencia}`
    );
    let cuentaDestino = responseCuentaDestino.data[0];
    let gastos = await axios.get(`http://localhost:3000/gastos?_limit=0`);

    // Creo nuevo objeto
    let nuevoGasto = {
      id: Number(gastos.headers["x-total-count"] + 1),
      categoria: gastoTransferencia,
      valor: Number(valorTransferencia),
      fecha: format(new Date(), "yyyy-MM-dd"),
      cuentaDestino: cuentaDestino.id,
      cuentaOrigen: cuentaOrigen?.id,
    };

    // Modifico lo necesario en cuenta destino
    cuentaDestino.gastos.push(nuevoGasto.id);
    let bolsillosLibreModificadoDestino = cuentaDestino.bolsillos.find(
      (b) => b.id === 0
    );
    bolsillosLibreModificadoDestino.deposito =
      Number(bolsillosLibreModificadoDestino.deposito) -
      Number(valorTransferencia);

    // Modifico lo necesario en cuenta origen
    let copiaCuentaOrigen = { ...cuentaOrigen };
    copiaCuentaOrigen.gastos.push(nuevoGasto.id);
    let bolsillosLibreModificadoOrigen = copiaCuentaOrigen.bolsillos.find(
      (b) => b.id === 0
    );
    bolsillosLibreModificadoOrigen.deposito -= valorTransferencia;

    // Envío peticiones
    let responsePostGasto = await axios.post('http://localhost:3000/gastos', nuevoGasto);
    let responsePutOrigen = await axios.put(
        `http://localhost:3000/cuentas/${copiaCuentaOrigen.id}`,
        copiaCuentaOrigen
    )
    let responsePutDestino = await axios.put(
        `http://localhost:3000/cuentas/${cuentaDestino.id}`,
        cuentaDestino
    )
    
    //actualizo información
    setActualizar((prev)=>prev+1)

    //redirecciono a sgte sección
    setOptionSelected("Comprobante");
    setStep(5);
  };
  return (
    <article className="contenedor-confirmacion">
      <div className="dato">
        <h4>Cuenta de origen</h4>
        <p>{cuentaOrigen?.numeroCuenta}</p>
      </div>
      <div className="dato">
        <h4>Costo del envío</h4>
        <p>0,00</p>
      </div>
      <div className="dato">
        <h4>Gasto</h4>
        <p>{gastoTransferencia}</p>
      </div>
      <div className="dato">
        <h4>Valor a enviar</h4>
        <p>${Number(valorTransferencia).toLocaleString("es-CO")}</p>
      </div>
      <div className="dato">
        <h4>Nombre del usuario que recibe</h4>
        <p>{nombreCuentaTransferencia}</p>
      </div>
      <div className="dato">
        <h4>N° cuenta de destino</h4>
        <p>{numeroCuentaTransferencia}</p>
      </div>
      <div className="botones-confirmar">
        <button onClick={handleCancel}>Cancelar</button>
        <button onClick={handleConfirm} disabled={!isCorrect}>
          Confirmar
        </button>
      </div>
    </article>
  );
}

export default Confirmacion;
