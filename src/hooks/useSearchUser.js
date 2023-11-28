import { useCustomContext } from "../hooks/useCustomContext";
import { useRef, useState } from "react";
import { getUsers } from "../services/user.service";
const URL_GET_USERS =
  "https://techhub.docsolutions.com/OnBoardingPre/WebApi/api/user/GetUsers";

export const useSearchUser = () => {
  const { userState } = useCustomContext();
  const [usersData, setUsersData] = useState(null);
  const refSearch = useRef(null);

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    const searchValue = {
      Body: {
        SearchText: refSearch.current.value,
      },
    };
    const response = await getUsers(
      URL_GET_USERS,
      userState.token,
      searchValue
    );
    setUsersData(response.Body);
  };
  return {
    refSearch,
    usersData,
    handleSearchUsers,
  };
};
