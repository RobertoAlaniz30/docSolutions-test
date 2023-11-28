import { useRef } from "react";
import { useCustomContext } from "./useCustomContext";
import { registerUser } from "../services/user.service";

const URL_SAVE_USERS =
  "https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/RegisterUserRole";

export const useRegisterUser = () => {
  const { userState } = useCustomContext();
  const refName = useRef(null);
  const refLastNameP = useRef(null);
  const refLastNameM = useRef(null);
  const refEmail = useRef(null);
  const refPhone = useRef(null);
  const refUser = useRef(null);
  const refPassword = useRef(null);
  const handleRegisterUser = async (e) => {
    e.preventDefault();
    const registerValue = {
      Body: {
        Tenant: null,
        UserName: refUser.current.value,
        Password: refPassword.current.value,
        Name: refName.current.value,
        FatherLastName: refLastNameP.current.value,
        MotherLastName: refLastNameM.current.value,
        Email: refEmail.current.value,
        PhoneNumber: refPhone.current.value,
        Metadata: null,
        Roles: [
          {
            Id: 2,
            Name: "Usuario Tradicional",
          },
        ],
      },
    };
    const response = await registerUser(
      URL_SAVE_USERS,
      userState.token,
      registerValue
    );
    alert(
      `${
        response.IsOK
          ? "Usuario creado correctamente"
          : "Error al crear usuario, intente nuevamente"
      }`
    );
    return response;
  };
  return {
    refName,
    refLastNameP,
    refLastNameM,
    refEmail,
    refPhone,
    refUser,
    refPassword,
    handleRegisterUser,
  };
};
