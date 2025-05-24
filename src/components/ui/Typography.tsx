type TypographyProps = {
  children: React.ReactNode;
  color?: string;
};

const Title = ({ children, color = "text-white" }: TypographyProps) => {
  return (
    // <h1 className="text-4xl font-bold text-center text-gray-800">{children}</h1>
    <h1 className={`text-6xl md:text-8xl font-light tracking-tight ${color}`}>
      {children}
    </h1>
  );
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
