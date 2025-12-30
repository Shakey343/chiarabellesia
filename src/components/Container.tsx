import cn from "../../utils/cn";

const Container = ({ className, children }) => {
  return (
    <div className={cn("max-w-screen mx-6 lg:px-10 h-fit", className)}>
      {children}
    </div>
  );
};

export default Container;
