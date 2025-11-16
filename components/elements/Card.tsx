import classNames from "classnames";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}
const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={classNames("rounded-xl overflow-hidden shadow-lg", className)}
    >
      {children}
    </div>
  );
};

export default Card;
