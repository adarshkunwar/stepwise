import React from "react";
import { SidebarList } from "./SidebarList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../stores/store";

type SidebarNavigtionProps = {
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  logout: () => void;
  navigate: (path: string) => void;
};

const SidebarNavigtion: React.FC<SidebarNavigtionProps> = ({
  activeItem,
  logout,
  navigate,
  setActiveItem,
}) => {
  const { isLeftBarOpen } = useSelector((state: RootState) => state.slidebar);

  return (
    <nav className="flex-1 overflow-y-auto p-2">
      <ul className="space-y-2">
        {SidebarList.map((item, index) => {
          const isLogoutItem = item.sidebarItem === "Logout";
          const itemClass = `
          flex items-center p-3 ${
            isLeftBarOpen ? "justify-center" : "space-x-3"
          } rounded-lg cursor-pointer ${
            activeItem === index
              ? "bg-blue-600 text-white"
              : "text-gray-300 hover:bg-gray-700"
          } transition-all duration-200
          `;
          return (
            <li key={index}>
              {isLogoutItem ? (
                <div
                  onClick={() => {
                    logout();
                    navigate("/login");
                    setActiveItem(index);
                  }}
                  className={itemClass}
                >
                  <span className="text-xl">{item.sidebarIcon}</span>
                  {!isLeftBarOpen && (
                    <span className="font-medium">{item.sidebarItem}</span>
                  )}
                </div>
              ) : (
                <Link to={item.sidebarPath}>
                  <div
                    onClick={() => setActiveItem(index)}
                    className={itemClass}
                  >
                    <span className="text-xl">{item.sidebarIcon}</span>
                    {!isLeftBarOpen && (
                      <span className="font-medium">{item.sidebarItem}</span>
                    )}
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNavigtion;
