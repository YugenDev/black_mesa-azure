import "./TipoDeGasto.css"
import comida from "./imgsTransferir/comida.png"
import transporte from "./imgsTransferir/transporte.png"
import hogar from "./imgsTransferir/hogar.png"
import regalos from "./imgsTransferir/regalo.png"
import entretenimiento from "./imgsTransferir/entretenimiento.png"
import otros from "./imgsTransferir/otro.png"
function TipoDeGasto(){
    return(
        <article className="contenedor-tipo-gasto">
            <div className="contenedor-cards">
                <div className="tipo-gasto">
                    <div className="marco">
                        <img src={comida} alt="comida" className="gasto-logo"/>
                    </div>
                    <h3>Comida</h3>
                </div>
                <div className="tipo-gasto">
                    <div className="marco">
                        <img src={transporte} alt="transporte" className="gasto-logo"/>
                    </div>
                    <h3>Transporte</h3>
                </div>
                <div className="tipo-gasto">
                    <div className="marco">
                        <img src={hogar} alt="hogar" className="gasto-logo"/>
                    </div>
                    <h3>Hogar</h3>
                </div>
                <div className="tipo-gasto">
                    <div className="marco">
                        <img src={regalos} alt="regalos" className="gasto-logo"/>
                    </div>
                    <h3>Regalos</h3>
                </div>
                <div className="tipo-gasto">
                    <div className="marco">
                        <img src={entretenimiento} alt="entretenimiento" className="gasto-logo"/>
                    </div>
                    <h3>Entretenimiento</h3>
                </div>
                <div className="tipo-gasto">
                    <div className="marco">
                        <img src={otros} alt="otro" className="gasto-logo"/>
                    </div>
                    <h3>Otro</h3>
                </div>
            </div>
            <button>Siguiente</button>
        </article>
    )
}

export default TipoDeGasto