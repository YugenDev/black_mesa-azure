import { useEffect, useState } from "react";
import CuentaMiniCard from "./CuentaMiniCard";
import "./NumeroCuenta.css";
import axios from "axios";

function NumeroCuenta({setStep,setOptionSelected,setNumeroCuentaTransferencia, setNombreCuentaTransferencia}) {
  let cuentas = [1, 2, 3, 4];

  const [numeroCuenta, setNumeroCuenta] = useState();
  const [nombre, setNombre] = useState("Nombre");
  const [isCorrect,setIsCorrect] = useState(false);

  const handleInput = (e) => {
    setNumeroCuenta(e.target.value);
  };

  const handleClick = ()=>{
    setNumeroCuentaTransferencia(numeroCuenta);
    setNombreCuentaTransferencia(nombre);
    setOptionSelected("Valor")
    setStep(2)
  }

  useEffect(() => {
    const traerCuenta = async () => {
      let responseCuenta = await axios.get(
        `http://localhost:3000/cuentas?numeroCuenta=${numeroCuenta}`
        );
        // console.log(responseCuenta);
      if (responseCuenta.data.length>0) {
        let responseUsuario = await axios.get(
          `http://localhost:3000/usuarios?id=${responseCuenta.data[0].idUsuario}`
          );
        

        setNombre(responseUsuario?.data[0].nombre);
        setIsCorrect(true)
      } else {
        setNombre("La cuenta ingresada no pertenece a nadie");
        setIsCorrect(false)
        setNombreCuentaTransferencia(null);
        setNumeroCuentaTransferencia(null);
      }
    };
    traerCuenta();
  }, [numeroCuenta]);


  return (
    <article className="contenedor-general">
      <div className="contenedor-numero-cuenta">
        <input
          type="number"
          name="numero-cuenta-transferir"
          id="numero-cuenta-transferir"
          placeholder="N° cuenta"
          value={numeroCuenta}
          onChange={handleInput}
        />
        <p>{nombre}</p>
        <button disabled={!isCorrect} className="boton-transferencia" onClick={handleClick}>Siguiente</button>
      </div>
      <div className="contenedor-cuentas-registradas">
        <h5>Cuentas recientes</h5>
        <div className="contenedor-frecuentes">
          {cuentas.map((e) => {
            return <CuentaMiniCard idCuenta={e * 3} setNumeroCuenta={setNumeroCuenta}  key={e} />;
          })}
        </div>
      </div>
      <div className="contenedor-cuentas-registradas">
        <h5>Cuentas frecuentes</h5>
        <div className="contenedor-frecuentes">
          {cuentas.map((e) => {
            return <CuentaMiniCard idCuenta={e} setNumeroCuenta={setNumeroCuenta} key={e} />;
          })}
        </div>
      </div>
    </article>
  );
}

export default NumeroCuenta;
