import "./Confirmacion.css"
function Confirmacion({setStep,setOptionSelected}) {

    const handleConfirm = ()=>{
        setOptionSelected("Comprobante")
        setStep(5)
      }
      const handleCancel = ()=>{
        setOptionSelected("Cuenta")
        setStep(1)
      }


    return (
        <article className="contenedor-confirmacion">
            <div className="dato">
                <h4>Cuenta de origen</h4>
                <p>01500051783</p>
            </div>
            <div className="dato">
                <h4>Costo del envío</h4>
                <p>0,00</p>
            </div>
            <div className="dato">
                <h4>Valor a enviar</h4>
                <p>$500.000</p>
            </div>
            <div className="dato">
                <h4>Nombre del usuario que recibe</h4>
                <p>Juanelo</p>
            </div>
            <div className="dato">
                <h4>N° cuenta de destino</h4>
                <p>3225108713</p>
            </div>
            <div className="botones-confirmar">
                <button onClick={handleCancel} >Cancelar</button>
                <button onClick={handleConfirm} >Confirmar</button>
            </div>
        </article>
    )
}

export default Confirmacion