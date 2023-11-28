import { createContext, useReducer } from "react";
import { USER_STATE } from "./modules/USER/USER_STATE.JS";
import { USER_REDUCER } from "./modules/USER/USER_REDUCER";
export const generalContex = createContext();

const ContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(USER_REDUCER, USER_STATE);
  return (
    <generalContex.Provider value={{ userState, userDispatch }}>
      {children}
    </generalContex.Provider>
  );
};

export default ContextProvider;
