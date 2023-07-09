import React from "react";
import clsx from "clsx";

const Button = (props: { children: any; className: any }) => {
  const { children, className } = props;
  return (
    <button
      className={clsx(
        className,
        "border py-2 px-4 font-bold rounded-md shadow-md drop-shadow-md hover:scale-[1.02]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
