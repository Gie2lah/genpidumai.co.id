import React from "react";
import { DestinasiMetaData } from "./DestinasiMetaData";
import Image from "next/image";
import UnstyledLink from "./link/UnstyledLink";

const DestinasiPreview = (props: DestinasiMetaData) => {
  return (
    <div className="card mb-1">
      <UnstyledLink href={`/destinasi/${props.slug}`}>
        <Image
          src={props.cover}
          alt={""}
          width={1200}
          height={(1200 * 2) / 5}
          className="card-image block"
        />
        <div className="py-2 mt-3 px-4">
          <div className="mt-1">
            <h4 className="font-bold text-lg">{props.title}</h4>
            <p className="text-sm ">{props.date}</p>
          </div>
          <div className="mt-1">
            <p className="">{props.desc}</p>
          </div>
        </div>
      </UnstyledLink>
    </div>
  );
};

export default DestinasiPreview;
