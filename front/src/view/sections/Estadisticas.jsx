import React, { useEffect, useState } from "react";
import "./Estadisticas.css";
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
      <h2>Estadísticas</h2>
      <div className="saldo-graficas">
        <InOutChart gastosEntrada={gastosEntrada} gastosSalida={gastosSalida} />
        <SaldoTotal
          gastosEntrada={gastosEntrada}
          gastosSalida={gastosSalida}
          cuenta={cuenta}
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
        />
        <BolsillosChart 
          cuenta={cuenta}
        />
        <BalanceMensual 
        gastosEntrada={gastosEntrada}
        gastosSalida={gastosSalida}
        />
      </div>
    </section>
  );
};

export default Estadisticas;
