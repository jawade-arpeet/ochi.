import React from "react";

const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`rounded-full border px-3 py-1.5 text-sm uppercase ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
