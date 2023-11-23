import BolsilloCard from "./BolsilloCard"
import "./Bolsillos.css"

function Bolsillos({cuentaActual}){
    return(
        <section className="container">
            {
                cuentaActual?.bolsillos.map(b => {
                    if (!b.id==0) return(<BolsilloCard nombre={b.nombre} meta={b.meta} deposito={b.deposito} logo={b.imagen} key={b.nombre}/>)
                })
            }
            {cuentaActual?.bolsillos.length<=6&&<BolsilloCard nombre={"Nuevo bolsillo"} meta={"meta"} deposito={"deposito"} logo={"agregarImg"} />}
        </section>
    )
}

export default Bolsillos