"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import "./header.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const Header = () => {
  const [show, setShow] = useState(false);
  const cartData = useSelector((state) => state.cart.value);
  const wishlist = useSelector((state) => state.wishlist.value);

  let path = usePathname();
  if (path.includes("/admin")) return <></>;
  return (
    <header className="header">
      <div
        className={`header__overlay ${show ? "show-overlay" : ""}`}
        onClick={() => setShow((prev) => false)}
      ></div>
      <div className="container header__container">
        <div className="header__logo">
          <Link href={"/"}>
            <Image width={126} height={34} src={logo} />
          </Link>
        </div>
        <ul className={`header__list ${show ? "show" : ""}`}>
          <li
            className="header__close"
            onClick={() => setShow((prev) => false)}
          >
            <IoIosCloseCircle />
          </li>
          <li className="header__item">
            <Link href={"/wishlist"}>Wishlist</Link>
            <sup>{wishlist.length}</sup>
          </li>
          <li className="header__item">
            <Link href={"/cart"}>Cart </Link>
            <sup>{cartData.length}</sup>
          </li>
          <li className="header__item">
            <Link href={"/admin/createProduct"}>Admin </Link>
          </li>
        </ul>
        <div className="header__icons">
          <div className="header__icon">
            <IoPersonOutline />
          </div>
          <div className="header__icon">
            <IoCartOutline />
          </div>
        </div>
        <div className="header__bar" onClick={() => setShow((prev) => !prev)}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
