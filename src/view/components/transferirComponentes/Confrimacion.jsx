import "./Confirmacion.css"
function Confirmacion() {
    return (
        <article className="contenedor-confirmacion">
            <div className="dato">
                <h4>Cuenta de origen</h4>
                <p>01500051783</p>
            </div>
            <div className="dato">
                <h4>Costo del envio</h4>
                <p>0,00</p>
            </div>
            <div className="dato">
                <h4>Valor a enviar</h4>
                <p>500000</p>
            </div>
            <div className="dato">
                <h4>nombre de la Cuenta de destino</h4>
                <p>juanelo</p>
            </div>
            <div className="dato">
                <h4>N° cuenta de destino</h4>
                <p>3225108713</p>
            </div>
            <div className="botones-confirmar">
                <button>cancelar</button>
                <button>Siguiente</button>
            </div>
        </article>
    )
}

export default Confirmacion