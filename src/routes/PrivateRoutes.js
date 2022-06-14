import { Navigate, Outlet } from "react-router-dom";
import authService from "../auth/Services";

const PrivateRoutes = () => {
  let isAuth = authService.user;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
