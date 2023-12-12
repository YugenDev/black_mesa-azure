import { useEffect, useState } from "react";
import "./ValorTransferir.css";
import axios from "axios";


function ValorTransferir({setValorTransferencia,setStep,setOptionSelected,currentUser}) {
  
  const [cuentaActual, setCuentaActual] = useState(null);
  useEffect(()=>{
    const traerCuenta = async () => {
    let response = await axios.get(`http://localhost:3000/cuentas?idUsuario=${currentUser.id}`)
    setCuentaActual(response?.data[0])
  }
    traerCuenta()
  },[])

  const [valor, setValor] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleInput = (e) => {
    setValor(e.target.value);
  };

  const handleClick = ()=>{
    setValorTransferencia(valor)
    setOptionSelected("Gasto")
    setStep(3)
  }

  useEffect(() => {
    valor >= 1000 && valor<cuentaActual.bolsillos[0].deposito ? setIsCorrect(true) : setIsCorrect(false); setValorTransferencia(null);
  }, [valor]);

  return (
    <article className="contenedor-valor-transferir">
      <p>¿Cuánto dinero vas a transferir?</p>
      <input
        value={valor}
        onChange={handleInput}
        type="number"
        name="valor-transferir"
        id="valor-transferir"
        placeholder="¿Cuánto dinero vas a transferir?"
      />
      <button onClick={handleClick} disabled={!isCorrect} className="boton-transferencia">
        Siguiente
      </button>
    </article>
  );
}

export default ValorTransferir;
