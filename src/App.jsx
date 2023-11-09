import Header from "./view/sections/Header"
import ConsultarSaldo from "./view/sections/ConsultarSaldo";

var isLogged = true;

function App() {
  return (
    <>
      <Header isLogged={isLogged}></Header>
      <ConsultarSaldo></ConsultarSaldo>
    </>
  )
}

export default App
