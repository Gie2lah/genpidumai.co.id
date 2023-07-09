/* eslint-disable @next/next/no-img-element */
import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getDestinasiMetaData from "../../../../components/getDestinasiMetaData";
import Image from "next/image";

const getDestinasiContent = (slug: string) => {
  const folder = "contents/destinasi/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const destinasis = getDestinasiMetaData();
  return destinasis.map((destinasi) => ({
    slug: destinasi.slug,
  }));
};

const DestinasiPage = (props: any) => {
  const slug = props.params.slug;
  const destinasi = getDestinasiContent(slug);
  return (
    <div className="text-black px-[10%] pt-[80px] bg-white min-h-screen">
      <div className="">
        <Image
          src={destinasi.data.cover}
          alt={""}
          className="rounded-lg object-cover"
          width={1200}
          height={1200 / 2}
        />
      </div>
      <h1 className="mt-4 mb-2">{destinasi.data.title}</h1>
      <p>
        Written on {destinasi.data.date} by {destinasi.data.author}
      </p>
      <div className="block lg:flex gap-10">
        <article className="w-full prose prose-blockquote:font-bold prose-headings:text-sky-700 prose-blockquote:border-sky-600 prose-blockquote:bg-gray-400 prose-blockquote:p-1 prose-img:w-[200px] prose-img:h-[200px]">
          <div className="prose-base lg:prose-base prose-a:no-underline prose-figure:w-7">
            <Markdown>{destinasi.content}</Markdown>
            <div className=""></div>
          </div>
        </article>
        <div className="mt-[120px]">
          <h3>Lastest Posts</h3>
        </div>
      </div>
    </div>
  );
};

export default DestinasiPage;
