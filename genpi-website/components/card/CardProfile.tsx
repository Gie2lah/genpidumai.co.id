import React from "react";
import Button from "../button/Button";
import UnstyledLink from "../link/UnstyledLink";

export default function CardProfile() {
  return (
    <>
      <div className="w-[190px] h-[254px] bg-[#3405a3] rounded-[15px] shadow-[1px_5px_60px_0px]">
        <div className="w-[60%] h-[3%] bg-[#6b64f3] m-auto rounded-[0px_0px_15px_15px_rgba[16,10,136,0.42] ]"></div>
        <div className="w-[70px] h-20 bg-[#6b64f3] rounded-[15px] m-auto mt-[25px]"></div>
        <span className="font-semibold text-white block pt-[10px] text-xs "></span>
        <p className="font-semibold text-white block text-center pt-[3px] text-xs"></p>
      </div>
    </>
  );
}
