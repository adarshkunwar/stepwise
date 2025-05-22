import { Suspense } from "react";
import { RouteList } from "./RouteList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          {/* safe routes */}

          <Routes>
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
