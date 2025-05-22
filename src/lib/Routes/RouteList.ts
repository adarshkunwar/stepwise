import { lazy } from "react";
import type { Routes } from "../../types/Routes";

export const RouteList: Routes[] = [
  {
    name: "Home",
    path: "/",
    component: lazy(async () => await import("../../pages/Home")),
    exact: true,
  },
];
