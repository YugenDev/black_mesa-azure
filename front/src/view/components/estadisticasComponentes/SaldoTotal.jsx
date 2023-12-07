import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import "./SaldoTotal.css";

function sumarValoresPorMes(datos) {
  // Filtrar solo los elementos del año 2023
  const datos2023 = datos.filter(
    (item) => new Date(item.fecha).getFullYear() === 2023
  );

  // Inicializar un objeto para almacenar las sumas por mes
  const sumasPorMes = {
    ene: 0,
    feb: 0,
    mar: 0,
    abr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    ago: 0,
    sept: 0,
    oct: 0,
    nov: 0,
    dic: 0,
  };

  // Recorrer los datos filtrados y sumar los valores por mes
  datos2023.forEach((item) => {
    const mes = new Date(item.fecha).toLocaleString("es-ES", {
      month: "short",
    });
    sumasPorMes[mes] = (sumasPorMes[mes] || 0) + item.valor;
  });

  // Convertir el objeto de sumas por mes a un array de objetos
  const resultado = Object.entries(sumasPorMes).map(([mes, total]) => ({
    mes,
    total,
  }));

  return resultado;
}

const SaldoTotal = ({ gastosEntrada, gastosSalida, cuenta }) => {
  const [saldoTotalPorMes, setSaldoTotalPorMes] = useState([]);

  useEffect(() => {
    function calcularSaldoPorMes(gastosEntrada, gastosSalida, saldoActual) {
      // Inicializar un array para almacenar el saldo por mes con todos los meses del año en español
      const saldoPorMes = [
        { mes: "ene", balance: 0 },
        { mes: "feb", balance: 0 },
        { mes: "mar", balance: 0 },
        { mes: "abr", balance: 0 },
        { mes: "may", balance: 0 },
        { mes: "jun", balance: 0 },
        { mes: "jul", balance: 0 },
        { mes: "ago", balance: 0 },
        { mes: "sept", balance: 0 },
        { mes: "oct", balance: 0 },
        { mes: "nov", balance: 0 },
        { mes: "dic", balance: saldoActual },
      ];

      // Filtrar gastos de este año
      const gastosEntrada2023 = gastosEntrada.filter(
        (item) => new Date(item.fecha).getFullYear() === 2023
      );
      const gastosSalida2023 = gastosSalida.filter(
        (item) => new Date(item.fecha).getFullYear() === 2023
      );

      // Totales de entrada y salida por mes
      const entradasPorMes = sumarValoresPorMes(gastosEntrada2023);
      const salidasPorMes = sumarValoresPorMes(gastosSalida2023);

      // Balance total por mes
      for (let i = saldoPorMes.length - 2; i >= 0; i--) {
        saldoPorMes[i].balance =
          saldoPorMes[i + 1].balance -
          (entradasPorMes[i].total - salidasPorMes[i].total);
      }

      return saldoPorMes;
    }

    cuenta &&
      gastosSalida &&
      gastosEntrada &&
      setSaldoTotalPorMes(
        calcularSaldoPorMes(
          gastosEntrada,
          gastosSalida,
          cuenta.bolsillos[0].deposito
        )
      );
  }, [gastosEntrada, gastosSalida, cuenta]);

  return (
    <article className="saldoTotal-container">
      <Line
        data={{
          labels: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
          ],
          datasets: [
            {
              label: "Saldo total",
              data: saldoTotalPorMes?.map((data) => data.balance),
              borderColor: "gold",
              fill: true,
              backgroundColor: (context) => {
                const bgColor = [
                  "rgba(255, 217, 0, 0.7)",
                  "rgba(255, 217, 0, 0.5)",
                  "rgba(255, 217, 0, 0.0)",
                ];

                if (!context.chart.chartArea) {
                  return;
                }
                const {
                  ctx,
                  data,
                  chartArea: { top, bottom },
                } = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0, bgColor[0]);
                gradientBg.addColorStop(0.5, bgColor[1]);
                gradientBg.addColorStop(1, bgColor[2]);
                return gradientBg;
              },
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0.4,
            },
          },
          plugins: {
            title: {
              text: "Salario por mes en el 2023",
            },
          },
        }}
      />
    </article>
  );
};

export default SaldoTotal;
