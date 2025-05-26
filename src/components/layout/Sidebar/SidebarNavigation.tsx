import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../stores/store";
import { RouteList } from "../../../lib/Routes/RouteList";

type SidebarNavigtionProps = {
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  logout: () => void;
  navigate: (path: string) => void;
};

const SidebarNavigtion: React.FC<SidebarNavigtionProps> = ({
  activeItem,
  setActiveItem,
}) => {
  const { isLeftBarOpen } = useSelector((state: RootState) => state.slidebar);

  return (
    <nav className="flex-1 overflow-y-auto p-2">
      <ul className="space-y-2">
        {RouteList.filter((route) => route.showOnSidebar).map((item, index) => {
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
              <Link to={item.path}>
                <div onClick={() => setActiveItem(index)} className={itemClass}>
                  <span className="text-xl">{item.icon}</span>
                  {!isLeftBarOpen && (
                    <span className="font-medium">{item.path}</span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNavigtion;
