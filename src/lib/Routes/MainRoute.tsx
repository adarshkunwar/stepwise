import { Suspense } from "react";
import { RouteList } from "./RouteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/Auth/Login";
import RegisterPage from "../../pages/Auth/Register";

const MainRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* safe routes */}
            <Route path={`/login`} element={<LoginPage />} />
            <Route path={`/sign-up`} element={<RegisterPage />} />

            {/* guarded routes */}
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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
