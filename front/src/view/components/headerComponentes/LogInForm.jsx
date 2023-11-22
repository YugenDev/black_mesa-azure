import React from 'react'
import { AuthProvider } from '../../../context/authContext'
import { FormFirebase } from './FormFirebase'

const LogInForm = ({setIsLogged, onClose, setCurrentUser}) => {
  return (
    <div>LogInForm
    <AuthProvider>
        <h1>FORMULARIO</h1>
        <FormFirebase setIsLogged={setIsLogged}  onClose={onClose} setCurrentUser={setCurrentUser} />
      </AuthProvider>
    </div>
  )
}

export default LogInForm