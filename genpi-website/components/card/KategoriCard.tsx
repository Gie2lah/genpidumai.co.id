import React from "react";

export default function KategoriCard() {
  return (
    <>
      <h2>
        <span className="bg-gradient-to-tr from-primary-500 to-primary-800">
          Kategori Menu
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-md px-0 py-2 mt-3">
        <div className="max-w-md border">
          <p>Destinasi</p>
        </div>
        <div className="bg-slate-400">
          <p>Makanan</p>
        </div>
        <div className="bg-slate-400">
          <p>Oleh-oleh</p>
        </div>
        <div className="bg-slate-400">
          <p>Penginapan</p>
        </div>
        <div className="bg-slate-400">
          <p>Event</p>
        </div>
        <div className="bg-slate-400">
          <p>Marketplace</p>
        </div>
      </div>
    </>
  );
}
