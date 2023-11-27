import { useAuth } from "../../../context/authContext"
import React, { useState } from "react";
import axios from 'axios';

function FormFirebase({setIsLogged, onClose, setCurrentUser}){
    const auth = useAuth()
    const {displayName} = auth.user
    // console.log(displayName)
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    // console.log(emailRegister, passwordRegister, "Estado de los formularios")

    const [email, setEmail] = useState("dgouldthorpe6@fastcompany.com")
    const [password, setPassword] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();
        auth.register(emailRegister, passwordRegister)
    };
    const handleLogin = async (e)=> {
        e.preventDefault();

        let response = await axios.get(`http://localhost:3000/usuarios?correo=${email}`)
        if (response.data[0]&&!response.data[0].password){
            setCurrentUser(response.data[0]);
            setIsLogged(true);
            onClose();
        }
        // auth.login(email, password) // habilitar esto después
    };
    const handleGoogle = (e)=>{
        e.preventDefault();
        auth.loginWithGoogle()
    }
    const handleLogout = ()=>{
        auth.logout
    }
    // console.log(email, password, "estado de login")
  return(
    <div className="form-container">
        <form action="" className="form">
            <h3 className="title">Registrate</h3>
            <input onChange={(e)=>setEmailRegister(e.target.value)} className="input" type="email" />
            <input onChange={(e)=>setPasswordRegister(e.target.value)} className="input" type="password" />
            <button onClick={(e)=>handleRegister(e)} className="button">ENVIAR</button>
        </form>

        <form className="form" action="">
            <h3 className="title">Login</h3>
            <input onChange={(e)=>setEmail(e.target.value)} className="input" type="email" />
            <input onChange={(e)=>setPassword(e.target.value)} className="input" type="password" />
            <button onClick={(e)=>handleLogin(e)} className="button">Login</button>
            <button onClick={(e)=>handleGoogle(e)} className="button">GOOGLE</button>
        </form>

        <button onClick={()=>handleLogout()} className="button">Logout</button>
    </div>
  )
}

export {FormFirebase};