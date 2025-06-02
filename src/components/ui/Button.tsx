import { cn } from "../../lib/Handlers/Utility";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const Button = ({
  children,
  onClick,
  size = "small",
  type = "button",
  className,
  disabled = false,
}: ButtonProps) => {
  // Define class names based on size
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const baseClasses =
    "group cursor-pointer w-full flex items-center justify-center py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-light";

  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        baseClasses,
        sizeClasses[size],
        disabled && "opacity-50 cursor-not-allowed hover:bg-white", // Add disabled styles
        className
      )}
      // className={`${cn(`group cursor-pointer w-full flex items-center justify-center py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-light `, sizeClasses, className)`}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
