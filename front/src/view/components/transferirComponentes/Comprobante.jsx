import "./Comprobante.css"
function Comprobante({setStep,setOptionSelected}){
    const finalizar = ()=>{
        setOptionSelected("Cuenta")
        setStep(1)
    }

    return(
        <article className="contenedor-comprobante">
            <div className="dato-comprobante">
                <h3>Transferencia exitosa</h3>
            </div>
            <div className="dato-comprobante">
                <h4>Costo de la trasnferencia</h4>
                <p>0,00</p>
            </div>
            <div className="dato-comprobante">
                <h4>Cuenta de origen</h4>
                <p>01500051783</p>
            </div>
            <div className="dato-comprobante">
                <h4>N° cuenta de destino</h4>
                <p>3225108713</p>
            </div>
            <div className="dato-comprobante">
                <h4>Valor transferido</h4>
                <p>500000</p>
            </div>
            <div className="dato-comprobante">
                <h4>N° comprobante</h4>
                <p>11112023</p>
            </div>
            <div className="dato-comprobante">
                <h4>Fecha</h4>
                <p>11/11/2023</p>
            </div>
            <button onClick={finalizar}>Finalizar</button>
        </article>
    )
}

export default Comprobante