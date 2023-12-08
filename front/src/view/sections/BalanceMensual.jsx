import React, { useEffect, useState } from 'react'
import "./BalanceMensual.css"
import { Line } from 'react-chartjs-2';

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

const BalanceMensual = ({ gastosEntrada, gastosSalida}) => {
    const [balancePorMes, setBalancePorMes] = useState([]);

  useEffect(() => {
    function calcularBalancePorMes(gastosEntrada, gastosSalida) {

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
      const balanceMes = []
      entradasPorMes.forEach((item,index)=>{
        balanceMes.push({
            mes: item.mes,
            balance: item.total - salidasPorMes[index].total
        })
      })

      return balanceMes;
    }

    gastosSalida &&
      gastosEntrada && setBalancePorMes(calcularBalancePorMes(gastosEntrada, gastosSalida));

  }, [gastosEntrada, gastosSalida]);




  return (
    <article className='BalanceMensual-container'>
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
              label: "Balance total",
              data: balancePorMes?.map((data) => data.balance),
              borderColor: "white",
              fill: true,
              backgroundColor: (context) => {
                const bgColor = [
                  "rgba(255, 217, 0, 1)",
                  
                  "rgba(255, 227, 72, 0.5)",
                  "rgba(255, 255, 255, 1)",
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
              text: "Balance mensual 2023",
            },
          },
        }}
      />

    </article>
  )
}

export default BalanceMensual