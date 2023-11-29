import React from "react";
import { AuthProvider } from "../../../context/authContext";
import { FormFirebase } from "./FormFirebase";

const LogInForm = ({ setIsLogged, onClose, setCurrentUser }) => {
  return (
    <AuthProvider>
      <FormFirebase
        setIsLogged={setIsLogged}
        onClose={onClose}
        setCurrentUser={setCurrentUser}
      />
    </AuthProvider>
  );
};

export default LogInForm;
