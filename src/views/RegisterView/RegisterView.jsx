import InputField from "../../components/InputField/InputField";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import "./styles.css";


const RegisterView = () => {
  const {
    refName,
    refLastNameP,
    refLastNameM,
    refEmail,
    refPhone,
    refUser,
    refPassword,
    handleRegisterUser,
  } = useRegisterUser();

  return (
    <div className="register-view">
      <h3>Nuevo Usuario</h3>
      <form onSubmit={handleRegisterUser}>
        <InputField ref={refName}>Nombre:</InputField>
        <InputField ref={refLastNameP}>Apellido P:</InputField>
        <InputField ref={refLastNameM}>Apellido M:</InputField>
        <InputField ref={refEmail}>Email:</InputField>
        <InputField ref={refPhone}>Telefono:</InputField>
        <InputField ref={refUser}>Usuario:</InputField>
        <InputField ref={refPassword}>Password:</InputField>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};
export default RegisterView;
