import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "../../node_modules/react-icons/ai";

const Nav = () => {
  const [isActive, setisActive] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useRouter();
  const NavItem = ({ menuName, route }) => {
    return (
      <Link href={route}>
        <a onClick={() => handleOpen()}>
          <span
            className={`block py-2 pr-4 pl-3 md:bg-transparent md:p-0 font-bold ${
              isActive === menuName ? "active-menu" : ""
            }`}
          >
            {menuName}
          </span>
        </a>
      </Link>
    );
  };

  const menuDetail = [
    { menuName: "ABOUT", route: "/about" },
    { menuName: "CONTACT US", route: "/contact-us" },
    { menuName: "PRODUCTS", route: "/products" },
  ];

  const handleOpen = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    if (pathname === "/about") {
      setisActive("ABOUT");
    } else if (pathname === "/contact-us") {
      setisActive("CONTACT US");
    } else if (pathname === "/products") {
      setisActive("PRODUCTS");
    } else {
      setisActive("");
    }
  }, [pathname]);

  useEffect(() => {
    const isScrolling = () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", isScrolling);
  }, []);

  return (
    <nav
      className="bg-white/90 sticky top-0 w-full z-10 ease-in duration-300 border shadow-md dark:bg-gray-800 dark:border-gray-700"
      style={{ backgroundColor: isScroll ? "white" : "" }}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center">
        <Link href={"/"} className="rounded px-3 py-2" aria-current="page">
          <Image
            src={"/img/baliayu-logo.png"}
            width={100}
            height={100}
            objectFit="cover"
            alt=""
            style={{ cursor: "pointer" }}
          />
        </Link>
        <ul className="hidden sm:flex">
          {menuDetail.map((item, i) => (
            <li key={i} className={`p-4 text-black`}>
              <NavItem menuName={item.menuName} route={item.route} />
            </li>
          ))}
        </ul>

        {/* Mobile view */}
        <div
          className="block sm:hidden z-20 cursor-pointer"
          onClick={() => handleOpen()}
        >
          {isOpen ? (
            <AiOutlineClose size={20} color={isOpen ? "white" : ""} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <ul
          className={
            isOpen
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white/90 ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-white/90 ease-in duration-300"
          }
        >
          <li className="p-4 text-4xl rounded hover:bg-gray-400 text-black">
            <NavItem menuName={"HOME"} route={"/"} />
          </li>
          {menuDetail.map((item, i) => (
            <li
              key={i}
              className={`p-4 text-4xl rounded hover:bg-gray-400 text-black
              `}
            >
              <NavItem menuName={item.menuName} route={item.route} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
