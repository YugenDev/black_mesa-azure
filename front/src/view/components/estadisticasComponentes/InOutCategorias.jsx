import React, { useEffect, useState } from "react";
import "./InOutCategorias.css";
import { Bar } from "react-chartjs-2";

const InOutCategorias = ({ gastosEntrada, gastosSalida }) => {
  const [entradaBar, setEntradaBar] = useState([]);
  const [salidaBar, setSalidaBar] = useState([]);

  useEffect(() => {
    function calcularTotalPorCategoria(gastos) {
        // Inicializar un objeto para almacenar los totales por categoría
        const totalesPorCategoria = {};
      
        // Calcular los totales por categoría
        gastos.forEach((gasto) => {
          const categoria = gasto.categoria;
          totalesPorCategoria[categoria] = (totalesPorCategoria[categoria] || 0) + gasto.valor;
        });
      
        // Convertir el objeto a un array de pares clave-valor y ordenarlo alfabéticamente por clave
        const totalesOrdenados = Object.entries(totalesPorCategoria)
          .sort(([categoriaA], [categoriaB]) => categoriaA.localeCompare(categoriaB))
          .reduce((obj, [categoria, total]) => {
            obj[categoria] = total;
            return obj;
          }, {});
      
        return totalesOrdenados;
      }

    gastosEntrada &&
      gastosSalida &&
      setEntradaBar(calcularTotalPorCategoria(gastosEntrada))

      gastosEntrada &&
      gastosSalida &&setSalidaBar(calcularTotalPorCategoria(gastosSalida));
  }, [gastosEntrada, gastosSalida]);

  console.log(Object.keys(salidaBar));
  console.log(Object.values(salidaBar));
  return (
    <article className="InOutCategorias-container">
        <Bar
        data={{
          labels: Object.keys(entradaBar),
          datasets: [
            {
              label: "Entradas",
              data: Object.values(entradaBar),
              borderColor: "gold",
              fill: true,
              backgroundColor: (context) => {
                const bgColor = [
                  "rgba(255, 217, 0, 1)",
                  "rgba(255, 217, 0, 0.8)",
                  "rgba(255, 217, 0, 0.4)",
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
            {
              label: "Salidas",
              data: Object.values(salidaBar),
              borderColor: "white",
              fill: true,
              backgroundColor: (context) => {
                const bgColor = [
                  "rgba(255, 255, 255, 1)",
                  "rgba(255, 255, 255, 0.8)",
                  "rgba(255, 255, 255, 0.4)",
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
              text: "Categorias en el 2023",
            },
          },
        }}
      />

    </article>
  );
};

export default InOutCategorias;
