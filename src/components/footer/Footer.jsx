"use client";
import React from "react";
import footerImg from "../../assets/footer.png";
import "./footer.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  let path = usePathname();
  if (path.includes("/admin")) return <></>;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__line"></div>
        <div className="footer__wrapper">
          <div className="footer__left">
            <div className="footer__img">
              <Image src={footerImg} />
            </div>
            <p className="footer__desc">
              Your natural candle made for your home and for your wellness.
            </p>
          </div>
          <div className="footer__right">
            <ul className="footer__list">
              <li className="footer__item">Discovery</li>
              <li className="footer__item">New season</li>
              <li className="footer__item">Most searched</li>
              <li className="footer__item">Most selled</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">About</li>
              <li className="footer__item">Help</li>
              <li className="footer__item">Shipping</li>
              <li className="footer__item">Affiliate</li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">Info</li>
              <li className="footer__item">Contact us</li>
              <li className="footer__item">Privacy Policies</li>
              <li className="footer__item">Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
