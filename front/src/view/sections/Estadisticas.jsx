import React, { useEffect, useState } from "react";
import "./Estadisticas.css";
import videoBG from "../../assets/images/videoBg.mp4"
import InOutChart from "../components/estadisticasComponentes/inOutChart";
import axios from "axios";
import SaldoTotal from "../components/estadisticasComponentes/saldoTotal";
import GastosCategorias from "../components/estadisticasComponentes/GastosCategorias";
import InOutCategorias from "../components/estadisticasComponentes/InOutCategorias";
import BolsillosChart from "../components/estadisticasComponentes/BolsillosChart";
import BalanceMensual from "./BalanceMensual";

const Estadisticas = ({ actualizar, currentUser }) => {
  const [gastosEntrada, setGastosEntrada] = useState(null);
  const [gastosSalida, setGastosSalida] = useState(null);
  const [cuenta, setCuenta] = useState(null);
  const [año, setAño] = useState(2023);

  useEffect(() => {
    const traerGastosEntrada = async () => {
      let response = await axios.get(
        `http://localhost:3000/gastos?cuentaDestino=${currentUser.id}`
      );
      setGastosEntrada(response?.data);
    };
    const traerGastosSalida = async () => {
      let response = await axios.get(
        `http://localhost:3000/gastos?cuentaOrigen=${currentUser.id}`
      );
      setGastosSalida(response?.data);
    };
    const traerCuenta = async () => {
      let response = await axios.get(
        `http://localhost:3000/cuentas?idUsuario=${currentUser.id}`
      );
      setCuenta(response?.data[0]);
    };

    traerGastosEntrada();
    traerGastosSalida();
    traerCuenta();
  }, [actualizar]);

  

  return (
    <section className="estadisticas-container">
      <div className="titulo-estadisticas">
        <h2>Estadísticas</h2>
        <div className="picker-anio">
          <p>Año</p>
          <div className="picker-div">
            <span onClick={()=>setAño(prev => prev-1)}>{"<"}</span>
            <h4>{año}</h4>
            <span onClick={()=>año<2023&&setAño(prev => prev+1)}>{">"}</span>
          </div>
        </div>
      </div>
      <div className="saldo-graficas">
        <InOutChart 
        año={año}
        gastosEntrada={gastosEntrada} 
        gastosSalida={gastosSalida} />
        <SaldoTotal
          gastosEntrada={gastosEntrada}
          gastosSalida={gastosSalida}
          cuenta={cuenta}
          año={año}
        />
      </div>
      <div className="saldo-graficas">

        <GastosCategorias 
        gastosEntrada={gastosEntrada}
        gastosSalida={gastosSalida}
        />
        <InOutCategorias
        gastosEntrada={gastosEntrada}
        gastosSalida={gastosSalida}
        año={año}
        />
        <BolsillosChart 
          cuenta={cuenta}
        />
        <BalanceMensual 
        gastosEntrada={gastosEntrada}
        gastosSalida={gastosSalida}
        año={año}
        />
      </div>
      <video src={videoBG} autoPlay loop muted />
    </section>
  );
};

export default Estadisticas;
