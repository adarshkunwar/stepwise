import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../stores/store";
import type { JSX } from "react";

const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, token } = useSelector(
    (state: RootState) => state.auth
  );

  console.log(isAuthenticated);

  if (!isAuthenticated || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthGuard;
