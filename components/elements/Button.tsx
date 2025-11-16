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
      className={classNames("bg-violet-600 text-white",
        { "h-10 px-4 *:text-xl rounded-lg": size === "md" },
        { "h-14 px-5 *:text-2xl rounded-xl": size === "lg" },
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
