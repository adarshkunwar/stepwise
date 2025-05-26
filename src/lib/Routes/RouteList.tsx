import { FaHome } from "react-icons/fa";

import { lazy } from "react";
import type { Routes } from "../../types/Routes";

export const RouteList: Routes[] = [
  {
    name: "Home",
    path: "/dashboard",
    component: lazy(async () => await import("../../pages/Home/Dashboard")),
    exact: true,
    showOnSidebar: true,
    icon: <FaHome />,
  },
  {
    name: "CreateUser",
    path: "/create-user",
    component: lazy(async () => await import("../../pages/CreateUser")),
    exact: true,
  },
];
