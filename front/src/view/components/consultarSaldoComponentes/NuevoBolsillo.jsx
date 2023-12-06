import { useEffect, useState } from "react";
import "./NuevoBolsillo.css";
import axios from "axios";

function NuevoBolsillo({ closeModal,cuentaActual,setActualizar }) {
  let nombresImg = [
    "beneficiosImg",
    "regaloImg",
    "carroImg",
    "casaImg",
    "arreglosImg",
    "educacionImg",
    "hospitalImg",
    "saludImg",
    "tecnologiaImg",
    "vueloImg",
  ];

  let id = cuentaActual.bolsillos[cuentaActual.bolsillos.length-1].id + 1;
  const [nuevoBolsillo, setNuevoBolsillo] = useState({ id });

  const [isCorrect, setIsCorrect] = useState(false);

  const handleInput = (e) => {
    setNuevoBolsillo({
      ...nuevoBolsillo,
      [e.target.name]: isNaN(e.target.value)
        ? e.target.value
        : Number(e.target.value),
    });
  };
  const handleClick = (e) => {
    setNuevoBolsillo({ ...nuevoBolsillo, imagen: e.target.alt });
  };
  const handleSubmit = async (e)=>{
    e.preventDefault()
    let copiaCuentaActual = {...cuentaActual}
    copiaCuentaActual.bolsillos.push({...nuevoBolsillo})
    copiaCuentaActual.bolsillos[0].deposito -=nuevoBolsillo.deposito
    let response = await axios.put(
        `http://localhost:3000/cuentas/${cuentaActual.id}`,copiaCuentaActual
    )
    setActualizar(prev=>prev+1);
    closeModal();    
  }

  useEffect(() => {
    if (
      nuevoBolsillo.id &&
      nuevoBolsillo.nombre &&
      nuevoBolsillo.meta >10000 &&
      nuevoBolsillo.deposito < cuentaActual.bolsillos[0].deposito&&
      nuevoBolsillo.imagen
    ) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }, [nuevoBolsillo]);

  return (
    <div className="nuevo-bolsillo-container">
      <h2>Nuevo bolsillo</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Nombre del bolsillo"
            name="nombre"
            onInput={handleInput}
          />
          <input
            type="number"
            placeholder="Meta (min: $10.000)"
            name="meta"
            onInput={handleInput}
          />
          <input
            type="number"
            placeholder={"Deposito inicial (max: $"+cuentaActual.bolsillos[0].deposito.toLocaleString("es-ES")+")"}
            name="deposito"
            onInput={handleInput}
          />
        </div>
        <h4>Escoje un logo</h4>
        {nombresImg.map((e) => {
          let rutaImg =
            "/src/view/components/consultarSaldoComponentes/imgsBolsillos/" +
            e +
            ".png";

          return (
            <div className="contenedor-imagen">
              <img onClick={handleClick} src={rutaImg} alt={e} key={e} />
            </div>
          );
        })}
        <div className="boton-crear-bolsillo">
          <input  disabled={!isCorrect} type="submit" value={"Crear"} />
        </div>
      </form>
    </div>
  );
}

export default NuevoBolsillo;
