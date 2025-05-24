type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-light bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300">
      {children}
    </button>
  );
};

export default Button;
