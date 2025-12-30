import type { ReactNode } from "react";
import cn from "../../utils/cn";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("max-w-screen px-4 sm:px-10 h-fit", className)}>
      {children}
    </div>
  );
};

export default Container;
