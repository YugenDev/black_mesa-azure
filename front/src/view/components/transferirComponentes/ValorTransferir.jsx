import "./ValorTransferir.css"
function ValorTransferir(){
    return(
        <article className="contenedor-valor-transferir">
            <input type="number" name="valor-transferir" id="valor-transferir" placeholder="Cuanto dinero vas a transferir?"/>
            <button>Siguiente</button>
        </article>
    )
}

export default ValorTransferir