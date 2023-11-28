import { Outlet, Navigate } from "react-router-dom";
import { useCustomContext } from "../hooks/useCustomContext";
export const ProtectedRoute = () => {
  const { userState } = useCustomContext();
  if (!userState.token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
