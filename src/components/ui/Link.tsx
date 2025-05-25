import React from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  children: React.ReactNode;
  link?: string;
  underline?: boolean;
};

const CustomLink = ({ children, link }: LinkProps) => {
  return (
    <RouterLink
      to={link || "#"}
      className="group inline-flex items-center justify-center px-8 py-4 text-lg font-light bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300"
    >
      {children}
    </RouterLink>
  );
};

const SimpleLink = ({ children, link, underline = false }: LinkProps) => {
  return (
    <RouterLink
      to={link || "#"}
      className={` hover:text-white transition-colors font-light ${
        underline ? "underline text-white" : "text-gray-400"
      }`}
    >
      {children}
    </RouterLink>
  );
};

export { CustomLink, SimpleLink };
