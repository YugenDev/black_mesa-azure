import MovimientoCard from "./MovimientoCard"
import "./Historial.css"

function Historial({cuentaActual}){


    return(<section className="movimientos-container">
        
            {
                cuentaActual.gastos.map((g)=>{
                    return <MovimientoCard gastoId={g} numeroCuentaActual={cuentaActual.id} key={g.id} />
                })

            }
    </section>)
}

export default Historial