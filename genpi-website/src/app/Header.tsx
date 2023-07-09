import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/images/Logo-GenPI2.png";
import UnstyledLink from "../../components/link/UnstyledLink";
import clsx from "clsx";

const Header = () => {
  return (
    <header className=" right-0 top-0 left-0 fixed z-30 text-black font-bold ">
      <nav className="flex items-center justify-between px-[10%] py-[10px] shadow-md drop-shadow-md bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
        <Link href="/">
          <Image src={logo} alt={"logo-genpi"} width={50} height={50} />
        </Link>
        <ul className="hidden sm:flex gap-4">
          {links.map(({ href, label }) => (
            <>
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  className={clsx("hover:text-[#9cc3f3]")}
                >
                  {label}
                </UnstyledLink>
              </li>
            </>
          ))}
        </ul>
        <div className="sm:hidden block cursor-pointer">
          <button>
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const links = [
  { href: "/", label: "Home" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/profile", label: "Profile" },
  { href: "/event", label: "Event" },
  // { href: "/oleh-oleh", label: "Oleh-oleh" },
  // { href: "/penginapan", label: "Penginapan" },
  // { href: "/makanan", label: "Makanan" },
];
