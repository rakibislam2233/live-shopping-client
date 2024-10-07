const Container = ({ children, className }) => {
  return (
    <div className={`w-full container mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
