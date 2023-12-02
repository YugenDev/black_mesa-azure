import "./NuevoBolsillo.css"

function NuevoBolsillo() {
  let nombresImg = ["beneficiosImg","regaloImg","carroImg","casaImg","arreglosImg","educacionImg","hospitalImg","saludImg","tecnologiaImg","vueloImg"]
  return(
        <div className="nuevo-bolsillo-container">
            <h2>Nuevo bolsillo</h2>
            <form>
                <div className="inputs">
                    <input type="text" placeholder="Nombre del bolsillo"/>
                    <input type="number" placeholder="Meta"/>
                    <input type="number" placeholder="Deposito inicial"/>
                </div>
                
            <h4>Escoje un logo</h4>
            {
                nombresImg.map((e)=>{
                    let rutaImg = "/src/view/components/consultarSaldoComponentes/imgsBolsillos/"+e+".png"

                    return (
                        <div className="contenedor-imagen">
                            <img src={rutaImg} alt={e} key={e}/>
                        </div>
                        
                    )
                })
            }
            <div className="boton-crear-bolsillo">
                <input type="submit" value={"Crear"}/>
            </div>
            </form>

        </div>
    )
}

export default NuevoBolsillo