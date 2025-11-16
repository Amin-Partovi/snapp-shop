"use client";
import classNames from "classnames";

interface ButtonProps extends React.ComponentProps<"button"> {
  iconLeft?: React.ReactElement | null;
  iconRight?: React.ReactElement | null;
  size?: "sm" | "md" | "lg";
  fluid?: boolean;
  iconView?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  iconLeft = null,
  iconRight = null,
  size = "md",
  children,
  iconView,
  fluid,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "bg-violet-600 text-white",
        { "h-8 px-3 *:text-sm rounded-lg": size === "md" },
        { "h-12 px-5 *:text-lg rounded-xl": size === "lg" },
        { "aspect-square px-0!": iconView },
        { "w-full": fluid, "w-fit": !fluid },

        className
      )}
    >
      <div className={classNames("btn-content ")}>
        {iconLeft && <div className="text-3xl"> {iconLeft}</div>}
        {children && <span className=" font-medium">{children}</span>}
        {iconRight && <div className="text-3xl"> {iconRight}</div>}
      </div>
    </button>
  );
};

export default Button;
