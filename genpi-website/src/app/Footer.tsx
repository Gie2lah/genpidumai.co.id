/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React from "react";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoYoutube,
  IoMailOutline,
} from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import footerPicture from "../../public/images/Logo-GenPI.jpg";
import UnstyledLink from "../../components/link/UnstyledLink";

const Footer = () => {
  return (
    <footer className="pt-4">
      <hr />
      <div className="mt-4 px-[10%]">
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col max-w-md">
            <h4>Contact US</h4>
            <div className="">
              <Contact />
            </div>
          </div>
          <div className="flex flex-col max-w-md">
            <h4>Follow US</h4>
            <div className="">
              <SocialLinks />
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={footerPicture}
              alt={"footer"}
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
      <div className="text-white text-center bg-black py-[10px]">
        <p className="">© GenPI Dumai {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

function SocialLinks() {
  return (
    <div className="">
      {socials.map((social) => (
        <div className="flex items-center gap-x-4 py-2 ">
          <Link href={social.href}>
            <p>{social.icon}</p>
          </Link>
          <p className="text-base">{social.name}</p>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div id="contact">
      {contacts.map((contact) => (
        <>
          <div className="flex items-center gap-x-4 py-2 ">
            <p className="">{contact.name}</p>
            <p>{contact.desc}</p>
          </div>
        </>
      ))}
    </div>
  );
}

const contacts = [
  {
    name: <IoLocationOutline size={30} />,
    desc: `JL. Teratai, Dumai Kota, Kecamatan Dumai Kota, Kota Dumai, Riau
        28811`,
  },
  {
    name: <IoCallOutline size={30} />,
    desc: "0811-2030-0320",
  },
  {
    name: <IoMailOutline size={30} />,
    desc: "genpiDumai@gmail.com",
  },
];

const socials = [
  {
    icon: <SiInstagram size={20} />,
    href: "https://www.instagram.com/genpidumai/",
    name: "@genpidumai",
  },
  {
    icon: <SiYoutube size={20} />,
    href: "https://www.instagram.com/genpidumai/",
    name: "@genpidumai",
  },
  {
    icon: <SiTiktok size={20} />,
    href: "https://www.instagram.com/genpidumai/",
    name: "@genpidumai",
  },
];
