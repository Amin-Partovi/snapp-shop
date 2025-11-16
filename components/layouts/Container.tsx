import classNames from "classnames";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  className?: string;
}
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={classNames(
        "w-full lg:max-w-[1440px] flex flex-col justify-between m-auto relative",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
