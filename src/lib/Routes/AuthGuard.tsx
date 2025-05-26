import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../../stores/store";

const AuthGuard = () => {
  const { isAuthenticated, token } = useSelector(
    (state: RootState) => state.auth
  );

  console.log(isAuthenticated);

  if (!isAuthenticated || !token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
