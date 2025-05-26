import { Suspense } from "react";
import { RouteList } from "./RouteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/Auth/Login";
import RegisterPage from "../../pages/Auth/Register";
import AuthGuard from "./AuthGuard";
import LoadingPage from "../../pages/Loading";
import SidebarLayout from "../../components/layout/Sidebar/SidebarLayout";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />

          {/* guarded routes */}

          <Route path="/" element={<SidebarLayout />}>
            <Route path="/" element={<AuthGuard />}>
              {RouteList.map((route) => {
                const Component = route.component;
                return (
                  <Route
                    key={route.name}
                    path={route.path}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRoute;
