import BolsilloCard from "./BolsilloCard"
import "./Bolsillos.css"

import beneficiosImg from "./imgsBolsillos/beneficios.png"
import regaloImg from "./imgsBolsillos/caja-de-regalo.png"
import carroImg from "./imgsBolsillos/carro.png"
import casaImg from "./imgsBolsillos/casa.png"
import arreglosImg from "./imgsBolsillos/configuraciones.png"
import educacionImg from "./imgsBolsillos/educacion.png"
import hospitalImg from "./imgsBolsillos/hospital.png"
import saludImg from "./imgsBolsillos/salud.png"
import tecnologiaImg from "./imgsBolsillos/tecnologia.png"
import vueloImg from "./imgsBolsillos/vuelo.png"
import agregarImg from "./imgsBolsillos/boton-agregar.png"

var bolsillosPrueba1 =[
    {
        nombre: "Emergencias",
        meta: 500000,
        deposito: 10000,
        logo: hospitalImg
    },
]
var bolsillosPrueba2 =[
    {
        nombre: "Vacaciones",
        meta: 2500000,
        deposito: 500000,
        logo: casaImg
    },
    {
        nombre: "Inversión",
        meta: 1000000,
        deposito: 100000,
        logo: beneficiosImg
    },
    {
        nombre: "Regalos",
        meta: 200000,
        deposito: 180000,
        logo: regaloImg
    },
    {
        nombre: "Semestre",
        meta: 3000000,
        deposito: 2000000,
        logo: educacionImg
    },
    {
        nombre: "Carro",
        meta: 25000000,
        deposito: 10000000,
        logo: carroImg
    },
]

function Bolsillos(){
    return(
        <section className="container">
            {
                bolsillosPrueba2?.map(b => {
                    return(<BolsilloCard nombre={b.nombre} meta={b.meta} deposito={b.deposito} logo={b.logo} key={b.nombre}/>)
                })
            }
            <BolsilloCard nombre={"Nuevo bolsillo"} meta={"meta"} deposito={"deposito"} logo={agregarImg} />
        </section>
    )
}

export default Bolsillos