import React, { useEffect, useState } from "react";
import "./Estadisticas.css";
import InOutChart from "../components/estadisticasComponentes/inOutChart";
import axios from "axios";
import SaldoTotal from "../components/estadisticasComponentes/saldoTotal";

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
      <InOutChart gastosEntrada={gastosEntrada} gastosSalida={gastosSalida} />
      <SaldoTotal gastosEntrada={gastosEntrada} gastosSalida={gastosSalida} cuenta={cuenta} />
    </section>
  );
};

export default Estadisticas;
