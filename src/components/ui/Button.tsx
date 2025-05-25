type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  size = "small",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  // Define class names based on size
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "px-4 py-2 text-sm";
      break;
    case "medium":
      sizeClasses = "px-6 py-3 text-base";
      break;
    case "large":
      sizeClasses = "px-8 py-4 text-lg";
      break;
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`group w-full flex items-center justify-center py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-light ${sizeClasses}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
