/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import getDestinasiMetaData from "../../components/getDestinasiMetaData";
import logo from "../../public/images/Logo-GenPI2.png";
import { IoRestaurantOutline } from "react-icons/io5";
import UnstyledLink from "../../components/link/UnstyledLink";
import Button from "../../components/button/Button";
import DestinasiPreview from "../../components/DestinasiPreview";

export default function Home() {
  const destinasiMetaData = getDestinasiMetaData();
  const destinasiPreviews = destinasiMetaData
    .slice(0, 6)
    .map((destinasi) => (
      <DestinasiPreview key={destinasi.slug} {...destinasi} />
    ));
  return (
    <>
      <section className="body min-h-screen py-[120px] px-[10%] text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <h4 className="tracking-wider">Welcome to</h4>
            <h1 className="mb-3 md:leading-none lg:leading-tight">
              Generasi Pesona Indonesia
              <span className="text-blue-600"> Kota Dumai</span>
            </h1>
            <p className="leading-relaxed mb-3">
              Temukan berbagai macam objek wisata, cinderamata, budaya, kuliner,
              event serta kreativitas lainnya.
            </p>
            <Button className="bg-blue-500 border-blue-500">
              <UnstyledLink href="#menu-kategori" className="text-black">
                Explore GenPI
              </UnstyledLink>
            </Button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image src={logo} alt={""} width={400} height={400} />
          </div>
        </div>
      </section>
      <section className="min-h-screen py-[120px] px-[10%] bg-white">
        <h2 id="menu-kategori">
          <span className="bg-gradient-to-tr from-primary-500 to-primary-800">
            Menu Kategori
          </span>
        </h2>
        <div className="rounded-sm py-2 mt-3">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="bg-white p-4 max-w-xs rounded-md ">
              <ul className="p-4">
                <UnstyledLink href={"#"}>
                  <div className="flex items-center justify-center">
                    <IoRestaurantOutline className="lg:text-5xl text-4xl" />
                  </div>
                  <p className="text-center mt-3 font-bold">Restaurant</p>
                </UnstyledLink>
              </ul>
            </div>
            <div className="bg-white p-4 max-w-xs rounded-md ">
              <ul className="p-4">
                <UnstyledLink href={"#"}>
                  <div className="flex items-center justify-center">
                    <IoRestaurantOutline className="lg:text-5xl text-4xl" />
                  </div>
                  <p className="text-center mt-3 font-bold">Restaurant</p>
                </UnstyledLink>
              </ul>
            </div>
            <div className="bg-white p-4 max-w-xs rounded-md ">
              <ul className="p-4">
                <UnstyledLink href={"#"}>
                  <div className="flex items-center justify-center">
                    <IoRestaurantOutline className="lg:text-5xl text-4xl" />
                  </div>
                  <p className="text-center mt-3 font-bold">Restaurant</p>
                </UnstyledLink>
              </ul>
            </div>
            <div className="bg-white p-4 max-w-xs rounded-md ">
              <ul className="p-4">
                <UnstyledLink href={"#"}>
                  <div className="flex items-center justify-center">
                    <IoRestaurantOutline className="lg:text-5xl text-4xl" />
                  </div>
                  <p className="text-center mt-3 font-bold">Restaurant</p>
                </UnstyledLink>
              </ul>
            </div>
            <div className="bg-white p-4 max-w-xs rounded-md ">
              <ul className="p-4">
                <UnstyledLink href={"#"}>
                  <div className="flex items-center justify-center">
                    <IoRestaurantOutline className="lg:text-5xl text-4xl" />
                  </div>
                  <p className="text-center mt-3 font-bold">Restaurant</p>
                </UnstyledLink>
              </ul>
            </div>
            <div className="bg-white p-4 max-w-xs rounded-md ">
              <ul className="p-4">
                <UnstyledLink href={"#"}>
                  <div className="flex items-center justify-center">
                    <IoRestaurantOutline className="lg:text-5xl text-4xl" />
                  </div>
                  <p className="text-center mt-3 font-bold">Restaurant</p>
                </UnstyledLink>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen py-[120px] px-[10%] bg-gray-300">
        <h2>
          <span className="bg-gradient-to-tr from-primary-500 to-primary-800">
            Destinasi Wisata Kota Dumai
          </span>
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 mb-1 ">
          {destinasiPreviews}
        </div>
        <Button>
          <UnstyledLink href="/destinasi">Wisata Lainnya</UnstyledLink>
        </Button>
        <div className="hidden">
          <button className="border py-2 px-4 bg-white font-bold rounded-md shadow-md drop-shadow-md hover:scale-[1.02]">
            get
          </button>
        </div>
      </section>
      <section className="min-h-screen py-[120px] px-[10%] bg-white">
        <h2>
          <span className="bg-gradient-to-tr from-primary-500 to-primary-800">
            Oleh-oleh Khas Kota Dumai
          </span>
        </h2>
      </section>
      <section className="min-h-screen py-[120px] px-[10%] bg-white"></section>
    </>
  );
}
