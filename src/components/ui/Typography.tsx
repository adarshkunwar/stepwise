import { type JSX } from "react";
type TypographyProps = {
  children: React.ReactNode;
  color?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Title = ({
  level = 1,
  children,
  color = "text-white",
}: TypographyProps) => {
  // Determine heading tag dynamically
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // You might want to vary text sizes based on level too, for example:
  const sizeClasses = {
    1: "text-6xl md:text-8xl font-light tracking-tight",
    2: "text-5xl md:text-7xl font-light tracking-tight",
    3: "text-4xl md:text-6xl font-light tracking-tight",
    4: "text-3xl md:text-5xl font-light tracking-tight",
    5: "text-2xl md:text-4xl font-light tracking-tight",
    6: "text-xl md:text-3xl font-light tracking-tight",
  };

  return <Tag className={`${sizeClasses[level]} ${color}`}>{children}</Tag>;
};

const SubTitle = ({ children, color = "text-gray-400" }: TypographyProps) => {
  return (
    <p
      className={`text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed ${color}`}
    >
      {children}
    </p>
  );
};

const Text = ({ children, color = "text-gray-600" }: TypographyProps) => {
  return <p className={`text-sm ${color} font-light`}>{children}</p>;
};

export { Title, SubTitle, Text };
