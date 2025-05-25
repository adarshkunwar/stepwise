import type { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  type?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
};

const Input = ({ type = "text", placeholder = "", register }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-800 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors duration-300 text-lg font-light"
    />
  );
};

export default Input;
