import React from "react";
import clsx from "clsx";

const Button = (props: { children: any }) => {
  const { children } = props;
  return (
    <button className="text-red border py-2 px-4 bg-white font-bold rounded-md shadow-md drop-shadow-md hover:scale-[1.02]">
      {children}
    </button>
  );
};

export default Button;
