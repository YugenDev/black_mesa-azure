import { useEffect, useState } from "react";
import "./ValorTransferir.css";


function ValorTransferir({setStep,setOptionSelected}) {
  const [valor, setValor] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleInput = (e) => {
    setValor(e.target.value);
  };

  const handleClick = ()=>{
    setOptionSelected("Gasto")
    setStep(3)
  }

  useEffect(() => {
    valor >= 1000 ? setIsCorrect(true) : setIsCorrect(false);
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
