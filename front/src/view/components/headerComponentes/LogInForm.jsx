import React from "react";
import { AuthProvider } from "../../../context/authContext";
import { FormFirebase } from "./FormFirebase";

const LogInForm = ({ setIsLogged, onClose, setCurrentUser,actualizar }) => {
  return (
    <AuthProvider>
      <FormFirebase
        setIsLogged={setIsLogged}
        onClose={onClose}
        setCurrentUser={setCurrentUser}
        actualizar={actualizar}
      />
    </AuthProvider>
  );
};

export default LogInForm;
