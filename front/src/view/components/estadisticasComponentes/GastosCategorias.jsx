import React, { useEffect, useState } from "react";
import "./GastosCategorias.css";
import { Doughnut } from "react-chartjs-2";

const GastosCategorias = ({ gastosEntrada, gastosSalida }) => {
  const [gastosPorCategoria, setGastosPorCategoria] = useState([]);

  useEffect(() => {
    function calcularPorcentajePorCategoria(gastos) {
      // Inicializar un objeto para almacenar los totales por categoría
      const totalesPorCategoria = {};

      // Calcular los totales por categoría
      gastos.forEach((gasto) => {
        const categoria = gasto.categoria;
        totalesPorCategoria[categoria] =
          (totalesPorCategoria[categoria] || 0) + gasto.valor;
      });

      // Calcular el total general
      const totalGeneral = Object.values(totalesPorCategoria).reduce(
        (total, valor) => total + valor,
        0
      );

      // Calcular el porcentaje por categoría
      const porcentajesPorCategoria = Object.entries(totalesPorCategoria).map(
        ([categoria, valor]) => ({
          categoria,
          porcentaje: Math.round((valor / totalGeneral) * 100),
        })
      );

      return porcentajesPorCategoria;
    }

    gastosEntrada &&
      gastosSalida &&
      setGastosPorCategoria(
        calcularPorcentajePorCategoria([...gastosEntrada, ...gastosSalida])
      );
  }, [gastosEntrada, gastosSalida]);


  return (
    <article className="GastosCategorias-container">
      <Doughnut
        data={{
          labels: gastosPorCategoria?.map(item=>item.categoria),
          datasets: [
            {
              label: "Porcentaje",
              data: gastosPorCategoria?.map(item=>item.porcentaje),
              borderColor: "gold",
              fill: true,
              backgroundColor:[
                "rgba(248,248,255,255)",
                "rgba(202,201,205,255)",
                "rgba(155,154,156,255)",
                "rgba(109,106,106,255)",
                "rgba(62,59,57,255)",
                "rgba(16,12,7,255)",
              ],
              hoverBackgroundColor:[
                "rgba(191,122,47,255)",
                "rgba(210,148,62,255)",
                "rgba(232,181,84,255)",
                "rgba(245,202,106,255)",
                "rgba(251,222,125,255)",
                "rgba(255,233,138,255)"
              ],
            //   borderColor: (context) => {
            //     const bgColor = [
            //       "rgba(255, 217, 0, 0.7)",
            //       "rgba(255, 217, 0, 0.5)",
            //       "rgba(255, 217, 0, 0.0)",
            //     ];

            //     if (!context.chart.chartArea) {
            //       return;
            //     }
            //     const {
            //       ctx,
            //       data,
            //       chartArea: { top, bottom },
            //     } = context.chart;
            //     const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            //     gradientBg.addColorStop(0, bgColor[0]);
            //     gradientBg.addColorStop(0.5, bgColor[1]);
            //     gradientBg.addColorStop(1, bgColor[2]);
            //     return gradientBg;
            //   },
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
              text: "Porcentaje movimientos",
            },
            legend:{
                // labels:{
                //     boxWidth: 6
                // },
                display: false
            }
          },
        }}
      />
    </article>
  );
};

export default GastosCategorias;
