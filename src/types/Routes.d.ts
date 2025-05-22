import type { LazyExoticComponent } from "react";

export type Routes = {
  name: string;
  path: string;
  component: LazyExoticComponent<React.ComponentType<string, null>>;
  exact: boolean;
};
