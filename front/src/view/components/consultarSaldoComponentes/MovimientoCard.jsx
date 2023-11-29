import axios from "axios";
import { useEffect, useState } from "react";
import "./MovimientoCard.css";

function MovimientoCard({ gastoId, numeroCuentaActual }) {
  const [gasto, setGasto] = useState();

  const [tipoMovimiento, setTipoMovimiento] = useState();
  const [entraDinero, setEntraDinero] = useState();
  //   const [cuentaTransferencia, setCuentaTransferencia] = useState(undefined);

  useEffect(() => {
    const traerGasto = async () => {
      let response = await axios.get(
        `http://localhost:3000/gastos?id=${gastoId}`
      )
      setGasto(response?.data[0]);
    };
    traerGasto();
  }, []);

    useEffect(() => {
      const traerCuenta = async () => {
        if (gasto?.cuentaOrigen == numeroCuentaActual) {
          if (gasto?.cuentaDestino == numeroCuentaActual) {
            setTipoMovimiento("Deposito");
            setEntraDinero(true);
          } else {
            // let responseCuenta = await axios.get(
            //   `http://localhost:3000/cuentas?id=${gasto?.cuentaDestino}`
            // );
            // setCuentaTransferencia(responseCuenta?.data[0]?.numeroCuenta);
            setTipoMovimiento("Transferencia");
            setEntraDinero(false);
          }
        } else {
        //   let responseCuenta = await axios.get(
        //     `http://localhost:3000/cuentas?id=${gasto?.cuentaOrigen}`
        //   );
        //   setCuentaTransferencia(responseCuenta?.data[0]?.numeroCuenta);
          setTipoMovimiento("Transferencia");
          setEntraDinero(true);
        }
      };
      traerCuenta();
    }, [gasto]);

  return (
    <article className="card-movimiento-container">
      <div className="tipo-mov-div">
        <h4>{tipoMovimiento}</h4>
        {tipoMovimiento == "Transferencia" ? (
          !entraDinero ? (
            <p>{"Hacia: N° " + gasto?.cuentaDestino + " id: " + gasto?.id}</p>
          ) : (
            <p>{"Desde: N° " + gasto?.cuentaOrigen + " id: " + gasto?.id}</p>
          )
        ) : (
          <></>
        )}
      </div>
      <p className="fecha-mov">{gasto?.fecha}</p>
      <div className="valor-div">
        <p className={entraDinero ? "entra" : "sale"}>{"$" + gasto?.valor.toLocaleString('es-CO')}</p>
        <p>{gasto?.categoria}</p>
      </div>
    </article>
  );
}

export default MovimientoCard;
