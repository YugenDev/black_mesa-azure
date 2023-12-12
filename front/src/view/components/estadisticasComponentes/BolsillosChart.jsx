import React, { useEffect, useState } from 'react'
import "./BolsillosChart.css"
import { Pie } from 'react-chartjs-2'

const BolsillosChart = ({cuenta}) => {
    const[bolsillos,setBolsillos] = useState([])

    useEffect(()=>{
        function calcularPorcentajeBolsillos(cuenta) {
            const bolsillos = cuenta.bolsillos;
          
            // Calcular el total de depósitos en todos los bolsillos
            const totalDepositos = bolsillos.reduce((total, bolsillo) => total + bolsillo.deposito, 0);
          
            // Calcular el porcentaje para cada bolsillo
            const porcentajesBolsillos = bolsillos.map((bolsillo) => ({
              nombre: bolsillo.nombre,
              porcentaje: Math.round((bolsillo.deposito / totalDepositos) * 100),
            }));
          
            return porcentajesBolsillos;
          }
          cuenta&&setBolsillos(calcularPorcentajeBolsillos(cuenta))

    },[cuenta])

  return (
    <article className='BolsillosChart-container'>
        <Pie
        data={{
          labels: bolsillos?.map(item=>item.nombre),
          datasets: [
            {
              label: "Porcentaje",
              data: bolsillos?.map(item=>item.porcentaje),
              borderColor: "white",
              fill: true,
            //   backgroundColor:[
            //     "rgba(248,248,255,255)",
            //     "rgba(202,201,205,255)",
            //     "rgba(155,154,156,255)",
            //     "rgba(109,106,106,255)",
            //     "rgba(62,59,57,255)",
            //     "rgba(16,12,7,255)",
            //   ],
              backgroundColor:[
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
              text: "Porcentaje bolsillos",
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
  )
}

export default BolsillosChart