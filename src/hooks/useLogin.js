import { useRef } from "react";
import { useCustomContext } from "../hooks/useCustomContext";
import { userLogin } from "../services/user.service";
import { useNavigate } from "react-router-dom";

const URL_LOGIN =
  "https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/authentication/authentication ";

export const useLogin = () => {
  const { userDispatch } = useCustomContext();
  const navigate = useNavigate();
  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const loginCredential = {
      Body: {
        Password: refPassword.current.value,
        Username: refUsername.current.value,
      },
    };
    const response = await userLogin(URL_LOGIN, loginCredential);
    if (!response.IsOK) {
      alert("Error de autenticacion, intente nuevamente");
      return;
    }
    userDispatch({
      type: "USER_LOGIN",
      payload: response.Body.Token,
    });
    navigate("/home");
  };
  return {
    refUsername,
    refPassword,
    handleOnSubmit,
  };
};
