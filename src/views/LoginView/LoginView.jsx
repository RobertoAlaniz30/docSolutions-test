import InputField from "../../components/InputField/InputField";
import { useLogin } from "../../hooks/useLogin";
import "./styles.css";

const LoginView = () => {
  const { refUsername, refPassword, handleOnSubmit } = useLogin();
  return (
    <div className="login-view">
      <h2>Inicio de Sesion</h2>
      <form onSubmit={handleOnSubmit}>
        <InputField ref={refUsername} type="text" name="username">
          Usuario:
        </InputField>
        <InputField ref={refPassword} type="password" name="password">
          Password:
        </InputField>
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default LoginView;
