import clsx from "clsx";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement | any> {
  children: React.ReactNode;
  className?: string;
  link?: string;
  target?: LinkProps["target"];
}

const Button: React.FC<IProps> = ({ children, className, link, ...props }) => {
  return !link ? (
    <div className="relative group w-max">
      <button
        className={clsx(
          "outline-none flex space-x-3 items-center text-[#c3cad5] text-xl font-semibold hover:text-white hover:border-white border-b border-[#c3cad5] pb-2 w-max",
          className
        )}
        {...props}
      >
        {children}
      </button>
      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
    </div>
  ) : (
    <div className="relative group w-max">
      <Link
        className={clsx(
          "outline-none flex space-x-3 items-center text-[#c3cad5] hover:text-white hover:border-white border-b border-[#c3cad5] pb-2 w-max",
          className
        )}
        to={link}
        {...props}
      >
        {children}
      </Link>
      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
    </div>
  );
};

export default Button;
