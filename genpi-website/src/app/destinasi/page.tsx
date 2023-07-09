import React from "react";
import getDestinasiMetaData from "../../../components/getDestinasiMetaData";
import DestinasiPreview from "../../../components/DestinasiPreview";

const BlogPage = () => {
  const destinasiMetaData = getDestinasiMetaData();
  const destinasiPreviews = destinasiMetaData.map((destinasi) => (
    <DestinasiPreview key={destinasi.slug} {...destinasi} />
  ));
  return (
    <section className="min-h-screen py-[120px] px-[10%] bg-gray-300">
      <h2>
        <span className="bg-gradient-to-tr from-primary-500 to-primary-800">
          Destinasi Wisata Kota Dumai
        </span>
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-md py-2 mt-3">
        {destinasiPreviews}
      </div>
    </section>
  );
};

export default BlogPage;
