import "./NuevoBolsillo.css"

function NuevoBolsillo() {
  let nombresImg = ["beneficiosImg","regaloImg","carroImg","casaImg","arreglosImg","educacionImg","hospitalImg","saludImg","tecnologiaImg","vueloImg"]
  return(
        <div className="nuevo-bolsillo-container">
            <h2>Nuevo bolsillo</h2>
            <form>
                <label htmlFor=""> Nombre
                    <input type="text" />
                </label>
                <label htmlFor=""> Meta
                    <input type="number" />
                </label>
                <label htmlFor=""> Depósito inicial 
                    <input type="number" />
                </label>
            <h4>Escoje un logo</h4>
            {
                nombresImg.map((e)=>{
                    let rutaImg = "/src/view/components/consultarSaldoComponentes/imgsBolsillos/"+e+".png"

                    return (
                        <img src={rutaImg} alt={e} key={e}/>
                    )
                })
            }
            <input type="submit" value={"Crear"}/>
            </form>

        </div>
    )
}

export default NuevoBolsillo