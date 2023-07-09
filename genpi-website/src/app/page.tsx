/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import getDestinasiMetaData from "../../components/getDestinasiMetaData";
import DestinasiPreview from "../../components/DestinasiPreview";
import logo from "../../public/images/Logo-GenPI2.png";
import {
  IoBedOutline,
  IoCalendarClearOutline,
  IoMapOutline,
  IoRestaurantOutline,
} from "react-icons/io5";
import UnstyledLink from "../../components/link/UnstyledLink";
import Button from "../../components/button/Button";

export default function Home() {
  const destinasiMetaData = getDestinasiMetaData();
  const destinasiPreviews = destinasiMetaData
    .slice(0, 6)
    .map((destinasi) => (
      <DestinasiPreview key={destinasi.slug} {...destinasi} />
    ));
  return (
    <>
      <section className="body bg-no-repeat bg-cover min-h-screen flex flex-col items-center pt-[120px] text-white">
        <Image src={logo} alt={""} width={200} height={200} />
        <h4 className="text-2xl tracking-widest">
          <q>Molah ke Dumai</q>
        </h4>
      </section>
      <section className="min-h-screen py-[120px] px-[10%] bg-white">
        <h2>
          <span className="bg-gradient-to-tr from-primary-500 to-primary-800">
            Menu Kategori
          </span>
        </h2>
        <div className=" bg-slate-400 rounded-sm py-2 mt-3">
          <div className="flex flex-wrap gap-3">
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
      </section>
      <section className="min-h-screen py-[120px] px-[10%] bg-white">
        <h2>
          <span className="bg-gradient-to-tr from-primary-500 to-primary-800">
            Oleh-oleh Khas Kota Dumai
          </span>
        </h2>
      </section>
    </>
  );
}
