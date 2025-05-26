import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LogoHeader from "./LogoHeader";
import SidebarNavigtion from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";
import { useSelector } from "react-redux";
import type { RootState } from "../../../stores/store";

const SidebarLayout = () => {
  const [activeItem, setActiveItem] = useState(0);
  const { isLeftBarOpen } = useSelector((state: RootState) => state.slidebar);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50 relative">
      <aside
        className={`${
          isLeftBarOpen ? "w-16" : "w-64"
        } dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-800 transition-all duration-300 ease-in-out flex flex-col relative`}
      >
        <LogoHeader />
        <SidebarNavigtion
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          logout={() => {}}
          navigate={navigate}
        />
        <SidebarFooter />
      </aside>

      <div className=" w-screen h-screen flex">
        <main
          className={` overflow-auto bg-white delay-100 flex-1 ${
            isLeftBarOpen ? "translate-x-32" : "translate-x-10"
          } p-4`}
        >
          <div className="max-w-2xl ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
