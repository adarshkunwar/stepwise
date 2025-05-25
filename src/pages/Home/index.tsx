import type { RootState } from "../../stores/store";
import DashboardPage from "./Dashboard";

import Landing from "./Landing";
import { useSelector } from "react-redux";

const Home = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return <div>{isAuthenticated ? <DashboardPage /> : <Landing />}</div>;
};

export default Home;
