import React from "react";

export default function Animasi() {
  return (
    <div className="flex ">
      <div className="text-black text-xl">Temukan</div>
      <ul className="ml-[15px] h-[90px] leading-[90px] overflow-hidden">
        <li className="ketik">
          <span className="span">Objek Wisata</span>
        </li>
        <li className="ketik">
          <span className="span">Kuliner</span>
        </li>
        <li className="ketik">
          <span className="span">Penginapan</span>
        </li>
        <li className="ketik">
          <span className="span">Cinderamata</span>
        </li>
        <li className="ketik">
          <span className="span">Event</span>
        </li>
      </ul>
    </div>
  );
}
