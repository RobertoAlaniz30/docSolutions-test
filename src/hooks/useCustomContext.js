import { useContext } from "react";
import { generalContex } from "../context/ContextProvider";

export const useCustomContext = () => useContext(generalContex);
