import { useState } from "react";

const useErrorMessage = () => {
  const [idErrorMessage, setIdErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  return {
    idErrorMessage,
    setIdErrorMessage,
    passwordErrorMessage,
    setPasswordErrorMessage,
  };
};

export default useErrorMessage;
