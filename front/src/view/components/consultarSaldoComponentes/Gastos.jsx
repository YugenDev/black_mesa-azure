import axios from "axios";
import { useEffect, useState } from "react";
import "./Gastos.css";

const ruta =
  "/src/view/components/transferirComponentes/imgsTransferir/";

const rutasImgs = {
  comida: ruta+"comida.png",
  entretenimiento: ruta+"entretenimiento.png",
  hogar: ruta+"hogar.png",
  otro: ruta+"otro.png",
  regalos: ruta+"regalo.png",
  transporte: ruta+"transporte.png"
};

function Gastos({ cuentaActual }) {
  const [gastoSalida, setGastoSalida] = useState([]);
  const [gastoEntrada, setGastoEntrada] = useState([]);
  const [gastosPorCategoria, setGastoPorCategoria] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [mes, setMes] = useState("");
  const [anio, setAnio] = useState("");

  useEffect(() => {
    const traerGastosSalida = async () => {
      let response = await axios.get(
        `http://localhost:3000/gastos?cuentaOrigen=${cuentaActual.id}`
      );
      setGastoSalida(response?.data);
    };
    traerGastosSalida();
    const traerGastosEntrada = async () => {
      let response = await axios.get(
        `http://localhost:3000/gastos?cuentaDestino=${cuentaActual.id}`
      );
      setGastoEntrada(response?.data);
    };
    traerGastosEntrada();
  }, []);

  useEffect(() => {
    let nuevasCategorias = [...categorias];

    gastoEntrada.forEach((ge) => {
      if (!nuevasCategorias.includes(ge.categoria)) {
        nuevasCategorias.push(ge.categoria);
      }
    });

    gastoSalida.forEach((gs) => {
      if (!nuevasCategorias.includes(gs.categoria)) {
        nuevasCategorias.push(gs.categoria);
      }
    });

    setCategorias(nuevasCategorias);
  }, [gastoEntrada, gastoSalida]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const resultados = await Promise.all(
        categorias.map(async (categoria) => {
          const [entradas, salidas] = await Promise.all([
            axios.get(
              `http://localhost:3000/gastos?cuentaDestino=${cuentaActual.id}&categoria=${categoria}`
            ),
            axios.get(
              `http://localhost:3000/gastos?cuentaOrigen=${cuentaActual.id}&categoria=${categoria}`
            ),
          ]);

          const sumEntradas = entradas.data.reduce(
            (acc, gasto) => acc + gasto.valor,
            0
          );
          const sumSalidas = salidas.data.reduce(
            (acc, gasto) => acc + gasto.valor,
            0
          );

          return { categoria, sumEntradas, sumSalidas };
        })
      );

      setGastoPorCategoria(resultados);
    };

    obtenerDatos();
  }, [cuentaActual, categorias]);

  // organizar para filtrar por mes

  //   useEffect(() => {
  //     if (mes) {
  //       const gastosFiltrados = gastoEntrada.map((categoria) => {
  //         // Filtrar gastos de entrada y salida
  //         const entradas = categoria.entradas.filter((gasto) => {
  //           const fecha = new Date(gasto.fecha);

  //           return fecha.getFullYear() == anio && fecha.getMonth() + 1 == mes;
  //         });

  //         const salidas = categoria.salidas.filter((gasto) => {
  //           const fecha = new Date(gasto.fecha);
  //           return fecha.getFullYear() == anio && fecha.getMonth() + 1 == mes;
  //         });

  //         // Devolvemos la categoria con gastos filtrados
  //         return {
  //           categoria: categoria.categoria,
  //           entradas,
  //           salidas,
  //         };
  //       });

  //       setGastoPorCategoria(gastosFiltrados);
  //     } else {
  //       setGastoPorCategoria(gastosPorCategoria);
  //     }
  //   }, [mes]);

  return (
    <section className="gastos-container">
      <label>
        Selecciona un mes:
        <input
          type="month"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
        />
      </label>
      <div className="show-gastos">
        {gastosPorCategoria?.map((c) => {
          return (
            <div className="gasto-card">
              <h4>{c.categoria.toUpperCase()}</h4>
              <div>
                <p>{"Entradas : $" + c.sumEntradas.toLocaleString("es-CO")}</p>
                <p>{"Salidas : $" + c.sumSalidas.toLocaleString("es-CO")}</p>
              </div>
              <img src={rutasImgs[c.categoria]} alt="cat" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gastos;
