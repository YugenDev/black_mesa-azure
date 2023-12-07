import React, { useEffect, useState } from 'react'
import "./inOutChart.css"
import {Chart as ChartJS} from "chart.js/auto"
import { Line } from "react-chartjs-2"


const inOutChart = ({gastosEntrada,gastosSalida}) => {

  const[labels,setLabels] = useState([])
  const[lineEntrada,setLineEntrada] = useState([])
  const[lineSalida,setLineSalida] = useState([])


  useEffect(()=>{
    function sumarValoresPorMes(datos) {
      // Filtrar solo los elementos del año 2023
      const datos2023 = datos.filter(item => new Date(item.fecha).getFullYear() === 2023);
    
      // Inicializar un objeto para almacenar las sumas por mes
      const sumasPorMes = {
        "ene": 0, "feb": 0, "mar": 0, "abr": 0, "may": 0, "jun": 0,
        "jul": 0, "ago": 0, "sept": 0, "oct": 0, "nov": 0, "dic": 0
      };
    
      // Recorrer los datos filtrados y sumar los valores por mes
      datos2023.forEach(item => {
        const mes = new Date(item.fecha).toLocaleString('es-ES', { month: 'short' });
        sumasPorMes[mes] = (sumasPorMes[mes] || 0) + item.valor;
      });
    
      // Convertir el objeto de sumas por mes a un array de objetos
      const resultado = Object.entries(sumasPorMes).map(([mes, total]) => ({
        mes,
        total
      }));
    
      return resultado;
    }

    gastosEntrada&&setLineEntrada(sumarValoresPorMes(gastosEntrada));
    gastosSalida&&setLineSalida(sumarValoresPorMes(gastosSalida))
  },[gastosEntrada,gastosSalida])

  return (
    <article className='inOutChart-container'>
        <Line 
          data={{
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            datasets:[{
              label: "Entradas", 
              data:lineEntrada.map((data)=>data.total),
              borderColor: "gold"
            },
            {
              label: "Salidas", 
              data:lineSalida.map((data)=>data.total),
              borderColor:"white"
            }
          ]
          }}
          options={{
            maintainAspectRatio:false,
            elements:{
              line:{
                tension:0.4
              }
            }          
          }}
        />
    </article> 
  )
}



export default inOutChart