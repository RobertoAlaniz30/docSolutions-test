import { useNavigate } from "react-router-dom";
import { useSearchUser } from "../../hooks/useSearchUser";
import InputField from "../../components/InputField/InputField";
import TableHeader from "../../components/Table/TableHeader";
import TableBody from "../../components/Table/TableBody";
import "./styles.css";

const TABLE_COLUMNS = [
  "Username",
  "Name",
  "FatherLastName",
  "CreationDate",
  "Email",
  "PhoneNumber",
];

const HomeView = () => {
  const { refSearch, usersData, handleSearchUsers } = useSearchUser();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/createUser");
  };
  return (
    <div className="home-view">
      <div className="home-top__container">
        <form onSubmit={handleSearchUsers}>
          <InputField
            ref={refSearch}
            type="text"
            name="search"
            placeholder="Buscar"
          ></InputField>
          <button>OK</button>
        </form>
        <button onClick={handleClick}>Nuevo</button>
      </div>

      {usersData != null ? (
        <table>
          <TableHeader>
            {TABLE_COLUMNS.map((column, index) => {
              return <th key={index}>{column}</th>;
            })}
          </TableHeader>
          <TableBody>
            {usersData.map((user) => {
              return (
                <tr key={user.Id}>
                  <td>{user.Username}</td>
                  <td>{user.Name}</td>
                  <td>{user.FatherLastName}</td>
                  <td>{user.CreationDate}</td>
                  <td>{user.Email}</td>
                  <td>{user.PhoneNumber}</td>
                </tr>
              );
            })}
          </TableBody>
        </table>
      ) : (
        <h3 style={{ textAlign: "center" }}>
          No se encontraron usuarios con los valores de busqueda
        </h3>
      )}
    </div>
  );
};

export default HomeView;
