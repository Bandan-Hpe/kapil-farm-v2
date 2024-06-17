import { ReactNode, FC } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1200px] bg-white mx-auto min-h-screen flex flex-col border-l border-r">
      {children}
    </div>
  );
};

export default Container;
