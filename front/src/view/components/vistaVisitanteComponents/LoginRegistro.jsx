import React from 'react'
import { AuthProvider } from '../../../context/authContext'
import RegistroBancoFormulario from './Registro'


const LoginRegistro = ({ setIsLogged, onClose, setCurrentUser }) => {
  return (
    <AuthProvider>
        <RegistroBancoFormulario 
        setIsLogged={setIsLogged}
        onClose={onClose}
        setCurrentUser={setCurrentUser}/>
    </AuthProvider>
  )
}

export default LoginRegistro